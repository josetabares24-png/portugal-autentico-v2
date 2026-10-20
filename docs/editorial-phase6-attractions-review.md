# Fase 6D — atracciones y elección de visitas

19 octubre 2026. José indica seguir tras comida. Baseline 7c24bae; aplicación anterior ace0d6d y su Preview inmutable. Sin merge ni producción.

## Diagnóstico → decisión

HECHO: las guías de miradores, mercados, lluvia y planes gratuitos ya contienen criterios útiles, repartidos por el cuerpo. Las fichas de actividad usan otra plantilla; Cristo Rei ya muestra precio/duración y desarrollo práctico, mientras Castelo tiene una respuesta y lista iniciales. HIPÓTESIS: un resumen de elección ayuda más en las cuatro guías que duplicar las respuestas iniciales de las fichas. DECISIÓN: cuatro perfiles manuales y conservación del desarrollo/orden. PREFERENCIA: selección por situación y zona, sin rankings nuevos, promesas de ahorro o visitas obligatorias.

| URL | Acción | Resultado o límite |
| --- | --- | --- |
| /blog/mejores-miradores-lisboa | Presentación | Qué mirador elegir según zona, vista y descanso; dos recorridos sin repetir cuestas |
| /blog/mejores-mercados-lisboa | Presentación | Diferencia comer, abastos, segunda mano y feria; sin duplicar Time Out ni copiar horarios variables |
| /blog/lisboa-cuando-llueve | Presentación | Una actividad cubierta, resto en la misma zona, pausa y precaución con suelo mojado |
| /blog/que-hacer-gratis-en-lisboa | Presentación | Distingue entrada gratuita de gasto cero, zonas cercanas y condiciones de acceso |
| /actividades/cristo-rei | KEEP de presentación | Ya tiene datos iniciales y bloques de qué ver/cuándo/cómo llegar; no añadir una segunda caja. No equivale a reverificación completa de datos |
| /actividades/oceanario-lisboa | REVIEW; sin cambios | savingTip anuncia 5 % online; la web oficial consultada el 19/10 anuncia 10 % con ONLINE10. No propagar ni corregir automáticamente una campaña variable: detener cambios en esta URL y reportar |
| /actividades/castelo-sao-jorge | REVIEW; sin cambios | Guía con respuesta y lista inmediata. El aviso todavía habla de huelga para el 17/10, fecha ya pasada. Revisar ese aviso y la obra del museo; no inferir resultado de la huelga o reapertura |
| /blog/palacio-da-pena-entradas | WAIT de protección | Página reciente; sin cambios de contenido, título o presentación en este lote |
| /blog/monasterio-jeronimos-entradas | WAIT de protección | Mismo criterio; no inferir reapertura/horarios por calendario |
| /blog/monumentos-de-lisboa | REVIEW de Fase 7 | Potencial integración con /que-ver-en-lisboa, no decidida aquí |
| /blog/miradores-atardecer-lisboa | REDIRECT histórico | Ya es 308 a mejores miradores; no reactivar ni tratar su objeto antiguo como contenido servido |
| /que-ver-en-lisboa | KEEP fuera del lote | Pilar de plantilla propia, conservado y cubierto por regresión |

No se adaptan fichas masivamente. Se inspeccionaron sus tipos/datos y plantilla, el catálogo de veinte fichas (tres redirects y diecisiete vivas) y en profundidad Oceanário, Cristo Rei y el ticket guide de Castelo. No se afirma una auditoría factual nueva de todas las diecisiete. Las dos dudas detienen cambios solo en esas URLs, según la regla de José. Las dudas anteriores de barrios/comida y todas las consolidaciones siguen pendientes.

## Fuentes y factualidad

