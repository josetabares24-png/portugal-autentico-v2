# SINCHI — Auditoría integral de la colaboración editorial
**Fecha:** 2026-11-05 · **Proyecto:** Estaba en Lisboa · **Estado:** vista de revisión, no publicación indexable

## 1. Objetivo y alcance
Convertir una colaboración editorial de 50 € en una pieza útil para lectores hispanohablantes que buscan un restaurante peruano en Lisboa, con posibilidad real de consultar la carta y contactar o reservar directamente con Sinchi. No prometer posiciones, tráfico ni ventas garantizadas. Mostrar el artículo como **colaboración comercial**. Respetar las fotografías y textos facilitados por el restaurante. La versión aprobada y pagada aún no se ha publicado como artículo indexable.

**URL conservada para revisión:** https://estabaenlisboa.com/es/colaboraciones/previa-sinchi

## 2. Evidencia revisada
- **Fuente del negocio:** mensaje del restaurante con la historia de Joseph Ríos, su trayectoria relacionada con Gastón Acurio, el concepto «comida de verdad», salsas preparadas en la cocina y uso de wok y robata. Se atribuye al restaurante; no se presenta como verificación externa independiente.
- **Carta:** `SINCHI CARTA.docx`, remitida por Sinchi el 02-11-2026; convertida fielmente a PDF de 8 páginas, sin modificar platos, precios ni advertencias de alérgenos.
- **Vinos:** `CARTA DE VINOS SINCHI.pdf`, original del restaurante, una página, conservado sin alteraciones.
- **Fotografías:** 20 imágenes autorizadas recibidas del restaurante; 15 seleccionadas para la vista previa. No usar imágenes de terceros sin permiso.
- **Contacto:** Rua Luís de Camões 90, Alcântara, Lisboa; WhatsApp/teléfono +351 924 385 110; web oficial https://sinchi.eatbu.com/?lang=pt.
- **Código auditado:** `src/app/[locale]/colaboraciones/previa-sinchi/page.tsx` y `public/sinchi-propuesta-editorial.html`; sección comercial, reserva, enlaces `rel=sponsored`, noindex.

## 3. Qué funciona
1. **Identidad:** el relato del chef, la cocina peruana y las imágenes propias diferencian Sinchi de una ficha genérica. No afirmar visita personal.
2. **Respuesta a la búsqueda:** título, dirección, ceviches, lomo saltado, precios, contacto y reserva responden a «restaurante peruano en Lisboa» y a búsquedas de marca/localidad.
3. **Conversión:** acceso a reserva oficial con `utm_source=estabaenlisboa`, WhatsApp con referencia y dos cartas descargables. El lector puede decidir antes de salir de nuestra web.
4. **Diseño:** vista de escritorio y móvil revisada. Módulo de PDF probado en Chromium: descargas de comida y vinos con integridad SHA-256 coincidente. Sin desbordamiento horizontal móvil detectado.
5. **Transparencia:** aviso de colaboración y distinción entre información facilitada y experiencia propia.

## 4. Riesgos y tareas, por orden de importancia

### P0 — antes de publicar e indexar
- **No utilizar el iframe como artículo SEO final.** Actualmente el texto está en `public/sinchi-propuesta-editorial.html` dentro de un `iframe` de una ruta Next.js. Es apropiado para la revisión visual, pero el artículo definitivo debería renderizar contenido HTML semántico desde Next.js, con H1/H2, imágenes y enlaces accesibles en el documento principal.
- **No retirar `noindex` antes de recibir aprobación final y acordar pago/publicación.** La vista de revisión es accesible con el enlace aunque no esté listada; `noindex` no equivale a autenticación.
- **Revisión de carta por el propio restaurante:** la carta de comida presenta una discrepancia textual en «TIRADITO AL AJI AMARILLO» (en una traducción se menciona rocoto), numerosas erratas y salto de página en «ARROZ CHAUFA DE POLLO». No corregir ni sustituir silenciosamente el archivo recibido; solicitar confirmación/carta final si desean corregirlo.
- **Exactitud editorial:** confirmar con Sinchi las especialidades a destacar y que las fotos correspondan al plato cuando se use un nombre específico. Mantener los precios indicados como información de noviembre de 2026, sujetos a cambios.

