# SEO Growth Plan — objetivo 1.000 impresiones/día

Actualizado: 2026-09-21

## Objetivo

Hacer crecer `estabaenlisboa.com` hasta una media sostenida de más de 1.000 impresiones orgánicas diarias sin perseguir una sola keyword, sin publicar contenido masivo y sin sacrificar precisión editorial.

El objetivo de medición es **28.000+ impresiones en una ventana de 28 días**, no un pico aislado de un día.

## Baseline conocido

Datos reales de Google Search Console consultados el 21 de septiembre de 2026 mediante la propiedad de dominio `estabaenlisboa.com`.

### Últimos 28 días completos: 24 Ago – 20 Sep 2026

- 6.296 impresiones.
- 53 clics.
- CTR: 0,84 %.
- Posición media: 12,87.
- Media: ~225 impresiones/día.

### 28 días anteriores: 27 Jul – 23 Ago 2026

- 4.301 impresiones.
- 41 clics.
- CTR: 0,95 %.
- Posición media: 11,91.
- Media: ~154 impresiones/día.

Cambio 28d vs 28d anterior:

- impresiones: +46,4 %;
- clics: +29,3 %;
- CTR: -0,11 puntos porcentuales;
- posición media: ~0,95 posiciones peor.

Lectura: el sitio creció claramente en cobertura total frente al periodo anterior, pero perdió CTR y desde comienzos de septiembre aparece una caída de impresiones diarias. No tratar esa caída como una penalización general: varias URLs mantuvieron o mejoraron posición mientras perdían volumen de consultas.

### URLs prioritarias por impresiones + posición + CTR

- `/blog/como-moverse-por-lisboa`: 832 impresiones, posición 9,74, CTR 0,48 %.
- `/blog/como-pagar-en-portugal`: 781 impresiones, posición 6,88, CTR 0,90 %.
- `/blog/time-out-market-lisboa`: 466 impresiones, posición 8,72, CTR 1,29 %.
- `/blog/estacion-oriente-lisboa`: 446 impresiones, posición 9,87, CTR 0,67 %.
- `/blog/arquitectura-manuelina-lisboa`: 330 impresiones, posición 8,98, CTR 0,61 %.

Estas cinco URLs deben medirse antes y después de cada cambio de title/meta. Evitar reescrituras grandes simultáneas mientras están cerca de primera página.


## Principios

1. Exprimir URLs que ya reciben impresiones antes de crear decenas de artículos.
2. Priorizar queries en posiciones 4–15 y después 15–30.
3. Construir autoridad temática sobre Lisboa mediante clusters conectados.
4. Mantener URLs posicionadas salvo necesidad clara.
5. No publicar precios, horarios o condiciones variables sin fecha y fuente.
6. No inventar experiencia local, precios medios, tiempos exactos o superioridad de un negocio.
7. No usar noindex ni borrar páginas solo porque parezcan débiles: comprobar GSC primero.
8. No perseguir PageSpeed 100 si el cuello de botella real es contenido, intención o enlazado.
9. Medir CTR además de impresiones.
10. Cada artículo nuevo debe tener enlaces entrantes y salientes útiles.

## Trabajo ya implementado

### Arquitectura y on-page

- Canonical autorreferente para páginas paginadas del blog.
- Home reforzada como hub de “qué ver en Lisboa”.
- Tarjetas de barrios de la home enlazan a guías específicas.
- Sitemap con fechas UTC estables.
- `datePublished` y `dateModified` separados cuando corresponde.
- Presupuesto 2026 revisado para no depender de rangos antiguos de alojamiento.
- Guía de alojamiento revisada para retirar precios medios y afirmaciones no respaldadas.

### Nuevos clusters

Primera expansión:

- Lisboa en 4 días.
- Tarjeta Navegante Lisboa 2026.
- Graça: qué ver.
- Baixa: qué ver.

Segunda expansión:

