"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { TargetProduct } from "@/domain/definitionsTypes";
import { formatPrice } from "@/lib/utils";
import { CountdownTimer } from "./CountDownTimer";
import { addToCartHandler } from "@/lib/functions";
import { useProductSelectors } from "@/hooks/useSelectors";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

interface RecommendedProductsProps {
  products: TargetProduct[] | null;
  openModalViewProduct: (product: TargetProduct) => void;
  onClose: () => void;
}

export default function RecommendedProductsHorizontal({
  products,
  openModalViewProduct,
  onClose,
}: RecommendedProductsProps) {
  const [clickedProducts, setClickedProducts] = useState<Set<TargetProduct>>(
    new Set()
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const {
    quantity,
    visibilityDescription,
    amountOfTime,
    timerGlobal,
    discountIsActive,
    discountAmount,
    isFixedDiscount,
    hasShortage,
    hasShortageText,
    hasShortageGlobal,
    canModifyQuantity,
  } = useProductSelectors();

  const handleAddToCartAndClose = (target: TargetProduct) => {
    if (!target) {
      console.error("Producto no encontrado");
      return;
    }

    if (target.variants.length > 1 || canModifyQuantity) {
      openModalViewProduct(target);
    } else {
      const variantToAdd = target.variants[0] || target;
      setTimeout(onClose, 500);
      addToCartHandler(variantToAdd, quantity);
      setClickedProducts((prev) => new Set(prev).add(target));
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
      if (direction === "left") {
        scrollContainerRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="flex flex-start flex-col gap-2 w-full">
      <div className="mb-4 flex items-center gap-2">
        {timerGlobal && amountOfTime !== 0 && (
          <div className="h-[30px] px-2 py-1 border border-[var(--border-components)] justify-start items-center gap-1 inline-flex">
            <CountdownTimer initialTime={amountOfTime} />
          </div>
        )}
        {hasShortageGlobal && (
          <div className="h-[30px] px-2 py-1 border border-[var(--border-components)] justify-start items-center gap-1 inline-flex">
            <p className="text-xs text-[var(--border-components)] font-semibold uppercase tracking-wide">
              {hasShortageText}
            </p>
          </div>
        )}
      </div>

      {products && products.length > 0 ? (
        <div className="relative w-full sm:overflow-hidden">
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 rounded-full p-1 shadow-md hidden sm:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-2 pb-2 scroll-smooth sm:w-[calc(100%+40px)]"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              width: "calc(min(90vw, 669px) + 2px)",
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex-shrink-0 w-[calc(min(45vw,150px))]`}
              >
                {index !== products.length - 1 && (
                  <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white z-10 sm:block" />
                )}
                <div className="flex flex-col gap-2">
                  <div className="w-full h-[150px] relative">
                    <Image
                      className="border border-[var(--neutrals-disabled)] rounded-sm object-cover"
                      src={product.images[0].src}
                      alt={product.name.es}
                      layout="fill"
                    />
                    <button
                      onClick={() => handleAddToCartAndClose(product)}
                      className={`absolute bottom-2 right-2 h-7 p-2 bg-white rounded-[20px] border ${
                        clickedProducts.has(product)
                          ? "border-green-500"
                          : "border-[var(--border-components)]"
                      } transition-colors duration-200 ease-in-out hover:opacity-80 focus:outline-none flex items-center justify-center`}
                    >
                      <Plus
                        className={`w-3 h-3 ${
                          clickedProducts.has(product)
                            ? "text-green-500"
                            : "text-[var(--border-components)]"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => openModalViewProduct(product)}
                      className={`text-left text-xs font-medium focus:outline-none transition-colors duration-200 ease-in-out hover:text-[#4a4760] ${
                        visibilityDescription ? "line-clamp-2" : ""
                      }`}
                      style={{ color: "var(--primary-text)" }}
                    >
                      {product.name.es}
                      {visibilityDescription &&
                        product.description.es &&
                        ` + ${product.description.es}`}
                    </button>

                    {hasShortage && !hasShortageGlobal && (
                      <div className="inline-flex items-center px-1.5 py-0.5 border border-[var(--border-components)] w-fit">
                        <div className="text-[var(--border-components)] text-xs text-center font-semibold uppercase tracking-wide">
                          {hasShortageText}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-1 flex-wrap">
                      {discountIsActive && !isFixedDiscount ? (
                        <div
                          className="text-xs font-semibold"
                          style={{ color: "var(--primary-text)" }}
                        >
                          {formatPrice(
                            product.variants[0].price * (1 - discountAmount)
                          )}
                        </div>
                      ) : (
                        <div
                          className="text-xs font-semibold"
                          style={{ color: "var(--primary-text)" }}
                        >
                          {isFixedDiscount
                            ? formatPrice(
                                product.variants[0].price - discountAmount
                              )
                            : formatPrice(product.variants[0].price)}
                        </div>
                      )}

                      {discountIsActive && (
                        <div className="text-[#d1d1d1] text-[10px] font-medium line-through">
                          {formatPrice(product.variants[0].price)}
                        </div>
                      )}
                    </div>
                    {discountIsActive && (
                      <span className="text-[var(--border-components)] font-semibold text-[10px]">
                        {isFixedDiscount
                          ? `${formatPrice(discountAmount)} OFF`
                          : `${discountAmount * 100}% OFF`}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 rounded-full p-1 shadow-md hidden sm:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <p>No hay productos recomendados disponibles.</p>
      )}
    </div>
  );
}
