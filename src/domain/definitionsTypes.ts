interface Shortage {
  hasShortage: boolean;
  text: string;
}

interface Discount {
  isActive: boolean;
  isfixeddiscount: boolean;
  amount: number;
  designType: string | null;
  promotionid: string;
}

interface Timer {
  hasTimer: boolean;
  amountoftime: number;
  designType: string;
  text: string;
}

interface AutoManagement {
  isEnabled: boolean;
  updatedAt: string;
}

interface HeaderProps {
  hasheader: boolean;
  src: Record<string, unknown>;
  location: string;
  relativetop: string;
  height: string;
}

interface BorderProps {
  hasborders: boolean;
  maincolor: string;
  src: Record<string, unknown>;
}

interface FrameProps {
  _id: string;
  header: HeaderProps;
  borders: BorderProps;
  state: boolean;
  previewurl: Record<string, unknown>;
  createdat: string;
}

interface Frame {
  hasframe: boolean;
  id: string | null;
  props: FrameProps;
  updatedat: string;
}

interface Range {
  hasrange: boolean;
  startrange: number | null;
  endrange: number | null;
}

interface Text {
  title: string;
  description: string;
  buttonaccept: string;
  buttonignore: string;
  type: string;
}

export interface PromotionData {
  _id: string;
  targets: RecommendedProduct2[];
  privateName: string;
  showingPlace: string;
  isActive: boolean;
  shortage: Shortage;
  canModifyQuantity: boolean;
  discount: Discount;
  timer: Timer;
  autoManagement: AutoManagement;
  history: null;
  updatedAt: string;
  storeId: string;
  frame: Frame;
  range: Range;
  shooters: MainProduct2[];
  exceptions: null;
  isUpsell: boolean;
  text: Text;
  createdAt: string;
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
