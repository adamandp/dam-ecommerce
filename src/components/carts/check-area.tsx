"use client";

import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { checkoutSlice } from "@/lib/features/checkout-item";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { cartApi } from "@/services/cart-api";
import { CartItemRes } from "@/types/carts-interface";
import { useQuery } from "@tanstack/react-query";

export default function CheckArea() {
  const { data: carts } = useQuery<CartItemRes[]>({
    queryKey: ["carts"],
    queryFn: cartApi.getCart,
  });

  const dispatch = useAppDispatch();
  const toggleAll = checkoutSlice.actions.toggleAll;

  const checkoutItems = useAppSelector(
    (state: RootState) => state.checkoutSlice.items,
  );

  const mappedCarts =
    carts?.map((item) => ({
      id: item.id,
      qty: item.qty,
      imageUrl: item.imageUrl,
      name: item.name,
      origPrice: item.origPrice,
      discPrice: item.discPrice,
    })) ?? [];

  const isAllChecked =
    mappedCarts.length > 0 &&
    mappedCarts.every((item) => checkoutItems.some((i) => i.id === item.id));

  return (
    <div className="bg-card p-c-3 rounded-c-5 flex gap-c-3 items-center ">
      <Checkbox
        id="check-all"
        className="size-c-6 cursor-pointer"
        checked={isAllChecked}
        onCheckedChange={() => {
          if (!carts) return; // guard
          dispatch(toggleAll(mappedCarts));
        }}
        onClick={(e) => e.stopPropagation()}
      />
      <Label
        htmlFor="check-all"
        className="text-c-5 font-medium cursor-pointer"
      >
        Check all
      </Label>
    </div>
  );
}
