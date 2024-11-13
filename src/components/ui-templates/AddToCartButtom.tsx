import { Button } from "@/components/ui/button";
import { addToCartHandler } from "@/lib/functions";
import { useProductSelectors } from "@/hooks/useSelectors";
import { AddToCartButtonProps } from "@/domain/definitionsTypes";

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onAddToCart,
  setShowMessage,
}) => {
  const { selectedVariant, quantity, addToCartButton } = useProductSelectors();

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCartHandler(selectedVariant, quantity);
      onAddToCart();
    } else {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); // Ocultar el mensaje después de 3 segundos
    }
  };

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t sm:mb-10">
        <Button
          className="w-full h-10 bg-[var(--border-components)] hover:bg-[var(--border-components)]/90 text-white rounded-none"
          onClick={handleAddToCart}
          /*           disabled={!selectedVariant || selectedVariant.stock === 0} */
        >
          <span className="text-base font-medium">
            {selectedVariant && selectedVariant.stock > 0
              ? addToCartButton
              : addToCartButton}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default AddToCartButton;
