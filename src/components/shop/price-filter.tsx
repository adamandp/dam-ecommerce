"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { rupiahFormatter } from "@/utils/rupiah-formatter";

export default function PriceFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlMin = Number(searchParams.get("min")) || 0;
  const urlMax = Number(searchParams.get("max")) || 100000;

  const [range, setRange] = useState<[number, number]>([urlMin, urlMax]);

  const isInteracting = useRef(false);

  useEffect(() => {
    if (!isInteracting.current) return;

    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      const [min, max] = range;

      if (min > 0) params.set("min", min.toString());
      else params.delete("min");
      if (max < 100000) params.set("max", max.toString());
      else params.delete("max");

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      isInteracting.current = false;
    }, 500);

    return () => clearTimeout(handler);
  }, [range, pathname, router, searchParams]);

  useEffect(() => {
    if (!isInteracting.current) {
      setRange([urlMin, urlMax]);
    }
  }, [urlMin, urlMax]);

  const handleSliderChange = (value: number[]) => {
    isInteracting.current = true;
    setRange(value as [number, number]);
  };

  const handleInputChange = (val: string, index: 0 | 1) => {
    isInteracting.current = true;
    const numericValue = Number(val.replace(/\D/g, ""));
    const newRange: [number, number] =
      index === 0 ? [numericValue, range[1]] : [range[0], numericValue];
    setRange(newRange);
  };

  return (
    <div className="grid gap-c-6">
      <h2 className="font-berkshire-swash text-c-8">Filter By Price</h2>
      <div className="grid gap-c-4">
        <div className="flex lg:grid items-center gap-c-3">
          <Input
            value={rupiahFormatter.format(range[0])}
            onChange={(e) => handleInputChange(e.target.value, 0)}
          />
          <span className="w-c-5 bg-white h-c-0-5 lg:hidden" />
          <Input
            value={rupiahFormatter.format(range[1])}
            onChange={(e) => handleInputChange(e.target.value, 1)}
          />
        </div>
        <Slider
          step={1000}
          value={[range[0], range[1]]}
          min={0}
          max={100000}
          onValueChange={handleSliderChange}
          className="my-c-5"
        />
      </div>
    </div>
  );
}
