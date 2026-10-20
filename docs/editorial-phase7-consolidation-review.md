# Fase 7 — revisión de consolidaciones

20 octubre 2026. Rama `editorial-rebuild-phase-7`, desde producción `5ad2c4083934c2f35e81aba12275566341f219ee` (PR #112). Revisión completa de los siete casos solicitados: once cuerpos de blog, incluido el de natas ya retirado, el pilar Qué ver y las dos fichas de Pastéis/Cascais. La revisión termina con decisiones de conservación y dos excepciones a las fusiones previstas: **no se ejecuta ninguna migración ni reescritura**. No confundir terminar la auditoría con haber ejecutado las fusiones.

## Diagnóstico → evidencia → decisión

HECHO: las dos fuentes previstas para 301 contienen respuestas que sus destinos actuales no entregan. Restaurantes aporta seis establecimientos concretos; Pareja remite expresamente a esa lista. Novedades contiene museos, transporte y alojamiento; Festivales cubre agenda. Los destinos están técnicamente sanos, pero su equivalencia editorial es incompleta.

HIPÓTESIS: fusionar sin trasladar esas respuestas frustraría parte de las búsquedas y podría diluir la utilidad del destino. Search Console no demuestra que estas parejas estén compitiendo: las respuestas disponibles son demasiado escasas. No se presenta una hipótesis de canibalización como un hecho.

DECISIÓN: aplicar la regla de José «si encuentras algo dudoso, detente en esa URL y repórtalo». Conservar los dos WAIT; no sustituir silenciosamente los destinos ordenados por otros. Para los demás casos, recomendar dueño de intención y condiciones, manteniendo todas las URLs actuales. PREFERENCIA: una respuesta útil por intención antes que reducir el número de páginas como objetivo aislado.

## Baseline de producción y alcance de la comprobación

[PR #112](https://github.com/josetabares24-png/portugal-autentico-v2/pull/112) fusionada el 20/10 a las 20:47, hora de Lisboa. Vercel `dpl_BdGSFAuvGY1dudTfLHSU6MYdoWes`, READY, SHA `5ad2c40`, con alias real estabaenlisboa.com. La verificación posterior al despliegue quedó cerrada a las 20:51. El registro definitivo de publicación está en ese PR; las notas históricas anteriores de solo Preview quedan superadas únicamente para ese candidato.

Lectura HTTP nueva de las 98 URLs del sitemap y el alias histórico de natas: **98 respuestas 200 y un 308 directo al artículo de Pastéis**. Las trece candidatas vivas tienen canonical propio, robots HTML index/follow, H1 única y cuatro bloques JSON-LD parseables cada una. Esto valida sintaxis y presencia, no todas las afirmaciones semánticas del schema. No se vuelve a certificar que cada dato factual del sitio sea correcto.

Grafo: páginas de origen distintas, excluyendo autoenlaces; columna principal incluye relacionados dentro de main, no solo enlaces insertados por el autor. Se leen URLs del sitemap, no todas las páginas funcionales/noindex ni infinitas variantes de paginación. No se han medido backlinks externos. [Evidencia HTTP, metadata y enlaces](qa/2026-10-20/phase7-production-audit.json).

## Search Console: periodos cerrados anteriores al despliegue

Windsor.ai, propiedad `sc-domain:estabaenlisboa.com`, búsqueda web, `include_fresh_data=false`, captura 20/10. Corte conservador hasta 17/10; no incluye hoy ni permite atribuir resultados al despliegue del 20/10. Fechas del proveedor conservadas sin convertirlas a días locales. Totales de propiedad en extracción separada por fecha: no se suman filas de páginas para calcular el total del sitio.

| Ventana | Clics actual / anterior | Impresiones actual / anterior | CTR actual / anterior | Posición actual / anterior |
| --- | ---: | ---: | ---: | ---: |
| 7 días: 11–17/10 vs 4–10/10 | 33 / 40 | 2.989 / 2.955 | 1,10 % / 1,35 % | 8,86 / 10,25 |
| 28 días: 20/09–17/10 vs 23/08–19/09 | 125 / 55 | 10.023 / 6.565 | 1,25 % / 0,84 % | 9,48 / 12,80 |
| 90 días: 20/07–17/10 vs 21/04–19/07 | 225 / 29 | 21.154 / 3.468 | 1,06 % / 0,84 % | 11,71 / 34,25 |

28 días: impresiones +52,7 %, clics +127,3 %. Última semana: impresiones +1,2 %, clics −17,5 %. La mejora de posición no garantiza más clics en una muestra pequeña y cambiante. La comparación de 90 días incluye cambios de cobertura/madurez del sitio; no es un experimento. No se añade año anterior porque no resuelve la equivalencia de las páginas y no hay baseline comparable recuperado. El objetivo sigue siendo 28.000 impresiones en 28 días: **10.023 equivalen al 35,8 %**, unas 358/día. La semana reciente equivale a 427/día, sin promesa de mantenerla.

### Señal de las candidatas

Formato: clics / impresiones / CTR / posición. SF = sin filas devueltas, **no prueba de cero demanda, ausencia de indexación o inutilidad**.

| URL abreviada | 28 días actual | 28 días anterior | 90 días actual | Orígenes en main / todos |
| --- | --- | --- | --- | ---: |
| Restaurantes románticos | SF | SF | SF | 3 / 3 |
| Lisboa en pareja | SF | SF | SF | 2 / 2 |
| Novedades 2026 | SF | SF | SF | 1 / 1 |
| Festivales 2026 | SF | SF | SF | 5 / 5 |
| Monumentos | SF | SF | SF | 4 / 4 |
| Qué ver | 0 / 1 / 0 % / 78 | SF | 0 / 1 / 0 % / 78 | 5 / 97 |
| Bacalhau | SF | SF | SF | 1 / 1 |
| Vinos | SF | SF | SF | 3 / 3 |
| Gastronomía | SF | SF | SF | 10 / 10 |
| Pastéis, artículo | SF | SF | SF | 5 / 5 |
| Pastéis, ficha | 0 / 5 / 0 % / 6,20 | 0 / 5 / 0 % / 17,40 | 0 / 10 / 0 % / 11,80 | 2 / 2 |
| Cascais, artículo | 0 / 7 / 0 % / 8,57 | 0 / 24 / 0 % / 21,79 | 0 / 55 / 0 % / 23,60 | 11 / 11 |
| Cascais y Cabo da Roca, ficha | 0 / 5 / 0 % / 7,60 | 0 / 8 / 0 % / 7,25 | 0 / 20 / 0 % / 8,85 | 1 / 1 |

El alias de mejores natas devuelve 308 actualmente; su señal de 37 impresiones, cero clics y posición 10,54 corresponde a abril/mayo, dentro de los 90 días anteriores. No es señal de una segunda página viva hoy.

Se recuperan 61 filas página/día y 25 filas consulta/página/día para las candidatas; la segunda extracción agrega a trece combinaciones visibles iniciales más dos consultas de la ficha Pastéis. Ninguna consulta devuelta aparece en dos candidatas. La escasa cobertura impide descartar competencia. Cascais muestra sobre todo cómo llegar/distancias, con solo una consulta visible en la ficha sobre Cabo da Roca; Pastéis ficha muestra dos consultas visibles. Las sumas de consultas no reconcilian con las páginas y no se usan como total de demanda. Una lectura de páginas sin filtro devuelve 99 filas y confirma la ausencia de los candidatos SF en esa respuesta; no convierte esa ausencia en cero real. GSC Wizard no sirvió como segunda comprobación: list_sites devolvió INVALID_ARGUMENT; no se consultaron propiedades a ciegas.

[Snapshot con filas, periodos y método](../brain/data/CONSOLIDATION-SEARCH-2026-10-20.json). Cálculos contrastados de forma independiente; CTR desde numerador/denominador, posiciones ponderadas por impresiones, no promedio simple.

## 1. Restaurantes románticos → Lisboa en pareja

**WAIT; excepción razonada al 301 previsto, sin cambiar su destino.** Se leen los 23 bloques de Restaurantes y los 43 de Pareja, fuentes, relacionados, metadata y CTA. Restaurantes diferencia Fifty Seconds, Suba, Henrique Sá Pessoa, 1147, Café São Bento y Páteo Alfacinha por experiencia/zona. Pareja resuelve miradores, Alfama, fado, ferry, Belém, Sintra, presupuesto, lluvia y días. Su sección Dónde cenar dice expresamente que los nombres están en otro artículo. Redirigir hoy omitiría los seis restaurantes y dejaría texto/enlace de delegación incoherente.

No es contenido vacío por tener pocas señales. Tiene tres orígenes en main: Pareja, Vida nocturna y Vinos; Pareja recibe dos, desde Crucero y Restaurantes. Las consultas visibles no permiten decidir por SEO. La ficha oficial de [Páteo Alfacinha en Visit Lisboa](https://www.visitlisboa.com/en/places/pateo-alfacinha-restaurantes) respalda la terraza y su funcionamiento estacional; no certifica disponibilidad del restaurante ni todas las otras recomendaciones.

Propuesta concreta si se mantiene la orden de fusionar: conservar Pareja como URL final; reemplazar su sección de delegación (bloques 36–39) por una sección Dónde cenar con las seis opciones, sus diferencias y advertencias de acceso/desplazamiento. Preservar fuentes de los seis locales; no insertar toda esa lista como Lo esencial ni adelantar reservas. Trasladar la ayuda para elegir y reservar (bloques 15–18 de la fuente); evitar repetir el consejo general de paseo (19–22), ya desarrollado en Pareja. Revalidar los seis locales antes de copiar datos actuales. Actualizar los enlaces reales de Pareja, Vida nocturna y Vinos hacia la sección final, sin autoenlace de Pareja. Fuente archivada en Git, 301 directo solo al terminar la equivalencia, sitemap sin la antigua y pruebas de anclas/FAQ/schema. **No implementado.** Alternativa recomendada con la evidencia actual: conservar ambas, con intenciones diferenciadas. Cambiar definitivamente la orden de fusión requiere decisión de José; este informe no la revoca.

## 2. Novedades 2026 → Festivales 2026

**WAIT por falta de equivalencia y dudas del destino.** Diecisiete bloques de Novedades frente a veinte de Festivales. Solo los bloques de eventos 11–13 se solapan parcialmente. Museo/MAAT/Torre (1–4), gastronomía (5–7), expansión del Metro y Gira (8–10), alojamiento y comparación de precios (14–16) no están respondidos por el calendario. Hay afirmaciones vagas de tendencias y precios, una afirmación legal sobre alojamientos y datos cambiantes: no deben copiarse como hechos recién verificados.

Festivales mantiene la duda concreta de Santo António/San Juan/San Pedro y la promesa de calendario completo documentadas en [Fase 6F](editorial-phase6-events-review.md). Las dos URLs se enlazan mediante relacionados; el destino recibe cinco orígenes en main, todos relacionados. Ninguna tiene señal devuelta suficiente para probar canibalización.

Propuesta acotada: definir primero si Novedades será archivo de cambios del año o se retira tras distribuir sus respuestas. Para el 301 ordenado, Festivales tendría que ofrecer una orientación visible a esos cambios no festivos; no ensanchar su intención sin aprobación. Eventos útiles pueden integrarse en su edición correspondiente; transporte pertenece al cluster de movilidad y datos de museos a sus guías. Eso exige un mapa adicional de conservación y comprobación factual, **no autoriza redirigir a esos otros destinos**. No cambiar 2026 por 2027 globalmente. Sin esta decisión editorial, dejar los 200 y WAIT.

## 3. Monumentos → Qué ver

**REVIEW; Qué ver recomendado como portada de selección general.** Monumentos desarrolla cinco lugares y agrupa otros diez (incluido Sintra y museos), mientras el pilar organiza la visita por zonas/días/presupuesto. Hay solapamiento de selección; queda contexto patrimonial propio, con Ajuda, acueducto y Panteón que no debe desaparecer por recortar una lista.

La misma fuente anuncia entrada combinada Jerónimos/Torre en un bloque y billete aparte en otro: incoherencia interna, sin necesidad de inventar tarifa vigente. El pilar ofrece dos entradas en una compra a través de su módulo comercial; no equivale a un billete oficial combinado. No propagar esa confusión. La lectura de MMP no entregó detalle utilizable al extractor en esta sesión: no se declara desmentida ni revalidada cada tarifa/horario/cierre.

Mapa propuesto, pendiente: selección/zona a Qué ver; detalles operativos a guías específicas ya existentes; historia breve conservable como contexto. Prioridad factual antes de migrar. Cuatro orígenes de Monumentos frente a cinco en main del pilar; sus 97 orígenes totales dependen sobre todo del footer, no de 97 recomendaciones editoriales distintas. Una impresión a posición 78 no establece un ganador SEO. Sin redirect autorizado nuevo; ambas conservan canonical propio.

## 4. Bacalhau → Gastronomía

**REVIEW; conservar por ahora la intención específica.** Bacalhau tiene historia de conservación/importación, cinco preparaciones y distinción de compra/calidad; Gastronomía explica una carta portuguesa más general. Solo su entrada de Bacalhau à brás y referencias generales son repetición clara. La receta, historia y compra no caben en sustituirlo por una frase genérica.

La fuente depende de una página nacional del Norwegian Seafood Council para porcentajes de mercado sin fecha explícita del dato; esos porcentajes y las generalizaciones de consumo exigen verificación antes de trasladar. No se validan instrucciones de desalado en esta auditoría. Un único origen en main, relacionado desde Gastronomía, indica poco descubrimiento contextual; no significa ausencia de valor. No copiar automáticamente toda la historia a una guía de veinte platos que ya está REVIEW.

## 5. Vinos → Gastronomía

**REVIEW; recomendar guía de bebidas diferenciada antes de una fusión.** Vinos responde estilos, qué pedir por copa y vocabulario; Gastronomía responde platos. No hay un bloque equivalente a Oporto/Alentejo/pedir vino en el destino. La descripción de Vinos promete Douro y Madeira sin desarrollarlos en secciones propias; además hay precios y catas gratuitas sin fuentes en el objeto.

Duda factual comprobada: presenta Vinho Verde como vino que necesariamente se bebe joven. La [comisión de la región](https://www.vinhoverde.pt/fotos/documentacao/flyer_vinhos_verdes_eng_755552762686e8c83d0e70.pdf) distingue expresamente blancos jóvenes y envejecidos y vincula el nombre a la región. La [ficha técnica oficial](https://portal.vinhoverde.pt/fotos/documentacao/monosheet_vinhos_verdes_eng_868021771686e8c913cc09.pdf) describe evolución en botella. Corregir puntualmente y documentar sería útil; trasladar el bloque actual multiplicaría la imprecisión. No se cambia texto ni intención sin resolver esta URL. Tres orígenes en main: Gastronomía, Souvenirs y Restaurantes.

## 6. Cluster Pastéis de Belém

**REVIEW; artículo recomendado como referencia editorial del lugar, ficha conservada mientras se decide.** Dos páginas vivas y un alias retirado, no tres artículos competidores. Artículo: historia, marca/nata, colas, salas, consumo, conservación; ficha: precio/duración, llegada, momento y consejo. La incorporación de Lo esencial al artículo en Fase 6C aumenta la coincidencia práctica: separar historia y ficha ya no describe todo el estado actual.

La ficha tiene diez impresiones observadas a 90 días frente a SF en el artículo. Volumen y consultas insuficientes para retirar una URL por rendimiento. El artículo recibe cinco orígenes en main y la ficha dos dentro del crawl. [Horario del negocio](https://pasteisdebelem.pt/contactos/) coincide con las franjas generales/estacionales citadas; no prueba tiempos de cola ni disponibilidad de mesas. Artículo y ficha difieren en rapidez del servicio de mesa y prometen ventajas de cola no garantizadas. No trasladar esos absolutos.

Mantener el 308 histórico de mejores natas. Su texto antiguo incluye precios y locales desactualizados y consejos contradictorios de cola: no reactivarlo ni incorporarlo a ciegas. Antes de retirar la ficha, conservar llegada/precio/duración contrastados y referencias en el artículo, comprobar demanda/backlinks y aprobar URL exacta. Una redirección de la ficha no está autorizada por revisar el cluster.

## 7. Cascais: artículo frente a ficha

**REVIEW; ganador recomendado para Cascais general: `/blog/que-ver-cascais-desde-lisboa`.** Once orígenes en main y 55 impresiones a 90 días frente a uno/20 de la ficha; el artículo desarrolla tren, centro, museos, Boca do Inferno, playa y un día realista. No se decide por longitud: el artículo responde mejor la intención general y sus consultas visibles son sobre llegar/distancias.

La ficha sí añade Cabo da Roca, autobuses y advertencia de viento/niebla. Podría tener intención diferenciada de combinación costera si se verifican las rutas. La media de posición 8,85 frente a 23,60 del artículo corresponde a consultas/volúmenes distintos; no es una prueba de superioridad SEO ni de que la ficha robe al artículo.

Hallazgo de UX verificado en navegador: el artículo presenta el enlace final como actividad organizada/opción comercial; la ficha no vende un tour, no declara bookingUrl y explica transporte público. Corregir esa promesa sería una intervención pequeña con URL intacta, pero se detiene en esta URL para revisión conforme a la regla del proyecto. No se atribuye una caída de tráfico a esa frase. No se han revalidado aquí todas las obras de CP ni líneas de Carris Metropolitana. Futuro: artículo dueño de Cascais general; decidir entre conservar ficha realmente especializada en Cabo da Roca o integrar sus datos verificados antes de solicitar un 301 exacto. Sin migración automática.

## Priorización y prueba siguiente

| Orden | Acción propuesta | Impacto esperado / esfuerzo | Prueba / riesgo |
| --- | --- | --- | --- |
| 1 | Mantener baseline de publicación y comparar 7/14 días cerrados desde 21/10, además de 28 | Alto para diagnóstico / bajo | Separar recrawl de cambios de demanda; esperar datos finalizados, sin prometer causalidad |
| 2 | Resolver la promesa del enlace Cascais y el alcance de la ficha | Alto en claridad del recorrido / bajo | Misma URL; enlace describe lo que abre; no modificar ruta antes de revisar fuente oficial |
| 3 | Corregir solo las dudas concretas de Festivales antes de absorber Novedades | Alto en confianza / medio | Edición/fecha y hechos respaldados; no tocar Navidad/Nochevieja ni ampliar intención silenciosamente |
| 4 | Resolver discrepancia de entradas en Monumentos y su mapa al pilar | Alto en utilidad / medio | Verificación oficial y conservación de contexto; no mover URLs con el dato aún dudoso |
| 5 | Revisar Vinos y las promesas/absolutos de Gastronomía | Medio en confianza / medio | Corrección factual acotada; no inventar veinte entradas ni catas/precios |
| 6 | Resolver alcance del cluster Pastéis con consulta/página y backlinks | Medio en mantenimiento / medio | Conservar alias histórico; no retirar la ficha solo por volumen pequeño |
| 7 | Decidir las dos fusiones WAIT con el mapa de conservación anterior | Incierto en SEO / medio | Equivalencia visible antes de 301, enlaces directos, una fuente y un índice; no contar URLs retiradas como éxito |
| 8 | Tras observar la publicación, evaluar snippet de Metro con consultas reales | Mayor oportunidad de clics ya visible / bajo-medio | 1.141 impresiones, 3 clics, CTR 0,26 %, posición 8,79 en 28 días; conservar slug/contenido y no encadenar cambios hoy |

Estas acciones son propuestas, no modificaciones ejecutadas. No se ejecuta indexación, envío de sitemap ni automatización. No se cambian las páginas fuertes para justificar una fase nueva. La prioridad estratégica es proteger las guías que ya captan demanda y corregir respuestas concretas; las fusiones quedan subordinadas a equivalencia, no a una cuota de URLs.

## QA, archivos y gate

Cambios de esta rama: informe, snapshot Search Console, evidencia HTTP/responsive, notas del manifest sin cambiar acciones, documentación de migración/sistema y Mente Lisboa (estado confirmado de producción y D-054). Sin cambios a src/public/scripts, dependencias o workflows. Sin nuevos componentes, perfiles, títulos/metas/H1, fechas, canonical, schema, CTA, fuentes públicas o enlaces internos. Sin redirects/noindex nuevos; contrato conserva dieciséis 301, dos WAIT, ocho noindex/follow y sitemap de 98 URLs. Robots y Clerk intactos.

Navegador: trece páginas vivas × 390/1440 px = **26 vistas**, H1 única, canonical propio y sin overflow horizontal. [Matriz](qa/2026-10-20/phase7-responsive.json). No es una prueba completa de teclado/accesibilidad, tablet ni Core Web Vitals. Captura de la ficha que explica transporte público: [PC](qa/2026-10-20/phase7-cascais-desktop.png). No hay cambio visual nuevo para comparar antes/después. Lighthouse no ejecutado.

Validación independiente en Python: **108 comprobaciones correctas**, cero fallos. Se recalculan las seis ventanas y todas las páginas desde las filas retenidas, se comprueban granos sin duplicados, periodos iguales/adyacentes, grafos, URLs, 26 observaciones, 128 filas del manifest con solo notas distintas y contrato 16/2/8 sin cambios. Árboles de aplicación y workflows idénticos al baseline de producción. [Resultado y método](qa/2026-10-20/phase7-validation.json). No se repiten localmente build/lint/typecheck por documentación; no se presentan los checks del PR #112 como ejecuciones nuevas.

[PR #113](https://github.com/josetabares24-png/portugal-autentico-v2/pull/113), borrador. Preview **READY**, SHA **50c53110a11c12b4cfd1c4d12c9120a8662330b4**, deployment **dpl_AaLxMMQnMoR467HCJfFLFbnxvSyp**, `target:null`: [abrir Preview](https://portugal-autentico-v2-cv05iajda-estabaenlisboa.vercel.app). Requiere acceso Vercel o el enlace temporal entregado en conversación; no se guarda ese token en Git. TypeScript de CI, GitGuardian, comentarios de Preview y los dos checks Vercel pasan para ese SHA. El workflow de SEO no se activa por este diff documental: no afirmar que se ejecutó. El build remoto de Vercel termina READY; no Lighthouse nuevo.

Comprobación adicional en navegador de la guía Cascais en esa Preview a 390 px: abre la página de aplicación, H1 y canonical correctos, robots HTML index/follow y sin overflow. La indexabilidad de la Preview sigue condicionada por protección/cabeceras de plataforma; no se altera. [Observación](qa/2026-10-20/phase7-preview-sanity.json), [captura móvil de la promesa de enlace pendiente de corregir](qa/2026-10-20/phase7-preview-mobile.png). Es el estado existente, no un antes/después de una mejora implementada. El cierre posterior añade solo documentación/evidencia al mismo código. Sin merge ni publicación adicional.

**Gate:** revisión de Fase 7 terminada; ejecución de fusiones pendiente por las contradicciones descritas. No continuar a navegación/Home como si se hubieran resuelto. El siguiente paso concreto es decidir el alcance de las dos WAIT a partir de este informe, sin una confirmación genérica para migrar las demás URLs.
