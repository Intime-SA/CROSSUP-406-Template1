"use client";

import { useEffect } from "react";
import { useDynamicFont } from "@/app/fonts/fonts";
import Gift from "../skeletons/Gift";

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
    return (
      <div className="flex items-center justify-center w-full h-screen bg-background">
        <Gift />
      </div>
    );
  }

  return <>{children}</>;
}
