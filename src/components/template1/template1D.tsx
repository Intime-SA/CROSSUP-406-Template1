"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productsTemplate2 } from "@/data/templates1/products2";
import ProductAdded from "@/components/ProductAdded";
import {
  customText,
  handleAddToCart,
  onClosePopUp,
} from "@/lib/protocolFunctions/functions";
import RecommendedProducts from "@/components/RecomendedProducts";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductView from "@/components/ProductView";
import { RecommendedProduct } from "@/domain/definitions";
import Image from "next/image";
import Link from "next/link";
import {
  setTimerGlobal,
  setTimerUnidad,
  setOffUnidad,
  setOffQuantity,
  setRestUnidad,
  setLastUnidadGlobal,
  setLastUnidad,
  setCantidadFiltros,
  setVisibilityDescription,
  setCantidadProducts,
} from "@/redux/features/tiendaNubeSlice";

const Template1D = () => {
  const [mainProduct, ...recommendedProducts] = productsTemplate2;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<RecommendedProduct | null>(null);

  const dispatch = useDispatch();

  const handleOpenModalViewProduct = (product: RecommendedProduct) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    onClosePopUp("closeModal");
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const handleInitializeTiendaNube = () => {
    dispatch(setTimerGlobal(true));
    dispatch(setTimerUnidad(false));
    dispatch(setOffUnidad(true));
    dispatch(setOffQuantity(30));
    dispatch(setRestUnidad(false));
    dispatch(setLastUnidadGlobal(true));
    dispatch(setLastUnidad(false));
    dispatch(setCantidadFiltros(0));
    dispatch(setVisibilityDescription(true));
    dispatch(setCantidadProducts(7));
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10 text-primaryText">
      <h2>Timer Global y LastUnidad indidivual</h2>
      <Link
        href="https://www.figma.com/design/fT9qXiepXWJoxgsvchAIYp/Flowy-CrossUp-%F0%9F%9A%80-(con-modo-dev)?node-id=8298-36178&m=dev"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[70vw] max-w-[516px]"
      >
        <Image
          className="border border-[#e3e3e3] rounded-sm w-full h-auto"
          src={"/t1-descuentos-y-widgets-globals.png"}
          alt={"template1"}
          width={516}
          height={300}
        />
      </Link>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              marginTop: "10px",
            }}
            onClick={handleInitializeTiendaNube}
          >
            Inicializador TiendaNube 1C°
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-background text-foreground">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
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

export default Template1D;
