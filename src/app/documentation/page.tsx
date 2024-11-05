"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("json", json);

export default function ApiDocumentation() {
  const [activeTab, setActiveTab] = useState("overview");

  const jsonExample = `{
  "_id": "67223aac87729c4433dcbc31",
  "targets": [
    {
      "id": "203086431",
      "type": "category",
      "rank": 1
    }
  ],
  "privateName": "pruebaa",
  "showingPlace": "cart",
  "isActive": true,
  "shortage": {
    "hasShortage": false,
    "text": ""
  },
  "canModifyQuantity": false,
  "discount": {
    "isActive": true,
    "isFixedDiscount": false,
    "amount": 0.1,
    "designType": null,
    "promotionId": "810d9356-9500-4d47-a61d-310978d51d7a"
  },
  "timer": {
    "hasTimer": false,
    "amountOfTime": 0,
    "designType": "",
    "text": ""
  },
  "autoManagement": {
    "isEnabled": false,
    "updatedAt": "2024-10-30T13:54:52.389Z",
    "history": null
  },
  "updatedAt": "2024-10-30T13:54:52.389Z",
  "storeId": "659802e39fca2cdf36d8c605",
  "frame": {
    "hasFrame": false,
    "id": null,
    "props": {}
  },
  "range": {
    "hasRange": false,
    "startRange": null,
    "endRange": null
  },
  "shooters": [
    {
      "id": "129558013",
      "type": "product"
    }
  ],
  "exceptions": null,
  "isUpsell": false,
  "text": {
    "title": "OFERTA EXCLUSIVA",
    "description": "Aprovecha esta oportunidad exclusiva para vos",
    "buttonAccept": "AGREGAR AL CARRITO",
    "buttonIgnore": "Ignorar oferta y seguir comprando",
    "type": "PersonalizedTemplate"
  },
  "createdAt": "2024-10-30T13:54:52.389Z"
}`;

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
          <Card>
            <CardHeader>
              <CardTitle>Descripción General</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Esta API permite gestionar y recuperar sugerencias u ofertas
                para una plataforma de comercio electrónico. Proporciona
                información detallada sobre sugerencias de productos, incluyendo
                segmentación, descuentos, configuración de visualización y más.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoint">
          <Card>
            <CardHeader>
              <CardTitle>Punto de Acceso</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Recupera una sugerencia específica por su ID:
              </p>
              <SyntaxHighlighter language="bash" style={docco}>
                GET /suggestions/{"{id}"}
              </SyntaxHighlighter>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="response">
          <Card>
            <CardHeader>
              <CardTitle>Estructura de la Respuesta</CardTitle>
              <CardDescription>
                La API devuelve un objeto JSON con la siguiente estructura:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                <SyntaxHighlighter language="json" style={docco}>
                  {jsonExample}
                </SyntaxHighlighter>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fields">
          <Card>
            <CardHeader>
              <CardTitle>Descripción de los Campos</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campo</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Descripción</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">_id</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Identificador único de la sugerencia
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">targets</TableCell>
                      <TableCell>array</TableCell>
                      <TableCell>
                        Lista de productos a ofrecer, incluyendo sus IDs y orden
                        de visualización
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">privateName</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Nombre interno dado a la sugerencia por el dueño de
                        tienda
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        showingPlace
                      </TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Momento de la compra en que se muestra la sugerencia
                        (ej. cart / checkout)
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">isActive</TableCell>
                      <TableCell>boolean</TableCell>
                      <TableCell>
                        Indica si la sugerencia está actualmente activa
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">shortage</TableCell>
                      <TableCell>object</TableCell>
                      <TableCell>
                        Contiene información sobre la escasez del producto
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        canModifyQuantity
                      </TableCell>
                      <TableCell>boolean</TableCell>
                      <TableCell>
                        Si es true, permite a los clientes modificar la cantidad
                        del producto sugerido. Si es false se agrega 1 unidad
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">discount</TableCell>
                      <TableCell>object</TableCell>
                      <TableCell>
                        Detalles sobre el descuento aplicado a la sugerencia
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">timer</TableCell>
                      <TableCell>object</TableCell>
                      <TableCell>
                        Información sobre el temporizador de cuenta regresiva
                        para la oferta
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        autoManagement
                      </TableCell>
                      <TableCell>object</TableCell>
                      <TableCell>
                        Indica si la sugerencia es gestionada por el dueño de la
                        tienda o por IA
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">updatedAt</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Marca de tiempo de la última actualización de la
                        sugerencia
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">storeId</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Identificador de la tienda (cliente de CrossUp)
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">frame</TableCell>
                      <TableCell>object</TableCell>
                      <TableCell>
                        Datos de ancho y alto del viewport para la visualización
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">range</TableCell>
                      <TableCell>object</TableCell>
                      <TableCell>
                        Rango de tiempo durante el cual la oferta está activa
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">shooters</TableCell>
                      <TableCell>array</TableCell>
                      <TableCell>Productos que activan la sugerencia</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">exceptions</TableCell>
                      <TableCell>array | null</TableCell>
                      <TableCell>
                        Lista de IDs de productos que no deben mostrarse con
                        esta oferta
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">isUpsell</TableCell>
                      <TableCell>boolean</TableCell>
                      <TableCell>
                        Indica si esta es una oferta de venta cruzada (false) o
                        venta aumentada (true)
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">text</TableCell>
                      <TableCell>object</TableCell>
                      <TableCell>
                        Contiene el contenido de texto para la sugerencia
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">createdAt</TableCell>
                      <TableCell>string</TableCell>
                      <TableCell>
                        Marca de tiempo de cuando se creó la sugerencia
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>

              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="detailed-fields">
                  <AccordionTrigger className="flex items-center justify-between w-full py-4 px-6 text-left font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg">
                    <span>Descripción Detallada de los Campos</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <h3 className="text-lg font-semibold mt-4 mb-2">targets</h3>
                    <p>
                      Un array de objetos que representan los productos a
                      ofrecer. Cada objeto contiene:
                    </p>
                    <ul className="list-disc list-inside ml-4 mb-4">
                      <li>
                        <strong>id</strong>: string - El ID del producto
                      </li>
                      <li>
                        <strong>type</strong>: string - El tipo de objetivo (ej.
                        category)
                      </li>
                      <li>
                        <strong>rank</strong>: number - El orden de
                        visualización del producto en la sugerencia
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4 mb-2">
                      shortage
                    </h3>
                    <p>
                      Un objeto que contiene información sobre la escasez del
                      producto:
                    </p>
                    <ul className="list-disc list-inside ml-4 mb-4">
                      <li>
                        <strong>hasShortage</strong>: boolean - Indica si hay un
                        mensaje de escasez
                      </li>
                      <li>
                        <strong>text</strong>: string - El mensaje de escasez
                        (ej. ¡Solo quedan 5 unidades!)
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4 mb-2">
                      discount
                    </h3>
                    <p>Un objeto que contiene información del descuento:</p>
                    <ul className="list-disc list-inside ml-4 mb-4">
                      <li>
                        <strong>isActive</strong>: boolean - Indica si el
                        descuento está activo
                      </li>
                      <li>
                        <strong>isFixedDiscount</strong>: boolean - True si es
                        un monto fijo, false si es un porcentaje
                      </li>
                      <li>
                        <strong>amount</strong>: number - El monto o porcentaje
                        de descuento
                      </li>
                      <li>
                        <strong>designType</strong>: string | null - El tipo de
                        diseño para mostrar el descuento
                      </li>
                      <li>
                        <strong>promotionId</strong>: string - Identificador
                        único para la promoción
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4 mb-2">timer</h3>
                    <p>Un objeto que contiene información del temporizador:</p>
                    <ul className="list-disc list-inside ml-4 mb-4">
                      <li>
                        <strong>hasTimer</strong>: boolean - Indica si hay un
                        temporizador de cuenta regresiva
                      </li>
                      <li>
                        <strong>amountOfTime</strong>: number - La duración del
                        temporizador
                      </li>
                      <li>
                        <strong>designType</strong>: string - El tipo de diseño
                        para mostrar el temporizador
                      </li>
                      <li>
                        <strong>text</strong>: string - Texto a mostrar con el
                        temporizador
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4 mb-2">
                      autoManagement
                    </h3>
                    <p>
                      Un objeto que contiene información sobre la gestión
                      automática:
                    </p>
                    <ul className="list-disc list-inside ml-4 mb-4">
                      <li>
                        <strong>isEnabled</strong>: boolean - Indica si la
                        gestión automática está habilitada
                      </li>
                      <li>
                        <strong>updatedAt</strong>: string - Marca de tiempo de
                        la última actualización de gestión automática
                      </li>
                      <li>
                        <strong>history</strong>: any | null - Datos históricos
                        de acciones de gestión automática
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4 mb-2">frame</h3>
                    <p>
                      Un objeto que contiene información del marco para
                      visualización personalizada:
                    </p>
                    <ul className="list-disc list-inside ml-4 mb-4">
                      <li>
                        <strong>hasFrame</strong>: boolean - Indica si se usa un
                        marco personalizado
                      </li>
                      <li>
                        <strong>id</strong>: string | null - Identificador para
                        el marco
                      </li>
                      <li>
                        <strong>props</strong>: object - Propiedades adicionales
                        para el marco
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4 mb-2">range</h3>
                    <p>
                      Un objeto que especifica el rango de tiempo activo para la
                      oferta:
                    </p>
                    <ul className="list-disc list-inside ml-4 mb-4">
                      <li>
                        <strong>hasRange</strong>: boolean - Indica si se ha
                        establecido un rango de tiempo
                      </li>
                      <li>
                        <strong>startRange</strong>: string | null - Tiempo de
                        inicio del período activo de la oferta
                      </li>
                      <li>
                        <strong>endRange</strong>: string | null - Tiempo de
                        finalización del período activo de la oferta
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4 mb-2">
                      shooters
                    </h3>
                    <p>
                      Un array de objetos que representan productos que activan
                      la sugerencia:
                    </p>
                    <ul className="list-disc list-inside ml-4 mb-4">
                      <li>
                        <strong>id</strong>: string - El ID del producto
                      </li>
                      <li>
                        <strong>type</strong>: string - El tipo de activador
                        (ej. product)
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4 mb-2">text</h3>
                    <p>
                      Un objeto que contiene el contenido de texto para la
                      sugerencia:
                    </p>
                    <ul className="list-disc list-inside ml-4 mb-4">
                      <li>
                        <strong>title</strong>: string - El título de la oferta
                      </li>
                      <li>
                        <strong>description</strong>: string - Descripción de la
                        oferta
                      </li>
                      <li>
                        <strong>buttonAccept</strong>: string - Texto para el
                        botón de aceptar
                      </li>
                      <li>
                        <strong>buttonIgnore</strong>: string - Texto para el
                        botón de ignorar
                      </li>
                      <li>
                        <strong>type</strong>: string - El tipo de plantilla de
                        texto utilizada
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Notas Adicionales</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>
              El campo <code>showingPlace</code> actualmente admite -cart y
              -checkout, pero puede actualizarse para incluir vertical,
              horizontal e history en futuras versiones.
            </li>
            <li>
              El campo <code>isUpsell</code> distingue entre técnicas de venta
              aumentada y venta cruzada:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Venta aumentada - upsell (true): Reemplaza el producto elegido
                  por el cliente con una versión mejorada.
                </li>
                <li>
                  Venta cruzada - crossell - (false): Agrega el producto
                  sugerido junto al producto elegido por el cliente.
                </li>
              </ul>
            </li>
            <li>
              El campo <code>exceptions</code>, cuando se implemente, contendrá
              un array de IDs de productos que no deben mostrarse con esta
              oferta.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
