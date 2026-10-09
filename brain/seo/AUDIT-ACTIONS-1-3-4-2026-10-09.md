# Auditoría máxima: acciones 1, 3 y 4 publicadas (2026-10-09)

Aprobado por José el 9/10/2026 («Sí, publica todo»). Auditoría completa: `/workspace/auditoria-maxima.md` (fuera del repo).

## Acción 1: botón de reserva arriba

- Nuevo `position: 'after-summary'` en `src/data/blog-booking-placements.ts`. El bloque se pinta justo debajo de «Lo esencial» (`ArticleBody`). Si hay bloque arriba, desaparece el enlace «Si vas a reservar ↓».
- Páginas: `monasterio-jeronimos-entradas` y `sintra-desde-lisboa` (el bloque principal se ha subido, siguen siendo 2), `lisboa-card-vale-la-pena`, `tarjeta-navegante-lisboa` y `estacion-oriente-lisboa` (bloque nuevo arriba; se mantiene el de abajo, que cierra la cuenta del artículo).
- Medición: los bloques de arriba llevan `contentId` con sufijo `-arriba` (p. ej. `blog-sintra-desde-lisboa-sintra-palacio-pena-arriba`). Así se compara arriba con abajo en `affiliate_click`.
- `/que-ver-en-lisboa`: free tour por el centro bajo la respuesta corta, y Castelo + combo Jerónimos/Torre al final de «Imprescindibles». Tiqets lleva `tq_campaign=web_guia_que-ver-en-lisboa`. Se mantiene el widget de GetYourGuide del final.
- La resolución de bloques está en `src/lib/booking-blocks.ts`, que comparten el blog y las guías.
- Excepción documentada a la regla «no en la cabecera»: solo en páginas donde la siguiente decisión del lector es comprar.

## Acción 3: fichas /actividades y arreglos técnicos

- `seoTitle` en las 20 fichas (título absoluto, sin marca, ≤ 60 caracteres). «Horario» solo aparece donde la ficha da el horario: Oceanário, Cristo Rei y Senhora do Monte (24 h).
- `guide` en 19 fichas: un enlace visible «Guía completa →» al artículo del blog. Cristo Rei no tiene guía en el blog.
- Enlaces del blog a las fichas: Sintra, Jerónimos (Torre + Jerónimos), Baixa (Santa Justa, free tour), Alfama (Castelo, Santa Luzia, Portas do Sol), fado, tranvía 28, miradores (3), gastronomía (tasca), planes gratis (LX Factory, jardines, Eduardo VII) y Lisboa en pareja (barco). Ningún enlace hacia ni desde E-006/E-007.
- `fetchPriority="high"` en la imagen de `TourismBookingHero` (/comprar-entradas y /free-tours-lisboa). `priority` solo ya no lo emitía.
- Email del schema Organization: `contacto@` (antes `hola@`).
- og:image (`/og-default.jpg`) en /planifica-tu-viaje, /contacto, /faq y las 4 páginas legales.
- Contraste: nota del catálogo de /comprar-entradas a `text-text-secondary` 12 px; los enlaces del banner de cookies van subrayados.
- www → apex sigue en **307** y no se controla desde el repo. `www.estabaenlisboa.com` no está en los dominios del proyecto en Vercel. Para hacerlo 308 hay que añadirlo en Vercel → Domains como redirección permanente al dominio principal.

## Acción 4: títulos

- Blog: `getDocumentTitle()` quita « | Estaba en Lisboa» cuando el título con la marca supera 65 caracteres. E-006 y E-007 quedan congelados (`TITLE_FROZEN_SLUGS`).
- E-001 a E-005 solo pierden la marca; el texto del título es el mismo. Su lectura de CTR desde el 9/10 incluye ese cambio.
- `lisboa-cuando-llueve`: «Qué hacer en Lisboa cuando llueve: planes a cubierto» (antes tenía dos «|»).
- Títulos absolutos sin marca en /itinerarios, /que-ver-en-lisboa y /donde-comer-en-lisboa.
- Home: «Guía de Lisboa: qué ver, rutas y transporte | Estaba en Lisboa» (antes «Guía de Lisboa en español | Estaba en Lisboa»).

## Qué mirar

- A los 14 días finalizados: clics de afiliado `-arriba` frente al bloque de abajo, por artículo; CTR de la Home y de las fichas en Search Console.
- Si un bloque de arriba no tiene clics y la lectura empeora (scroll/tiempo), se vuelve a bajar.
