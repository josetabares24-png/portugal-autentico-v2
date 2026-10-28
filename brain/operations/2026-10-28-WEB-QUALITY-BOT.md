# Web Quality Bot: integración inicial (2026-10-28)

**Estado:** CANDIDATO EN PR / NO FUSIONADO. Auditoría real **pendiente** tras incorporación a `main`.

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
- PR de implementación: validar sintaxis y pruebas del generador; **sin escanear producción automáticamente por cada PR**.
- Umbrales rojo/naranja/verde son clasificación preliminar para triage, no promesa de mejora de Google.
- El workflow es de solo lectura para el repositorio y el sitio; no manda correo, no cambia web, no hace remediación automática.

## Hipótesis / riesgos

**Hipótesis:** errores repetidos de plantilla, enlaces muertos o páginas móviles lentas pueden explicar parte de la fricción, pero aún **no están demostrados**.

**Riesgos:** falsos positivos de afiliados o protecciones anti-bot, cambios de puntuación de laboratorio, coste de minutos de GitHub Actions, limitaciones de muestreo y fallos de Chrome/instalación de herramientas. Por eso no se aprueba un gate de puntuaciones hasta ver la línea base.

## Prueba y siguiente acción

1. Validar la PR con el workflow de `node --check` + `--self-test` y el TypeScript CI existente.
2. Revisar diff y no fusionar a ciegas; no hay cambio visual ni de producción de la aplicación.
3. Tras aprobación e incorporación del workflow, ejecutar manualmente **links-and-performance** para la primera línea base.
4. Leer resumen, JSON y logs; distinguir fallos de red/terceros frente a errores internos.
5. Crear un backlog de causas verificadas por URL/plantilla y priorizar **una intervención pequeña** sin tocar URLs protegidas sin consulta de GSC.

Documentación: [Web Quality Bot](../../docs/web-quality-audit.md).
