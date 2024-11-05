import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TiendaNubeState {
  timerGlobal: boolean;
  timerUnidad: boolean;
  offUnidad: boolean;
  offQuantity: number;
  restUnidad: boolean;
  lastUnidadGlobal: boolean;
  lastUnidad: boolean;
  lastUnidadText: string;
  cantidadFiltros: number;
  visibilityDescription: boolean;
  cantidadProducts: number;
}

const initialState: TiendaNubeState = {
  timerGlobal: false,
  timerUnidad: false,
  offUnidad: false,
  offQuantity: 0,
  restUnidad: false,
  lastUnidadGlobal: false,
  lastUnidad: false,
  lastUnidadText: "ULTIMAS UNIDADES",
  cantidadFiltros: 0,
  visibilityDescription: true,
  cantidadProducts: 0,
};

const tiendaNubeSlice = createSlice({
  name: "tiendaNube",
  initialState,
  reducers: {
    setTimerGlobal: (state, action: PayloadAction<boolean>) => {
      state.timerGlobal = action.payload;
    },
    setTimerUnidad: (state, action: PayloadAction<boolean>) => {
      state.timerUnidad = action.payload;
    },
    setOffUnidad: (state, action: PayloadAction<boolean>) => {
      state.offUnidad = action.payload;
    },
    setOffQuantity: (state, action: PayloadAction<number>) => {
      state.offQuantity = action.payload;
    },
    setRestUnidad: (state, action: PayloadAction<boolean>) => {
      state.restUnidad = action.payload;
    },
    setLastUnidadGlobal: (state, action: PayloadAction<boolean>) => {
      state.lastUnidadGlobal = action.payload;
    },
    setLastUnidad: (state, action: PayloadAction<boolean>) => {
      state.lastUnidad = action.payload;
    },
    setLastUnidadText: (state, action: PayloadAction<string>) => {
      state.lastUnidadText = action.payload;
    },
    setCantidadFiltros: (state, action: PayloadAction<number>) => {
      state.cantidadFiltros = action.payload;
    },
    setVisibilityDescription: (state, action: PayloadAction<boolean>) => {
      state.visibilityDescription = action.payload;
    },
    setCantidadProducts: (state, action: PayloadAction<number>) => {
      state.cantidadProducts = action.payload;
    },
  },
});

export const {
  setTimerGlobal,
  setTimerUnidad,
  setOffUnidad,
  setOffQuantity,
  setRestUnidad,
  setLastUnidadGlobal,
  setLastUnidadText,
  setLastUnidad,
  setCantidadFiltros,
  setVisibilityDescription,
  setCantidadProducts,
} = tiendaNubeSlice.actions;

export default tiendaNubeSlice.reducer;
