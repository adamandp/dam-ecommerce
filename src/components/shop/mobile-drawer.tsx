"use client";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import PriceFilter from "./price-filter";
import { RadioSorting } from "./shop-sorting";
import CategoriesOption from "./categories-option";

export function MobileDrawer() {
  return (
    <Drawer direction="right" dismissible>
      <DrawerTrigger asChild className="lg:hidden">
        <Button size={"icon"}>
          <Settings2 className="size-c-7 " />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col gap-c-6 px-c-8 py-c-6 rounded-l-c-15 bg-card overflow-y-auto max-h-screen scrollbar-none overflow-x-hidden">
        <DrawerTitle>Filter & Sort</DrawerTitle>
        <PriceFilter />
        <RadioSorting />
        <CategoriesOption />
        <DrawerDescription>
          Price? Check. Sorting? Check. Categories? You got this!
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
}