- Lisboa en 5 días.
- Lisboa cuando llueve.
- Parque das Nações: qué ver.
- Metro de Lisboa 2026.

### Rendimiento / arquitectura pública

- Clerk retirado del layout y navbar públicos.
- Clerk limitado a rutas que requieren autenticación.
- Mensajes de idioma estáticos en sitio monoidioma.
- Cookie de locale desactivada.
- Causa del SSR público identificada: `next-intl` resolvía el locale desde el request.
- Se añadió `setRequestLocale(locale)` tras validar el locale.
- Build verificado con Next.js 16.3.5: home, artículos, actividades, itinerarios y páginas públicas pasan de `ƒ Dynamic` a `● SSG`.
- `/[locale]/blog` permanece dinámico porque su paginación usa `searchParams`; las páginas de artículos sí quedan prerenderizadas.


### Enlazado

- Nuevos clusters conectados con itinerarios, movilidad, Oriente, Sintra y barrios.
- Se añadieron entradas relevantes hacia páginas antes débiles como Lisboa vs Porto, novedades 2026 y evitar turistadas.
- Los artículos nuevos deben seguir recibiendo enlaces desde pilares conforme ganen impresiones.

## Estado editorial real

Corrección de auditoría del 2026-09-21: el conteo inicial de páginas fallback fue incorrecto porque el script de comprobación solo detectaba claves con comillas simples y omitía artículos definidos con comillas dobles.

Estado verificado después de corregir el parser:

- 60 entradas publicadas en `blogPosts`.
- 60/60 tienen contenido editorial explícito en el mapa de artículos.
- El último fallback real era `/blog/restaurantes-romanticos-lisboa`; ya fue sustituido por una guía editorial completa.
- El generador fallback genérico queda eliminado para impedir que una futura entrada sea indexable únicamente por existir en `blogPosts`.

A partir de ahora, una entrada publicada debe tener contenido editorial explícito antes de poder resolverse como artículo. Las decisiones de reescritura, fusión, redirección, noindex o retirada siguen dependiendo de datos reales de Search Console, no de un supuesto estado “legacy”.

## Pilares a vigilar en Search Console

- /
- /blog/donde-alojarse-en-lisboa
- /blog/como-moverse-por-lisboa
- /blog/lisboa-card-vale-la-pena
- /blog/aeropuerto-lisboa-al-centro
- /blog/que-hacer-gratis-en-lisboa
- /blog/mejores-miradores-lisboa
- /blog/sintra-desde-lisboa
- /blog/presupuesto-viajar-lisboa
- /itinerarios/lisboa-1-dia-lo-esencial
- /itinerarios/lisboa-2-dias-completo
- /itinerarios/lisboa-3-dias-premium
- /blog/lisboa-en-4-dias
- /blog/lisboa-en-5-dias
- /blog/tarjeta-navegante-lisboa
- /blog/metro-lisboa-guia

## Próximas oportunidades editoriales

Validar con GSC/SERP antes de producir:

- Lisboa en 6 días.
- Cómo llegar a Belém.
- Cais do Sodré: qué ver.
- Óbidos desde Lisboa.
- Nazaré desde Lisboa.
- Costa da Caparica desde Lisboa.
- Lisboa en Navidad.
- Lisboa en diciembre.
- Estrela: qué ver.
- Príncipe Real: qué ver.
- Lisboa con poco presupuesto.

No crear todas de una vez. Publicar por lotes pequeños y observar qué empieza a recibir impresiones.

## Modelo de 1.000 impresiones/día

No es una previsión; es una forma de repartir el objetivo:

- 10 pilares × 40 impresiones/día = 400.
- 15 URLs secundarias × 20 = 300.
- 25 long-tail × 8 = 200.
- Home y otras consultas = ~100.

Total de referencia: ~1.000 impresiones/día.

La mezcla real debe salir de Search Console.

## Línea base real de Search Console — 21 Sep 2026

