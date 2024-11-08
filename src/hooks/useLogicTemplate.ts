import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onClosePopUp } from "@/lib/functions";
import {
  RecommendedProduct2,
  MainProduct2,
  PromotionData,
} from "@/domain/definitionsTypes";
import { updateMultipleStates } from "@/redux/features/promotionSlice";
import { fetchDataFromJson } from "@/app/actions/actions";
import { RootState } from "@/redux/store";

export const useLogicTemplate = () => {
  const [mainProduct, setMainProduct] = useState<MainProduct2 | null>(null);
  const [recommendedProducts, setRecommendedProducts] = useState<
    RecommendedProduct2[] | null
  >(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<RecommendedProduct2 | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const titleText = useSelector(
    (state: RootState) => state.promotion.titleText
  );

  const processData = (data: PromotionData) => {
    const stateUpdates = {
      amountOfTime: data.timer.amountOfTime,
      timerGlobal: data.timer.hasTimer,
      discountIsActive: data.discount.isActive,
      fixedDiscount: data.discount.isFixedDiscount,
      discountAmount: data.discount.amount,
      hasShortageGlobal:
        data.shortage.hasShortage && data.showingPlace === "checkout",
      hasShortage: data.shortage.hasShortage,
      hasShortageText: data.shortage.text,
      visibilityDescription: true,
      quantityProducts: data.targets ? data.targets.length : 0,
      titleText: data.text.title,
      addToCartButton: data.text.buttonAccept,
    };

    dispatch(updateMultipleStates(stateUpdates));

    if (data.shooters && data.shooters.length > 0) {
      setMainProduct(data.shooters[0]);
    }

    if (data.targets && data.targets.length > 0) {
      setRecommendedProducts(data.targets);
    }

    setIsOpen(true);
    setIsLoading(false);
  };

  const handleOpenModalViewProduct = (product: RecommendedProduct2) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    onClosePopUp("closeModal");
    setIsOpen(false);
    setSelectedProduct(null);
  };

  const handleInitializeTiendaNube = async (typeTemplate: string) => {
    try {
      setIsLoading(true);
      const data = await fetchDataFromJson(typeTemplate);
      processData(data);
    } catch (error) {
      console.error("Error al inicializar Tienda Nube:", error);
      setIsLoading(false);
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
  };
};
