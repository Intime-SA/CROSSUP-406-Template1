"use client";

import { useState, useEffect } from "react";
import { useProductSelectors } from "@/hooks/useSelectors";

export function useDynamicFont() {
  const colors = useProductSelectors();
  const selectedFont = colors.fontFamily as string;
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    if (!selectedFont) return;

    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.replace(
      /\s+/g,
      "+"
    )}:wght@400;700&display=swap`;
    link.rel = "stylesheet";
    link.onload = () => setFontLoaded(true);
    link.onerror = () => console.error(`Failed to load font: ${selectedFont}`);
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [selectedFont]);

  return {
    fontFamily: selectedFont,
    isLoaded: fontLoaded,
  };
}

export function DynamicFontLoader({ children }: { children: React.ReactNode }) {
  const { fontFamily, isLoaded } = useDynamicFont();

  if (!isLoaded) {
    return <div>Loading font...</div>; // O cualquier indicador de carga
  }

  return (
    <div style={{ fontFamily: `'${fontFamily}', sans-serif` }}>{children}</div>
  );
}