Datos extraídos de la propiedad `sc-domain:estabaenlisboa.com`. Se usan datos finalizados; no se mezclan con datos frescos parciales.

### 28 días contra 28 días anteriores

| Periodo | Clics | Impresiones | CTR | Posición media |
|---|---:|---:|---:|---:|
| 24 Ago–20 Sep 2026 | 53 | 6.296 | 0,84 % | 12,87 |
| 27 Jul–23 Ago 2026 | 41 | 4.301 | 0,95 % | 11,91 |

Lectura: en la ventana de 28 días, las impresiones suben aproximadamente un 46 % y los clics alrededor de un 29 %. No hay evidencia de un colapso global de visibilidad al comparar periodos completos.

### Caída reciente dentro de la ventana

| Periodo | Días | Impresiones | Media/día | Clics | Posición media |
|---|---:|---:|---:|---:|---:|
| 25 Ago–6 Sep | 13 | 3.889 | ~299 | 29 | 13,58 |
| 7–19 Sep | 13 | 2.122 | ~163 | 20 | 12,07 |

La caída reciente de impresiones es real: aproximadamente -45 % en impresiones diarias. Sin embargo, la posición media mejora. Eso no encaja con una penalización uniforme de rankings.

La cobertura visible de consultas también se estrecha:

| Medida | 25 Ago–6 Sep | 7–19 Sep |
|---|---:|---:|
| Filas de páginas en GSC | 62 | 76 |
| Páginas con >=10 impresiones | 48 | 39 |
| Filas de consultas visibles | 503 | 274 |
| Consultas con >=5 impresiones | 43 | 19 |

Search Console anonimiza parte de las consultas, por lo que estas filas no suman todas las impresiones del sitio. Sí sirven para comparar dirección entre periodos equivalentes.

### Interpretación prudente

El patrón observado es compatible con una pérdida de cobertura de consultas: Google siguió mostrando bastantes URLs y la posición media incluso mejoró, pero dejó de enseñar algunas páginas para muchas variantes de búsqueda.

El historial del repositorio muestra rediseños importantes entre el 30 de agosto y el 3 de septiembre y, después, trabajos de recuperación editorial y de crawlabilidad entre el 7 y el 9 de septiembre. Los documentos de recuperación registran pérdida/restauración de enlaces editoriales y retirada de FAQs. La coincidencia temporal es relevante, pero no prueba causalidad. También pueden influir cambios de demanda, SERP o Google.

### Páginas con mejor oportunidad observada

- `/blog/como-moverse-por-lisboa`: 832 impresiones / 28 días, posición media ~9,7.
- `/blog/como-pagar-en-portugal`: 781, posición ~6,9.
- `/blog/time-out-market-lisboa`: 466, posición ~8,7.
- `/blog/estacion-oriente-lisboa`: 446, posición ~9,9.
- `/blog/arquitectura-manuelina-lisboa`: 330, posición ~9,0 antes de perder cobertura de sus consultas principales.
- `/itinerarios/lisboa-1-dia-lo-esencial`: 257, posición ~12,4.
- `/blog/mejores-apps-lisboa`: 133, posición ~5,4.
- `/blog/vida-nocturna-lisboa`: 122, posición ~10,4.
- `/blog/lisboa-vs-porto`: 122, posición ~13,7.
- `/blog/chiado-bairro-alto-guia`: 119, posición ~14,4.
- `/blog/fado-historia-origen`: alrededor de posición 9–10 antes de la última optimización.

### Consultas concretas usadas para priorizar

- `time out market lisboa`: 86 impresiones, posición ~10, 0 clics.
- `menú de time out market lisboa`: 13, posición ~6, 0 clics.
- `estilo manuelino`: 71 / 28 días; desapareció en el periodo reciente después de estar alrededor de posición 10.
- `arte manuelino`: 23, posición ~8.
- `arquitectura manuelina`: 16, posición ~9.
- `como moverse en lisboa`: 25, posición ~11.
- `que ver en lisboa en un dia`: 28, posición ~14.
- `vida nocturna lisbon`: 14, posición ~13.
- `gare do oriente`: 10, posición ~10.
- `origen del fado` y `fado significado`: visibles previamente alrededor de posiciones 11–14 y luego perdidas en la ventana reciente.

