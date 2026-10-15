# Mejoras de artículos a partir de Search Console — 15 octubre 2026

## Diagnóstico y evidencia (HECHO)

José pide identificar los blogs que funcionan mal en Search y mejorarlos. Base inspeccionada: `50be9c2cd696753a20b784410018e7f86097b713`, rama `codex/blog-search-improvements`. El trabajo de Portugal sigue separado en PR #110, sin autorización de merge.

GSC, propiedad `sc-domain:estabaenlisboa.com`, vía Windsor.ai. Ventanas fijas sin datos frescos: **14 sep–11 oct** frente a **17 ago–13 sep**, 28 días cada una. Consulta diaria de `date,page,clicks,impressions,position`, filtro `/blog/`: 1.554 filas. Posición agregada ponderada por impresiones. Baseline y consultas visibles: [[../data/BLOG-SEARCH-2026-10-15.json]]. Los datos no demuestran causalidad y las consultas anonimizadas no aparecen.

| Artículo | Clics antes → ahora | Impresiones antes → ahora | CTR antes → ahora | Posición antes → ahora | Lectura |
|---|---:|---:|---:|---:|---|
| Aeropuerto al centro | 1 → 0 | 234 → 96 | 0,43% → 0% | 15,32 → 24,11 | Pérdida de visibilidad y relevancia; faltan rutas y coste concreto |
| Metro | sin filas → 3 | sin filas → 1.023 | no disponible → 0,29% | no disponible → 8,77 | Página nueva con oportunidad de respuesta a mapa/horarios |
| Time Out Market | 4 → 4 | 300 → 608 | 1,33% → 0,66% | 8,90 → 8,80 | Más exposición; falta desarrollar menú/puestos, no es una caída de ranking |
| Comer barato | 2 → 0 | 241 → 76 | 0,83% → 0% | 19,60 → 27,01 | Cola de diagnóstico; no se modifica E-007 en este lote |
| Manuelino | 2 → 1 | 518 → 55 | 0,39% → 1,82% | 9,09 → 7,96 | Menos cobertura/demanda visible con mejor posición; no prueba penalización |

La última semana (5–11 oct) aporta: aeropuerto 0 clics / 23 impresiones / 0% / posición 22,35; Metro 2 / 456 / 0,44% / 8,78; Time Out 2 / 164 / 1,22% / 8,57. La anterior (28 sep–4 oct): aeropuerto 0 / 28 / 0% / 42,57; Metro 0 / 341 / 0% / 8,72; Time Out 0 / 130 / 0% / 9,90. Son muestras pequeñas y no una prueba de recuperación.

Consultas actuales que justifican el alcance:

- Metro: «mapa metro lisboa 2026» 62 impresiones, 1 clic, posición 3,55; «plano metro lisboa 2026» 61 / 0 / 6,70; «horario metro lisboa» 59 / 0 / 8,85. El mapa estaba relegado a fuentes al final; faltaba un acceso en el cuerpo.
- Time Out: «time out market lisboa» 133 / 0 / 9,70; «menú de time out market lisboa» 17 / 0 / 8,12. La marca compite con su propia web: no esperar capturar todos sus clics.
- Aeropuerto: «como ir del aeropuerto de lisboa al centro» 8 / 0 / 31,88; «transporte aeropuerto lisboa» 7 / 0 / 62,71. El cuerpo remitía a otras guías sin resolver conexiones concretas a Rossio, Baixa-Chiado y Cais do Sodré.

La extracción de consultas devuelve 18 filas visibles para aeropuerto, 70 para Metro y 37 para Time Out. No hay filas visibles de consultas para pagos en esta extracción: no significa que esa página no tenga búsquedas (sí tiene 609 impresiones y 5 clics en la dimensión página).

Cronología comprobada con `git blame`: aeropuerto conserva la revisión `24c3c7da` del 21 sep; los snippets de Metro y Time Out se cambiaron en `1bacaab0` el 9 oct (aunque la fecha editorial del Metro dice 8 oct). La ventana GSC mezcla esas versiones; no permite declarar fallido ese ajuste. El lote actual mantiene ambos snippets y trabaja únicamente carencias observables en el cuerpo.

## Oportunidad, propuesta y razón (DECISIÓN)

Un lote de tres URLs existentes, centrado en **responder a la intención dentro del artículo**. Se conservan títulos, metas, slugs, canonicals, fotografías y diseño. No se añaden afiliados ni se crea contenido competidor.

