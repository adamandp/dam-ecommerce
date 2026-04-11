"use client";

import { ReactNode, useEffect, useState } from "react";
import { initMocks } from "@/mocks";

export function MockProvider({ children }: { children: ReactNode }) {
  const [wait, setWait] = useState(true);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
      console.log("API mocking is enabled");
      initMocks();
      setWait(false);
    }
  }, []);

  return <>{children}</>;
}
