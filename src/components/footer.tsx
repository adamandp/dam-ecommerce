"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import GithubIcon from "./icons/github-icon";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

const footerItem = [
  {
    id: 1,
    name: "Github",
    href: "/https://github.com/adamandp",
    Icon: GithubIcon,
  },
  {
    id: 2,
    name: "Email",
    href: "/",
    Icon: Mail,
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isNotFound = pathname.includes("not-found");

  return (
    <footer
      className={`bg-[#682A93] dark:bg-[#2D1A3C] px-c-6 py-c-10 flex flex-col items-center gap-c-8 text-white relative overflow-hidden ${
        isNotFound ? "hidden" : ""
      }`}
    >
      <div className="absolute w-c-96 h-c-96 bg-pink-400 dark:bg-[#B67ACF] rounded-full blur-3xl opacity-20 -top-c-40 left-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="flex items-center gap-c-2 z-10">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-c-10"
        />
        <h1 className="font-berkshire-swash text-c-8 text-white dark:text-white">
          <span className="text-pink-300 dark:text-pink-400">Icy</span>Tales
        </h1>
      </div>

      {/* Social icons */}
      <div className="flex gap-c-4 z-10">
        {footerItem.map(({ id, name, href, Icon }) => (
          <motion.a
            whileHover={{ scale: 1.15, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            key={id}
            href={href}
            aria-label={name}
            className="bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md p-c-4 rounded-full transition-all"
          >
            <Icon className="size-c-5 text-white stroke-2" />
          </motion.a>
        ))}
      </div>

      <div className="text-center text-white/80 dark:text-white/60 text-c-4 z-10">
        <p className="mb-c-1">✨ Sharing dreamy stories with the world</p>
        <p>
          © 2024{" "}
          <span className="text-pink-300 dark:text-pink-400 font-semibold">
            IcyTales
          </span>
          . Made with ✨ by Adam.
        </p>
      </div>
    </footer>
  );
}
