# Entradas en inglés — 26/10/2026

José pide pulir las entradas en inglés. Se trabaja sobre el piloto existente de seisURLs: guía de Pena y su acceso desde la portada. No se crea un catálogo nuevo ni se traduce automáticamente la oferta española.

## Baseline y decisión

Base del pulido: merge de integración `670e9f3`, que incorpora main `06d9e14` y conserva el pulido inglés anterior. [Resolución de conflictos](pr118-main-integration.md). Build, TypeScript, lint e inglés224/migración1520 del merge pasan; sitemap106URL. Las capturas de producción previas y el snapshot de72superficies españolas están en audit-evidence/english-tickets-2026-10-25 del workspace.

HECHO: el bloque de reserva anterior solo identificaba proveedor y una recomendación genérica sobre condiciones. No mostraba la política concreta del producto enlazado; la diferencia entre visitas se explicaba en varios párrafos. HIPÓTESIS: una comparación escaneable y condiciones visibles ayudan a elegir una reserva adecuada. No hay efecto de ventas medido.

DECISIÓN: conservar el productoTiqets p1120392, partner/campaña/eventos, un solo CTA afiliado dentro de la comparación y la compra oficial alternativa. No colocar otro botón afiliado en la apertura. Mantener el diseño editorial y las fotografías reales.

## Cambios

- Dos filas de decisión: visita oficialEssential con NewPalace/parque/terrazas frente a parque/terrazas sin salas. Se conservan los precios oficiales20€/12€ ya existentes y se aclara que una excursión desde Lisboa es otro producto.
- Condiciones oficiales de cambio junto al enlace oficial existente. Se añade como fuente la ficha exacta de Essential, sin cambiar el destino de los enlaces que ya estaban.
- EnglishPenaBooking muestra admisión, transferencias opcionales y ausencia de reembolso/reprogramación publicada en el productoTiqets enlazado. Precio final consultado en el proveedor para fecha/opción; no cifra comercial hardcodeada, promesa de ahorro, disponibilidad inventada o prioridad para todas las modalidades.
- CTA de48px mínimo, ancho de la tarjeta, aviso afiliado y proveedor nombrado. Mismos valores de atribución, partner, campaña y placement. Nuevo contenido específico en english-pena-ticket.ts, separado del componente.
- Portada: descripción de la guía orientada a admisión, cambios y llegada. Misma foto, destino y medición.
- Enlaces a secciones con anclas nativas: volver a elegir la misma sección después de desplazarse sigue desplazando hasta ella. Se corrige el fallo observado con la misma hash en la navegación de Next, conservando todos los destinos y el cierre del índice móvil.
- Fecha de comprobación factual25/10 y presentación actualizada26/10 diferenciadas. Pena muestra «Ticket details reviewed/checked25October»; BlogPosting.dateModified y sitemap de Pena/Home reflejan el cambio real del26/10. Resto de fechas/fuentes inglesas conservadas.

## Fuentes y alcance de comprobación

Consultadas el25/10/2026:

- [Precio y horarios oficiales](https://www.parquesdesintra.pt/en/plan-your-visit/opening-times-and-prices/).
- [Essential Visit: admisión y condiciones de cambio](https://bilheteira.parquesdesintra.pt/info/parque-e-palacio-da-pena-visita-essencial/1198/en).
- [Park Visit: alcance del acceso](https://bilheteira.parquesdesintra.pt/info/visita-ao-parque-da-pena/1204/en).
- [ProductoTiqets inglésp1120392](https://www.tiqets.com/en/sintra-attractions-c76496/tickets-for-national-palace-of-pena-park-entry-ticket-p1120392/): modalidades/transfer opcional y condiciones publicadas. No se deduce un precio o un traslado desde Lisboa a partir de una modalidad opcional.

No se comparan productos como si fueran idénticos solo por tener fotos parecidas. Las reglas de la opción elegida deben confirmarse antes del pago. No se añaden experiencias personales ni opiniones atribuidas a José.

## QA y entrega

Control de fuente34/34: cuatro artículos ingleses enteros intactos; en Pena solo dos secciones y una fuente añadida; títulos, descripciónSEO, imágenes, esenciales, precios/horarios y enlaces existentes preservados. Manifiesto inglés, selección de tours, helper de reservas y componente de medición sin cambios respecto a670e9f3.

Se validan build/TypeScript/lint, contrato inglés, preservación española y reservas. QA visual en anchos reales320/390/412/768/1440, un solo índice, anchors y CTA visible/comprensible sin overflow. No compras, formularios enviados o reservas simuladas. Resultados y Preview se registrarán al cerrar la comprobación.

L003: Preview y revisión visual antes de merge. PR118 sigue en borrador, sin autorización de producción. Las dos URLs rechazadas por cuota de SearchConsole son una operación aparte; este trabajo no las reenvía automáticamente ni mide tráfico nuevo.
