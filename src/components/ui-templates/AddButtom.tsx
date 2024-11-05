import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface AddButtonProps {
  productId: string;
  clickedProducts: Set<string>;
  handleAddToCartAndClose: (id: string) => void;
}

export default function AddButton({
  productId,
  clickedProducts,
  handleAddToCartAndClose,
}: AddButtonProps) {
  return (
    <AnimatePresence>
      <motion.button
        className={`p-4 rounded-3xl border overflow-hidden ${
          clickedProducts.has(productId)
            ? "bg-[var(--components-bg)] text-white border-[var(--neutrals-disabled)]"
            : "border-[#00806e] hover:border-[var(--neutrals-disabled)] hover:bg-[var(--neutrals-disabled)] hover:text-white"
        }`}
        onClick={() => handleAddToCartAndClose(productId)}
        disabled={clickedProducts.has(productId)}
        initial={{ scale: 1, opacity: 1 }}
        animate={
          clickedProducts.has(productId)
            ? {
                scale: [1, 1.2, 0.8, 0], // Agranda, reduce y luego desaparece
                opacity: [1, 1, 1, 0], // Mantiene opacidad hasta desaparecer
              }
            : { scale: 1, opacity: 1 }
        }
        exit={{ scale: 0, opacity: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1], // Tiempos de transición para agrandar y reducir
        }}
      >
        {clickedProducts ? (
          <Image
            src="/bottomAddCart.svg"
            alt="Add to Cart"
            width={16}
            height={16}
          />
        ) : (
          <Plus className="h-4 w-4 text-primary-foreground" />
        )}
      </motion.button>
    </AnimatePresence>
  );
}
