import { Action, configureStore } from "@reduxjs/toolkit";
import { thunk, ThunkAction } from "redux-thunk";
import cartReducer from "./features/cartSlice";
import timerReducer from "./features/timerSlice";
import promotionReducer from "./features/promotionSlice"; // Añade esta línea

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    timer: timerReducer,
    promotion: promotionReducer, // Añade esta línea
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
