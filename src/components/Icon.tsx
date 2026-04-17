import {
  ArrowRight, ArrowLeft, ArrowDown, ChevronDown, ChevronLeft, ChevronRight,
  Map, MapPin, Navigation, Compass,
  Lock, LockOpen, ShieldCheck, Shield,
  Check, CheckCircle, Circle,
  Star, Heart, Zap, Lightbulb, Info, HelpCircle,
  Mail, Send, MessageSquare,
  Phone, Smartphone, Download, Share2,
  Clock, Calendar, CalendarCheck, RefreshCw,
  CreditCard, ShoppingCart, Tag, DollarSign, PiggyBank, Gem,
  User, Users, UserCheck,
  Hotel, Bed, Home, Building,
  Utensils, Coffee,
  Train, Bus, TramFront, Plane, Car, Bike, Footprints,
  Camera, Sun, Cloud,
  BookOpen, Newspaper, FileText,
  LogIn, Crown, Award, Gift, Ticket,
  Globe, Languages, Wifi, Battery,
  AlertCircle, XCircle, X, Ban,
  ExternalLink, Eye, Settings,
  Castle, TreePine, Waves, Anchor, Sailboat,
  Backpack, Baby, PersonStanding,
  Landmark, Theater, Music,
  FlameKindling, Church,
  Route, LocateFixed,
  Activity, Loader,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  // Navegación
  arrow_forward: ArrowRight,
  arrow_back: ArrowLeft,
  arrow_right: ArrowRight,
  expand_more: ChevronDown,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,

  // Mapa / Ubicación
  map: Map,
  location_on: MapPin,
  place: MapPin,
  pin_drop: MapPin,
  navigation: Navigation,
  explore: Compass,
  travel_explore: Compass,
  near_me: Compass,
  route: Route,
  directions: Navigation,
  directions_transit: Train,
  directions_bus: Bus,
  directions_walk: Footprints,
  directions_subway: Train,
  directions_railway: Train,
  directions_car: Car,

  // Seguridad / Acceso
  lock: Lock,
  lock_open: LockOpen,
  verified: ShieldCheck,
  verified_user: ShieldCheck,
  shield: Shield,
  admin_panel_settings: ShieldCheck,
  workspace_premium: Crown,
  login: LogIn,

  // Confirmación
  check: Check,
  check_circle: CheckCircle,
  done: Check,
  task_alt: CheckCircle,
  cancel: XCircle,
  block: Ban,
  remove: X,
  close: X,

  // Valoración
  star: Star,
  favorite: Heart,
  thumb_up: Heart,
  bolt: Zap,
  flash_on: Zap,
  auto_awesome: Zap,
  lightbulb: Lightbulb,
  emoji_events: Award,
  new_releases: Award,

  // Info / Ayuda
  info: Info,
  help: HelpCircle,
  error: AlertCircle,
  warning: AlertCircle,

  // Comunicación
  mail: Mail,
  email: Mail,
  send: Send,
  chat: MessageSquare,
  share: Share2,

  // Dispositivos
  phone_iphone: Smartphone,
  android: Smartphone,
  sim_card: Smartphone,
  wifi: Wifi,
  battery_charging_full: Battery,

  // Descarga / Archivos
  download: Download,

  // Tiempo
  schedule: Clock,
  update: RefreshCw,
  autorenew: RefreshCw,
  event: Calendar,
  calendar_month: Calendar,
  calendar_today: Calendar,
  event_available: CalendarCheck,
  history_edu: BookOpen,

  // Dinero
  credit_card: CreditCard,
  payments: CreditCard,
  shopping_cart: ShoppingCart,
  local_offer: Tag,
  sell: Tag,
  redeem: Gift,
  card_giftcard: Gift,
  savings: PiggyBank,
  euro: DollarSign,
  currency_exchange: DollarSign,
  calculate: DollarSign,
  diamond: Gem,
  all_inclusive: Star,

  // Personas
  person: User,
  group: Users,
  groups: Users,
  family_restroom: Baby,
  stroller: Baby,

  // Alojamiento
  hotel: Hotel,
  hotel_class: Hotel,
  bed: Bed,
  home: Home,
  location_city: Building,

  // Gastronomía
  restaurant: Utensils,
  fastfood: Utensils,
  local_drink: Coffee,
  delivery_dining: Utensils,
  menu_book: BookOpen,

  // Transporte
  train: Train,
  tram: TramFront,
  bus: Bus,
  flight: Plane,
  flight_land: Plane,
  local_taxi: Car,
  hiking: Backpack,
  backpack: Backpack,
  bike: Bike,

  // Fotografía / Cámara
  photo_camera: Camera,
  camera_alt: Camera,

  // Clima
  wb_sunny: Sun,
  wb_twilight: Sun,
  cloud: Cloud,

  // Contenido
  article: Newspaper,
  book: BookOpen,
  description: FileText,

  // Atracciones / Cultura
  tour: Compass,
  attractions: Landmark,
  museum: Landmark,
  castle: Castle,
  church: Church,
  theater_comedy: Theater,
  landscape: TreePine,
  sailing: Sailboat,
  sports_sailing: Sailboat,
  anchor: Anchor,
  fiber_new: Award,

  // Transporte adicional
  confirmation_number: Ticket,
  subway: Train,
  electrical_services: Zap,
  local_hospital: HelpCircle,
  translate: Languages,
  language: Globe,

  // Misc
  open_in_new: ExternalLink,
  visibility: Eye,
  settings: Settings,
  search: Compass,
  recommend: Star,
  volunteer_activism: Heart,
  progress_activity: Loader,
  account_balance: Landmark,
  foot_bones: Footprints,
  PersonStanding: PersonStanding,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className, size = 20 }: IconProps) {
  const LucideComponent = iconMap[name] ?? Circle;
  return <LucideComponent size={size} className={className} aria-hidden="true" />;
}
