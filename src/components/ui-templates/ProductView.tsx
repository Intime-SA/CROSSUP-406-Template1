// componente de la vista: DesingSystem CrossUp > Ready For Dev > Tipos de Templates
// https://www.figma.com/design/fT9qXiepXWJoxgsvchAIYp/Flowy-CrossUp-%F0%9F%9A%80-(con-modo-dev)?node-id=8298-36241&m=dev

import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { ViewProductProps, Variant } from "@/domain/definitionsTypes";
import {
  setVariants,
  setSelectedVariant,
  setQuantity,
} from "@/redux/features/selectedTargetSlice";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import QuantitySelector from "./QuantitySelector";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import StockInfo from "./StockInfo";
import AddToCartButton from "./AddToCartButtom";

export const ProductView: React.FC<ViewProductProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const dispatch = useDispatch();
  const { variants, selectedVariant, quantity } = useSelector(
    (state: RootState) => state.selectedTarget
  );
  const [availableSizes, setAvailableSizes] = useState<string[]>([]);
  const [availableColors, setAvailableColors] = useState<string[]>([]);

  const handleAddToCartAndClose = () => {
    onClose();
  };

  const handleIncrease = () =>
    dispatch(setQuantity(Math.min(quantity + 1, selectedVariant?.stock || 1)));
  const handleDecrease = () => dispatch(setQuantity(Math.max(1, quantity - 1)));

  useEffect(() => {
    dispatch(setVariants(product.variants));
    dispatch(setSelectedVariant(product.variants[0]));
    updateAvailableOptions(product.variants);
  }, [product, dispatch]);

  const updateAvailableOptions = (currentVariants: Variant[]) => {
    const sizes = Array.from(new Set(currentVariants.map((v) => v.attr.Talle)));
    const colors = Array.from(
      new Set(currentVariants.map((v) => v.attr.Color))
    );
    setAvailableSizes(sizes);
    setAvailableColors(colors);
  };

  const handleColorSelect = (color: string) => {
    const newVariant =
      variants.find(
        (v) =>
          v.attr.Color === color && v.attr.Talle === selectedVariant?.attr.Talle
      ) || variants.find((v) => v.attr.Color === color);
    if (newVariant) {
      dispatch(setSelectedVariant(newVariant));
      const availableSizesForColor = variants
        .filter((v) => v.attr.Color === color && v.stock > 0)
        .map((v) => v.attr.Talle);
      setAvailableSizes(availableSizesForColor);
    }
  };

  const handleSizeSelect = (size: string) => {
    const newVariant =
      variants.find(
        (v) =>
          v.attr.Talle === size && v.attr.Color === selectedVariant?.attr.Color
      ) || variants.find((v) => v.attr.Talle === size);
    if (newVariant) {
      dispatch(setSelectedVariant(newVariant));
      const availableColorsForSize = variants
        .filter((v) => v.attr.Talle === size && v.stock > 0)
        .map((v) => v.attr.Color);
      setAvailableColors(availableColorsForSize);
    }
  };

  useEffect(() => {
    if (selectedVariant) {
      dispatch(setQuantity(1));
    }
  }, [selectedVariant, dispatch]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full mt-[10vh] h-[80vh] max-h-[888px] md:max-h-[808px] md:!mt-0 md:h-full md:w-[430px] p-0 bg-background text-foreground max-w-full flex flex-col">
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 -top-4 p-2 rounded-full border border-border bg-background z-50 hover:bg-secondary"
          onClick={onClose}
        >
          <X className="h-4 w-4 text-foreground" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="flex-grow overflow-y-auto [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700 dark:hover:[&::-webkit-scrollbar-thumb]:bg-zinc-600">
          <div className="p-4 flex flex-col justify-start items-start gap-4 pb-24 pr-2">
            <ProductImage product={product} />
            <ProductInfo
              product={product}
              selectedVariant={selectedVariant}
              quantity={quantity}
            />
            <QuantitySelector
              variant={selectedVariant}
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <ColorSelector
              variants={variants}
              availableColors={availableColors}
              selectedColor={selectedVariant?.attr.Color || ""}
              onColorSelect={handleColorSelect}
            />
            <SizeSelector
              variants={variants}
              availableSizes={availableSizes}
              selectedSize={selectedVariant?.attr.Talle || ""}
              onSizeSelect={handleSizeSelect}
            />
            <StockInfo selectedVariant={selectedVariant} />
          </div>
        </div>

        <AddToCartButton onAddToCart={handleAddToCartAndClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ProductView;
