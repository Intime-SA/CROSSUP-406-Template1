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
          {discountIsActive && !isFixedDiscount ? (
            <div
              className="text-xs font-semibold"
              style={{ color: "var(--primary-text)" }}
            >
              {formatPrice(product.variants[0].price * (1 - discountAmount))}
            </div>
          ) : (
            <div
              className="text-xs font-semibold"
              style={{ color: "var(--primary-text)" }}
            >
              {isFixedDiscount
                ? formatPrice(product.variants[0].price - discountAmount)
                : formatPrice(product.variants[0].price)}
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
          {formatPrice(
            selectedVariant?.price || product.variants[0]?.price || 0
          )}
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
