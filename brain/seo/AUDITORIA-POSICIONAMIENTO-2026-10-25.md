# Auditoría de posicionamiento y cambios de la rama `feat/seo-posicionamiento`, 25/10/2026

**Estado: rama local, sin push ni despliegue. Pendiente de visto bueno de José (L-003).**
Informe completo fuera del repo: `/workspace/auditoria-seo-2026-10-25.md`. Capturas: `/workspace/preview-screens/seo-2026-10-25/`.

## Baseline (L-004)

- GSC, 28 días hasta ~24/10/2026 (dato de José, no exportado aquí): 142 clics, 11.400 impresiones, CTR 1,2 %, posición media 9,5. Sin desglose por consulta/página en esta sesión.
- Lighthouse móvil (laboratorio, local Chrome, 25/10): Home perf 0,85 / LCP 4,1 s; Navegante 0,92 / 3,3 s; Oceanário 0,90 / 3,5 s; Nochevieja 0,87 / 3,5 s; Óbidos 0,90 / 3,6 s; free tours 0,86 / 4,0 s. CLS 0, SEO 1. El LCP es sobre todo «render delay» (~2 s), no TTFB.
- Rastreo propio de las 105 URL del sitemap: todas 200, 1 H1, canónica propia, hreflang recíproco con x-default en los 6 pares ES/EN.

## Qué cambia en la rama

1. Óbidos Vila Natal: datos 2026 oficiales (precios, preventa 6 €, horarios, cierres 25/12 y 1/1, Pinocho). Meta acortada (fallaba por ancho en píxeles).
2. Lisboa en Navidad: bloque de Óbidos con datos 2026 y enlace a Lisboa en enero.
3. Nochevieja: sección «Dónde dormir si vienes por la Nochevieja» + bloque Stay22 por barrio (Baixa, Chiado, Alfama) que sustituye al del Oceanário; enlace a Lisboa en enero.
4. Artículo nuevo `/blog/quinta-da-regaleira-entradas` con datos oficiales 2026. No se vende la entrada de la Regaleira (la web oficial dice que su taquilla es la única autorizada); se ofrece la de la Pena (Tiqets) con la advertencia de no reembolso.
5. Enlaces internos a la Regaleira desde la Pena, Sintra desde Lisboa y relacionados.
6. Dónde alojarse: `seoTitle` y meta nuevos (no está en ningún experimento activo de títulos).

## No tocado a propósito

E-001 a E-004 (títulos en observación), E-006, E-007, `como-pagar-en-portugal`, free tours (E-009/E-012), URLs.
