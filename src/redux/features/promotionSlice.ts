import {
  Colors,
  Discount,
  PromotionData,
  Shortage,
  Timer,
} from "@/domain/definitionsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PromotionState {
  colors: Colors;
  amountOfTime: number;
  timerGlobal: boolean;
  discountIsActive: boolean;
  fixedDiscount: boolean;
  discountAmount: number;
  canModifyQuantity: boolean;
  hasShortageGlobal: boolean;
  hasShortage: boolean;
  hasShortageUnit: number;
  hasShortageText: number;
  visibilityDescription: boolean;
  quantityProducts: number;
  titleText: string;
  addToCartButton: string;
  targets: PromotionData[];
  desingType: string;
}

const initialState: PromotionState = {
  colors: {
    text: "",
    buttonText: "",
    button: "",
    background: "",
  },
  amountOfTime: 0,
  timerGlobal: false,
  discountIsActive: false,
  fixedDiscount: false,
  discountAmount: 0,
  canModifyQuantity: false,
  hasShortageGlobal: false,
  hasShortage: false,
  hasShortageUnit: 1,
  hasShortageText: 0,
  visibilityDescription: false,
  quantityProducts: 0,
  titleText: "",
  addToCartButton: "",
  targets: [],
  desingType: "",
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
    updateTitleText: (state, action: PayloadAction<string>) => {
      state.titleText = action.payload;
    },
    updateAddToCartButton: (state, action: PayloadAction<string>) => {
      state.addToCartButton = action.payload;
    },
    updateColors: (state, action: PayloadAction<Colors>) => {
      state.colors = action.payload;
    },
    updateDiscount: (state, action: PayloadAction<Discount>) => {
      state.discountIsActive = action.payload.isActive;
      state.discountAmount = action.payload.amount;
    },
    updateTimer: (state, action: PayloadAction<Timer>) => {
      state.timerGlobal = action.payload.isActive;
      state.amountOfTime = action.payload.amount;
    },
    updateShortage: (state, action: PayloadAction<Shortage>) => {
      state.hasShortage = action.payload.isActive;
      state.hasShortageText = action.payload.text;
      state.hasShortageUnit = action.payload.stockAmount;
      state.hasShortageGlobal = action.payload.isAutomatic;
    },
  },
});

export const {
  updateMultipleStates,
  updateTitleText,
  updateAddToCartButton,
  updateColors,
  updateDiscount,
  updateTimer,
  updateShortage,
} = promotionSlice.actions;
export default promotionSlice.reducer;
