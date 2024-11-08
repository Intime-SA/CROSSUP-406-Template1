import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const useProductSelectors = () => {
  const quantity = useSelector(
    (state: RootState) => state.selectedTarget.quantity
  );

  const visibilityDescription = useSelector(
    (state: RootState) => state.promotion.visibilityDescription
  );

  const amountOfTime = useSelector(
    (state: RootState) => state.promotion.amountOfTime
  );

  const timerGlobal = useSelector(
    (state: RootState) => state.promotion.timerGlobal
  );

  const discountIsActive = useSelector(
    (state: RootState) => state.promotion.discountIsActive
  );

  const discountAmount = useSelector(
    (state: RootState) => state.promotion.discountAmount
  );

  const isFixedDiscount = useSelector(
    (state: RootState) => state.promotion.fixedDiscount
  );

  const hasShortage = useSelector(
    (state: RootState) => state.promotion.hasShortage
  );

  const hasShortageText = useSelector(
    (state: RootState) => state.promotion.hasShortageText
  );

  const hasShortageGlobal = useSelector(
    (state: RootState) => state.promotion.hasShortageGlobal
  );

  const canModifyQuantity = useSelector(
    (state: RootState) => state.promotion.canModifyQuantity
  );

  const selectedVariant = useSelector(
    (state: RootState) => state.selectedTarget.selectedVariant
  );
  const addToCartButton = useSelector(
    (state: RootState) => state.promotion.addToCartButton
  );

  return {
    quantity,
    visibilityDescription,
    amountOfTime,
    timerGlobal,
    discountIsActive,
    discountAmount,
    isFixedDiscount,
    hasShortage,
    hasShortageText,
    hasShortageGlobal,
    canModifyQuantity,
    selectedVariant,
    addToCartButton,
  };
};
