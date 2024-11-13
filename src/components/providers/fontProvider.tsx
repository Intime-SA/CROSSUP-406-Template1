"use client";

import { useEffect } from "react";
import { useDynamicFont } from "@/app/fonts/fonts";
import Gift from "../skeletons/Gift";

// PERSISTE LA FONT DINAMYCA DE FORMA GLOBAL
export function FontProvider({ children }: { children: React.ReactNode }) {
  const { fontFamily, isLoaded } = useDynamicFont(); // trae estados del hook font

  // se aplica la fontFamily seleccionada
  useEffect(() => {
    if (isLoaded) {
      document.body.style.setProperty(
        "font-family",
        `'${fontFamily}', sans-serif`
      );
    }
  }, [fontFamily, isLoaded]);

  // si esta cargando, devuelve gift hasta que se aplique la font global.
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-background">
        <Gift />
      </div>
    );
  }

  return <>{children}</>;
}
