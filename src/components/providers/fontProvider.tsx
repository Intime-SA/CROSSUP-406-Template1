"use client";

import { useEffect } from "react";
import { useDynamicFont, fonts, Font } from "@/app/fonts/fonts";

export function FontProvider({ children }: { children: React.ReactNode }) {
  const font = useDynamicFont();

  useEffect(() => {
    document.documentElement.classList.remove(
      ...Object.values(fonts).map((f: Font) => f.className)
    );
    document.documentElement.classList.add(font.className);
  }, [font]);

  return <>{children}</>;
}
