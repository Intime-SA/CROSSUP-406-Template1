import React from "react";

interface ColorOption {
  id: number;
  color: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: number;
  onColorSelect: (id: number) => void;
}

export default function ColorSelector({
  colors,
  selectedColor,
  onColorSelect,
}: ColorSelectorProps) {
  return (
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-sm font-medium text-foreground">Color</div>
      <div className="justify-start items-center gap-2 flex">
        {colors.map((colorOption) => (
          <button
            key={colorOption.id}
            onClick={() => onColorSelect(colorOption.id)}
            className={`
              w-[30px] h-[30px] p-2
              flex justify-center items-center
              border
              transition-all duration-200
              ${
                selectedColor === colorOption.id
                  ? "bg-[var(--components-bg)] border-[var(--primary-text)]"
                  : "border-border hover:opacity-80"
              }
            `}
          >
            <div
              className="w-3 h-3"
              style={{ backgroundColor: colorOption.color }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
