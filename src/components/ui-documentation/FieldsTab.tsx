import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FieldsTab() {
  return (
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
                <TableCell>Identificador único de la sugerencia</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">targets</TableCell>
                <TableCell>array</TableCell>
                <TableCell>
                  Lista de productos a ofrecer, incluyendo detalles completos
                  del producto
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">privateName</TableCell>
                <TableCell>string</TableCell>
                <TableCell>
                  Nombre interno dado a la sugerencia por el dueño de tienda
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">showingPlace</TableCell>
                <TableCell>string</TableCell>
                <TableCell>
                  Momento de la compra en que se muestra la sugerencia (ej. cart
                  / checkout)
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
                <TableCell className="font-medium">canModifyQuantity</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>
                  Si es true, permite a los clientes modificar la cantidad del
                  producto sugerido. Si es false se agrega 1 unidad
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
                  Información sobre el temporizador de cuenta regresiva para la
                  oferta
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">autoManagement</TableCell>
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
                  Marca de tiempo de la última actualización de la sugerencia
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
                <TableCell>
                  Productos que activan la sugerencia, incluyendo detalles
                  completos del producto
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">exceptions</TableCell>
                <TableCell>array | null</TableCell>
                <TableCell>
                  Lista de IDs de productos que no deben mostrarse con esta
                  oferta
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">isUpsell</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>
                  Indica si esta es una oferta de venta cruzada (false) o venta
                  aumentada (true)
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
                Un array de objetos que representan los productos a ofrecer.
                Cada objeto contiene:
              </p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>
                  <strong>_id</strong>: string - El ID único del producto
                </li>
                <li>
                  <strong>id</strong>: string - El ID del producto
                </li>
                <li>
                  <strong>name</strong>: object - Nombre del producto en
                  diferentes idiomas
                  <ul className="list-disc list-inside ml-8 mt-2">
                    <li>
                      <strong>es</strong>: string - Nombre del producto en
                      español
                    </li>
                    {/* Otros idiomas pueden ser agregados aquí */}
                  </ul>
                </li>
                <li>
                  <strong>description</strong>: object - Descripción del
                  producto en diferentes idiomas
                  <ul className="list-disc list-inside ml-8 mt-2">
                    <li>
                      <strong>es</strong>: string - Descripción del producto en
                      español
                    </li>
                    {/* Otros idiomas pueden ser agregados aquí */}
                  </ul>
                </li>
                <li>
                  <strong>images</strong>: array - Lista de imágenes del
                  producto
                  <ul className="list-disc list-inside ml-8 mt-2">
                    <li>
                      <strong>id</strong>: number - ID único de la imagen
                    </li>
                    <li>
                      <strong>product_id</strong>: string - ID del producto
                      asociado
                    </li>
                    <li>
                      <strong>src</strong>: string - URL de la imagen
                    </li>
                    <li>
                      <strong>position</strong>: number - Posición de la imagen
                      en la lista
                    </li>
                    <li>
                      <strong>alt</strong>: array - Textos alternativos para la
                      imagen
                    </li>
                    <li>
                      <strong>height</strong>: number - Altura de la imagen en
                      píxeles
                    </li>
                    <li>
                      <strong>width</strong>: number - Ancho de la imagen en
                      píxeles
                    </li>
                    <li>
                      <strong>thumbnails_generated</strong>: number - Cantidad
                      de miniaturas generadas
                    </li>
                    <li>
                      <strong>created_at</strong>: string - Fecha y hora de
                      creación de la imagen
                    </li>
                    <li>
                      <strong>updated_at</strong>: string - Fecha y hora de
                      última actualización de la imagen
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>variants</strong>: array - Lista de variantes del
                  producto
                  <ul className="list-disc list-inside ml-8 mt-2">
                    <li>
                      <strong>id</strong>: string - ID único de la variante
                    </li>
                    <li>
                      <strong>value</strong>: string - Valor de la variante (ej.
                      Tamaño 1)
                    </li>
                    <li>
                      <strong>attr</strong>: object - Atributos específicos de
                      la variante
                      <ul className="list-disc list-inside ml-12 mt-2">
                        <li>
                          <strong>Color</strong>: string - Color de la variante
                        </li>
                        <li>
                          <strong>Talle</strong>: string - Talle o tamaño de la
                          variante
                        </li>
                        {/* Otros atributos pueden ser agregados aquí */}
                      </ul>
                    </li>
                    <li>
                      <strong>stock</strong>: number - Cantidad en stock de esta
                      variante
                    </li>
                    <li>
                      <strong>stockManagement</strong>: boolean - Indica si se
                      gestiona el stock de esta variante
                    </li>
                    <li>
                      <strong>price</strong>: number - Precio de la variante
                    </li>
                    <li>
                      <strong>promotionalPrice</strong>: number | null - Precio
                      promocional de la variante, si existe
                    </li>
                    <li>
                      <strong>imageId</strong>: string - ID de la imagen
                      asociada a esta variante
                    </li>
                    <li>
                      <strong>productId</strong>: string - ID del producto al
                      que pertenece esta variante
                    </li>
                    <li>
                      <strong>sku</strong>: string | null - Código SKU de la
                      variante, si existe
                    </li>
                    <li>
                      <strong>ageGroup</strong>: string | null - Grupo de edad
                      al que está dirigida la variante, si aplica
                    </li>
                    <li>
                      <strong>gender</strong>: string | null - Género al que
                      está dirigida la variante, si aplica
                    </li>
                    <li>
                      <strong>cost</strong>: number | null - Costo de la
                      variante, si está disponible
                    </li>
                  </ul>
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
                  <strong>designType</strong>: string - El tipo de diseño para
                  mostrar el temporizador
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
                Un objeto que contiene información sobre la gestión automática:
              </p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>
                  <strong>isEnabled</strong>: boolean - Indica si la gestión
                  automática está habilitada
                </li>
                <li>
                  <strong>updatedAt</strong>: string - Marca de tiempo de la
                  última actualización de gestión automática
                </li>
                <li>
                  <strong>history</strong>: any | null - Datos históricos de
                  acciones de gestión automática
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">frame</h3>
              <p>
                Un objeto que contiene información del marco para visualización
                personalizada:
              </p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>
                  <strong>hasFrame</strong>: boolean - Indica si se usa un marco
                  personalizado
                </li>
                <li>
                  <strong>id</strong>: string | null - Identificador para el
                  marco
                </li>
                <li>
                  <strong>props</strong>: object - Propiedades adicionales para
                  el marco
                  <ul className="list-disc list-inside ml-8 mt-2">
                    <li>
                      <strong>_id</strong>: string - Identificador único del
                      marco
                    </li>
                    <li>
                      <strong>header</strong>: object - Configuración del
                      encabezado del marco
                      <ul className="list-disc list-inside ml-12 mt-2">
                        <li>
                          <strong>hasHeader</strong>: boolean - Indica si el
                          marco tiene un encabezado
                        </li>
                        <li>
                          <strong>src</strong>: object - Fuente de la imagen del
                          encabezado (si aplica)
                        </li>
                        <li>
                          <strong>location</strong>: string - Ubicación del
                          encabezado en el marco
                        </li>
                        <li>
                          <strong>relativeTop</strong>: string - Posición
                          relativa superior del encabezado
                        </li>
                        <li>
                          <strong>height</strong>: string - Altura del
                          encabezado
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>borders</strong>: object - Configuración de los
                      bordes del marco
                      <ul className="list-disc list-inside ml-12 mt-2">
                        <li>
                          <strong>hasBorders</strong>: boolean - Indica si el
                          marco tiene bordes
                        </li>
                        <li>
                          <strong>mainColor</strong>: string - Color principal
                          de los bordes
                        </li>
                        <li>
                          <strong>src</strong>: object - Fuente de la imagen de
                          los bordes (si aplica)
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>state</strong>: boolean - Estado del marco
                      (activo/inactivo)
                    </li>
                    <li>
                      <strong>previewUrl</strong>: object - URL de vista previa
                      del marco
                    </li>
                    <li>
                      <strong>createdAt</strong>: string - Fecha y hora de
                      creación del marco
                    </li>
                    <li>
                      <strong>updatedAt</strong>: string - Fecha y hora de
                      última actualización del marco
                    </li>
                  </ul>
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
                  <strong>startRange</strong>: string | null - Tiempo de inicio
                  del período activo de la oferta
                </li>
                <li>
                  <strong>endRange</strong>: string | null - Tiempo de
                  finalización del período activo de la oferta
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">shooters</h3>
              <p>
                Un array de objetos que representan productos que activan la
                sugerencia. Cada objeto contiene la misma estructura que los
                objetos en el array {"targets"}:
              </p>
              <ul className="list-disc list-inside ml-4 mb-4">
                <li>
                  <strong>_id</strong>: string - El ID único del producto
                </li>
                <li>
                  <strong>id</strong>: string - El ID del producto
                </li>
                <li>
                  <strong>name</strong>: object - Nombre del producto en
                  diferentes idiomas
                </li>
                <li>
                  <strong>description</strong>: object - Descripción del
                  producto en diferentes idiomas
                </li>
                <li>
                  <strong>images</strong>: array - Lista de imágenes del
                  producto
                </li>
                <li>
                  <strong>variants</strong>: array - Lista de variantes del
                  producto
                </li>
              </ul>

              <h3 className="text-lg font-semibold mt-4 mb-2">text</h3>
              <p>
                Un objeto que contiene el contenido de texto para la sugerencia:
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
                  <strong>buttonAccept</strong>: string - Texto para el botón de
                  aceptar
                </li>
                <li>
                  <strong>buttonIgnore</strong>: string - Texto para el botón de
                  ignorar
                </li>
                <li>
                  <strong>type</strong>: string - El tipo de plantilla de texto
                  utilizada
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
