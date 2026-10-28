# Web Quality Bot — uso y límites

El workflow [Web Quality Bot](../.github/workflows/web-quality-audit.yml) añade dos comprobaciones sobre la **producción pública** `https://estabaenlisboa.com`, sin modificarla. Complementa `smoke:sitemap`; no lo sustituye.

## Qué hace

| Herramienta | Cobertura | Frecuencia | Resultado |
|---|---|---|---|
| Linkinator 8.1.0 | Páginas incluidas en `/sitemap.xml` y sus enlaces salientes | Lunes 06:25 UTC | JSON, log y tabla de destinos problemáticos |
| Unlighthouse 0.19.1 | Lighthouse móvil en páginas representativas del sitemap (muestreo por plantillas) | Día 1 de cada mes, 06:50 UTC | JSON, log, puntuaciones y grupos de prioridad |
| `smoke:sitemap` existente | Sitemap, canonical, noindex, redirecciones, contenido y otras invariantes | CI SEO ya existente | Aserciones técnicas sobre Next.js |

Las PR que cambian el propio bot ejecutan además una auditoría de línea base en modo de observación (no bloqueante por enlaces ya existentes), junto con un test autónomo del generador. No se instalan dependencias en la aplicación, no cambia `package.json` ni se añade JavaScript al navegador.

### Lanzarlo manualmente

Después de incorporar el workflow a `main`:

1. Abre GitHub → **Actions** → **Web Quality Bot — Estaba en Lisboa**.
2. Pulsa **Run workflow**.
3. Selecciona **links** o **links-and-performance**.
4. Abre la ejecución terminada: **Summary** para el diagnóstico y **Artifacts → web-quality-…** para `summary.md`, resultados JSON y logs (30 días).

El workflow no puede programarse en GitHub Actions hasta que exista en la rama por defecto. Esta PR permanece sin fusionar hasta revisión. Esta PR ejecuta una primera auditoría de prueba de solo lectura. Mientras no termine, **no hay recuentos comprobados todavía**. Los calendarios recurrentes solo se activan al incorporar el workflow a la rama por defecto.

## Interpretar bien el resultado

- Linkinator se alimenta del sitemap. Puede revisar enlaces externos, pero una URL fuera del sitemap, un contenido `noindex` o una ruta huérfana no quedan automáticamente cubiertos.
- Las redirecciones y enlaces HTTP se marcan para inspección (`warn`); no se consideran automáticamente 404. El escáner usa concurrencia 8 y reintentos moderados.
- Unlighthouse **muestra páginas representativas**, no afirma medir cada artículo. Se usa `--mobile --samples 1` para una primera línea base reproducible y relativamente barata. No es una medición de usuarios reales ni sustituye CrUX.
- La clasificación de la muestra es una **priorización propia**, no un veredicto de Google: rojo si rendimiento <50, SEO <80 o accesibilidad <80; naranja si rendimiento <75, SEO <90 o accesibilidad <90; verde en los demás casos. No implica que una página vaya a indexar/rankear mejor por sí sola.
- La puntuación de rendimiento en laboratorio puede variar por condiciones de la máquina, red, CDN y scripts de terceros. Comparar ejecuciones equivalentes; verificar cada causa.
- Si alguna herramienta falla o su JSON es ilegible, el informe marca "sin resultado verificable" y el workflow falla: jamás convierte ausencia de datos en cero problemas.
- Protección anti-bot, 403/429, enlaces con redirección deliberada, anclas creadas por JavaScript y enlaces de afiliación requieren triage humano antes de cambiar nada.

## Qué hacer al recibir el primer informe

1. Separar URL propia de dominio externo y problema persistente de fallo transitorio.
2. Corroborar 404/redirects contra el sitemap, los contratos de URL y la prueba SEO existente.
3. Agrupar fallos repetidos por plantilla o componente; no abrir decenas de correcciones sin causa.
4. Abrir un PR **pequeño** con evidencias antes/después, `npm run typecheck` y smoke tests relevantes.
5. Para URLs indexadas, respetar `brain/03-SEO-DECISION-ENGINE.md`, GSC y las decisiones LOCKED. No eliminar, noindexar ni redirigir por una nota de Lighthouse.
6. Guardar el diagnóstico y los cambios en Mente Lisboa.

## Alcance expresamente excluido

Esta implementación no instala Lighthouse CI como bloqueo permanente de cada PR, no hace un `next analyze`, no añade axe-core aparte, no toca frontend, SEO ni artículos y no activa tareas de pago. La fase siguiente decidirá si existen umbrales robustos para un gate de CI, basándose en resultados reales de varias ejecuciones.