### Cambios aplicados a partir de estos datos

1. **Arquitectura manuelina**: H1/title reorientados a “qué es el estilo manuelino”, características y ejemplos; fuentes oficiales; commit de main `b81f3f15d29529959ac062cb84109a92f306befa`.
2. **Quick wins de snippet**: Time Out Market, cómo moverse y Estación de Oriente alineados con consultas reales; commit `d7c4fe040dbea0c2bc79ddc2fdbe9f42cc65b1c6`.
3. **Lisboa en 1 día**: title/H1/meta/JSON-LD alineados con “qué ver en Lisboa en 1 día” e intención de mapa; commit `5a2614bbade3abd53e1ec649aff6925418b49823`.
4. **Vida nocturna**: reescritura por intención “dónde salir / qué hacer de noche”, sin precios u horarios de locales rígidos; commit `72c8ed71cda2eb6e7bdf324fac890a24df139dd9`.
5. **Fado**: reescritura para “significado / origen / historia”, separando hechos de hipótesis y usando UNESCO, Museu do Fado y Visit Lisboa; commit `bc5589d04c43767066e1c1c4b596bdba570e2dc0`.

Además, antes de esta fase ya se había:
- activado SSG para el árbol público mediante `setRequestLocale(locale)` y separado `/admin` como dinámico; commit `16b95d84f8db4e0af56d58f740398038eff7e243`;
- eliminado el último fallback genérico del blog, dejando 60/60 publicaciones con contenido editorial explícito; commit `3bcf7d7cde590a84fdd1995215f9fa3e1adab35d`;
- reescrito Sintra, aeropuerto y miradores como pilares editoriales; commit `24c3c7da0c96b7317b13acdd83b4cb446c214d1e`.

### Estado de despliegue y protocolo de medición

A 21 de septiembre estos cambios están en `main`, pero el límite de builds de Vercel ha bloqueado nuevos despliegues. No atribuir ningún cambio de GSC a estos commits hasta que exista un deployment de producción que los contenga.

Después del deployment:

1. confirmar que las páginas editoriales salen prerenderizadas/cachéables y ya no responden como `private, no-store`;
2. registrar el SHA desplegado y la fecha exacta;
3. comparar GSC en ventanas equivalentes de 7 y 14 días finalizados;
4. medir por separado impresiones, cobertura de consultas, posición y CTR;
5. no declarar éxito o fracaso por 1–3 días de datos;
6. priorizar después únicamente las páginas que sigan mostrando demanda real.

### Distancia al objetivo

La línea base reciente es ~163 impresiones/día; el tramo anterior alcanzaba ~299/día. El primer objetivo operativo no debe ser saltar directamente a 1.000, sino recuperar de forma estable el rango de 300/día y después ampliar cobertura.

Desde ~163/día hasta 1.000/día faltan ~837 impresiones diarias. Recuperar el nivel anterior cubriría ~136/día de esa diferencia; el resto exige más consultas y más URLs útiles, no solo mejorar CTR.

El objetivo de 1.000/día sigue siendo una meta de crecimiento, no una previsión ni una garantía.


## Lote GSC 3 — páginas en posiciones 10–20

Baseline registrado el 21 de septiembre de 2026 sobre la ventana finalizada **24 Ago–20 Sep 2026**. Los totales por URL se consultan sin dimensión `query`; las consultas visibles se usan solo para entender intención porque Search Console anonimiza parte de ellas.

