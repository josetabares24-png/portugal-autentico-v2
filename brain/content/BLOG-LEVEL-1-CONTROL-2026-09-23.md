# Blog Level 1 — control editorial 60/60

Actualizado: **2026-09-23**

Este archivo es el registro operativo para elevar **cada artículo público** de Estaba en Lisboa a un estándar editorial Nivel 1 sin destruir señales SEO ni reabrir experimentos activos.

## Corrección metodológica importante

La auditoría definitiva usa **límites estructurales del objeto JavaScript (balance de llaves)** para separar los artículos en `src/app/[locale]/blog/[slug]/page.tsx`.

Un escaneo preliminar basado en saltos de línea produjo falsos positivos de "contenido mezclado" porque algunos objetos están concatenados en la misma línea. Ese diagnóstico queda **DESCARTADO**. No asumir contaminación cruzada sin comprobar el objeto real con límites estructurales.

Cobertura validada: **60/60 artículos públicos encontrados**.

## Qué significa Nivel 1

Una página solo pasa Nivel 1 cuando cumple, en conjunto:

1. **Intención inmediata:** responde pronto a lo que la persona vino a resolver.
2. **Valor de decisión:** ayuda a elegir, priorizar, evitar un error o entender un mecanismo.
3. **Diferencial editorial:** aporta contexto, criterio o explicación que no sea una lista turística intercambiable.
4. **Confianza:** hechos fuertes o cambiantes tienen fuentes adecuadas; precios/horarios/accesos se fechan o se remiten a fuente viva.
5. **Voz humana:** no inventa experiencias de José ni autoridad local; evita "auténtico", "secreto", "imperdible" y superlativos sin criterio.
6. **Continuación útil:** enlaza a la siguiente necesidad real dentro del cluster.
7. **Monetización contextual:** CTA comercial solo cuando resuelve el siguiente paso; utilidad primero.
8. **Mantenimiento:** información volátil entra en Visitor Impact o queda formulada para no caducar silenciosamente.

Un artículo largo **no** es Nivel 1 por longitud. Un artículo con fuentes **no** es Nivel 1 si no ayuda a decidir.

## Baseline GSC de deuda prioritaria

Ventana: **2026-06-25 → 2026-09-22**.

| Página | Clics | Impresiones | Posición | Lectura |
|---|---:|---:|---:|---|
| barrios-imprescindibles | 8 | 442 | 17.91 | Alta oportunidad, pero cambio reciente: observar |
| descubrimientos-portugueses-lisboa | 1 | 100 | 7.86 | Page 1: source pass quirúrgico, no rewrite |
| azulejos-portugueses-historia | 0 | 95 | 9.88 | Page 1 + cambio reciente: proteger |
| que-ver-cascais-desde-lisboa | 0 | 50 | 25.12 | Rebuild permitido |
| playas-cerca-lisboa | 0 | 45 | 16.91 | Rebuild permitido |
| semana-santa-lisboa | 1 | 25 | 16.64 | Futuro candidato estacional |
| mejor-epoca-visitar-lisboa | 0 | 6 | 18.50 | Deuda alta, poca señal |

Las demás páginas P1 de la lista no devolvieron fila visible en esta consulta de 90 días; no interpretar eso como prueba de cero demanda absoluta.

## Lote iniciado 2026-09-23

### Cascais
Rebuild editorial preparado:
- decisión antes que listado;
- CP y obras actuales verificadas;
- ruta realista;
- elección entre cultura, costa y playa;
- monetización solo al final y contextual.

### Playas cerca de Lisboa
Rebuild editorial preparado:
- deja de ser ranking de "mejores";
- compara Carcavelos, Costa da Caparica, Adraga y Arrábida por logística;
- fuentes oficiales de Cascais, Turismo de Portugal, Carris Metropolitana, Sintra y Setúbal;
- restricciones estacionales de Arrábida fechadas.

Ambas deben pasar TypeScript + SEO smoke + revisión de producción antes de marcarse como **DONE**.

## Control 60/60

