"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { hoverEffect, tapEffect } from "@/utils/motion-effects";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ size = "size-c-5" }: { size?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <motion.button
      onClick={toggleTheme}
      className="cursor-pointer"
      whileHover={{ ...hoverEffect() }}
      whileTap={{ ...tapEffect() }}
    >
      {resolvedTheme === "dark" ? (
        <Moon className={`${size} hover:text-pink-500 active:text-pink-600 `} />
      ) : (
        <Sun className={`${size} hover:text-pink-500 active:text-pink-600 `} />
      )}
    </motion.button>
  );
}
