"use client";

import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { handleWatchMore, onClosePopUp } from "@/lib/functions";
import {
  TargetProduct,
  MainProduct2,
  PromotionData,
  Colors,
} from "@/domain/definitionsTypes";
import { updateMultipleStates } from "@/redux/features/promotionSlice";
import { NEW_OFFER } from "@/constants";
import { fetchDataFromJson } from "@/app/actions/actions";

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
  const [template, setTemplate] = useState("");

  const [titleText, setTitleText] = useState("");

  // inicializa dispatch para ejecutar update state de redux.
  const dispatch = useDispatch();

  // update variables globales del global.css
  const updateCSSVariables = useCallback((colors: Colors) => {
    document.documentElement.style.setProperty(
      "--primary-text",
      colors.primary
    );
    document.documentElement.style.setProperty(
      "--border-components",
      colors.secondary
    );
  }, []);

  // procesa data recibida del parent y la mapea para actualizar el state promotionSlice de redux
  const processData = useCallback(
    (data: PromotionData | null) => {
      if (!data) {
        console.log("Received null or undefined data in processData");
        return;
      }

      // states de promotionSlice.ts
      const stateUpdates = {
        amountOfTime: data.timer?.amountOfTime ?? 0,
        timerGlobal: data.timer?.hasTimer ?? false,
        discountIsActive: data.discount?.isActive ?? false,
        fixedDiscount: data.discount?.isFixedDiscount ?? false,
        discountAmount: data.discount?.amount ?? 0,
        hasShortageGlobal:
          (data.shortage?.hasShortage && data.showingPlace === "cart") ?? false,
        canModifyQuantity: data.canModifyQuantity ?? false,
        hasShortage: data.shortage?.hasShortage ?? false,
        hasShortageText: data.shortage?.text ?? "",
        visibilityDescription: true,
        quantityProducts: data.targets?.length ?? 0,
        titleText: data.text?.title ?? "",
        addToCartButton: data.text?.buttonAccept ?? "",
        designType: data.desingType ?? "",
        colors: data.colors ?? { primary: "", secondary: "" },
      };

      // dispatch para actualizar state global.
      dispatch(updateMultipleStates(stateUpdates));

      // aplica estado global sobre los colores.
      if (data.colors) {
        updateCSSVariables(data.colors);
      }

      // aplica al main product (shooter)
      if (data.shooters && data.shooters.length > 0) {
        setMainProduct(data.shooters[0]);
      }

      // aplica a los recomended products (targets)
      if (data.targets && data.targets.length > 0) {
        setRecommendedProducts(data.targets);
      }

      // aplica el template segun el desingType
      if (data.desingType) {
        setTemplate(data.desingType);
      }

      // aplica el titleText de la promocion.
      if (data.text.title) {
        setTitleText(data.text.title);
      }

      // pasa a true estado para abrir PopUp / Sheet, segun corresponda.
      setIsOpen(true);

      // determina que ya se aplico correctamente los estados
      setIsLoading(false);
    },
    [dispatch, updateCSSVariables]
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
        const data: PromotionData = await fetchDataFromJson(selectedTemplate);
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
