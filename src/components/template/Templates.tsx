"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchDataFromJson } from "@/app/actions/actions";
import { PromotionData } from "@/domain/definitionsTypes";
import { useDynamicFont } from "@/app/fonts/fonts";
import { useLogicTemplate } from "@/hooks/useLogicTemplate";

const SplitViewTemplates = () => {
  const mobileIframeRef = useRef<HTMLIFrameElement>(null);
  const desktopIframeRef = useRef<HTMLIFrameElement>(null);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [respuestas, setRespuestas] = useState<{
    mobile: string | null;
    desktop: string | null;
  }>({ mobile: null, desktop: null });
  const [error, setError] = useState<string | null>(null);
  const { isLoaded } = useDynamicFont();
  const { isLoading } = useLogicTemplate();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://crossup-406-template1.vercel.app/") return;

      let parsedData;
      if (typeof event.data === "string") {
        try {
          console.log(event.data);
          parsedData = JSON.parse(event.data);
        } catch (error) {
          console.error("Error parsing message:", error);
          return;
        }
      } else {
        parsedData = event.data;
      }

      if (!parsedData || !parsedData.type) {
        console.error("Invalid message format");
        return;
      }

      const source = event.source as Window;
      let responseMessage = "";

      console.log(parsedData);
      switch (parsedData.type) {
        case "ADD_TO_CART":
          const { quantity, variant } = parsedData.payload;
          responseMessage = `type: ADD_TO_CART, payload: "${quantity} of variant ${variant.id} to cart"`;
          break;
        case "IGNORE_OFFER":
          responseMessage = "IGNORE_OFFER";
          break;
        case "WATCH_MORE":
          const { productId, productName } = parsedData.payload;
          responseMessage = `type: WATCH_MORE, payload: "${productName.es}, ID: ${productId}"`;
          break;
        default:
          console.error("Unknown message type:", parsedData.type);
          return;
      }

      updateResponse(source, responseMessage);
    };

    const updateResponse = (source: Window, message: string) => {
      if (source === mobileIframeRef.current?.contentWindow) {
        setRespuestas((prev) => ({ ...prev, mobile: message }));
      } else if (source === desktopIframeRef.current?.contentWindow) {
        setRespuestas((prev) => ({ ...prev, desktop: message }));
      } else {
        console.error("Message received from unknown source");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // simula la accion del parent, enviando un payload string que recibe como response de una llamada a la api de cross up
  const sendMessageChildren = async () => {
    try {
      const data: PromotionData = await fetchDataFromJson("template1D");
      const dataPayload = JSON.stringify(data);

      [mobileIframeRef, desktopIframeRef].forEach((ref) => {
        if (ref.current?.contentWindow) {
          ref.current.contentWindow.postMessage(
            { type: "NEW_OFFER", payload: dataPayload },
            "https://crossup-406-template1.vercel.app/"
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
  };

  // ejecuta funcion de forma automatica.
  useEffect(() => {
    if (isLoaded && !isLoading) {
      // Agregar un retraso para asegurar que los iframes estén listos
      setTimeout(() => {
        sendMessageChildren();
      }, 1500); // tiempo para actualizar promotion states en el cliente
    }
  }, [isLoaded, isLoading]);

  return (
    <div className="flex flex-col h-screen bg-background p-4">
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-2xl font-bold">
          Vista Dividida - Mobile y Desktop
        </h1>
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
        {/* Vista Mobile */}
        <div className="w-1/4 bg-background rounded-lg shadow-lg overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="bg-muted px-4 py-2 text-sm font-medium">
              Vista Mobile
            </div>
            <div className="relative flex-1" style={{ aspectRatio: "9/16" }}>
              <iframe
                ref={mobileIframeRef}
                src="https://crossup-406-template1.vercel.app/children"
                className="absolute inset-0 w-full h-full border-0"
                style={{ backgroundColor: "white" }}
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
          </div>
        </div>

        {/* Vista Desktop */}
        <div className="flex-1 bg-background rounded-lg shadow-lg overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="bg-muted px-4 py-2 text-sm font-medium">
              Vista Desktop
            </div>
            <div className="relative flex-1">
              <iframe
                ref={desktopIframeRef}
                src="https://crossup-406-template1.vercel.app/children"
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
  );
};

export default SplitViewTemplates;
