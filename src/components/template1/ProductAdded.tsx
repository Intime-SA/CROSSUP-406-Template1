import React from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";
import { MainProduct } from "@/domain/definitions";

interface ProductAddedProps {
  onClose: () => void;
  checkIconSrc?: string;
  closeIconSrc?: string;
  mainProduct: MainProduct;
  openModalViewProduct: (product: MainProduct) => void;
}

export const ProductAdded: React.FC<ProductAddedProps> = ({
  onClose,
  checkIconSrc = "/checkIconFlowy.svg",
  closeIconSrc = "/bottomClose.svg",
  mainProduct,
  openModalViewProduct,
}) => {
  return (
    <div className="w-full bg-white">
      <div className="px-4 sm:px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Image src={checkIconSrc} alt="Check Icon" width={24} height={24} />
          <span className="text-black text-base font-semibold">
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
              className="border border-[#e3e3e3] rounded-sm w-full h-auto"
              src={mainProduct.image}
              alt={mainProduct.name}
              width={116}
              height={116}
              layout="responsive"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <button
              onClick={() => openModalViewProduct(mainProduct)}
              className="text-left text-[#2a2742] text-sm font-medium focus:outline-none transition-colors duration-200 ease-in-out hover:text-[#4a4760]"
            >
              {mainProduct.name}
            </button>
            <div className="text-[#2a2742] text-sm font-semibold">
              {mainProduct.quantity} x {formatPrice(mainProduct.price)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdded;
