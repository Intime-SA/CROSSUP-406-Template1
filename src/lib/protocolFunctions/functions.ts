export const onClosePopUp = (mensaje: string): void => {
  console.log(
    "Aqui se va a realizar la comunicacion por protocolo para comunicarse con script",
    mensaje
  );
};

export const openModalViewProduct = (id: number): void => {
  console.log(
    "Aqui se va a realizar la comunicacion por protocolo para comunicarse con script",
    id
  );
};

const customTextHardcode = "Complementá tu compra";

export const customText = (mensaje: string) => {
  console.log(
    "Aqui se va a realizar la comunicacion por protocolo traer al mensaje configurado por cliente",
    mensaje
  );
  return customTextHardcode;
};

export const handleAddToCart = (id: string): void => {
  console.log(
    "Aqui se va a realizar la comunicacion por protocolo para agregar al cart via script",
    id
  );
  onClosePopUp("cerrar desde agregar al cart");
};
