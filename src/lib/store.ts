import { configureStore } from "@reduxjs/toolkit";
import { checkoutSlice } from "./features/checkout-item";

export const makeStore = () => {
  return configureStore({
    reducer: {
      checkoutSlice: checkoutSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