| Slug | Estado | Siguiente acción |
|---|---|---|
| `lisboa-en-5-dias` | P2 — PENDIENTE | Añadir fuentes y más diferenciación práctica sin duplicar itinerarios. |
| `lisboa-cuando-llueve` | P2 — PENDIENTE | Reforzar fuentes/planes por zona; mantener enfoque útil. |
| `parque-das-nacoes-lisboa-que-ver` | N1 — PROVISIONAL | Proteger; revisar solo con señal o cambio factual. |
| `metro-lisboa-guia` | N1 — PROVISIONAL / DINÁMICO | Mantener con Visitor Impact y tarifas oficiales. |
| `lisboa-en-4-dias` | P2 — PENDIENTE | Añadir fuentes y señales de decisión sin alargar por SEO. |
| `tarjeta-navegante-lisboa` | N1 — PROVISIONAL / DINÁMICO | Mantener tarifas verificadas; revisar por Visitor Impact. |
| `graca-lisboa-que-ver` | N1 — PROVISIONAL | Proteger salvo nueva evidencia. |
| `baixa-lisboa-que-ver` | N1 — PROVISIONAL / DINÁMICO | Mantener alertas Santa Justa mínimas y verificadas. |
| `volta-portugal-devolucion-envases` | N1 — PROVISIONAL | Proteger; revisar si cambia el sistema. |
| `patinetes-electricos-lisboa` | N1 — PROVISIONAL / DINÁMICO | Revisar precios/apps solo ante cambio material. |
| `time-out-market-lisboa` | PROTEGIDO / OBSERVE | Cambio reciente; no reescribir hasta ventana limpia. |
| `estacion-oriente-lisboa` | PROTEGIDO / OBSERVE | Cambio reciente; no reescribir hasta ventana limpia. |
| `estacion-olaias-lisboa` | N1 — PROVISIONAL | Buena profundidad y fuentes; proteger. |
| `lisboa-en-7-dias` | N1 — PROVISIONAL | Diferenciación clara por ritmo/reparto; proteger. |
| `donde-fotografiar-lisboa` | N1 — PROVISIONAL | Fuerte utilidad diferencial; proteger. |
| `lisboa-con-ninos` | P2 — PENDIENTE | Revisar primera persona, datos familiares y fuentes. |
| `lisboa-en-pareja` | N1 — PROVISIONAL | Revisar solo con señal o factualidad. |
| `mejores-apps-lisboa` | PROTEGIDO / OBSERVE | Cambio reciente; comprobar apps vigentes antes de tocar. |
| `como-pagar-en-portugal` | PROTEGIDO / OBSERVE | Prioridad SEO; no tocar durante observación. |
| `donde-alojarse-en-lisboa` | PROTEGIDO / OBSERVE | Deuda menor; esperar ventana post-21/09. |
| `lisboa-card-vale-la-pena` | PROTEGIDO / OBSERVE | Dinámica y comercial; conservar baseline. |
| `como-moverse-por-lisboa` | PROTEGIDO / OBSERVE | Activo principal; proteger. |
| `que-hacer-gratis-en-lisboa` | N1 — PROVISIONAL | Mantener; futura revisión solo por datos o intención. |
| `mejores-miradores-lisboa` | N1 — PROVISIONAL | Buen enfoque por elección/ruta; proteger. |
| `donde-comer-barato-lisboa` | E-007 — ACTIVO | No tocar hasta cierre de experimento. |
| `barrios-imprescindibles` | P1 — DEUDA ALTA / OBSERVE | 442 imp/90d; deuda real pero cambio 21/09. Esperar ventana limpia. |
| `vida-nocturna-lisboa` | PROTEGIDO / OBSERVE | 317 imp/90d y posición ~9.96; problema principal CTR/snippet, no rewrite. |
| `errores-turistas-lisboa` | N1 — PROVISIONAL | Alta utilidad práctica y fuentes; proteger. |
| `pasteles-de-belem` | P1 — DEUDA ALTA | Eliminar mitos/rituales/autoridad local no verificada; ampliar fuentes. |
| `sintra-desde-lisboa` | PROTEGIDO / N1 PROVISIONAL | Buena utilidad y fuentes oficiales; mantener. |
| `mejor-epoca-visitar-lisboa` | P1 — DEUDA ALTA | 0 fuentes, voz personal y clima/precios; reconstruir con IPMA y decisiones por temporada. |
| `aeropuerto-lisboa-al-centro` | PROTEGIDO / OBSERVE | Candidato SEO; no tocar hasta gate. |
| `restaurantes-romanticos-lisboa` | N1 — PROVISIONAL | Criterio explícito + fuentes; proteger. |
| `que-ver-cascais-desde-lisboa` | N1 — MERGED / PROD BLOCKED | PR #92 fusionado en `6318da24`; CI verde. Vercel rechazó el build de producción por `build-rate-limit`; falta verificación live. |
| `playas-cerca-lisboa` | N1 — MERGED / PROD BLOCKED | PR #92 fusionado en `6318da24`; CI verde. Vercel rechazó el build de producción por `build-rate-limit`; falta verificación live. |
| `donde-escuchar-fado-autentico` | N1 — PROVISIONAL | Buen marco por formato; mantener fuentes vigentes. |
| `presupuesto-viajar-lisboa` | N1 — PROVISIONAL / DINÁMICO | Mantener cifras oficiales y revisar por Visitor Impact. |
| `mejores-mercados-lisboa` | PROTEGIDO / OBSERVE | Candidato SEO; cambio reciente. |
| `donde-tomar-cafe-lisboa` | E-006 — ACTIVO | No tocar hasta cierre de experimento. |
| `que-comprar-lisboa-souvenirs` | N1 — MERGED / PROD BLOCKED | PR #93 fusionado en `c167acc9`; TypeScript + SEO smoke verdes. Vercel bloqueó build por `build-rate-limit`; falta verificación live. |
| `excursiones-desde-lisboa` | P2 — PENDIENTE | Buen esqueleto; reducir superlativos y fortalecer fuentes por destino. |
| `historia-de-lisboa` | P1 — DEUDA ALTA | Pilar cultural sin fuentes; reconstruir con bibliografía primaria/fiable. |
| `terremoto-lisboa-1755` | P1 — DEUDA ALTA | Cifras y cronología sin fuentes; requiere pass histórico serio. |
| `descubrimientos-portugueses-lisboa` | PAGE 1 — SOURCE PASS ONLY | 100 imp/90d, pos ~7.86. No reescribir; añadir fuentes y corregir absolutos quirúrgicamente. |
| `azulejos-portugueses-historia` | PROTEGIDO / SOURCE PASS FUTURO | 95 imp/90d, pos ~9.88 y cambio reciente; esperar ventana. |
| `novedades-lisboa-2026` | P1 — DEUDA ALTA / TEMPORAL | 0 fuentes y muchas afirmaciones 2026; verificar o retirar lo no demostrable. |
| `festivales-eventos-lisboa-2026` | P1 — DEUDA ALTA / TEMPORAL | Calendario sin fuentes; rehacer con agenda oficial. |
| `lisboa-vs-porto` | PROTEGIDO / OBSERVE | Mejora reciente; no tocar. |
| `monumentos-de-lisboa` | P2 — DINÁMICO | Ampliar fuentes y Visitor Impact para horarios/precios de 15 monumentos. |
| `semana-santa-lisboa` | N1 — MERGED / PROD BLOCKED | PR #94 fusionado en `9a4c5512`; TypeScript + SEO smoke verdes y Preview 200. Vercel rechazó build de producción por `build-rate-limit`; falta verificación live. |
| `alfama-historia-guia` | N1 — PROVISIONAL | Útil por ruta/decisión; proteger. |
| `gastronomia-portuguesa-guia` | P1 — DEUDA ALTA | 0 fuentes + experiencia personal; reconstruir por platos/criterios verificables. |
| `fado-historia-origen` | N1 — PROVISIONAL | UNESCO/Museu do Fado + buena cautela histórica. |
| `belem-barrio-guia` | P2 — PENDIENTE | Buen tema; reforzar fuentes y bajar absolutos. |
| `chiado-bairro-alto-guia` | PROTEGIDO / OBSERVE | Candidato futuro; mejora reciente. |
| `mouraria-barrio-guia` | N1 — MERGED / PROD BLOCKED | PR #93 fusionado en `c167acc9`; TypeScript + SEO smoke verdes. Vercel bloqueó build por `build-rate-limit`; falta verificación live. Deuda visual: no hay hero propio de Mouraria verificado en el repo. |
| `vinos-portugueses-guia` | P1 — DEUDA ALTA | 0 fuentes y generalizaciones; rehacer como guía de elección. |
| `tram-28-historia-guia` | PROTEGIDO / OBSERVE | Candidato SEO; no tocar durante mejora reciente. |
| `bacalhau-plato-portugal` | P1 — DEUDA ALTA | Historia y cifras sin fuentes; reconstruir con contexto y decisión culinaria. |
| `arquitectura-manuelina-lisboa` | PROTEGIDO / OBSERVE | Página 1 con cambio reciente; no tocar. |