1. Aeropuerto: respuesta corta, comparativa de coste, rutas desde Aeroporto, diferencia entre tramo y traslado completo, coste 2,40 € con tarjeta nueva frente a contactless 1,92 €, alternativa nocturna 208 y conexión de vuelta con T2.
2. Metro: horario/precio en la entradilla y acceso al mapa oficial en la primera sección. El ajuste de horario y snippet del 8/9 oct es demasiado reciente para evaluarlo con esta ventana; **no se vuelve a cambiar el snippet**. Se añade una ayuda que faltaba para las búsquedas de mapa.
3. Time Out: ejemplos concretos de puestos, directorio oficial enlazado, suma de conceptos para presupuestar y horario/pagos contrastados. Sin convertir precios de fichas antiguas en tarifas actuales.

Enlaces entrantes existentes inspeccionados: aeropuerto desde Metro, Navegante, Cómo moverse, Llegar a Lisboa y guías relacionadas; Metro desde aeropuerto, Navegante, Oriente y Cómo moverse; Time Out desde Comer barato, Mercados y rutas. Se conservan las salidas editoriales existentes (5/5/4, respectivamente) y se añaden accesos oficiales contextuales, sin rehacer el enlazado ganador.

Navegante (30 clics / 1.453 impresiones), Volta (17 / 421), Oriente (8 / 662) y Cómo moverse (5 / 521, mejor CTR y posición) quedan protegidos. Tranvía 28 mejora de posición 19,26 a 12,67 aunque aún no tenga clics; no se reescribe por ese motivo. E-006/E-007 no se tocan.

## Fuentes verificadas el 15 octubre

- [Metro: tarifas](https://www.metrolisboa.pt/comprar/): 1,90 €, zapping 1,72 €, 24 h 7,25 €, contactless 1,92 €.
- [Metro: mapas](https://www.metrolisboa.pt/viajar/mapas-e-diagramas/), incluido el diagrama oficial de agosto 2026: rutas y transbordos. Enlace a la página estable del operador para evitar fijar un PDF que caduque.
- [Metro: horario](https://www.metrolisboa.pt/viajar/horarios-e-frequencias/): horario normal y accesos secundarios. La nota de comprobación previa del 8 oct se conserva en su sección.
- [ANA: transporte del aeropuerto](https://www.lisbonairport.pt/en/lis/access-parking/getting-to-and-from-the-airport/public-transportation): tramo Saldanha, equipaje y recogida P2.
- [ANA: T2](https://www.lisbonairport.pt/en/lis/access-parking/getting-to-and-from-the-airport/terminal-2): shuttle gratuito, 12 minutos de frecuencia, 3 minutos de trayecto, 03:30–00:30.
- [CARRIS: 208](https://www.carris.pt/viaje/carreiras/208/): red de madrugada, sentidos y parada Aeroporto. No se publica como si fuera un bus exprés.
- [Time Out: directorio](https://www.timeout.com/time-out-market-lisboa/restaurants), [información general](https://www.timeout.com/time-out-market-lisboa), [FAQ](https://www.timeout.com/time-out-market-lisboa/faqs): puestos, horario, mesas y pagos. Las fechas antiguas de las fichas impiden asumir que sus precios siguen vigentes.

## Impacto esperado, esfuerzo y riesgo (HIPÓTESIS)

Mejor utilidad y ajuste a consultas; podría aumentar clics y cobertura relevante. No se promete una posición ni porcentaje. Esfuerzo acotado a contenido y registro del blog. Riesgos: tarifas/operadores cambiantes, escaso volumen de aeropuerto, mezcla de consultas y solapamiento de cambios previos en Metro y Time Out. E-003 y E-012 no podrán evaluarse aislados después de este lote.

## Prueba y siguiente acción

Validar typecheck, lint de archivos tocados, build, invariantes del blog y sitemap. Comprobar en navegador los enlaces oficiales y las tablas en móvil. Antes de publicar, revisar PR y controles.

Validación local realizada: `npm run typecheck` y lint focalizado sin errores; `npm run build` correcto (137 rutas estáticas); `smoke:blog` correcto (69 artículos, 828 invariantes, 101 enlaces internos sin roturas); `smoke:sitemap` 52/52, 110 URLs. Navegador: tabla del aeropuerto a 360 px con filas apiladas y sin desbordamiento; Metro y Time Out sin desbordamiento a 1280 px, canonical correcto; clic real del mapa llega a «Mapas e diagramas» del operador. Primera compilación en el entorno restringido detenida sin diagnóstico; se terminó solo su proceso y la compilación normal fuera de ese entorno pasó. No se modificó el código para saltarse la validación.

**E-016: PREPARADO; todavía no desplegado.** D0 será el despliegue de producción confirmado (registrar SHA y hora), no la fecha de edición ni la del push. Revisar 14 y 28 días finalizados tras D0 frente a ventanas equivalentes; ampliar si no se alcanzan unas 200 impresiones por URL. Medir clics, impresiones, CTR, posición y consultas de mapa/menú/traslado por separado. Resultado posible: gana / pierde / inconcluso. No atribuir todo movimiento del sitio a este lote.
