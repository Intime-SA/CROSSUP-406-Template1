import { TargetProduct, Variant } from "@/domain/definitionsTypes";

// URL DE PRUEBA. DEBERIA SER DINAMICA CON LA URL DE TIENDA NUBE

const FRAME_URL = process.env.NEXT_PUBLIC_PARENT_URL || "http://localhost:3000";

// METODO PARA CERRAR POPUP Y AVISAR AL PARENT
export const onClosePopUp = (mensaje: string): void => {
  const message = {
    type: "IGNORE_OFFER",
    payload: {},
  };

  window.parent.postMessage(JSON.stringify(message), FRAME_URL);
  console.log("Close modal ViewProduct", mensaje);
};

// agregar al carrito
export const addToCartHandler = (
  selectedVariant: Variant,
  quantity: number
) => {
  if (!selectedVariant) {
    console.error("No se ha seleccionado ninguna variante");
    return;
  }

  const message = {
    type: "ADD_TO_CART",
    payload: {
      quantity: quantity,
      variant: selectedVariant,
    },
  };

  window.parent.postMessage(JSON.stringify(message), FRAME_URL);
};

// ver historia de target o intentar agregar al cart uno con variantes.
export const handleWatchMore = (product: TargetProduct): void => {
  const message = {
    type: "WATCH_MORE",
    payload: {
      productId: product.id,
      productName: product.name,
    },
  };

  window.parent.postMessage(JSON.stringify(message), FRAME_URL);
  console.log("Watch More clicked for product:", product.name);
};
