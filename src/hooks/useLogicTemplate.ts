"use client";

import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClosePopUp } from "@/lib/functions";
import {
  TargetProduct,
  MainProduct2,
  PromotionData,
} from "@/domain/definitionsTypes";
import { updateMultipleStates } from "@/redux/features/promotionSlice";
import { RootState } from "@/redux/store";
import { NEW_OFFER } from "@/constants";
import { fetchDataFromJson } from "@/app/actions/actions";

export const useLogicTemplate = () => {
  // state local maneja shooter
  const [mainProduct, setMainProduct] = useState<MainProduct2 | null>(null);

  // state local maneja targets
  const [recommendedProducts, setRecommendedProducts] = useState<
    TargetProduct[] | null
  >(null);

  // state local maneja open modal popUp
  const [isOpen, setIsOpen] = useState(false);

  // state local maneja producto seleccionado
  const [selectedProduct, setSelectedProduct] = useState<TargetProduct | null>(
    null
  );

  // state local maneja estado cargando mientras cargan los datos renderiza Gift
  const [isLoading, setIsLoading] = useState(false);

  const [isInitialized, setIsInitialized] = useState(false);

  // instancia el dispatch para utilizarlo
  const dispatch = useDispatch();

  // selecciona state de titleText
  const titleText = useSelector(
    (state: RootState) => state.promotion.titleText
  );

  // funcion para actualizar colores globals.css
  const updateCSSVariables = (primary: string, secondary: string) => {
    document.documentElement.style.setProperty("--primary-text", primary);
    document.documentElement.style.setProperty(
      "--border-components",
      secondary
    );
  };

  // mapea y procesa toda la data recibida en el JSON y la aplica en el state promotion con sus respectivas diferencias.
  const processData = useCallback(
    (data: PromotionData) => {
      const stateUpdates = {
        colors: data.colors,
        amountOfTime: data.timer.amountOfTime,
        timerGlobal: data.timer.hasTimer,
        discountIsActive: data.discount.isActive,
        fixedDiscount: data.discount.isFixedDiscount,
        discountAmount: data.discount.amount,
        hasShortageGlobal:
          data.shortage.hasShortage && data.showingPlace === "checkout",
        canModifyQuantity: data.canModifyQuantity,
        hasShortage: data.shortage.hasShortage,
        hasShortageText: data.shortage.text,
        visibilityDescription: true,
        quantityProducts: data.targets ? data.targets.length : 0,
        titleText: data.text.title,
        addToCartButton: data.text.buttonAccept,
        designType: data.desingType,
      };

      dispatch(updateMultipleStates(stateUpdates));

      if (data.colors) {
        updateCSSVariables(data.colors.primary, data.colors.secondary);
      }

      if (data.shooters && data.shooters.length > 0) {
        setMainProduct(data.shooters[0]);
      }

      if (data.targets && data.targets.length > 0) {
        setRecommendedProducts(data.targets);
      }

      setIsOpen(true);
      setIsLoading(false);
    },
    [dispatch]
  );

  // simula recepcion del mensaje del parent
  const handleMessage = useCallback(
    async (event: MessageEvent) => {
      const { data, type } = event.data;

      if (type === NEW_OFFER) {
        processData(data);
      }
    },
    [processData]
  );

  // escucha mensaje
  useEffect(() => {
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);

  // genera la carga de data (TEMPORAL HASTA ACOPLAR 100% CON EL PARENT)
  useEffect(() => {
    if (!isInitialized) {
      const initializeData = async () => {
        setIsLoading(true);
        try {
          const data = await fetchDataFromJson("template1D");
          processData(data);
        } catch (error) {
          console.error("Error fetching initial data:", error);
        } finally {
          setIsLoading(false);
          setIsInitialized(true);
        }
      };

      initializeData();
    }
  }, [isInitialized, processData]);

  // envia mensaje al parent
  const sendMessage = (type: string, payload?: string) => {
    const message = { type, payload };
    window.parent.postMessage(JSON.stringify(message), "*");
  };

  // abre con la seleccion del producto reocmendado
  const handleOpenModalViewProduct = (product: TargetProduct) => {
    setSelectedProduct(product);
  };

  // cierra el modal del viewProduct
  const handleClose = () => {
    onClosePopUp("closeModal");
    setIsOpen(false);
    setSelectedProduct(null);
  };

  // ex inicializador. Maneja el state de carga nada mas.
  const handleInitializeTiendaNube = () => {
    if (!isInitialized) {
      setIsLoading(true);
    }
  };

  return {
    mainProduct,
    recommendedProducts,
    isOpen,
    setIsOpen,
    selectedProduct,
    isLoading,
    titleText,
    handleOpenModalViewProduct,
    handleClose,
    handleInitializeTiendaNube,
    sendMessage,
  };
};
