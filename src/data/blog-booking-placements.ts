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

export interface BlogBookingPlacement {
  offer: BlogBookingOffer;
  beforeHeading?: string;
  /** Una o dos frases con el porqué, en la voz del artículo. */
  intro: string;
}

export const BLOG_BOOKING_PLACEMENTS: Record<string, BlogBookingPlacement[]> = {
  // ── Prioridad por impresiones. Fuente: GSC 28 días hasta 2026-10-07
  // (datos facilitados por José); el comentario de cada artículo conserva la
  // cifra del snapshot 2026-09-22 cuando no hay dato más reciente.
  // tarjeta-navegante-lisboa · 1.060 impresiones / 23 clics (28 d a 07/10)
  'tarjeta-navegante-lisboa': [
    {
      offer: { type: 'product', productId: 'lisboa-card' },
      beforeHeading: 'y-pagar-directamente-con-tarjeta-bancaria',
      intro:
        'Si en los mismos días vas a encadenar transporte y entradas a monumentos, compara el billete de 24 horas con la Lisboa Card, que incluye el transporte público. Haz la cuenta con lo que de verdad vas a visitar.',
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
      beforeHeading: 'como-subir-a-pena-desde-sintra',
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

/** Identificador de contenido para medir cada bloque por artículo. */
export function blogBookingContentId(slug: string, offer: BlogBookingOffer): string {
  const target = offer.type === 'product' ? offer.productId : `free-tour-${offer.categoryId}`;
  return `blog-${slug}-${target}`;
}
