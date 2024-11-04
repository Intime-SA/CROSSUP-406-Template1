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
// Define MainProduct interface
export interface MainProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Define RecommendedProduct interface
export interface RecommendedProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ViewProductProps {
  product: RecommendedProduct;
  isOpen: boolean; // Indica si el modal está abierto
  onClose: () => void; // Función para cerrar el modal
}

export interface MainProduct2 {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

// Define RecommendedProduct interface
export interface RecommendedProduct2 {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}
