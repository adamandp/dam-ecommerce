"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { ChevronDown, Truck } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ShipmentPreview from "./shipment-preview";
import ShipmentCard from "./shipment-card";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { shipmentSlice } from "@/lib/features/shipment-slice";
import { shipmentApi } from "@/services/shipment-api";
import { useQuery } from "@tanstack/react-query";

export default function ShipmentSection() {
  const [openShipment, setopenShipment] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const shipment = useAppSelector(
    (state: RootState) => state.shipmentSlice.shipment,
  );
  const setShipment = shipmentSlice.actions.setShipment;

  const { data: shipmentMethods } = useQuery({
    queryKey: ["shipment-methods"],
    queryFn: () => shipmentApi.getShipmentMethods(),
  });

  return (
    <Popover open={openShipment} onOpenChange={setopenShipment}>
      <PopoverTrigger className="w-full" asChild>
        <button className="w-full bg-card border border-border rounded-c-4 p-c-4 hover:bg-accent-light hover:shadow-lg transition-all cursor-pointer grid gap-c-2">
          <div className="flex items-center justify-between gap-c-2">
            <div className="flex items-center gap-c-2">
              <Truck className="size-c-5 text-primary" />
              <span className="text-c-5 font-medium text-muted-foreground">
                Choose your favorite courier!
              </span>
            </div>
            <ChevronDown className="size-c-4 text-muted-foreground" />
          </div>
          {shipment && <ShipmentPreview {...shipment} />}
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-c-2  border-none grid gap-c-2 popover-content shadow-lg">
        <ScrollArea className="max-h-c-90">
          {shipmentMethods?.map((item, index) => (
            <div key={index} className="pb-c-2">
              <ShipmentCard
                {...item}
                onClick={() => {
                  dispatch(setShipment(item));
                  setopenShipment(false);
                }}
              />
            </div>
          ))}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
