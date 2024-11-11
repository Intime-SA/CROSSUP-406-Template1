"use client";

import React, { useEffect } from "react";
import { Sheet } from "@/components/ui/sheet";
import ProductView from "@/components/ui-templates/ProductView";
import { useLogicTemplate } from "@/hooks/useLogicTemplate";
import { VerticalTemplate } from "../ui-templates/VerticalTemplate";

const Templates = () => {
  const {
    mainProduct,
    recommendedProducts,
    isOpen,
    setIsOpen,
    selectedProduct,
    isLoading,
    titleText,
    handleOpenModalViewProduct,
    handleClose,
    handleInitializeTiendaNube,
  } = useLogicTemplate();

  useEffect(() => {
    handleInitializeTiendaNube();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <VerticalTemplate
          isLoading={isLoading}
          mainProduct={mainProduct}
          handleClose={handleClose}
          handleOpenModalViewProduct={handleOpenModalViewProduct}
          titleText={titleText}
          recommendedProducts={recommendedProducts}
        />
      </Sheet>

      {selectedProduct && (
        <ProductView
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Templates;
