"use client";

import AddressSection from "@/components/checkout/address-section";
import CheckoutProductCard from "@/components/checkout/checkout-product-card";
import CheckoutSummaryCard from "@/components/checkout/checkout-summary-card";
import PaymentSection from "@/components/checkout/payment-section";
import ShipmentSection from "@/components/checkout/shipment-section";
import { useAppSelector } from "@/lib/hooks";
import { useSelector } from "react-redux";

export default function Page() {
  const cart = useAppSelector((state) => state.checkoutSlice.items);

  return (
    <main className="content-container grid gap-c-5 py-c-10 w-full">
      <AddressSection />
      <ShipmentSection />
      <PaymentSection />
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-c-4 sm:gap-c-2">
        {cart.map((item) => (
          <CheckoutProductCard key={item.id} {...item} />
        ))}
      </div>
      <div className="my-c-5">
        <CheckoutSummaryCard />
      </div>
    </main>
  );
}
