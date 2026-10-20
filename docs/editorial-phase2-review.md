# Fase 2 — revisión de plantillas

18 octubre 2026. Rama editorial-rebuild, PR #112. Candidato sin merge ni producción. STOP antes de Fase 3.

## Cambios

Alcance: 69 cuerpos de blog, dos pilares y la guía de Castelo, 72 superficies editoriales. Las demás fichas comerciales no se convierten en artículos.

- Una estructura de índice: 144 navegaciones DOM → 72. Una de fuentes: 130 grupos → 65. Antes eran ramas responsive, no prueba de duplicación visible simultánea.
- Datos verificados: acordeón nativo, cinco referencias iniciales y desplegable para las restantes; se conservan todos los destinos y etiquetas. No se han vuelto a comprobar precios u horarios. La fecha solo aparece cuando los datos originales indican verificación explícita; no se deriva de cualquier actualización.
- Reservas después del cuerpo y FAQ: un módulo final, máximo dos ofertas distintas, alternativa plegada. Se deduplica el mismo producto. Se conservan campañas, URLs, identificadores históricos, parámetros, atributos sponsored y disclosure. Stay22 conserva sus opciones de barrio.
- Retirada del banner genérico del pie y widget automático de Qué ver. Se restauran tres enlaces ya declarados en los datos de pagos, alojamiento y presupuesto, con sus etiquetas originales.
- Analytics identifica ahora article-final; los IDs históricos con arriba permanecen. Comparaciones de conversión deben considerar el cambio de colocación.

La petición expresa de respuesta primero reemplaza D-039 para este candidato (D-045). Cero CTA contextuales en cuerpo es una elección conservadora, no un requisito permanente: los pilotos podrán evaluar uno después de una respuesta explícita.

## Archivos

ArticleBody, ArticleBookingBlock, ArticleBookingRecommendations (nuevo), ArticleFooter, ArticleSources y CSS, ArticleToc y CSS, TravelPillarPage. Helper nuevo src/lib/article-sources.ts. Integración en blog, guía de actividad y Qué ver. Tres referencias relativas ajustadas en el texto de ofertas de blog-booking-placements.ts; no reescritura factual del artículo.

QA nuevo: scripts/smoke-editorial-template.mjs, linkedom solo de desarrollo. smoke:sitemap acepta el rótulo nuevo conservando las demás invariantes.

## Preservación y pruebas locales

Comparación DOM estricta contra Fase 1: títulos, metadatos completos, canonical, JSON-LD, encabezados e IDs, imágenes, texto y enlaces principales. Solo se excluyen los módulos identificados modificados y se admiten los tres enlaces de planificación documentados. Se compara el conjunto completo de metas, incluidos duplicados y valores, sin depender de su orden.

- Build: correcto, 137 páginas; TypeScript correcto.
- Lint: cero errores; una advertencia preexistente en ItineraryContextualCta, analyticsParams.
- Plantilla: 72 páginas, 1.443 controles, cero fallos.
- Migración: 1.426 controles, cero fallos.
- Sitemap: 64/64, 98 destinos comprobados.
- Blog: 828 invariantes, 97 enlaces internos únicos, cero rotos.
- Navegante en navegador: 390/412/768/1.440 px, sin overflow horizontal; índice cerrado móvil/abierto escritorio. Fuentes y referencias adicionales operables con Enter.
- Lighthouse no ejecutado; sin afirmaciones sobre Core Web Vitals.

Sin cambios de slug, intención, redirects, noindex, sitemap, robots, canonical ni schema. Continúan 16 redirects 301, ocho noindex y 98 URLs en sitemap. Dos fusiones WAIT permanecen pendientes. Newsletter pausada por D-044.

Baselines local y Preview independientes: GuruWalk tiene configuración distinta en Vercel. Snapshots fuera de Git conforme a política del repo. Las nuevas pruebas siguen siendo manuales por el alcance OAuth de workflows; no se amplían permisos.

## Riesgos y gate

Menor exposición comercial puede afectar ingresos. No existe medición causal sin publicación. El índice único adapta su apertura tras hidratación. Lo esencial, jerarquía inicial y siete pilotos corresponden a Fases 3/4 y no se implementan aquí.

## Preview y cierre de QA

Preview READY: https://portugal-autentico-v2-atql6so0h-estabaenlisboa.vercel.app

Código comprobado: `643683b9d45f5570fddb52f917cfe28ba27d2a6d`, deployment `dpl_HNvQk6YGd1Zx8Wac91G2AUry168K`, rama editorial-rebuild, target null. El acceso temporal autorizado se entrega solo en conversación, nunca su token en Git. No se desactiva protección.

18/10/2026, 09:15 UTC: plantilla remota 1.443/1.443, migración 1.328/1.328 y sitemap 64/64. XML parseado con .NET: 98 URLs. La diferencia local/remoto de 98 checks corresponde al tratamiento de cabeceras de Preview, nunca a relajar el HTML indexable. CI TypeScript 39114399766 y SEO smoke 39114399659: success para ese SHA.

Navegante móvil 390 px y Oriente escritorio 1.440 px revisados también en Preview: sin overflow, índice único y apertura adaptada. Fuentes operables con Enter. [Captura móvil](qa/2026-10-18/phase2-preview-mobile.png) y [captura escritorio](qa/2026-10-18/phase2-preview-desktop.png). [Resultados por comprobación](qa/2026-10-18/phase2-checks.json).

Producción reconsultada: permanece en `dpl_FcVmwVr8u8p5zzdwiUmDNeNo36jz` / `83ca369`. Los commits de cierre solo añaden documentación y evidencia. STOP + REVIEW: no Fase 3, merge ni producción sin aprobación.
