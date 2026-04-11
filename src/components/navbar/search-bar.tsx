"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dispatch, SetStateAction, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import SearchInput from "../search-input";

interface SearchBarProps {
  setActiveSearchBar?: Dispatch<SetStateAction<boolean>>;
}

const frameworks = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
];

export function SearchBar({ setActiveSearchBar }: SearchBarProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const matched = frameworks.find((fw) =>
        fw.label.toLowerCase().includes(value.toLowerCase()),
      );
      if (matched) {
        setValue(matched.value);
        setOpen(false);
      } else {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        return;
      }
    }
    if (e.key === "Escape") {
      setActiveSearchBar?.(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
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
            onChange: (e) => {
              setValue(e.target.value);
              setOpen(true);
            },
            onBlur: () => {
              setTimeout(() => {
                setActiveSearchBar?.(false);
              }, 100);
            },
            placeholder: "Search",
            onKeyDown: handleKeyDown,
            className: "!text-c-4 !py-c-2",
          }}
          iconProps={{
            className: "!size-c-5 text-muted-foreground",
          }}
        />
      </PopoverTrigger>
      <PopoverContent
        className="p-0 popover-content"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks
                .filter((fw) =>
                  fw.label.toLowerCase().includes(value.toLowerCase()),
                )
                .map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    className="text-c-4"
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        "ml-auto size-c-5",
                        value === framework.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
