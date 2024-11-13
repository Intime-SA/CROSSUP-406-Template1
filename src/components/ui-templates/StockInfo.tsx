import React from "react";
import { StockInfoProps } from "@/domain/definitionsTypes";

// info stock, no se usa este componente por ahora.
const StockInfo: React.FC<StockInfoProps> = ({ selectedVariant }) => {
  if (!selectedVariant) return null;

  return (
    <div className="self-stretch text-sm text-foreground">
      Stock disponible: {selectedVariant.stock}
    </div>
  );
};

export default StockInfo;
