// interface de escasez
interface Shortage {
  hasShortage: boolean;
  text: string;
}

// Interface de descuento de sugerencia
interface Discount {
  isActive: boolean;
  isFixedDiscount: boolean;
  amount: number;
  designType: string | null;
  promotionId: string | null;
}

// interface para instanciar un Timer
interface Timer {
  hasTimer: boolean;
  amountOfTime: number;
  designType: string;
  text: string;
}

// si la sugerencia fue creada por dueño de tienda o por AI
interface AutoManagement {
  isEnabled: boolean;
  updatedAt: string;
  history: null;
}

// ?
interface HeaderProps {
  hasHeader: boolean;
  src: Record<string, unknown>;
  location: string;
  relativeTop: string;
  height: string;
}

// ?
interface BorderProps {
  hasBorders: boolean;
  mainColor: string;
  src: Record<string, unknown>;
}

// ?
interface FrameProps {
  _id: string;
  header: HeaderProps;
  borders: BorderProps;
  state: boolean;
  previewUrl: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

// ?
interface Frame {
  hasFrame: boolean;
  id: string | null;
  props: FrameProps;
}

// inicio y fin de la oferta. Si endRange es menor a la date.now() es equivalente a que la sugerencia esta activa.
interface Range {
  hasRange: boolean;
  startRange: number | null;
  endRange: number | null;
}

// textos de sugerencia
interface Text {
  title: string;
  description: string;
  buttonAccept: string;
  buttonIgnore: string;
  type: string;
}

// instancia a todas las interfaces de arriba. Es la estructura de datos que viene de la api de crossUp en donde viene toda la informacion de la sugerencia que se dispara con el shooter.
export interface PromotionData {
  _id: string;
  colors: ColorsApi;
  targets: TargetProduct[];
  privateName: string;
  showingPlace: string;
  isActive: boolean;
  shortage: Shortage;
  canModifyQuantity: boolean;
  discount: Discount;
  timer: Timer;
  autoManagement: AutoManagement;
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

export interface ColorsApi {
  primary: string;
  secondary: string;
  font: string;
}

/////////////////////////////////////////////////////////////////////////////////////////

// data image target.image
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

// interface de un variant > target
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

// interface de shooter de la sugerencia
export interface MainProduct2 {
  _id: string;
  id: string;
  name: {
    es: string;
  };
  description: {
    es: string;
  };
  images: Image[]; // Se añadió un array de imágenes
  variants: Variant[]; // Se añadió un array de variantes
}

// interface de targets relacionados al shooter
export interface TargetProduct {
  _id: string;
  id: string;
  name: {
    es: string;
  };
  description: {
    es: string;
  };
  images: Image[]; // Se añadió un array de imágenes
  variants: Variant[]; // Se añadió un array de variantes
}

// Maneja instancia del popUp (como padre)
export interface ViewProductProps {
  product: TargetProduct;
  isOpen: boolean; // Indica si el modal está abierto
  onClose: () => void; // Función para cerrar el modal
}

//
export interface ProductInfoProps {
  product: ViewProductProps["product"];
  selectedVariant: Variant | null;
  quantity: number;
}

// interface para instanciar el shooter al inicializar sugerencia
export interface ProductAddedProps {
  onClose: () => void;
  checkIconSrc?: string;
  closeIconSrc?: string;
  mainProduct: MainProduct2;
  openModalViewProduct: (product: MainProduct2) => void;
}

// interface para instanciar attr.colors
export interface ColorSelectorProps {
  variants: Variant[];
  availableColors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

// interface para instanciar boton simulador de disparador desde tiendaNube
export interface TemplateButtonProps {
  label: string;
  type: string;
  onClick: (type: string) => void;
}

// interface para instancia en Boton de PopUp de confirmacion
export interface AddToCartButtonProps {
  onAddToCart: () => void;
}

// interface para instanciar presentacion de popUp (como hijo)
export interface ProductViewPresentationProps extends ViewProductProps {
  variants: Variant[];
  selectedVariant: Variant | null;
  quantity: number;
  availableSizes: string[];
  availableColors: string[];
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleColorSelect: (color: string) => void;
  handleSizeSelect: (size: string) => void;
  handleAddToCartAndClose: () => void;
}

// enum para los diferentes tipos de template
export enum DesignType {
  VERTICAL = "template1",
  HORIZONTAL = "template2",
  HISTORY = "template3",
}
