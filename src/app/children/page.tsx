"use client";

import React, { useEffect } from "react";
import { Sheet } from "@/components/ui/sheet";
import { VerticalTemplate } from "@/components/ui-templates/VerticalTemplate";
import ProductView from "@/components/ui-templates/ProductView";
import { useLogicTemplate } from "@/hooks/useLogicTemplate";
import { DesignType, PromotionData } from "@/domain/definitionsTypes";
import { HorizontalTemplate } from "@/components/ui-templates/HorizontalTemplate";

export default function Hijo() {
  // TRAE TODOS LOS ESTADOS Y VARIABLES DE INTERES DEL HOOK useLogicTemplate();
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
    processData,
    template,
  } = useLogicTemplate();

  // RECIBE MENSAJE DEL PADRE, SI ES NEW_OFFER, ACTUALIZA EL STATE PROMOTION CON TODOS LOS DATOS.
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "NEW_OFFER") {
        try {
          const datos: PromotionData = JSON.parse(event.data.payload);
          console.log("Datos recibidos del padre:", datos);

          // Ejecutamos processData con los datos recibidos
          processData(datos);
        } catch (error) {
          console.error("Error al parsear los datos recibidos:", error);
        }
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [processData]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* APLICA LOGICA DE TEMPLATE VERTICAL */}
        {template === DesignType.VERTICAL && (
          <VerticalTemplate
            isLoading={isLoading}
            mainProduct={mainProduct}
            handleClose={handleClose}
            handleOpenModalViewProduct={handleOpenModalViewProduct}
            titleText={titleText}
            recommendedProducts={recommendedProducts}
          />
        )}

        {/* APLICA LOGICA DE TEMPLATE HORIZONTAL */}
        {template === DesignType.HORIZONTAL && (
          <HorizontalTemplate
            mainProduct={mainProduct}
            handleClose={handleClose}
            handleOpenModalViewProduct={handleOpenModalViewProduct}
            recommendedProducts={recommendedProducts}
            isLoading={isLoading}
            titleText={titleText}
          />
        )}
      </Sheet>

      {selectedProduct && (
        <ProductView
          product={selectedProduct}
          isOpen={isOpen}
          onClose={handleClose}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}