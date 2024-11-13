"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { fetchDataFromJson } from "@/app/actions/actions";
import { PromotionData } from "@/domain/definitionsTypes";
import { useDynamicFont } from "@/app/fonts/fonts";
import { useLogicTemplate } from "@/hooks/useLogicTemplate";
import { Button } from "@/components/ui/button";
import { ADD_TO_CART, IGNORE_OFFER, NEW_OFFER, WATCH_MORE } from "@/constants";
import { templateOptions } from "@/lib/utils";

// URL IFRAME
const PARENT_URL =
  process.env.NEXT_PUBLIC_URL_PARENT_DEPLOY ||
  "https://crossup-406-template1.vercel.app/";

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

  // ERRORES
  const [error, setError] = useState<string | null>(null);

  // IMPORTACION DE STATE LOADED DE FONTS
  const { isLoaded } = useDynamicFont();

  // IMPORTACION DE STATE LOADING DE LOGICA
  const { isLoading } = useLogicTemplate();

  // SELECCION DE TEMPLATE PARA MOSTRAR
  const [selectedTemplate, setSelectedTemplate] =
    useState<string>("template1D");

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

  return (
    <div className="flex flex-col h-screen bg-background p-4">
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-2xl font-bold">
          Vista Dividida - Mobile y Desktop
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
        {mensajeEnviado && (
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
        )}
      </div>

      <div className="flex flex-1 gap-4 min-h-0">
        <div className="w-1/6 bg-background rounded-lg shadow-lg overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="bg-muted px-4 py-2 text-sm font-medium">
              Vista Mobile
            </div>
            <div className="relative flex-1" style={{ aspectRatio: "9/16" }}>
              <iframe
                ref={mobileIframeRef}
                src={`${PARENT_URL}/children`}
                className="absolute inset-0 w-full h-full border-0"
                style={{ backgroundColor: "white" }}
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 gap-4 min-h-0">
          <div className="flex-1 bg-background rounded-lg shadow-lg overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="bg-muted px-4 py-2 text-sm font-medium">
                Vista Desktop
              </div>
              <div className="relative flex-1">
                <iframe
                  ref={desktopIframeRef}
                  src={`${PARENT_URL}/children`}
                  className="absolute inset-0 w-full h-full border-0"
                  style={{
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
