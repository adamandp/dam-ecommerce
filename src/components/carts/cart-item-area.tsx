"use client";

import { CartItemRes } from "@/types/carts-interface";
import { ScrollArea } from "../ui/scroll-area";
import { useQuery } from "@tanstack/react-query";
import { cartApi } from "@/services/cart-api";
import CartCard from "./cart-card";
import CartCardSkeleton from "./cart-card-skeleton";

export default function CartItemArea() {
  const { data: carts, isPending } = useQuery<CartItemRes[]>({
    queryKey: ["carts"],
    queryFn: cartApi.getCart,
  });

  return (
    <ScrollArea className="h-c-107">
      {isPending
        ? Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="my-c-2-5">
              <CartCardSkeleton />
            </div>
          ))
        : carts?.map((product) => (
            <div key={product.id} className="my-c-2-5">
              <CartCard key={product.id} {...product} />
            </div>
          ))}
    </ScrollArea>
  );
}
