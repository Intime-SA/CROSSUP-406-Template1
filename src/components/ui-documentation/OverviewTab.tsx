import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OverviewTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Descripción General</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Esta API permite gestionar y recuperar sugerencias u ofertas para una
          plataforma de comercio electrónico. Proporciona información detallada
          sobre sugerencias de productos, incluyendo segmentación, descuentos,
          configuración de visualización y más.
        </p>
      </CardContent>
    </Card>
  );
}
