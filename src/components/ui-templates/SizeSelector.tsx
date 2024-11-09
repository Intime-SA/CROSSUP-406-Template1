import React from "react";
import { Variant } from "@/domain/definitionsTypes";

interface SizeSelectorProps {
  variants: Variant[];
  availableSizes: string[];
  selectedSize: string;
  onSizeSelect: (size: string) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  variants,
  availableSizes,
  selectedSize,
  onSizeSelect,
}) => {
  const allSizes = Array.from(
    new Set(variants.map((variant) => variant.attr.Talle))
  );

  return (
    <div className="self-stretch justify-between items-center inline-flex mb-10">
      <div className="text-sm font-medium text-foreground">Talle</div>
      <div className="justify-start items-center gap-2 flex">
        {allSizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
            className={`
              px-2 py-1
              flex justify-center items-center
              border
              transition-all duration-200
              ${
                selectedSize === size
                  ? "bg-[var(--components-bg)] border-[var(--primary-text)]"
                  : availableSizes.includes(size)
                  ? "border-border hover:opacity-80"
                  : "border-border opacity-50 cursor-not-allowed"
              }
            `}
            disabled={!availableSizes.includes(size)}
          >
            <div className="text-foreground text-xs font-semibold hover:text-gray-500 uppercase tracking-wide">
              {size}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
