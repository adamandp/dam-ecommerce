import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { rupiahFormatter } from "@/utils/rupiah-formatter";

interface CheckoutProductCardProps {
  id: string;
  qty: number;
  imageUrl: string;
  name: string;
  origPrice: number;
  discountPrice?: number | null;
}

export default function CheckoutProductCard({
  imageUrl,
  name,
  origPrice,
  discountPrice,
  qty,
}: CheckoutProductCardProps) {
  return (
    <div className="bg-card p-c-4 rounded-c-3 shadow-md grid gap-c-2 border border-border sm:grid-cols-3 w-full sm:place-items-center">
      <div className="flex flex-col sm:flex-row sm:items-center gap-c-2 overflow-hidden sm:place-self-start">
        <div className="bg-[#F132F2] dark:bg-[#2A202A] p-c-5 rounded-c-5 self-center sm:self-start size-c-20 grid place-items-center">
          <Image
            src={imageUrl}
            width={1000}
            height={1000}
            className="object-contain drop-shadow-xl transition-transform hover:scale-105 duration-300 ease-in-out"
            alt={name}
          />
        </div>
        <p className="font-semibold text-center sm:text-left text-foreground truncate text-c-5 align-middle">
          {name}
        </p>
      </div>
      <p className="font-medium text-c-4 text-muted-foreground text-center">
        x{qty}
      </p>
      <div className="flex gap-c-2 items-center justify-center sm:justify-end  w-full">
        {discountPrice !== null &&
          discountPrice !== undefined &&
          discountPrice > 0 && (
            <p className="text-c-4 text-muted-foreground line-through text-sm">
              {rupiahFormatter.format(origPrice)}
            </p>
          )}
        <h3 className="text-c-5 font-bold text-pink-500 text-base">
          {rupiahFormatter.format(origPrice)}
        </h3>
      </div>
    </div>
  );
}
