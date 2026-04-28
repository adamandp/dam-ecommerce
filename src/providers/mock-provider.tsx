"use client";

import { ReactNode, useEffect, useState } from "react";
import { initMocks } from "@/mocks";

export function MockProvider({
  children,
  isMocking,
}: {
  children: ReactNode;
  isMocking: string;
}) {
  const [wait, setWait] = useState(true);

  useEffect(() => {
    if (isMocking === "enabled") {
      console.log("API mocking is enabled");
      initMocks();
      setWait(false);
    }
  }, []);

  return <>{children}</>;
}
