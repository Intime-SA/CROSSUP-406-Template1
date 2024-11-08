"use client";

import React from "react";
import { Sheet } from "@/components/ui/sheet";
import ProductView from "@/components/ui-templates/ProductView";
import { templateOptions } from "@/lib/utils";
import { useLogicTemplate } from "@/hooks/useLogicTemplate";
import { InicializadorButton } from "../ui-templates/InicializadorButton";
import { VerticalTemplate } from "../ui-templates/VerticalTemplate";

const Templates = () => {
  // traigo selectores y desestructuro aca para utilizarlos

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

  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10 text-primaryText">
      <h2>Template 1</h2>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {Object.entries(templateOptions).map(([key, option]) => (
          <InicializadorButton
            key={key}
            label={option.label}
            type={option.type}
            onClick={handleInitializeTiendaNube}
          />
        ))}
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
