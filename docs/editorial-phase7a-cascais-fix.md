# Fase 7A — el enlace de Cascais describe su destino

20/10/2026. José indica «ok continúa» tras priorizar la corrección puntual de Cascais. Base `6fe7b9b` en PR #113. Producción sigue en `5ad2c40`; trabajo únicamente para Preview y revisión.

## Diagnóstico → evidencia → oportunidad

HECHO: el último enlace del cuerpo de `/blog/que-ver-cascais-desde-lisboa` presenta una actividad organizada/opción comercial. Su destino `/actividades/cascais-cabo-da-roca` explica cómo combinar tren y autobús por libre y no tiene bookingUrl. La inspección de ambas páginas y el código de activities está en [Fase 7](editorial-phase7-consolidation-review.md), con captura del texto anterior y evidencia de producción. HIPÓTESIS: la promesa comercial confunde a quien busca continuar la planificación por libre. No hay medición de clic de ese enlace ni prueba de que explique un cambio de tráfico.

## Propuesta → razón → decisión

Se modifica solo la explicación y la etiqueta del enlace final, conservando href y posición:

| | Explicación | Etiqueta |
| --- | --- | --- |
| Antes | Si prefieres resolver transporte y varias paradas costeras en una actividad organizada, revisa la opción comercial solo después de comparar el plan por libre. | Ver opción Cascais y Cabo da Roca |
| Candidato | Para añadir Cabo da Roca a tu día en Cascais, esta ficha explica cómo combinar tren y autobús por libre. | Cómo ir a Cascais y Cabo da Roca por libre |

DECISIÓN: que el enlace anuncie el contenido que realmente abre. PREFERENCIA: descripción directa del siguiente paso, sin inducir una reserva inexistente. Impacto esperado: coherencia del recorrido editorial. Esfuerzo bajo; riesgo limitado al texto del enlace, verificable al abrir la ficha. No se promete mejora de CTR orgánico ni posiciones.

## Conservación y límites

Sin cambios de URL, intención, href, metadata, título/H1, canonical, robots, schema, imágenes, horarios, precios, fuentes, FAQ, afiliados, diseño o ficha. No renovar dateModified/fechaActualizacion por esta aclaración. No revalidar ni presentar como nuevos los datos fechados de CP/Carris: esta corrección describe la función de la ficha. Cascais mantiene REVIEW para la decisión sobre el cluster; esta mejora no autoriza retirar ni redirigir la ficha. D-055 mantiene separadas las otras cuatro URLs.

Archivo de aplicación: `src/app/[locale]/blog/[slug]/page.tsx`, un bloque de enlace. Memoria: D-056, CURRENT-STATE, este informe y nota del manifest. Las decisiones de las 128 filas siguen iguales. Contrato de 16 redirects, dos fusiones aplazadas y ocho noindex intacto; sitemap de 98 URLs y robots sin cambios. No se cambia Clerk ni otras páginas protegidas.

## Baseline y prueba

GSC/Windsor hasta 17/10, [snapshot](../brain/data/CONSOLIDATION-SEARCH-2026-10-20.json): artículo Cascais 0 clics/7 impresiones/CTR 0 %/posición 8,57 en 28 días, frente a 0/24/0 %/21,79. Ficha 0/5/0 %/7,60 frente a 0/8/0 %/7,25. Volumen insuficiente para atribuir efectos; todo precede a producción del 20/10. No nueva extracción ni lectura prematura de resultados del candidato.

Validación local nueva: build correcto (137 páginas), TypeScript correcto, lint cero errores y un warning previo de analyticsParams en ItineraryContextualCta.tsx:84. Blog: 828 invariantes y 97 enlaces internos sin rotos. Migración: 1.426 comprobaciones sin fallos, 98 sitemap, 106 páginas y 16 redirects. Sitemap: 64/64. [Resumen local](qa/2026-10-20/phase7a-local-summary.json).

Comparación del HTML con el baseline de producción: siete controles correctos; título, H1, metadata, canonical, JSON-LD y hrefs intactos, resto del texto de main preservado. [Comparación](qa/2026-10-20/phase7a-dom-comparison.json). No se relaja el contrato estricto de plantilla para admitir una edición de contenido: ese contrato se usa para refactors de presentación y no se declara pasado en este lote. Se usan invariantes del blog y comparación acotada al cambio editorial.

Navegador local: artículo y ficha en 390/412/768/1440 px, ocho vistas sin overflow/H1 duplicada; clic en el enlace nuevo abre la ficha prevista. [Matriz](qa/2026-10-20/phase7a-local-responsive.json).

## Cierre de Preview — 21/10/2026

Preview READY del código **9568ed6eaa98b089549b24d46271f3186d1cbced**, deployment **dpl_6py1Yu7FDW8edLcToJr9Uo2Ho6YP**, entorno Preview (`target:null`): https://portugal-autentico-v2-84xbmfd5a-estabaenlisboa.vercel.app . Enlace temporal de acceso entregado en conversación; token/cookie fuera de Git. Los cinco checks del SHA pasan, incluido TypeScript. No se presenta el workflow SEO como ejecutado si no se activa por sus paths.

QA remota: **1.328 controles de migración, cero fallos**, 98 URLs sitemap, 106 páginas y 16 redirects. La diferencia con 1.426 local son 98 comprobaciones de cabeceras que el smoke omite en Preview; HTML robots/canonical y decisiones se comprueban. No se altera la protección/noindex de plataforma. Comparación DOM remota: siete controles correctos frente al baseline de producción, con la misma excepción editorial de dos textos. Navegador: ocho vistas remotas de artículo/ficha en los cuatro tamaños, sin overflow/H1 duplicada; clic esperado y navegación terminada en la ficha. [Resumen](qa/2026-10-20/phase7a-preview-summary.json), [DOM](qa/2026-10-20/phase7a-preview-dom-comparison.json), [vistas](qa/2026-10-20/phase7a-preview-responsive.json), [captura móvil](qa/2026-10-20/phase7a-preview-mobile.png). Evidencia agrupada con la carpeta de inicio del lote 20/10; cierre el 21/10.

Sin Lighthouse nuevo ni prueba completa de accesibilidad. Sin merge ni despliegue a producción. Los commits de cierre solo documentan el mismo código. Próximo lote: correcciones puntuales de Festivales con fuentes de la edición correspondiente; no reescritura general ni fusión con Novedades.
