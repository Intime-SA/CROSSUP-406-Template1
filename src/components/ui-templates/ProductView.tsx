import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { handleAddToCart } from "@/lib/protocolFunctions/functions";

import { formatPrice } from "@/lib/utils";
import QuantitySelector from "./QuantitySelector";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ViewProductProps } from "@/domain/definitionsTypes";

export const ProductView: React.FC<ViewProductProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const handleAddToCartAndClose = () => {
    handleAddToCart(product.id);
    onClose();
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));

  const colorOptions = [
    { id: 1, color: "#1078ff" },
    { id: 2, color: "#ff4136" },
    { id: 3, color: "#2ecc40" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const visibilityDescription = useSelector(
    (state: RootState) => state.promotion.visibilityDescription
  );
  const lastUnidad = useSelector(
    (state: RootState) => state.promotion.lastUnidad
  );
  const offUnidad = useSelector(
    (state: RootState) => state.promotion.offUnidad
  );
  const offQuantity = useSelector(
    (state: RootState) => state.promotion.offQuantity
  );
  const isFixedDiscount = useSelector(
    (state: RootState) => state.promotion.fixedDiscount
  );
  const lastUnidadText = useSelector(
    (state: RootState) => state.promotion.lastUnidadText
  );

  console.log(isFixedDiscount);

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

        {/* Scrollable container with ultra-thin scrollbar */}
        <div className="flex-grow overflow-y-auto [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-zinc-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-zinc-400 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700 dark:hover:[&::-webkit-scrollbar-thumb]:bg-zinc-600">
          <div className="p-4 flex flex-col justify-start items-start gap-4 pb-24 pr-2">
            <div className="self-stretch flex justify-start">
              <Image
                className="border border-border w-full h-auto object-cover"
                src={"/backImage.png"}
                alt={product.name.es}
                width={382}
                height={382}
              />
            </div>

            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch font-semibold text-foreground">
                {product.name.es}
                {visibilityDescription &&
                  product.description.es &&
                  ` + ${product.description.es}`}
              </div>

              {lastUnidad && (
                <div className="inline-flex items-center px-1.5 py-0.5 border border-[#00806e] w-fit">
                  <div className="text-[#00806e] text-xs text-center font-semibold uppercase tracking-wide">
                    {lastUnidadText}
                  </div>
                </div>
              )}

              <div className="self-stretch justify-between items-center flex">
                <div className="flex items-center gap-2">
                  {isFixedDiscount ? (
                    <div className="text-sm font-semibold text-primary">
                      {formatPrice(product.variants[0].price - offQuantity)}
                    </div>
                  ) : (
                    <div className="text-sm font-semibold text-primary">
                      {formatPrice(product.variants[0].price)}
                    </div>
                  )}

                  {!isFixedDiscount ? (
                    <span className="text-[#00806e] font-semibold text-sm">
                      {offQuantity * 100}% OFF
                    </span>
                  ) : (
                    <span className="text-[#00806e] font-semibold text-sm">
                      {formatPrice(offQuantity)} OFF
                    </span>
                  )}
                </div>
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                />
              </div>

              {offUnidad && (
                <div className="text-[#d1d1d1] text-xs font-medium line-through">
                  {formatPrice(product.variants[0].price)}
                </div>
              )}
            </div>

            <ColorSelector
              colors={colorOptions}
              selectedColor={selectedColor}
              onColorSelect={setSelectedColor}
            />

            {offUnidad && (
              <>
                {[...Array(5)].map((_, index) => (
                  <SizeSelector
                    key={index}
                    sizes={sizes}
                    selectedSize={selectedSize}
                    onSizeSelect={setSelectedSize}
                  />
                ))}
              </>
            )}

            {!offUnidad && (
              <SizeSelector
                sizes={sizes}
                selectedSize={selectedSize}
                onSizeSelect={setSelectedSize}
              />
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
          <Button
            className="w-full h-10 bg-[#00806e] hover:bg-[#00806e]/90 text-white rounded-none"
            onClick={handleAddToCartAndClose}
          >
            <span className="text-base font-medium">Agregar al carrito</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductView;
