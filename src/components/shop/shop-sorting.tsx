"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const options = [
  { label: "Default", value: "default" },
  { label: "Low to High", value: "asc" },
  { label: "High to Low", value: "desc" },
];

function useSorting() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "default";

  const updateSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { currentSort, updateSort };
}

function SelectSorting() {
  const { currentSort, updateSort } = useSorting();

  return (
    <div className="h-full">
      <Select value={currentSort} onValueChange={updateSort}>
        <SelectTrigger className="h-full! w-c-60! rounded-full hidden lg:flex text-c-5">
          <SelectValue placeholder="Sort By" className="h-full" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-c-4">Sorting</SelectLabel>
            {options.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="text-c-5"
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

function RadioSorting() {
  const { currentSort, updateSort } = useSorting();

  return (
    <div className="grid gap-c-6">
      <h2 className="font-berkshire-swash text-c-8">Sorting</h2>
      <RadioGroup
        value={currentSort}
        onValueChange={updateSort}
        className="grid gap-c-4"
      >
        {options.map((item) => (
          <div key={item.value} className="flex items-center space-x-4">
            <RadioGroupItem
              value={item.value}
              id={`radio-${item.value}`} // ID unik biar gak bentrok sama Select
              className="size-c-6"
            />
            <Label htmlFor={`radio-${item.value}`} className="text-c-6">
              {item.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
export { RadioSorting, SelectSorting };
