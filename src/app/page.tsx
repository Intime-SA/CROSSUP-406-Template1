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
import Image from "next/image";
import Link from "next/link";

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
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10  text-primaryText">
      <h1 className="text-3xl font-bold mb-4">Template 1</h1>
      <div className="flex items-center justify-center w-full h-full m-0 p-10  text-primaryText">
        <div className="flex flex-col aling-center justify-center">
          <h2>Template Sugerencias & Producto Especifico</h2>
          <Link
            href="https://www.figma.com/design/fT9qXiepXWJoxgsvchAIYp/Flowy-CrossUp-%F0%9F%9A%80-(con-modo-dev)?node-id=8298-36178&m=dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[70vw] max-w-[516px]"
          >
            <Image
              className="border border-[#e3e3e3] rounded-sm w-full h-auto"
              src={"/t1-sugerencias-y-especifico.png"}
              alt={"template1"}
              width={516}
              height={300}
            />
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
              >
                Inicializador TiendaNube
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-background text-foreground">
              <div className="flex-grow overflow-auto h-full">
                <div className="w-full h-full max-w-md mx-auto bg-background flex flex-col">
                  <ProductAdded
                    onClose={handleClose}
                    mainProduct={mainProduct}
                    openModalViewProduct={() =>
                      handleOpenModalViewProduct(mainProduct)
                    }
                  />

                  <div className="flex flex-col gap-6 px-4 sm:px-6 flex-grow">
                    <div
                      className="h-[1px] w-full bg-border"
                      style={{ color: "var(--primary-text)" }}
                    />

                    <div className="text-foreground text-sm font-semibold">
                      {customText("traer mensaje customizado cliente")}
                    </div>

                    <div className="w-full max-w-md mx-auto bg-background flex flex-col flex-grow">
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
        </div>

        {selectedProduct && (
          <ProductView
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={() => handleClose()}
          />
        )}
      </div>
    </div>
  );
};

export default TemplateMobile;
