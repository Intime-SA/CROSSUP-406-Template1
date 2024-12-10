"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewTab from "@/components/ui-documentation/OverviewTab";
import EndpointTab from "@/components/ui-documentation/EndpointTab";
import ResponseTab from "@/components/ui-documentation/ResponseTab";
import FieldsTab from "@/components/ui-documentation/FieldsTab";
import AdditionalNotes from "@/components/ui-documentation/AditionalNotes";

export default function ApiDocumentation() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Documentación de la API: Sistema de Sugerencias/Ofertas
      </h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Descripción General</TabsTrigger>
          <TabsTrigger value="endpoint">Punto de Acceso</TabsTrigger>
          <TabsTrigger value="response">Estructura de Respuesta</TabsTrigger>
          <TabsTrigger value="fields">Campos Detallados</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTab />
        </TabsContent>

        <TabsContent value="endpoint">
          <EndpointTab />
        </TabsContent>

        <TabsContent value="response">
          <ResponseTab />
        </TabsContent>

        <TabsContent value="fields">
          <FieldsTab />
        </TabsContent>
      </Tabs>

      <AdditionalNotes />
    </div>
  );
}
