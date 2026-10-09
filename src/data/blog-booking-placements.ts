import type { FreeTourCategoryId } from '@/data/affiliate-links';

/**
 * Bloques de reserva dentro de los artículos del blog.
 *
 * El blog trae ~85 % de las impresiones orgánicas (GSC hasta 2026-09-22) y,
 * hasta este cambio, no tenía ni un enlace de reserva: todos los clics de
 * afiliado medidos salían de /free-tours-lisboa, /comprar-entradas y fichas
 * de actividad. Este registro conecta los artículos con lo que ya existe en
 * `bookings.ts` y `affiliate-links.ts`, sin crear productos nuevos.
 *
 * Reglas (las mismas de AFFILIATE-MONETIZATION-ARCHITECTURE):
 *
 *   - El bloque vende EXACTAMENTE lo que trata la sección en la que aparece.
 *     Si no hay producto exacto, el artículo se queda sin bloque.
 *   - Lista explícita por artículo, nunca detección por palabras.
 *   - Como mucho dos bloques por artículo, colocados al final de la sección
 *     que los justifica, no en la cabecera ni repartidos «por si acaso».
 *   - Excepción `position: 'after-summary'` (aprobada por José el 9/10/2026,
 *     auditoría máxima, acción 1): en las páginas donde la siguiente decisión
 *     del lector ES comprar, un bloque va arriba. Antes el primer botón
 *     quedaba a 8-11 pantallas de móvil.
 *   - Revisión «lado humano» (9/10/2026): como mucho UN bloque arriba por
 *     artículo, y nunca antes del contenido. ArticleBody lo pinta al cerrar
 *     la primera sección con texto propio (no debajo de «Lo esencial», que
 *     ya no sale si el artículo no tiene resumen propio). El resto de bloques
 *     va al final de la sección que los justifica. La nota de afiliado sale
 *     una vez por artículo, en el primer bloque.
 *   - El texto de entrada (`intro`) sale de lo que el propio artículo ya
 *     dice. Sin precios, valoraciones, «mejor precio», urgencia inventada ni
 *     experiencia personal no documentada.
 *   - Experimentos protegidos fuera: `donde-tomar-cafe-lisboa` (E-006) y
 *     `donde-comer-barato-lisboa` (E-007). NO añadirlos aquí.
 *
 * `beforeHeading` es el id (slugify) del subtítulo o subsección ANTES del cual
 * se pinta el bloque, es decir, al cierre de la sección anterior. Si el id no
 * existe —porque se reescribió el encabezado—, el bloque cae al final del
 * cuerpo en lugar de desaparecer o romper la página.
 */

export type BlogBookingOffer =
  | { type: 'product'; productId: string }
  | { type: 'free-tour'; categoryId: FreeTourCategoryId };

/** Dónde va el bloque cuando no depende de un encabezado concreto. */
export type BookingBlockPosition = 'after-summary';

export interface BlogBookingPlacement {
  offer: BlogBookingOffer;
  beforeHeading?: string;
  /** `after-summary`: el bloque de arriba, al cerrar la primera sección con texto. Uno por artículo. */
  position?: BookingBlockPosition;
  /** Una o dos frases con el porqué, en la voz del artículo. */
  intro: string;
}

