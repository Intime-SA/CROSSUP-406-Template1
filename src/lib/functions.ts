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

// agregar al carrito y enviar string con payload
export const addToCartHandler = (
  selectedVariant: Variant,
  quantity: number
) => {
  if (!selectedVariant) {
    console.error("No se ha seleccionado ninguna variante");
    return;
  }

  // target seleccionado de la sugerencia
  const payload = selectedVariant;

  const message = {
    type: "ADD_TO_CART", // CASE para el listener
    payload: payload, // target seleccionado
    quantity: quantity, // cantidad de unidades (por defecto 1)
  };

  // log
  console.log(
    `se esta enviando este paylod al script: ${JSON.stringify(
      message
    )} a la Url/Endpoint/parent ${FRAME_URL}`
  );

  // Enviamos el mensaje al padre
  window.parent.postMessage(JSON.stringify(message), FRAME_URL);
};
