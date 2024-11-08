import React from "react";
import { ColorSelectorProps } from "@/domain/definitionsTypes";
import { useDynamicFont } from "@/app/fonts/fonts"; // Import dynamic font hook

const ColorSelector: React.FC<ColorSelectorProps> = ({
  variants,
  availableColors,
  selectedColor,
  onColorSelect,
}) => {
  const dynamicFont = useDynamicFont(); // Get the current font style

  const allColors = Array.from(
    new Set(variants.map((variant) => variant.attr.Color))
  );

  return (
    <div
      className="self-stretch justify-between items-center inline-flex"
      style={{ fontFamily: dynamicFont.style.fontFamily }}
    >
      <div
        className="text-sm font-medium text-foreground"
        style={{ fontFamily: dynamicFont.style.fontFamily }}
      >
        Color
      </div>
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
            style={{ fontFamily: dynamicFont.style.fontFamily }}
          >
            <span
              className="text-xs font-medium overflow-hidden w-full text-center"
              style={{ fontFamily: dynamicFont.style.fontFamily }}
            >
              {color}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
