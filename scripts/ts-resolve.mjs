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

export async function resolve(specifier, context, next) {
  const esRelativo = specifier.startsWith('./') || specifier.startsWith('../');
  const tieneExtension = /\.[cm]?[jt]sx?$/.test(specifier) || /\.json$/.test(specifier);

  if (esRelativo && !tieneExtension) {
    try {
      return await next(`${specifier}.ts`, context);
    } catch {
      // No hay `.ts`: se resuelve por el camino normal.
    }
  }

  return next(specifier, context);
}
