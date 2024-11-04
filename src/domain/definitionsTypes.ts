interface Target {
  id: string;
  type: string;
  rank: number;
}

interface Shortage {
  hasshortage: boolean;
  text: string;
}

interface Discount {
  isactive: boolean;
  isfixeddiscount: boolean;
  amount: number;
  designtype: string | null;
  promotionid: string;
}

interface Timer {
  hastimer: boolean;
  amountoftime: number;
  designtype: string;
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

interface Shooter {
  id: string;
  type: string;
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
  targets: Target[];
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
  shooters: Shooter[];
  exceptions: null;
  isUpsell: boolean;
  text: Text;
  createdAt: string;
}
