"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import AddressPreview from "./address-preview";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { addressSlice } from "@/lib/features/address-slice";
import AddressCard from "./address-card";
import { useQuery } from "@tanstack/react-query";
import { addressApi } from "@/services/address-api";

export default function AddressSection() {
  const [openAddress, setopenAddress] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const address = useAppSelector(
    (state: RootState) => state.addressSlice.address,
  );
  const setAddress = addressSlice.actions.setAddress;

  const { data: addresses } = useQuery({
    queryKey: ["addresses"],
    queryFn: () => addressApi.getAddresses(),
  });

  return (
    <Popover open={openAddress} onOpenChange={setopenAddress}>
      <PopoverTrigger className="w-full" asChild>
        <button className="w-full bg-card border border-border rounded-c-4 p-c-4 hover:bg-accent-light hover:shadow-lg transition-all cursor-pointer grid gap-c-2">
          <div className="flex items-center justify-between gap-c-2">
            <div className="flex items-center gap-c-2">
              <MapPin className="size-c-5 text-primary" />
              <span className="text-c-5 font-medium text-muted-foreground">
                Where should we go?
              </span>
            </div>
            <ChevronDown className="size-c-5 text-muted-foreground" />
          </div>
          {address && <AddressPreview {...address} />}
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-c-2  border-none grid gap-c-2 popover-content shadow-lg">
        {addresses?.map((address) => (
          <AddressCard
            key={address.id}
            {...address}
            onClick={() => {
              dispatch(setAddress(address));
              setopenAddress(false);
            }}
          />
        ))}
      </PopoverContent>
    </Popover>
  );
}
