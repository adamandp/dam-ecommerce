"use client";

import { cartApi } from "@/services/cart-api";
import { CartItemRes } from "@/types/carts-interface";
import { useQuery } from "@tanstack/react-query";

export default function CartHeader() {
  const { data: carts } = useQuery<CartItemRes[]>({
    queryKey: ["carts"],
    queryFn: cartApi.getCart,
  });

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-c-6 font-medium">Shopping Cart</h1>
      <h2 className="text-c-5">({carts?.length} items)</h2>
    </div>
  );
}
