"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";

interface CheckoutCardProps {
  subtotal: number | undefined;
  totaldiscount: number | undefined;
}

export default function CheckoutCard({
  subtotal,
  totaldiscount,
}: CheckoutCardProps) {
  return (
    <div className="content-container lg:mt-c-10 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-c-6 font-medium">Shopping Cart</h1>
        {/* <h2 className="text-c-5">({cart.length} items)</h2> */}
      </div>
      <div className="rounded-c-5 flex flex-col h-fit bg-card border-t-2 border-pink-500">
        <p className="text-c-6 font-bold text-center py-c-5">Order Summary</p>
        <div className="flex items-center justify-center gap-c-5 border-y-2 py-c-5">
          <Input
            className="w-[60%]! rounded-full h-fit text-c-5!"
            placeholder="Apply Coupon Code"
          />
          <Button className="py-c-1! px-c-4!">Apply</Button>
        </div>
        <div className="p-c-8">
          <div className="border-b-2">
            <p className="text-c-5 font-semibold mb-c-5">Product Details :</p>
            <div className="grid gap-c-2 pb-c-4">
              <div className="flex justify-between items-center">
                <p className="text-c-4-5 text-muted-foreground">Subtotal</p>
                {/* <p className="text-c-4-5 font-semibold">${st.toFixed(2)}</p> */}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-c-4-5 text-muted-foreground">Discount</p>
                <p className="text-c-4-5 font-semibold text-red-500">
                  {/* -${td.toFixed(2) || 0} */}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-c-6 pb-c-4">
            <p className="text-c-4-5 font-bold">Grand Total</p>
            <p className="text-c-4-5 font-semibold text-green-500">
              {/* ${(st - td).toFixed(2) || 0} */}
            </p>
          </div>
          <div className="pb-c-6 border-b-2">
            <Link href="/cart/checkout">
              <Button
                className="w-full"
                // disabled={checkoutItem.length === 0}
              >
                Proceed to Checkout <ArrowRight />
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-c-2">
            <ShieldCheck className="size-c-7" />
            <p className="text-c-4 text-muted-foreground pt-c-4">
              Safe and Secure Payments, Easy Returns. 100% Authentic Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
