import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PromotionState {
  timerGlobal: boolean;
  timerUnidad: boolean;
  offUnidad: boolean;
  fixedDiscount: boolean;
  offQuantity: number;
  lastUnidadGlobal: boolean;
  lastUnidad: boolean;
  lastUnidadText: string;
  visibilityDescription: boolean;
  cantidadProducts: number;
}

const initialState: PromotionState = {
  timerGlobal: false,
  timerUnidad: false,
  offUnidad: false,
  fixedDiscount: false,
  offQuantity: 0,
  lastUnidadGlobal: false,
  lastUnidad: false,
  lastUnidadText: "",
  visibilityDescription: false,
  cantidadProducts: 0,
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
