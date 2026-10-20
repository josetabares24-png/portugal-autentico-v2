# Fase 7 — consolidaciones revisadas, sin migraciones nuevas

## Baseline y autorización

José indica «sigue» después de publicar PR #112. La aplicación está en producción `5ad2c4083934c2f35e81aba12275566341f219ee`, Vercel `dpl_BdGSFAuvGY1dudTfLHSU6MYdoWes`, READY, desde 20/10/2026. [Registro definitivo de publicación y QA](https://github.com/josetabares24-png/portugal-autentico-v2/pull/112). La autorización de ese release no autoriza publicar Fase 7. Rama nueva `editorial-rebuild-phase-7` desde ese merge.

## Diagnóstico → evidencia → oportunidad

Revisados completos los siete casos: Restaurantes/Pareja, Novedades/Festivales, Monumentos/Qué ver, Bacalhau/Gastronomía, Vinos/Gastronomía, cluster Pastéis y Cascais. Once cuerpos de blog contando el alias retirado, un pilar y dos fichas. Crawl real: 98 sitemap 200, un alias adicional 308 directo. Trece vivas: canonical propio, H1 única y schema parseable. Grafo interno distingue main de footer; no hay análisis de backlinks externos.

Los destinos de las dos fusiones expresas están sanos técnicamente, pero no responden todo el contenido de las fuentes. Pareja delega explícitamente los seis restaurantes; Festivales no cubre transporte, museos o alojamiento de Novedades. Dudas de contenido previas en Festivales/Gastronomía se conservan; nueva comprobación de Vinos distingue Vinho Verde de consumo joven obligatorio. Cascais enlaza una ficha de transporte público describiéndola como opción organizada/comercial.

## Decisión

D-054: mantener dos WAIT con excepción razonada; no revocar la orden de migración ni sustituir destinos a criterio del agente. No transformar REVIEW en autorización de 301. Artículo de Cascais recomendado para intención general; ficha conserva aportación Cabo da Roca hasta decidir alcance. Artículo Pastéis recomendado como referencia editorial sin retirar ficha ni reactivar el 308 de mejores natas. Bacalhau/Vinos conservan intención específica mientras se resuelven dudas. Qué ver recomendado como selección general, sin mover Monumentos.

[Informe con comparación y mapa de conservación](../../docs/editorial-phase7-consolidation-review.md). Incluye propuesta concreta para incorporar seis restaurantes si José mantiene esa fusión y condiciones antes de ejecutar cualquiera de las dos.

## Métricas y límites

[GSC/Windsor 20/10](../data/CONSOLIDATION-SEARCH-2026-10-20.json), web, no fresh, corte 17/10. 28 días: 125 clics/10.023 impresiones/1,25 %/9,48 frente a 55/6.565/0,84 %/12,80. 7 días: 33/2.989/1,10 %/8,86 frente a 40/2.955/1,35 %/10,25. 90 días: 225/21.154/1,06 %/11,71 frente a 29/3.468/0,84 %/34,25. Todo precede a la publicación: no atribución. SF en candidatas no implica cero demanda. Sin coincidencias de consultas en las filas disponibles, pero cobertura insuficiente para descartar canibalización. GSC Wizard no corroboró: error de list_sites.

## Impacto esperado → esfuerzo → riesgo → prueba

Impacto de fusionar en SEO todavía incierto. Oportunidad concreta: resolver promesas incoherentes y mantener datos factuales sin duplicar errores. Esfuerzo bajo para enlace Cascais, medio para revisar mapas/contenido. Riesgo: perder respuesta específica por una reducción de URLs sin equivalencia ni señales suficientes.

26 vistas móvil/PC sin overflow. Cero cambios de aplicación/URL/SEO/Clerk. Conservados 27 perfiles, 16 redirects, ocho noindex, dos WAIT y 98 sitemap. Integridad y cifras se validan en la evidencia del lote; resultados de build de producción son históricos, no nuevas pruebas. Sin Lighthouse nuevo ni cambios de producción.

Siguiente acción: resolver el alcance de las dos WAIT con el informe concreto antes de migrar. No continuar navegación/Home automáticamente.
