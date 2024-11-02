import { MainProduct, RecommendedProduct } from "@/domain/definitions";

export const productsTemplate: [MainProduct, ...RecommendedProduct[]] = [
  {
    id: 1,
    name: "Emulsión Facial HYALU PRO",
    price: 29990,
    image: "/image.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Contorno de Ojos FILLER REPAIR",
    price: 29990,
    image: "/image2.png",
  },
  {
    id: 3,
    name: "Serum Facial Renovador Mandelic Night",
    price: 29990,
    image: "/image3.png",
  },
  {
    id: 4,
    name: "Tónico facial descongestivo y reparador BALANCE SKIN",
    price: 29990,
    image: "/image4.png",
  },
];
