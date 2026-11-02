# Ajustes tras las capturas del iPhone — 2 noviembre 2026

Base: `73c3331`, PR134 en borrador. José pide decidir la portada del blog, corregir el calendario que desborda en móvil, retirar la explicación larga de free tours, plegar créditos y reducir el pie azul. Cambios solo en la misma preview; no hay merge ni publicación de producción.

## Decisiones y cambios

- **Blog sin fotografía de cabecera.** Las fotografías de los artículos ya tienen esa función. Se reduce el encabezado para que el catálogo aparezca antes: H1 móvil32px, menos padding y rótulo de archivo24px, con descripción breve. Publicaciones, orden, filtros, paginación, títulos SEO y canonical conservados.
- **Fecha compacta y contenida.** Control nativo44px, input sin padding, `min-width:0` y columnas `minmax(0,1fr)`. Icono, espacio y borde pertenecen al contenedor. La captura del iPhone coincide con el [fallo de WebKit301648](https://bugs.webkit.org/show_bug.cgi?id=301648), que calcula mal el ancho del date input con padding. No se usa overflow oculto para recortar el problema ni se sustituye por un calendario nuevo.
- **Free tours más directo.** Se retira el bloque de cuatro pasos y los consejos duplicados. La propina sigue explicada en la cabecera, nota de reserva y FAQ; movilidad, calzado, duración y reserva siguen accesibles en sus preguntas desplegables. No cambian API, parámetros, productos, schema FAQ ni destinos comerciales.
- **Créditos plegados por defecto.** Native `details/summary` en el listado de Entradas y en el componente compartido de atribución. Abrir/cerrar con toque o Enter. Se mantienen autor, fuente, licencia y adaptación en el HTML; sin JavaScript adicional.
- **Pie más corto.** Logo104px en móvil, navegación en filas que se ajustan y menos separación. Se mantienen los13enlaces y el botón de preferencias de cookies. Navegaciones con nombres accesibles; la descripción larga queda para escritorio.

Archivos: `BlogLandingHeader.tsx`, `BlogClient.tsx`, `FreeTourLiveFinder.tsx`, página Free tours, `ComprarEntradasClient.tsx`, `PhotoAttribution.tsx`, `Footer.tsx`, `grok-redesign.css`. Dos smoke existentes se adaptan a la nueva presentación; no deben exigir el bloque que José pidió quitar.

## Evidencia y medidas

[Comparación del pie](qa/mobile-2026-11-02/compare-footer.jpg) · [Comparación del blog](qa/mobile-2026-11-02/compare-blog.jpg). Antes a la izquierda, después a la derecha; contenido raster382px para viewport390px. El tramo sobre el pie pertenece a páginas diferentes, por lo que solo se compara el componente compartido. Las capturas del blog corresponden a la misma ruta y estado, sin filtro activo.

| Elemento, viewport390 | Antes | Después |
|---|---|---|
| Pie | 498,38px | 326,97px, aproximadamente34% menos |
| Cabecera del blog | 320,89px | 238,36px, aproximadamente26% menos |
| Input de fecha | 52px de alto, 48px de padding por lado | 44px de alto, padding0; separación en contenedor |
| Créditos de Entradas | Listado desplegado siempre | 44px cerrado;652px abierto con ocho fuentes/licencias |

Los números son medidas del layout, no métricas de uso o conversión. [Mediciones del formulario/pie](qa/mobile-2026-11-02/after-measurements.json), [blog](qa/mobile-2026-11-02/blog-measurements.json), [créditos](qa/mobile-2026-11-02/credits-measurements.json).

15capturas nuevas de Blog, Entradas y Free tours a1440/1024/768/390/320px: anchos reales comprobados, sin overflow y con un H1/main. El input queda dentro de su contenedor a390/320/768/1440. [Matriz](qa/mobile-2026-11-02/matrix.json). Las dimensiones raster de las15capturas se verificaron además para no aceptar una imagen de otro tamaño.

Créditos de Entradas probados con click y Enter: ocho fuentes y ocho enlaces de licencia al abrir, cierre correcto. Atribución del hero de Jerónimos probada también. No hay errores de consola capturados en esos estados.

## Validación

Build144/TypeScript correctos; ESLint0errores y el mismo warning previo de `ItineraryContextualCta`. Grok43, render/conservación138, SEO1530, técnico1220 y cronología71 correctos. Nueva captura GET de110rutas comparada con la base: metadatos/cuerpo editorial/enlaces comerciales conservados. Free tours local12/12 con configuración ausente; no se presenta como una prueba completa de afiliación configurada.

Lighthouse13.6: accesibilidad100 en Blog, Entradas y Free tours, sin fallos binarios en esas ejecuciones. [Resumen](qa/mobile-2026-11-02/accessibility-summary.json) y [logs](qa/mobile-2026-11-02/logs). No se vuelve a medir rendimiento, porque este lote corrige presentación y conserva la lógica de carga.

Revisión React: detalles nativos sin hooks, mismos límites cliente/servidor, label/input asociados, fecha/min/max/disabled/onChange y API preservados. Sin paquetes nuevos ni estado duplicado para los desplegables.

**Límite importante:** el navegador disponible es Chromium en Windows; los anchos móviles no emulan el control nativo de Safari iOS. Se ha eliminado el patrón de padding del bug documentado, pero la comprobación física final en el iPhone de José queda pendiente. No se declara ese motor certificado ni conformidad WCAG integral por Lighthouse.

El head final, CI y URL READY exacta se registran en la descripción de [PR134](https://github.com/josetabares24-png/portugal-autentico-v2/pull/134) y en la entrega, para no provocar otro despliegue al actualizar solo documentación de estado.
