/**
 * Productos reservables de Estaba en Lisboa.
 *
 * Esta lista no pertenece a ningún proveedor: es nuestra selección, y cada
 * entrada declara con quién se reserva. Hoy todos son de GetYourGuide;
 * Tiqets entra añadiendo `provider: 'tiqets'` y su forma de reservar, sin
 * tocar la página ni el resto de los productos.
 *
 * Dos reglas de diseño que conviene entender antes de editar esto:
 *
 * 1. Un producto es un producto. La excursión completa de Sintra y la
 *    entrada al Palacio da Pena son dos entradas distintas de esta lista,
 *    aunque hablen del mismo sitio, porque son dos cosas distintas que se
 *    compran por separado. Así no hay forma de que el enlace de una acabe
 *    vendiendo la otra.
 *
 * 2. Cada ubicación puede tener su propio enlace. El mismo producto medido
 *    desde una ficha de actividad y desde un artículo son dos campañas
 *    distintas, y por eso `links` es un objeto por ubicación y no una URL
 *    global.
 */

export type BookingProvider = 'getyourguide' | 'tiqets';

/** Las tres secciones de `/comprar-entradas`, en orden de aparición. */
export type BookingCategory = 'entradas' | 'experiencias' | 'excursiones';

/**
 * Ubicación desde la que se pulsa. Cada una puede tener su propio enlace
 * para poder medirlas por separado en el panel del partner.
 */
export type BookingPlacement = 'activities' | 'article';

interface BookingLink {
  /**
   * URL corta tal y como la entrega el proveedor. No se le añade ni un
   * parámetro: la atribución y la campaña ya van dentro, y cualquier
   * añadido nuestro es riesgo de romperla a cambio de nada.
   */
  url: string;
  /** Campaña con la que el proveedor generó esa URL. Informativa: no se envía. */
  campaign: string;
}

/** Widget incrustable. Sólo lo tienen los productos que van al hub. */
interface BookingWidget {
  tourId: string;
  campaign: string;
  /**
   * Destino del enlace de repliegue, lo único visible si el script no llega
   * a cargar. GetYourGuide entregó unas fichas con `lisbon-l42` y otras con
   * `lisboa-l42`; se conserva el de cada una en vez de unificarlas.
   */
  fallbackHref: string;
}

export interface BookableProduct {
  /** Identificador interno. No se pinta en ninguna parte. */
  id: string;
  /** Nombre del producto, tal y como lo vendemos nosotros. */
  name: string;
  provider: BookingProvider;
  category: BookingCategory;
  /**
   * Una frase. Para quién es o cuándo tiene sentido reservarlo. Nada de
   * precios, valoraciones ni duraciones: eso cambia, y quien lo dice es el
   * proveedor en su propia página.
   */
  blurb: string;
  /** Etiqueta del tipo, para que la tarjeta se lea de un vistazo. */
  kind: string;
  /** Imagen nuestra, de las que ya usan las fichas de actividades. */
  image: string;
  imageAlt: string;
  /**
   * Distintivo editorial opcional. Sólo cosas que sostenemos nosotros: nunca
   * «más vendido», «últimas plazas» ni descuentos, que no tenemos datos para
   * afirmarlos.
   */
  badge?: string;
  /**
   * Palabras con las que un visitante buscaría esto, incluidas las que no
   * aparecen en el nombre. Es lo que hace que «barco» encuentre el crucero y
   * «comida» el tour gastronómico.
   */
  searchTerms: string[];
  /** Widget del hub. Sin él, el producto no aparece en `/comprar-entradas`. */
  widget?: BookingWidget;
  /**
   * Enlaces directos por ubicación. Sólo se usa el de la ubicación desde la
   * que se pulsa; si esa no tiene el suyo todavía, se recurre al que haya.
   */
  links: Partial<Record<BookingPlacement, BookingLink>>;
  /**
   * Ficha de `/actividades` que recomienda EXACTAMENTE este producto, si
   * existe. Es lo que decide dónde sale el botón de conversión directa, así
   * que sólo se rellena cuando la correspondencia es exacta.
   */
  activitySlug?: string;
  /** Texto del botón. Se elige según la naturaleza del producto. */
  ctaLabel: string;
}

/** Cuenta de partner de GetYourGuide. De ella depende la atribución. */
export const GYG_PARTNER_ID = 'J2Z24GU';

/** Idioma en el que GetYourGuide pinta sus tarjetas. */
export const GYG_LOCALE_CODE = 'es-ES';

const LISBON_EN = 'https://www.getyourguide.com/lisbon-l42/';
const LISBON_ES = 'https://www.getyourguide.com/lisboa-l42/';

