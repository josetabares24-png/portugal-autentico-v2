# Móvil, Entradas, medición y revisión editorial — 24/10/2026

José pide ejecutar primero los puntos4,5,6y7 de la revisión de pendientes. Se preparan en rama `entries-mobile-editorial-polish`, con Preview y revisión antes de publicar. Brevo/Clerk y el acceso a paneles de reservas quedan fuera de este lote por su elección. No se cambia autenticación, suscripciones, DNS ni configuración de proveedores.

## Baseline y decisión

Producción: PR116/ffe27e6, seis páginas inglesas. Catálogo16productos, campañas/URLs afiliadas existentes, sitemap104destinos, dieciséis301 de la migración. Captura fresca de72superficies editoriales y objetos de artículos del commit de producción guardadas en audit-evidence/entries-mobile-2026-10-24 del workspace. QA compara el candidato con esa publicación, no con el sitio anterior a todas las fases.

HECHO: las guías prácticas del catálogo estaban al final; las tarjetas no explicaban las inclusiones de los tres productos prioritarios. HIPÓTESIS: aclarar producto y limitaciones ayuda a decidir; no demuestra más ventas. DECISIÓN: mantener el diseño, añadir datos compactos en tres tarjetas y enlaces a cinco guías existentes. No precios nuevos, valoraciones, urgencia o catálogo ampliado.

## Entradas y móvil

- `ticket-decision-guides.ts`: contenido editorial explícito, separado de precios y atribución. Oceanário/Pena/Jerónimos muestran qué incluyen; Pena distingue entrada de excursión y Jerónimos advierte de que no hay acceso rápido. Oceanário, Castelo, Pena, Jerónimos y LisboaCard enlazan su guía en la tarjeta.
- `BookingCard` muestra esa ayuda exclusivamente en el catálogo, no automáticamente en artículos o fichas. Lista de definición semántica, link secundario de44px, reserva principal conservada. Dieciséis productos y destinos/campañas intactos. Castelo deja de prometer evitar la cola de acceso: distingue taquilla y condiciones del billete.
- `EnglishNavigation`: Escape cierra el desplegable y devuelve foco al summary. El defecto se reprodujo en producción a390px; los enlaces ya cerraban el menú. No navegación nueva.
- Primer baseline: nueve páginas a390×844px reales, H1única, idioma correcto y sin overflow ni imágenes rotas observadas. Se comprobó innerWidth, no solo la respuesta del control de tamaño. QA final de otros tamaños/Preview se añadirá al cierre.

