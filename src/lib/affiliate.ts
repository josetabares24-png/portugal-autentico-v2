/**
 * Construcción de URLs de afiliado (GuruWalk y similares).
 *
 * Regla principal: los parámetros que el partner ya incluye en el enlace
 * afiliado (identificador de referido, campaña propia, etc.) son los que
 * garantizan la atribución de la comisión. Nunca se eliminan ni se
 * sobrescriben: si el enlace original ya trae un `utm_*`, se respeta el
 * suyo y no se añade el nuestro.
 */

/** Campaña: identifica la categoría de tour que se está enlazando. */
export type AffiliateCampaign =
  | 'free-tours-lisboa'
  | 'free-tour-centro'
  | 'free-tour-alfama'
  | 'free-tour-belem'
  | 'free-tour-misterios'
  | 'free-tour-nocturno';

/** Ubicación: identifica desde qué bloque de la interfaz se hizo clic. */
export type AffiliatePlacement =
  | 'hero'
  | 'category-card'
  | 'activities-featured'
  | 'activity-detail'
  | 'final-cta';

const UTM_SOURCE = 'estabaenlisboa';
const UTM_MEDIUM = 'affiliate';

/**
 * Añade UTMs medibles a una URL de reserva sin tocar ningún parámetro que
 * la URL ya tuviera. Si la URL no es válida se devuelve tal cual, para que
 * un enlace mal formado nunca rompa el renderizado.
 *
 * @param baseUrl  URL afiliada tal y como la entrega el partner.
 * @param campaign Identificador de campaña (categoría de tour).
 * @param content  Identificador de contenido/ubicación (opcional).
 */
export function buildAffiliateUrl(
  baseUrl: string,
  campaign: string,
  content?: string
): string {
  if (!baseUrl) return baseUrl;

  try {
    const url = new URL(baseUrl);

    // `set` sobrescribiría el valor existente, así que sólo escribimos
    // cuando el parámetro no venía ya en el enlace del partner.
    const addIfAbsent = (key: string, value: string) => {
      if (!value) return;
      if (url.searchParams.has(key)) return;
      url.searchParams.set(key, value);
    };

    addIfAbsent('utm_source', UTM_SOURCE);
    addIfAbsent('utm_medium', UTM_MEDIUM);
    addIfAbsent('utm_campaign', campaign);
    if (content) addIfAbsent('utm_content', content);

    return url.toString();
  } catch {
    return baseUrl;
  }
}
