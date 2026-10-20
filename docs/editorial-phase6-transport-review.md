# Fase 6A — transporte

18 octubre 2026. La continuación de José tras la entrega de Fase 5 autoriza el rollout gradual. Este lote se limita a transporte; sin merge ni producción. Baseline: 4a6f8ad, aplicación f51e4ce y su Preview inmutable.

## Diagnóstico → decisión

HECHO: aeropuerto, 28E y patinetes contienen las respuestas y fuentes, pero algunas decisiones requieren recorrer varias secciones. La guía nacional ya tiene una tabla inmediata de cuatro medios. HIPÓTESIS: un resumen compacto puede facilitar elegir sin leer el desarrollo entero. DECISIÓN: tres perfiles manuales, sin reescribir artículos ni duplicar otro resumen en la guía nacional. PREFERENCIA: conservar la forma editorial aprobada en los siete pilotos.

| URL | Acción del lote | Antes → después |
| --- | --- | --- |
| /blog/aeropuerto-lisboa-al-centro | Presentación | Entradilla y tabla de opciones → seis pares para conexión, billete, Oriente, maletas, noche y recogida; tabla/desarrollo intactos |
| /blog/tram-28-historia-guia | Presentación | Ruta, precios y avisos repartidos → seis pares de elección; sin prometer horario fijo o asiento |
| /blog/patinetes-electricos-lisboa | Presentación | Coste, preparación y cierre separados → cinco pares; no tarifa local inventada ni marcas añadidas |
| /blog/como-moverse-por-portugal | KEEP | Ya responde con una tabla inmediata; no añadir otra caja con lo mismo |
| /blog/estacion-olaias-lisboa | WAIT de grupo | Intención de cultura/arquitectura; conservar para revisión del grupo G, sin tocar ahora |
| /blog/como-ir-sintra-desde-lisboa | REDIRECT existente | No reactivar: mantiene el 301 autorizado a /blog/sintra-desde-lisboa |

Los cuatro transportes ya adaptados en el piloto (Metro, Navegante, movilidad general y Oriente) se conservan. Sintra/Cascais como destinos quedan en escapadas: no se decide ninguna fusión.

## Implementación y archivos

Nuevo registro explícito src/data/editorial-transport.ts, con índices de bloques de origen por guía. La página de blog resuelve primero el piloto y después estas tres adiciones. Ninguna activación automática por categoría; no cambios al renderer ni componentes globales. Firma bajo imagen, resumen sin enlaces comerciales, cuerpo completo y CTA final existentes.

scripts/smoke-editorial-template.mjs añade modo SMOKE_EDITORIAL_TRANSPORT=1 junto con SMOKE_EDITORIAL_PHASE4=1. Espera exactamente diez perfiles: siete anteriores y tres nuevos. El resto de las 72 superficies comparadas conserva orden/texto; metadata, canonical, schema e imágenes se comparan estrictamente. Se permite el movimiento de firma en las nuevas tres, pero no eliminar párrafos, ítems o celdas.

## Fuentes y factualidad

Se reutiliza exclusivamente información de los artículos originales. Reconsulta puntual: [tarifas CARRIS 2026](https://www.carris.pt/descubra/novo-tarifario-2026/), [recorrido 28E](https://www.carris.pt/viaje/carreiras/28e/) e [información del aeropuerto](https://www.lisbonairport.pt/en/lis/access-parking/getting-to-and-from-the-airport/public-transportation). No se modifican fechas de artículo ni se presenta esta consulta como reverificación integral. Las restricciones y condiciones variables siguen remitiendo al operador del día.

## SEO y límites

No nuevos redirects/noindex; sitemap sigue en 98. Robots, canonicals, schema, H1, títulos, metas, imágenes, FAQs y enlaces existentes intactos. No modificar home, menú, portada blog, Clerk, newsletter ni páginas estacionales. Las dos fusiones WAIT de Fase 1 continúan pendientes.

Riesgo: repetir hechos abreviados en resumen y desarrollo exige actualizarlos juntos. No renovar precios por calendario ni inferir rankings. Esfuerzo bajo/medio, impacto esperado en lectura y elección, sin causalidad SEO medida. No hay nuevos datos de Search Console: baseline métrico documentado 15/10.

## QA y entrega

Build final correcto: 137 páginas; TypeScript correcto. Lint: cero errores y warning preexistente ItineraryContextualCta/analyticsParams. QA local: plantilla 1.617/1.617, migración 1.426/1.426, blog 828 y sitemap 64/64, sin fallos ni enlaces rotos. Tras ajustar el resumen nocturno para preservar la limitación de equipaje pequeño, se recompila y se repite el contrato de plantilla.

Integridad de datos: siete inicializadores originales conservan SHA-256 frente a 4a6f8ad y las tres listas de bloques de origen son válidas: 10/10. En las tres páginas nuevas se exige conservar también el orden de párrafos, ítems, celdas y enlaces; solo se admite mover la firma tras la bajada/imagen. Los siete pilotos anteriores permanecen iguales.

Navegador local: tres guías y la nacional conservada, 390/412/768/1440 px; 16 vistas sin overflow, una H1, seis/seis/cinco pares en las tres nuevas y cero cajas añadidas a la nacional. Preview y QA remoto pendientes de cierre. No Lighthouse ejecutado ni afirmaciones de Core Web Vitals. Mantener la PR draft.

## Cierre de Preview

Preview READY: https://portugal-autentico-v2-3d7v8pnlc-estabaenlisboa.vercel.app

Commit comprobado `130b792425cb7c30d5cbde887b1604bee8177c56`, deployment `dpl_CHaajzvU7so6wrRCwPCk6gLKyHY4`, rama editorial-rebuild, target null. El cierre posterior añade solo documentos y evidencia. El acceso temporal autorizado se entrega solo en conversación; no se guarda token ni cookies en Git ni se desactiva protección.

18/10/2026, 21:46 UTC: plantilla remota 1.617/1.617 y migración 1.328/1.328, sin fallos. Sitemap 64/64, XML parseado: 98 URLs. La diferencia de migración frente a local corresponde a cabeceras Preview; HTML estricto. CI TypeScript 39169009977 y SEO smoke 39169010098: success para el SHA comprobado.

Navegador remoto: 16 vistas (las tres nuevas y la guía nacional × cuatro anchos), sin overflow y una H1. Se mantienen seis/seis/cinco pares y ninguna caja nueva en la nacional. [Matriz](qa/2026-10-18/phase6a-responsive.json), [captura PC](qa/2026-10-18/phase6a-preview-desktop.png), [captura móvil](qa/2026-10-18/phase6a-preview-mobile.png), [controles](qa/2026-10-18/phase6a-checks.json), [integridad](qa/2026-10-18/phase6a-data-integrity.json), [antes/después](qa/2026-10-18/phase6a-change-summary.json).

Producción reconsultada: conserva `83ca369` / `dpl_FcVmwVr8u8p5zzdwiUmDNeNo36jz`. PR #112 abierta y draft, sin merge. Siguiente lote del plan: barrios, con inspección individual y su propia Preview/QA.
