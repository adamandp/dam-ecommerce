import { InputHTMLAttributes } from "react";
import { LucideProps, Search } from "lucide-react";
import { HTMLMotionProps } from "motion/react";
import clsx from "clsx";
import { motion } from "motion/react";

interface Props {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  wrapperProps?: HTMLMotionProps<"div">;
  iconProps?: LucideProps;
}

export default function SearchInput({
  inputProps = {},
  wrapperProps = {},
  iconProps = {},
}: Props) {
  const { className: inputClassName, ...otherInputProps } = inputProps;
  const { className: wrapperClassName, ...otherWrapperProps } = wrapperProps;
  const { className: iconClassName, ...otherIconProps } = iconProps;

  return (
    <motion.div
      className={clsx(
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input border bg-transparent text-c-5 shadow-xs disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-full rounded-full flex items-center gap-c-5 relative justify-end h-c-15",
        wrapperClassName,
      )}
      {...otherWrapperProps}
    >
      <input
        className={clsx(
          "w-full h-full absolute outline-none text-c-6 py-c-4 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-full pl-c-5 pr-c-18 transition-[color,box-shadow] text-red-200",
          inputClassName,
        )}
        {...otherInputProps}
      />
      <Search
        className={clsx("size-c-8 absolute right-c-5", iconClassName)}
        {...otherIconProps}
      />
    </motion.div>
  );
}