### P1 — versión definitiva, antes de solicitar indexación
- **Imágenes:** extraer las 8–11 mejores fotos como `.webp` optimizados, con nombres descriptivos, dimensiones definidas y URL individual. Actualmente las fotos están incrustadas como data-URI en HTML de revisión; no es adecuado para Google Imágenes ni para el rendimiento final.
- **Archivos PDF:** en la vista temporal se descargan desde data-URI y no tienen URL indexable propia. En producción, servir PDF desde URL permanente y aplicar encabezado `X-Robots-Tag: noindex` si se quiere evitar que la carta compita en Google con el artículo; revisar precios cada vez que Sinchi cambie carta.
- **Metadatos:** canonical de la URL final, `openGraph` con foto principal propia, descripción específica, y datos estructurados honestos `BlogPosting`/`Restaurant` cuando corresponda; sin inventar reseñas, calificaciones, premios ni visita personal.
- **Descubrimiento interno:** añadir al blog y portada en orden cronológico una vez aprobado; incluir enlace contextual desde guías de dónde comer en Lisboa y Alcântara; añadir a sitemap.
- **Rendimiento:** evitar que fotos y PDFs en base64 inflen la respuesta inicial. Priorizar LCP de hero y carga diferida de galería y mapa.
- **Consentimientos:** acuerdo comercial confirmado, uso autorizado de fotografías y datos de contacto, consentimiento para publicaciones en redes adicionales si se planifican.

### P2 — adquisición y valor para el restaurante
- **Distribución social orgánica:** proponer una publicación de Instagram de Estaba en Lisboa con la mejor foto de ceviche, etiquetar a Sinchi con permiso; 2–3 stories o publicación colaborativa solo si se acuerda por separado.
- **Google Business Profile del negocio:** recomendar fotos autorizadas, web/reservas visibles, carta actualizada y atención a reseñas reales; el propietario debe gestionar su ficha y no solicitar reseñas falsas.
- **Medición:** recopilar clics desde el artículo a la web oficial y al WhatsApp, visitas orgánicas a la página y, si Sinchi acepta, reservas atribuidas. Un clic no equivale a una venta; sin información del restaurante no presentar ventas generadas como resultado comprobado.
- **Informe pospublicación:** revisión a los 30/60/90 días con datos realmente disponibles; ajustar consultas y enlazado, sin garantía de indexación ni de clientes.

## 5. SEO y seguimiento: situación comprobada
- El borrador está intencionalmente **noindex**: no puede acumular impresiones orgánicas hasta que se publique de forma indexable.
- GSC Wizard devolvió **payment_required** el 05-11-2026 (prueba/suscripción terminada), por lo que **no se verificaron impresiones, clics, posición ni indexación actual**. No se deben reutilizar cifras antiguas como métricas actuales.
- Fuente técnica Google: https://developers.google.com/search/docs/appearance/google-images?hl=es y https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=es.

## 6. Entrega y control
La página de revisión conserva su URL, diseño, historia, 15 fotografías y las nuevas descargas; **no se ha enviado un correo a Sinchi con esta versión**. Para darla por publicada hace falta aprobación expresa, verificación de build READY, QA de enlaces reales en móvil/escritorio y creación del artículo nativo indexable.

## 7. Portafolio Estaba en Lisboa
Conservar evidencia de antes/después, permisos de uso, diseño de portada, menú descargable y enlaces de reserva. El caso puede servir de ejemplo de trabajo editorial y SEO con enfoque comercial. Los resultados futuros deben aparecer solo cuando sean medidos y comprobados; no presentar una colaboración o una reserva como éxito de posicionamiento antes de que exista.
