/**
 * Catálogo editorial de free tours de Lisboa y punto único donde viven los
 * enlaces de afiliado de GuruWalk.
 *
 * Está partido en dos capas a propósito:
 *
 *  1. `FREE_TOUR_CATEGORIES` — metadatos estáticos (nombre, texto, CTA,
 *     ancla). No dependen de variables de entorno, así que puede
 *     importarlos también un componente de cliente sin arrastrar nada.
 *
 *  2. `getFreeTourAffiliateUrl()` — resuelve la URL afiliada real leyendo
 *     variables de entorno de servidor. Llamar SOLO desde componentes de
 *     servidor: así el identificador de afiliado nunca se incrusta en el
 *     bundle de cliente.
 *
 * Sobre la atribución: `publicPath` documenta la ruta pública de GuruWalk
 * que corresponde a cada categoría, pero NO se usa como href. Enlazar a la
 * URL pública sin el identificador de afiliado de José haría perder la
 * comisión, así que mientras no haya enlace afiliado configurado el CTA se
 * renderiza inerte (ver `AffiliateLink`).
 */

import type { AffiliateCampaign } from '@/lib/affiliate';

export type FreeTourCategoryId =
  | 'todos'
  | 'imprescindible'
  | 'alfama'
  | 'belem'
  | 'misterios'
  | 'nocturno';

export interface FreeTourCategory {
  id: FreeTourCategoryId;
  /** Ancla interna para enlazar a la tarjeta desde otras páginas. */
  anchor: string;
  name: string;
  /** Texto editorial de la tarjeta. */
  description: string;
  /** Aviso honesto de accesibilidad o condiciones, cuando aplica. */
  notice?: string;
  /** Duración orientativa, sólo donde se conoce con certeza. */
  duration?: string;
  ctaLabel: string;
  campaign: AffiliateCampaign;
  /**
   * Ruta pública de GuruWalk de referencia. Documental: el href real se
   * construye siempre desde el enlace afiliado configurado.
   */
  publicPath: string;
  /**
   * Variable de entorno (de servidor) con el enlace afiliado de esta
   * categoría, tal y como lo entrega GuruWalk y con sus parámetros
   * intactos.
   */
  envKey: string;
}

/** Enlace afiliado general de Lisboa: respaldo de todas las categorías. */
const GENERAL_ENV_KEY = 'GURUWALK_AFFILIATE_URL_LISBOA';

export const FREE_TOUR_CATEGORIES: readonly FreeTourCategory[] = [
  {
    id: 'imprescindible',
    anchor: 'ruta-imprescindible',
    name: 'Lisboa imprescindible',
    description:
      'La mejor opción para una primera visita: Baixa, Chiado, Rossio y los principales episodios de la historia de Lisboa.',
    duration: 'Normalmente 2-3 horas',
    ctaLabel: 'Ver tours por el centro',
    campaign: 'free-tour-centro',
    publicPath: '/es/lisboa/tag/imprescindible',
    envKey: 'GURUWALK_AFFILIATE_URL_IMPRESCINDIBLE',
  },
  {
    id: 'alfama',
    anchor: 'ruta-alfama',
    name: 'Alfama',
    description:
      'Calles estrechas, miradores, fado, historia medieval y algunas de las cuestas más conocidas de Lisboa.',
    notice:
      'No es la mejor ruta para personas con movilidad reducida o dificultad para caminar por pendientes.',
    ctaLabel: 'Ver tours por Alfama',
    campaign: 'free-tour-alfama',
    publicPath: '/es/lisboa/tag/alfama',
    envKey: 'GURUWALK_AFFILIATE_URL_ALFAMA',
  },
  {
    id: 'belem',
    anchor: 'ruta-belem',
    name: 'Belém',
    description:
      'Una ruta centrada en los Descubrimientos, los Jerónimos, la Torre de Belém y la historia marítima portuguesa.',
    ctaLabel: 'Ver tours por Belém',
    campaign: 'free-tour-belem',
    publicPath: '/es/lisboa/tag/belem',
    envKey: 'GURUWALK_AFFILIATE_URL_BELEM',
  },
  {
    id: 'misterios',
    anchor: 'ruta-misterios',
    name: 'Misterios y leyendas',
    description:
      'Historias menos conocidas, leyendas, secretos y episodios oscuros de la ciudad.',
    ctaLabel: 'Ver tours de misterios',
    campaign: 'free-tour-misterios',
    publicPath: '/es/lisboa/tag/leyendas-secretos-y-misterios',
    envKey: 'GURUWALK_AFFILIATE_URL_MISTERIOS',
  },
  {
    id: 'nocturno',
    anchor: 'ruta-nocturna',
    name: 'Lisboa nocturna',
    description:
      'Una forma distinta de recorrer Alfama y el centro cuando bajan las temperaturas y cambia el ambiente de las calles.',
    ctaLabel: 'Ver tours nocturnos',
    campaign: 'free-tour-nocturno',
    publicPath: '/es/lisboa/tag/nocturno',
    envKey: 'GURUWALK_AFFILIATE_URL_NOCTURNO',
  },
  {
    id: 'todos',
    anchor: 'todos-los-free-tours',
    name: 'Todos los free tours',
    description:
      'Consulta las rutas y horarios disponibles para tus fechas antes de elegir.',
    ctaLabel: 'Ver todos los free tours de Lisboa',
    campaign: 'free-tours-lisboa',
    publicPath: '/es/lisboa',
    envKey: GENERAL_ENV_KEY,
  },
] as const;

export function getFreeTourCategory(id: FreeTourCategoryId): FreeTourCategory {
  const category = FREE_TOUR_CATEGORIES.find((c) => c.id === id);
  if (!category) throw new Error(`Categoría de free tour desconocida: ${id}`);
  return category;
}

/**
 * Devuelve el enlace afiliado configurado para una categoría, o `null` si
 * todavía no hay ninguno. Se prueba primero la variable específica de la
 * categoría y luego el enlace general de Lisboa, de modo que configurar una
 * sola variable ya activa toda la página.
 *
 * Sólo debe llamarse desde componentes de servidor.
 */
export function getFreeTourAffiliateUrl(
  category: FreeTourCategory
): string | null {
  const specific = process.env[category.envKey]?.trim();
  if (specific) return specific;

  const general = process.env[GENERAL_ENV_KEY]?.trim();
  if (general) return general;

  return null;
}

/** true si hay al menos un enlace afiliado configurado. */
export function hasAnyAffiliateUrl(): boolean {
  return FREE_TOUR_CATEGORIES.some((c) => getFreeTourAffiliateUrl(c) !== null);
}
