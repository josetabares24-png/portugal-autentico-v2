# 2026-10-28 — Calidad de enlaces: MAAT

## Hecho observado
El escaneo Linkinator de la web de producción, documentado por el Web Quality Bot (PR #124), encontró 42 incidencias sobre 1.319 registros: 36 respuestas 403 en destinos externos, 2 respuestas 404 de la misma URL obsoleta de MAAT y 4 fallos de red/servidor. No hubo fallos de enlaces internos.

## Corrección aplicada
- En `src/app/[locale]/blog/[slug]/page.tsx`, sustituida exactamente dos veces `https://www.maat.pt/pt/visitar` por `https://www.maat.pt/pt/planear-visita`.
- Artículos afectados: `/blog/nochevieja-lisboa` y `/blog/lisboa-en-enero`.
- Fuente primaria verificada 28/10: página oficial «Planear visita» de MAAT en `https://www.maat.pt/pt/planear-visita`.
- No se modifica redacción, SEO title, metadatos, URL, afiliación, redirecciones, canonicals, diseño ni indexación.

## Incidencias no corregidas automáticamente
- Los 36 HTTP 403 externos (incluidos Stay22 y GetYourGuide) pueden ser bloqueo a robots. Nunca cambiar o quitar enlaces de afiliados por un 403 de Linkinator sin comprobar navegación humana y atribución.
- Los cuatro fallos de red/servidor, incluido 523 de Carris Metropolitana, necesitan segunda comprobación antes de declarar rotura persistente.
- La mínima puntuación Lighthouse observada fue 82/100 móvil en `/blog/donde-alojarse-en-lisboa` de una muestra de 35 URLs. No demuestra por sí sola un defecto corregible ni datos de campo Core Web Vitals.
- La auditoría recurrente del PR #124 permanece pendiente de revisión/merge independiente.

## QA y siguiente paso
La revisión de esta corrección se entrega mediante PR en rama separada. Ejecutar typecheck y smoke técnicos/SEO en CI, y reescanear enlaces cuando entre a producción. Mantener la aprobación visual LOCKED para toda propuesta posterior de logo.
