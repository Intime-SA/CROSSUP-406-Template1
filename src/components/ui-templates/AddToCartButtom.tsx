import React from "react";
import { Button } from "@/components/ui/button";
import { addToCartHandler } from "@/lib/functions";
import { useProductSelectors } from "@/hooks/useSelectors";
import { AddToCartButtonProps } from "@/domain/definitionsTypes";

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => {
  const { selectedVariant, quantity, addToCartButton } = useProductSelectors();

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCartHandler(selectedVariant, quantity);
      onAddToCart();
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
      <Button
        className="w-full h-10 bg-[#00806e] hover:bg-[#00806e]/90 text-white rounded-none"
        onClick={handleAddToCart}
        disabled={!selectedVariant || selectedVariant.stock === 0}
      >
        <span className="text-base font-medium">
          {selectedVariant && selectedVariant.stock > 0
            ? addToCartButton
            : "Sin stock"}
        </span>
      </Button>
    </div>
  );
};

export default AddToCartButton;
