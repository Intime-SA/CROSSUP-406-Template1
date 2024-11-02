import React from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { handleAddToCart } from "@/lib/protocolFunctions/functions";
import { ViewProductProps } from "@/domain/definitions";
import { formatPrice } from "@/lib/utils";

export const ProductView: React.FC<ViewProductProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const handleAddToCartAndClose = () => {
    handleAddToCart(product.id);
    onClose();
  };

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

                <div className="justify-start items-center gap-2 flex">
                  <div className="h-[30px] px-2 py-1 bg-background border border-border justify-start items-center gap-4 inline-flex">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-col justify-center items-start p-0 hover:bg-transparent dark:hover:bg-transparent"
                    >
                      <Image
                        src="/bottomRest.svg"
                        alt="Decrease quantity"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </Button>
                    <span className="text-foreground text-xs font-semibold uppercase tracking-wide">
                      1
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-col justify-center items-start p-0 hover:bg-transparent dark:hover:bg-transparent"
                    >
                      <Image
                        src="/bottomMore.svg"
                        alt="Increase quantity"
                        width={12}
                        height={12}
                        className="w-3 h-3"
                      />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-sm font-medium text-foreground">Color</div>
                <div className="justify-start items-center gap-2 flex">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-[30px] h-[30px] px-2 py-1 bg-background border border-border flex justify-center items-center"
                    >
                      <div className="w-3 h-3 bg-[#1078ff]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-sm font-medium text-foreground">Talle</div>
                <div className="justify-start items-center gap-2 flex">
                  {["Option", "Option", "Option"].map((option, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 bg-background border border-border flex justify-start items-center gap-1"
                    >
                      <div className="text-foreground text-xs font-semibold uppercase tracking-wide">
                        {option}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
