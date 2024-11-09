import { useProductSelectors } from "@/hooks/useSelectors";
import {
  Inter,
  Roboto,
  Lato,
  Poppins,
  Montserrat,
  Open_Sans,
  Raleway,
  Oswald,
  Merriweather,
  Source_Sans_3,
} from "next/font/google";

type FontFamilies =
  | "Inter"
  | "Roboto"
  | "Lato"
  | "Poppins"
  | "Montserrat"
  | "OpenSans"
  | "Raleway"
  | "Oswald"
  | "Merriweather"
  | "SourceSansPro";

const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const latoFont = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

const poppinsFont = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const montserratFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const openSansFont = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const ralewayFont = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

const oswaldFont = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

const merriweatherFont = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

const sourceSansProFont = Source_Sans_3({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-pro",
});

export const fonts = {
  Inter: interFont,
  Roboto: robotoFont,
  Lato: latoFont,
  Poppins: poppinsFont,
  Montserrat: montserratFont,
  OpenSans: openSansFont,
  Raleway: ralewayFont,
  Oswald: oswaldFont,
  Merriweather: merriweatherFont,
  SourceSansPro: sourceSansProFont,
};

export type Font = typeof interFont;

export function useDynamicFont() {
  const colors = useProductSelectors();
  const selectedFont = colors.fontFamily as FontFamilies;
  return fonts[selectedFont] || fonts["Inter"];
}
