/**
 * Qué partes de la calculadora están activas.
 *
 * Existe un solo interruptor y está aquí, no repartido por componentes: la
 * interfaz y la ruta de API leen el mismo valor, así que no puede pasar que
 * el botón desaparezca y el endpoint siga intentándolo, ni al revés.
 */

/**
 * El envío del presupuesto por email.
 *
 * **Desactivado temporalmente.** La prueba real en Preview llegó hasta Brevo y
 * Brevo respondió `API Key is not enabled` (`unauthorized`). No es un problema
 * del PDF ni del cálculo: es la credencial. Hasta que esa clave esté
 * habilitada, la página ofrece sólo la descarga y el endpoint rechaza de
 * forma controlada cualquier petición que traiga email, en vez de gastar un
 * viaje al proveedor para acabar en un 502.
 *
 * **Nada se ha borrado.** `sendBrevoEmail` con sus adjuntos, la validación de
 * dirección, las variables `BREVO_*` y las pruebas de esa infraestructura
 * siguen en su sitio. Reactivarlo es poner esto en `true`.
 */
export const BUDGET_EMAIL_ENABLED = false;
