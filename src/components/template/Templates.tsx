"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { fetchDataFromJson } from "@/app/actions/actions";
import { DesignType, PromotionData } from "@/domain/definitionsTypes";
import { useDynamicFont } from "@/app/fonts/fonts";
import { useLogicTemplate } from "@/hooks/useLogicTemplate";
import { Button } from "@/components/ui/button";
import { ADD_TO_CART, IGNORE_OFFER, NEW_OFFER, WATCH_MORE } from "@/constants";
import { templateOptions } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Sheet } from "../ui/sheet";
import { VerticalTemplate } from "../ui-templates/VerticalTemplate";
import HorizontalTemplate from "../ui-templates/HorizontalTemplate";
import HistoryTemplate from "../ui-templates/HistoryTemplate";
import ProductView from "../ui-templates/ProductView";

// URL IFRAME
const PARENT_URL =
  process.env.NEXT_PUBLIC_URL_PARENT_DEPLOY || "http://localhost:3000";

// SIMULADOR DE PARENT
export default function SplitViewTemplates() {
  const mobileIframeRef = useRef<HTMLIFrameElement>(null); // SIMULACION MOBILE IFRAME
  const desktopIframeRef = useRef<HTMLIFrameElement>(null); // SIMULACION DESKTOP IFRAME
  const [mensajeEnviado, setMensajeEnviado] = useState(false); // MENSAJE ENVIADO AL HIJO

  // RESPUESTAS DEL HIJO PARA RENDERIZAR
  const [respuestas, setRespuestas] = useState<{
    mobile: string | null;
    desktop: string | null;
  }>({ mobile: null, desktop: null });

  console.log(mensajeEnviado, respuestas);

  // ERRORES
  const [error, setError] = useState<string | null>(null);

  // IMPORTACION DE STATE LOADED DE FONTS
  const { isLoaded } = useDynamicFont();

  // IMPORTACION DE STATE LOADING DE LOGICA
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
    selectedTemplate,
    setSelectedTemplate,
  } = useLogicTemplate();
  // SELECCION DE TEMPLATE PARA MOSTRAR
  /*   const [selectedTemplate, setSelectedTemplate] =
    useState<string>("template1D"); */

  useEffect(() => {
    localStorage.setItem("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);

  // RECEPCION DE MENSAJES
  const handleMessage = useCallback((event: MessageEvent) => {
    // SI EL MENSAJE ES UN STRING, PARSEARLO. SINO ERROR.
    let parsedData;
    if (typeof event.data === "string") {
      try {
        parsedData = JSON.parse(event.data);
      } catch (error) {
        console.log("Error parsing message:", error);
        return;
      }
    } else {
      parsedData = event.data;
    }

    // SI NO ES UN STRING, QUE FINALICE LA FUNCTION
    if (!parsedData || !parsedData.type) {
      return;
    }

    // SIMULAR EL SOURCE CON UN
    const source = event.source as Window;
    let responseMessage = "";

    // MANEJO DE RESPUESTA
    switch (parsedData.type) {
      case ADD_TO_CART:
        const { quantity, variant } = parsedData.payload;
        responseMessage = `type: ADD_TO_CART, payload: "${quantity} of variant ${variant.id} to cart"`;
        break;
      case IGNORE_OFFER:
        responseMessage = "type: IGNORE_OFFER";
        break;
      case WATCH_MORE:
        const { productId, productName } = parsedData.payload;
        responseMessage = `type: WATCH_MORE, payload: "${productName.es}, ID: ${productId}"`;
        break;
      default:
        console.error("Unknown message type:", parsedData.type);
        return;
    }

    // ENVIO DE PARAMETROS PARA ACTUALIZAR RESPONSE
    updateResponse(source, responseMessage);
  }, []);

  // ACTUALIZAR RESPUESTAS CON MENSAJE Y WINDOW
  const updateResponse = useCallback((source: Window, message: string) => {
    if (source === mobileIframeRef.current?.contentWindow) {
      setRespuestas((prev) => ({ ...prev, mobile: message }));
    } else if (source === desktopIframeRef.current?.contentWindow) {
      setRespuestas((prev) => ({ ...prev, desktop: message }));
    } else {
      console.error("Message received from unknown source");
    }
  }, []);

  // EVENTO DE ESCUCHA DE MENSAJES.
  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  // SELECCION DE METODO PARA ENVIAR AL CHILDREN
  const sendMessageChildren = useCallback(async () => {
    try {
      const data: PromotionData = await fetchDataFromJson(selectedTemplate);
      const dataPayload = JSON.stringify(data);

      [mobileIframeRef, desktopIframeRef].forEach((ref) => {
        if (ref.current?.contentWindow) {
          ref.current.contentWindow.postMessage(
            { type: NEW_OFFER, payload: dataPayload },
            PARENT_URL
          );
        }
      });
      setMensajeEnviado(true);
      setRespuestas({ mobile: null, desktop: null });
      setError(null);
    } catch (err) {
      console.error("Error al obtener o enviar datos:", err);
      setError(
        "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo."
      );
    }
  }, [selectedTemplate]);

  // TIMEOUT PARA ENVIAR MENSAJE DESPUES DE APLICAR LOS STATES.
  useEffect(() => {
    if (isLoaded && !isLoading) {
      setTimeout(() => {
        sendMessageChildren();
      }, 1500);
    }
  }, [isLoaded, isLoading, selectedTemplate, sendMessageChildren]);

  const t = useTranslations("HomePage");

  // RECIBE MENSAJE DEL PADRE, SI ES NEW_OFFER, ACTUALIZA EL STATE PROMOTION CON TODOS LOS DATOS.
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === "NEW_OFFER") {
        try {
          const datos: PromotionData = JSON.parse(event.data.payload);
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
    <div className="flex flex-col h-screen bg-background p-4">
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-2xl font-bold">
          <h1>{t("about")}</h1>
        </h1>
        <div className="flex gap-2 flex-wrap">
          {Object.entries(templateOptions).map(([key, { label, type }]) => (
            <Button
              key={key}
              onClick={() => setSelectedTemplate(type)}
              variant={selectedTemplate === type ? "default" : "outline"}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {error && <p className="text-red-500">{error}</p>}
        </div>
        {/*         {mensajeEnviado && (
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Mobile:</strong>{" "}
              {respuestas.mobile || "Esperando respuesta..."}
            </div>
            <div>
              <strong>Desktop:</strong>{" "}
              {respuestas.desktop || "Esperando respuesta..."}
            </div>
          </div>
        )} */}
      </div>

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
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              mainProduct={mainProduct}
              handleClose={handleClose}
              handleOpenModalViewProduct={handleOpenModalViewProduct}
              recommendedProducts={recommendedProducts}
              isLoading={isLoading}
              titleText={titleText}
              template={template}
            />
          )}

          {template === DesignType.HISTORY && (
            <HistoryTemplate
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              mainProduct={mainProduct}
              handleClose={handleClose}
              handleOpenModalViewProduct={handleOpenModalViewProduct}
              recommendedProducts={recommendedProducts}
              isLoading={isLoading}
              titleText={titleText}
              template={template}
            />
          )}
        </Sheet>

        {/* APLICA LOGICA DE OPEN PRODUCTO ESPECIFICO HORIZONTAL Y VERTICAL */}
        {selectedProduct && (
          <ProductView
            product={selectedProduct}
            isOpen={isOpen}
            onClose={handleClose}
            setIsOpen={setIsOpen}
            template={template}
          />
        )}
      </div>
    </div>
  );
}
