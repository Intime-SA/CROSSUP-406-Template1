import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import ProductAdded from "@/components/ui-templates/ProductAdded";
import RecommendedProducts from "./RecomendedProducts";
import ProductAddedSkeleton from "../skeletons/ProductAddedSkeleton";
import ProductCartSkeleton from "../skeletons/ProductCardSkeleton";
import LineSkeleton from "../skeletons/LineSkeleton";
import { MainProduct2, RecommendedProduct2 } from "@/domain/definitionsTypes";

interface SheetContentProps {
  isLoading: boolean;
  mainProduct: MainProduct2 | null;
  handleClose: () => void;
  handleOpenModalViewProduct: (product: RecommendedProduct2) => void;
  titleText: string;
  recommendedProducts: RecommendedProduct2[] | null;
}

export const VerticalTemplate: React.FC<SheetContentProps> = ({
  isLoading,
  mainProduct,
  handleClose,
  handleOpenModalViewProduct,
  titleText,
  recommendedProducts,
}) => (
  <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-background text-foreground">
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
          <div
            className="h-[1px] w-full bg-border"
            style={{ color: "var(--primary-text)" }}
          />
          {isLoading ? (
            <LineSkeleton />
          ) : (
            <div className="text-foreground text-sm font-semibold">
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
