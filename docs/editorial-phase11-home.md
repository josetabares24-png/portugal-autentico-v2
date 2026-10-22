# Fase 11 — Home útil en móvil, y revisión de Fase 12

Fecha: 22/10/2026. Rama `editorial-rebuild-phase-7`, PR #113 en borrador. Baseline de aplicación 93c7a5a (15e1ebe solo documentaba ese código). José pide corregir el bloque de Portugal, recuperar Free tours y seguir las demás fases. Esto autoriza continuar el candidato, sin aprobar su publicación.

## Diagnóstico y criterio

La captura de José muestra cuatro tarjetas blancas repetidas, iconos decorativos y H2 grandes en cursiva en `/portugal`. D-062 sustituye ese bloque por una lista con separadores y encabezados de menor tamaño, rectos; mismos cuatro destinos y descripciones. También modera el H2 de la siguiente sección. No cambiar H1, metadata, intención o contenido factual. Free tours se había relegado a recursos de Planifica, pie del menú móvil y Footer: vuelve al primer nivel en ambos menús, como enlace ordinario. Se conserva su landing completa y sus accesos de Home. No más CTA afiliados.

La Home conserva la marca y una estructura útil existente, pero en móvil antepone tres reservas al directorio de ocho guías; sus ocho portales miden 250 px cada uno. A 390×844, el directorio empieza en y≈1.260. No hace falta reconstruir la Home ni añadir una nueva arquitectura: adelantar las guías, reducir las superficies fotográficas repetidas y mantener las fotos como orientación.

## Fase 11 implementada

- Conservar foto, frase H1, descripción y dos salidas del hero. Altura móvil de 58svh con límites 460–540 px; rangos desktop anteriores conservados. El texto debe caber al revisar anchuras, sin ocultar botones.
- Guías prácticas antes de reservas. Ocho destinos y sus textos/fotos/ALT intactos, con enlaces medidos por los mismos `contentType`/`contentId`. En móvil/tablet: miniatura y texto, superficie completa pulsable; en desktop se mantiene la composición de dos fotografías principales y seis menores. Sin acordeones ni información que dependa de hover.
- Reservas/free tours siguen disponibles después del directorio y en el hero/nav; no enlaces afiliados nuevos en Home. No modificar el servicio ni las condiciones de los proveedores.
- Una selección pequeña para otoño/invierno usa títulos reales de Lluvia, Navidad y Nochevieja desde blogPosts. No reescribir esas páginas protegidas, prometer programas confirmados o cambiar sus fechas. Selección manual: revisar antes de publicar y al cambiar de estación.
- Historias mantiene sus tres artículos, imágenes y orden. Autor y método continúan enlazados mediante «Cómo trabajo».

No nuevas URLs, categorías, biblioteca, dependencia, búsqueda ficticia, popups o textos de artículos. No cambios de logo o estética global. La preferencia de José por menos tarjetas/titulares desproporcionados se aplica a las superficies revisadas; no escalar un cambio CSS global a las 110 páginas.

## Fase 12 — autoridad existente conservada

Revisados `/sobre-nosotros`, su perfil JSON-LD, biografía y enlace de autor de Home. Identifica a José como autor/editor, fecha desde 2023, relación con Lisboa, método editorial y contacto. La frase biográfica coincide con `brain/content/2026-10-09-VOZ-JOSE.md`, respuestas proporcionadas por José; no inventar credenciales o experiencias. La foto en Oporto tiene pie explícito y su uso discreto se documentó el 9/10. Se conserva esta página y sus metadatos/schema sin reescribir por uniformidad; no renovar fechas por CSS. Esta revisión del perfil no certifica todos los hechos de los artículos REVIEW ni autoriza ampliar sus claims.

## Archivos y contratos

Aplicación: `src/app/[locale]/page.tsx`, `src/components/home/TravelerDirectory.tsx`; corrección D-062 en Navbar, editorial-navigation y Portugal. HomeEssentials, perfil de autor, landing Free tours, artículos/datos y políticas SEO intactos. Metadata/H1/schema de Home comparados con el baseline por DOM: idénticos; ocho href del directorio idénticos. Sitemap, robots, 16 redirects, dos WAIT, canonicals, noindex y manifest sin cambios.

Pruebas: ampliar `smoke:editorial-navigation` para Free tours en ambos menús, guías antes de reservas, ocho destinos directos, autor/temporada, H1/canonical/schema. `smoke:free-tours` contenía una expectativa obsoleta de 20 fichas enlazadas: la política vigente ya redirige tres desde Fase 1. Corregir a 17 vivas y añadir comprobación de ausencia de esas tres fuentes; no reintroducir URLs retiradas ni relajar la prueba a «cualquier cantidad». Fallo inicial 10/11 documentado; después 12/12 local sin ID de afiliado. El modo local HTTP solo verifica el estado seguro de CTA inertes; comprobar la Preview con su configuración real antes de afirmar afiliación operativa.

## QA local

Build 137 páginas; TypeScript correcto; lint cero errores/un warning previo en ItineraryContextualCta.tsx:84. Navegación **171 controles**, 42 páginas, cero fallos; Free tours **12/12** sin ID local; sitemap **64/64**, 98 URLs; blog **828 invariantes**, 97 enlaces sin rotos. Migración **1.426** controles, 106 páginas, 113 enlaces internos únicos y 16 redirects.

A 390 px: inicio del directorio y≈555 frente a 1.260, accesos de 113–114 px frente a 250; son medidas de layout de ese viewport, no mejoras de CWV/conversión. Dieciséis vistas DOM (Home/Portugal/Free tours/autor × 390/412/768/1440), sin overflow ni H1 duplicada. Capturas y comparativa en `docs/qa/2026-10-22/phase11/`. No Lighthouse ni prueba completa con lector de pantalla; sin métricas nuevas de LCP/INP/CLS y sin atribuir efectos SEO.

## Review gate y siguientes fases

Preview y QA remota pendientes. Comprobar la navegación nueva, Free tours con proveedor real, ancla de guías, contraste/imagen cargada, orden, versión desktop y panel móvil antes de cierre. L-003 exige revisión visual del conjunto antes de merge. Producción queda intacta; no se autoriza ninguna fusión WAIT.

Fase 12 se conserva tras inspección, sin cambios de contenido. Fases 13–18 tienen checks parciales existentes y QA del candidato; no declararlas una auditoría integral terminada por pasar este smoke. Siguiente lote después de esta Preview: revisión transversal de schema, rendimiento medido y accesibilidad, manteniendo las URLs protegidas. El rollout de contenido de fases anteriores no se reinicia por cambiar Home.
