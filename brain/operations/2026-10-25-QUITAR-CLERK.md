# Quitar Clerk de la web (2026-10-25)

Rama local `fix/quitar-clerk` desde origin/main `348ccba`, **sin publicar** (L-003). José: «No uso el panel /admin; prepara en local cómo quitar Clerk y enséñamelo antes de publicar».

## Qué dependía de Clerk (comprobado en el código y en producción el 25/10)

| Pieza | Uso real | Estado en producción antes del cambio |
|---|---|---|
| `src/proxy.ts` (`clerkMiddleware`) | Solo para `/admin`, `/app/*`, `/api/admin`, `/api/reviews` | — |
| Panel `/admin` (inicio, estadísticas, guías, debug) y `/api/admin/guides` | Editar guías en Supabase | 500 (`Missing secretKey`, ver D-069) |
| `/api/reviews` + `ReviewForm` | POST exigía sesión; GET leía `guide_reviews` | 500; ninguna página importa `ReviewForm` ni llama a la API |
| `NavbarAuthSlot` + `useIsAdmin` | Botón de usuario y enlace Admin | Ningún componente lo importa |
| `/app/lisboa-1-dia` | Pasaba por Clerk en el proxy | 308 desde `next.config.mjs`, antes del proxy: no cambia |

Lo público no usaba Clerk: contacto, planifica-tu-viaje, presupuesto, free tours, unsubscribe, media, sitemap, comprar-entradas y las páginas /en.

## Cambios

- Borrados: `src/app/admin/**`, `src/app/api/admin/**`, `src/app/api/reviews`, `ReviewForm`, `NavbarAuthSlot`, `useIsAdmin`, `auth-utils`, `scripts/update-clerk-keys.js`, `SETUP-USUARIO-MASTER.md`, `SOLUCION-CLERK-CORS.md`, `CREAR-USUARIO-MASTER.md`. Fuera `@clerk/nextjs` de package.json y del lock.
- `src/proxy.ts`: sin Clerk; quedan los 308 heredados (/en/tours, /ko/tours, guia-practica), el paso directo de /en y next-intl. El matcher pierde `/api/admin` y `/api/reviews`.
- `/admin` y todo lo que cuelga responden 404 con la página de error normal y `X-Robots-Tag: noindex, nofollow` (cabecera de `next.config.mjs`, se conserva).
- `/api/brevo/campaign`: no estaba protegido por nada (lo anotó ya `docs/editorial-rebuild-audit.md`) y en producción llegaba a validar el cuerpo con la clave de Brevo configurada. Ahora sin `BREVO_CAMPAIGN_SECRET` responde 404; con ella exige `Authorization: Bearer <secreto>`. Nadie lo llama desde la web.
- Política de privacidad y de cookies: fuera Clerk como proveedor y las cookies de sesión; ahora dicen que la web no tiene cuentas ni inicio de sesión. Fecha 25/10/2026. FAQ «¿Necesito crear una cuenta?» igual.
- Smokes: ya no inyectan claves ficticias de Clerk para arrancar el servidor.
- `.env.example` y `DEPLOY-CHECKLIST.md` sin variables CLERK_*.

## Lo que se pierde

- Editar, crear o borrar guías de Supabase desde la web. Las que existan se siguen sirviendo en `/itinerarios/[slug]` (`guide-store.ts` no cambia); si hiciera falta tocarlas, desde el panel de Supabase.
- Reseñas con login: no había formulario en ninguna página, así que el visitante no pierde nada. La tabla `guide_reviews` sigue en Supabase, sin borrar.

## Verificación local (Node 22)

- `tsc --noEmit` sin errores; `eslint .` 0 errores, 1 warning anterior (ItineraryContextualCta).
- `next build` correcto; desaparecen las rutas /admin, /api/admin y /api/reviews.
- Mismos resultados que main en todos los smoke/test (main y rama ejecutados en la misma máquina): activities 120/120, titles 19/19, sitemap 67/67, free-tours 70/70, seo-migration 1507/0, technical-quality 1200/0, english-pilot 224/0, editorial-navigation 171/0, blog, calculadora y los 14 test:*. Igual que en main: traveler-guides falla sus 3 checks de siempre y editorial-template no arranca sin `.snapshots/editorial-phase2-base.json`.
- 26 URL públicas y 3 POST públicos con el mismo código de estado en main y en la rama; solo cambian /admin, /admin/debug, /api/admin/guides y /api/reviews (500 → 404).
- JS de la home: 12 → 11 scripts, 669.891 → 669.744 bytes (208.186 → 207.785 gzip). Clerk ya no se cargaba en páginas públicas, así que la mejora es mínima. El proxy pasa de 95 a 93 archivos trazados (1,87 → 1,69 MB).

## Pasos manuales de José, en este orden

1. Publicar la rama (merge a main) y comprobar que /admin da 404 y la web funciona.
2. En Vercel (los dos proyectos), borrar `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` y cualquier otra `CLERK_*`. Antes del deploy no: el código de main todavía las lee.
3. En el DNS (está en Vercel: Domains → estabaenlisboa.com), borrar los cinco CNAME de Clerk, comprobados el 25/10: `clerk` → frontend-api.clerk.services, `accounts` → accounts.clerk.services, `clkmail`, `clk._domainkey` y `clk2._domainkey` (estos tres a `*.5p6m3m2oa8xk.clerk.services`). No tocar los de Brevo ni Google.
4. En Search Console, si `clerk.estabaenlisboa.com/` sigue apareciendo, pedir su retirada temporal desde Eliminaciones de la propiedad de dominio.
5. En el panel de Clerk, borrar la aplicación (o dejarla sin uso: el plan gratuito no cobra).