## Orden operativo

1. Verificar en producción **Cascais + Playas** cuando Vercel acepte el build de `main`.
2. Verificar en producción **Souvenirs + Mouraria** cuando Vercel acepte el build de `main`.
3. Terminar y validar **Semana Santa 2027**.
4. No tocar E-006/E-007.
5. No reescribir Barrios, Azulejos, Vida nocturna, Tram 28, Lisboa vs Porto, Chiado o Aeropuerto mientras sus ventanas estén contaminadas por cambios recientes.
6. Siguiente P1 no protegido después de Semana Santa: **Mejor época**.
7. Después: **Historia, Terremoto, Gastronomía, Vinos, Bacalhau, Novedades y Festivales**.
8. **Descubrimientos** recibe solo source pass quirúrgico mientras siga en page 1.

## Regla de cierre

Nunca mover una página a DONE solo porque fue reescrita.

DONE requiere:
- código correcto;
- fuentes coherentes;
- TypeScript/SEO smoke;
- producción verificada;
- registro de fecha/commit;
- y, cuando haya señal SEO suficiente, observación posterior.


## Batch 2 — 2026-09-23

### Souvenirs
- elimina la recomendación de comprar azulejos antiguos;
- incorpora la advertencia oficial de Visit Lisboa sobre robos y venta ilícita;
- sustituye precios y rankings por procedencia, transporte y criterios de compra;
- usa Lojas com História y Conserveira de Lisboa como referencias verificables.

