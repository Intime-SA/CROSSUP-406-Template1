import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { RecommendedProduct2 } from "@/domain/definitionsTypes";
import { formatPrice } from "@/lib/utils";
import AddButton from "./AddButtom";
import { RootState } from "@/redux/store";

interface RecommendedProductsProps {
  products: RecommendedProduct2[] | null;
  addToCart: (id: string, quantity: number) => void;
  openModalViewProduct: (product: RecommendedProduct2) => void;
  onClose: () => void;
}

const CountdownTimer: React.FC<{ initialTime: number }> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-[#00806e] text-xs font-semibold uppercase tracking-wide">
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}:00
    </div>
  );
};

export default function RecommendedProducts({
  products,
  addToCart,
  openModalViewProduct,
  onClose,
}: RecommendedProductsProps) {
  const [clickedProducts, setClickedProducts] = useState<Set<string>>(
    new Set()
  );

  const visibilityDescription = useSelector(
    (state: RootState) => state.promotion.visibilityDescription
  );
  const amountOfTime = useSelector(
    (state: RootState) => state.promotion.amountOfTime
  );
  const timerGlobal = useSelector(
    (state: RootState) => state.promotion.timerGlobal
  );
  const offUnidad = useSelector(
    (state: RootState) => state.promotion.offUnidad
  );
  const offQuantity = useSelector(
    (state: RootState) => state.promotion.offQuantity
  );
  const lastUnidad = useSelector(
    (state: RootState) => state.promotion.lastUnidad
  );
  const lastUnidadText = useSelector(
    (state: RootState) => state.promotion.lastUnidadText
  );
  const lastUnidadGlobal = useSelector(
    (state: RootState) => state.promotion.lastUnidadGlobal
  );
  const isFixedDiscount = useSelector(
    (state: RootState) => state.promotion.fixedDiscount
  );

  const handleAddToCartAndClose = async (id: string) => {
    setClickedProducts((prev) => new Set(prev).add(id));
    await addToCart(id, 1);
    setTimeout(onClose, 500);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4 flex items-center gap-2">
        {timerGlobal && amountOfTime !== 0 && (
          <div className="h-[30px] px-2 py-1 border border-[#00806e] justify-start items-center gap-1 inline-flex">
            <CountdownTimer initialTime={amountOfTime} />
          </div>
        )}
        {lastUnidadGlobal && (
          <div className="h-[30px] px-2 py-1 border border-[#00806e] justify-start items-center gap-1 inline-flex">
            <div className="text-[#00806e] text-xs font-semibold uppercase tracking-wide">
              {lastUnidadText}
            </div>
          </div>
        )}
      </div>

      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="flex items-center gap-4">
            <div className="w-[30%] max-w-[116px]">
              <Image
                className="border border-[#e3e3e3] rounded-sm w-full h-auto"
                src={product.images[0].src}
                alt={product.name.es}
                width={116}
                height={116}
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <button
                onClick={() => openModalViewProduct(product)}
                className={`text-left text-sm font-medium focus:outline-none transition-colors duration-200 ease-in-out hover:text-[#4a4760] ${
                  visibilityDescription ? "line-clamp-3" : ""
                }`}
                style={{ color: "var(--primary-text)" }}
              >
                {product.name.es}
                {visibilityDescription &&
                  product.description.es &&
                  ` + ${product.description.es}`}
              </button>
              {lastUnidad && !lastUnidadGlobal && (
                <div className="inline-flex items-center px-1.5 py-0.5 border border-[#00806e] w-fit">
                  <div className="text-[#00806e] text-xs text-center font-semibold uppercase tracking-wide">
                    {lastUnidadText}
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                {offUnidad && !isFixedDiscount ? (
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--primary-text)" }}
                  >
                    {formatPrice(product.variants[0].price * (1 - offQuantity))}
                  </div>
                ) : (
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--primary-text)" }}
                  >
                    {isFixedDiscount
                      ? formatPrice(product.variants[0].price - offQuantity)
                      : formatPrice(product.variants[0].price)}
                  </div>
                )}

                {offUnidad && (
                  <div className="text-[#d1d1d1] text-xs font-medium line-through">
                    {formatPrice(product.variants[0].price)}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                {offUnidad && (
                  <span className="text-[#00806e] font-semibold text-sm">
                    {isFixedDiscount
                      ? `${formatPrice(offQuantity)} OFF`
                      : `${offQuantity * 100}% OFF`}
                  </span>
                )}
              </div>
            </div>

            <AddButton
              productId={product.id}
              clickedProducts={clickedProducts}
              handleAddToCartAndClose={handleAddToCartAndClose}
            />
          </div>
        ))
      ) : (
        <p>No hay productos recomendados disponibles.</p>
      )}
    </div>
  );
}
