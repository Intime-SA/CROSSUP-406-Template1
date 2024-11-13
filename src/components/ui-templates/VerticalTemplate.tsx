"use client";

import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import ProductAdded from "@/components/ui-templates/ProductAdded";
import RecommendedProducts from "./RecomendedProducts";
import ProductAddedSkeleton from "../skeletons/ProductAddedSkeleton";
import ProductCartSkeleton from "../skeletons/ProductCardSkeleton";
import LineSkeleton from "../skeletons/LineSkeleton";
import { MainProduct2, TargetProduct } from "@/domain/definitionsTypes";
import { useMediaQuery } from "@/hooks/use-media-query";

interface SheetContentProps {
  isLoading: boolean;
  mainProduct: MainProduct2 | null;
  handleClose: () => void;
  handleOpenModalViewProduct: (product: TargetProduct) => void;
  titleText: string;
  recommendedProducts: TargetProduct[] | null;
}

export const VerticalTemplate: React.FC<SheetContentProps> = ({
  isLoading,
  mainProduct,
  handleClose,
  handleOpenModalViewProduct,
  titleText,
  recommendedProducts,
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <SheetContent
      side={isDesktop ? "right" : "bottom"}
      className={isDesktop ? "w-[500px] sm:max-w-[500px]" : "h-[100vh]"}
      fullSize={!isDesktop}
    >
      <SheetHeader>
        <SheetTitle></SheetTitle>
      </SheetHeader>
      <div className="flex-grow overflow-auto h-full">
        <div className="w-full h-full max-w-md mx-auto bg-background flex flex-col">
          {isLoading ? (
            <ProductAddedSkeleton />
          ) : (
            mainProduct && (
              <ProductAdded
                onClose={handleClose}
                mainProduct={mainProduct}
                openModalViewProduct={() =>
                  handleOpenModalViewProduct(mainProduct)
                }
              />
            )
          )}

          <div className="flex flex-col gap-6 px-4 sm:px-6 flex-grow">
            <div className="h-[1px] text-[var(--primary-text)] w-full bg-border" />
            {isLoading ? (
              <LineSkeleton />
            ) : (
              <div
                className="text-foreground text-sm text-[var(--primary-text)] font-semibold"
                style={{
                  color: "var(--primary-text)",
                }} // Aplicamos la fuente dinámica aquí
              >
                {titleText}
              </div>
            )}

            <div className="w-full max-w-md mx-auto bg-background flex flex-col flex-grow">
              {isLoading ? (
                <ProductCartSkeleton />
              ) : (
                <RecommendedProducts
                  products={recommendedProducts}
                  openModalViewProduct={handleOpenModalViewProduct}
                  onClose={handleClose}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </SheetContent>
  );
};
