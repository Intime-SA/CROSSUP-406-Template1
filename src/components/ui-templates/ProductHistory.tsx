import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import QuantitySelector from "./QuantitySelector";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import AddToCartButton from "./AddToCartButtom";
import { useProductView } from "@/hooks/useProductView";
import { DesignType, ProductHistoryProps } from "@/domain/definitionsTypes";
import { useProductSelectors } from "@/hooks/useSelectors";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useTranslations } from "next-intl";

const ProductHistory: React.FC<ProductHistoryProps> = ({
  product,
  setIsOpen,
  onClose,
  template,
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
  } = useProductView(product); // Use product.id as a unique identifier

  const { canModifyQuantity } = useProductSelectors();

  const handleAddToCartAndClose = () => {
    setIsOpen(false);
  };
  const isMobile = useMediaQuery("(max-width: 767px)");
  const t = useTranslations("Messages");
  return (
    <div
      style={{
        maxWidth: isMobile ? "100vw" : "330px", // En mobile, max-width es igual al ancho del viewport
      }}
      className="w-full mx-auto"
    >
      <div className="flex flex-col h-full">
        <div className="relative flex-grow">
          {template !== DesignType.HISTORY && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 -top-4 p-2 rounded-full border border-border bg-background z-50 hover:bg-secondary"
              onClick={onClose}
            >
              <X className="h-4 w-4 text-foreground" />
              <span className="sr-only">Close</span>
            </Button>
          )}

          <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-thumb-rounded-full hover:scrollbar-thumb-zinc-400 dark:scrollbar-thumb-zinc-700 dark:hover:scrollbar-thumb-zinc-600">
            <div className="p-4 flex flex-col justify-start items-start gap-4 pb-24 pr-2">
              {/* <ProductImage product={product} /> */}
              <div className="flex items-center justify-center">
                <div className="w-[365px] h-[365px] bg-[#f0f0f0]" />
              </div>

              {/* <ProductInfo
                product={product}
                selectedVariant={selectedVariant}
                quantity={quantity}
              /> */}
              <div>
                <div className="w-[300.72px] h-[15.24px] bg-[#f0f0f0] mb-2" />

                <div className="w-[208.72px] h-[15.24px] bg-[#f0f0f0]" />
                <br />
                <span className="font-semibold mt-2">$ X.XXX,XX</span>
              </div>
              {showMessage && (
                <div className="w-full">
                  <div className="h-[37px] p-2 bg-[#f9f8ff] rounded-lg shadow border border-[#e3e3e3] flex items-center justify-center">
                    <p className="text-[#2a2742] text-sm font-normal">
                      {t("sinVariant")}
                    </p>
                  </div>
                </div>
              )}
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
            </div>
          </div>
          <AddToCartButton
            onAddToCart={handleAddToCartAndClose}
            setShowMessage={setShowMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductHistory;
