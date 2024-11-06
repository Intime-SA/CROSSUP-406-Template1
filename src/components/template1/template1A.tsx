"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProductAdded from "@/components/ui-templates/ProductAdded";
import {
  customText,
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
import Image from "next/image";
import Link from "next/link";
import { fetchDataFromJson } from "@/app/actions/actions";
import { MainProduct2, PromotionData } from "@/domain/definitionsTypes";
import { updateMultipleStates } from "@/redux/features/promotionSlice";

const Template1A = () => {
  const [mainProduct, setMainProduct] = useState<MainProduct2 | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<
    RecommendedProduct2[] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<RecommendedProduct2 | null>(null);

  // inicializar hook dispatch
  const dispatch = useDispatch();

  // funcion para procesar la data que vuelve del serverAction
  const processData = (data: PromotionData) => {
    // Objeto para actualizar el estado global cuando vuelve respuesta de la API
    const stateUpdates = {
      timerGlobal: data.timer.hasTimer && data.timer.designType === "global",
      timerUnidad: data.timer.hasTimer && data.timer.designType === "unidad",
      offUnidad: data.discount.isActive,
      fixedDiscount: data.discount.isFixedDiscount,
      offQuantity: data.discount.amount,
      lastUnidadGlobal:
        data.shortage.hasShortage && data.showingPlace === "checkout",
      lastUnidad: data.shortage.hasShortage,
      lastUnidadText: data.shortage.text,
      visibilityDescription: true,
      cantidadProducts: data.targets ? data.targets.length : 0,
    };

    // Despachar todas las actualizaciones de una vez
    dispatch(updateMultipleStates(stateUpdates));

    // setear el shooter como main product
    if (data.shooters && data.shooters.length > 0) {
      setMainProduct(data.shooters[0]);
    }

    // setear los targets como RecommendedProducts
    if (data.targets && data.targets.length > 0) {
      setRecommendedProducts(data.targets);
    }

    // setear a true para abrir el sheet con recomendados
    setIsOpen(true);
  };

  // abrir el modal con el Producto Especifico para ver mas details
  const handleOpenModalViewProduct = (product: RecommendedProduct2) => {
    setSelectedProduct(product);
  };

  // funcion para cerrar modal
  const handleClose = () => {
    onClosePopUp("closeModal");
    setIsOpen(false);
    setSelectedProduct(null);
  };

  // disparador de tienda nube para obtener la respuesta de API con la recomendacion
  const handleInitializeTiendaNube = async (typeTemplate: string) => {
    try {
      const data = await fetchDataFromJson(typeTemplate);
      processData(data);
    } catch (error) {
      console.error("Error al inicializar Tienda Nube:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10 text-primaryText">
      <h2>Template 1</h2>
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
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              marginTop: "10px",
            }}
            onClick={() => handleInitializeTiendaNube("template1A")}
          >
            Template sugerencias y Producto especifico (1A)
          </Button>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              marginTop: "10px",
            }}
            onClick={() => handleInitializeTiendaNube("template1B")}
          >
            Con limites y maximos de textos (1B)
          </Button>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              marginTop: "10px",
            }}
            onClick={() => handleInitializeTiendaNube("template1C")}
          >
            Con descuentos y widgets (1C°)
          </Button>
        </SheetTrigger>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              marginTop: "10px",
            }}
            onClick={() => handleInitializeTiendaNube("template1D")}
          >
            Con descuentos y widgets globales (1D°)
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-background text-foreground">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <div className="flex-grow overflow-auto h-full">
            <div className="w-full h-full max-w-md mx-auto bg-background flex flex-col">
              {mainProduct && (
                <ProductAdded
                  onClose={handleClose}
                  mainProduct={mainProduct}
                  openModalViewProduct={() =>
                    handleOpenModalViewProduct(mainProduct)
                  }
                />
              )}

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

export default Template1A;
