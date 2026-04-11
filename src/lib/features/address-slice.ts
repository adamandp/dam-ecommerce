import { AddressRes } from "@/types/address-interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddressState {
  address: AddressRes | null;
}
const initialState: AddressState = {
  address: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<AddressRes>) => {
      state.address = action.payload;
    },
  },
});

export { addressSlice };
