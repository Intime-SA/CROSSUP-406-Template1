import React from "react";
import { ProductInfoProps } from "@/domain/definitionsTypes";
import { formatPrice } from "@/lib/utils";
import { useProductSelectors } from "@/hooks/useSelectors";

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedVariant,
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
    <div className="self-stretch flex-col justify-start items-start gap-2 flex">
      <div className="self-stretch font-semibold text-foreground">
        {product.name.es}
        {visibilityDescription &&
          product.description.es &&
          ` + ${product.description.es}`}
      </div>

      {hasShortage && (
        <div className="inline-flex items-center px-1.5 py-0.5 border border-[var(--border-components)] w-fit">
          <div className="text-[var(--border-components)] text-xs text-center font-semibold uppercase tracking-wide">
            {hasShortageText}
          </div>
        </div>
      )}

      <div className="self-stretch justify-between items-center flex">
        <div className="flex items-center gap-2">
          {isFixedDiscount ? (
            <div className="text-sm font-semibold text-primary">
              {formatPrice((selectedVariant?.price || 0) - discountAmount)}
            </div>
          ) : (
            <div className="text-sm font-semibold text-primary">
              {formatPrice(selectedVariant?.price || 0)}
            </div>
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
          {formatPrice(selectedVariant?.price || 0)}
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
