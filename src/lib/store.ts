import { configureStore } from "@reduxjs/toolkit";
import { checkoutSlice } from "./features/checkout-item";
import { addressSlice } from "./features/address-slice";
import { shipmentSlice } from "./features/shipment-slice";
import { paymentSlice } from "./features/payment-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      checkoutSlice: checkoutSlice.reducer,
      addressSlice: addressSlice.reducer,
      shipmentSlice: shipmentSlice.reducer,
      paymentSlice: paymentSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
