"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { useAppSelector } from "@/lib/hooks";
import { rupiahFormatter } from "@/utils/rupiah-formatter";
import Link from "next/link";

export default function CheckoutSummaryCard() {
  const address = useAppSelector((state) => state.addressSlice.address);
  const shipment = useAppSelector((state) => state.shipmentSlice.shipment);
  const checkoutItems = useAppSelector((state) => state.checkoutSlice.items);
  const payment = useAppSelector((state) => state.paymentSlice.payment);

  const subtotal = checkoutItems.reduce(
    (acc, item) => acc + item.origPrice * item.qty,
    0,
  );

  const totalDiscount = checkoutItems.reduce(
    (acc, item) =>
      acc +
      (item.origPrice - (item.discountPrice ?? item.origPrice)) * item.qty,
    0,
  );

  return (
    <div className="rounded-c-5 flex flex-col h-fit bg-card border-t-2 border-pink-500">
      <p className="text-c-6 font-bold text-center py-c-5">Checkout Summary</p>
      <div className="px-c-8 pb-c-8">
        <div className="border-b-2">
          <p className="text-c-5 font-semibold mb-c-5">Details Order :</p>
          <div className="grid gap-c-2 pb-c-4">
            <div className="flex justify-between items-center">
              <p className="text-c-4-5 text-muted-foreground">Subtotal</p>
              <p className="text-c-4-5 font-semibold">
                {rupiahFormatter.format(subtotal)}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-c-4-5 text-muted-foreground">Discount</p>
              <p className="text-c-4-5 font-semibold text-red-500">
                -{rupiahFormatter.format(totalDiscount)}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-c-4-5 text-muted-foreground">Shipment</p>
              <p className="text-c-4-5  text-lg text-foreground">
                {shipment?.cost ? (
                  <span className=" font-semibold">
                    {rupiahFormatter.format(shipment.cost)}
                  </span>
                ) : (
                  <span className="text-muted-foreground">
                    Select your favorite courier
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-c-6 pb-c-4">
          <p className="text-c-4-5 font-bold">Grand Total</p>
          <p className="text-c-4-5 font-semibold text-green-500">
            {rupiahFormatter.format(
              subtotal - totalDiscount + (shipment?.cost || 0),
            )}
          </p>
        </div>
        <div className="pb-c-6 border-b-2">
          <Link href="/cart/checkout/thankyou">
            <Button
              className="w-full"
              disabled={!shipment || !address || !payment}
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
  );
}
