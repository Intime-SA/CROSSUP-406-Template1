export interface Product {
  title: string;
  shooter: {
    id: string;
    name: string;
    images: string[];
    regularPrice: number;
    promotionalPrice: number | null;
    shortDescription: string;
  };
  products: Array<{
    id: string;
    name: string;
    images: string[];
    regularPrice: number;
    promotionalPrice: number | null;
    availableStock: number;
    shortDescription: string;
  }>;
  description: string;
  offerExpirationTime: number;
}

export interface ProductListProps {
  initialProducts: Product[];
}

export interface RelatedProduct {
  id: string;
  name: string;
  images: string[];
  regularPrice: number;
  promotionalPrice: number | null;
  availableStock: number;
  shortDescription: string;
}

export interface ProductCardProps {
  product: {
    title: string;
    shooter: {
      name: string;
      images: string[];
      regularPrice: number;
      promotionalPrice: number | null;
      shortDescription: string;
    };
    products: RelatedProduct[];
    description: string;
    offerExpirationTime: number;
  };
}

export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export interface RelatedProductsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  addedProduct: {
    name: string;
    image: string;
    price: number;
  };
  relatedProducts: RelatedProduct[];
}

export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export interface TimerState {
  timeLeft: number;
  isRunning: boolean;
}

export interface ViewProductProps {
  product: RecommendedProduct2;
  isOpen: boolean; // Indica si el modal está abierto
  onClose: () => void; // Función para cerrar el modal
}

export interface Image {
  id: number;
  product_id: string;
  src: string;
  position: number;
  alt: string[];
  height: number;
  width: number;
  thumbnails_generated: number;
  created_at: string;
  updated_at: string;
}

export interface Variant {
  id: string;
  value: string;
  attr: {
    Color: string;
    Talle: string;
  };
  stock: number;
  stockManagement: boolean;
  price: number;
  promotionalPrice: number | null;
  imageId: string;
  productId: string;
  sku: string | null;
  ageGroup: string | null;
  gender: string | null;
  cost: number | null;
}

export interface MainProduct2 {
  _id: string; // Se añadió el campo _id como string
  id: string; // Se cambió id a string para coincidir con el ejemplo
  name: {
    es: string;
  };
  description: {
    es: string;
  };
  images: Image[]; // Se añadió un array de imágenes
  variants: Variant[]; // Se añadió un array de variantes
}

export interface RecommendedProduct2 {
  _id: string; // Se añadió el campo _id como string
  id: string; // Se cambió id a string para coincidir con el ejemplo
  name: {
    es: string;
  };
  description: {
    es: string;
  };
  images: Image[]; // Se añadió un array de imágenes
  variants: Variant[]; // Se añadió un array de variantes
}
