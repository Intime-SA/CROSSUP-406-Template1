import fs from "fs/promises";
import path from "path";

export async function fetchDataFromJson(typeTemplate: string) {
  if (typeTemplate === "template1A") {
    try {
      const filePath = path.join(process.cwd(), "public", "data.json");
      const jsonData = await fs.readFile(filePath, "utf8");
      return JSON.parse(jsonData);
    } catch (error) {
      console.error("Error al leer el archivo JSON:", error);
      throw new Error("No se pudo leer el archivo de datos");
    }
  }
  if (typeTemplate === "template1B") {
    try {
      const filePath = path.join(process.cwd(), "public", "data2.json");
      const jsonData = await fs.readFile(filePath, "utf8");
      return JSON.parse(jsonData);
    } catch (error) {
      console.error("Error al leer el archivo JSON:", error);
      throw new Error("No se pudo leer el archivo de datos");
    }
  }
  if (typeTemplate === "template1C") {
    try {
      const filePath = path.join(process.cwd(), "public", "data3.json");
      const jsonData = await fs.readFile(filePath, "utf8");
      return JSON.parse(jsonData);
    } catch (error) {
      console.error("Error al leer el archivo JSON:", error);
      throw new Error("No se pudo leer el archivo de datos");
    }
  }
  if (typeTemplate === "template1D") {
    try {
      const filePath = path.join(process.cwd(), "public", "data3.json");
      const jsonData = await fs.readFile(filePath, "utf8");
      return JSON.parse(jsonData);
    } catch (error) {
      console.error("Error al leer el archivo JSON:", error);
      throw new Error("No se pudo leer el archivo de datos");
    }
  }
}
