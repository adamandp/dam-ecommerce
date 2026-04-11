import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store"; //
import { ShipmentMethodRes } from "@/types/shipment-interface";

interface ShipmentState {
  shipment: ShipmentMethodRes | null;
}

const initialState: ShipmentState = {
  shipment: null,
};

const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    setShipment: (state, action: PayloadAction<ShipmentMethodRes | null>) => {
      state.shipment = action.payload;
    },
  },
});

export { shipmentSlice };
