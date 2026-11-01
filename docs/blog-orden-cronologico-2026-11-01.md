# Blog en orden cronológico y revisión del encargo "reconstruir la web" (1/11/2026)

## Encargo
José: "reconstruye mi web ya … piensa en el SEO, los posts más nuevos del blog mantenerlos en orden". Aprobó también dos guías nuevas (Torre de Belém y Jerónimos) hechas en un preview estático aparte (estabaenlisboa-preview).

## Línea base (L-004)
- `main` en `470e43c` (Finalize Lisbon ByBoat article).
- Sitemap del build: 107 URLs; `seo-url-policy.json`: 16 redirecciones.
- Catálogo de `/blog` ("Todas las guías"): seguía el orden manual de `blogPosts`. Ejemplos: `lisboa-en-enero` (25 Oct 2026) en 7.º lugar, `aeropuerto-lisboa-al-centro` (19 Jun 2026) en 43.º, `donde-tomar-cafe-lisboa` (5 Nov 2024) en 50.º, antes de artículos de 2025-2026.
- JSON-LD `Blog` de `/blog`: mismo orden manual, sin `dateModified`.

## Cambio de este PR
- `src/data/blog-posts.ts`: `blogPostsByDate`, una copia de `blogPosts` ordenada por `fecha` (la fecha de publicación que ya tiene cada artículo), más nuevo primero, sort estable en empates. No se cambia ni se inventa ninguna fecha. Si una fecha no se puede leer va al final (hoy: 0 casos de 71).
- `/blog` (`BlogClient.tsx`): catálogo y filtros por categoría usan `blogPostsByDate`. La fecha ya era visible en cada tarjeta (`categoría — fecha`). La portada editorial (`blog-editorial-selection.ts`) no cambia: es una selección curada.
- `/blog` (`page.tsx`): el JSON-LD `Blog` lista los artículos en ese orden y añade `dateModified` cuando el artículo lo tiene en los datos.
- El orden se mantiene solo: un artículo nuevo sale arriba por su `fecha`, sin importar dónde se añada en `blogPosts`.
- Nada visual cambia salvo el orden de las tarjetas. No toca URLs, canonical, hreflang, sitemap, robots, redirecciones, enlaces de afiliado (0 líneas con tiqets/guruwalk/stay22/partner en el diff) ni el script Stay22.

## Lo que NO se ha hecho y por qué (conflicto señalado, L-001/L-003/L-005)
1. **Rediseño completo con el diseño del preview.** Este repo es Next.js con 107 URLs indexables, componentes editoriales propios, pruebas de conservación y decisiones LOCKED. El preview era HTML estático de 11 páginas. Pegarlo o rehacer todo de una vez rompería la regla de mostrar los cambios visuales y esperar aprobación (L-003), y no se puede comprobar bien en un solo ciclo. Propuesta: llevar el diseño página a página, cada una en su URL, en PRs pequeños con capturas.
2. **Guías nuevas de Torre y Jerónimos.** El repo **ya tiene** esas superficies con demanda posible:
   - `/actividades/torre-de-belem`: ficha con guía de entradas (`ticket-guides.ts`, clave `torre-de-belem`), preguntas frecuentes y botón Tiqets (`web_hub_torre-belem`).
   - `/blog/monasterio-jeronimos-entradas` (publicado el 9 Oct 2026) y `/actividades/mosteiro-jeronimos`.
   - `/blog/belem-barrio-guia` (21 Mar 2026), la guía de zona.
   Crear `/…/entradas-torre-de-belem` y `/…/entradas-monasterio-jeronimos` como URLs nuevas competiría con ellas (canibalización), y las reglas del repo piden no hacerlo sin revisar Search Console. José aprobó las guías viendo el preview, sin saber que estas URLs ya existían. **Decisión pendiente de José:** (a) mejorar las URLs existentes con el contenido verificado del preview (lo que se recomienda), o (b) crear las nuevas y redirigir o canonizar las antiguas después de revisar Search Console.
3. **Diferencias de datos que hay que revisar** entre la guía actual de la Torre y la investigación del 31/10/2026 (`v4/research/belem.md`). La investigación da la Torre con una única fuente oficial de horario que no coincide con otra (Cultura Portugal dice 10:00), y no confirma "45 minutos dentro" ni "escalera de caracol muy estrecha". Antes de tocar esa ficha hay que contrastarlo con la fuente oficial.

## Pruebas
- `npm run typecheck`: OK. ESLint en los archivos tocados: OK. `npm run build`: OK.
- `/blog` en local: 200, un solo h1, canonical `https://estabaenlisboa.com/blog`. Catálogo: `paseo-en-velero-lisboa-lisbon-byboat` (27 Oct), `lisboa-en-enero` (25 Oct), `quinta-da-regaleira-entradas` (25 Oct), `portugal-en-7-dias` (14 Oct)… JSON-LD con `datePublished`/`dateModified` reales.
- `smoke:sitemap` contra el build local: 67/67 comprobaciones OK; las 107 URLs responden 200, sin redirección ni noindex.
- Lighthouse de `/blog` sobre el build de producción local: móvil 87/100/100/100, escritorio 100/100/100/100 (Performance/Accessibility/Best Practices/SEO). No hay medición de `main` en la misma máquina, así que no se atribuye el 87 de móvil a este cambio.
- Inventario de URLs antes y después: `docs/blog-orden-cronologico-2026-11-01-urls.md` (107 URLs y 16 redirecciones, ninguna cambia).
