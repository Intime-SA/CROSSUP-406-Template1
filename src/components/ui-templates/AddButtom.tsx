"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { TargetProduct } from "@/domain/definitionsTypes";

interface AddButtonProps {
  product: TargetProduct;
  clickedProducts: Set<TargetProduct>;
  handleAddToCartAndClose: (id: TargetProduct) => void;
}

export default function AddButton({
  product,
  clickedProducts,
  handleAddToCartAndClose,
}: AddButtonProps) {
  const isClicked = clickedProducts.has(product);

  return (
    <AnimatePresence>
      <motion.button
        className={`p-4 rounded-3xl border overflow-hidden ${
          isClicked
            ? "bg-[var(--components-bg)] border-[var(--neutrals-disabled)]"
            : "border-[var(--border-components)] hover:border-[var(--neutrals-disabled)] hover:bg-[var(--neutrals-disabled)]"
        }`}
        onClick={() => handleAddToCartAndClose(product)}
        disabled={isClicked}
        initial={{ scale: 1, opacity: 1 }}
        animate={
          isClicked
            ? {
                scale: [1, 1.2, 0.8, 0],
                opacity: [1, 1, 1, 0],
              }
            : { scale: 1, opacity: 1 }
        }
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1],
        }}
      >
        <Plus
          className={`h-4 w-4 ${
            isClicked
              ? "text-white"
              : "text-[var(--border-components)] group-hover:text-white"
          }`}
        />
      </motion.button>
    </AnimatePresence>
  );
}
