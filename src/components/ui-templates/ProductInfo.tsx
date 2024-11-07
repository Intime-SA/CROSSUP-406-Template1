import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ViewProductProps, Variant } from "@/domain/definitionsTypes";
import { formatPrice } from "@/lib/utils";

interface ProductInfoProps {
  product: ViewProductProps["product"];
  selectedVariant: Variant | null;
  quantity: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedVariant,
}) => {
  const visibilityDescription = useSelector(
    (state: RootState) => state.promotion.visibilityDescription
  );
  const lastUnidad = useSelector(
    (state: RootState) => state.promotion.lastUnidad
  );
  const offUnidad = useSelector(
    (state: RootState) => state.promotion.offUnidad
  );
  const offQuantity = useSelector(
    (state: RootState) => state.promotion.offQuantity
  );
  const isFixedDiscount = useSelector(
    (state: RootState) => state.promotion.fixedDiscount
  );
  const lastUnidadText = useSelector(
    (state: RootState) => state.promotion.lastUnidadText
  );

  return (
    <div className="self-stretch flex-col justify-start items-start gap-2 flex">
      <div className="self-stretch font-semibold text-foreground">
        {product.name.es}
        {visibilityDescription &&
          product.description.es &&
          ` + ${product.description.es}`}
      </div>

      {lastUnidad && (
        <div className="inline-flex items-center px-1.5 py-0.5 border border-[#00806e] w-fit">
          <div className="text-[#00806e] text-xs text-center font-semibold uppercase tracking-wide">
            {lastUnidadText}
          </div>
        </div>
      )}

      <div className="self-stretch justify-between items-center flex">
        <div className="flex items-center gap-2">
          {isFixedDiscount ? (
            <div className="text-sm font-semibold text-primary">
              {formatPrice((selectedVariant?.price || 0) - offQuantity)}
            </div>
          ) : (
            <div className="text-sm font-semibold text-primary">
              {formatPrice(selectedVariant?.price || 0)}
            </div>
          )}

          {!isFixedDiscount ? (
            <span className="text-[#00806e] font-semibold text-sm">
              {offQuantity * 100}% OFF
            </span>
          ) : (
            <span className="text-[#00806e] font-semibold text-sm">
              {formatPrice(offQuantity)} OFF
            </span>
          )}
        </div>
      </div>

      {offUnidad && (
        <div className="text-[#d1d1d1] text-xs font-medium line-through">
          {formatPrice(selectedVariant?.price || 0)}
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
