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
 * Añade a una URL pública de GuruWalk el identificador de referido y el
 * filtro de tours PRO, según su documentación de afiliados:
 *   - `ref=<ID>`  identificador de referido, es lo que atribuye la comisión;
 *   - `pro=true`  muestra únicamente tours PRO.
 *
 * El ID no es un secreto: acaba siendo visible en el href renderizado, como
 * en cualquier enlace de afiliado. Vive en una variable de entorno solo por
 * higiene de configuración, para no tenerlo escrito en el código.
 *
 * Si la URL ya trae `ref` o `pro`, se respetan los suyos.
 */
export function withGuruwalkRef(publicUrl: string, ref: string): string {
  if (!publicUrl || !ref) return publicUrl;

  try {
    const url = new URL(publicUrl);
    if (!url.searchParams.has('ref')) url.searchParams.set('ref', ref);
    if (!url.searchParams.has('pro')) url.searchParams.set('pro', 'true');
    return url.toString();
  } catch {
    return publicUrl;
  }
}

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
