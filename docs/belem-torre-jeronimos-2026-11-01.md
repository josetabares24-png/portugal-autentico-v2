# Torre de Belém, Jerónimos y guía de Belém: datos verificados y fotos reales (1/11/2026)

José pide modificar sus páginas, no crear otras. Se tocan tres URLs vivas y ninguna cambia:
- `/actividades/torre-de-belem`: guía de entradas en la ficha (`src/data/ticket-guides.ts`).
- `/blog/monasterio-jeronimos-entradas`: artículo. Se conservan el título y los h2, porque es la única de las tres con clics (Search Console, 24/07–23/10: 1 clic, 121 impresiones, posición 8,2).
- `/blog/belem-barrio-guia`: guía de la zona (0 clics, 101 impresiones, posición 15,8). Se reescribe sin competir con las otras dos: sin precios y sin "entradas" en el h1 ni en los h2.
- `/actividades/mosteiro-jeronimos` hace un 301 a `/blog/monasterio-jeronimos-entradas` y **no se toca**.

Los datos salen de `v4/research/belem.md`, comprobado el 31/10/2026 en la web oficial del monumento, Museus e Monumentos, la venta oficial MEO Blueticket, Património Cultural, UNESCO, Carris y CP.

## Línea base (producción, 1/11/2026 00:30, hora de Lisboa)
Lighthouse (Perf/A11y/BP/SEO) en producción:
- Torre: móvil 93/100/100/100, escritorio 98/100/100/100.
- Jerónimos: móvil 91/100/100/100, escritorio 99/100/100/100.
- Belém: móvil 92/100/100/100, escritorio 100/100/100/100.

## Qué se quitó por no tener fuente o por contradecir la fuente
- **Torre:**
  - Hora de apertura 9:30: dos páginas oficiales dan horas distintas. Se deja "martes a domingo, última entrada 17:00" y se explica por qué falta la hora.
  - "Escalera de caracol muy estrecha" (3 veces) y "unos 45 minutos dentro", con su pregunta frecuente.
  - "15,92 € en total" y "gastos de gestión": el importe aparece en la venta oficial, pero el motivo no se explica en ningún sitio.
  - "8 minutos" en tren y "unos 10 minutos a pie".
- **Jerónimos:**
  - "19,11 €" y "gastos de gestión".
  - Los precios de Tiqets "19,50 €" y "34 €", y "sale 1 € más caro": cambian con la fecha.
  - "8 minutos", "cada 20 minutos", "unos 10 minutos a pie" y los autobuses 728 y 729 (la investigación no los confirma).
  - "Cuenta al menos una hora" y "Calcula una hora dentro", con la pregunta frecuente de la duración.
  - "Unos cinco minutos a pie" y "algo más de 1 km".
- **Belém:** reescrita entera. Fuera quedan los superlativos sin fuente ("el monasterio más bello", "objetivamente diferente", "la pastelería más famosa del mundo"), "1516-1521" (contradice 1514), "cinco pisos con escaleras estrechísimas", las colas de una hora y de 40 minutos, la "Receita Secreta en tres personas", la "vintena da pimenta" y la ruta con duraciones inventadas.

## Qué se añadió
- **Torre:**
  - Sección "Un poco de historia": 1514, Francisco de Arruda, la roca en el río y el rinoceronte de 1515 (Museus e Monumentos, Património Cultural y UNESCO).
  - "Pack de Tiqets, no entrada combinada oficial".
  - Paradas del 15E y aviso de que no todos los trenes paran en Belém.
- **Jerónimos:**
  - Párrafo de historia (D. Manuel I, Restelo, Boytac y Castilho, UNESCO).
  - Las colas de más de 2 horas, atribuidas a la venta oficial con fecha.
  - Enlace a la ficha de la Torre.
- **Belém:** guía corta que enlaza a las dos; la lista de fuentes va en el desplegable que ya existía.
- **Las fuentes nuevas** van en el desplegable cerrado que ya usa el repo ("Datos verificados").

