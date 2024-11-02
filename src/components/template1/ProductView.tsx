import React, { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { handleAddToCart } from "@/lib/protocolFunctions/functions";
import { ViewProductProps } from "@/domain/definitions";
import { formatPrice } from "@/lib/utils";
import QuantitySelector from "./QuantitySelector";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";

export const ProductView: React.FC<ViewProductProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  // funcion Agregar al Carrito y Cerrar Modal
  const handleAddToCartAndClose = () => {
    handleAddToCart(product.id);
    onClose();
  };

  // Filtros:
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(1);

  // Funciones para manejar aumento y disminucion de unidades de producto
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Colores mokeados para renderizar
  const colorOptions = [
    { id: 1, color: "#1078ff" },
    { id: 2, color: "#ff4136" },
    { id: 3, color: "#2ecc40" },
  ];

  // Sizes mokeadas para seleccionar
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full mt-[10vh] h-[80vh] max-h-[80vh] md:!mt-0 md:h-full md:w-[430px] p-0 bg-background text-foreground max-w-full flex flex-col">
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 -top-4 p-2 rounded-full border border-border bg-background z-50 hover:bg-secondary"
          onClick={onClose}
        >
          <X className="h-4 w-4 text-foreground" />
        </Button>

        <div className="flex-grow overflow-y-auto">
          <div className="p-6 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex justify-center">
              <Image
                className="border border-border w-382 h-382 md:w-[382px] md:h-[382px] object-cover"
                src={"/backImage.png"}
                alt={product.name}
                width={382}
                height={382}
              />
            </div>

            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch font-semibold text-foreground">
                  {product.name}
                </div>
              </div>

              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-lg font-semibold text-foreground">
                  {formatPrice(product.price)}
                </div>

                <QuantitySelector
                  quantity={quantity}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                />
              </div>

              <ColorSelector
                colors={colorOptions}
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor}
              />

              <SizeSelector
                sizes={sizes}
                selectedSize={selectedSize}
                onSizeSelect={setSelectedSize}
              />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 p-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            className="w-full h-10 text-primary-foreground font-medium bg-primary hover:bg-primary/90"
            onClick={handleAddToCartAndClose}
          >
            <h3 className="text-base">Agregar al carrito</h3>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductView;
