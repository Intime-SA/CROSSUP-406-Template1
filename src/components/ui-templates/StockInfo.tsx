import React from "react";
import { Variant } from "@/domain/definitionsTypes";

interface StockInfoProps {
  selectedVariant: Variant | null;
}

const StockInfo: React.FC<StockInfoProps> = ({ selectedVariant }) => {
  if (!selectedVariant) return null;

  return (
    <div className="self-stretch text-sm text-foreground">
      Stock disponible: {selectedVariant.stock}
    </div>
  );
};

export default StockInfo;
