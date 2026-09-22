/**
 * Configuración del MVP comercial.
 *
 * El precio del plan personalizado sólo se muestra cuando existe una variable
 * pública definida expresamente. Dejarla vacía mantiene el servicio activo sin
 * inventar una cantidad.
 *
 * Ejemplo futuro:
 * NEXT_PUBLIC_PLAN_PRICE_FROM="49 €"
 */
export const PLAN_PRICE_FROM =
  process.env.NEXT_PUBLIC_PLAN_PRICE_FROM?.trim() || null;