### Mouraria
- elimina "más auténtico" y otros absolutos;
- documenta el origen pos-1147 con fuentes municipales;
- trata Mouraria como posible cuna del fado, no como origen demostrado;
- separa memoria del fado, historia medieval y diversidad contemporánea;
- convierte la pieza en una ruta de decisión y contexto.

Baseline GSC 2026-06-25 → 2026-09-22: la consulta por ambas URLs no devolvió filas visibles. Esto no demuestra demanda cero; significa que el lote se prioriza por riesgo de confianza/deuda editorial, no por señal SEO alta.


## Batch 3 — Semana Santa 2027 — 2026-09-23

- Corrige el error de presentar la Procissão do Senhor dos Passos da Graça como acto de Domingo de Ramos: la fuente municipal/Revelar Lisboa la sitúa tradicionalmente en el segundo domingo de Cuaresma.
- Separa fechas litúrgicas conocidas de programación local anual aún no publicada.
- Elimina afirmaciones no demostradas sobre rutas de otras procesiones, porcentajes de alojamiento y supuesta superioridad espiritual de Lisboa.
- Mantiene el contenido evergreen con un trigger de revisión para febrero de 2027.
- GSC 90d: 25 impresiones / 1 clic / posición media 16,64.
- Deuda visual pendiente: la portada actual es una calle nocturna de Bairro Alto, no una imagen específica de Semana Santa; no se falsea el alt y se debe sustituir cuando exista una foto pertinente y verificable.
