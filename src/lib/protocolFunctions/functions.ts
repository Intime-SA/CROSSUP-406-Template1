import { Variant } from "@/domain/definitionsTypes";

// endpoint a donde envia mensaje que reciba script
const FRAME_URL =
  process.env.NEXT_PUBLIC_FRAME_URL || "https://tiendanube.com/storeId";

// funcion que avisa de cierre de popUp al script
export const onClosePopUp = (mensaje: string): void => {
  const message = {
    type: "IGNORE_OFFER",
    payload: {},
  };

  // Enviamos el mensaje al padre
  window.parent.postMessage(JSON.stringify(message), FRAME_URL);
  console.log("Close modal ViewProduct", mensaje);
};

export const handleAddToCart = (id: string, quantity: number): void => {
  console.log("Si no tiene variantes, se agrega directo al cart", id, quantity);
  onClosePopUp("cerrar desde agregar al cart");
};

export const addToCartHandler = (
  selectedVariant: Variant,
  quantity: number
) => {
  if (!selectedVariant) {
    console.error("No se ha seleccionado ninguna variante");
    return;
  }

  const payload = selectedVariant;

  const message = {
    type: "ADD_TO_CART",
    payload: payload,
    quantity: quantity,
  };

  console.log(
    `se esta enviando este paylod al script: ${JSON.stringify(
      message
    )} a la Url/Endpoint/parent ${FRAME_URL}`
  );

  // Enviamos el mensaje al padre
  window.parent.postMessage(JSON.stringify(message), FRAME_URL);
};
