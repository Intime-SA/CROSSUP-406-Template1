import { useProductSelectors } from "@/hooks/useSelectors";
import { Inter, Montserrat } from "next/font/google";

// Definimos un tipo para las fuentes disponibles
type FontFamilies = "Montserrat" | "Inter"; // Solo las fuentes válidas como literales

// Define cada fuente como una constante individual
const montserratFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family",
});

const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family",
});

// Luego usa las constantes en el objeto `fonts`
export const fonts = {
  Montserrat: montserratFont,
  Inter: interFont,
  // Agrega aquí todas las fuentes que necesites
};

export function useDynamicFont() {
  // Obtener el estado del font desde Redux
  const colors = useProductSelectors();

  // Asegura que `colors.fontFamily` será una clave válida de `fonts`
  const selectedFont = colors.fontFamily as FontFamilies;

  // Si la fuente seleccionada existe en el objeto, se la devuelve, sino usa Montserrat por defecto
  return fonts[selectedFont] || fonts["Montserrat"];
}
