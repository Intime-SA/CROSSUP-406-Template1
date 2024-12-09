import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

// hook para exportar states
export const useProductSelectors = () => {
  // persistencia del selected Tareget / variant seleccionada.
  const quantity = useSelector(
    (state: RootState) => state.selectedTarget.quantity
  );
  const selectedVariant = useSelector(
    (state: RootState) => state.selectedTarget.selectedVariant
  );

  // persistencia de screemshot de la offer/sugerencia/promocion

  const hasShortageUnit = useSelector(
    (state: RootState) => state.promotion.hasShortageUnit
  );
  const desingType = useSelector(
    (state: RootState) => state.promotion.desingType
  );
  const visibilityDescription = useSelector(
    (state: RootState) => state.promotion.visibilityDescription
  );
  const colors = useSelector((state: RootState) => state.promotion.colors);

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

  const addToCartButton = useSelector(
    (state: RootState) => state.promotion.addToCartButton
  );
  /*   const fontFamily = useSelector(
    (state: RootState) => state.promotion.colors?.font
  ); */

  // return de states
  return {
    /*     fontFamily, */
    colors,
    quantity,
    desingType,
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
    hasShortageUnit,
  };
};
