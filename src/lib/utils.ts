import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);
};

export const templateOptions = {
  template1A: {
    label: "Template sugerencias y Producto especifico (1A)",
    type: "template1A",
  },
  template1B: {
    label: "Con limites y maximos de textos (2B)",
    type: "template1B",
  },
  template1C: {
    label: "Con descuentos y widgets (1C°)",
    type: "template1C",
  },
  template1D: {
    label: "Con descuentos y widgets globales (2D°)",
    type: "template1D",
  },
};