export const BOOKABLE_PRODUCTS: BookableProduct[] = [
  // ---------------------------------------------------------------- entradas
  {
    id: 'oceanario',
    name: 'Oceanário de Lisboa',
    provider: 'getyourguide',
    category: 'entradas',
    blurb:
      'Una de las visitas más fáciles de recomendar en Parque das Nações, y el mejor refugio si el día se pone gris.',
    kind: 'Entrada',
    badge: 'Ideal con niños',
    image: '/images/actividades/oceanario-de-lisboa.webp',
    imageAlt: 'Exterior del Oceanário de Lisboa visto desde el paseo del Parque das Nações',
    searchTerms: ['oceanario', 'acuario', 'peces', 'tiburones', 'familia', 'ninos', 'lluvia', 'parque das nacoes', 'museo'],
    widget: { tourId: '38079', campaign: 'web_actividad_oceanario', fallbackHref: LISBON_EN },
    links: { article: { url: 'https://gyg.me/OIHaINA6', campaign: 'web_articulo_oceanario' } },
    activitySlug: 'oceanario-lisboa',
    ctaLabel: 'Ver entradas',
  },
  {
    id: 'castelo-sao-jorge',
    name: 'Castelo de São Jorge',
    provider: 'getyourguide',
    category: 'entradas',
    blurb:
      'La panorámica más completa del centro histórico, y la cola de la puerta se salta llevando la entrada comprada.',
    kind: 'Entrada',
    badge: 'Nuestra selección',
    image: '/images/actividades/castelo-sao-jorge-lisboa.webp',
    imageAlt: 'Murallas y torres del Castelo de São Jorge sobre Lisboa',
    searchTerms: ['castelo', 'castillo', 'sao jorge', 'san jorge', 'alfama', 'muralla', 'mirador', 'historia', 'monumento'],
    widget: { tourId: '424720', campaign: 'web_actividad_castelo-sao-jorge', fallbackHref: LISBON_ES },
    links: { article: { url: 'https://gyg.me/xsuIYU11', campaign: 'web_articulo_castelo-sao-jorge' } },
    activitySlug: 'castelo-sao-jorge',
    ctaLabel: 'Ver entradas',
  },

  // ------------------------------------------------------------ experiencias
  {
    id: 'crucero-tajo',
    name: 'Crucero por el río Tajo',
    provider: 'getyourguide',
    category: 'experiencias',
    blurb:
      'Ver Lisboa desde el agua le cambia la escala a la ciudad. Si puedes elegir hora, la del atardecer.',
    kind: 'Experiencia',
    badge: 'Plan de tarde',
    image: '/images/actividades/passeio-barco-rio-tejo-lisboa.webp',
    imageAlt: 'Paseo en barco por el río Tajo a su paso por Lisboa',
    searchTerms: ['crucero', 'barco', 'velero', 'tajo', 'tejo', 'rio', 'navegar', 'atardecer', 'puesta de sol', 'paseo en barco'],
    widget: { tourId: '410732', campaign: 'web_actividad_crucero-tajo', fallbackHref: LISBON_ES },
    links: { article: { url: 'https://gyg.me/IL8SaMuw', campaign: 'web_articulo_crucero-tajo' } },
    activitySlug: 'crucero-atardecer-tajo',
    ctaLabel: 'Consultar disponibilidad',
  },
  {
    id: 'fado',
    name: 'Espectáculo de fado',
    provider: 'getyourguide',
    category: 'experiencias',
    blurb:
      'Para escuchar fado sin acabar en un local de paso: las casas buenas son pequeñas y se llenan.',
    kind: 'Experiencia',
    badge: 'Plan de noche',
    image: '/images/fado-tasca-noche.jpg',
    imageAlt: 'Mesa con dos personas cenando en una tasca de Lisboa por la noche',
    searchTerms: ['fado', 'musica', 'espectaculo', 'concierto', 'noche', 'cena', 'alfama', 'guitarra', 'cante'],
    widget: { tourId: '887435', campaign: 'web_actividad_fado', fallbackHref: LISBON_ES },
    links: { article: { url: 'https://gyg.me/8aL5dndR', campaign: 'web_articulo_fado' } },
    activitySlug: 'fado-en-alfama',
    ctaLabel: 'Ver opciones',
  },
  {
    id: 'tour-gastronomico',
    name: 'Tour gastronómico por Lisboa',
    provider: 'getyourguide',
    category: 'experiencias',
    blurb:
      'Tiene sentido el primer día, cuando todavía no sabes qué pedir ni dónde.',
    kind: 'Experiencia',
    image: '/images/tasca-da-graca.jpg',
    imageAlt: 'Interior de una tasca tradicional de Lisboa con mesas puestas',
    searchTerms: ['comida', 'comer', 'gastronomia', 'gastronomico', 'tapas', 'probar', 'bacalao', 'pasteis', 'food', 'tour', 'restaurante'],
    widget: { tourId: '603', campaign: 'web_actividad_tour-gastronomico', fallbackHref: LISBON_ES },
    links: { article: { url: 'https://gyg.me/9USjIETP', campaign: 'web_articulo_tour-gastronomico' } },
    // A propósito sin `activitySlug`. La ficha más parecida es «Comer en una
    // tasca tradicional», que va justo de lo contrario: comer barato y por tu
    // cuenta. Un tour guiado ahí contradiría su tip de ahorro, así que este
    // producto vive sólo en el hub.
    ctaLabel: 'Ver opciones',
  },

  // ------------------------------------------------------------ excursiones
  {
    id: 'sintra-completa',
    name: 'Sintra, Pena, Regaleira, Cabo da Roca y Cascais',
    provider: 'getyourguide',
    category: 'excursiones',
    blurb:
      'Para quien tiene un solo día y no quiere pelearse con trenes y autobuses.',
    kind: 'Excursión',
    badge: 'Desde Lisboa',
    image: '/images/sintra-palacio-turistas.jpg',
    imageAlt: 'Fachada del palacio de la Quinta da Regaleira en Sintra con visitantes',
    searchTerms: ['sintra', 'pena', 'regaleira', 'cabo da roca', 'cascais', 'excursion', 'dia completo', 'palacio', 'fuera de lisboa'],
    widget: { tourId: '387617', campaign: 'web_actividad_sintra-completa', fallbackHref: LISBON_EN },
    // SIN enlace directo, y es deliberado. No existe todavía una URL corta
    // para esta excursión concreta. El enlace del Palacio da Pena NO sirve:
    // es otro producto, y usarlo aquí sería vender una cosa por otra.
    links: {},
    ctaLabel: 'Consultar disponibilidad',
  },

  // -------------------------------------------------- sólo enlace, sin widget
  {
    id: 'sintra-palacio-pena',
    name: 'Palacio da Pena + Parque',
    provider: 'getyourguide',
    category: 'excursiones',
    blurb:
      'La entrada al palacio y su parque, para quien sube a Sintra por su cuenta.',
    kind: 'Entrada',
    image: '/images/sintra-palacio-turistas.jpg',
    imageAlt: 'Palacio de Sintra con visitantes en la entrada',
    searchTerms: ['pena', 'palacio da pena', 'sintra', 'parque', 'entrada'],
    // Sin widget: no aparece en el hub. Existe para dar botón a la ficha que
    // recomienda exactamente esto, que es visitar Pena por tu cuenta.
    links: {
      article: { url: 'https://gyg.me/9i00hN0O', campaign: 'web_sintra_palacio-pena' },
    },
    // Sin `activitySlug` a propósito. La ficha `sintra-dia-completo` cubre
    // Pena Y Regaleira, que son dos entradas distintas; este enlace sólo
    // vende la de Pena, así que como CTA de esa ficha sería una
    // correspondencia parcial. Queda disponible para artículos que
    // recomienden exactamente la entrada al Palacio da Pena y su parque.
    ctaLabel: 'Ver entradas al Palacio da Pena',
  },
];

