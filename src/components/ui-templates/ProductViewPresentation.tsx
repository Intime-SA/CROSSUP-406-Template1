"use client";

import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProductViewPresentationProps } from "@/domain/definitionsTypes";
import ProductHistory from "./ProductHistory";

export const ProductViewPresentation: React.FC<
  ProductViewPresentationProps
> = ({ product, isOpen, setIsOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="flex flex-col w-full p-0 mt-[10vh] h-[80vh] max-h-[888px] md:max-h-[808px] md:mt-0 md:h-full md:w-[430px] bg-background text-foreground max-w-full">
        <ProductHistory
          key={product.id}
          product={product}
          setIsOpen={setIsOpen}
          onClose={onClose}
        />
      </DialogContent>
    </Dialog>
  );
};
