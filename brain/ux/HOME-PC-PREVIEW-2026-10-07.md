# Home PC — previa de composición, 2026-10-07

**Estado: APROBADA PARA PUBLICAR el 2026-10-08; el despliegue y su verificación se siguen en PR #101.**

José pidió una auditoría profunda de estética y utilidad, señaló la composición en PC y pidió una previa de las mejoras. Esta autorización permite construir y mostrar el candidato; no equivale a aprobación visual ni a autorización de merge. Aplican L-003, L-004, L-006 y D-033.

## Diagnóstico y evidencia

Base de GitHub: `d411569a8f81214a1ce4d09044fd83b4033b5de1`. La auditoría de producción mostró dos aperturas de gran tamaño, ocho superficies con el mismo tratamiento oscuro y un cierre de tres artículos iguales, con dos estaciones. La arquitectura de ocho necesidades es útil; la composición tiene demasiado recorrido y cambia de alineación.

Mediciones de navegador, en píxeles CSS. Son observaciones de composición, no resultados de comportamiento:

| Vista | Producción | Candidato local |
|---|---:|---:|
| 1440 × 900, altura de hero | 738 | 558 |
| 1440 × 900, inicio de primera entrada desde arriba | 1135.6 | 792.4 |
| 1440 × 900, altura total aproximada | 4100 | 3002 |
| 1366 × 768, inicio de primera entrada | 1027.4 | 714.4 |
| 1920 × 1080, inicio de primera entrada | 1157.6 | 854.4 |
| 1920 × 1080, inicio de H1 / directorio / cierre | 56 / 356 / 484 | 356 / 356 / 356 |

La auditoría SEO del mismo día, con datos cerrados hasta 2026-10-04, encontró 77 clics / 6699 impresiones en 28 días y 34 / 2473 en 7 días. Son cifras de propiedad, no una baseline de conversión de Home. No existe aquí una extracción GA4 equivalente de sesiones de Home o clics de portal. El crecimiento ya había empezado antes del cambio anterior de Home: no atribuirlo a un rediseño.

## Candidato

- Mantener fotografía real de Alfama, H1 humano, Playfair/Montserrat, crema/noche/terracota y CTA al directorio.
- Reducir altura y tipografía del hero en escritorio y alinear las tres superficies en un mismo contenedor.
- Mantener 2 + 3 + 3, ocho entradas fotográficas, destinos canónicos, IDs y `TrackedInternalLink`.
- Mantener dos entradas principales con texto sobre foto; presentar seis secundarias con fotografía limpia y texto sobre crema en escritorio.
- En móvil mantener una entrada fotográfica completa por necesidad y en tableta dos columnas. Usar altura mínima en vez de altura fija para que el texto pueda crecer.
- Sustituir el tranvía turístico por el 15E y ajustar la selección y encuadre de cada entrada según su necesidad. La segunda pasada fotográfica queda registrada abajo. Todas son fotografías propias existentes.
- Corregir la promesa de itinerarios a 1, 2 o 3 días, que coincide con las opciones visibles del destino.
- Identificar a José Tabares en la franja editorial y reducir el espacio hasta el cierre.
- Cierre con una historia principal y dos piezas secundarias: Historia de Lisboa, Olaias y recuerdos con procedencia. Se reutilizan títulos, fotografías y resúmenes existentes; no se modifica el contenido de artículos.
- Reducir movimiento para quienes lo solicitan y dar nombre accesible específico a cada enlace «Leer artículo».

Metadata, canonical, JSON-LD, sitemap, redirects y las ocho URLs propietarias permanecen iguales. No se añaden herramientas, filtros, URLs ni proveedores.

## Hipótesis, impacto y límites

Una orientación visible antes y una jerarquía más clara pueden facilitar elegir la siguiente guía. La estética y la compresión están observadas; una mejora de clics, ingresos o SEO sigue siendo hipótesis. Esfuerzo medio y alcance limitado a dos componentes de Home.

Después de una posible aprobación, registrar sesiones de Home y usuarios que hacen al menos un clic de portal por sesión, separados por dispositivo. Mantener `select_content` y los ocho IDs actuales. Comparar 14/28 días cerrados equivalentes, con mix de adquisición como confusor. Guardrails: fallos de navegación, experiencia móvil, imágenes y métricas de rendimiento. No fijar un aumento porcentual sin baseline fiable ni prometer que la Home sola producirá 1000 impresiones diarias.

## Validación y decisión

Revisión independiente de los dos TSX y prueba real del CTA. Navegador a 320, 390, 768, 1024, 1366, 1440 y 1920 px: sin desbordamiento horizontal observado; ocho entradas y textos sin recorte en los tamaños móviles revisados. A 1024 px, miniaturas editoriales de 120 px evitan comprimir en exceso los titulares. Esto no constituye auditoría completa de accesibilidad ni prueba con todas las escalas de texto.

Typecheck, lint de los dos archivos y `git diff --check` pasan. Smoke contra el servidor local: **51/51 comprobaciones OK**, incluidas las 100 URLs del sitemap, los ocho destinos canónicos, metadatos de los pilares y redirecciones existentes. La previa local funciona con `localhost`; una apertura con `127.0.0.1` encontró una redirección de desarrollo y no se cambió el routing del producto.

