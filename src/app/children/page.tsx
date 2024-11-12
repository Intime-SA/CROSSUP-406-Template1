"use client";

import React, { useEffect } from "react";
import { Sheet } from "@/components/ui/sheet";
import { VerticalTemplate } from "@/components/ui-templates/VerticalTemplate";
import ProductView from "@/components/ui-templates/ProductView";
import { useLogicTemplate } from "@/hooks/useLogicTemplate";
import { PromotionData } from "@/domain/definitionsTypes";

export default function Hijo() {
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
  } = useLogicTemplate();

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

    // Notificar al padre que el hijo está listo
    window.parent.postMessage({ type: "HIJO_LISTO" }, "*");

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [processData]);

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
}
