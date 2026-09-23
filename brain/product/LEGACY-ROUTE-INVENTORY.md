# Inventario de producto y rutas legacy

Actualizado: **2026-09-23**

Objetivo: decidir qué merece espacio, inversión o retirada sin confundir "quitar del menú" con "borrar la URL".

## Resumen de evidencia

Search Console 90 días:
- Blog: 9.880 impresiones / 85 clics
- Itinerarios: 952 / 14
- Actividades: 682 / 3
- Free Tours: 86 / 0
- Comprar entradas: 7 / 0
- Planifica: 13 / 0
- Calculadora: 5 / 0

GA4 90 días:
- /free-tours-lisboa — 37 sesiones / 23 affiliate_click registrados
- /itinerarios — 84 sesiones
- /itinerarios/lisboa-1-dia-lo-esencial — 61 sesiones
- /itinerarios/lisboa-3-dias-premium — 28 sesiones / 1 affiliate_click
- /actividades — 49 sesiones
- /comprar-entradas — 24 sesiones / 4 affiliate_click
- /planifica-tu-viaje — 32 sesiones / 1 form_start
- /calculadora-presupuesto-lisboa — 19 sesiones / 1 form_start / 1 affiliate_click
- /pack-completo — 9 sesiones

Los eventos de analítica requieren consentimiento explícito, así que los recuentos absolutos de clics/conversión son incompletos.

## Clasificación actual

| Superficie | Estado | Decisión actual | Motivo |
|---|---|---|---|
| Blog | CORE | INVERTIR | principal motor de adquisición |
| /free-tours-lisboa | KEEP | mantener visible y medir | señal comercial más clara |
| /itinerarios | MEASURE | mantener URL, sin volver al menú principal | tiene demanda y tráfico; negocio no demostrado |
| /itinerarios/lisboa-1-dia-lo-esencial | KEEP | proteger URL | tiene señal orgánica propia |
| /itinerarios/lisboa-3-dias-premium | MEASURE | mantener mientras medimos | posición/search + 1 clic afiliado, volumen pequeño |
| /actividades | DEMOTED | no promover globalmente | 20 URLs reparten 682 impresiones y solo 3 clics orgánicos |
| /comprar-entradas | DEMOTED | candidato a fusionar/retirar, no ejecutar aún | casi sin adquisición orgánica pero sí algunos clics afiliados |
| /planifica-tu-viaje | DEMOTED | medir CTA antes de decidir | recibe tráfico interno, solo 1 form_start medido |
| /calculadora-presupuesto-lisboa | DEMOTED | candidato a integrar en contenido | poca adquisición; señal de uso demasiado pequeña |
| /pack-completo | RETIRED | redirect permanente → /blog | 0 impresiones/clics en Search Console en 12 meses; tráfico mínimo; duplicaba el índice editorial y el hub de itinerarios |
 
## Conflicto detectado

La navegación principal ya despromociona Itinerarios, pero la Home actual todavía contiene dos CTAs visibles hacia `/itinerarios`.

Todos los artículos terminan con un CTA a `/planifica-tu-viaje`.

Eso no se cambia todavía porque desde 2026-09-23 ya medimos esos placements con `select_content`.

## Regla de decisión

Para retirar, sustituir o promover una superficie necesitamos responder:

1. ¿trae usuarios por sí misma?
2. ¿recibe tráfico interno?
3. ¿qué hace el usuario después?
4. ¿produce clic, lead o ingreso?
5. ¿hay un destino editorial mejor?
6. ¿qué SEO equity perderíamos o consolidaríamos?

## Próxima revisión

Comparar placements internos cuando haya:
- 7 días completos de datos, o
- volumen suficiente para distinguir una tendencia.

La primera decisión esperada será sobre los CTAs globales hacia:
- Itinerarios
- Planifica tu viaje
- Free Tours

No ejecutar una retirada masiva antes de esa lectura.


## Retirada confirmada — /pack-completo

**Fecha:** 2026-09-23  
**Decisión:** RETIRE → redirect permanente a `/blog`.

Evidencia previa:
- Search Console 90 días: 0 filas para la URL.
- Search Console 12 meses: 0 filas para la URL.
- GA4 90 días: 8 sesiones sin referrer registradas, 1 sesión desde `/itinerarios`; existe además una fila de self-referrer que no debe sumarse como usuario único.
- Único enlace interno confirmado en la revisión: `/itinerarios` → “Todas las guías gratuitas”.
- La página repetía destinos que ya viven en `/itinerarios` y `/blog`.

Implementación:
- redirect permanente `/pack-completo` → `/blog`;
- variantes de locale también llegan directamente a `/blog` para evitar cadenas;
- retirada del sitemap;
- enlace de `/itinerarios` actualizado para apuntar directamente a `/blog`;
- archivos de la ruta retirados del árbol público.

No se interpreta esta retirada como experimento SEO de crecimiento. Es consolidación de producto con riesgo orgánico muy bajo según la evidencia disponible.
