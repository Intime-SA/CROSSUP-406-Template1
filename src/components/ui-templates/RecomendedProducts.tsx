import React, { useState } from "react";
import Image from "next/image";
import {
  RecommendedProductsProps,
  TargetProduct,
} from "@/domain/definitionsTypes";
import { formatPrice } from "@/lib/utils";
import AddButton from "./AddButtom";
import { CountdownTimer } from "./CountDownTimer";
import { addToCartHandler } from "@/lib/functions";
import { useProductSelectors } from "@/hooks/useSelectors";

export default function RecommendedProducts({
  products,
  openModalViewProduct,
  onClose,
}: RecommendedProductsProps) {
  const [clickedProducts, setClickedProducts] = useState<Set<TargetProduct>>(
    new Set()
  );

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

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4 flex items-center gap-2">
        {timerGlobal && amountOfTime !== 0 && (
          <div className="h-[30px] px-2 py-1 border border-[var(--border-components)] justify-start items-center gap-1 inline-flex">
            <CountdownTimer initialTime={amountOfTime} />
          </div>
        )}
        {hasShortageGlobal && (
          <div className="h-[30px] px-2 py-1 border border-[var(--border-components)] justify-start items-center gap-1 inline-flex">
            <p className=" text-xs text-[var(--border-components)] font-semibold uppercase tracking-wide">
              {hasShortageText}
            </p>
          </div>
        )}
      </div>

      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="flex items-center gap-4">
            <div className="w-[116px] max-w-[116px]">
              <Image
                className="border border-[var(--neutrals-disabled)] rounded-sm"
                src={product.images[0].src}
                alt={product.name.es}
                width={116}
                height={116}
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <button
                onClick={() => openModalViewProduct(product)}
                className={`text-left text-sm font-medium focus:outline-none transition-colors duration-200 ease-in-out hover:text-[#4a4760] ${
                  visibilityDescription ? "line-clamp-3" : ""
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
              <div className="flex items-center gap-2">
                {discountIsActive && !isFixedDiscount ? (
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--primary-text)" }}
                  >
                    {formatPrice(
                      product.variants[0].price * (1 - discountAmount)
                    )}
                  </div>
                ) : (
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--primary-text)" }}
                  >
                    {isFixedDiscount
                      ? formatPrice(product.variants[0].price - discountAmount)
                      : formatPrice(product.variants[0].price)}
                  </div>
                )}

                {discountIsActive && (
                  <div className="text-[#d1d1d1] text-xs font-medium line-through">
                    {formatPrice(product.variants[0].price)}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                {discountIsActive && (
                  <span className="text-[var(--border-components)] font-semibold text-sm">
                    {isFixedDiscount
                      ? `${formatPrice(discountAmount)} OFF`
                      : `${discountAmount * 100}% OFF`}
                  </span>
                )}
              </div>
            </div>

            <AddButton
              product={product}
              clickedProducts={clickedProducts}
              handleAddToCartAndClose={handleAddToCartAndClose}
            />
          </div>
        ))
      ) : (
        <p>No hay productos recomendados disponibles.</p>
      )}
    </div>
  );
}
