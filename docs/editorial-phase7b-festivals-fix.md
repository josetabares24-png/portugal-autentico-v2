# Fase 7B — correcciones acotadas de Festivales

21/10/2026. Continuación de José tras la revisión de Fase 7 y la corrección de Cascais. Base de este lote: `f76c3e9`; misma rama/PR #113, commits separados. D-055 conserva Novedades/Festivales como páginas independientes. No ejecutar su 301 ni convertir este trabajo en una agenda nueva.

## Diagnóstico → evidencia → decisión

HECHO: el artículo equipara la noche de Santo António con San Juan/San Pedro en España y lo llama patrón de Lisboa. Su apertura afirma que junio es el mes más concurrido sin una serie de visitantes que lo respalde; su título/meta y tarjeta prometen un calendario completo que el contenido no entrega. El tip de junio fija horas para conseguir mesa y cenar sin una garantía o fuente del local. Se leyeron los veinte bloques, metadata, fuentes y registro del índice antes de editar.

HIPÓTESIS: esa mezcla de fechas, promesa de exhaustividad y certezas prácticas reduce la confianza. No hay medición de abandono o tráfico que permita cuantificar el daño. DECISIÓN: corregir únicamente esos puntos, conservar el desarrollo por temporadas y mantener la URL/año/intención. PREFERENCIA: una selección reconocible con datos fechados por edición antes que prometer una agenda universal.

## Fuentes comprobadas el 21/10

