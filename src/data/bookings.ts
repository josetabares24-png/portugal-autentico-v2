/**
 * Productos reservables de Estaba en Lisboa.
 *
 * Esta lista no pertenece a ningún proveedor: es nuestra selección, y cada
 * entrada declara con quién se reserva. GetYourGuide y Tiqets conviven sin
 * que la página tenga lógica propia de un partner concreto.
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

export interface BookingLink {
  /**
   * URL corta tal y como la entrega el proveedor. No se le añade ni un
   * parámetro: la atribución y la campaña ya van dentro, y cualquier
   * añadido nuestro es riesgo de romperla a cambio de nada.
   */
  url: string;
  /** Proveedor real de este enlace concreto. Puede cambiar por ubicación. */
  provider: BookingProvider;
  /** Campaña con la que el proveedor generó esa URL. Informativa: no se envía. */
  campaign: string;
}

/** Lo que hace falta para pintar el widget oficial de GetYourGuide. */
export interface GetYourGuideWidgetConfig {
  tourId: string;
  campaign: string;
  /**
   * Destino del enlace de repliegue, lo único visible si el script no llega
   * a cargar. GetYourGuide entregó unas fichas con `lisbon-l42` y otras con
   * `lisboa-l42`; se conserva el de cada una en vez de unificarlas.
   */
  fallbackHref: string;
}

/** Lo que hace falta para pintar el widget oficial de Tiqets. */
export interface TiqetsWidgetConfig {
  productId: string;
  partner: string;
  campaign: string;
  layout: 'compact';
  orientation: 'vertical';
}

/**
 * Cómo se ofrece un producto en `/comprar-entradas`. Sin esto, el producto no
 * aparece allí.
 *
 * Es una unión discriminada a propósito, y es la pieza que hace que la página
 * no pertenezca a ningún proveedor. `render` dice con qué mecanismo se
 * reserva; cuando ese mecanismo es un widget, `provider` dice de quién es, y
 * cada proveedor trae su propia configuración porque no tienen por qué
 * parecerse: los `data-*` de GetYourGuide no valen para Tiqets.
 *
 * Cada proveedor tiene su propia rama y su propio componente en
 * `BookingProductRenderer`. No hace falta tocar la página,
 * ni el buscador, ni los filtros, ni el resto de los productos. Y no se puede
 * olvidar el componente: el `switch` del renderer es exhaustivo, así que una
 * rama nueva sin renderer deja de compilar.
 */
export type BookingMechanism =
  | { render: 'widget'; provider: 'getyourguide'; widget: GetYourGuideWidgetConfig }
  | { render: 'widget'; provider: 'tiqets'; widget: TiqetsWidgetConfig }
  /**
   * Tarjeta nuestra: foto, nombre, una frase y un botón al enlace directo.
   * No necesita saber de qué proveedor es, porque lo único que usa es el
   * enlace de `links`, y ese ya lleva dentro la cuenta y la campaña. Sirve
   * para cualquier partner que dé enlace pero no widget.
   */
  | { render: 'native-card' };

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
  /**
   * Mecanismo con el que se reserva en el hub. Sin él, el producto no aparece
   * en `/comprar-entradas`, que es el caso del Palacio da Pena: existe para
   * dar botón a un artículo, no para venderse en el catálogo.
   */
  hub?: BookingMechanism;
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

/** Cuenta de partner de Tiqets. De ella depende la atribución. */
export const TIQETS_PARTNER_ID = 'estaba_en_lisboa-189233';

