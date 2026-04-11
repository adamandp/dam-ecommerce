"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchInput from "../search-input";

interface SearchBarProps {
  setActiveSearchBar?: (val: boolean) => void;
}

export function SearchBar({ setActiveSearchBar }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("q") || "");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    setValue(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSearch = (query: string) => {
    const params = new URLSearchParams();

    if (query.trim()) {
      params.set("q", query);
      router.push(`/shop?${params.toString()}`);
    } else {
      router.push(`/shop`);
    }

    setActiveSearchBar?.(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(value);
    }
    if (e.key === "Escape") {
      setActiveSearchBar?.(false);
    }
  };

  return (
    <SearchInput
      wrapperProps={{
        animate: shake ? { x: [0, -7, 7, -7, 7, 0] } : {},
        transition: { duration: 0.4 },
        className: "!h-c-12",
      }}
      inputProps={{
        autoFocus: true,
        type: "text",
        value,
        onChange: (e) => setValue(e.target.value),
        onBlur: () => {
          setTimeout(() => setActiveSearchBar?.(false), 100);
        },
        placeholder: "Search for ice cream...",
        onKeyDown: handleKeyDown,
        className: "!text-c-4 !py-c-2",
      }}
      iconProps={{
        className: "!size-c-5 text-muted-foreground",
      }}
    />
  );
}
