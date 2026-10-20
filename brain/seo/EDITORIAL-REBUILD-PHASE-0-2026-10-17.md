# Reconstrucción editorial — Fase 0

**Fecha:** 17/10/2026. **Estado:** auditoría cerrada; Fase 1 pendiente de resolver el orden de dos consolidaciones y el tratamiento de checkout. No hay cambios de aplicación ni despliegue.

## Instrucción de José

La web debe evolucionar a una publicación útil sobre Lisboa y Portugal: respuesta primero, contexto y criterio editorial después; monetización contextual al final. No publicar artículos ni cambiar slugs por actividad. El mandato actual empieza solo por Fase 0; permite continuar a Fase 1 si no hay contradicciones graves. Gates posteriores: revisión tras Fase 1, tras Fase 2 y Preview de las siete páginas antes de rollout. Prohibido merge/producción sin aprobación posterior.

La lista de redirects y noindex del mensaje es autorización específica, no permiso para consolidar otras URLs. En particular, el noindex futuro de `/comprar-entradas` cambia la política de D-035 por instrucción explícita; no se aplica en la auditoría.

## Evidencia y diagnóstico

- Base inspeccionada: `83ca369b477d578f5a63004b461550bdcf706f89`, rama `editorial-rebuild`; GitHub volvió a contrastarse el 17/10.
- Producción sirve el mismo SHA: Vercel `dpl_FcVmwVr8u8p5zzdwiUmDNeNo36jz`, READY/production, D0 **15/10/2026 14:21:48 Europe/Lisbon**. El alias se reconfirmó el 17/10.
- Las notas E-016 y estado del 15/10 aún dicen “preparado/no desplegado”; son anteriores al merge de PR #111. Esta comprobación confirma que ese lote ya está publicado. No evaluar sus cambios con datos anteriores a D0.
- Sitemap: 110 URLs = 19 estáticas + 3 itinerarios + 20 fichas + 68 publicaciones. 75 cuerpos de blog incluyen siete legacy; no son 75 publicaciones.
- Preflight del 16/10: 50 rutas; los 15 destinos únicos de las 18 reglas son 200/indexables/autocanónicos. Nueve reglas ya llegan al destino solicitado, con 308; José exige 301 literal en su futuro contrato.
- Runtime público sano no acredita ausencia de deuda editorial o de seguridad. CTA genérico obligatorio y algunas ofertas tempranas merecen fases 2–4; no se les atribuye causalidad SEO.
- TOC/fuentes tienen dos ramas responsive pero una visible en la muestra de Vida nocturna, escritorio y 390 px. No eliminar fuentes reales bajo una duplicación visual no demostrada.
- Clerk, comprobado el 17/10: CNAME `frontend-api.clerk.services`; raíz y JWKS 200 JSON con `X-Robots-Tag: noindex, nofollow`. No cambiar DNS ni introducir proxy. La antigua indexación de Google requiere comprobación posterior; esta cabecera no prueba por sí sola desindexación terminada.
- Hay riesgo preexistente de autorización en API de campañas, condicionado a la configuración del servicio. Solo se leyó código, sin invocar campañas. Detalle y prioridad separada en el informe.

## Prueba

Smoke remoto de sitemap 52/52 y 110 URLs 200 sin noindex. Dos huecos del checker documentados: extracción de actividades vacía y canonical al apex permitido. Build 137 rutas y typecheck correctos tras regenerar tipos `.next` obsoletos; no se cambió código para hacerlos pasar. Lint: cero errores y un warning preexistente. Lighthouse no medido. No se probaron envíos, compras ni mutaciones externas.

## Decisión y siguiente acción

Guardar la auditoría y baseline en GitHub, sin implementación de Fase 1. Resolver dos ambigüedades del mensaje:

1. Restaurantes románticos y novedades son obligatorios en Fase 1A, pero Fase 7 exige revisar por completo ambas piezas y sitúa las consolidaciones después del rollout aprobado. Propuesta: WAIT hasta su revisión.
2. Checkout ya está retirado por redirects y no existe una tienda activa. Propuesta: conservar su retirada, sin reconstruir un 200 solo para añadir noindex. Quiz ya es un 404 real y no debe revivirse.

No cambian las decisiones LOCKED, los títulos protegidos, la newsletter pausada por D-044 ni el aislamiento de Clerk del contenido público.

Informe completo: [docs/editorial-rebuild-audit.md](../../docs/editorial-rebuild-audit.md). Evidencia compacta: [docs/editorial-rebuild-baseline.json](../../docs/editorial-rebuild-baseline.json). El plan exacto de Fase 1 y sus gates están en el informe.
