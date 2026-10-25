# SEO técnico: lastmod, títulos y metas (2026-10-25)

Rama local `fix/seo-tecnico` desde origin/main `240bfd2`, **sin publicar** (L-003). José: «Arregla todo» tras ver que 29 URL del sitemap no tenían fecha.

## 1. Sitemap: lastmod en las 29 URL que no lo tenían

- `src/app/sitemap.ts`: mapa `CONTENT_LAST_MODIFIED` con la fecha del último commit que cambió el texto de cada página o de sus datos. No cuentan los commits que solo tocaron hreflang (4bffd9c), imagen OG o parámetros de afiliado. Fecha fija; nunca `new Date()` (docs/seo-migration.md: no se renuevan fechas sin cambio editorial).
- Home 22/10 (5b0e210, guías prácticas en móvil). Itinerarios 9/10. Calculadora 9/10 (e756ea5). Sobre nosotros 9/10 (de8063b). Contacto 8/10: el historial de git empieza ese día (3bbf60b), no hay fecha anterior demostrable. 1 día 9/10, 2 días 10/10 (08f3e5e), 3 días 14/10 (d2b5ec7, Regaleira).
- 14 fichas de /actividades sin guía de entradas: 9/10, último cambio de su bloque en `activities.ts` (git blame). El aviso de afiliado del 25/10 en crucero y fado es plantilla, no texto de la ficha.
- 6 páginas inglesas: 23/10 (PR #116).
- /blog: fecha de su artículo más reciente, calculada de los datos (hoy 25/10, Lisboa en enero).
- Las 76 URL que ya tenían fecha no cambian (comparado XML de main y de la rama).
- `smoke-sitemap`: tres controles nuevos (todas con lastmod, ninguna inválida o futura, no más de la mitad con la fecha del día).
- Cuando se cambie el texto de una de esas páginas, hay que actualizar su fecha en el mapa.

## 2. Títulos ≤ 60 caracteres

- Blog: `MAX_TITLE_LENGTH` 65 → 60 en `getDocumentTitle()`. El texto del título no cambia; solo se quita « | Estaba en Lisboa» si no cabe. Café y comer barato siguen congelados (E-006, E-007).
- Inglés: misma regla en `/en/[slug]`; la Pena lleva un `<title>` más corto que su H1 (`SEO_TITLES`). El H1 no cambia.
- Home, sobre nosotros, 1 y 2 días y /en: texto más corto, con marca (smoke-titles exige la marca una vez en las páginas fijas).
- Sin tocar: como-pagar-en-portugal (61, E-002, «no tocar durante observación»), donde-comer-barato-lisboa y donde-tomar-cafe-lisboa (E-007, E-006).

| URL | Antes | Después |
|---|---|---|
| / | Guía de Lisboa: qué ver, rutas y transporte | Estaba en Lisboa (62) | Lisboa: qué ver, rutas y transporte | Estaba en Lisboa (54) |
| sobre-nosotros | José Tabares: autor y guía local en Lisboa | Estaba en Lisboa (61) | José Tabares: autor y guía en Lisboa | Estaba en Lisboa (55) |
| itinerarios/lisboa-1-dia-lo-esencial | Qué ver en Lisboa en 1 día: itinerario y mapa | Estaba en Lisboa (64) | Qué ver en Lisboa en 1 día: ruta y mapa | Estaba en Lisboa (58) |
| itinerarios/lisboa-2-dias-completo | Lisboa en 2 Días: Itinerario Completo 2026 | Estaba en Lisboa (61) | Lisboa en 2 días: itinerario completo | Estaba en Lisboa (56) |
| blog/metro-lisboa-guia | Metro de Lisboa: horario, mapa y billetes 2026 | Estaba en Lisboa (65) | Metro de Lisboa: horario, mapa y billetes 2026 (46) |
| blog/lisboa-en-7-dias | Lisboa en 7 días: cómo organizar la semana | Estaba en Lisboa (61) | Lisboa en 7 días: cómo organizar la semana (42) |
| blog/lisboa-en-pareja | Lisboa en pareja: qué hacer y mejores planes | Estaba en Lisboa (63) | Lisboa en pareja: qué hacer y mejores planes (44) |
| blog/que-hacer-gratis-en-lisboa | Qué hacer gratis en Lisboa | Planes útiles | Estaba en Lisboa (61) | Qué hacer gratis en Lisboa | Planes útiles (42) |
| blog/mejores-miradores-lisboa | Mejores miradores de Lisboa: cuáles elegir | Estaba en Lisboa (61) | Mejores miradores de Lisboa: cuáles elegir (42) |
| blog/errores-turistas-lisboa | 15 errores al visitar Lisboa y cómo evitarlos | Estaba en Lisboa (64) | 15 errores al visitar Lisboa y cómo evitarlos (45) |
| blog/mejor-epoca-visitar-lisboa | Mejor época para visitar Lisboa: clima y meses | Estaba en Lisboa (65) | Mejor época para visitar Lisboa: clima y meses (46) |
| blog/restaurantes-romanticos-lisboa | Restaurantes románticos en Lisboa: 6 opciones | Estaba en Lisboa (64) | Restaurantes románticos en Lisboa: 6 opciones (45) |
| blog/que-comprar-lisboa-souvenirs | Qué comprar en Lisboa: souvenirs y regalos | Estaba en Lisboa (61) | Qué comprar en Lisboa: souvenirs y regalos (42) |
| blog/historia-de-lisboa | Historia de Lisboa: de Olisipo al siglo XXI | Estaba en Lisboa (62) | Historia de Lisboa: de Olisipo al siglo XXI (43) |
| blog/novedades-lisboa-2026 | Lisboa 2026: Todas las Novedades para Viajeros | Estaba en Lisboa (65) | Lisboa 2026: Todas las Novedades para Viajeros (46) |
| blog/lisboa-vs-porto | Lisboa vs Porto: diferencias y cuál elegir | Estaba en Lisboa (61) | Lisboa vs Porto: diferencias y cuál elegir (42) |
| blog/gastronomia-portuguesa-guia | Gastronomía portuguesa: qué comer en Lisboa | Estaba en Lisboa (62) | Gastronomía portuguesa: qué comer en Lisboa (43) |
| blog/fado-historia-origen | Fado: significado, origen e historia en Lisboa | Estaba en Lisboa (65) | Fado: significado, origen e historia en Lisboa (46) |
| blog/mouraria-barrio-guia | Mouraria en Lisboa: qué ver, historia y ruta | Estaba en Lisboa (63) | Mouraria en Lisboa: qué ver, historia y ruta (44) |
| blog/tram-28-historia-guia | Tranvía 28 de Lisboa: ruta, paradas y consejos | Estaba en Lisboa (65) | Tranvía 28 de Lisboa: ruta, paradas y consejos (46) |
| en | Lisbon travel guides: transport, routes and tickets | Estaba en Lisboa (70) | Lisbon guides: transport, routes, tickets | Estaba en Lisboa (60) |
| en/lisbon-airport-to-city-centre | Lisbon Airport to the city centre: Metro, taxis and apps | Estaba en Lisboa (75) | Lisbon Airport to the city centre: Metro, taxis and apps (56) |
| en/lisbon-metro-guide | Lisbon Metro: tickets, lines, opening hours and the airport | Estaba en Lisboa (78) | Lisbon Metro: tickets, lines, opening hours and the airport (59) |
| en/lisbon-3-day-itinerary | Three days in Lisbon: a route with time to enjoy it | Estaba en Lisboa (70) | Three days in Lisbon: a route with time to enjoy it (51) |
| en/pena-palace-tickets | Pena Palace tickets: choose the visit before choosing the time | Estaba en Lisboa (81) | Pena Palace tickets: choose the visit, then the time (52) |
| en/lisbon-free-walking-tours | Lisbon free walking tours in English: routes and dates | Estaba en Lisboa (73) | Lisbon free walking tours in English: routes and dates (54) |

## 3. Metas ≤ 155

Vinos, bacalhau y la ficha del free tour llevan `metaDescription` propia: el texto visible y las tarjetas no cambian. Calculadora y 3 días acortan su constante (también la usan OG y JSON-LD).

| URL | Antes (car.) | Después |
|---|---|---|
| calculadora-presupuesto-lisboa | 223 | Calcula cuánto puede costarte Lisboa según días, personas y visitas, con alojamiento y vuelos si ya los tienes. Da un rango, no un precio cerrado. (146) |
| itinerarios/lisboa-3-dias-premium | 169 | Ruta de 3 días por Lisboa: casco histórico, Belém y el río, más de 20 paradas con horas y mapa, y un tercer día para Sintra o para seguir en la ciudad. (151) |
| actividades/free-walking-tour-centro | 174 | Recorrido a pie por la historia de la Baixa y el Chiado con guías locales que viven de las propinas. Los horarios dependen de la fecha que elijas. (146) |
| blog/vinos-portugueses-guia | 171 | Vinho Verde, Oporto y tintos del Alentejo: qué estilo pedir en la carta, cómo pedir vino en Lisboa y qué comprobar antes de reservar una cata. (142) |
| blog/bacalhau-plato-portugal | 178 | Cómo un pescado que llega de Noruega acabó siendo el plato nacional de Portugal: 500 años de historia del bacalhau y las recetas que puedes probar. (147) |

## 4. Stay22 en inglés

No carga en /en: `Stay22Script` solo está en `src/app/[locale]/layout.tsx`. Es intencional según `docs/english-pilot-phase1.md` («Las páginas inglesas no cargan Stay22 al no ofrecer alojamiento»). En brain/ no constaba. Sin cambios.

## Pruebas (build local, Node 22)

Build, TypeScript, lint (0 errores, el warning de siempre en ItineraryContextualCta.tsx:84). Sitemap 67/67 (105 URL), migración 1.507, títulos 19/19, actividades 120/120, blog 840 invariantes, técnico 1.200, inglés 224, editorial-navigation, calculadora, free tours, Tiqets y pruebas unitarias correctos. traveler-guides: los mismos 3 fallos que main. `smoke-blog compare-protected`: solo cambian los 16 títulos y las 2 metas previstas; ningún cuerpo. smoke-editorial-template no se ejecuta: falta `.snapshots/editorial-phase2-base.json`, igual que en main.
