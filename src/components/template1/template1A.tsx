"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductAdded from "@/components/ui-templates/ProductAdded";
import {
  handleAddToCart,
  onClosePopUp,
} from "@/lib/protocolFunctions/functions";
import RecommendedProducts from "@/components/ui-templates/RecomendedProducts";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductView from "@/components/ui-templates/ProductView";
import { RecommendedProduct2 } from "@/domain/definitionsTypes";
import { fetchDataFromJson } from "@/app/actions/actions";
import { MainProduct2, PromotionData } from "@/domain/definitionsTypes";
import { updateMultipleStates } from "@/redux/features/promotionSlice";
import { templateOptions } from "@/lib/utils";
import ProductCartSkeleton from "../skeletons/ProductCardSkeleton";
import ProductAddedSkeleton from "../skeletons/ProductAddedSkeleton";
import { RootState } from "@/redux/store";

const Template1A = () => {
  const [mainProduct, setMainProduct] = useState<MainProduct2 | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<
    RecommendedProduct2[] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<RecommendedProduct2 | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const processData = (data: PromotionData) => {
    const stateUpdates = {
      amountOfTime: data.timer.amountOfTime,
      timerGlobal: data.timer.hasTimer,
      offUnidad: data.discount.isActive,
      fixedDiscount: data.discount.isFixedDiscount,
      offQuantity: data.discount.amount,
      lastUnidadGlobal:
        data.shortage.hasShortage && data.showingPlace === "checkout",
      lastUnidad: data.shortage.hasShortage,
      lastUnidadText: data.shortage.text,
      visibilityDescription: true,
      quantityProducts: data.targets ? data.targets.length : 0,
      titleText: data.text.title,
      addToCartButton: data.text.buttonAccept,
    };

    dispatch(updateMultipleStates(stateUpdates));

    if (data.shooters && data.shooters.length > 0) {
      setMainProduct(data.shooters[0]);
    }

    if (data.targets && data.targets.length > 0) {
      setRecommendedProducts(data.targets);
    }

    setIsOpen(true);
    setIsLoading(false);
  };

  const handleOpenModalViewProduct = (product: RecommendedProduct2) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    onClosePopUp("closeModal");
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const handleInitializeTiendaNube = async (typeTemplate: string) => {
    try {
      setIsLoading(true);
      const data = await fetchDataFromJson(typeTemplate);
      processData(data);
    } catch (error) {
      console.error("Error al inicializar Tienda Nube:", error);
      setIsLoading(false);
    }
  };

  const titleText = useSelector(
    (state: RootState) => state.promotion.titleText
  );

  const renderTemplateButton = (
    key: string,
    option: { label: string; type: string }
  ) => (
    <SheetTrigger key={key} asChild>
      <Button
        variant="outline"
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: "10px",
        }}
        onClick={() => handleInitializeTiendaNube(option.type)}
      >
        {option.label}
      </Button>
    </SheetTrigger>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10 text-primaryText">
      <h2>Template 1</h2>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {Object.entries(templateOptions).map(([key, option]) =>
          renderTemplateButton(key, option)
        )}
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

                <div className="text-foreground text-sm font-semibold">
                  {titleText}
                </div>

                <div className="w-full max-w-md mx-auto bg-background flex flex-col flex-grow">
                  {isLoading ? (
                    <ProductCartSkeleton />
                  ) : (
                    <RecommendedProducts
                      products={recommendedProducts}
                      openModalViewProduct={handleOpenModalViewProduct}
                      addToCart={handleAddToCart}
                      onClose={handleClose}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {selectedProduct && (
        <ProductView
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => handleClose()}
        />
      )}
    </div>
  );
};

export default Template1A;
