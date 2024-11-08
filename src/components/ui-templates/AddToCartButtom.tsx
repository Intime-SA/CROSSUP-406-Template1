import React from "react";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { addToCartHandler } from "@/lib/functions";

interface AddToCartButtonProps {
  onAddToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAddToCart }) => {
  const selectedVariant = useSelector(
    (state: RootState) => state.selectedTarget.selectedVariant
  );
  const quantity = useSelector(
    (state: RootState) => state.selectedTarget.quantity
  );
  const addToCartButton = useSelector(
    (state: RootState) => state.promotion.addToCartButton
  );

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
