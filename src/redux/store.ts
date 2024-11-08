import { Action, configureStore } from "@reduxjs/toolkit";
import { thunk, ThunkAction } from "redux-thunk";
import promotionReducer from "./features/promotionSlice";
import selectedTargetReducer from "./features/selectedTargetSlice"; // Añade esta línea

export const store = configureStore({
  reducer: {
    promotion: promotionReducer, // Añade esta línea
    selectedTarget: selectedTargetReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Tipos de redux / ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Tipos de Thunk Redux / ts
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
