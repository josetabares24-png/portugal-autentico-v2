/**
 * Newsletter dentro de los artículos.
 *
 * El PDF es un archivo estático en /public. Se enseña en el mensaje de éxito
 * del formulario porque el email de bienvenida sale de una plantilla de Brevo
 * (BREVO_SUBSCRIPTION_TEMPLATE_ID) que no se edita desde el repo.
 */
export const LEAD_MAGNET_PDF = '/que-reservar-antes-de-ir-a-lisboa.pdf';
export const LEAD_MAGNET_TITLE = 'Qué reservar antes de ir a Lisboa';

/**
 * Artículos sin newsletter: E-006 y E-007 están en medición (brain/05) y
 * cualquier bloque nuevo contaminaría el resultado.
 */
export const NEWSLETTER_EXCLUDED_SLUGS = new Set([
  'donde-tomar-cafe-lisboa',
  'donde-comer-barato-lisboa',
]);

// D-044: la newsletter permanece pausada. No mostrar formularios en artículos.
export function articleHasNewsletter(_slug: string) {
  return false;
}
