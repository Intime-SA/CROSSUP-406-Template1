import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Variant } from "@/domain/definitionsTypes";

interface QuantitySelectorProps {
  variant: Variant | null;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  variant,
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="justify-start items-center gap-2 flex">
      <div className="h-[30px] px-2 py-1 bg-background border border-border hover:border-[var(--neutrals-disabled)] transition-colors duration-200 justify-start items-center gap-4 inline-flex group">
        <Button
          variant="ghost"
          size="sm"
          className="flex-col justify-center items-start p-0 hover:bg-transparent dark:hover:bg-transparent"
          onClick={onDecrease}
          disabled={quantity <= 1}
        >
          <Image
            src="/bottomRest.svg"
            alt="Decrease quantity"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </Button>
        <span className="text-foreground text-xs font-semibold uppercase tracking-wide">
          {quantity}
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="flex-col justify-center items-start p-0 hover:bg-transparent dark:hover:bg-transparent"
          onClick={onIncrease}
          disabled={!variant || quantity >= variant.stock}
        >
          <Image
            src="/bottomMore.svg"
            alt="Increase quantity"
            width={12}
            height={12}
            className="w-3 h-3"
          />
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
