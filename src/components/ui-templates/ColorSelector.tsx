import React from "react";
import { Variant } from "@/domain/definitionsTypes";

interface ColorSelectorProps {
  variants: Variant[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export default function ColorSelector({
  variants,
  selectedColor,
  onColorSelect,
}: ColorSelectorProps) {
  // Extraer colores únicos de las variantes
  const uniqueColors = Array.from(
    new Set(variants.map((variant) => variant.attr.Color))
  );

  return (
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-sm font-medium text-foreground">Color</div>
      <div className="justify-end items-center gap-2 flex">
        {uniqueColors.map((color) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
            className={`
p-1
              flex justify-center items-center
              border rounded-sm
              transition-all duration-200
              ${
                selectedColor === color
                  ? "bg-[var(--components-bg)] border-[var(--primary-text)]"
                  : "border-border hover:opacity-80"
              }
            `}
            aria-label={`Select color ${color}`}
          >
            <span className="text-xs font-medium overflow-hidden  w-full text-center">
              {color}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
