# Fase 6G — historia y cultura

19 octubre 2026. José indica continuar tras la revisión de eventos. Base `f230e62`, rama editorial-rebuild, PR #112 draft. Sin merge ni producción. Se leyeron completas nueve piezas para delimitar intención, presentación y dudas; no activación por categoría.

## Diagnóstico → decisión

HECHO: Historia de Lisboa explica sus capas a lo largo de una pieza extensa y solo al final reúne los lugares que ayudan a leerlas. Fado responde significado y origen al comienzo, pero reparte sonido, repertorio y evolución entre varias secciones. HIPÓTESIS: un resumen cultural permite orientarse antes de la lectura larga sin convertir estos artículos en fichas de entradas. DECISIÓN: dos perfiles culture manuales, con seis y cuatro pares; originales y orden conservados. PREFERENCIA: contexto y matices, sin tabla de precios ni relato nuevo.

| URL | Acción del lote | Límite |
| --- | --- | --- |
| /blog/historia-de-lisboa | Presentación | Seis capas: Olisipo, medieval, expansión, reconstrucción, revolución y Expo; conserva contexto colonial y evita fecha de fundación inventada |
| /blog/fado-historia-origen | Presentación | Origen, sonido, temas y evolución; no inventor único ni equivalencia automática con tristeza |
| /blog/arquitectura-manuelina-lisboa | KEEP, protegida | Ya define el estilo y sus símbolos; sin cambios de slug, título, contenido o presentación |
| /blog/estacion-olaias-lisboa | KEEP, protegida | Respuesta y lista breve inicial ya resuelven línea, duración orientativa y para quién; no duplicar |
| /blog/azulejos-portugueses-historia | REVIEW | Atribución artística en Picoas frente al Metro; detener intervención en esta URL |
| /blog/terremoto-lisboa-1755 | REVIEW | Magnitud presentada como cifra exacta y afirmaciones de primacía requieren revisión; sin reescritura |
| /blog/descubrimientos-portugueses-lisboa | REVIEW | Marco 1415–1542 incluye Japón; fuente institucional sitúa la llegada en 1543. Revisar también absolutos como «Todo partió de Lisboa» |
| /blog/donde-escuchar-fado-autentico | KEEP | Intención práctica distinta: elección de formato y condiciones; ya responde al principio. No fusionar con historia |
| /blog/monumentos-de-lisboa | REVIEW previo, Fase 7 | Conserva revisión de consolidación y datos prácticos pendientes; no resolverla por adaptar cultura |

El 28E mantiene el perfil de transporte ya revisado; su dimensión histórica no justifica otra caja. El alias /blog/descubridores-portugueses mantiene el 301 de Fase 1 al artículo canónico, aunque este último tenga una revisión factual pendiente. REVIEW no significa cambiar destino, desindexar o publicar otro artículo.

## Contenido, fuentes y límites

Los diez pares proceden de los bloques indicados en src/data/editorial-culture.ts. No se adapta la entradilla ni se reordenan secciones. Historia adelanta una lectura por lugares sin cifras de víctimas, magnitudes o cronologías nuevas. Mantiene la relación entre riqueza imperial, conquista, explotación y esclavitud. Fado no confunde figura simbólica con inventor; conserva la incertidumbre sobre influencias y origen. No nuevas experiencias personales, fuentes públicas, precios, horarios, reservas o referencias UNESCO en el resumen.

Consultas puntuales, no certificación de cada afirmación de los nueve cuerpos:

