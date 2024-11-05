// id = id de sugerencia
// targets = map - ? PARA QUE SIRVE
// privateName = string - nombre sugerencia interno
// showingPlace = string - momento de compra?
// isActive = boolean - sugerencia esta activada?
// shortage = map -disparador?
// canModifyQuantity = bolean - modificador de cantidad
// discount = map - datos del descuento de sugerencia {...promotion-id}
// timer = map - datos del temporizador de la sugerencia
// autoManagment = map - si esta configurada por dueño de tienda o AI
// "updatedAt": date - update de sugerencia,
// "storeId": "id de tienda - cliente crossup",
// "frame": map - datos de viewport width y viewport heigth
// "range": map - ?
// shooters: map - datos del producto disparador de sugerencia
// exceptions: ?
// isUpsell: bolean - ?
// text: map - textos de la sugerencia
// createAt: date - fecha de creacion

targets: los productos a ofrecer, la sugerencia tiene el id y el rank, que seria el orden en que se muestran si son mas de 1. Probablemente se mande el producto completo como hacemos actualmente, ahora te mando un JSON con como se ve el producto.
privateName: si, el nombre que le dio el usuario
showingPlace: si, esto actualmente es cart o checkout, pero estamos trabajando en un nuevo modelo donde se va a alinear mejor con lo que ves en el figma, que seria vertical horizontal e history, probablemente, lo tiene que aprobar Rafa
isActive: si la oferta esta prendida
shortage: es el texto que se muestra tipo 'quedan solo 5 unidades!'
canModifyQuantity: si es true, aparece un dropdown y el cliente puede agregar n unidades al apretar agregar al carrito, si es false se agrega 1 unidad
discount: si, toda la data del descuento
timer: similar a shortage, un cartel que muestra un temporizador con el tiempo para poder agregar al carrito
autoManagement: si
updatedAt: si, campo interno
storeId: si
frame: si, es el frame que se va a usar en caso que hayan configurado uno que no sea el default
range: rango de tiempo en que la oferta se va a encontrar activa, si Date.now() < startRange o Date.now() > endRange, seria equivalente a que la oferta tenga isActive: false
shooters: si
exceptions: esto esta a definir, va a ser un array de productos que no se tienen que mostrar con la oferta, por ej si un shooter es una categoria id: 123, y no queres mostrar el producto id: 456 exceptions va a ser ['456']
isUpsell: una de las dos tecnicas de venta que manejamos, si es true es upsell,
upsell: se reemplaza el producto que el cliente queria llevar, por ej si un cliente se queria llevar un pack de 3 pares de medias, le mostras un upsell con 6 pares de medias, se reemplaza en el carrito el pack de 3 por el par de 6.
crossell: se llevan ambos productos, el que agrego el cliente + el que se sugirio
text: si
createdAt: si
