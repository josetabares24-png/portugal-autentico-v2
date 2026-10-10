# Guía de entradas del Castelo de São Jorge — 2026-10-10

Publicada con aprobación de José. Experimento [[05-EXPERIMENTS]] E-015.

## Qué se hizo

- /actividades/castelo-sao-jorge se convierte en guía de entradas en la misma URL. No se abre artículo en /blog: la ficha ya estaba indexada y dos páginas competirían por la misma búsqueda.
- Datos en `src/data/ticket-guides.ts` (`TICKET_GUIDES`). Si una ficha tiene guía, `actividades/[slug]/page.tsx` la pinta con los componentes del blog (ArticleHero con miga «Actividades», ArticleBody, ArticleToc, fuentes, FAQ). El resto de fichas no cambia.
- Título: «Castillo de San Jorge: entradas, precio y horario 2026». FAQPage, Article, TouristAttraction y BreadcrumbList en JSON-LD.
- Sitemap: la ficha lleva `lastModified` de la guía y prioridad 0.8.
- Un solo bloque de reserva (GetYourGuide gyg.me/xsuIYU11, partner_id=J2Z24GU, entrada con audioguía), tras la sección de precios. No hay producto de Tiqets verificado para el castillo.
- Enlaces internos: parada del castillo en Lisboa en 2 días (campo nuevo `guide` en TimelineStop), Alfama, y una línea en /comprar-entradas que enlaza las tres guías de entradas (Castelo, Jerónimos, Pena).
- «gratis hasta 12» corregido a «menores de 12» (el oficial dice «crianças menores de 12 anos») en bookings.ts y en el itinerario de 2 días.

## Datos verificados en castelodesaojorge.pt el 10/10/2026

Adulto 17 €; 13–25 años 8,50 €; >65 14 €; necesidades específicas 12 €; menores de 12 y Lisboa Card de adulto, gratis. BOL es la única venta online autorizada. Verano (1/3–31/10) 9–21 h, última entrada 20:30, murallas y torres cierran entre 18 y 21 h según la luz. Invierno 9–18 h, última 17:30, murallas 17:30. Cierra 1/1, 1/5, 24, 25 y 31/12 (el 31 las páginas oficiales no coinciden: cerrado / desde 12:30 / cierra 13:00). Cámara oscura y núcleo arqueológico solo con visita guiada incluida.

## Pendiente

- Quitar el aviso de la huelga del 17/10/2026 después de esa fecha (`ticket-guides.ts`).
- Revisar si el museo del castillo ha reabierto y quitar el aviso.
- Repasar precios en enero de 2027.
- Lo que se quitó del borrador por no estar verificado: «una hora de cola en agosto», «plazas limitadas», opiniones sobre la luz.
