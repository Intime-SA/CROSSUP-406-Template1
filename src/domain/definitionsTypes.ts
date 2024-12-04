// interface de escasez

// Interface de descuento de sugerencia
interface Discount {
  isActive: boolean;
  amount: number;
  initAmount: number;
  excludedProducts: string[] | null;
  excludedCategories: string[] | null;
  promotionId: string | null;
  isTestAB: boolean;
}

// interface para instanciar un Timer
interface Timer {
  isActive: boolean;
  amount: number;
}

// si la sugerencia fue creada por dueño de tienda o por AI
interface AutoManagement {
  isActive: false;
  updatedAt: string;
  history: string | null;
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

// inicio y fin de la oferta. Si endRange es menor a la date.now() es equivalente a que la sugerencia esta activa.
interface Range {
  isActive: boolean;
  startRange: string | null;
  endRange: string | null;
}

// textos de sugerencia
interface Text {
  content: string;
  button: string;
  isAIGenerated: boolean;
}

export interface SuggestionData {
  data: PromotionData;
  status: number;
}

// instancia a todas las interfaces de arriba. Es la estructura de datos que viene de la api de crossUp en donde viene toda la informacion de la sugerencia que se dispara con el shooter.
export interface PromotionData {
  _id: string;
  privateName: string;
  showingPlace: string;
  isUpsell: boolean;
  isActive: boolean;
  canModifyQuantity: boolean;
  storeId: string;
  checkInCart: boolean;
  range: Range;
  shooters: MainProduct2[];
  targets: TargetProduct[];
  autoManagement: AutoManagement;
  createdAt: string;
  updatedAt: string;
  isDraft: boolean;
  currentStep: string;
  isTestAB: boolean;
  characteristics: Characteristics;
  targetLimit: TargetLimit;
  exclusions: Exclusions;
}

export interface Exclusions {
  shooters: string[];
  targets: string[];
}

export interface TargetLimit {
  isActive: boolean;
  amount: number;
}

enum TextShortage {
  "¡Ultimas unidades!" = 0,
  "¡Quedan Pocas!" = 1,
  "¡Ultima oportunidad!" = 2,
  "Stock limitado" = 3,
}

interface Shortage {
  isActive: boolean;
  text: TextShortage;
  isAutomatic: boolean;
  stockAmount: number;
}

interface Frame {
  isActive: boolean;
  id: string | null;
}

export enum DesignType {
  VERTICAL = 0,
  HORIZONTAL = 1,
  HISTORY = 2,
}

export interface Characteristics {
  designType: DesignType;
  text: Text;
  discount: Discount;
  shortage: Shortage;
  timer: Timer;
  frame: Frame;
  colors: Colors;
}

export interface Colors {
  text: string;
  buttonText: string;
  button: string;
  background: string;
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
  setIsOpen: (state: boolean) => void;
  isOpen: boolean; // Indica si el modal está abierto
  onClose: () => void;
  template: string; // Función para cerrar el modal
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
  setShowMessage: (state: boolean) => void;
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
  setShowMessage: (state: boolean) => void;
  showMessage: boolean;
  template: string;
}

export interface QuantitySelectorProps {
  variant: Variant | null;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export interface RecommendedProductsProps {
  products: TargetProduct[] | null;
  openModalViewProduct: (product: TargetProduct) => void;
  onClose: () => void;
}

export interface RecommendedProductsProps {
  products: TargetProduct[] | null;
  openModalViewProduct: (product: TargetProduct) => void;
  onClose: () => void;
}

export interface SizeSelectorProps {
  variants: Variant[];
  availableSizes: string[];
  selectedSize: string;
  onSizeSelect: (size: string) => void;
}

export interface StockInfoProps {
  selectedVariant: Variant | null;
}

export interface SheetContentProps {
  isLoading: boolean;
  mainProduct: MainProduct2 | null;
  handleClose: () => void;
  handleOpenModalViewProduct: (product: TargetProduct) => void;
  titleText: string;
  recommendedProducts: TargetProduct[] | null;
}

export interface SheetContentPropsHorizontal {
  mainProduct: MainProduct2 | null;
  handleClose: () => void;
  handleOpenModalViewProduct: (product: TargetProduct) => void;
  recommendedProducts: TargetProduct[] | null;
  isLoading: boolean;
  titleText: string;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  template: string;
}

export interface ProductHistoryProps {
  key: string;
  product: TargetProduct;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
  template: string;
}

export interface CarouselApi {
  scrollTo: (index: number) => void;
  on: (event: string, callback: () => void) => void;
  selectedScrollSnap: () => number;
}
