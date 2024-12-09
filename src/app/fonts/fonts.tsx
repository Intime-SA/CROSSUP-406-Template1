"use client";

import { useState, useEffect } from "react";

// creacion de hook
export function useDynamicFont() {
  // traemos state colors
  /*   const colors = useProductSelectors(); */
  /*   const selectedFont = colors.fontFamily as string; // traemos a la font que viaja de la data */
  const selectedFont = "Montserrat";
  const [fontLoaded, setFontLoaded] = useState(false); // estado de carga

  // una vez que tenemos la selectedFont persistida, generamos la peticion a google para traer la font
  useEffect(() => {
    if (!selectedFont) return; // cortamos ejecucion si no hay font

    const link = document.createElement("link"); // creamos link
    link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.replace(
      /\s+/g,
      "+"
    )}:wght@400;700&display=swap`;
    link.rel = "stylesheet"; // config api google
    link.onload = () => setFontLoaded(true); // loader
    link.onerror = () => console.error(`Failed to load font: ${selectedFont}`); // tira error sino puede cargar la font
    document.head.appendChild(link); // crea el head importando el link de google

    return () => {
      document.head.removeChild(link); // aplica el link head
    };
  }, [selectedFont]);

  // hook retorna si esta cargando o si esta fontFamily
  return {
    fontFamily: selectedFont,
    isLoaded: fontLoaded,
  };
}