export const BOOKABLE_PRODUCTS: BookableProduct[] = [
  // ---------------------------------------------------------------- entradas
  {
    id: 'oceanario',
    name: 'Oceanário de Lisboa',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'Una de las visitas más fáciles de recomendar en Parque das Nações, y el mejor refugio si el día se pone gris.',
    kind: 'Entrada',
    badge: 'Ideal con niños',
    image: '/images/actividades/oceanario-de-lisboa.webp',
    imageAlt: 'Exterior del Oceanário de Lisboa visto desde el paseo del Parque das Nações',
    searchTerms: ['oceanario', 'acuario', 'peces', 'tiburones', 'familia', 'ninos', 'lluvia', 'parque das nacoes', 'museo'],
    hub: {
      render: 'native-card',
    },
    links: {
      article: {
        url: 'https://gyg.me/OIHaINA6',
        provider: 'getyourguide',
        campaign: 'web_articulo_oceanario',
      },
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-oceanario-de-lisboa-entrada-p975260/?partner=estaba_en_lisboa-189233&tq_campaign=web_actividades_oceanario',
        provider: 'tiqets',
        campaign: 'web_actividades_oceanario',
      },
    },
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
    hub: {
      render: 'native-card',
    },
    links: {
      article: {
        url: 'https://gyg.me/xsuIYU11',
        provider: 'getyourguide',
        campaign: 'web_articulo_castelo-sao-jorge',
      },
      activities: {
        url: 'https://gyg.me/C9HzQNsh',
        provider: 'getyourguide',
        campaign: 'web_actividades_castelo-sao-jorge',
      },
    },
    activitySlug: 'castelo-sao-jorge',
    ctaLabel: 'Ver entradas',
  },
  {
    id: 'sintra-palacio-pena',
    name: 'Palacio da Pena + Parque',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'La entrada al palacio y su parque, para quien sube a Sintra por su cuenta.',
    kind: 'Entrada',
    image: '/images/sintra-palacio-turistas.jpg',
    imageAlt: 'Palacio de Sintra con visitantes en la entrada',
    searchTerms: ['pena', 'palacio da pena', 'sintra', 'parque', 'entrada'],
    hub: {
      render: 'native-card',
    },
    links: {
      article: {
        url: 'https://gyg.me/9i00hN0O',
        provider: 'getyourguide',
        campaign: 'web_sintra_palacio-pena',
      },
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-sintra-c76496/entradas-para-palacio-nacional-da-pena-y-parque-entrada-p1120392/?partner=estaba_en_lisboa-189233&tq_campaign=web_actividades_pena',
        provider: 'tiqets',
        campaign: 'web_actividades_pena',
      },
    },
    // Sin `activitySlug` a propósito. La ficha `sintra-dia-completo` cubre
    // Pena Y Regaleira, que son dos entradas distintas; este enlace sólo
    // vende la de Pena, así que como CTA de esa ficha sería una
    // correspondencia parcial. Queda disponible para artículos que
    // recomienden exactamente la entrada al Palacio da Pena y su parque.
    ctaLabel: 'Ver entradas al Palacio da Pena',
  },
  {
    id: 'lisboa-card',
    name: 'Lisboa Card',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'Puede compensar si concentras transporte y monumentos en pocos días; conviene revisar condiciones antes de comprar.',
    kind: 'Pase',
    badge: 'Para planificar',
    image: '/images/funicular-bica-turistas.jpg',
    imageAlt: 'Funicular de Bica subiendo una calle empinada de Lisboa',
    searchTerms: ['lisboa card', 'tarjeta lisboa', 'transporte', 'museos', 'monumentos', 'pase', 'descuentos', 'belem'],
    hub: {
      render: 'native-card',
    },
    links: {
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-lisboa-card-51-atracciones-y-transporte-publico-p974847/?partner=estaba_en_lisboa-189233&tq_campaign=web_activ_lisboa-card',
        provider: 'tiqets',
        campaign: 'web_activ_lisboa-card',
      },
    },
    ctaLabel: 'Ver Lisboa Card',
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
    hub: {
      render: 'native-card',
    },
    links: {
      article: {
        url: 'https://gyg.me/IL8SaMuw',
        provider: 'getyourguide',
        campaign: 'web_articulo_crucero-tajo',
      },
      activities: {
        url: 'https://gyg.me/TJA6VUJa',
        provider: 'getyourguide',
        campaign: 'web_actividades_crucero-tajo',
      },
    },
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
    hub: {
      render: 'native-card',
    },
    links: {
      article: {
        url: 'https://gyg.me/8aL5dndR',
        provider: 'getyourguide',
        campaign: 'web_articulo_fado',
      },
      activities: {
        url: 'https://gyg.me/jH9FtGc7',
        provider: 'getyourguide',
        campaign: 'web_actividades_fado',
      },
    },
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
    hub: {
      render: 'native-card',
    },
    links: {
      article: {
        url: 'https://gyg.me/9USjIETP',
        provider: 'getyourguide',
        campaign: 'web_articulo_tour-gastronomico',
      },
      activities: {
        url: 'https://gyg.me/jO1KCAoG',
        provider: 'getyourguide',
        campaign: 'web_actividades_tour-gastronomico',
      },
    },
    // A propósito sin `activitySlug`. La ficha más parecida es «Comer en una
    // tasca tradicional», que va justo de lo contrario: comer barato y por tu
    // cuenta. Un tour guiado ahí contradiría su tip de ahorro, así que este
    // producto vive sólo en el hub.
    ctaLabel: 'Ver opciones',
  },

  // ------------------------------------------------------------ excursiones
  {
    id: 'sintra-completa',
    name: 'Sintra completa desde Lisboa',
    provider: 'getyourguide',
    category: 'excursiones',
    blurb:
      'Para quien tiene un solo día y no quiere pelearse con trenes y autobuses.',
    kind: 'Excursión',
    badge: 'Desde Lisboa',
    image: '/images/sintra-palacio-turistas.jpg',
    imageAlt: 'Fachada del palacio de la Quinta da Regaleira en Sintra con visitantes',
    searchTerms: ['sintra', 'regaleira', 'cabo da roca', 'cascais', 'excursion', 'dia completo', 'fuera de lisboa'],
    hub: {
      render: 'native-card',
    },
    links: {
      activities: {
        url: 'https://gyg.me/zgpDrBr1',
        provider: 'getyourguide',
        campaign: 'web_actividades_sintra-completa',
      },
    },
    activitySlug: 'sintra-dia-completo',
    ctaLabel: 'Consultar disponibilidad',
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
};

/** Los productos del catálogo: los que declaran mecanismo de reserva. */
export const HUB_PRODUCTS = BOOKABLE_PRODUCTS.filter((p) => p.hub);

/**
 * Resuelve el enlace y la campaña para una ubicación concreta.
 *
 * La función prefiere siempre el enlace exacto de la ubicación. Sólo recurre
 * al otro cuando un producto sigue teniendo una campaña pendiente para esa
 * página concreta, y deja visible de dónde salió mediante `usedPlacement`.
 *
 * Devuelve `null` cuando no hay ningún enlace. Preferimos no ofrecer botón
 * antes que ofrecer uno que lleve a otro producto.
 */
/** Enlace ya resuelto, con la ubicación de la que salió realmente. */
export type BookingLinkResolved = BookingLink & { usedPlacement: BookingPlacement };

export function resolveBookingLink(
  product: BookableProduct,
  placement: BookingPlacement
): BookingLinkResolved | null {
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

/**
 * Producto por su `id`. Lo usan las paradas de itinerario, que declaran
 * `productId` de forma explícita en lugar de adivinar por el nombre.
 */
export function findProductById(id: string): BookableProduct | undefined {
  return BOOKABLE_PRODUCTS.find((p) => p.id === id);
}