- [Visit Portugal — Santos Populares](https://www.visitportugal.com/en/destinos/lisboa-regi%C3%A3o/210955): distingue Lisboa/Santo António 12–13 de junio, Porto/São João 23–24 y São Pedro 29; respalda marchas por Avenida da Liberdade, arraiais en barrios, sardinas y manjericos con versos. No se convierte esa explicación en un programa con horas de 2027.
- [EGEAC — programa de las Festas de Lisboa 2026](https://egeac.pt/wp-content/uploads/2026/05/festas-de-lisboa-2026-web.pdf), página 1: Marchas Populares en Avenida da Liberdade el 12 de junio; el programa pertenece inequívocamente a 2026. No se copian todos sus eventos ni se extrapolan al próximo año.
- [Visit Lisboa — procesión de Santo António](https://www.visitlisboa.com/en/events/procession-of-saint-anthony): distingue la celebración popular del patronazgo de São Vicente. La [ficha de la noche](https://www.visitlisboa.com/pt-pt/eventos/noite-de-santo-antonio-12-13-de-junho?date=2026-06-12) usa a su vez «padroeiro». Se evita perpetuar esa inconsistencia de terminología: el texto corregido habla de la celebración de Santo António, sin abrir una explicación religiosa ajena al viaje.
- [NOS Alive — anuncio archivado de 2026](https://nosalive.com/en/nick-cave-and-the-bad-seeds-no-primeiro-dia-do-nos-alive26/): confirma 9–11/07/2026. La cabecera actual de la web ya apunta a otra edición; no leer sus fechas de navegación como una corrección del archivo de 2026. No se revalida con esta noticia todo el cartel citado en el artículo.

La portada de Cultura na Rua no fue accesible al extractor: no se presenta como ausencia de programa ni se inventa. La búsqueda condujo al PDF del organizador. Estas consultas verifican las correcciones concretas; no todos los programas, transportes, precios o afirmaciones de los veinte bloques. El resto del contenido no queda certificado como recién revisado.

## Cambios concretos y conservación

- H1/título de tarjeta: de «Calendario Completo» a «guía por temporadas». Se conserva `seoTitle: Festivales y eventos en Lisboa 2026`, por tanto el título HTML para búsqueda no se amplía ni cambia de intención. La descripción/meta y excerpt del índice describen una selección y distinguen referencias de 2026/anteriores.
- Apertura: fecha clave de Santo António y alcance de la selección; retirar el superlativo de afluencia. No se promete más ni menos tráfico.
- Párrafo de junio: eliminar la equivalencia con San Juan/San Pedro y el patronazgo; conservar la fecha y describir marchas/arraiais respaldados. Manjericos con poema sin detalle de clavel obligatorio. Se conserva el contexto de sardinas y ambiente.
- Tip: consejo de consultar programa/llegar con margen; retirar horas presentadas como garantía de mesa, saturación y cena. No inventar otras horas.
- Fuentes: conservar las tres URLs previas, aclarar que la portada NOS Alive es del organizador y exige leer la edición; añadir Visit Portugal y el programa EGEAC 2026. Cinco fuentes accesibles desde el mismo acordeón; sin segundo sistema ni enlaces afiliados nuevos.
- Registrar la corrección factual del 21/10 en `dateModified` y con etiqueta visible específica «Corrección de Santo António y alcance: 21 de octubre de 2026». No afirmar verificación integral. Fecha de publicación 8/03/2026 intacta. El índice declara la misma modificación para que el lastmod de esa única entrada del sitemap sea coherente.

Los otros diecisiete bloques conservan texto/orden/links. Encabezados de sección, anclas, imágenes, precios/programas restantes, FAQ, reservas, proveedores, componentes y estilos sin cambios. No nuevas categorías, perfiles Lo esencial, URLs o navegación. Las tarjetas relacionadas que consumen blogPosts mostrarán el título corregido; no se editan cuerpos ni SEO de Navidad/Nochevieja/Semana Santa. No se cambian sus años ni los de NOS Alive. El schema conserva tipos/IDs/URL y recibe los campos editoriales/fecha que el renderer ya deriva de la página.

## SEO, archivos y riesgos

Aplicación: `src/app/[locale]/blog/[slug]/page.tsx` (solo objeto Festivales) y `src/data/blog-posts.ts` (solo su registro). Documentación: este informe, CURRENT-STATE, D-057 y nota de manifest. Sin cambios al generador sitemap, robots, contrato de rutas o Clerk. 98 URLs en sitemap; única variación prevista de lastmod para Festivales. Canonical propio e index/follow. Los 16 redirects y ocho noindex siguen intactos; Novedades conserva 200 y canonical propio. No merge ni producción.

Riesgos residuales: el artículo sigue combinando ediciones y orientación estacional; no es una agenda en tiempo real. Permanecen afirmaciones fuera de este alcance que requieren revisión futura, como «siempre pacíficas» en 25 de Abril, precios/afluencia general y la programación de Carnaval. No se trasladan a otra URL ni se les inventa respaldo. Por eso el manifest conserva REVIEW, con el alcance de lo que sí queda corregido.

Impacto esperado: exactitud de la celebración y mejor correspondencia entre promesa y contenido; efecto SEO incierto. Esfuerzo bajo/medio, sin rediseño. Baseline: [GSC 20/10](../brain/data/CONSOLIDATION-SEARCH-2026-10-20.json), sin filas devueltas para Festivales en la extracción de candidatas: no equivale a demanda cero ni a un diagnóstico de indexación. Todo ese periodo precede a la publicación del 20/10; no medir como efecto del candidato.

## Validación y gate

QA local nueva: build correcto (137 páginas), TypeScript correcto, lint cero errores/un warning previo en ItineraryContextualCta.tsx:84. Blog: 828 invariantes y 97 enlaces sin rotos. Migración: 1.426 controles sin fallos. Sitemap: 64/64, 98 URLs. [Resumen](qa/2026-10-21/phase7b-local-summary.json).

Integridad/HTML: **26 controles correctos**. Los otros objetos de artículos y tarjetas quedan idénticos; diecisiete bloques de veinte sin cambios; FAQs/extras/fotos/hero intactos. Título HTML y canonical/robots conservados; H1/meta/fecha modificada corresponden a la corrección, cinco fuentes renderizadas, tres previas intactas y enlaces internos iguales. Fecha de publicación intacta; solo cambia el lastmod de Festivales entre los 98 registros del sitemap. La comparación inicial de seis inicializadores detectó únicamente diferencias LF/CRLF; se normalizan saltos de línea y se repite, sin relajar campos de contenido. [Resultado](qa/2026-10-21/phase7b-integrity.json).

Navegador local: Festivales, índice y las relacionadas Novedades/Navidad/Nochevieja en 390/412/768/1440 px, **20 vistas sin overflow**, H1 única y canonical propio. [Matriz](qa/2026-10-21/phase7b-local-responsive.json). No se presenta el contrato de conservación byte a byte de refactors como prueba de una corrección de contenido. Sin Lighthouse nuevo ni atribución de Core Web Vitals. Preview pendiente de cierre.

Preview y revisión antes de merge/publicación. Próximo grupo pendiente: discrepancia de entradas en Monumentos y conservación de su contexto antes de cualquier decisión de URL. No fusionar para resolver una duda factual.