/**
 * Fichas sin producto exacto que, aun así, tienen una sección del hub a la
 * que merece la pena mandarlas.
 *
 * Es un CTA interno, no comercial: no vende ningún producto, sólo lleva a la
 * sección donde están las opciones. Existe para no dejar sin salida a una
 * ficha cuyo producto equivalente todavía no tiene enlace directo, sin
 * recurrir al enlace de otro producto parecido.
 */
export const ACTIVITY_HUB_ANCHOR: Record<string, { anchor: string; label: string }> = {
  // La excursión completa de Sintra existe como widget en el hub, pero
  // todavía no tiene URL corta propia. Hasta que la haya, la ficha manda a
  // la sección de excursiones en lugar de a un producto que no es el suyo.
  'sintra-dia-completo': {
    anchor: 'excursiones-desde-lisboa',
    label: 'Ver excursiones a Sintra',
  },
};

/** Los productos del hub: los que tienen widget, en el orden declarado. */
export const HUB_PRODUCTS = BOOKABLE_PRODUCTS.filter((p) => p.widget);

/**
 * Resuelve el enlace y la campaña para una ubicación concreta.
 *
 * Hoy sólo existen los enlaces `web_articulo_*`, así que una ficha de
 * actividad cae en ellos. Cuando se generen los `web_actividades_*`, basta
 * con añadir `links.activities` al producto: esta función los prefiere sola
 * y la medición se separa sin tocar ni un componente.
 *
 * Devuelve `null` cuando no hay ningún enlace, que es el caso de la excursión
 * completa de Sintra. Preferimos no ofrecer botón antes que ofrecer uno que
 * lleve a otro producto.
 */
export function resolveBookingLink(
  product: BookableProduct,
  placement: BookingPlacement
): (BookingLink & { usedPlacement: BookingPlacement }) | null {
  const exact = product.links[placement];
  if (exact) return { ...exact, usedPlacement: placement };

  const fallbackPlacement: BookingPlacement = placement === 'activities' ? 'article' : 'activities';
  const fallback = product.links[fallbackPlacement];
  if (fallback) return { ...fallback, usedPlacement: fallbackPlacement };

  return null;
}

/** El producto que recomienda una ficha de actividad, si lo hay. */
export function findProductByActivitySlug(slug: string): BookableProduct | undefined {
  return BOOKABLE_PRODUCTS.find((p) => p.activitySlug === slug);
}