Consulta puntual: [Oceanário, planear visita](https://oceanario.pt/planear-visita/) confirma la duración media de 1 h 30–2 h y la conexión por Oriente. Esos son los datos reutilizados en la guía de lluvia; no se añade descuento ni tarifa al resumen. En la misma consulta se observa la diferencia de campaña respecto a la ficha del repositorio.

[Turismo de Lisboa, Santa Catarina](https://www.visitlisboa.com/pt-pt/locais/miradouro-de-santa-catarina) se consulta como contraste del mirador. La consulta del directorio Lisboa Comércio falló: no se utiliza como reverificación de horarios. La selección de mercados y recorridos procede del artículo existente; el nuevo bloque pide revisar fuente oficial antes de desplazarse. No nuevas fechas, horarios, precios, direcciones, lugares o experiencia personal inventada.

El aviso del castillo se detecta en src/data/ticket-guides.ts y se compara con la fecha actual; no se transforma un evento pasado en estado actual. Los cuerpos completos de las cuatro guías se leen antes de preparar sus seis pares.

## Implementación y preservación

src/data/editorial-attractions.ts: cuatro perfiles explícitos con índices de procedencia; place para elección de mirador/mercado y practical para lluvia/gratis. Seis filas por página, sin enlaces comerciales. La página de blog resuelve ese registro después de los cuatro anteriores. Firma bajo imagen, sin nueva entradilla ni reordenar el cuerpo. No cambios a componentes, CSS, plantilla de actividades o ticket guides.

scripts/smoke-editorial-template.mjs incorpora SMOKE_EDITORIAL_ATTRACTIONS=1 junto a los cuatro modos previos: 22 activaciones exactas en 72 superficies. Conserva orden de párrafos, listas, celdas, headings/anclas y enlaces en todos los lotes de Fase 6; solo admite mover firma/bajada del encabezado. Los objetos originales de artículos y los perfiles anteriores permanecen intactos. Integridad adicional de activities.ts y ticket-guides.ts, para probar que las dudas no se corrigieron silenciosamente.

Sin nuevos redirects/noindex, URLs, metadata, fechas, H1, canonical, robots, sitemap, schema, FAQs, imágenes o enlaces internos/afiliados. Sitemap sigue en 98. Manifest registra las dudas de las dos fichas, sin autorizar su migración. Home, navegación, blog portada, Clerk y newsletter fuera del alcance.

## Riesgos, prueba y siguiente acción

El resumen añade otra representación que hay que mantener junto al cuerpo; los índices documentan origen. No sustituye la información del operador ni resuelve las dos incidencias detectadas. Las fichas conservan su plantilla distinta, con módulos comerciales existentes; este lote no certifica una homogeneización visual completa del sitio. No nueva extracción de GSC ni atribución SEO a una rama sin publicar; baseline métrico 15/10.

Baselines local y remoto separados antes de modificar. Trece controles de integridad: siete inicializadores originales por SHA-256 frente a 7c24bae, cuatro listas de bloques válidas y dos archivos de fichas idénticos. Build, QA HTTP, capturas y Preview se incorporan al cierre tras ejecutarse. No Lighthouse ni afirmaciones de Core Web Vitals sin medición. Siguiente grupo: itinerarios, con revisión individual; no consolidaciones automáticas.

## QA local

Build correcto: 137 páginas; TypeScript correcto. Lint sin errores, un warning preexistente en ItineraryContextualCta/analyticsParams. Plantilla: 1.653/1.653 en 72 superficies; migración: 1.426/1.426; sitemap: 64/64 y 98 URLs. Blog: 828 invariantes, 69 HTML y cinco redirects; 97 enlaces internos sin rotos. Integridad: 13/13. Los cuatro registros editoriales anteriores y los archivos de las fichas no cambian.

Navegador local: cuatro guías nuevas, tres fichas, dos guías recientes y el pilar de qué ver × 390/412/768/1440 px: 40 vistas sin overflow ni H1 duplicada. Una caja de seis pares en cada guía nueva y ninguna activación añadida a las seis superficies de control. Preview pendiente de cierre.

## Cierre de Preview — 19 octubre

Preview READY: https://portugal-autentico-v2-luy4blgiw-estabaenlisboa.vercel.app

SHA comprobado `cf8961fd412010132e9f27fbd7c25254b04f4fb5`, deployment `dpl_GTzyYtMsjbRNJHxW6nfvLVGtsEw3`, rama editorial-rebuild, target null. Implementación `762951b`, contrato QA/documentación `cf8961f`; el cierre posterior es solo documental. Acceso temporal autorizado entregado en conversación; sin tokens/cookies en Git ni cambios de protección.

QA remoto: plantilla 1.653/1.653, migración 1.328/1.328, sitemap 64/64 con 98 URLs y XML parseado; cero fallos. La diferencia de 98 controles de migración respecto a local es la política de cabeceras de Preview; robots HTML estricto. CI TypeScript 39216625104 y SEO smoke 39216625218: success para el SHA comprobado. Los modos editoriales nuevos se ejecutan manualmente; workflows sin cambios.

Navegador remoto: las mismas 40 vistas que en local, sin overflow, una H1 y exactamente cuatro nuevas cajas de seis filas. [Matriz](qa/2026-10-19/phase6d-responsive.json), [captura PC](qa/2026-10-19/phase6d-preview-desktop.png), [captura móvil](qa/2026-10-19/phase6d-preview-mobile.png), [controles](qa/2026-10-19/phase6d-checks.json), [integridad](qa/2026-10-19/phase6d-data-integrity.json), [antes/después](qa/2026-10-19/phase6d-change-summary.json).

Memoria/documentación: editorial-system, seo-migration, seo-url-manifest, CURRENT-STATE, D-050 y registro de Fase 6D actualizados. Se reutiliza ArticleEssentials de servidor, sin componentes ni JavaScript cliente nuevos. No Lighthouse ejecutado. Producción reconsultada conserva `83ca369b477d578f5a63004b461550bdcf706f89` / `dpl_FcVmwVr8u8p5zzdwiUmDNeNo36jz`, READY. PR #112 abierta y draft; sin merge ni producción.

Las incidencias de Oceanário/Castelo y las dudas previas permanecen visibles en manifest/memoria; terminar esta presentación no las da por resueltas. El siguiente lote es itinerarios, con revisión individual y su propia Preview/QA.
