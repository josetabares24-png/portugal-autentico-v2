# Web Quality Bot: integración inicial (2026-10-28)

**Estado:** CANDIDATO EN PR / NO FUSIONADO. Auditoría inicial de observación disparada en PR; resultados pendientes al redactar.

## Diagnóstico y evidencia

- Repositorio base: `josetabares24-png/portugal-autentico-v2`, `main` en `86d9d7ded5e33691bcd08654a8ef6e5ee3865a4f` al iniciar.
- Ya existe `.github/workflows/seo-smoke.yml` con `npm run smoke:sitemap` y pruebas de TypeScript. `scripts/smoke-sitemap.mjs` verifica el sitemap servido y sus respuestas/canonicals/noindex/redirects.
- Mente Lisboa registra 106 URLs de sitemap y 16 redirects en la última QA pública de ByBoat, pero **esa cifra no es un resultado del nuevo bot**.
- No había automatización de auditoría masiva de enlaces salientes ni puntuaciones Lighthouse por plantilla dentro de este repositorio (árbol de `main` inspeccionado).
- El último GSC válido disponible en memoria llega al 17/10; no usar cifras bloqueadas del conector como si fueran nuevas mediciones.
- Restricción LOCKED: no tocar contenido o indexación sin datos/decisión, no rediseñar, rama/PR y memoria, proteger observaciones SEO activas.

## Decisión operativa

Añadir **Linkinator 8.1.0** y **Unlighthouse 0.19.1** como ejecutables externos **solo en GitHub Actions**, versiones fijadas, sin dependencias ni bundle en Next. Evitar una batería permanente de seis herramientas.

- Lunes 06:25 UTC: Linkinator desde sitemap, enlaces internos/externos y warnings de redirects/HTTP.
- Día 1 de mes 06:50 UTC: además Unlighthouse móvil con muestreo inteligente por plantilla.
- Disparo manual de cada modalidad después de publicar el workflow en `main`.
- En cada ejecución: `summary.md`, JSON y logs como artifact 30 días. Fallos del escáner son fallos, no "todo verde".
- PR que toque el propio bot: validar sintaxis, pruebas del generador y ejecutar una **línea base de solo lectura no bloqueante**; no se audita en PRs de código ajeno.
- Umbrales rojo/naranja/verde son clasificación preliminar para triage, no promesa de mejora de Google.
- El workflow es de solo lectura para el repositorio y el sitio; no manda correo, no cambia web, no hace remediación automática.

## Hipótesis / riesgos

**Hipótesis:** errores repetidos de plantilla, enlaces muertos o páginas móviles lentas pueden explicar parte de la fricción, pero aún **no están demostrados**.

**Riesgos:** falsos positivos de afiliados o protecciones anti-bot, cambios de puntuación de laboratorio, coste de minutos de GitHub Actions, limitaciones de muestreo y fallos de Chrome/instalación de herramientas. Por eso no se aprueba un gate de puntuaciones hasta ver la línea base.

## Prueba y siguiente acción

1. Validar la PR con el workflow de `node --check` + `--self-test` y el TypeScript CI existente.
2. Revisar diff y no fusionar a ciegas; no hay cambio visual ni de producción de la aplicación.
3. Revisar la primera línea base de la PR y repetir manualmente **links-and-performance** tras merge para verificar la programación.
4. Leer resumen, JSON y logs; distinguir fallos de red/terceros frente a errores internos.
5. Crear un backlog de causas verificadas por URL/plantilla y priorizar **una intervención pequeña** sin tocar URLs protegidas sin consulta de GSC.

Documentación: [Web Quality Bot](../../docs/web-quality-audit.md).

## Primera ejecución real observada — 2026-10-28

Evidencia: [Actions #40786457887](https://github.com/josetabares24-png/portugal-autentico-v2/actions/runs/40786457887), artifact `web-quality-40786457887`; no deployment ni cambio de frontend.

**Unlighthouse móvil:** 35 rutas de muestra, rendimiento mínimo0,82 (donde-alojarse-en-lisboa), promedio0,949; accesibilidad mínima0,93; SEO y buenas prácticas1,0 en las 35. Estos son scores sintéticos, no CWV de campo; muestra incompleta de las URLs indexables.

**Linkinator:** 41 filas marcadas como BROKEN con `verbosity ERROR`: 36 HTTP403 externos (21 Stay22, 9 GetYourGuide/gyg.me, además prensa y museos), 2 HTTP404 del mismo URL `www.maat.pt/pt/visitar` desde `/blog/lisboa-en-enero` y `/blog/nochevieja-lisboa`, 2 errores de red/status0 (ASAE y Mercado de Arroios), 1 HTTP523 (Carris Metropolitana). Cero destinos internos propios. El JSON filtrado no demuestra cobertura total ni 41 roturas para humanos.

El sitio oficial del museo presenta actualmente `https://www.maat.pt/pt/planear-visita`. Candidato a corrección puntual, no incluida en esta PR de instrumentación.

**Aprendizaje de instrumentación:** el primer workflow guardó resultados pero omitió artifacts porque la carpeta empezaba con punto; corregido con `include-hidden-files: true` y salida de summary en logs. Posteriormente se modificó el generador para diferenciar bloqueos 403/429, 404/410 y errores de red, y se activó `verbosity INFO` en el siguiente escaneo para no confundir incidencias reportadas con total de enlaces comprobados.

**Decisión:** Mantener fase1 en observación; ningún redirect/SEO o afiliado se cambia por un 403 de crawler. No se instala Lighthouse CI hasta tener baseline comparable y revisar coste.
