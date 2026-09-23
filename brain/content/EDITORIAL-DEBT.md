# Registro de deuda editorial

Actualizado: **2026-09-23**

Este archivo no es una lista de artículos para reescribir en masa.

Su función es detectar contenido que contradice Mente Lisboa y cruzarlo con señal real de Search Console para decidir **qué reparar primero**.

## Método

Una deuda se considera confirmada solo después de revisar el objeto de artículo que sirve actualmente la web.

Las señales automáticas —primera persona, superlativos, precios, clichés— sirven para encontrar candidatos, pero no son prueba suficiente por sí solas.

Prioridad:

**señal SEO × riesgo de confianza × deuda editorial × antigüedad del cambio**

## PRIORIDAD ALTA

### /blog/donde-comer-barato-lisboa

**Search Console 90d:** 525 impresiones / 5 clics / posición 19,55.

**Estado:** E-007 RUNNING desde 2026-09-23.

Deuda confirmada:
- abre con una anécdota concreta en primera persona sobre pagar 18 € por un bacalhau à brás en Rossio y luego cenar por 8 € en Mouraria;
- esa experiencia no está documentada como experiencia real de José;
- afirma haber “mapeado cada rincón donde los lisboetas comen de verdad”;
- mezcla autoridad local, precios concretos y generalizaciones sin una fuente explícita;
- usa el contraste “donde comen los lisboetas” como sello de autenticidad.

Por qué importa:
- ya existe demanda;
- está en segunda página;
- mejorar confianza e intención puede ayudar a empujarla sin crear una URL nueva.

Reparación E-007 aplicada:
- eliminada la anécdota personal no documentada;
- eliminada la autoridad inventada sobre dónde comen “los lisboetas de verdad”;
- añadidos ejemplos con precio y fecha de fuente;
- añadida fuente oficial de ASAE para precios/couvert;
- añadida lógica por zona y tipo de comida;
- URL y diseño conservados.

No volver a editar mientras corre el experimento.

### /blog/barrios-imprescindibles

**Search Console 90d:** 447 impresiones / 8 clics / posición 17,81.

**Estado:** DEUDA ALTA / OBSERVE.

Deuda confirmada:
- primera persona: “He vivido en tres barrios diferentes…”;
- afirmaciones de autoridad local no documentadas;
- “Lisboa más auténtico”, “hora mágica”, “postales perfectas”, “fado auténtico”;
- estereotipos por tipo de viajero;
- absolutos y descripciones demasiado literarias;
- no presenta fuentes en el objeto actual revisado.

Riesgo:
El objeto declara `dateModified: 2026-09-21`. Aunque la deuda siga presente, no hacer otra reescritura inmediata hasta tener una ventana limpia y saber qué cambió realmente el 21/09.

### /blog/playas-cerca-lisboa

**Search Console 90d:** 45 impresiones / 0 clics / posición 16,91.

**Estado:** DEUDA ALTA / PRIORIDAD SEO BAJA.

Deuda confirmada:
- “He pasado incontables fines de semana explorando…”, experiencia no documentada;
- rankings y superlativos de playas;
- precios de tren/bus sin contexto de fecha;
- afirmaciones sobre accesos, servicios y restricciones que pueden cambiar;
- “auténtico”, “espectacular”, “paraíso” y otros recursos que Mente Lisboa intenta evitar.

Decisión:
No tocar antes que páginas con más señal. Cuando se repare, requerirá fuentes actuales de transporte, playas/accesos y restricciones.

## PRIORIDAD MEDIA

### /blog/azulejos-portugueses-historia

**Search Console 90d:** 95 impresiones / 0 clics / posición 9,88.

**Estado:** OBSERVE por cambio 2026-09-21.

Deuda:
- apertura literaria/genérica;
- afirmaciones absolutas como “el arte más democrático”;
- “sin discusión, el mejor lugar del mundo”;
- afirmaciones históricas que deberían llevar fuentes;
- recomendaciones de compra de azulejos históricos que necesitan especial cuidado por procedencia/legalidad.

Oportunidad:
La posición media cercana a 10 hace que una reparación futura pueda combinar confianza + CTR + cobertura temática.

### /blog/donde-alojarse-en-lisboa

**Search Console 90d:** 138 impresiones / 1 clic / posición 22,40.

**Estado:** OBSERVE por cambio 2026-09-21.

La versión actual es mucho mejor que la deuda histórica, pero todavía quedan:
- “más encanto”;
- “la recomiendo…”;
- varios juicios generales por tipo de viajero;
- CTAs y enlaces a itinerarios que deben evaluarse con la nueva medición interna.

No reescribir todavía.

### /blog/vida-nocturna-lisboa

**Search Console 90d:** 319 impresiones / 0 clics / posición 9,96.

**Estado:** OBSERVE por cambio 2026-09-21.

La revisión manual muestra que la versión actual ya está bastante alineada con Mente Lisboa:
- fuentes;
- estructura por necesidad;
- evita rankings absolutos;
- explica Bairro Alto/Cais do Sodré/fado según tipo de noche.

No tocar por deuda automática. El escáner había mezclado definiciones antiguas.

Problema real pendiente:
0 clics con posición ~10. Evaluar después de ventana de observación como problema de snippet/query fit, no como reescritura editorial.

## PROTEGIDAS / NO TOCAR AHORA

- como-moverse-por-lisboa
- como-pagar-en-portugal
- time-out-market-lisboa
- estacion-oriente-lisboa
- arquitectura-manuelina-lisboa
- aeropuerto-lisboa-al-centro
- tram-28-historia-guia
- lisboa-vs-porto
- chiado-bairro-alto-guia
- vida-nocturna-lisboa
- lisboa-card-vale-la-pena

Motivo:
cambios recientes o señal suficiente para exigir observación antes de otra intervención.

## EXPERIMENTO ACTIVO

### E-006 — /blog/donde-tomar-cafe-lisboa

Reparación desplegada 2026-09-23.

No volver a tocar mientras corre el experimento.

## Orden recomendado de reparación

1. **Dónde comer barato** — alta demanda + segunda página + deuda fuerte sin cambio reciente confirmado.
2. **Barrios imprescindibles** — alta señal, pero esperar ventana por dateModified 21/09.
3. **Azulejos** — primera página + deuda importante, pero observar cambio reciente.
4. **Playas** — deuda alta, menor señal.
5. Resto — solo cuando métricas o revisión manual lo justifiquen.

## Qué NO hacer

- no ejecutar search/replace global de palabras como “mejor” o “auténtico”;
- no borrar experiencias que José confirme como reales;
- no reescribir 20 artículos en un mismo commit;
- no cambiar título + cuerpo + URL + navegación a la vez;
- no declarar una pieza “IA” solo porque usa una palabra de la lista;
- no arreglar artículos con cero señal antes que páginas que Google ya está probando.

## Resultado esperado

Reducir deuda editorial al mismo tiempo que fortalecemos páginas que ya tienen oportunidad de crecer.

La calidad editorial es una herramienta de producto y confianza, no una campaña de limpieza estética.