## Fotos
Las fotos de IA se sustituyen por fotos de Wikimedia Commons con autor y licencia comprobados:
- `torre-de-belem-lisboa.webp` (IA) se cambia por `/images/commons/torre-belem-werner-wikimedia.webp` (Berthold Werner, CC BY-SA 4.0) en la ficha de la Torre, su tarjeta de actividad y la tarjeta de Tiqets.
- `mosteiro-dos-jeronimos-claustro.webp` (IA) se cambia por `/images/commons/claustro-jeronimos-halun-wikimedia.webp` (Jakub Hałun, CC BY 4.0) en el artículo de los Jerónimos, en la tarjeta del artículo de arquitectura manuelina y en la tarjeta de Tiqets.
- Belém usa `jeronimos-torre-belem-wikimedia.webp` (Jakub Hałun, CC BY 4.0), que ya estaba en el repo.
- **Crédito visible:** `ArticleHero` muestra el crédito (autor, licencia con enlace y "vía Wikimedia Commons") bajo la portada cuando la foto está en `photo-credits.ts`. Afecta a las portadas de artículos con foto de Commons, como Portugal en 7 días (Pena).
- **Preparación de las fotos:** reducidas a 1600 px y pasadas a WebP, sin recorte. next/image sirve la versión móvil y hace la precarga de la portada.
- **Siguen con la foto IA de la Torre** (fuera de este PR): `HomeEssentials`, `FreeTourLiveFinder`, `affiliate-links.ts` y `english-walking-tours.json`.

## Afiliados
- Se conservan los botones de Tiqets: `web_guia_torre-de-belem` (Torre), `web_blog_monasterio-jeronimos-entradas` (Jerónimos) y `web_blog_belem-barrio-guia` (Belém), cada uno con `rel="sponsored"`.
- El bloque del pack en Belém pasa de `pasteis-de-belem-la-fila-que-vale-la-pena` a `entre-los-dos-monumentos`, porque el h2 cambió.

## Pruebas
- `typecheck`, ESLint de los archivos tocados y `build`: OK.
- `smoke:sitemap`: 67/67. Ajuste: la prueba de imágenes de actividades acepta también `/images/commons/`.
- `smoke:seo-migration`: 1530 comprobaciones, 0 fallos (107 URLs del sitemap, 16 redirecciones).
- `smoke:technical-quality`: 1220 comprobaciones, 0 fallos.
- `smoke:editorial-template`: no se puede ejecutar porque falta `.snapshots/editorial-phase2-base.json` (no está en el repo).
- **Diff de URLs:** el sitemap es idéntico (107). El lastmod pasa al 2026-11-01 solo en las tres páginas cambiadas.
- **Enlaces externos nuevos:** responden 200 (Património Cultural ×2, UNESCO, Carris 15E, CP, web oficial, Pastéis de Belém, Tiqets, MEO Blueticket y MMP).
- **Lighthouse** en el build local (`next start`, sin CDN):
  - Torre: móvil 88/100/100/100, escritorio 100/100/100/100.
  - Jerónimos: móvil 89/100/100/100, escritorio 100/100/100/100.
  - Belém: móvil 87/100/100/100, escritorio 99/100/100/100.

  El rendimiento en móvil no es comparable con producción, porque en local el optimizador de imágenes trabaja en frío. Hay que medirlo en la Preview de Vercel.

## Capturas (antes: producción; después: build de esta rama)
| Página | Antes | Después |
|---|---|---|
| Torre, escritorio | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/antes-torre-escritorio.jpg) | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/despues-torre-escritorio.jpg) |
| Torre, móvil | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/antes-torre-movil.jpg) | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/despues-torre-movil.jpg) |
| Jerónimos, escritorio | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/antes-jeronimos-escritorio.jpg) | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/despues-jeronimos-escritorio.jpg) |
| Jerónimos, móvil | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/antes-jeronimos-movil.jpg) | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/despues-jeronimos-movil.jpg) |
| Belém, escritorio | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/antes-belem-escritorio.jpg) | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/despues-belem-escritorio.jpg) |
| Belém, móvil | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/antes-belem-movil.jpg) | ![](https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/mejora-belem-torre-jeronimos-2026-11-01/docs/capturas/belem-2026-11-01/despues-belem-movil.jpg) |