| URL | Clics | Impresiones | CTR | Posición media |
|---|---:|---:|---:|---:|
| `/blog/tram-28-historia-guia` | 0 | 177 | 0,00 % | 17,69 |
| `/blog/barrios-imprescindibles` | 2 | 161 | 1,24 % | 17,10 |
| `/blog/chiado-bairro-alto-guia` | 0 | 119 | 0,00 % | 14,39 |
| `/blog/presupuesto-viajar-lisboa` | 0 | 92 | 0,00 % | 16,63 |
| `/blog/mejores-mercados-lisboa` | 0 | 86 | 0,00 % | 15,01 |
| `/blog/alfama-historia-guia` | 0 | 74 | 0,00 % | 18,28 |
| `/blog/donde-escuchar-fado-autentico` | 0 | 49 | 0,00 % | 15,37 |

Consultas visibles que guiaron el ajuste:

- Tranvía 28: `tram 28 lisboa` ~12,9; `eléctrico 28 lisboa` ~12; `tram 28` ~19,6; `tranvia 28` ~20,7.
- Barrios: `barrios de lisboa` fue la consulta visible con más impresiones; también aparecen variantes `bairros lisboa` y `bairros de lisboa`.
- Chiado/Bairro Alto: `chiado y barrio alto` ~11; `bairro chiado lisboa` ~12,5; `chiado lisbon` ~18,7.
- Presupuesto: además de consultas ruidosas/no relevantes, aparece `lisboa es caro o barato` ~15,5; la página se reorienta a intención de coste/presupuesto 2026.
- Mercados: `mercados lisboa` ~13; `mercados de lisboa` ~16,5; `mercados en lisboa` ~17,5.
- Alfama: `alfama barrio` ~11; la consulta genérica `alfama` tiene más impresiones visibles pero posición mucho más baja.
- Fado: aparecen `donde escuchar fado en lisboa`, `escuchar fado en lisboa` y `fado en lisboa no turístico`; la última estaba alrededor de posición 17.

Cambios del lote:

1. Barrios y Chiado/Bairro Alto: ajuste quirúrgico de H1/title/meta para reflejar la consulta principal.
2. Tranvía 28: reorientación a ruta, paradas y tarifas 2026; se retiran tarifas antiguas y recomendaciones rígidas.
3. Presupuesto: retirada de rangos de alojamiento/comida de 2024 y cambio a un método de cálculo por partidas con tarifas oficiales de transporte 2026.
4. Mercados: retirada de precios/horarios no verificados y selección basada en fuentes municipales o de juntas de freguesia.
5. Alfama: cambio de intención desde “historia/secretos” hacia “qué ver / miradores / ruta a pie”.
6. Fado: cambio desde afirmaciones subjetivas de “auténtico vs turístico” hacia tipos de experiencia, zonas y casas con referencias oficiales.

Protocolo de comparación: no evaluar este lote hasta que el commit esté desplegado en producción. Después, comparar ventanas finalizadas equivalentes de 7 y 14 días por URL y por consultas visibles, registrando impresiones, CTR, posición y ampliación/reducción de cobertura.


## Revisión semanal

Cada semana revisar:

- impresiones totales;
- clics;
- CTR;
- queries nuevas;
- queries posición 4–15;
- queries posición 15–30;
- páginas que ganan/pierden impresiones;
- nuevas URLs que empiezan a aparecer;
- páginas con muchas impresiones y CTR bajo.

## Prohibiciones

- No cambiar slugs posicionados sin razón fuerte.
- No borrar contenido en masa.
- No publicar artículos casi idénticos para variaciones de keyword.
- No crear backlinks spam.
- No rellenar artículos con FAQs por sistema.
- No inventar precios, horarios, experiencia personal o “secretos”.
- No afirmar causalidad entre un cambio de diseño y una caída de GSC sin evidencia.

- 2026-09-21: se solicitó un nuevo intento de deployment de producción después de validar `npm run typecheck` con éxito en GitHub Actions. Este commit sirve también como disparador del Git deployment de Vercel.
