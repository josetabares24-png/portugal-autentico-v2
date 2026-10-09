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
 * Secciones de `/comprar-entradas`, en orden de aparición. Cada producto del
 * catálogo vive en una sola: así no hay tarjetas repetidas ni anclas dobles.
 */
export type HubSection = 'imprescindibles' | 'belem' | 'sintra' | 'museos' | 'experiencias';

export interface HubSectionInfo {
  id: HubSection;
  /** Ancla de la sección: `/comprar-entradas#belem`. */
  anchor: string;
  /** Texto corto del índice de secciones. */
  navLabel: string;
  title: string;
  /** Una línea, en la voz de José. Sólo hechos comprobados. */
  intro: string;
}

export const HUB_SECTIONS: readonly HubSectionInfo[] = [
  {
    id: 'imprescindibles',
    anchor: 'imprescindibles',
    navLabel: 'Imprescindibles',
    title: 'Imprescindibles',
    intro: 'Las que van con hora de entrada o tienen más cola. Si solo compras algo antes de ir, empieza por aquí.',
  },
  {
    id: 'belem',
    anchor: 'belem',
    navLabel: 'Belém',
    title: 'Belém',
    intro: 'La Torre y los Jerónimos están a un paseo junto al río, y los dos cierran los lunes.',
  },
  {
    id: 'sintra',
    anchor: 'sintra',
    navLabel: 'Sintra',
    title: 'Sintra',
    intro: 'La Pena está arriba, en imprescindibles. Aquí va el resto de Sintra y la excursión para quien no quiere organizarse.',
  },
  {
    id: 'museos',
    anchor: 'museos',
    navLabel: 'Museos y palacios',
    title: 'Museos y palacios',
    intro: 'El Palacio da Ajuda y el Tesoro Real están en el mismo edificio: se ven en una mañana, también si llueve. Si vas a encadenar muchos museos, mira antes la Lisboa Card.',
  },
  {
    id: 'experiencias',
    anchor: 'experiencias',
    navLabel: 'Experiencias',
    title: 'Experiencias',
    intro: 'Planes con hora: el río, el fado, la comida y el tranvía por las colinas.',
  },
];

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
  /**
   * Imagen nuestra, de las que ya usan las fichas de actividades. Opcional a
   * propósito: si no hay una foto del sitio correcto, la tarjeta pinta un
   * bloque tipográfico. Mejor eso que la foto de otro lugar.
   */
  image?: string;
  imageAlt?: string;
  /**
   * Si es `true`, la foto de producto de Tiqets (cuando llega) pasa por
   * delante de `image`. Para los casos en que nuestra foto es un apaño, como
   * la estación de Sintra en la tarjeta de la Pena.
   */
  preferProviderImage?: boolean;
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
  /** Sección de `/comprar-entradas` en la que aparece. Obligatoria si hay `hub`. */
  hubSection?: HubSection;
  /**
   * Condiciones de cancelación tal y como las publica el proveedor, en una
   * línea corta. Sólo cuando se han comprobado en su ficha (todas las
   * actuales, en Tiqets el 9/10/2026).
   */
  terms?: string;
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
  /**
   * Precio de la taquilla oficial, comprobado en la web del monumento. Se
   * pinta sólo cuando no hay precio en directo del proveedor, y siempre
   * rotulado como «taquilla oficial»: el proveedor puede cobrar otra cosa,
   * y el importe definitivo se ve en su ficha antes de pagar.
   */
  officialPrice?: {
    /** Importe tal y como se pinta, p. ej. «17 €». */
    amount: string;
    /** Una línea con a quién se aplica o qué incluye. */
    note?: string;
    /** Web oficial donde se comprobó. */
    sourceUrl: string;
    /** Fecha de la comprobación, AAAA-MM-DD. */
    verified: string;
  };
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
    hubSection: 'imprescindibles',
    terms: 'No reembolsable ni se puede cambiar la fecha.',
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
    ctaLabel: 'Comprar entrada al Oceanário',
  },
  {
    id: 'castelo-sao-jorge',
    name: 'Castelo de São Jorge',
    provider: 'getyourguide',
    category: 'entradas',
    blurb:
      'La panorámica más completa del centro histórico, y la cola de la puerta se salta llevando la entrada comprada.',
    kind: 'Entrada',
    image: '/images/actividades/castelo-sao-jorge-lisboa.webp',
    imageAlt: 'Murallas y torres del Castelo de São Jorge sobre Lisboa',
    searchTerms: ['castelo', 'castillo', 'sao jorge', 'san jorge', 'alfama', 'muralla', 'mirador', 'historia', 'monumento'],
    hub: {
      render: 'native-card',
    },
    hubSection: 'imprescindibles',
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
    ctaLabel: 'Comprar entrada al Castelo',
    officialPrice: {
      amount: '17 €',
      note: 'Adultos. De 13 a 25 años, 8,50 €; mayores de 65, 14 €; gratis hasta 12.',
      sourceUrl: 'https://castelodesaojorge.pt/en/plan-your-visit/choose-your-ticket',
      verified: '2026-10-09',
    },
  },
  {
    id: 'sintra-palacio-pena',
    name: 'Palacio da Pena + Parque',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'La entrada al palacio y su parque, para quien sube a Sintra por su cuenta.',
    kind: 'Entrada',
    // Antes llevaba la foto de la Quinta da Regaleira, que no es la Pena. Hasta
    // tener una foto propia del palacio, la de la estación de Sintra: es
    // honesta y es por donde empieza quien sube por su cuenta.
    image: '/images/estacion-sintra.jpg',
    imageAlt: 'Estación de tren de Sintra, de donde sale el autobús 434 hacia la Pena',
    preferProviderImage: true,
    searchTerms: ['pena', 'palacio da pena', 'sintra', 'parque', 'entrada'],
    hub: {
      render: 'native-card',
    },
    hubSection: 'imprescindibles',
    terms: 'No reembolsable ni se puede cambiar la fecha.',
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
    ctaLabel: 'Comprar entrada a Pena',
  },
  {
    // Entrada de Tiqets a la Pena para el artículo `palacio-da-pena-entradas`.
    // Va aparte de `sintra-palacio-pena`, cuyo enlace de artículo es el de
    // GetYourGuide (acceso prioritario) que usa `sintra-desde-lisboa`. Sin
    // `hub`: existe para dar botón a ese artículo, no para el catálogo.
    // Condiciones comprobadas en la ficha p1120392 el 9/10/2026: no
    // reembolsable y sin cambio de fecha (la web oficial sí permite cambiar).
    id: 'pena-tiqets',
    name: 'Palacio da Pena + Parque',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'La entrada al palacio y su parque con hora fija, para quien sube a Sintra por su cuenta y ya tiene el día decidido.',
    kind: 'Entrada',
    image: '/images/estacion-sintra.jpg',
    imageAlt: 'Estación de tren de Sintra, de donde sale el autobús 434 hacia la Pena',
    searchTerms: ['pena', 'palacio da pena', 'sintra', 'parque', 'entrada'],
    links: {
      article: {
        url: 'https://www.tiqets.com/es/atracciones-sintra-c76496/entradas-para-palacio-nacional-da-pena-y-parque-entrada-p1120392/?partner=estaba_en_lisboa-189233&tq_campaign=web_blog_palacio-da-pena-entradas',
        provider: 'tiqets',
        campaign: 'web_blog_palacio-da-pena-entradas',
      },
    },
    ctaLabel: 'Comprar entrada a Pena',
  },
  {
    // Excursión de día para el artículo `obidos-vila-natal`. Sin `hub`: solo da
    // botón a ese artículo. Ficha t67767 (Lanetours): Óbidos es la última
    // parada de un día largo y no incluye la entrada a la Vila Natal.
    id: 'obidos-fatima-excursion',
    name: 'Fátima, Batalha, Nazaré y Óbidos desde Lisboa',
    provider: 'getyourguide',
    category: 'excursiones',
    blurb:
      'Excursión guiada de día completo desde Lisboa con cuatro paradas al norte de Lisboa. Óbidos es la última.',
    kind: 'Excursión',
    image: '/images/obidos-calle-casas-encaladas.webp',
    imageAlt: 'Calle empedrada de Óbidos con casas encaladas y zócalos azules',
    searchTerms: ['obidos', 'fatima', 'nazare', 'batalha', 'excursion', 'dia completo'],
    links: {
      article: {
        url: 'https://www.getyourguide.es/lisboa-l42/desde-lisboa-tour-guiado-a-fatima-nazare-batalha-y-obidos-t67767/?partner_id=J2Z24GU&utm_medium=online_publisher',
        provider: 'getyourguide',
        campaign: 'web_blog_obidos-vila-natal',
      },
    },
    ctaLabel: 'Ver la excursión',
  },
  {
    // Velero de Nochevieja para el artículo `nochevieja-lisboa`. Sin `hub`.
    // Ficha t438806 (Bloo Boat Charter). Precio, salida e inclusiones no se
    // repiten en la web: el lector los mira en la ficha, porque cambian.
    id: 'nochevieja-velero',
    name: 'Nochevieja en velero por el Tajo',
    provider: 'getyourguide',
    category: 'experiencias',
    blurb:
      'Ver los fuegos de fin de año desde un velero en el río, en lugar de entre la multitud de la plaza.',
    kind: 'Experiencia',
    image: '/images/actividades/passeio-barco-rio-tejo-lisboa.webp',
    imageAlt: 'Paseo en barco por el río Tajo a su paso por Lisboa',
    searchTerms: ['nochevieja', 'fin de año', 'fuegos artificiales', 'velero', 'barco', 'tajo'],
    links: {
      article: {
        url: 'https://www.getyourguide.es/lisboa-l42/nochevieja-y-fuegos-artificiales-t438806/?partner_id=J2Z24GU&utm_medium=online_publisher',
        provider: 'getyourguide',
        campaign: 'web_blog_nochevieja-lisboa',
      },
    },
    ctaLabel: 'Ver el velero',
  },
  {
    // Ficha p1012361 comprobada el 9/10/2026. Proveedor: Museus e Monumentos
    // de Portugal (el propio monumento), a través de Tiqets.
    id: 'torre-belem',
    name: 'Torre de Belém',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'Desde que reabrió en mayo de 2026 se entra por franjas horarias con aforo limitado. Cierra los lunes.',
    kind: 'Entrada',
    image: '/images/actividades/torre-de-belem-lisboa.webp',
    imageAlt: 'Torre de Belém junto al río Tajo',
    searchTerms: ['torre de belem', 'torre', 'belem', 'entrada', 'monumento'],
    hub: {
      render: 'native-card',
    },
    hubSection: 'belem',
    terms: 'No reembolsable ni se puede cambiar la fecha.',
    links: {
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-torre-de-belem-entrada-p1012361/?partner=estaba_en_lisboa-189233&tq_campaign=web_hub_torre-belem',
        provider: 'tiqets',
        campaign: 'web_hub_torre-belem',
      },
    },
    ctaLabel: 'Comprar entrada a la Torre',
    officialPrice: {
      amount: '15 €',
      note: 'Entrada general. Cierra los lunes.',
      sourceUrl: 'https://www.museusemonumentos.pt/pt/museus-e-monumentos/torre-de-belem',
      verified: '2026-10-09',
    },
  },
  {
    id: 'jeronimos',
    name: 'Monasterio de los Jerónimos: entrada al claustro',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'La entrada oficial al claustro con franja horaria, para quien ya tiene el día de Belém decidido.',
    kind: 'Entrada',
    image: '/images/actividades/mosteiro-dos-jeronimos-claustro.webp',
    imageAlt: 'Claustro del Monasterio de los Jerónimos en Belém',
    searchTerms: ['jeronimos', 'monasterio', 'mosteiro', 'claustro', 'belem', 'entrada'],
    // Proveedor real: Museus e Monumentos de Portugal; no reembolsable ni
    // cambia de fecha (ficha Tiqets, 9/10/2026). Desde el 9/10/2026 también
    // está en `/comprar-entradas`, con su propia campaña.
    hub: {
      render: 'native-card',
    },
    hubSection: 'belem',
    terms: 'No reembolsable ni se puede cambiar la fecha.',
    links: {
      article: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-monasterio-de-los-jeronimos-de-belem-entrada-p1012358/?partner=estaba_en_lisboa-189233&tq_campaign=web_blog_jeronimos',
        provider: 'tiqets',
        campaign: 'web_blog_jeronimos',
      },
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-monasterio-de-los-jeronimos-de-belem-entrada-p1012358/?partner=estaba_en_lisboa-189233&tq_campaign=web_hub_jeronimos',
        provider: 'tiqets',
        campaign: 'web_hub_jeronimos',
      },
    },
    ctaLabel: 'Comprar entrada a los Jerónimos',
    officialPrice: {
      amount: '18 €',
      note: 'Claustro. La iglesia es gratis. Cierra los lunes.',
      sourceUrl: 'https://www.museusemonumentos.pt/pt/museus-e-monumentos/mosteiro-dos-jeronimos-e-capela-de-sao-jeronimo',
      verified: '2026-10-09',
    },
  },
  {
    id: 'jeronimos-torre-belem',
    name: 'Jerónimos + Torre de Belém',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'Las dos entradas de Belém en una sola compra, para quien visita ambos el mismo día. La Torre entra por franjas horarias desde su reapertura en mayo de 2026.',
    kind: 'Entrada combinada',
    // Sin foto: la de la Torre ya la lleva su propia tarjeta, justo al lado.
    searchTerms: ['jeronimos', 'torre de belem', 'belem', 'combinada', 'entrada'],
    hub: {
      render: 'native-card',
    },
    hubSection: 'belem',
    links: {
      article: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-entrada-para-la-torre-de-belem-y-el-monasterio-de-los-jeronimos-p1013486/?partner=estaba_en_lisboa-189233&tq_campaign=web_blog_jeronimos_combo',
        provider: 'tiqets',
        campaign: 'web_blog_jeronimos_combo',
      },
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-entrada-para-la-torre-de-belem-y-el-monasterio-de-los-jeronimos-p1013486/?partner=estaba_en_lisboa-189233&tq_campaign=web_hub_jeronimos_combo',
        provider: 'tiqets',
        campaign: 'web_hub_jeronimos_combo',
      },
    },
    ctaLabel: 'Comprar Jerónimos + Torre',
    officialPrice: {
      amount: '33 €',
      note: 'Por separado: Jerónimos 18 € y Torre de Belém 15 €. Ambos cierran los lunes.',
      sourceUrl: 'https://www.museusemonumentos.pt/pt/museus-e-monumentos/torre-de-belem',
      verified: '2026-10-09',
    },
  },
  {
    // Ficha p1020546 comprobada el 9/10/2026. Proveedor: Museus e Monumentos
    // de Portugal. Sin foto propia del palacio: tarjeta tipográfica.
    id: 'palacio-ajuda',
    name: 'Palacio Nacional da Ajuda',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'El mayor palacio de Lisboa, y recibe muchas menos visitas que los Jerónimos o el castillo. Cierra los miércoles.',
    kind: 'Entrada',
    searchTerms: ['ajuda', 'palacio', 'palacio da ajuda', 'museo', 'lluvia', 'belem'],
    hub: {
      render: 'native-card',
    },
    hubSection: 'museos',
    terms: 'No reembolsable ni se puede cambiar la fecha.',
    links: {
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-palacio-nacional-de-ajuda-entrada-p1020546/?partner=estaba_en_lisboa-189233&tq_campaign=web_hub_palacio-ajuda',
        provider: 'tiqets',
        campaign: 'web_hub_palacio-ajuda',
      },
    },
    ctaLabel: 'Comprar entrada al Palacio da Ajuda',
    officialPrice: {
      amount: '15 €',
      note: 'Entrada general. Cierra los miércoles.',
      sourceUrl: 'https://www.museusemonumentos.pt/pt/museus-e-monumentos/palacio-nacional-da-ajuda',
      verified: '2026-10-09',
    },
  },
  {
    // Ficha p1026160 comprobada el 9/10/2026. Proveedor: Tiqets International.
    id: 'tesouro-real',
    name: 'Museo del Tesoro Real',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'Las joyas de la Corona portuguesa, en el ala nueva del Palacio da Ajuda.',
    kind: 'Entrada',
    searchTerms: ['tesoro real', 'tesouro real', 'joyas', 'corona', 'ajuda', 'museo', 'lluvia'],
    hub: {
      render: 'native-card',
    },
    hubSection: 'museos',
    terms: 'Cancelación y cambio de fecha gratis hasta las 23:59 del día anterior.',
    links: {
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-royal-treasure-museum-p1026160/?partner=estaba_en_lisboa-189233&tq_campaign=web_hub_tesouro-real',
        provider: 'tiqets',
        campaign: 'web_hub_tesouro-real',
      },
    },
    ctaLabel: 'Comprar entrada al Tesoro Real',
    officialPrice: {
      amount: '11 €',
      note: 'Adultos de 25 a 64 años. De 7 a 24 y mayores de 65, 7,50 €.',
      sourceUrl: 'https://www.tesouroreal.pt/paginas/acf04850',
      verified: '2026-10-09',
    },
  },

  {
    id: 'lisboa-card',
    name: 'Lisboa Card',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'Puede compensar si concentras transporte y monumentos en pocos días; conviene revisar condiciones antes de comprar.',
    kind: 'Pase',
    image: '/images/funicular-bica-turistas.jpg',
    imageAlt: 'Funicular de Bica subiendo una calle empinada de Lisboa',
    searchTerms: ['lisboa card', 'tarjeta lisboa', 'transporte', 'museos', 'monumentos', 'pase', 'descuentos', 'belem'],
    hub: {
      render: 'native-card',
    },
    hubSection: 'museos',
    terms: 'Cancelación y cambio de fecha gratis hasta las 23:59 del día anterior.',
    links: {
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-lisboa-card-51-atracciones-y-transporte-publico-p974847/?partner=estaba_en_lisboa-189233&tq_campaign=web_activ_lisboa-card',
        provider: 'tiqets',
        campaign: 'web_activ_lisboa-card',
      },
    },
    ctaLabel: 'Comprar Lisboa Card',
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
    hubSection: 'experiencias',
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
    ctaLabel: 'Reservar paseo por el Tajo',
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
    hubSection: 'experiencias',
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
    ctaLabel: 'Reservar espectáculo de fado',
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
    hubSection: 'experiencias',
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
    ctaLabel: 'Reservar tour gastronómico',
  },

  {
    // Ficha p974765 (Carristur) comprobada el 9/10/2026. Incluye el Museu da
    // Carris; no incluye el Elevador de Santa Justa, que además sigue cerrado.
    id: 'tranvia-colinas',
    name: 'Tranvía turístico por las colinas',
    provider: 'tiqets',
    category: 'experiencias',
    blurb:
      '24 horas de tranvía turístico con paradas libres por las colinas. Incluye también los tranvías públicos de Carris.',
    kind: 'Experiencia',
    image: '/images/lisboa-originales/tranvia-turistico-baixa-lisboa-01.webp',
    imageAlt: 'Tranvía turístico rojo por una calle de la Baixa de Lisboa',
    searchTerms: ['tranvia', 'tranvía', 'electrico', 'carris', 'colinas', 'hop on hop off', 'alfama', 'tour'],
    hub: {
      render: 'native-card',
    },
    hubSection: 'experiencias',
    terms: 'Cancelación y cambio de fecha gratis hasta las 23:59 del día anterior.',
    links: {
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-lisboa-recorrido-en-tranvia-por-las-colinas-historicas-con-paradas-libres-p974765/?partner=estaba_en_lisboa-189233&tq_campaign=web_hub_tranvia-colinas',
        provider: 'tiqets',
        campaign: 'web_hub_tranvia-colinas',
      },
    },
    ctaLabel: 'Reservar el tranvía turístico',
  },

  // ------------------------------------------------------------ excursiones
  {
    // Ficha p975020 comprobada el 9/10/2026. Audioguía opcional. Sin foto propia.
    id: 'castelo-mouros',
    name: 'Castelo dos Mouros',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'Muralla del siglo X en lo alto de la sierra, con vistas a la Pena y, en días claros, al Atlántico.',
    kind: 'Entrada',
    searchTerms: ['castelo dos mouros', 'castillo de los moros', 'sintra', 'muralla', 'vistas', 'entrada'],
    hub: {
      render: 'native-card',
    },
    hubSection: 'sintra',
    terms: 'No reembolsable ni se puede cambiar la fecha.',
    links: {
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-sintra-c76496/entradas-para-castelo-dos-mouros-en-sintra-entrada-audioguia-opcional-p975020/?partner=estaba_en_lisboa-189233&tq_campaign=web_hub_castelo-mouros',
        provider: 'tiqets',
        campaign: 'web_hub_castelo-mouros',
      },
    },
    ctaLabel: 'Comprar entrada al Castelo dos Mouros',
    officialPrice: {
      amount: '12 €',
      note: 'Adultos de 18 a 64 años. De 6 a 17 y mayores de 65, 10 €.',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/parques-monumentos/castelo-dos-mouros/',
      verified: '2026-10-09',
    },
  },
  {
    // Ficha p975024 comprobada el 9/10/2026. Sin foto propia.
    id: 'palacio-nacional-sintra',
    name: 'Palacio Nacional de Sintra',
    provider: 'tiqets',
    category: 'entradas',
    blurb:
      'El de las dos chimeneas blancas, en el centro histórico y a 10-15 minutos a pie de la estación de tren.',
    kind: 'Entrada',
    searchTerms: ['palacio nacional de sintra', 'palacio da vila', 'sintra', 'centro', 'entrada'],
    hub: {
      render: 'native-card',
    },
    hubSection: 'sintra',
    terms: 'No reembolsable ni se puede cambiar la fecha.',
    links: {
      activities: {
        url: 'https://www.tiqets.com/es/atracciones-sintra-c76496/entradas-para-palacio-nacional-de-sintra-entrada-p975024/?partner=estaba_en_lisboa-189233&tq_campaign=web_hub_palacio-sintra',
        provider: 'tiqets',
        campaign: 'web_hub_palacio-sintra',
      },
    },
    ctaLabel: 'Comprar entrada al Palacio de Sintra',
    officialPrice: {
      amount: '13 €',
      note: 'Visita esencial, adultos de 18 a 64 años. De 6 a 17 y mayores de 65, 10 €.',
      sourceUrl: 'https://www.parquesdesintra.pt/pt/parques-monumentos/palacio-nacional-sintra/',
      verified: '2026-10-09',
    },
  },
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
    hubSection: 'sintra',
    links: {
      activities: {
        // Excursión de día completo Sintra + Pena + Regaleira + Cabo da Roca +
        // Cascais (ficha t440176). Enlace propio de José, tal cual (2026-10-08);
        // sustituye al corto gyg.me/zgpDrBr1. No añadir parámetros. El enlace
        // de la entrada a Pena (sintra-palacio-pena) no cambia.
        url: 'https://www.getyourguide.es/lisboa-l42/lisboa-sintra-pena-regaleira-cabo-da-roca-y-cascaes-t440176/?partner_id=J2Z24GU&utm_medium=online_publisher',
        provider: 'getyourguide',
        campaign: 'web_actividades_sintra-completa',
      },
    },
    activitySlug: 'sintra-dia-completo',
    ctaLabel: 'Reservar excursión a Sintra',
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
