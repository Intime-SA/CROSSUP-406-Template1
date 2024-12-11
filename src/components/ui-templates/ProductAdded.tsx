import React from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { ProductAddedProps } from "@/domain/definitionsTypes";
import { useProductSelectors } from "@/hooks/useSelectors";
import { Check } from "lucide-react";

// componente señalador del shooter
export const ProductAdded: React.FC<ProductAddedProps> = ({
  onClose,
  closeIconSrc = "/bottomClose.svg",
  mainProduct,
}) => {
  // Mostrar o no mostrar la descripcion
  const { visibilityDescription } = useProductSelectors();

  return (
    <div className="w-full bg-white">
      <div className="px-4 sm:px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-2 text-[var(--border-components)]">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border-2 border-[var(--border-components)]">
            <Check
              className={`h-4 w-4 "text-[var(--border-components)]"
  }`}
            />
          </div>
          <span className="text-base text-[var(--primary-text)] font-semibold">
            Producto añadido al carrito
          </span>
        </div>
        <button
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          onClick={onClose}
        >
          <Image src={closeIconSrc} alt="Close" width={16} height={16} />
        </button>
      </div>
      <div className="px-4 sm:px-6 py-4">
        <div className="flex gap-4">
          <div className="w-[30%] max-w-[116px]">
            <Image
              className="border border-[var(--neutrals-disabled)] rounded-sm w-full h-auto"
              src={mainProduct.images[0].src}
              alt={mainProduct.name.es}
              width={116}
              height={116}
              layout="responsive"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <span
              className={`text-left text-[var(--primary-text)] text-sm font-medium focus:outline-none transition-colors duration-200 ease-in-out hover:text-[#4a4760] ${
                visibilityDescription ? "line-clamp-3" : ""
              }`}
            >
              {mainProduct.name.es}
              {visibilityDescription &&
                mainProduct.description.es &&
                ` + ${mainProduct.description.es}`}
            </span>
            <div className="text-[var(--primary-text)] text-sm font-semibold">
              1 x {formatPrice(mainProduct.variants[0].price)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdded;
