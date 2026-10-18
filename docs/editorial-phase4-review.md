# Fases 3 y 4 — sistema y piloto de siete páginas

18 octubre 2026. José autorizó continuar tras la revisión de Fase 2. Rama editorial-rebuild / PR #112. STOP de Fase 5: sin rollout, merge ni producción.

## Diagnóstico, evidencia y decisión

HECHO: las siete guías ya contienen respuestas útiles; la plantilla no ofrecía pares compactos de decisión. Oriente anteponía contexto arquitectónico a instrucciones del intercambiador; pagos mostraba el disclaimer general en el segundo párrafo. HIPÓTESIS: resumir decisiones y ordenar la respuesta facilitará la lectura móvil; no implica un efecto SEO probado. DECISIÓN: añadir una capa revisada por página, mantener los datos originales y limitar el piloto a siete URLs. PREFERENCIA: tipografía y filetes de la marca, sin cajas de dashboard, iconos ni degradados.

Baseline: Fase 2, a569a29; HTML inmutable de Preview 643683b. Métricas: último corte documentado 15/10, no nueva extracción ni atribución causal. Navegante fuerte se trata conservadoramente; no se renuevan fechas por maquetación.

## Antes / después por URL

| Ruta de blog | Antes | Candidato |
| --- | --- | --- |
| metro-lisboa-guia | Respuesta inicial y mapa en primera sección | Conserva ambos; seis filas de horario, billete, tarjeta, 24 h, aeropuerto y uso del mapa |
| tarjeta-navegante-lisboa | Respuesta, cálculo y tabla completa | Cinco decisiones compactas; cálculo de quinto viaje con zapping conservado; Lisboa Card comercial sigue al final |
| como-pagar-en-portugal | Advertencia general en segundo párrafo | Tarjeta, efectivo, Multibanco, comisiones y contactless primero; disclaimer completo al final del desarrollo |
| como-moverse-por-lisboa | Panorama por modos de transporte | Seis situaciones → transporte; enlaces y detalle específico de Metro se conservan |
| time-out-market-lisboa | Merece la pena en la entradilla, condiciones dispersas | Para quién sí/no, presupuesto por carta, momento, duración condicionada a colas y mesas sin reserva |
| estacion-oriente-lisboa | Contexto y arquitectura antes de uso | Respuesta directa sobre niveles/transporte, seis filas y sección de conexiones adelantada; introducción original e historia conservadas |
| vida-nocturna-lisboa | Elección en párrafos y listas | Cinco ambientes → zona, sin inventar locales ni programación |

En los siete pilotos, la firma y actualización pasan bajo la imagen, conservando el mismo texto. No se cambia H1, bajada ni metadatos. Solo Oriente incorpora una respuesta inicial adaptada; su introducción original permanece íntegra en el cuerpo. El índice de Oriente sigue el nuevo orden manteniendo IDs y destinos.

No hay base para inventar una horquilla de precios o una duración numérica para Time Out, ni minutos universales de transbordo en Oriente. El candidato explica la dependencia y conserva las fuentes; cifras específicas quedan pendientes de evidencia antes de incorporarlas. No se añaden experiencias personales ni recomendaciones falsas para rellenar una sección.

## Implementación

Fase 3: ArticleEssentials.tsx + CSS, semántica section/h2/dl/dt/dd, servidor sin JS cliente, tipos transport/place/neighborhood/food/itinerary/event/culture/practical. Cultura puede usar En 30 segundos; ningún tipo obliga a mostrar precio. Reglas en editorial-system.md.

Fase 4: src/data/editorial-pilot.ts define exactamente siete perfiles y sus bloques de origen. ArticleBody activa el resumen y los dos movimientos documentados; ArticleHero mueve una sola firma; la página de blog selecciona el perfil por slug explícito. Los objetos originales de artículos no se reescriben.

