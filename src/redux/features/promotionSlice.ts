import { ColorsApi, PromotionData } from "@/domain/definitionsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PromotionState {
  colors: ColorsApi;
  amountOfTime: number;
  timerGlobal: boolean;
  discountIsActive: boolean;
  fixedDiscount: boolean;
  discountAmount: number;
  canModifyQuantity: boolean;
  hasShortageGlobal: boolean;
  hasShortage: boolean;
  hasShortageText: string;
  visibilityDescription: boolean;
  quantityProducts: number;
  titleText: string;
  addToCartButton: string;
  targets: PromotionData[];
  desingType: string;
}

const initialState: PromotionState = {
  colors: {
    primary: "black",
    secondary: "white",
    font: "Montserrat",
  },
  amountOfTime: 0,
  timerGlobal: false,
  discountIsActive: false,
  fixedDiscount: false,
  discountAmount: 0,
  canModifyQuantity: false,
  hasShortageGlobal: false,
  hasShortage: false,
  hasShortageText: "",
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
  },
});

export const { updateMultipleStates, updateTitleText, updateAddToCartButton } =
  promotionSlice.actions;
export default promotionSlice.reducer;
