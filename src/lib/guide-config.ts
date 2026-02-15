/**
 * Configuración temporal para las guías.
 */
export const HIDE_GUIDE_PHOTOS = true;

/**
 * Acceso gratuito temporal a todas las guías.
 * Cambiar FREE_ACCESS_UNTIL a null para desactivar.
 * Formato: 'YYYY-MM-DD'
 */
export const FREE_ACCESS_UNTIL = '2026-03-15';

export function isFreeAccessActive(): boolean {
  if (!FREE_ACCESS_UNTIL) return false;
  return new Date() < new Date(FREE_ACCESS_UNTIL + 'T23:59:59');
}
