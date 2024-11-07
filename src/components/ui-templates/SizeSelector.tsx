import { Variant } from "@/domain/definitionsTypes";
import React from "react";

interface SizeSelectorProps {
  variants: Variant[];
  selectedSize: string;
  onSizeSelect: (size: string) => void;
}

export default function SizeSelector({
  variants,
  selectedSize,
  onSizeSelect,
}: SizeSelectorProps) {
  // Extraer los tamaños únicos de las variantes
  const sizes = Array.from(
    new Set(variants.map((variant) => variant.attr.Talle))
  );

  return (
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-sm font-medium text-foreground">Talle</div>
      <div className="justify-start items-center gap-2 flex">
        {sizes.map((size) => (
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
                  : "border-border hover:opacity-80"
              }
            `}
          >
            <div className="text-foreground text-xs font-semibold hover:text-gray-500 uppercase tracking-wide">
              {size}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
