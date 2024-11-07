import React from "react";
import { Variant } from "@/domain/definitionsTypes";

interface ColorSelectorProps {
  variants: Variant[];
  availableColors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  variants,
  availableColors,
  selectedColor,
  onColorSelect,
}) => {
  const allColors = Array.from(
    new Set(variants.map((variant) => variant.attr.Color))
  );

  return (
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-sm font-medium text-foreground">Color</div>
      <div className="justify-end items-center gap-2 flex">
        {allColors.map((color) => (
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
                  : availableColors.includes(color)
                  ? "border-border hover:opacity-80"
                  : "border-border opacity-50 cursor-not-allowed"
              }
            `}
            aria-label={`Select color ${color}`}
            disabled={!availableColors.includes(color)}
          >
            <span className="text-xs font-medium overflow-hidden w-full text-center">
              {color}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
