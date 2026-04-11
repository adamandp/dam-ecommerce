"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PaymentOption from "./payment-option";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { paymentSlice } from "@/lib/features/payment-slice";

const ewallet = [
  { name: "Gopay", img: "/checkout/ewallet/gopay.svg" },
  { name: "Qris", img: "/checkout/ewallet/qris.svg" },
  { name: "Shopee Pay", img: "/checkout/ewallet/shopeepay.svg" },
];

const otc = [
  { name: "Alfamart", img: "/checkout/otc/alfamart.svg" },
  { name: "Indomaret", img: "/checkout/otc/indomaret.svg" },
];

const bank = [
  { name: "BCA", img: "/checkout/virtualAccount/bca.svg" },
  { name: "BNI", img: "/checkout/virtualAccount/bni.svg" },
  { name: "BRI", img: "/checkout/virtualAccount/bri.svg" },
  { name: "CIMB", img: "/checkout/virtualAccount/cimb.svg" },
  { name: "Mandiri", img: "/checkout/virtualAccount/mandiri.svg" },
  { name: "Permata", img: "/checkout/virtualAccount/permata.svg" },
];

const paymentMethod = [
  { key: "ewallet", label: "E-Wallet", data: ewallet },
  { key: "otc", label: "OTC", data: otc },
  { key: "bank", label: "Bank", data: bank },
];

export default function PaymentSection() {
  const dispatch = useAppDispatch();
  const payment = useAppSelector(
    (state: RootState) => state.paymentSlice.payment,
  );
  const setPayment = paymentSlice.actions.setPayment;
  return (
    <Tabs defaultValue="ewallet" className="p-4 rounded-c-5 bg-card border">
      <TabsList className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-c-5 w-full px-c-4">
        <span className="text-c-5 text-center text-foreground">
          Payment Method
        </span>
        {paymentMethod.map(({ key, label }) => (
          <TabsTrigger key={key} value={key} className="w-full">
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {paymentMethod.map(({ key, data }) => (
        <TabsContent key={key} value={key}>
          <div className="grid grid-cols-1 gap-c-2 sm:grid-cols-2 md:grid-cols-4">
            {data.map((item) => (
              <PaymentOption
                item={item}
                key={item.name}
                active={payment === item.name}
                onClick={() => dispatch(setPayment(item.name))}
              />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
