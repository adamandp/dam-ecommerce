import Image from "next/image";
import { ComponentProps } from "react";
import { motion } from "motion/react";

interface OptionsProps extends ComponentProps<typeof motion.button> {
  item: { img: string; name: string };
  active?: boolean;
}

export default function PaymentOption({
  item,
  active,
  ...props
}: OptionsProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      key={item.name}
      className={`flex items-center gap-c-3 p-c-4 rounded-xl border-2 transition-colors duration-300 shadow-sm cursor-pointer
        ${
          active
            ? "border-pink-500 bg-pink-100 dark:bg-pink-900/20 dark:border-pink-400"
            : "border-gray-200 dark:border-neutral-700 hover:border-pink-300 dark:hover:border-pink-400"
        } hover:shadow-md bg-white dark:bg-neutral-900`}
      {...props}
    >
      <div className="bg-white rounded-c-2 p-c-1">
        <Image
          src={item.img}
          alt={item.name}
          width={500}
          height={500}
          className="object-contain w-c-12 h-c-12"
        />
      </div>

      <span className="text-c-5 font-semibold text-foreground">
        {item.name}
      </span>
    </motion.button>
  );
}
