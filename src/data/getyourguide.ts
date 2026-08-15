/**
 * Selección editorial de actividades de GetYourGuide.
 *
 * Fuente única de la integración: la sección de `/actividades` recorre esta
 * lista, no lleva los widgets escritos a mano. Añadir la actividad número
 * siete es añadir una entrada aquí y nada más.
 *
 * Regla de la integración: una actividad, un widget, una campaña. Nada de
 * widgets automáticos ni de listados genéricos de Lisboa; cada entrada se
 * elige a mano.
 *
 * Los `campaign` son la unidad de medida del programa de afiliados: cada uno
 * mide su actividad por separado en el panel de GetYourGuide. Renombrar uno
 * rompe el histórico de esa actividad, así que no se tocan.
 */

/** Cuenta de partner. Es la que atribuye la comisión. */
export const GYG_PARTNER_ID = 'J2Z24GU';

/** Idioma en el que GetYourGuide pinta sus tarjetas. */
export const GYG_LOCALE_CODE = 'es-ES';

export interface GetYourGuideActivity {
  /**
   * Nombre interno, para identificar la entrada en el código y en el QA.
   * No se pinta en ningún sitio: el título lo pone el propio widget, y
   * duplicarlo fuera sería repetir información.
   */
  name: string;
  /** `data-gyg-tour-ids`. Identifica la actividad en el catálogo. */
  tourId: string;
  /** `data-gyg-cmp`. Lo que permite medir esta actividad por separado. */
  campaign: string;
  /**
   * Destino del enlace de repliegue, el único que se ve si el script no
   * llega a cargar. GetYourGuide entregó unas fichas con `lisbon-l42` y
   * otras con `lisboa-l42`; ambas llevan a su página de Lisboa. Se conserva
   * el de cada ficha tal cual en vez de unificarlo por nuestra cuenta.
   */
  fallbackHref: string;
}

const LISBON_EN = 'https://www.getyourguide.com/lisbon-l42/';
const LISBON_ES = 'https://www.getyourguide.com/lisboa-l42/';

/**
 * Orden de aparición en la sección. Es el que pidió José, y tiene sentido
 * editorial: las dos excursiones que consumen un día entero van primero, y
 * después las experiencias de unas pocas horas.
 */
export const GYG_ACTIVITY_WIDGETS: GetYourGuideActivity[] = [
  {
    name: 'Sintra + Pena + Regaleira + Cabo da Roca + Cascais',
    tourId: '387617',
    campaign: 'web_actividad_sintra-completa',
    fallbackHref: LISBON_EN,
  },
  {
    name: 'Oceanário de Lisboa',
    tourId: '38079',
    campaign: 'web_actividad_oceanario',
    fallbackHref: LISBON_EN,
  },
  {
    name: 'Crucero por el río Tajo con bebida de bienvenida',
    tourId: '410732',
    campaign: 'web_actividad_crucero-tajo',
    fallbackHref: LISBON_ES,
  },
  {
    name: 'Espectáculo de fado en Lisboa',
    tourId: '887435',
    // Normalizada en minúsculas. GetYourGuide la generó como
    // `Web_actividad_fado`; se usa la forma normalizada del resto para que
    // el panel no acabe con dos convenciones distintas.
    campaign: 'web_actividad_fado',
    fallbackHref: LISBON_ES,
  },
  {
    name: 'Castelo de São Jorge',
    tourId: '424720',
    // El código original traía espacios accidentales por delante. Aquí va
    // sin ellos: un espacio en la campaña la convierte en otra distinta y
    // partiría la medición en dos.
    campaign: 'web_actividad_castelo-sao-jorge',
    fallbackHref: LISBON_ES,
  },
  {
    name: 'Tour gastronómico en Lisboa',
    tourId: '603',
    campaign: 'web_actividad_tour-gastronomico',
    fallbackHref: LISBON_ES,
  },
];

/**
 * Enlaces de afiliado individuales, para CTA dentro de artículos y guías.
 *
 * NO están cableados en ninguna parte todavía, y es deliberado: los widgets
 * viven en la sección de actividades y estos enlaces son para el cuerpo
 * editorial, que se toca cuando toque y con criterio, no de golpe.
 *
 * Ojo con el primero: `web_sintra_palacio-pena` es el Palacio da Pena con su
 * parque, un producto distinto de la excursión completa de Sintra que sale
 * en el widget. No son intercambiables.
 */
export const GYG_ARTICLE_LINKS = {
  'sintra-palacio-pena': {
    name: 'Palacio da Pena + Parque',
    campaign: 'web_sintra_palacio-pena',
    url: 'https://gyg.me/9i00hN0O',
  },
  oceanario: {
    name: 'Oceanário de Lisboa',
    campaign: 'web_articulo_oceanario',
    url: 'https://gyg.me/OIHaINA6',
  },
  'crucero-tajo': {
    name: 'Crucero por el Tajo',
    campaign: 'web_articulo_crucero-tajo',
    url: 'https://gyg.me/IL8SaMuw',
  },
  fado: {
    name: 'Fado en Lisboa',
    campaign: 'web_articulo_fado',
    url: 'https://gyg.me/8aL5dndR',
  },
  'castelo-sao-jorge': {
    name: 'Castelo de São Jorge',
    campaign: 'web_articulo_castelo-sao-jorge',
    url: 'https://gyg.me/xsuIYU11',
  },
  'tour-gastronomico': {
    name: 'Tour gastronómico en Lisboa',
    campaign: 'web_articulo_tour-gastronomico',
    url: 'https://gyg.me/9USjIETP',
  },
} as const;

export type GetYourGuideArticleLink = keyof typeof GYG_ARTICLE_LINKS;
