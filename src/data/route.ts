import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const template = searchParams.get("template");

  // Mapeo de templates a archivos
  const templateToFile = {
    template1A: "data.json",
    template1B: "data2.json",
    template1C: "data3.json",
    template1D: "data3.json",
  };

  const fileName = templateToFile[template as keyof typeof templateToFile];

  if (!fileName) {
    return NextResponse.json({ error: "Template no válido" }, { status: 400 });
  }

  try {
    const jsonDirectory = path.join(process.cwd(), "data");
    const fileContents = await fs.readFile(
      path.join(jsonDirectory, fileName),
      "utf8"
    );
    return NextResponse.json(JSON.parse(fileContents));
  } catch (error) {
    console.error(`Error al leer el archivo JSON (${fileName}):`, error);
    return NextResponse.json(
      { error: "Error al leer el archivo de datos" },
      { status: 500 }
    );
  }
}
