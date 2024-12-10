"use client";

import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { handleWatchMore, onClosePopUp } from "@/lib/functions";
import {
  TargetProduct,
  MainProduct2,
  PromotionData,
} from "@/domain/definitionsTypes";
import { updateMultipleStates } from "@/redux/features/promotionSlice";
import { NEW_OFFER } from "@/constants";
/* import { fetchDataFromJson } from "@/app/actions/actions"; */
import { getMockOfferData3 } from "@/data/data3";

// hook de logica
export const useLogicTemplate = () => {
  // guarda en un estado el product disparador de oferta "shooter"
  const [mainProduct, setMainProduct] = useState<MainProduct2 | null>(null);

  // guarda en un estado el array de productos recomendados "targets"
  const [recommendedProducts, setRecommendedProducts] = useState<
    TargetProduct[]
  >([]);

  // guarda en un estado para abrir y cerrar modals/popUp
  const [isOpen, setIsOpen] = useState(false);

  // selecciona a un producto recomendado y/o producto disparador para pasarle como prop a la vista
  const [selectedProduct, setSelectedProduct] = useState<TargetProduct | null>(
    null
  );

  // maneja estado de carga para dar aviso cuando se terminan de procesar la data.
  const [isLoading, setIsLoading] = useState(false);

  // persiste el tipo de template a utilizar
  const [template, setTemplate] = useState(0);

  const [titleText, setTitleText] = useState("");

  // inicializa dispatch para ejecutar update state de redux.
  const dispatch = useDispatch();

  // procesa data recibida del parent y la mapea para actualizar el state promotionSlice de redux
  const processData = useCallback(
    (data: PromotionData | null) => {
      if (!data) {
        console.log("Received null or undefined data in processData");
        return;
      }

      // states de promotionSlice.ts
      const stateUpdates = {
        amountOfTime: data.characteristics.timer.amount ?? 0,
        timerGlobal: data.characteristics.timer.isActive ?? false,
        discountIsActive: data.characteristics.discount.isActive ?? false,
        fixedDiscount: data.characteristics.discount.amount < 1 ? false : true,
        discountAmount: data.characteristics.discount.amount ?? 0,
        /* hasShortageGlobal:
          (data.characteristics.shortage.isActive &&
            data.showingPlace === "cart") ??
          false, */
        hasShortageGlobal: data.characteristics.shortage.isAutomatic ?? false,
        canModifyQuantity: data.canModifyQuantity ?? false,
        hasShortageText: data.characteristics.shortage.text ?? 0,
        visibilityDescription: true,
        quantityProducts: data.targets?.length ?? 0,
        titleText: data.characteristics.text.content ?? "",
        addToCartButton: data.characteristics.text.button ?? "",
        designType: data.characteristics.designType ?? 0,
        colors: data.characteristics.colors ?? {},
      };

      // dispatch para actualizar state global.
      dispatch(updateMultipleStates(stateUpdates));

      // aplica al main product (shooter)
      if (data.shooters && data.shooters.length > 0) {
        setMainProduct(data.shooters[0]);
      }

      // aplica a los recomended products (targets)
      if (data.targets && data.targets.length > 0) {
        setRecommendedProducts(data.targets);
      }

      // aplica el template segun el desingType
      if (data.characteristics.designType) {
        setTemplate(data.characteristics.designType);
      }

      // aplica el titleText de la promocion.
      if (data.characteristics.text.content) {
        setTitleText(data.characteristics.text.content);
      }

      // pasa a true estado para abrir PopUp / Sheet, segun corresponda.
      setIsOpen(true);

      // determina que ya se aplico correctamente los estados
      setIsLoading(false);
    },
    [dispatch]
  );

  // funcion para enviar mensaje
  const handleMessage = useCallback(
    (event: MessageEvent) => {
      if (
        event.data &&
        typeof event.data === "object" &&
        "type" in event.data
      ) {
        const { data, type } = event.data;

        if (type === NEW_OFFER) {
          processData(data);
        }
      }
    },
    [processData]
  );

  // queda a la escucha de mensajes
  useEffect(() => {
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);

  const [selectedTemplate, setSelectedTemplate] =
    useState<string>("template1C");

  useEffect(() => {
    const fetchAndProcessData = async () => {
      try {
        const data: PromotionData = getMockOfferData3();
        processData(data);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
        // Handle the error appropriately, e.g., set an error state
      }
    };

    fetchAndProcessData();
  }, [selectedTemplate]);

  // funcion para abrir los modal a traves de selectProduct o watchMore
  const handleOpenModalViewProduct = useCallback((product: TargetProduct) => {
    setSelectedProduct(product);
    handleWatchMore(product);
  }, []);

  // funcion para cerrar popUps
  const handleClose = useCallback(() => {
    onClosePopUp("closeModal");
    setIsOpen(false);
    setSelectedProduct(null);
  }, []);

  // exportacion de los metodos del hook.
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
    processData,
    template,
    selectedTemplate,
    setSelectedTemplate,
  };
};
