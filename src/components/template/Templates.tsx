"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchDataFromJson } from "@/app/actions/actions";
import { PromotionData } from "@/domain/definitionsTypes";
import { Button } from "@/components/ui/button";
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
      if (event.data && event.data.type === "HIJO_LISTO") {
        const source = event.source;

        if (source === mobileIframeRef.current?.contentWindow) {
          setRespuestas((prev) => ({ ...prev, mobile: event.data.mensaje }));
        } else if (source === desktopIframeRef.current?.contentWindow) {
          setRespuestas((prev) => ({ ...prev, desktop: event.data.mensaje }));
        }
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
            "*"
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
          <Button onClick={sendMessageChildren} disabled={mensajeEnviado}>
            Enviar mensaje a ambas vistas
          </Button>
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
                src="/children"
                className="absolute inset-0 w-full h-full border-0"
                style={{ backgroundColor: "white" }}
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
                src="/children"
                className="absolute inset-0 w-full h-full border-0"
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitViewTemplates;
