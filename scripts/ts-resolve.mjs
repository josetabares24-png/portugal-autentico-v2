/**
 * Gancho de resolución para poder probar los módulos TypeScript del proyecto
 * desde Node sin dependencias.
 *
 * El problema: Node 22 sabe quitarle los tipos a un `.ts`, pero al resolver
 * módulos ESM exige la extensión explícita. El código fuente, en cambio,
 * importa como se importa en cualquier proyecto de Next —
 * `from './budget-calculator'`— y no vamos a ensuciarlo con extensiones ni a
 * activar `allowImportingTsExtensions` en el tsconfig de todo el repositorio
 * sólo para que corran unas pruebas.
 *
 * La solución vive donde tiene que vivir, en las herramientas: cuando un
 * especificador relativo no trae extensión, se prueba primero con `.ts`. Si
 * no existe, se resuelve como siempre.
 *
 * Se usa con: node --import ./scripts/register-ts.mjs <script>
 */

import { pathToFileURL } from 'node:url';
import { resolve as resolverRuta } from 'node:path';

/**
 * El alias `@/` del tsconfig, que apunta a `src/`. Sin esto no se puede
 * cargar en Node nada que viva bajo `src/app`, porque las rutas de API
 * importan sus utilidades por alias, no por camino relativo.
 */
const RAIZ_ALIAS = pathToFileURL(`${resolverRuta(process.cwd(), 'src')}/`).href;

export async function resolve(specifier, context, next) {
  if (specifier.startsWith('@/')) {
    return resolve(`${RAIZ_ALIAS}${specifier.slice(2)}`, context, next);
  }

  const esRelativo =
    specifier.startsWith('./') || specifier.startsWith('../') || specifier.startsWith('file:');
  const tieneExtension = /\.[cm]?[jt]sx?$/.test(specifier) || /\.json$/.test(specifier);

  if (esRelativo && !tieneExtension) {
    try {
      return await next(`${specifier}.ts`, context);
    } catch {
      // No hay `.ts`: se resuelve por el camino normal.
    }
  }

  try {
    return await next(specifier, context);
  } catch (error) {
    /*
     * Último recurso para los subcaminos de paquete que Next publica pensando
     * en un bundler —`next/server` es el caso— y que Node no resuelve solo.
     * Sólo se intenta cuando la resolución normal ya ha fallado, así que no
     * puede tapar un módulo que sí existía.
     */
    if (!esRelativo && !tieneExtension) {
      try {
        return await next(`${specifier}.js`, context);
      } catch {
        // Tampoco: se propaga el error original, que es el informativo.
      }
    }
    throw error;
  }
}