- [Museu de Lisboa — Teatro Romano](https://museudelisboa.pt/pt/about/venues/teatro-romano/) documenta el núcleo de Olisipo. El [registro municipal de Parque Expo](https://arquivomunicipal3.cm-lisboa.pt/X-arqWEB/Result.aspx?id=21865&type=Autoridade) vincula la exposición con la rehabilitación urbana oriental. La [página GEO de Historia](https://geo.lisboa.pt/atividades-e-difusao/projetos/historia-de-lisboa) fue recuperable en búsqueda con sus etapas; varias consultas directas a GEO/Revelar/Arquivo y al PDF Tempos Fortes no devolvieron contenido legible. No se afirma una reverificación total de cronología ni se interpreta esa limitación como cierre del servicio. Los perfiles resumen lo ya escrito.
- [Museu do Fado — História](https://www.museudofado.pt/historia-do-fado) respalda Lisboa popular del XIX, variedad temática, guitarra, memoria de Severa y consolidación internacional con Amália. [Visit Lisboa — Rota](https://www.visitlisboa.com/pt-pt/lisbon-stories/1-fado-route) explica destino. UNESCO presentó una verificación humana al extractor: no se resolvió ni se toma como prueba de retirada del reconocimiento. Su referencia original permanece, pero no se añade una afirmación nueva dependiente de esa consulta.
- [Metro — Picoas](https://www.metrolisboa.pt/viajar/picoas/) identifica a Maria Keil y Martins Correia, frente a Eduardo Nery en el bloque 14 de Azulejos. Esa discrepancia basta para detener la adaptación y pedir revisión de atribuciones. [Parque](https://www.metrolisboa.pt/viajar/parque/) sí incluye Maria Keil, además de Françoise Schein y Federica Matta: **no se declara falsa** la mención de Keil allí. [Olaias](https://www.metrolisboa.pt/viajar/olaias/) separa arquitectura de Tomás Taveira y artistas, además de confirmar su posición entre Alameda y Bela Vista. No se crea una guía de horarios actualizados.
- [CML — RESIST](https://www.lisboa.pt/temas/seguranca-e-prevencao/sismos/programa-resist/divulgacao-e-sensibilizacao/apresentacao) emplea magnitud **estimada** 8,7 para 1755, mientras la bajada de Terremoto da 8,5 sin calificación. No demuestra que una estimación concreta sea imposible: demuestra que debe indicarse naturaleza estimada y fuente, sin inventar precisión. Las afirmaciones «reconstrucción más rápida» y «primera estatua pública… de un monarca europeo» tampoco se reutilizan sin comprobación. El [PDF municipal sobre D. José I](https://www.lisboa.pt/fileadmin/informacao/publicacoes/arquivo_municipal/Estatua_Equestre_D_Jose_I.pdf) se localiza para la revisión posterior; no se presenta aquí como prueba de esos superlativos.
- [Museu de Marinha — Tanegashima](https://cultura.marinha.pt/pt/museumarinha_web/multimedia_web/Paginas/espingarda-tanegashima.aspx) fecha la llegada portuguesa a Japón en 1543. El periodo inicial que termina en 1542 necesita revisión antes de resumirse. La [edición de Imprensa Nacional](https://imprensanacional.pt/edicoes/a-descoberta-do-japao-primeiros-testemunhos-e-primeiros-mapas-1543-1552/) también usa 1543. No se sustituye el marco por otro año automáticamente ni se reproduce como hecho un centro científico de Sagres, el retorno financiero del viaje u otras primacías no comprobadas.

Las fuentes originales, sus etiquetas y enlaces se conservan en cada página; estas consultas quedan como evidencia de trabajo, sin aumentar la bibliografía pública o renovar la fecha del artículo. Azulejos, Terremoto y Descubrimientos conservan las frases pendientes hasta una corrección acotada revisada. La regla de José de detener y reportar una URL dudosa se aplica solo a esas piezas.

## Implementación y SEO

src/data/editorial-culture.ts añade dos perfiles culture reutilizando ArticleEssentials. Título existente por defecto En 30 segundos; seis filas para Historia y cuatro para Fado. No nuevos componentes/CSS ni JavaScript cliente. La resolución en la página del blog añade este registro después de los anteriores. Firma bajo imagen, mismo autor y fechas. No campos comunes de precios o calendarios.

scripts/smoke-editorial-template.mjs incorpora SMOKE_EDITORIAL_CULTURE=1: 27 perfiles exactos en 72 superficies. Conserva orden de cuerpo/headings/anclas/enlaces en los lotes de Fase 6; comprueba además tipo culture y título En 30 segundos en las dos nuevas cajas. El alcance explícito evita modificar Olaias, Manuelino o las páginas REVIEW.

Sin cambios de URLs, intención, títulos/metas, H1, imágenes/ALT, fechas, canonical, schema, FAQ, fuentes, afiliados o enlaces internos. Sin redirects/noindex nuevos. Sitemap de 98 URLs, robots y Clerk intactos. Manifest de 128 filas conserva rutas y añade tres etiquetas REVIEW documentales; no se ejecuta como migración. Novedades/restaurantes románticos WAIT y todas las revisiones anteriores permanecen. Home, navegación, portada del blog, autoría global y consolidaciones fuera del lote.

## Métricas, impacto esperado y riesgos

Baseline GSC/Windsor 15/10: periodo cerrado 14/09–11/10 frente a 17/08–13/09. Fado: 0 clics/65 impresiones/CTR 0 %/posición 7,45 frente a 1/162/0,62 %/10,72. Olaias: 3/143/2,10 %/7,11 frente a 0/69/0 %/6,96. Manuelino: 1/55/1,82 %/7,96 frente a 2/518/0,39 %/9,09. Descubrimientos: 0/50/0 %/7,74 frente a 1/77/1,30 %/7,96. Azulejos: 0/9/0 %/7,56 frente a 0/92/0 %/10,08. Historia y Terremoto no tienen fila en este snapshot: no equivale a cero demanda.

No nueva extracción ni atribución de esas variaciones a esta rama. El objetivo es orientación y lectura, no una promesa de CTR o ranking. Tras eventual publicación aprobada: fecha/SHA de producción y ventanas equivalentes de 7/14/28 días con clics, impresiones, CTR y posición. Meta global permanece 28.000 impresiones/28 días junto a más clics.

Esfuerzo pequeño: dos registros manuales y QA. Riesgo de desincronizar resumen y cuerpo al editar artículos; sourceBlocks y preservación automatizada facilitan revisión conjunta. No se garantiza ausencia de fluctuaciones SEO. Mantener párrafos y schema no certifica todos los datos históricos, imágenes o enlaces de terceros. No Lighthouse ni afirmaciones de Core Web Vitals sin medición.

## QA y entrega

Baselines local/remoto registrados antes de editar, con los 25 perfiles anteriores. Integridad 9/9: siete inicializadores completos sin cambios y dos listas de bloques válidas frente a f230e62. El bloque culture no obliga a poner precios ni desplaza reservas hacia el comienzo.

Aplicación `5502da2`. QA local: build 137 páginas, TypeScript correcto y lint sin errores, con warning preexistente de analyticsParams en ItineraryContextualCta. Plantilla 1.670/1.670 en 72 superficies; migración 1.426/1.426, 106 páginas, 113 enlaces internos y 16 redirects; sitemap 64/64 y 98 URLs. Blog: 828 invariantes, 69 HTML y cinco redirects, 97 enlaces internos sin rotos. Navegador: nueve piezas × 390/412/768/1440 px, 36 vistas sin overflow y H1 única; solo las dos seleccionadas reciben caja culture de seis/cuatro filas. Manuelino y Olaias intactos.

Al cerrar, actualizar este informe con resultados reales, SHA comprobado, Preview, archivos/evidencia y estado de producción. Sin merge. Siguiente etapa después del gate del grupo G: revisiones/consolidaciones de Fase 7, sin fusiones automáticas ni rediseño de navegación no aprobado.
