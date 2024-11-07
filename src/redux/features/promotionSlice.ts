import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PromotionState {
  amountOfTime: number;
  timerGlobal: boolean;
  offUnidad: boolean;
  fixedDiscount: boolean;
  offQuantity: number;
  lastUnidadGlobal: boolean;
  lastUnidad: boolean;
  lastUnidadText: string;
  visibilityDescription: boolean;
  quantityProducts: number;
  titleText: string;
  addToCartButton: string;
}

const initialState: PromotionState = {
  amountOfTime: 0,
  timerGlobal: false,
  offUnidad: false,
  fixedDiscount: false,
  offQuantity: 0,
  lastUnidadGlobal: false,
  lastUnidad: false,
  lastUnidadText: "",
  visibilityDescription: false,
  quantityProducts: 0,
  titleText: "",
  addToCartButton: "",
};

const promotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {
    updateMultipleStates: (
      state,
      action: PayloadAction<Partial<PromotionState>>
    ) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateMultipleStates } = promotionSlice.actions;
export default promotionSlice.reducer;
