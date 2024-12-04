import React, { useState } from "react";
import Image from "next/image";
import {
  RecommendedProductsProps,
  TargetProduct,
  TextShortage,
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
    hasShortageUnit,
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

  function getShortageText(value: number): string {
    return TextShortage[value] || TextShortage[0];
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4 flex items-center gap-2">
        {timerGlobal && amountOfTime !== 0 && (
          <div className="h-[30px] px-2 py-1 border border-[var(--border-components)] justify-start items-center gap-1 inline-flex">
            <CountdownTimer initialTime={amountOfTime} />
          </div>
        )}

        {hasShortage && !hasShortageGlobal && (
          <div className="h-[30px] px-2 py-1 border border-[var(--border-components)] justify-start items-center gap-1 inline-flex">
            <p className=" text-xs text-[var(--border-components)] font-semibold uppercase tracking-wide">
              {getShortageText(hasShortageText)}
            </p>
          </div>
        )}
      </div>

      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="flex items-center gap-4">
            {/*             <div className="w-[116px] max-w-[116px]">
              <Image
                className="border border-[var(--neutrals-disabled)] rounded-sm"
                src={product.images[0].src}
                alt={product.name.es}
                width={116}
                height={116}
              />
            </div> */}
            <div className="w-[73.65px] h-[73.65px] bg-[#f0f0f0]" />
            <div className="flex-1 flex flex-col gap-2">
              {/*               <button
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
              </button> */}

              <div>
                <div className="w-[158.72px] h-[15.24px] bg-[#f0f0f0] mb-2" />

                <div className="w-[158.72px] h-[15.24px] bg-[#f0f0f0]" />
              </div>
              <div className="flex items-center gap-2">
                {discountIsActive && !isFixedDiscount ? (
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--primary-text)" }}
                  >
                    {/*                     {formatPrice(
                      product.variants[0].price * (1 - discountAmount)
                    )} */}
                    <span className="font-semibold">$X.XXX,XX</span>
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

                {/*                 {discountIsActive && (
                  <div className="text-[#d1d1d1] text-xs font-medium line-through">
                    {formatPrice(product.variants[0].price)}
                  </div>
                )} */}
                {discountIsActive && (
                  <div className="text-[#d1d1d1] text-xs font-medium line-through">
                    X.XXX,XX
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                {discountIsActive && (
                  <span className="text-[var(--border-components)] font-semibold text-sm">
                    {isFixedDiscount
                      ? `$ X.XXX,XX OFF`
                      : `${discountAmount}% OFF`}
                  </span>
                )}
              </div>
              {hasShortageGlobal &&
                product.variants[0].stock > hasShortageUnit && (
                  <div className="inline-flex items-center px-1.5 py-0.5 border border-[var(--border-components)] w-fit">
                    <div className="text-[var(--border-components)] text-xs text-center font-semibold uppercase tracking-wide">
                      {getShortageText(hasShortageText)}
                    </div>
                  </div>
                )}
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
