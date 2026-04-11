import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PaymentState {
  payment: string | null;
}

const initialState: PaymentState = {
  payment: null,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPayment: (state, action: PayloadAction<string | null>) => {
      state.payment = action.payload;
    },
  },
});
