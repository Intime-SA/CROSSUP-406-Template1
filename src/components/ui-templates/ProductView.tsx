import React from "react";
import { ViewProductProps } from "@/domain/definitionsTypes";
import { useProductView } from "@/hooks/useProductView";
import { ProductViewPresentation } from "./ProductViewPresentation";

export const ProductView: React.FC<ViewProductProps> = ({
  product,
  setIsOpen,
  isOpen,
  onClose,
}) => {
  const {
    variants,
    selectedVariant,
    quantity,
    availableSizes,
    availableColors,
    handleIncrease,
    handleDecrease,
    handleColorSelect,
    handleSizeSelect,
    showMessage,
    setShowMessage,
  } = useProductView(product);

  const handleAddToCartAndClose = () => {
    setIsOpen(false);
  };

  return (
    <ProductViewPresentation
      product={product}
      showMessage={showMessage}
      setShowMessage={setShowMessage}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClose={onClose}
      variants={variants}
      selectedVariant={selectedVariant}
      quantity={quantity}
      availableSizes={availableSizes}
      availableColors={availableColors}
      handleIncrease={handleIncrease}
      handleDecrease={handleDecrease}
      handleColorSelect={handleColorSelect}
      handleSizeSelect={handleSizeSelect}
      handleAddToCartAndClose={handleAddToCartAndClose}
    />
  );
};

export default ProductView;
