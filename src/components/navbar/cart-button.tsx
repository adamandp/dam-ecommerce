import { hoverEffect, tapEffect } from "@/utils/motion-effects";
import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";

export default function CartButton() {
  const dummyCartQty = 0;

  return (
    <motion.div
      className="relative"
      whileHover={{ ...hoverEffect() }}
      whileTap={{ ...tapEffect() }}
    >
      <ShoppingCart className="size-c-7 md:size-c-9 lg:size-c-5 cursor-pointer hover:text-pink-500 active:text-pink-600" />
      <span className="absolute -top-c-3 -right-c-3 lg:-top-c-3 lg:left-c-3 bg-pink-500 text-c-3 size-c-6 rounded-full grid place-items-center text-white">
        {dummyCartQty}
      </span>
    </motion.div>
  );
}
