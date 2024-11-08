import React from "react";
import { ProductInfoProps } from "@/domain/definitionsTypes";
import { formatPrice } from "@/lib/utils";
import { useProductSelectors } from "@/hooks/useSelectors";
import { useDynamicFont } from "@/app/fonts/fonts";

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedVariant,
}) => {
  const dynamicFont = useDynamicFont(); // Get the current font style
  const {
    visibilityDescription,
    hasShortage,
    discountIsActive,
    discountAmount,
    isFixedDiscount,
    hasShortageText,
  } = useProductSelectors();

  return (
    <div
      className="self-stretch flex-col justify-start items-start gap-2 flex"
      style={{ fontFamily: dynamicFont.style.fontFamily }}
    >
      <div
        className="self-stretch font-semibold text-foreground"
        style={{ fontFamily: dynamicFont.style.fontFamily }}
      >
        {product.name.es}
        {visibilityDescription &&
          product.description.es &&
          ` + ${product.description.es}`}
      </div>

      {hasShortage && (
        <div
          className="inline-flex items-center px-1.5 py-0.5 border border-[var(--border-components)] w-fit"
          style={{ fontFamily: dynamicFont.style.fontFamily }}
        >
          <div className="text-[var(--border-components)] text-xs text-center font-semibold uppercase tracking-wide">
            {hasShortageText}
          </div>
        </div>
      )}

      <div
        className="self-stretch justify-between items-center flex"
        style={{ fontFamily: dynamicFont.style.fontFamily }}
      >
        <div className="flex items-center gap-2">
          {isFixedDiscount ? (
            <div
              className="text-sm font-semibold text-primary"
              style={{ fontFamily: dynamicFont.style.fontFamily }}
            >
              {formatPrice((selectedVariant?.price || 0) - discountAmount)}
            </div>
          ) : (
            <div
              className="text-sm font-semibold text-primary"
              style={{ fontFamily: dynamicFont.style.fontFamily }}
            >
              {formatPrice(selectedVariant?.price || 0)}
            </div>
          )}

          {!isFixedDiscount ? (
            <span
              className="text-[var(--border-components)] font-semibold text-sm"
              style={{ fontFamily: dynamicFont.style.fontFamily }}
            >
              {discountAmount * 100}% OFF
            </span>
          ) : (
            <span
              className="text-[var(--border-components)] font-semibold text-sm"
              style={{ fontFamily: dynamicFont.style.fontFamily }}
            >
              {formatPrice(discountAmount)} OFF
            </span>
          )}
        </div>
      </div>

      {discountIsActive && (
        <div
          className="text-[var(--neutrals-disabled)] text-xs font-medium line-through"
          style={{ fontFamily: dynamicFont.style.fontFamily }}
        >
          {formatPrice(selectedVariant?.price || 0)}
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
