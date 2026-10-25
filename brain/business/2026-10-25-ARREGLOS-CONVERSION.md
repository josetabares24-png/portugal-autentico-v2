# Arreglos de conversión tras la auditoría — 25/10/2026

Rama local `feat/guias-entradas-2` (sobre origin/main ffe27e6). Sin push ni despliegue: José aprobó «soluciona todo» y se le enseña antes de publicar (L-003). Auditoría de origen: `/workspace/auditoria-conversion-2026-10-25.md` (fuera del repo).

## Paso 1 — Enlaces de GetYourGuide que abrían una búsqueda (D-074)

Comprobado en Chrome el 25/10/2026: con `partner_id=J2Z24GU`, estos enlaces terminan en `getyourguide.com/s?…&et=<id>` (listado genérico) y no en la ficha. Con otro partner_id la misma ficha sí abre. El crucero (t410732) y la Nochevieja (t438806) abren bien.

Cambiado a Tiqets (partner `estaba_en_lisboa-189233`; la campaña la pone cada página: `web_blog_<slug>`, `web_guia_<slug>`, `web_itinerario_<slug>`):

| Producto | Antes | Ahora |
|---|---|---|
| Oceanário (artículos y guía) | gyg.me/OIHaINA6 | Tiqets p975260 (proveedor: Oceanário de Lisboa S.A.) |
| Castelo de São Jorge (artículos, guía, itinerarios, hub) | gyg.me/xsuIYU11 y gyg.me/C9HzQNsh | Tiqets p1106063, entrada + audioguía en inglés, cancelación gratis hasta 24 h antes (proveedor Planaltos e Enseadas Lda) |
| Palacio da Pena (sintra-desde-lisboa, itinerario de 3 días) | gyg.me/9i00hN0O | Tiqets p1120392 |

- Los itinerarios ahora etiquetan Tiqets con `web_itinerario_<slug>` (antes usaban la campaña genérica del producto).
- `tiqets-api.ts`: el Castelo entra en la lista de productos con precio en directo.
- Textos de las guías del Castelo y del Oceanário: «GetYourGuide» → «Tiqets», con las condiciones de cada ficha de Tiqets.
- Todas las URL finales: 200 con curl y título de la ficha correcta, sin redirección, `partner` y `tq_campaign` intactos.

Se quedan en GetYourGuide (no hay producto equivalente verificado en Tiqets o sería otro tour distinto; partner_id J2Z24GU sin tocar):
- Excursión Sintra + Regaleira + Cabo da Roca + Cascais (t440176): /comprar-entradas, palacio-da-pena-entradas, sintra-desde-lisboa, excursiones-desde-lisboa, ficha sintra-dia-completo.
- Fado (t887435, gyg.me/jH9FtGc7 y gyg.me/8aL5dndR): ficha fado-en-alfama, donde-escuchar-fado-autentico, /comprar-entradas.
- Tour gastronómico (t603, gyg.me/9USjIETP y gyg.me/jO1KCAoG): time-out-market-lisboa, /comprar-entradas.
- Fátima, Nazaré, Batalha y Óbidos (t67767): obidos-vila-natal.
- Widget de GYG con el tour 424720 en `traveler-guide-preview.ts` (/guia/que-visitar): no está en producción (redirige a /que-ver-en-lisboa).

Pendiente de José: preguntar al soporte de GYG Partner si esas actividades están excluidas de su cuenta (`et=`) y si comisionan.
