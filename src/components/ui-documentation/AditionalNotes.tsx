import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdditionalNotes() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Notas Adicionales</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          <li>
            El campo <code>showingPlace</code> actualmente admite -cart y
            -checkout, pero puede actualizarse para incluir vertical, horizontal
            e history en futuras versiones.
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
                Venta cruzada - crossell - (false): Agrega el producto sugerido
                junto al producto elegido por el cliente.
              </li>
            </ul>
          </li>
          <li>
            El campo <code>exceptions</code>, cuando se implemente, contendrá un
            array de IDs de productos que no deben mostrarse con esta oferta.
          </li>
          <li>
            Los campos <code>targets</code> y <code>shooters</code> ahora
            contienen información detallada del producto, incluyendo nombre,
            descripción, imágenes y variantes.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