Inclusiones contrastadas en las fichas del producto: [Oceanário p975260](https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-oceanario-de-lisboa-entrada-p975260/), [Jerónimos p1012358](https://www.tiqets.com/es/atracciones-lisboa-c76528/entradas-para-monasterio-de-los-jeronimos-de-belem-entrada-p1012358/) y [Pena p1120392](https://www.tiqets.com/es/atracciones-sintra-c76496/entradas-para-palacio-nacional-da-pena-y-parque-entrada-p1120392/). Pena ofrece modalidades: no prometer prioridad, traslado o visita guiada a todas ellas. Condiciones y precio final se confirman con el proveedor. No clics afiliados, pagos o reservas de QA.

## Correcciones editoriales comprobadas

| URL | Cambio limitado y evidencia primaria |
|---|---|
| /actividades/castelo-sao-jorge | Retirar aviso de huelga del17/10 vencido; mantener cierre del museo que sigue publicado. [Horarios oficiales](https://castelodesaojorge.pt/como-visitar/horarios/). Firma indica revisión del aviso, no reverificación integral de precios. |
| /actividades/oceanario-lisboa | Sustituir5% por campaña oficial10% ONLINE10, solo en taquilla oficial, sujeta a stock/no acumulable. No aplicar a Tiqets. [Campaña](https://oceanario.pt/bilhetes-online-oceanario-lisboa-desconto/). Fecha de verificación integral anterior conservada; fecha parcial explícita en texto. |
| /blog/barrios-imprescindibles | Distinguir Baixa/Chiado en desnivel y matizar origen único del fado. Tres bloques; misma intención, H1 y títuloSEO. [Museu do Fado](https://www.museudofado.pt/historia-do-fado). |
| /blog/donde-tomar-cafe-lisboa | Directorio actual de Fábrica incluye Avenida, Comércio, Santos y S.Mamede; quitar Rua das Flores como local confirmado. No afirmar cierre. [Directorio del negocio](https://fabricacoffeeroasters.com/pt/pages/find-a-store). |
| /blog/terremoto-lisboa-1755 | Magnitud explícitamente estimada según CML; quitar primacías no justificadas y cifra relativa de antigüedad. Tres bloques y descripción, H1/seoTitle intactos. [CML ReSist](https://www.lisboa.pt/temas/seguranca-e-prevencao/sismos/programa-resist/divulgacao-e-sensibilizacao/apresentacao). Apertura directa403, extracto de búsqueda oficial recuperable: no ocultar esa limitación. |
| /blog/descubrimientos-portugueses-lisboa | Corregir únicamente marco de apertura que acababa1542 incluyendo Japón; llegada1543 respaldada por [Museu de Marinha](https://cultura.marinha.pt/pt/museumarinha_web/multimedia_web/Paginas/espingarda-tanegashima.aspx). Resto del artículo conserva revisión residual. |
| /blog/azulejos-portugueses-historia | Picoas: MariaKeil y MartinsCorreia; Parque: Keil/Schein/Matta. Aclarar acceso a andenes con título de transporte; no museo gratuito. Un bloque y dos fuentes. [Picoas](https://www.metrolisboa.pt/viajar/picoas/), [Parque](https://www.metrolisboa.pt/viajar/parque/). |
| /blog/obidos-vila-natal | Motivo claro para tocar página protegida: nueva edición oficial ya publica precios/horarios que el artículo decía desconocidos. Actualizar solo esos bloques, tres respuestasFAQ visibles y excerpt. H1/seoTitle/metaDescription/URL intactos; sin inventar visita personal. [Edición municipal](https://agenda.obidos.pt/evento/obidos-vila-natal/), [tabla oficial](https://obidosvilanatal.pt/en/hours-and-prices). Discapacidad: remitir a condiciones, no confundir importe visitante/acompañante. |
| /blog/lisboa-en-navidad | Coherencia puntual con Óbidos: quitar «aún sin precios» y actualizar solo su fila de cierres2026. No programa de Lisboa nuevo, títulos o datos de Nochevieja modificados. |

Las fechas originales de publicación se conservan. dateModified se actualiza exclusivamente en siete artículos cambiados y Castelo; etiquetas visibles dicen qué se revisó. Las siete fichas del catálogo del blog reflejan la misma fecha para sitemap; ninguna URL entra o sale del XML por este lote. Los artículos protegidos de transporte/Pena/Jerónimos/Volta/Nochevieja conservan su contenido.

## Las17REVIEW, sin confundir revisión con migración

Se ha vuelto a contrastar cada pendiente contra contenido y decisiones de Fase7. Las acciones siguientes no son órdenes para migrar. Mantener REVIEW en el manifiesto hasta confirmar el candidato o resolver los datos residuales.

| URL/cluster | Estado tras este lote |
|---|---|
| Castelo | Aviso vencido resuelto en candidato; museo sigue cerrado según fuente. |
| Oceanário | Diferencia de descuento resuelta en candidato; no cambio de proveedor. |
| Café | Locales actualizados sin inferir cierre; duda concreta resuelta en candidato. |
| Azulejos | Atribución concreta corregida; no reverificación integral del museo. |
| Terremoto | Precisión/primacías corregidas; no certificar cada cifra histórica del cuerpo. |
| Barrios imprescindibles | Contradicciones de desnivel/fado corregidas; comparativas de alojamiento siguen sin precios vivos, no asumir verificación integral. |
| Descubrimientos | Apertura corregida; Sagres/retorno económico/superlativos residuales requieren investigación, no se propagan ni fusionan. |
| Óbidos | Precios/horarios/cierres actualizados con fuente2026; transporte y condiciones históricas etiquetadas no se revalidan por esta corrección. |
| Belém | Dos fuentes oficiales difieren en horarios; fuente actual del monumento da09:30–17:30, directorio cultural conserva horarios estacionales. No cambiar todo el cluster ni dar combinación oficial por garantizada. [Monumento](https://mosteirojeronimos.torrebelem.gov.pt/en/visitar). |
| Monumentos | Corrección de combinado ya publicada; queda revisión residual del resto, no otra URL eliminada. |
| Festivales | Corrección de santos/selección ya publicada; programas2026 requieren comprobación por evento. No absorber Novedades. |
| Vinos | Corrección de VinhoVerde ya publicada; comparativas absolutas de variedades/consumo/reputación siguen sin evidencia suficiente. [ViniPortugal](https://www.winesofportugal.com/en/portuguese-wines/grape-varieties/) respalda diversidad, no ranking mundial ni cuota de restaurantes lisboetas. |
| Gastronomía | Correcciones parciales ya publicadas; historia/cartas/locales requieren revisión específica. No incorporar textos de Bacalhau/Vinos como si estuvieran revalidados. |
| Bacalhau | Porcentajes de origen sin fecha/grano claro; no actualizarlos con cifras inventadas ni fusionar recetas/historia. |
| Pastéis | Diferenciar ficha/artículo y verificar promesas de cola antes de decidir; mantener ambas y alias histórico. |
| Cascais artículo | Enlace final corregido a recorrido por libre ya publicado. Mantener dueño general del artículo sin nueva consolidación. |
| Cascais ficha | Aporta CaboRoca/transporte; no convertirla en tour comercial ni decidir su301 automáticamente. |

DosWAIT reales se mantienen porD055: Restaurantes/Pareja y Novedades/Festivales. /quiz404 deliberado tampoco se recrea. La falta de acceso a consultas actuales impide usar rendimiento SEO nuevo para elegir ganadores; no se interpreta ausencia de filas como cero demanda.

## Medición SEO: intento y límite concreto

[Registro](../brain/data/SEARCH-ACCESS-2026-10-24.json). Descubrimiento de cuentas/campos Windsor correcto; lectura web/fecha rechazada por tres cuentas frente a una incluida. Devuelve una fila de24/10 con números cero y aviso de que no son reales: se descarta. GSCWizard rechaza por subscription_required. No se desconectaron cuentas, contrataron planes o crearon automatizaciones.

Última evidencia utilizable permanece20/10 con datos hasta17/10. No se presenta como resultado posterior. Ventanas previstas hasta21/10:7d15–21 frente8–14;28d24/09–21/10 frente27/08–23/09;90d24/07–21/10 frente25/04–23/07. Al recuperar acceso, sumar clics/impresiones, calcular CTR desde totales y posición ponderada; separar páginas, consultas, dispositivos y seis URLs inglesas. La publicación inglesa es del24/10: no tiene datos posteriores finalizados hoy. Mantener D0 distintos de arquitectura20/10 y comercial22/10. No tocar títulos de Metro con el snapshot viejo ni atribuir caídas/crecimiento al último despliegue.

## QA y gate

Aplicación candidata `d3f0111cdf2e914d5cf54a2561170279984c4bac`, [PR118 borrador](https://github.com/josetabares24-png/portugal-autentico-v2/pull/118). Preview primaria `dpl_2QrmUuG3Yc7F5Sw1mwHkGKSJputP` READY, target Preview, del mismo SHA. [Entradas en Preview](https://portugal-autentico-v2-nmkxl70h0-estabaenlisboa.vercel.app/comprar-entradas) requiere acceso de Vercel. José autorizó expresamente un enlace compartible temporal el24/10; se creó para esta Preview y se entrega fuera del repositorio. No guardar su parámetro de acceso en Git.

Build final143rutas y TypeScript correctos. Lint sin errores, con un aviso previo en ItineraryContextualCta.tsx. Seis checks de GitHub correctos sobre ese SHA. QA remota mediante GET y sesión temporal limitada al host autorizado: inglés222, migración1386/104URLs/16redirects, calidad técnica1190/119páginas y Free tours66, todos sin fallos. El número de migración en Preview excluye comprobaciones de indexabilidad pública por su noindex de plataforma; no es una reducción de cobertura de URLs.

Producción y Preview se recorrieron por separado: nueve rutas a390×844,412×915,768×1024 y1440×1000,36vistas por entorno. Se verificaron innerWidth/innerHeight reales en cada navegación, una H1 y ausencia de overflow de página/imágenes cargadas rotas. Rutas: seis inglesas, Entradas, Free tours español y Planifica. Esto es QA del navegador, no una prueba en dispositivos físicos. Navegación inglesa: Escape cierra y devuelve foco al summary; elegir Pena cierra el menú y navega; fuentes desplegables abren. Los cinco enlaces de guía tienen44px de alto en escritorio. No se enviaron formularios ni se pulsaron enlaces de reserva.

El calendario inglés se probó en390px con27/10/2026: aparecen tres recorridos y horarios confirmados por la selección del API; los tres destinos preservan beginsAt/endsAt y referido público. QA adicional154/154:16productos, cinco guías, tres bloques de inclusiones, destinos/campañas idénticos a producción y API por idioma con tres tours cada uno (siete horarios ingleses/nueve españoles). El payload público no expone idioma de cada evento: se valida la selección inglesa y el filtrado del código, sin presentar el payload como una certificación independiente de ese campo. Se inspeccionan destinos sin completar reserva. No confundir esta disponibilidad con reservas o comisiones, que siguen desconocidas. La prueba local de inglés sin referido configurado no se cuenta como aprobada; la prueba remota con la configuración real sí pasa. [Evidencia](qa/2026-10-24/entries-polish/ticket-catalog-live-report.json).

La comparación AST exige los siete artículos exactos, todos los otros objetos intactos, H1/títulosSEO/URLs/publicación/enlaces de artículo/imágenes y todas las campañas/destinos de los productos conservados. Detectó una edición accidental de un objeto retirado; se revirtió y repitió199comprobaciones, todas correctas. No relajar el contrato para aceptar ese cambio. Snapshot remoto72/72 completado para comparar con producción:268comprobaciones de preservación pasan; las64superficies fuera de los siete artículos y Castelo son idénticas y las otras8coinciden exactamente con los cambios permitidos derivados de los bloques fuente. [Evidencia](qa/2026-10-24/entries-polish/editorial-preservation-report.json).

No nuevos redirects, noindex o cambios de robots/canonical; sitemap conserva104URLs y solo cambia lastModified de las siete fichas editadas. Schema sigue parseable, sin cambios de tipo ni reviews/precios inventados. No se ejecutó Lighthouse ni se atribuye mejora de Core Web Vitals o ingresos. [Captura móvil](qa/2026-10-24/entries-polish/entries-after-mobile.png) y [escritorio](qa/2026-10-24/entries-polish/entries-after-desktop.png).

No afirmar revisión editorial universal ni mejora de ingresos. La medición6 queda bloqueada externamente; las revisiones residuales7 se delimitan por URL. Este lote no hace merge ni publica producción; entregar Preview para revisión conforme aL003.