Fuentes: se conservan todas las existentes. Reconsulta puntual 18/10 del [tarifario Metro](https://www.metrolisboa.pt/comprar/) confirma los importes resaltados; [FAQ oficial de Time Out](https://www.timeout.com/time-out-market-lisboa/faqs) consultada para condiciones. No se declara una reverificación completa de siete guías ni se cambian sus fechas.

## SEO, enlaces y alcance

Cero slugs, redirects o noindex nuevos. Sitemap 98, robots, canonicals, schema, FAQs y destinos de enlaces existentes se preservan. No cambios en páginas estacionales protegidas, home, navegación, portada de blog, Clerk o newsletter. Las fusiones WAIT siguen pendientes. CTA y fuentes de Fase 2 continúan.

## QA y evidencia

Build final correcto: 137 páginas; TypeScript correcto. Lint: cero errores, warning preexistente ItineraryContextualCta/analyticsParams. QA local final: 1.608 controles de plantilla contra baseline remoto de Fase 2, sin fallos; migración 1.426, sitemap 64/64, blog 828 y cero enlaces rotos. Comparación AST: siete inicializadores (artículos, FAQ, extras, fotos por sección, alt y mapas de fotos) con hashes SHA-256 idénticos a a569a29, más siete validaciones de índices de origen: 14/14.

El contrato final añade comparación exacta de cada párrafo, ítem y celda. En las siete páginas admite solo reordenar bloques y añadir los resúmenes/una respuesta identificados. En las otras 65 conserva orden y texto exactos. Metadatos, schema, imágenes y canonicals son estrictos en todas. No basta con contar palabras.

Revisión local: siete páginas × 390/412/768/1440 px, una H1, 4–7 pares y cero overflow horizontal. Se corrigió la alineación de firma detectada en escritorio. Lighthouse no disponible como prueba ejecutada: no se afirma mejora de rendimiento.

## Riesgos y siguiente gate

Los resúmenes replican algunos hechos del cuerpo: al actualizar tarifas hay que revisar ambos, sin scripts ciegos. El índice único conserva su adaptación tras hidratación. No se mide CTR/ranking sobre una rama sin publicar. Objetivo del piloto: poder resolver las decisiones iniciales sin buscar entre párrafos y conservar exactitud. Esfuerzo medio; riesgo acotado a siete activaciones.

Fase 5: entregar Preview READY, evidencia y revisión; esperar aprobación antes de Fase 6. No merge ni producción.

## Cierre remoto y gate de revisión

Preview READY: https://portugal-autentico-v2-fas2cz23y-estabaenlisboa.vercel.app

Código comprobado `f51e4ce6d98dd1a7850ab3657a1b7c475b3ce38c`; deployment `dpl_CdFs9k2esuhRaB3jZ9QbC7bYVRyt`, rama editorial-rebuild, target null. El acceso temporal ya autorizado se entrega únicamente en conversación; no se guarda su token ni cookies en Git. Los commits posteriores de cierre solo añaden documentación y evidencia.

- QA remoto: plantilla 1.608/1.608, migración 1.328/1.328, sitemap 64/64; cero fallos. XML parseado, 98 URLs. Cabeceras Preview se tratan como plataforma; robots/canonical HTML siguen estrictos.
- CI del SHA comprobado: TypeScript 39115147238 y SEO smoke 39115147234, success. Las pruebas nuevas siguen manuales, sin ampliar permisos de workflows.
- Navegador remoto: 28 vistas (siete páginas × cuatro anchos), cero overflow y una H1 en todas. Índice de Oriente probado: el ancla conserva su ID y deja el encabezado a unos 112 px del borde superior. Firma alineada con el ancho de lectura.
- [Captura Metro móvil](qa/2026-10-18/phase4-preview-mobile.png), [vida nocturna en PC](qa/2026-10-18/phase4-preview-desktop.png), [matriz responsive](qa/2026-10-18/phase4-responsive.json), [controles](qa/2026-10-18/phase4-checks.json), [integridad de datos](qa/2026-10-18/phase4-data-integrity.json).

Producción reconsultada al cierre: `83ca369` / `dpl_FcVmwVr8u8p5zzdwiUmDNeNo36jz`, sin cambios. STOP en Fase 5: el siguiente paso requiere revisar este candidato, no ampliar automáticamente a las demás URLs.