export const BLOG_BOOKING_PLACEMENTS: Record<string, BlogBookingPlacement[]> = {
  // ── Prioridad por impresiones. Fuente: GSC 28 días hasta 2026-10-07
  // (datos facilitados por José); el comentario de cada artículo conserva la
  // cifra del snapshot 2026-09-22 cuando no hay dato más reciente.
  // monasterio-jeronimos-entradas · artículo nuevo (9/10/2026), sin datos aún.
  // palacio-da-pena-entradas · artículo nuevo (9/10/2026), sin datos aún.
  // La entrada con hora es la siguiente decisión del lector: va arriba. La
  // excursión es la alternativa para quien no quiere organizar tren, autobús
  // y hora, y va al final de la sección «Si prefieres una excursión».
  'palacio-da-pena-entradas': [
    {
      offer: { type: 'product', productId: 'pena-tiqets' },
      position: 'after-summary',
      intro:
        'Entrada al palacio y al parque con hora fija, comprada en español. Ojo: en Tiqets no se devuelve ni se puede cambiar de fecha. Si quieres poder moverla por el tiempo, cómprala en la web oficial.',
    },
    {
      offer: { type: 'product', productId: 'sintra-completa' },
      beforeHeading: 'que-dia-ir-mira-el-tiempo',
      intro:
        'Si prefieres no cuadrar tren, autobús y hora de entrada, hay excursiones de día completo desde Lisboa. Mira en la ficha si incluyen la entrada a la Pena y cuánto tiempo dejan allí.',
    },
  ],
  // obidos-vila-natal · artículo nuevo (9/10/2026), sin datos aún.
  'obidos-vila-natal': [
    {
      offer: { type: 'product', productId: 'obidos-fatima-excursion' },
      // Alternativa al autobús: al cerrar «Cómo ir desde Lisboa».
      beforeHeading: 'y-en-tren',
      intro:
        'Si no quieres cuadrar el autobús, hay excursiones guiadas de un día que paran en Óbidos. Esta termina allí después de Fátima, Batalha y Nazaré, con poco tiempo en el pueblo y sin la entrada a la Vila Natal: compruébalo en la ficha antes de reservar.',
    },
  ],
  // nochevieja-lisboa · artículo nuevo (9/10/2026), sin datos aún. El
  // Oceanário va sin `beforeHeading`: se pinta al final, tras «Año Nuevo».
  'nochevieja-lisboa': [
    {
      offer: { type: 'product', productId: 'nochevieja-velero' },
      // Es otra forma de ver los fuegos: al cerrar «Otros sitios para verlos».
      beforeHeading: 'como-moverte-esa-noche',
      intro:
        'Si prefieres ver los fuegos desde el río, hay salidas en velero esa noche. Mira en la ficha el precio, la hora y el punto de salida y qué incluye, que cambian de un año a otro.',
    },
    {
      offer: { type: 'product', productId: 'oceanario' },
      intro:
        'El 1 de enero cierran casi todos los monumentos, pero el Oceanário abre con horario especial. Mira las horas de ese día en su web antes de comprar.',
    },
  ],
  // lisboa-en-navidad · artículo nuevo (9/10/2026), sin datos aún.
  'lisboa-en-navidad': [
    {
      offer: { type: 'free-tour', categoryId: 'imprescindible' },
      position: 'after-summary',
      intro:
        'Si quieres recorrer la Baixa, el Chiado y el Rossio con alguien que te cuente su historia, hay free tours por el centro. Si eliges uno que acabe al anochecer, terminas con las luces encendidas.',
    },
    {
      offer: { type: 'product', productId: 'oceanario' },
      beforeHeading: 'nochevieja-en-la-praca-do-comercio',
      intro:
        'El 25 de diciembre y el 1 de enero cierran casi todos los monumentos, pero el Oceanário abre con horario especial. Mira las horas de ese día en su web antes de comprar.',
    },
  ],
  'monasterio-jeronimos-entradas': [
    {
      offer: { type: 'product', productId: 'jeronimos' },
      position: 'after-summary',
      intro:
        'Es el billete oficial del claustro con franja horaria, comprado en español. No se puede devolver ni cambiar de fecha: cómpralo cuando tengas el día decidido.',
    },
    {
      offer: { type: 'product', productId: 'jeronimos-torre-belem' },
      beforeHeading: 'que-ves-con-cada-entrada',
      intro:
        'Si haces Jerónimos y Torre el mismo día, puedes comprar las dos entradas juntas. Sale 1 € más caro que comprarlas por separado en la taquilla; revisa en la ficha las condiciones de cambio.',
    },
  ],
  // tarjeta-navegante-lisboa · 1.060 impresiones / 23 clics (28 d a 07/10)
  'tarjeta-navegante-lisboa': [
    {
      // Un solo bloque de Lisboa Card (antes había dos).
      offer: { type: 'product', productId: 'lisboa-card' },
      position: 'after-summary',
      intro:
        'Para moverte en metro, autobús y tranvía basta la Navegante. La Lisboa Card solo compensa si en los mismos días vas a entrar en varios museos o monumentos; más abajo tienes las cuentas.',
    },
  ],
  // time-out-market-lisboa · 616 impresiones (28 d a 07/10)
  // Coincidencia más débil que el resto: el mercado no se reserva. Se ofrece
  // el tour gastronómico como alternativa explícita, no como «entrada».
  'time-out-market-lisboa': [
    {
      offer: { type: 'product', productId: 'tour-gastronomico' },
      beforeHeading: 'alternativas-antes-de-decidir',
      intro:
        'Si más que un food hall buscas probar cocina portuguesa con alguien que te explique qué pides, un tour gastronómico es otra forma de hacerlo. No es lo mismo que comer en el mercado: revisa en la ficha qué incluye.',
    },
  ],
  // como-moverse-por-lisboa · 788 impresiones
  'como-moverse-por-lisboa': [
    {
      offer: { type: 'product', productId: 'lisboa-card' },
      beforeHeading: 'taxi-uber-y-bolt',
      intro:
        'Si en los mismos días vas a usar mucho el transporte y entrar en varios monumentos, la Lisboa Card junta las dos cosas. Solo compensa si la aprovechas: haz la cuenta antes de comprarla.',
    },
  ],
  // estacion-oriente-lisboa · 494 impresiones
  'estacion-oriente-lisboa': [
    {
      offer: { type: 'product', productId: 'oceanario' },
      position: 'after-summary',
      intro:
        'Si bajas en Oriente para pasar el día en Parque das Nações, el Oceanário es lo que más tiempo pide. El precio cambia según la franja horaria, así que compáralas antes de comprar.',
    },
    {
      offer: { type: 'product', productId: 'oceanario' },
      beforeHeading: 'merece-la-pena-aunque-no-tomes-un-tren',
      intro:
        'Si la estación es la puerta de entrada a un día en Parque das Nações, el Oceanário es la visita que más tiempo pide. La entrada se puede dejar resuelta antes de ir.',
    },
  ],
  // arquitectura-manuelina-lisboa · 242 impresiones
  'arquitectura-manuelina-lisboa': [
    {
      offer: { type: 'free-tour', categoryId: 'belem' },
      beforeHeading: 'otros-lugares-de-portugal-donde-aparece-el-manuelino',
      intro:
        'Si prefieres que alguien te señale estos detalles sobre el terreno, hay free tours por Belém centrados en los Jerónimos, la Torre y la historia marítima.',
    },
  ],
  // tram-28-historia-guia · 183 impresiones
  'tram-28-historia-guia': [
    {
      offer: { type: 'product', productId: 'lisboa-card' },
      beforeHeading: 'como-evitar-colas-y-esperas-innecesarias',
      intro:
        'Si además del tranvía vas a moverte mucho en transporte y a entrar en monumentos, revisa la Lisboa Card, que incluye transporte público. Para un solo viaje en el 28 no tiene sentido.',
    },
  ],
  // barrios-imprescindibles · 161 impresiones
  'barrios-imprescindibles': [
    {
      offer: { type: 'free-tour', categoryId: 'imprescindible' },
      beforeHeading: 'alfama-el-barrio-que-sobrevivio-al-terremoto',
      intro:
        'Para una primera visita, un free tour por Baixa, Chiado y Rossio te ayuda a situarte en el centro antes de recorrerlo por tu cuenta.',
    },
    {
      offer: { type: 'free-tour', categoryId: 'alfama' },
      beforeHeading: 'bairro-alto-donde-lisboa-sale-de-fiesta',
      intro: 'Si quieres recorrer Alfama con alguien que conozca sus calles, también hay free tours centrados en el barrio.',
    },
  ],
  // chiado-bairro-alto-guia · 104 impresiones
  'chiado-bairro-alto-guia': [
    {
      offer: { type: 'free-tour', categoryId: 'imprescindible' },
      beforeHeading: 'bairro-alto-que-cambia-al-subir',
      intro:
        'Si es tu primera vez en Lisboa, un free tour por Baixa, Chiado y Rossio te explica esta zona antes de que la recorras a tu aire.',
    },
  ],

  // ── Artículos con producto exacto en bookings.ts ────────────────────────
  'sintra-desde-lisboa': [
    {
      offer: { type: 'product', productId: 'sintra-palacio-pena' },
      position: 'after-summary',
      intro:
        'Como el interior de Pena se visita con fecha y hora, conviene llevar la entrada comprada antes de coger el tren y elegir una hora con margen.',
    },
    {
      offer: { type: 'product', productId: 'sintra-completa' },
      beforeHeading: 'que-comprobar-la-noche-anterior',
      intro: 'Si prefieres no organizar trenes y autobuses dentro de Sintra, también hay excursiones de día completo desde Lisboa.',
    },
  ],
  'excursiones-desde-lisboa': [
    {
      offer: { type: 'product', productId: 'sintra-completa' },
      beforeHeading: '2-cascais-medio-dia-que-sabe-a-mas',
      intro: 'Si solo tienes un día para Sintra y no quieres pelearte con trenes y autobuses, puedes hacerla en excursión organizada.',
    },
  ],
  'lisboa-card-vale-la-pena': [
    {
      offer: { type: 'product', productId: 'lisboa-card' },
      position: 'after-summary',
      intro:
        'Antes de comprarla, haz la cuenta de más abajo con lo que de verdad vas a visitar. Si te sale a favor, aquí la puedes dejar comprada antes del viaje.',
    },
    {
      offer: { type: 'product', productId: 'lisboa-card' },
      beforeHeading: 'reservas-cupos-y-tarjeta-fisica',
      intro: 'Si al hacer la cuenta te sale a favor, puedes comprarla antes del viaje. Revisa las condiciones antes de pagar.',
    },
  ],
  'donde-escuchar-fado-autentico': [
    {
      offer: { type: 'product', productId: 'fado' },
      beforeHeading: 'como-comportarse-durante-el-fado',
      intro: 'Si prefieres dejar resuelta la noche con un espectáculo concreto, puedes reservar plaza antes de ir: las casas pequeñas se llenan.',
    },
  ],
  'alfama-historia-guia': [
    {
      offer: { type: 'free-tour', categoryId: 'alfama' },
      beforeHeading: 'miradores-de-alfama-santa-luzia-y-portas-do-sol',
      intro: 'Si prefieres hacer esta ruta con un guía local, hay free tours por Alfama. Ten en cuenta las cuestas.',
    },
    {
      offer: { type: 'product', productId: 'castelo-sao-jorge' },
      beforeHeading: 'como-llegar-a-alfama',
      intro: 'Si decides entrar en el castillo, llevar la entrada comprada te ahorra la cola de la puerta.',
    },
  ],
  'parque-das-nacoes-lisboa-que-ver': [
    {
      offer: { type: 'product', productId: 'oceanario' },
      beforeHeading: 'paseo-junto-al-tajo',
      intro: 'Es la visita que más tiempo necesita del barrio. Si ya sabes que vas a entrar, puedes llevar la entrada resuelta.',
    },
  ],
  'lisboa-cuando-llueve': [
    {
      offer: { type: 'product', productId: 'oceanario' },
      beforeHeading: 'museos-elige-uno-por-zona',
      intro: 'Si la lluvia te cambia el plan, el Oceanário es de los más fáciles de reorganizar. La entrada se puede comprar antes de salir.',
    },
  ],
  'lisboa-con-ninos': [
    {
      offer: { type: 'product', productId: 'oceanario' },
      beforeHeading: 'parque-das-nacoes-y-el-paseo-junto-al-rio',
      intro: 'Si el Oceanário entra en vuestro plan, podéis llevar la entrada comprada y no depender de la taquilla ese día.',
    },
  ],
};

/**
 * Identificador de contenido para medir cada bloque por página. Los bloques
 * de arriba llevan `-arriba` para distinguirlos del bloque del mismo
 * producto que queda más abajo en el artículo.
 */
export function bookingBlockContentId(
  surface: string,
  slug: string,
  offer: BlogBookingOffer,
  position?: BookingBlockPosition,
): string {
  const target = offer.type === 'product' ? offer.productId : `free-tour-${offer.categoryId}`;
  return `${surface}-${slug}-${target}${position === 'after-summary' ? '-arriba' : ''}`;
}

/** Compatibilidad: identificador de los bloques del blog. */
export function blogBookingContentId(slug: string, offer: BlogBookingOffer, position?: BookingBlockPosition): string {
  return bookingBlockContentId('blog', slug, offer, position);
}
