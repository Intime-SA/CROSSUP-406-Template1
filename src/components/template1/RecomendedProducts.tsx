import React, { useState } from "react";
import Image from "next/image";
import { RecommendedProduct } from "@/domain/definitions";
import { formatPrice } from "@/lib/utils";
import AddButton from "./AddButtom";

interface RecommendedProductsProps {
  products: RecommendedProduct[];
  addToCart: (id: number) => Promise<void>;
  openModalViewProduct: (product: RecommendedProduct) => void;
  onClose: () => void;
}

export default function RecommendedProducts({
  products,
  addToCart,
  openModalViewProduct,
  onClose,
}: RecommendedProductsProps) {
  const [clickedProducts, setClickedProducts] = useState<Set<number>>(
    new Set()
  );

  const handleAddToCartAndClose = async (id: number) => {
    setClickedProducts((prev) => new Set(prev).add(id));
    await addToCart(id);
    setTimeout(onClose, 500);
  };

  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <div key={product.id} className="flex items-center gap-4">
          <div className="w-[30%] max-w-[116px]">
            <Image
              className="border border-[#e3e3e3] rounded-sm w-full h-auto"
              src={product.image}
              alt={product.name}
              width={116}
              height={116}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <button
              onClick={() => openModalViewProduct(product)}
              className="text-left text-[#2a2742] text-sm font-medium focus:outline-none transition-colors duration-200 ease-in-out hover:text-[#4a4760]"
            >
              {product.name}
            </button>
            <div className="text-[#2a2742] text-sm font-semibold">
              {formatPrice(product.price)}
            </div>
          </div>

          <AddButton
            productId={product.id}
            clickedProducts={clickedProducts}
            handleAddToCartAndClose={handleAddToCartAndClose}
          />
        </div>
      ))}
    </div>
  );
}
