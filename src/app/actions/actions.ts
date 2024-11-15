"use server";

// mock de data API CROSS UP > SUGERENCIA / RECOMENDACION
import { getMockOfferData } from "@/data/data";
import { getMockOfferData2 } from "@/data/data2";
import { getMockOfferData3 } from "@/data/data3";
import { getMockOfferData4 } from "@/data/data4";
import { getMockOfferData5 } from "@/data/data5";
import { getMockOfferData6 } from "@/data/data6";

// Simulación de llamada a la API para obtener datos
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
      case "template1E":
        return getMockOfferData5();
      case "template1F":
        return getMockOfferData6();
      default:
        throw new Error("Invalid template type");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }
}
