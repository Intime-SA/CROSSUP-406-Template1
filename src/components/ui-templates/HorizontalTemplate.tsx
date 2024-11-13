"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProductAdded from "./ProductAdded";
import {
  MainProduct2,
  SheetContentPropsHorizontal,
  TargetProduct,
} from "@/domain/definitionsTypes";
import ProductCartSkeleton from "../skeletons/ProductCardSkeleton";
import LineSkeleton from "../skeletons/LineSkeleton";
import RecommendedProductsHorizontal from "./RecomendedProductsHorizontal";

// componente de recomendacion de productos horizontal
export const HorizontalTemplate: React.FC<SheetContentPropsHorizontal> = ({
  mainProduct,
  handleClose,
  handleOpenModalViewProduct,
  recommendedProducts,
  isLoading,
  titleText,
  isOpen,
  setIsOpen,
}) => {
  //

  // ejecuta cierre modal y closea el dialog
  const onClose = () => {
    handleClose();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[700px] p-6">
        <div className="w-full flex flex-col gap-6">
          {mainProduct && (
            <ProductAdded
              onClose={onClose}
              mainProduct={mainProduct}
              openModalViewProduct={() =>
                handleOpenModalViewProduct(mainProduct)
              }
            />
          )}

          <hr className="border-t border-[#e3e3e3]" />
          <div className="h-[1px] text-[var(--primary-text)] w-full bg-border" />

          {isLoading ? (
            <LineSkeleton />
          ) : (
            <div
              className="text-foreground text-sm text-[var(--primary-text)] font-semibold"
              style={{
                color: "var(--primary-text)",
              }}
            >
              {titleText}
            </div>
          )}

          <div className="w-full bg-background flex flex-col flex-grow">
            {isLoading ? (
              <ProductCartSkeleton />
            ) : (
              <RecommendedProductsHorizontal
                products={recommendedProducts}
                openModalViewProduct={handleOpenModalViewProduct}
                onClose={handleClose}
              />
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HorizontalTemplate;
