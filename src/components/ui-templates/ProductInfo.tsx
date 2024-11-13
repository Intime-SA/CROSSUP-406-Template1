import React from "react";
import { ProductInfoProps } from "@/domain/definitionsTypes";
import { formatPrice } from "@/lib/utils";
import { useProductSelectors } from "@/hooks/useSelectors";

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedVariant,
  showMessage,
}) => {
  const {
    visibilityDescription,
    hasShortage,
    discountIsActive,
    discountAmount,
    isFixedDiscount,
    hasShortageText,
  } = useProductSelectors();

  return (
    <div className="self-stretch flex-col justify-start items-start gap-2 flex text-[var(--primary-text)]">
      <div className="self-stretch font-semibold text-foreground text-[var(--primary-text)]">
        <span className="text-[var(--primary-text)]">
          {product.name.es}
          {visibilityDescription &&
            product.description.es &&
            ` + ${product.description.es}`}
        </span>
      </div>

      {hasShortage && (
        <div className="inline-flex items-center px-1.5 py-0.5 border border-[var(--border-components)] w-fit">
          <div className="text-[var(--border-components)] text-xs text-center font-semibold uppercase tracking-wide">
            <span className="text-[var(--border-components)]">
              {hasShortageText}
            </span>
          </div>
        </div>
      )}

      <div className="self-stretch justify-between items-center flex">
        <div className="flex items-center gap-2">
          {isFixedDiscount ? (
            <span className="text-sm font-semibold text-[var(--primary-text)]">
              {formatPrice(
                (selectedVariant?.price || product.variants[0]?.price || 0) -
                  discountAmount
              )}
            </span>
          ) : (
            <span className="text-sm font-semibold text-[var(--primary-text)]">
              {formatPrice(
                selectedVariant?.price || product.variants[0]?.price || 0
              )}
            </span>
          )}

          {!isFixedDiscount ? (
            <span className="text-[var(--border-components)] font-semibold text-sm">
              {discountAmount * 100}% OFF
            </span>
          ) : (
            <span className="text-[var(--border-components)] font-semibold text-sm">
              {formatPrice(discountAmount)} OFF
            </span>
          )}
        </div>
      </div>

      {discountIsActive && (
        <div className="text-[var(--neutrals-disabled)] text-xs font-medium line-through">
          {formatPrice(
            selectedVariant?.price || product.variants[0]?.price || 0
          )}
        </div>
      )}
      {showMessage && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="h-[37px] p-2 bg-[#f9f8ff] rounded-lg shadow border border-[#e3e3e3] justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 text-[#2a2742] text-sm font-normal">
              Por favor, selecciona una opción de cada variación
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
