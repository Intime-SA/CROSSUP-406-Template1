import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import QuantitySelector from "./QuantitySelector";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import AddToCartButton from "./AddToCartButtom";
import { ProductViewPresentationProps } from "@/domain/definitionsTypes";
import { useProductSelectors } from "@/hooks/useSelectors";

export const ProductViewPresentation: React.FC<
  ProductViewPresentationProps
> = ({
  product,
  isOpen,
  onClose,
  setIsOpen,
  variants,
  selectedVariant,
  quantity,
  availableSizes,
  availableColors,
  handleIncrease,
  handleDecrease,
  handleColorSelect,
  handleSizeSelect,
  handleAddToCartAndClose,
}) => {
  const { canModifyQuantity } = useProductSelectors();
  console.log(canModifyQuantity);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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

            {canModifyQuantity && (
              <QuantitySelector
                variant={selectedVariant}
                quantity={quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            )}

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
            {/* <StockInfo selectedVariant={selectedVariant} /> */}
          </div>
        </div>

        <AddToCartButton onAddToCart={handleAddToCartAndClose} />
      </DialogContent>
    </Dialog>
  );
};
