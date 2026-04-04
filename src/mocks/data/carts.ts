import { CartItemRes } from "@/types/carts-interface";

export const dummyCarts: CartItemRes[] = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Choco Berry Cake Dream",
    imageUrl: "/products/cake1.png",
    category: "Cake",
    origPrice: 45000,
    discPrice: null,
    qty: 2,
  },
  {
    id: "7d2b45a1-0b3c-4e8d-8a9f-2c3d4e5f6a7b",
    name: "Velvet Cake Delight",
    imageUrl: "/products/cake2.png",
    category: "Cake",
    origPrice: 65000,
    discPrice: 45500,
    qty: 1,
  },
  {
    id: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    name: "Timeless Chocolate Scoop",
    imageUrl: "/products/classic1.png",
    category: "Classic",
    origPrice: 35000,
    discPrice: null,
    qty: 3,
  },
  {
    id: "8f9e0d1c-2b3a-4b5c-6d7e-8f9a0b1c2d3e",
    name: "Classic Creamy Dream",
    imageUrl: "/products/classic2.png",
    category: "Classic",
    origPrice: 32000,
    discPrice: null,
    qty: 1,
  },
  {
    id: "5d6e7f8a-9b0c-1d2e-3f4a-5b6c7d8e9f0a",
    name: "Classic Creamy Dream",
    imageUrl: "/products/classic3.png",
    category: "Classic",
    origPrice: 40000,
    discPrice: 32000,
    qty: 2,
  },
];
