"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import SearchInput from "../search-input";

export default function ShopSearchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [localValue, setLocalValue] = useState(searchParams.get("q") || "");

  const isTyping = useRef(false);

  useEffect(() => {
    if (!isTyping.current) return;

    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (localValue) {
        params.set("q", localValue);
      } else {
        params.delete("q");
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });

      isTyping.current = false;
    }, 500);

    return () => clearTimeout(handler);
  }, [localValue, pathname, router, searchParams]);

  useEffect(() => {
    if (!isTyping.current) {
      setLocalValue(searchParams.get("q") || "");
    }
  }, [searchParams]);

  return (
    <SearchInput
      inputProps={{
        placeholder: "Find Your Favorites Product",
        value: localValue,
        onChange: (e) => {
          isTyping.current = true;
          setLocalValue(e.target.value);
        },
      }}
    />
  );
}
