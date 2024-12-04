import { Button } from "@/components/ui/button";
import { addToCartHandler } from "@/lib/functions";
import { useProductSelectors } from "@/hooks/useSelectors";
import { AddToCartButtonProps } from "@/domain/definitionsTypes";

// COMPONENTE AGREGAR AL CARRITO FINAL
const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  onAddToCart,
  setShowMessage,
}) => {
  // TRAIGO LOS STATES QUE NECESITO DE REDUX
  const { selectedVariant, quantity, addToCartButton, colors } =
    useProductSelectors();

  // FUNCION PARA AGREGAR AL CARRITO SEGUN EL CONEXTO. SI HAY VARIANTE SELECCIONADA
  // AGREGA AL CARRITO Y SI NO HAY VARIANTE, TIRA MENSAJE.
  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCartHandler(selectedVariant, quantity);
      onAddToCart();
    } else {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000); // Ocultar el mensaje después de 3 segundos
    }
  };

  console.log("AddToCartButton -> colors", colors);

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t sm:mb-10">
        <Button
          className="w-full h-10 bg-[var(--border-components)] hover:bg-[var(--border-components)]/90   rounded-none"
          onClick={handleAddToCart}
          /*           disabled={!selectedVariant || selectedVariant.stock === 0} */
        >
          {/* <span className=" font-medium text-[var(--primary-text)]">
            {selectedVariant && selectedVariant.stock > 0
              ? addToCartButton
              : addToCartButton}
          </span> */}
          <span className="text-[var(--button-text)] ">{addToCartButton}</span>
        </Button>
      </div>
    </div>
  );
};

export default AddToCartButton;
