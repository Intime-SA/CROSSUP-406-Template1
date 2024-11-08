import { configureStore } from "@reduxjs/toolkit";

import promotionReducer from "./features/promotionSlice";
import selectedTargetReducer from "./features/selectedTargetSlice"; // Añade esta línea

export const store = configureStore({
  reducer: {
    promotion: promotionReducer, // Manejo de estado a nivel Sugerencia / Promocion
    selectedTarget: selectedTargetReducer, // Manejo de estado a nivel Target > Variante
  },
});

// Tipos de redux / ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
