"use server";

// mock de data API CROSS UP > SUGERENCIA / RECOMENDACION
import { getMockOfferData } from "@/data/data";
import { getMockOfferData2 } from "@/data/data2";
import { getMockOfferData3 } from "@/data/data3";
import { getMockOfferData4 } from "@/data/data4";

// Simulacion de llamada a la API para obtener datos
export async function fetchDataFromJson(typeTemplate: string) {
  try {
    switch (typeTemplate) {
      case "template1A":
        return getMockOfferData();
      case "template1B":
        return getMockOfferData2();
      case "template1C":
        return getMockOfferData3();
      case "template1D":
        return getMockOfferData4();
      default:
        throw new Error("Invalid template type");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}
