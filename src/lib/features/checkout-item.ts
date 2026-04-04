import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutItem {
  id: string;
  qty: number;
  imageUrl: string;
  name: string;
  origPrice: number;
  discountPrice?: number | null;
}

interface CheckoutState {
  items: CheckoutItem[];
}

const initialState: CheckoutState = {
  items: [
    {
      id: "7d2b45a1-0b3c-4e8d-8a9f-2c3d4e5f6a7b",
      name: "Velvet Cake Delight",
      imageUrl: "/products/cake2.png",
      origPrice: 65000,
      discountPrice: 45500,
      qty: 1,
    },
    {
      id: "8f9e0d1c-2b3a-4b5c-6d7e-8f9a0b1c2d3e",
      name: "Classic Creamy Dream",
      imageUrl: "/products/classic2.png",
      origPrice: 32000,
      discountPrice: null,
      qty: 1,
    },
  ],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    toggleItem: (state, action: PayloadAction<CheckoutItem>) => {
      const index = state.items.findIndex((i) => i.id === action.payload.id);

      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },

    toggleAll: (state, action: PayloadAction<CheckoutItem[]>) => {
      const incoming = action.payload;

      const isAllSelected =
        state.items.length === incoming.length &&
        incoming.every((item) => state.items.some((i) => i.id === item.id));

      if (isAllSelected) {
        state.items = [];
      } else {
        state.items = incoming;
      }
    },
  },
});

export type { CheckoutItem, CheckoutState };
export { checkoutSlice };
