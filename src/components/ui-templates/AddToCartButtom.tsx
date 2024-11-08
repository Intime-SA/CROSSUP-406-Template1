import React from "react";
import { Button } from "@/components/ui/button";
import { addToCartHandler } from "@/lib/functions";
import { useProductSelectors } from "@/hooks/useSelectors";
import { AddToCartButtonProps } from "@/domain/definitionsTypes";
import { useDynamicFont } from "@/app/fonts/fonts"; // Import dynamic font hook

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => {
  const { selectedVariant, quantity, addToCartButton } = useProductSelectors();
  const dynamicFont = useDynamicFont(); // Get the current font style

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCartHandler(selectedVariant, quantity);
      onAddToCart();
    }
  };

  return (
    <div
      className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t sm:mb-10"
      style={{ fontFamily: dynamicFont.style.fontFamily }}
    >
      <Button
        className="w-full h-10 bg-[var(--border-components)] hover:bg-[var(--border-components)]/90 text-white rounded-none"
        onClick={handleAddToCart}
        disabled={!selectedVariant || selectedVariant.stock === 0}
        style={{ fontFamily: dynamicFont.style.fontFamily }}
      >
        <span
          className="text-base font-medium"
          style={{ fontFamily: dynamicFont.style.fontFamily }}
        >
          {selectedVariant && selectedVariant.stock > 0
            ? addToCartButton
            : "Sin stock"}
        </span>
      </Button>
    </div>
  );
};

export default AddToCartButton;
