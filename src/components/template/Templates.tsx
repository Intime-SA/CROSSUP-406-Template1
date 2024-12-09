"use client";

import React, { useEffect, useCallback, useState, useRef } from "react";
import { Colors, DesignType } from "@/domain/definitionsTypes";
import { useDynamicFont } from "@/app/fonts/fonts";
import { useLogicTemplate } from "@/hooks/useLogicTemplate";
import { Button } from "@/components/ui/button";
import { templateOptions } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { Sheet } from "../ui/sheet";
import { VerticalTemplate } from "../ui-templates/VerticalTemplate";
import HorizontalTemplate from "../ui-templates/HorizontalTemplate";
import HistoryTemplate from "../ui-templates/HistoryTemplate";
import ProductView from "../ui-templates/ProductView";
import { fetchDataFromJson } from "@/app/actions/actions";
import {
  updateAddToCartButton,
  updateColors,
  updateDiscount,
  updateShortage,
  updateTimer,
  updateTitleText,
} from "@/redux/features/promotionSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function SplitViewTemplates() {
  const { isLoaded } = useDynamicFont();
  const {
    mainProduct,
    recommendedProducts,
    isOpen,
    setIsOpen,
    selectedProduct,
    isLoading,
    handleOpenModalViewProduct,
    handleClose,
    template,
    selectedTemplate,
    setSelectedTemplate,
  } = useLogicTemplate();

  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [respuestas, setRespuestas] = useState<{
    mobile: string | null;
    desktop: string | null;
  }>({ mobile: null, desktop: null });

  console.log(mensajeEnviado, error, respuestas);

  const dispatch = useDispatch();
  const [receivedDesignType, setReceivedDesignType] = useState<DesignType>(
    DesignType.VERTICAL
  );
  const titleText = useSelector(
    (state: RootState) => state.promotion.titleText
  );

  const mobileIframeRef = useRef<HTMLIFrameElement>(null);
  const desktopIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    localStorage.setItem("selectedTemplate", selectedTemplate);
  }, [selectedTemplate]);

  function updateCSSVariables(colors: Colors) {
    document.documentElement.style.setProperty("--primary-text", colors.text);
    document.documentElement.style.setProperty(
      "--border-components",
      colors.button
    );
    document.documentElement.style.setProperty(
      "--button-text",
      colors.buttonText
    );
  }

  const handleMessage = useCallback(
    (event: MessageEvent) => {
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

      if (!parsedData || !parsedData.type) {
        return;
      }

      console.log("Received message:", parsedData);

      const source = event.source as Window;
      let responseMessage = "";

      switch (parsedData.type) {
        case "ADD_TO_CART":
          const { quantity, variant } = parsedData.payload;
          responseMessage = `type: ADD_TO_CART, payload: "${quantity} of variant ${variant.id} to cart"`;
          break;
        case "IGNORE_OFFER":
          responseMessage = "type: IGNORE_OFFER";
          break;
        case "WATCH_MORE":
          const { productId, productName } = parsedData.payload;
          responseMessage = `type: WATCH_MORE, payload: "${productName.es}, ID: ${productId}"`;
          break;
        case "DESIGN_TYPE":
          console.log("Design type changed:", parsedData.payload.selectedId);
          responseMessage = `type: DESIGN_TYPE, payload: selectedId: ${parsedData.payload.selectedId}`;
          switch (parsedData.payload.selectedId) {
            case 0:
              setReceivedDesignType(DesignType.VERTICAL);
              break;
            case 1:
              setReceivedDesignType(DesignType.HORIZONTAL);
              break;
            case 2:
              setReceivedDesignType(DesignType.HISTORY);
              break;
            default:
              console.error(
                "Unknown design type:",
                parsedData.payload.selectedId
              );
          }
        case "TEXT_CHANGED":
          console.log("Text changed:", parsedData.payload.text);
          dispatch({
            type: "SET_TITLE_TEXT",
            payload: parsedData.payload.text,
          });
          dispatch(updateTitleText(parsedData.payload.text));
          break;

        case "DISCOUNT_CHANGE":
          console.log("Discount Change", parsedData.payload);
          dispatch(updateDiscount(parsedData.payload.discount));
          break;

        case "TIMMER_CHANGE":
          console.log("Timer Change", parsedData.payload);
          dispatch(updateTimer(parsedData.payload.timer));
          break;

        case "COLOR_CHANGE":
          console.log("Colors changed:", parsedData.payload);
          dispatch({ type: "SET_COLORS", payload: parsedData.payload.colors });
          dispatch(updateColors(parsedData.payload.colors));
          updateCSSVariables(parsedData.payload.colors);
          break;

        case "SHORTAGE_CHANGE":
          console.log("Colors changed:", parsedData.payload);
          dispatch(updateShortage(parsedData.payload.shortage));
          break;

        case "TEXT_BUTTON":
          console.log("Button text changed:", parsedData.payload.text);
          dispatch({
            type: "SET_ADD_TO_CART_BUTTON_TEXT",
            payload: parsedData.payload.text,
          });
          dispatch(updateAddToCartButton(parsedData.payload.text));
          break;
        default:
          console.error("Unknown message type:", parsedData.type);
          return;
      }

      updateResponse(source, responseMessage);
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);

  const sendMessageChildren = useCallback(async () => {
    try {
      const data: any = await fetchDataFromJson(selectedTemplate); // Assuming fetchDataFromJson is defined elsewhere
      const dataPayload = JSON.stringify(data);

      [mobileIframeRef, desktopIframeRef].forEach((ref) => {
        if (ref.current?.contentWindow) {
          ref.current.contentWindow.postMessage(
            { type: "NEW_OFFER", payload: dataPayload }, // Assuming NEW_OFFER is defined elsewhere
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
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  useEffect(() => {
    if (isLoaded && !isLoading) {
      setTimeout(() => {
        sendMessageChildren();
      }, 1500);
    }
  }, [isLoaded, isLoading, selectedTemplate, sendMessageChildren]);

  const t = useTranslations("HomePage");

  const updateResponse = useCallback((source: Window, message: string) => {
    if (source === mobileIframeRef.current?.contentWindow) {
      setRespuestas((prev) => ({ ...prev, mobile: message }));
    } else if (source === desktopIframeRef.current?.contentWindow) {
      setRespuestas((prev) => ({ ...prev, desktop: message }));
    } else {
      console.error("Message received from unknown source");
    }
  }, []);

  const PARENT_URL =
    process.env.NEXT_PUBLIC_URL_PARENT_DEPLOY || "http://localhost:3000";

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
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full m-0 p-10">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          {receivedDesignType === DesignType.VERTICAL && (
            <VerticalTemplate
              isLoading={isLoading}
              mainProduct={mainProduct}
              handleClose={handleClose}
              handleOpenModalViewProduct={handleOpenModalViewProduct}
              titleText={titleText}
              recommendedProducts={recommendedProducts}
            />
          )}

          {receivedDesignType === DesignType.HORIZONTAL && (
            <HorizontalTemplate
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              mainProduct={mainProduct}
              handleClose={handleClose}
              handleOpenModalViewProduct={handleOpenModalViewProduct}
              recommendedProducts={recommendedProducts}
              isLoading={isLoading}
              titleText={titleText}
              template={receivedDesignType}
            />
          )}

          {receivedDesignType === DesignType.HISTORY && (
            <HistoryTemplate
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              mainProduct={mainProduct}
              handleClose={handleClose}
              handleOpenModalViewProduct={handleOpenModalViewProduct}
              recommendedProducts={recommendedProducts}
              isLoading={isLoading}
              titleText={titleText}
              template={receivedDesignType}
            />
          )}
        </Sheet>

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
