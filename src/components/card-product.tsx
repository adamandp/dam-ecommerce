import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { animateFlyToCart } from "@/utils/motion-effects";
import { useAppDispatch } from "@/lib/hooks";

export enum DiscountTypeEnum {
  PERCENTAGE = "PERCENTAGE",
  FIXED = "FIXED",
  PRICE = "PRICE",
  FREE_ITEM = "FREE_ITEM",
}

interface CardProductProps {
  className?: string;
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  rate: number;
  origPrice: number;
  discountPrice?: number | null;
  discountType?: DiscountTypeEnum | null;
  discountValue?: number | null;
}

export default function CardProduct({
  className,
  id,
  name,
  imageUrl,
  description,
  rate,
  origPrice,
  discountPrice,
  discountType,
  discountValue,
}: CardProductProps) {
  return (
    <Link
      className={`bg-card p-c-3 rounded-c-5 grid content-between h-full w-c-70 select-none relative overflow-hidden cursor-pointer product-card ${className}`}
      href={`/product/${id}`}
    >
      <div className="grid place-items-center bg-[#F7F2F7] dark:bg-[#2A202A]  rounded-c-5 p-c-5">
        <Image
          src={imageUrl || ""}
          alt="Product"
          width={1000}
          height={1000}
          priority
          className="h-c-61 w-full object-contain"
        />
      </div>
      <div className="flex justify-between mt-c-5">
        <p className="text-c-5 font-bold">{name}</p>
        <h4 className="font-semibold text-c-4 mt-c-1">⭐{rate}/5</h4>
      </div>
      <p
        className="text-c-4 text-foreground mt-c-3 overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </p>
      <div className="mt-c-3 flex justify-between items-center">
        <div className="flex gap-c-2 items-center">
          {discountPrice && (
            <p className="text-c-4-5 text-muted-foreground line-through">
              {origPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          )}
          <p className="text-c-5-5 font-bold text-pink-500">
            {(discountPrice ? discountPrice : origPrice).toLocaleString(
              "id-ID",
              {
                style: "currency",
                currency: "IDR",
              },
            )}
          </p>
        </div>
        <Button
          variant={"secondary"}
          size={"icon"}
          // onClick={handleAddToCart}
        >
          <ShoppingCart className="size-c-6" />
        </Button>
      </div>
      {discountPrice && (
        <div className="absolute top-c-5 -right-c-10 bg-red-500 text-white text-c-4 font-bold px-c-10 py-1 rotate-45 shadow-md z-10">
          <span suppressHydrationWarning>
            {discountType === DiscountTypeEnum.PERCENTAGE
              ? discountValue
              : `${discountValue?.toLocaleString("id-ID")} `}
          </span>
          {discountType === DiscountTypeEnum.PERCENTAGE && <span>% </span>}
          <span>OFF</span>
        </div>
      )}
      {discountType === DiscountTypeEnum.FREE_ITEM && (
        <div className="absolute top-c-5 -right-c-10 bg-yellow-500 text-white text-c-4 font-bold px-c-10 py-1 rotate-45 shadow-md z-10">
          <span>FREE ITEM</span>
        </div>
      )}
    </Link>
  );
}
