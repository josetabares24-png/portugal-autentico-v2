/**
 * Configuración temporal para las guías.
 */
export const HIDE_GUIDE_PHOTOS = true;

/**
 * Acceso gratuito temporal a todas las guías.
 * Cambiar FREE_ACCESS_UNTIL a null para desactivar.
 * Formato: 'YYYY-MM-DD'
 */
export const FREE_ACCESS_UNTIL = '2099-12-31';

export function isFreeAccessActive(): boolean {
  return true;
}
