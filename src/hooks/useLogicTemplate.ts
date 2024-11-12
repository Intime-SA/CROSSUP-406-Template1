"use client";

import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClosePopUp } from "@/lib/functions";
import {
  TargetProduct,
  MainProduct2,
  PromotionData,
  Colors,
} from "@/domain/definitionsTypes";
import { updateMultipleStates } from "@/redux/features/promotionSlice";
import { RootState } from "@/redux/store";
import { NEW_OFFER } from "@/constants";

export const useLogicTemplate = () => {
  const [mainProduct, setMainProduct] = useState<MainProduct2 | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<
    TargetProduct[]
  >([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TargetProduct | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const titleText = useSelector(
    (state: RootState) => state.promotion.titleText
  );

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

  const processData = useCallback(
    (data: PromotionData | null) => {
      if (!data) {
        console.log("Received null or undefined data in processData");
        return;
      }

      const stateUpdates = {
        amountOfTime: data.timer?.amountOfTime ?? 0,
        timerGlobal: data.timer?.hasTimer ?? false,
        discountIsActive: data.discount?.isActive ?? false,
        fixedDiscount: data.discount?.isFixedDiscount ?? false,
        discountAmount: data.discount?.amount ?? 0,
        hasShortageGlobal:
          (data.shortage?.hasShortage && data.showingPlace === "checkout") ??
          false,
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

      dispatch(updateMultipleStates(stateUpdates));

      if (data.colors) {
        updateCSSVariables(data.colors);
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
    [dispatch, updateCSSVariables]
  );

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

  useEffect(() => {
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [handleMessage]);

  const handleOpenModalViewProduct = useCallback((product: TargetProduct) => {
    setSelectedProduct(product);
  }, []);

  const handleClose = useCallback(() => {
    onClosePopUp("closeModal");
    setIsOpen(false);
    setSelectedProduct(null);
  }, []);

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
  };
};
