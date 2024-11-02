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
      <DialogContent className="w-full mt-[10vh] h-[80vh] max-h-[80vh] md:!mt-0 md:h-full md:w-[430px] p-0 bg-white max-w-full  flex flex-col">
        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 -top-4 p-2 rounded-full border border-[#e3e3e3] bg-white z-50 hover:bg-gray-50"
          onClick={onClose}
        >
          <X className="h-4 w-4 text-black" />
        </Button>

        <div className="flex-grow overflow-y-auto">
          <div className="p-6 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch flex justify-center">
              <Image
                className="border border-[#e3e3e3] w-382 h-382 md:w-[382px] md:h-[382px] object-cover"
                src={"/backImage.png"}
                alt={product.name}
                width={382}
                height={382}
              />
            </div>

            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div
                  className="self-stretch text-base font-semibold"
                  style={{ color: "var(--primary-text)" }}
                >
                  {product.name}
                </div>
              </div>

              <div className="self-stretch justify-between items-center inline-flex">
                <div className=" text-lg font-semibold">
                  {formatPrice(product.price)}
                </div>

                <div className="justify-start items-center gap-2 flex">
                  <div className="h-[30px] px-2 py-1 bg-white border border-[#d1d1d1] justify-start items-center gap-4 inline-flex">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-col justify-center items-start p-0 hover:bg-transparent"
                    >
                      <Image
                        src="/bottomRest.svg"
                        alt="Decrease quantity"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </Button>
                    <span className="text-black text-xs font-semibold uppercase tracking-wide">
                      1
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex-col justify-center items-start p-0 hover:bg-transparent"
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
                <div className=" text-sm font-medium">Color</div>
                <div className="justify-start items-center gap-2 flex">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-[30px] h-[30px] px-2 py-1 bg-white border  flex justify-center items-center"
                      style={{ border: "1px solid var(--primary-text)" }}
                    >
                      <div className="w-3 h-3 bg-[#1078ff]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="self-stretch justify-between items-center inline-flex">
                <div className=" text-sm font-medium">Talle</div>
                <div className="justify-start items-center gap-2 flex">
                  {["Option", "Option", "Option"].map((option, i) => (
                    <div
                      key={i}
                      className="px-2 py-1 bg-white border  flex justify-start items-center gap-1"
                      style={{ border: "1px solid var(--primary-text)" }}
                    >
                      <div className="text-black text-xs font-semibold uppercase tracking-wide">
                        {option}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 p-4 border-t border-gray-200">
          <Button
            className="w-full h-10 text-white font-medium"
            onClick={handleAddToCartAndClose}
            style={{
              backgroundColor: "var(--components-bg)",
              transition: "background-color 0.3s ease, opacity 0.3s ease",
              opacity: 1,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <h3 className="text-base ">Agregar al carrito</h3>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductView;
