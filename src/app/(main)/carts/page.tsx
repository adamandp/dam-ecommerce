import CartHeader from "@/components/carts/cart-header";
import CartItemArea from "@/components/carts/cart-item-area";
import CheckArea from "@/components/carts/check-area";
// import CheckoutCard from "@/components/carts/checkout-card";
import { Button } from "@/components/ui/button";
import { cartApi } from "@/services/cart-api";
import { getQueryClient } from "@/utils/get-query-client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Carts() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["carts"],
    queryFn: cartApi.getCart,
  });
  return (
    <div className="content-container lg:mt-c-10 w-full">
      <CartHeader />
      <div className="grid md:flex gap-c-5 py-c-5 overflow-hidden ">
        <div className="flex flex-col gap-c-4 w-full">
          <CheckArea />
          <CartItemArea />
          <Link href="/shop">
            <Button className="w-full">
              <ArrowLeft className="size-c-5" />
              Continue Shopping
            </Button>
          </Link>
        </div>
        {/* <CheckoutCard subtotal={subtotal} totaldiscount={totalDiscount} /> */}
      </div>
    </div>
  );
}
