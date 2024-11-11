"use client";

import { useEffect } from "react";
import { useDynamicFont } from "@/app/fonts/fonts";

export function FontProvider({ children }: { children: React.ReactNode }) {
  const { fontFamily, isLoaded } = useDynamicFont();

  useEffect(() => {
    if (isLoaded) {
      document.body.style.setProperty(
        "font-family",
        `'${fontFamily}', sans-serif`
      );
    }
  }, [fontFamily, isLoaded]);

  if (!isLoaded) {
    return <div>Loading font...</div>;
  }

  return <>{children}</>;
}
