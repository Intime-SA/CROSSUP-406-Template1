import React from "react";
import { ViewProductProps } from "@/domain/definitionsTypes";
import { useProductView } from "@/hooks/useProductView";
import { ProductViewPresentation } from "./ProductViewPresentation";

export const ProductView: React.FC<ViewProductProps> = ({
  product,
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
  } = useProductView(product);

  const handleAddToCartAndClose = () => {
    onClose();
  };

  return (
    <ProductViewPresentation
      product={product}
      isOpen={isOpen}
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
