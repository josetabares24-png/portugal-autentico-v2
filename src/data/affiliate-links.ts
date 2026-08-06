/**
 * Catálogo editorial de free tours de Lisboa y punto único donde se
 * construyen los enlaces de afiliado de GuruWalk.
 *
 * Cómo funciona la afiliación de GuruWalk: un único identificador de
 * referido se añade a cualquier URL de su web mediante `ref=<ID>`, y
 * `pro=true` limita el listado a tours PRO. Por eso aquí no hacen falta
 * seis URLs afiliadas distintas: basta con las URLs públicas de cada
 * categoría (datos estáticos, abajo) más un único ID configurado en
 * `GURUWALK_AFFILIATE_REF`.
 *
 * El ID no es un secreto: termina siendo visible en el href renderizado,
 * como en cualquier enlace de afiliado. Está en una variable de entorno
 * únicamente por higiene de configuración, para no dejarlo escrito en el
 * repositorio y poder cambiarlo sin tocar código.
 *
 * Está partido en dos capas a propósito:
 *
 *  1. `FREE_TOUR_CATEGORIES` — metadatos estáticos (nombre, texto, CTA,
 *     ancla y URL pública). No leen entorno, así que puede importarlos
 *     también un componente de cliente sin arrastrar nada.
 *
 *  2. `getFreeTourAffiliateUrl()` — construye el enlace final leyendo el
 *     entorno de servidor. Devuelve `null` si no hay ID configurado, y en
 *     ese caso el CTA se renderiza inerte (ver `AffiliateLink`): enlazar a
 *     la URL pública sin `ref` haría perder la atribución de la comisión.
 */

import { withGuruwalkRef, type AffiliateCampaign } from '@/lib/affiliate';

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
  /** Etiqueta corta para distinguir la ruta de un vistazo. */
  label: string;
  /** Nombre de icono en `src/components/Icon.tsx`. */
  icon: string;
  /**
   * `true` en la entrada que no es una ruta concreta sino el acceso general
   * al destino. Se muestra aparte de la cuadrícula de rutas.
   */
  isGeneral?: boolean;
  /** Texto editorial de la tarjeta. */
  description: string;
  /** Aviso honesto de accesibilidad o condiciones, cuando aplica. */
  notice?: string;
  /** Duración orientativa, sólo donde se conoce con certeza. */
  duration?: string;
  ctaLabel: string;
  campaign: AffiliateCampaign;
  /** URL pública de GuruWalk de esta categoría. Base del enlace final. */
  publicUrl: string;
}

/** Identificador de referido de GuruWalk. Método principal. */
const REF_ENV_KEY = 'GURUWALK_AFFILIATE_REF';

/**
 * Compatibilidad temporal con la configuración anterior, basada en pegar
 * una URL afiliada completa. Si está definida y no hay `ref`, se usa esa
 * URL para todas las categorías, como antes.
 */
const LEGACY_URL_ENV_KEY = 'GURUWALK_AFFILIATE_URL_LISBOA';

const GURUWALK_LISBOA = 'https://www.guruwalk.com/es/lisboa';

export const FREE_TOUR_CATEGORIES: readonly FreeTourCategory[] = [
  {
    id: 'imprescindible',
    anchor: 'ruta-imprescindible',
    name: 'Lisboa imprescindible',
    label: 'Primera visita',
    icon: 'attractions',
    description:
      'La mejor opción para una primera visita: Baixa, Chiado, Rossio y los principales episodios de la historia de Lisboa.',
    duration: 'Normalmente 2-3 horas',
    ctaLabel: 'Ver tours por el centro',
    campaign: 'free-tour-centro',
    publicUrl: `${GURUWALK_LISBOA}/tag/imprescindible`,
  },
  {
    id: 'alfama',
    anchor: 'ruta-alfama',
    name: 'Alfama',
    label: 'Calles y miradores',
    icon: 'directions_walk',
    description:
      'Calles estrechas, miradores, fado, historia medieval y algunas de las cuestas más conocidas de Lisboa.',
    notice:
      'No es la mejor ruta para personas con movilidad reducida o dificultad para caminar por pendientes.',
    ctaLabel: 'Ver tours por Alfama',
    campaign: 'free-tour-alfama',
    publicUrl: `${GURUWALK_LISBOA}/tag/alfama`,
  },
  {
    id: 'belem',
    anchor: 'ruta-belem',
    name: 'Belém',
    label: 'Historia marítima',
    icon: 'sailing',
    description:
      'Una ruta centrada en los Descubrimientos, los Jerónimos, la Torre de Belém y la historia marítima portuguesa.',
    ctaLabel: 'Ver tours por Belém',
    campaign: 'free-tour-belem',
    publicUrl: `${GURUWALK_LISBOA}/tag/belem`,
  },
  {
    id: 'misterios',
    anchor: 'ruta-misterios',
    name: 'Misterios y leyendas',
    label: 'Historias ocultas',
    icon: 'sparkles',
    description:
      'Historias menos conocidas, leyendas, secretos y episodios oscuros de la ciudad.',
    ctaLabel: 'Ver tours de misterios',
    campaign: 'free-tour-misterios',
    publicUrl: `${GURUWALK_LISBOA}/tag/leyendas-secretos-y-misterios`,
  },
  {
    id: 'nocturno',
    anchor: 'ruta-nocturna',
    name: 'Lisboa nocturna',
    label: 'Después del atardecer',
    icon: 'bedtime',
    description:
      'Una forma distinta de recorrer Alfama y el centro cuando bajan las temperaturas y cambia el ambiente de las calles.',
    ctaLabel: 'Ver tours nocturnos',
    campaign: 'free-tour-nocturno',
    publicUrl: `${GURUWALK_LISBOA}/tag/nocturno`,
  },
  {
    id: 'todos',
    anchor: 'todos-los-free-tours',
    name: 'Todos los free tours',
    label: 'Todas las rutas',
    icon: 'explore',
    isGeneral: true,
    description:
      'Consulta las rutas y horarios disponibles para tus fechas antes de elegir.',
    ctaLabel: 'Ver todos los free tours de Lisboa',
    campaign: 'free-tours-lisboa',
    publicUrl: GURUWALK_LISBOA,
  },
] as const;

/**
 * Las cinco rutas concretas, sin el acceso general al destino. Es lo que
 * se muestra en la cuadrícula del comparador: "todos los free tours" no es
 * una ruta más, sino una acción general, y va en su propio bloque.
 */
export const FREE_TOUR_ROUTES: readonly FreeTourCategory[] =
  FREE_TOUR_CATEGORIES.filter((c) => !c.isGeneral);

export function getFreeTourCategory(id: FreeTourCategoryId): FreeTourCategory {
  const category = FREE_TOUR_CATEGORIES.find((c) => c.id === id);
  if (!category) throw new Error(`Categoría de free tour desconocida: ${id}`);
  return category;
}

/**
 * Construye el enlace afiliado de una categoría, o devuelve `null` si no
 * hay configuración de afiliado todavía.
 *
 * Sólo debe llamarse desde componentes de servidor.
 */
export function getFreeTourAffiliateUrl(
  category: FreeTourCategory
): string | null {
  const ref = process.env[REF_ENV_KEY]?.trim();
  if (ref) return withGuruwalkRef(category.publicUrl, ref);

  // Configuración antigua: una URL afiliada completa para todo el destino.
  const legacyUrl = process.env[LEGACY_URL_ENV_KEY]?.trim();
  if (legacyUrl) return legacyUrl;

  return null;
}
