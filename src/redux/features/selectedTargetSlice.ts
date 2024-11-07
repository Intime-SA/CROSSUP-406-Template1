import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Variant } from "@/domain/definitionsTypes";

interface SelectedTargetState {
  variants: Variant[];
  selectedVariant: Variant | null;
  quantity: number;
}

const initialState: SelectedTargetState = {
  variants: [],
  selectedVariant: null,
  quantity: 1,
};

const selectedTargetSlice = createSlice({
  name: "selectedTarget",
  initialState,
  reducers: {
    setVariants: (state, action: PayloadAction<Variant[]>) => {
      state.variants = action.payload;
    },
    setSelectedVariant: (state, action: PayloadAction<Variant>) => {
      state.selectedVariant = action.payload;
    },
    updateSelectedVariant: (state, action: PayloadAction<Partial<Variant>>) => {
      if (state.selectedVariant) {
        state.selectedVariant = { ...state.selectedVariant, ...action.payload };
      }
    },
    setQuantity: (state, action: PayloadAction<number>) => {
      state.quantity = action.payload;
    },
  },
});

export const {
  setVariants,
  setSelectedVariant,
  updateSelectedVariant,
  setQuantity,
} = selectedTargetSlice.actions;

export default selectedTargetSlice.reducer;
