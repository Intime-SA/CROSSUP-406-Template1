"use client";

import React, { useState } from "react";
import { productsTemplate } from "@/data/templates/products";
import ProductAdded from "@/components/template1/ProductAdded";
import {
  customText,
  handleAddToCart,
  onClosePopUp,
} from "@/lib/protocolFunctions/functions";
import RecommendedProducts from "@/components/template1/RecomendedProducts";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProductView from "@/components/template1/ProductView";
import { RecommendedProduct } from "@/domain/definitions";

const TemplateMobile = () => {
  const [mainProduct, ...recommendedProducts] = productsTemplate;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<RecommendedProduct | null>(null);

  const handleOpenModalViewProduct = (product: RecommendedProduct) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    onClosePopUp("closeModal");
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10  text-primaryText">
      <h1 className="text-3xl font-bold mb-4">Template 1</h1>
      <div className="flex items-center justify-center w-full h-full m-0 p-10  text-primaryText">
        <h2 className="text-xl font-semibold m-2">
          Template sugerencias & Producto Específico :
        </h2>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">Inicializador TiendaNube</Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
            <div className="flex-grow overflow-auto h-full">
              <div className="w-full h-full max-w-md mx-auto bg-white flex flex-col">
                <ProductAdded
                  onClose={handleClose}
                  mainProduct={mainProduct}
                  openModalViewProduct={() =>
                    handleOpenModalViewProduct(mainProduct)
                  }
                />

                <div className="flex flex-col gap-6 px-4 sm:px-6 flex-grow">
                  <div className="h-[1px] w-full bg-gray-200" />

                  <div className="text-black text-sm font-semibold">
                    {customText("traer mensaje customizado cliente")}
                  </div>

                  <div className="w-full max-w-md mx-auto bg-white flex flex-col flex-grow">
                    <RecommendedProducts
                      products={recommendedProducts}
                      openModalViewProduct={handleOpenModalViewProduct}
                      addToCart={handleAddToCart}
                      onClose={handleClose}
                    />
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
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default TemplateMobile;
