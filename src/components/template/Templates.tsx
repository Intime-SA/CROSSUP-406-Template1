"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { fetchDataFromJson } from "@/app/actions/actions";
import { PromotionData } from "@/domain/definitionsTypes";
import { useDynamicFont } from "@/app/fonts/fonts";
import { useLogicTemplate } from "@/hooks/useLogicTemplate";
import { Button } from "@/components/ui/button";
import { ADD_TO_CART, IGNORE_OFFER, NEW_OFFER, WATCH_MORE } from "@/constants";
import { templateOptions } from "@/lib/utils";

const PARENT_URL =
  process.env.NEXT_PUBLIC_URL_PARENT_DEPLOY ||
  "https://crossup-406-template1.vercel.app/";

export default function SplitViewTemplates() {
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
  const [selectedTemplate, setSelectedTemplate] =
    useState<string>("template1D");

  useEffect(() => {
    const savedTemplate = localStorage.getItem("selectedTemplate");
    if (
      savedTemplate &&
      templateOptions[savedTemplate as keyof typeof templateOptions]
    ) {
      setSelectedTemplate(savedTemplate);
    } else {
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);

  const handleMessage = useCallback((event: MessageEvent) => {
    console.log("Received message:", event);
    if (event.origin !== PARENT_URL) {
      console.log("Origin mismatch:", event.origin, PARENT_URL);
      return;
    }

    let parsedData;
    if (typeof event.data === "string") {
      try {
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

    console.log("Parsed data:", parsedData);
    switch (parsedData.type) {
      case ADD_TO_CART:
        const { quantity, variant } = parsedData.payload;
        responseMessage = `type: ADD_TO_CART, payload: "${quantity} of variant ${variant.id} to cart"`;
        break;
      case IGNORE_OFFER:
        responseMessage = `type: IGNORE_OFFER`;
        break;
      case WATCH_MORE:
        const { productId, productName } = parsedData.payload;
        responseMessage = `type: WATCH_MORE, payload: "${productName.es}, ID: ${productId}"`;
        break;
      default:
        console.error("Unknown message type:", parsedData.type);
        return;
    }

    updateResponse(source, responseMessage);
  }, []);

  const updateResponse = useCallback((source: Window, message: string) => {
    if (source === mobileIframeRef.current?.contentWindow) {
      setRespuestas((prev) => ({ ...prev, mobile: message }));
    } else if (source === desktopIframeRef.current?.contentWindow) {
      setRespuestas((prev) => ({ ...prev, desktop: message }));
    } else {
      console.error("Message received from unknown source");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

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
        <div className="w-1/4 bg-background rounded-lg shadow-lg overflow-hidden">
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
