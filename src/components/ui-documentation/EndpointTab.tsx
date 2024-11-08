import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function EndpointTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Punto de Acceso</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Recupera una sugerencia especifica por ID:</p>
        <SyntaxHighlighter language="bash" style={docco}>
          fetchData(typeTemplate) - es un metodo que se ejecuta como Server
          Action en app/actions/actions.ts
        </SyntaxHighlighter>
        <br />
        <p className="mb-4">
          Posibles opciones: template1A, template1B, template1C, template1D
        </p>
      </CardContent>
    </Card>
  );
}
