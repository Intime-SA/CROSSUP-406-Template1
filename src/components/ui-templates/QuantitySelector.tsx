"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Variant } from "@/domain/definitionsTypes";
import { Minus, Plus } from "lucide-react";

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
    <div className="self-stretch justify-between items-center inline-flex">
      <div className="text-sm font-medium text-[var(--primary-text)]"> </div>
      <div className="h-[30px] px-2 py-1 bg-[var(--background)] border border-[var(--neutrals-disabled)] hover:border-[var(--border-components)] transition-colors duration-200 justify-start items-center gap-4 inline-flex group">
        <Button
          variant="ghost"
          size="sm"
          className="flex-col justify-center items-start p-0 hover:bg-transparent dark:hover:bg-transparent"
          onClick={onDecrease}
          disabled={quantity <= 1}
        >
          <Minus
            size={16}
            className="w-4 h-4 text-[var(--primary-text)] group-hover:text-[var(--border-components)]"
          />
        </Button>
        <span className="text-[var(--primary-text)] text-xs font-semibold uppercase tracking-wide">
          {quantity}
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="flex-col justify-center items-start p-0 hover:bg-transparent dark:hover:bg-transparent"
          onClick={onIncrease}
          disabled={!variant || quantity >= variant.stock}
        >
          <Plus
            size={12}
            className="w-3 h-3 text-[var(--primary-text)] group-hover:text-[var(--border-components)]"
          />
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
