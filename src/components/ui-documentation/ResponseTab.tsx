import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";

SyntaxHighlighter.registerLanguage("json", json);

const jsonExample = `{
  "_id": "67223aac87729c4433dcbc31",
  "targets": [
    {
      "_id": "64de16e59ffb22f98387cc3c",
      "id": "2",
      "name": {
        "es": "Contorno de Ojos FILLER REPAIR"
      },
      "description": {
        "es": "Tónico facial descongestivo y reparador BALANCE SKIN"
      },
      "images": [
        {
          "id": 70566712,
          "product_id": "40373369",
          "src": "/image2.png",
          "position": 1,
          "alt": [],
          "height": 3000,
          "width": 2000,
          "thumbnails_generated": 2,
          "created_at": "2023-10-01T00:00:00+0000",
          "updated_at": "2023-10-01T00:00:00+0000"
        }
      ],
      "variants": [
        {
          "id": "105014160",
          "value": "Tamaño 1",
          "attr": {
            "Color": "Transparente",
            "Talle": "Estándar"
          },
          "stock": 30,
          "stockManagement": true,
          "price": 29990,
          "promotionalPrice": null,
          "imageId": "70566712",
          "productId": "40373369",
          "sku": null,
          "ageGroup": null,
          "gender": null,
          "cost": null
        }
      ]
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
    "props": {
      "_id": "",
      "header": {
        "hasHeader": false,
        "src": {},
        "location": "",
        "relativeTop": "",
        "height": ""
      },
      "borders": {
        "hasBorders": false,
        "mainColor": "",
        "src": {}
      },
      "state": false,
      "previewUrl": {},
      "createdAt": "2024-10-30T13:54:52.389Z",
      "updatedAt": "2024-10-30T13:54:52.389Z"
    }
  },
  "range": {
    "hasRange": false,
    "startRange": null,
    "endRange": null
  },
  "shooters": [
    {
      "_id": "64de16e59ffb22f98387cc3c",
      "id": "2",
      "name": {
        "es": "Contorno de Ojos FILLER REPAIR"
      },
      "description": {
        "es": "Tónico facial descongestivo y reparador BALANCE SKIN"
      },
      "images": [
        {
          "id": 70566712,
          "product_id": "40373369",
          "src": "/image2.png",
          "position": 1,
          "alt": [],
          "height": 3000,
          "width": 2000,
          "thumbnails_generated": 2,
          "created_at": "2023-10-01T00:00:00+0000",
          "updated_at": "2023-10-01T00:00:00+0000"
        }
      ],
      "variants": [
        {
          "id": "105014160",
          "value": "Tamaño 1",
          "attr": {
            "Color": "Transparente",
            "Talle": "Estándar"
          },
          "stock": 30,
          "stockManagement": true,
          "price": 29990,
          "promotionalPrice": null,
          "imageId": "70566712",
          "productId": "40373369",
          "sku": null,
          "ageGroup": null,
          "gender": null,
          "cost": null
        }
      ]
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

export default function ResponseTab() {
  return (
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
  );
}