**Decisión del 7 de octubre: mostrar y revisar, sin publicar antes de la aprobación visual explícita de José.** El candidato se conserva en rama/PR para que cualquier revisión parta de GitHub y Mente Lisboa. La aprobación posterior queda registrada debajo.

## Segunda pasada fotográfica — 2026-10-07

José autorizó «hazlo» después de revisar la selección y pedir nuestro criterio. Esta autorización aplica a la segunda pasada de la previa, no a un merge ni a producción. Se mantiene el PR borrador [#101](https://github.com/josetabares24-png/portugal-autentico-v2/pull/101).

| Uso | Fotografía propia | Posición del recorte | Criterio |
|---|---|---|---|
| Alojamiento | `arquitetura-baixa-pombalina-lisboa-01.webp` | 50% 0% | Fachadas, azulejos y balcones explican el entorno sin presentar un hotel concreto. |
| Tomar algo | `esquina-baixa-pombalina-lisboa-01.webp` | 50% 70% | La antigua foto de alojamiento muestra una terraza real; su nuevo uso corresponde a lo visible. No constituye recomendación del negocio fotografiado. |
| Fotografía | `lisboa-baixa-rio-tejo-entardecer.webp` | 50% 35% | Los edificios enmarcan el río; el recorte elimina el primer plano dominante de coches y conserva la escena. Coincide con la fotografía del artículo propietario. |
| Cierre secundario | Artículo `estacion-olaias-lisboa`, fotografía propia de su techo multicolor | Centro | Olaias vuelve a su contexto de arte y arquitectura; se retira Time Out del cierre para evitar repetir la imagen del portal de comida. |

Procedencia: carpeta `public/images/lisboa-originales`, según D-027/D-033. Imágenes inspeccionadas antes de seleccionar; no se añadieron fotografías de stock, generadas o con procedencia pendiente. Las ocho entradas y sus destinos no cambian. Las 11 fotografías de entradas y artículos son distintas por archivo.

La nueva selección se revisó en el navegador a 1280 × 720 y 390 × 844. Las imágenes cargan, mantienen el recorte previsto y los textos no se recortan; sin desbordamiento horizontal observado. Typecheck, lint de ambos TSX y diff check pasan de nuevo. El smoke completo 51/51 pertenece a la primera iteración del mismo candidato; esta segunda pasada solo cambia fotografías, alt, posiciones y una selección editorial existente.

## Aprobación de publicación — 2026-10-08

José recibió el enlace de Vercel del commit visual `8b7040ea38b937ac55fd26e275d64cbe6a33cfb5`, aclaró el alcance en móvil y pidió publicar: «Entonces hacemos deploy?». Esta instrucción autoriza publicar esta misma previa mediante [PR #101](https://github.com/josetabares24-png/portugal-autentico-v2/pull/101). No se incorpora un nuevo diseño móvil ni cambios de SEO, URLs o contenido de artículos.

La autorización y esta actualización de memoria no cambian los dos componentes aprobados. Antes de merge se comprueban el HEAD actual, CI y las pruebas aplicables. Producción debe confirmarse por el alias `estabaenlisboa.com` y el SHA del merge en Vercel; una solicitud de merge o un build en curso no equivale a publicación completada. El registro final de merge, fecha y deployment se mantiene en PR #101, enlazado desde esta memoria.

Baseline de disponibilidad SEO verificada el 8/10 antes de publicar: Home, robots.txt y sitemap.xml responden 200; Home permite `index, follow`, tiene un H1 y canonical de producción; sitemap conserva 100 URLs. Search Console finalizado llegaba al 5/10 (últimos siete días cerrados: 34 clics / 2.547 impresiones). Los registros 6–7/10 eran preliminares: no son evidencia de una caída causada por la previa, que aún no estaba en producción al comprobarlos.

La ventana de observación de E-010 se cuenta desde el despliegue verificado. Medir sesiones de Home y clics de portal por dispositivo en 14/28 días equivalentes, con los mismos IDs; la mejora estética no prueba un aumento de SEO o conversión.

Validación de publicación del 8/10: `npm run typecheck`, lint de ambos TSX y `git diff --check` pasan. `npm run smoke:sitemap` compiló la versión optimizada de producción (128 páginas estáticas) y pasó 51/51 comprobaciones, incluidas las 100 URLs del sitemap, las ocho entradas canónicas, base SEO y redirecciones. No hubo que modificar código para esta validación.

## Corrección de la etiqueta del hero — 2026-10-08

Después de publicar, José señaló: «no me gusta el texto amarillo de guia local en lisboa». La primera corrección cambió `text-gold` a `text-white/90` en la previa de PR #102, todavía sin publicar. José aclaró después «o quitalo»: la decisión final retira por completo el párrafo «Guía local de Lisboa» del hero en PC y móvil. No cambia H1, metadatos, enlaces ni medición. Es una preferencia visual solicitada, sin atribución de impacto SEO. Parte del merge de producción `8fc9a25` y se prepara en `fix/home-hero-label-color` para revisión y publicación por PR.
