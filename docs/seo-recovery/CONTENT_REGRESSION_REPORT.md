# CONTENT_REGRESSION_REPORT

## Metodo y limites

Baseline: `5f26c7989fccc5b151f07ab5cb48003463bab058`; comparacion con `96e73b1^`. Revision: 2026-09-07.

Se comparan los datos editoriales y la seleccion de FAQs del renderer historico (`extras.faqs ?? getFaqs`). Los recuentos historicos son reconstruccion de fuente, NO un crawl de HTML historico. El HTML actual si se ha descargado. Las palabras cuentan texto/items del cuerpo mas pregunta/respuesta; excluyen navegacion, captions y chrome. H2 cuenta subtitulos del cuerpo; H3 de FAQ depende del renderer.

57/57 arrays contenido identicos: cero parrafos/listas/subtitulos del cuerpo eliminados en este intervalo. No implica que no hubiera recortes anteriores. 51 articulos actuales 200 y 6 registros redirigidos; en los 51 activos se retiraron 154 FAQs de 48 articulos. El total de fuente historica es 172 FAQs en 54 registros, incluyendo 18 de registros ahora redirigidos. No equiparar este inventario al subconjunto aproximado 112/23 del prompt.

No se atribuye causalidad a la caida de GSC. No se ha consultado GSC ni modificado indexacion. La clasificacion se basa en utilidad/contexto y evidencia del cuerpo; coincidencia lexical solo sirvio para localizar pasajes. No se han verificado tarifas externas.

## Inventario de articulos

| URL | Words before | Words now | Diferencia | H2 antes/ahora | FAQ antes/ahora | Enlaces declarados antes/ahora | Eliminado | Clasificacion | Riesgo |
|---|---:|---:|---:|---|---|---|---|---|---|
| /blog/time-out-market-lisboa | 851 | 851 | 0 | 6/6 | 0/0 | 4/4 | Solo FAQ; cuerpo intacto | Sin FAQ activa | LOW |
| /blog/estacion-oriente-lisboa | 900 | 900 | 0 | 5/5 | 0/0 | 4/4 | Solo FAQ; cuerpo intacto | Sin FAQ activa | LOW |
| /blog/estacion-olaias-lisboa | 719 | 719 | 0 | 5/5 | 0/0 | 4/4 | Solo FAQ; cuerpo intacto | Sin FAQ activa | LOW |
| /blog/lisboa-en-7-dias | 2202 | 1879 | -323 | 7/7 | 5/0 | 5/5 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/donde-fotografiar-lisboa | 2111 | 1754 | -357 | 7/7 | 5/0 | 5/5 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/lisboa-con-ninos | 1916 | 1610 | -306 | 7/7 | 5/0 | 5/5 | Solo FAQ; cuerpo intacto | D, C | MEDIUM |
| /blog/lisboa-en-pareja | 1815 | 1525 | -290 | 6/6 | 5/0 | 5/5 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/mejores-apps-lisboa | 965 | 879 | -86 | 8/8 | 3/0 | 5/5 | Solo FAQ; cuerpo intacto | D, C | MEDIUM |
| /blog/como-pagar-en-portugal | 1974 | 1734 | -240 | 11/11 | 5/0 | 3/3 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/donde-alojarse-en-lisboa | 1612 | 1534 | -78 | 14/14 | 3/0 | 5/5 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/lisboa-card-vale-la-pena | 1638 | 1562 | -76 | 13/13 | 3/0 | 5/5 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/como-moverse-por-lisboa | 1640 | 1555 | -85 | 14/14 | 3/0 | 5/5 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/que-hacer-gratis-en-lisboa | 1232 | 1162 | -70 | 13/13 | 3/0 | 5/5 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/mejores-miradores-lisboa | 1285 | 1223 | -62 | 11/11 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/donde-comer-barato-lisboa | 1407 | 1358 | -49 | 7/7 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | C, D | MEDIUM |
| /blog/barrios-imprescindibles | 1337 | 1297 | -40 | 6/6 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/evitar-turistadas-lisboa | 1093 | 1042 | -51 | 6/6 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/como-ir-sintra-desde-lisboa | 403 | 360 | -43 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | Sin FAQ activa | LOW |
| /blog/barrios-lisboa-donde-alojarse | 1641 | 1595 | -46 | 8/8 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | Sin FAQ activa | LOW |
| /blog/pasteles-de-belem | 1141 | 1088 | -53 | 6/6 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D, C | MEDIUM |
| /blog/mejores-pasteles-nata-lisboa | 376 | 330 | -46 | 8/8 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | Sin FAQ activa | LOW |
| /blog/mejor-epoca-visitar-lisboa | 698 | 653 | -45 | 4/4 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/aeropuerto-lisboa-al-centro | 613 | 536 | -77 | 6/6 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | C | MEDIUM |
| /blog/restaurantes-romanticos-lisboa | 1371 | 1327 | -44 | 11/11 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D, C | MEDIUM |
| /blog/que-ver-cascais-desde-lisboa | 1207 | 1167 | -40 | 8/8 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/playas-cerca-lisboa | 940 | 895 | -45 | 6/6 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/donde-escuchar-fado-autentico | 1144 | 1107 | -37 | 8/8 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D, C | MEDIUM |
| /blog/presupuesto-viajar-lisboa | 811 | 769 | -42 | 9/9 | 3/0 | 4/4 | Solo FAQ; cuerpo intacto | C, D, B | MEDIUM |
| /blog/mejores-mercados-lisboa | 404 | 364 | -40 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D, C | MEDIUM |
| /blog/donde-tomar-cafe-lisboa | 354 | 312 | -42 | 6/6 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D, C | MEDIUM |
| /blog/miradores-atardecer-lisboa | 487 | 444 | -43 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | Sin FAQ activa | LOW |
| /blog/que-comprar-lisboa-souvenirs | 303 | 262 | -41 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D, C | MEDIUM |
| /blog/viajar-ninos-lisboa | 462 | 422 | -40 | 8/8 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | Sin FAQ activa | LOW |
| /blog/excursiones-desde-lisboa | 1409 | 1372 | -37 | 8/8 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D, B | MEDIUM |
| /blog/vida-nocturna-lisboa | 884 | 838 | -46 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/lisboa-en-invierno | 718 | 672 | -46 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | Sin FAQ activa | LOW |
| /blog/errores-turistas-lisboa | 856 | 810 | -46 | 11/11 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/sintra-desde-lisboa | 761 | 718 | -43 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | C, D | MEDIUM |
| /blog/historia-de-lisboa | 1436 | 1390 | -46 | 8/8 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/terremoto-lisboa-1755 | 1074 | 1028 | -46 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/descubrimientos-portugueses-lisboa | 946 | 900 | -46 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/azulejos-portugueses-historia | 787 | 741 | -46 | 4/4 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/novedades-lisboa-2026 | 738 | 692 | -46 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/festivales-eventos-lisboa-2026 | 859 | 813 | -46 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/lisboa-vs-porto | 725 | 679 | -46 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/monumentos-de-lisboa | 1030 | 984 | -46 | 6/6 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/semana-santa-lisboa | 615 | 569 | -46 | 3/3 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/alfama-historia-guia | 900 | 854 | -46 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/gastronomia-portuguesa-guia | 739 | 693 | -46 | 5/5 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/fado-historia-origen | 764 | 718 | -46 | 4/4 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/belem-barrio-guia | 844 | 798 | -46 | 4/4 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/chiado-bairro-alto-guia | 617 | 571 | -46 | 4/4 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/mouraria-barrio-guia | 554 | 508 | -46 | 3/3 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/vinos-portugueses-guia | 582 | 536 | -46 | 4/4 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/tram-28-historia-guia | 594 | 548 | -46 | 3/3 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/bacalhau-plato-portugal | 609 | 563 | -46 | 3/3 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |
| /blog/arquitectura-manuelina-lisboa | 544 | 498 | -46 | 2/2 | 3/0 | 0/0 | Solo FAQ; cuerpo intacto | D | LOW |

## Revision por pregunta activa

La evidencia es el pasaje localizado en el cuerpo actual, no una fuente de verificacion factual. Riesgo se refiere a la restauracion propuesta, no a una penalizacion de Google. D no significa que cada afirmacion sea correcta: significa que no se recomienda reintroducirla.

### /blog/lisboa-en-7-dias · FAQ 1

- Intencion: ¿Son demasiados siete días para Lisboa?
- Respuesta retirada: No, si no los planteas como la misma lista de monumentos estirada. Lo imprescindible de la ciudad se ve en tres días; los otros cuatro se llenan con una o dos escapadas, barrios sin monumento, la otra orilla del Tajo y un día sin plan. Si intentas rellenarlos con más monumentos, entonces sí sobran.
- Evidencia actual: Y lo tercero: con una semana entras en una segunda capa de la ciudad que en tres días no existe. Barrios sin monumento, mercados de barrio, la otra orilla del Tajo, un día entero de playa. Nada de eso es imprescindible, y por eso mismo no aparece en las guías cortas. En una semana es justamente lo que la salva de hacerse larga.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-en-7-dias · FAQ 2

- Intencion: ¿Qué hacer en Lisboa en 7 días?
- Respuesta retirada: El reparto que mejor funciona son tres bloques: dos o tres días de ciudad —centro histórico, Belém y miradores—, una o dos escapadas de día completo, y dos o tres días para lo que no entra en un viaje corto: el Parque das Nações, los barrios sin lista de visitas, los mercados de barrio y un día deliberadamente sin cerrar.
- Evidencia actual:  Días 1 y 2: el centro histórico. Alfama, el castillo, la Baixa, el Chiado y los miradores, repartidos en dos jornadas y no en una. Día 3: Belém y el río. Es zona llana, así que va bien después de dos días de cuestas. Día 4: Sintra, el día completo. Sale temprano y vuelve tarde; no le encajes nada más. Día 5: día de barrio y de calma. El contrapeso obligatorio después de Sintra. Día 6: la costa o el Parque das Nações, según el tiempo que haga. Día 7: lo que quedó pendiente, mercado y despedida. Deliberadamente sin cerrar.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-en-7-dias · FAQ 3

- Intencion: ¿Cuántas excursiones caben en una semana en Lisboa?
- Respuesta retirada: Dos con comodidad. Cada escapada se lleva el día entero contando los trayectos, así que con tres te quedan cuatro días de Lisboa, menos de lo que tendrías en un viaje corto. Si sólo haces una, que sea Sintra. Cruzar el Tajo en barco no cuenta como escapada porque es media tarde.
- Evidencia actual: En una semana caben dos escapadas cómodas. Tres es posible y es el error clásico: cada escapada se lleva el día entero contando los trayectos, y con tres te quedan cuatro días de Lisboa, que es menos de lo que tendrías en un viaje corto.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-en-7-dias · FAQ 4

- Intencion: ¿Cómo repartir los días entre Lisboa y Sintra?
- Respuesta retirada: Sintra pide un día completo y propio: se sale temprano y se vuelve tarde, y no conviene encajarle nada más ese día. Lo que sí importa es qué va antes y después: no la pongas pegada a otra escapada, porque dos días seguidos de tren y sierra queman el resto de la semana. Un día tranquilo de ciudad después funciona mucho mejor.
- Evidencia actual:  Agotar el centro histórico en los dos primeros días. Es la tentación natural y deja cinco días de descenso. Mejor dejar un mirador, un barrio o una tarde de Baixa para la segunda mitad. Encadenar escapadas. Dos días seguidos de tren y sierra queman la semana entera; entre una escapada y otra tiene que haber un día tranquilo en la ciudad. Cerrar los siete días de antemano. Es exactamente lo contrario de la ventaja que da tener una semana: si el plan está cerrado, la lluvia del jueves no se mueve a ninguna parte.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-en-7-dias · FAQ 5

- Intencion: ¿En qué orden conviene ver Lisboa si tengo una semana?
- Respuesta retirada: Empezando por el centro histórico y dejando Belém para el tercer día, porque es zona llana y descansa después de dos días de cuestas. Y sin agotar el centro en las primeras jornadas: guardar un mirador, un barrio o una tarde de Baixa para la segunda mitad evita que la semana vaya de más a menos.
- Evidencia actual:  Días 1 y 2: el centro histórico. Alfama, el castillo, la Baixa, el Chiado y los miradores, repartidos en dos jornadas y no en una. Día 3: Belém y el río. Es zona llana, así que va bien después de dos días de cuestas. Día 4: Sintra, el día completo. Sale temprano y vuelve tarde; no le encajes nada más. Día 5: día de barrio y de calma. El contrapeso obligatorio después de Sintra. Día 6: la costa o el Parque das Nações, según el tiempo que haga. Día 7: lo que quedó pendiente, mercado y despedida. Deliberadamente sin cerrar.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-fotografiar-lisboa · FAQ 1

- Intencion: ¿Cuál es el mejor sitio para fotografiar Lisboa?
- Respuesta retirada: Depende de la hora más que del sitio. Para la vista clásica de los tejados de Alfama con el Panteão al fondo, Santa Luzia y Portas do Sol por la mañana, porque miran al sureste y reciben la luz de frente. Para el final del día, la Senhora do Monte o Santa Catarina, que miran al oeste. Y para el puente, las docas de Alcântara al atardecer.
- Evidencia actual:  Colina de Alfama y Graça —Santa Luzia, Portas do Sol, Senhora do Monte, calles y azulejos—: mañana para las vistas, y vuelta de noche si os apetece el barrio iluminado. Baixa, Chiado y Bica —perspectivas, arcadas, tranvías—: cualquier hora menos el mediodía, y muy buena de noche. Belém y el río hacia el oeste —Torre, Jerónimos, MAAT, docas y puente—: primera hora para Belém, final de tarde para el puente. Es la zona más llana de las tres.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-fotografiar-lisboa · FAQ 2

- Intencion: ¿A qué hora hay mejor luz para fotografiar Lisboa?
- Respuesta retirada: En los extremos del día. A primera hora la luz entra de lado y la ciudad está vacía; al final de la tarde pasa lo mismo del otro lado. El mediodía es la peor hora para casi todo lo de esta guía porque la luz cae desde arriba y aplana las cuestas. Las horas concretas cambian varias horas entre invierno y verano, así que conviene mirar el amanecer y el atardecer del día en cuestión.
- Evidencia actual: A primera hora la ciudad está vacía, la luz entra de lado y las cuestas se llenan de sombras largas. Los sitios que mejor aprovechan ese momento son los que miran al este y al sur: Santa Luzia y Portas do Sol sobre Alfama, la Praça do Comércio abierta al río, y Belém, donde el sol sale a lo largo del agua.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-fotografiar-lisboa · FAQ 3

- Intencion: ¿Dónde se fotografía el tranvía amarillo de Lisboa?
- Respuesta retirada: La Rua da Bica es la más conocida, pero cualquier tramo del 28 por Graça o Alfama da la misma escena con menos gente delante. Lo que más cambia la foto no es el sitio sino la hora: a primera hora hay muy poca gente. Y conviene disparar desde la acera, nunca desde la vía: el tranvía va sobre raíles y no puede apartarse.
- Evidencia actual: El tranvía amarillo subiendo una cuesta estrecha es el otro gran tema de Lisboa. La Rua da Bica es la más conocida —el ascensor amarillo en una calle muy inclinada, con casas a los lados—, pero no es la única: cualquier tramo del 28 por Graça o Alfama da la misma escena con menos gente delante.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-fotografiar-lisboa · FAQ 4

- Intencion: ¿Merece la pena cruzar el Tajo para fotografiar Lisboa?
- Respuesta retirada: Sí, si buscáis un encuadre distinto. Desde la orilla sur, en Cacilhas, se ve Lisboa entera subiendo por las colinas y de frente, porque miras hacia el norte y la ciudad queda iluminada en lugar de a contraluz. Se llega en barco desde Cais do Sodré como transporte público normal.
- Evidencia actual: Y hay un encuadre que sólo se consigue cruzando: desde la orilla sur, en Cacilhas, Lisboa entera se ve subiendo por las colinas y de frente, no a contraluz, porque miras hacia el norte. Se llega en barco desde Cais do Sodré como transporte normal.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-fotografiar-lisboa · FAQ 5

- Intencion: ¿Hace falta cámara o basta con el móvil?
- Respuesta retirada: Para casi todo lo de esta guía basta el móvil. Lo que de verdad cambia el resultado es a qué hora estás en cada sitio y hacia dónde mira ese sitio, no el equipo. Una cámara y un trípode ligero ayudan en la hora azul y en las fotos nocturnas, pero no son requisito para nada de lo anterior.
- Evidencia actual: Si lleváis cámara, un trípode ligero sirve para la hora azul, pero pensad dónde vais a usarlo: en un mirador lleno a la hora del atardecer estorba y no siempre hay sitio. Y no hace falta un catálogo de objetivos: con un angular moderado y algo de zoom se cubre casi todo lo que hay en esta guía.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-con-ninos · FAQ 1

- Intencion: ¿Qué hacer en Lisboa con niños?
- Respuesta retirada: El plan que casi nunca falla es el Oceanário, en el Parque das Nações, y ese barrio da además para media jornada de paseo llano junto al río. A partir de ahí, Belém por sus jardines, el Pavilhão do Conhecimento si buscáis interior, un parque con zona de juegos y, si el tiempo acompaña, una escapada en tren a la costa.
- Evidencia actual:  Los parques con zona de juegos: el Jardim da Estrela y el Parque Eduardo VII son los más socorridos, y son gratis. El paseo del río en el Parque das Nações: llano, ancho y con espacio para correr. Los jardines de Belém y el paseo junto al Tajo. Los miradores: todos los que menciona esta guía son de acceso libre; sólo se paga lo que se consuma en el quiosco. Cruzar el Tajo en barco cuesta un billete de transporte, no una excursión.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-con-ninos · FAQ 2

- Intencion: ¿Se puede ir por Lisboa con carrito de bebé?
- Respuesta retirada: Sí, eligiendo las zonas. Belém, el Parque das Nações, la Baixa y los parques son llanos y cómodos. Alfama, Bairro Alto y Graça son cuestas y escaleras, y ahí el carrito estorba más que ayuda. En el metro, 47 de las 56 estaciones tienen recorrido completo con ascensor, así que conviene comprobar la estación concreta si dependéis de él.
- Evidencia actual: La respuesta honesta es: se puede, pero hay que elegir las zonas. La calzada portuguesa —esos adoquines pequeños— es bonita y resbala cuando llueve, y en las cuestas de Alfama, Bairro Alto o Graça un carrito es más un lastre que una ayuda. En cambio Belém, el Parque das Nações, la Baixa y los parques son llanos y cómodos.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/lisboa-con-ninos · FAQ 3

- Intencion: ¿Cuántos días hacen falta para ver Lisboa con niños?
- Respuesta retirada: Contando un plan grande al día, tres días dan para el Oceanário y el Parque das Nações, un día de Belém y río, y otro de barrio, parque y mirador. Con cuatro entra la playa. Con dos, lo razonable es quedarse con el Oceanário y Belém.
- Evidencia actual: Con niños, la cuenta no es la misma que en un viaje de adultos. Yo calcularía un plan grande al día y poco más: tres días dan para el Oceanário y el Parque das Nações, un día de Belém y río, y un tercero de barrio, parque y mirador sin prisa. Con cuatro entra la playa. Con dos, elegid el Oceanário y Belém y dejad el resto.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-con-ninos · FAQ 4

- Intencion: ¿Qué hacer en Lisboa con niños si llueve?
- Respuesta retirada: Bajar a lo llano y tirar de interiores. El Oceanário y el Pavilhão do Conhecimento están a pocos minutos uno del otro y dan para horas. Los mercados cubiertos también ayudan. Los miradores conviene dejarlos para una ventana seca, porque sin vista no compensan la subida y la calzada mojada resbala.
- Evidencia actual: El Oceanário y el Pavilhão do Conhecimento son planes de interior que dan para horas, y están a pocos minutos uno del otro. Los mercados cubiertos y el propio metro también ayudan a pasar la mañana sin salir del todo. Los miradores, en cambio, dejadlos para una ventana seca: sin vista no compensan la subida.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-con-ninos · FAQ 5

- Intencion: ¿Merece la pena subir al tranvía 28 con niños?
- Respuesta retirada: Como experiencia sí, pero con matices: va lleno buena parte del día, no siempre hay sitio para sentarse y con carrito es incómodo. Si vais a subir, mejor a primera hora o al final del día, y desde una parada inicial en lugar de a mitad de recorrido.
- Evidencia actual: El metro es lo más previsible: va bajo tierra, no depende del tráfico y la mayoría de estaciones tienen ascensor. Los autobuses cubren lo que el metro no llega. El tranvía 28 es una atracción en sí misma, pero conviene decirlo claro: va lleno buena parte del día, no siempre hay sitio para sentarse y con carrito es incómodo. Si vais a subir, mejor a primera hora o al final del día, y mejor desde una parada inicial que a mitad de recorrido.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-en-pareja · FAQ 1

- Intencion: ¿Cuántos días hacen falta para ver Lisboa en pareja?
- Respuesta retirada: Con dos días completos da tiempo a ver la ciudad sin prisa: uno de casco histórico y miradores, otro de Belém y río. Con tres entra Sintra sin sacrificar Lisboa. Con uno, lo razonable es elegir una colina y quedarse al atardecer.
- Evidencia actual: Con dos días completos se ve Lisboa sin prisa: un día de casco histórico y miradores, otro de Belém y río. Con tres, entra Sintra sin sacrificar la ciudad. Con uno, elegid una colina y el atardecer, y dejad Belém para otro viaje.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-en-pareja · FAQ 2

- Intencion: ¿Cuál es el mejor mirador de Lisboa para ver el atardecer en pareja?
- Respuesta retirada: Depende del ambiente que busquéis más que de la vista. Santa Catarina es el más informal, con gente sentada en las escaleras; Graça y Senhora do Monte son más abiertos y se llenan antes; Santa Luzia y Portas do Sol miran directamente a Alfama y al río. En todos conviene llegar con bastante margen.
- Evidencia actual: Es el plan que mejor resume la ciudad y el más barato de todos. Lisboa está construida sobre colinas y casi todas tienen un mirador arriba, muchos con quiosco. La diferencia entre uno y otro no es la vista sino el ambiente: Santa Catarina es el más informal, con gente sentada en las escaleras; Graça y Senhora do Monte son más abiertos y más concurridos; Santa Luzia y Portas do Sol miran directamente a Alfama y al río.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-en-pareja · FAQ 3

- Intencion: ¿Qué se puede hacer en Lisboa en pareja sin gastar?
- Respuesta retirada: Bastante. Los miradores son de acceso libre, los barrios de Alfama, Mouraria, Graça y Príncipe Real se recorren andando, y los jardines de Belém y el paseo del río no cuestan nada. Cruzar el Tajo en barco cuesta un billete de transporte normal.
- Evidencia actual:  Los miradores públicos que menciona esta guía son de acceso libre. Si hay quiosco o terraza, sólo pagáis lo que consumáis. Alfama, Mouraria, Graça y Príncipe Real se recorren andando y no se entra a ningún sitio. Cruzar el Tajo cuesta un billete de transporte, no una excursión. Los jardines de Belém, el paseo del río y las escaleras del Carmo son gratuitos. Muchos museos municipales tienen días o franjas de acceso reducido. Conviene mirarlo en su web antes de ir, porque las condiciones cambian.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-en-pareja · FAQ 4

- Intencion: ¿Merece la pena ir a Sintra si solo tenemos un fin de semana?
- Respuesta retirada: Sintra es un día completo, no una mañana, así que en un fin de semana corto obliga a dejar Lisboa a medias. Si es una prioridad, mejor reservarle el día entero y visitar dos palacios en vez de tres. Si no, se disfruta más dejándola para un viaje más largo.
- Evidencia actual: Sintra es la escapada obvia y merece la pena, pero conviene decidirlo con los ojos abiertos: es un día completo, no una mañana. El tren desde Rossio tarda unos cuarenta minutos y los palacios están repartidos por la montaña, así que hay que sumar el autobús o la subida a pie.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-en-pareja · FAQ 5

- Intencion: ¿Qué hacer en Lisboa en pareja si llueve?
- Respuesta retirada: Bajar a la Baixa, que es llana, y tirar de interiores: cafés históricos, librerías, mercados cubiertos y museos. El tranvía y el barco siguen funcionando y permiten seguir viendo la ciudad a cubierto. Los miradores conviene dejarlos para una ventana seca, porque sin vista no compensan el paseo.
- Evidencia actual: El plan que mejor aguanta la lluvia es cambiar de altura: bajar a la Baixa, que es llana, y tirar de interiores. Cafés históricos, librerías, mercados cubiertos, museos. El tranvía y el barco siguen funcionando y son de las pocas formas de seguir viendo la ciudad sin mojarse. Dejad los miradores para una ventana seca: sin vista, no valen el paseo.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mejores-apps-lisboa · FAQ 1

- Intencion: ¿Qué app necesito para el transporte en Lisboa?
- Respuesta retirada: Citymapper es la más práctica porque integra metro, Carris, trenes y barcos. Las oficiales de Carris y navegante compensan si te quedas más días.
- Evidencia actual: El problema de Lisboa no es que falte transporte, es que hay muchos operadores distintos y ninguno cubre la ciudad entero. Metro, Carris para buses y tranvías, CP y Fertagus para los trenes, Transtejo y Soflusa para los barcos del Tajo, Metro Sul do Tejo al otro lado. Saber cuál te toca en cada trayecto es la mitad del trabajo.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mejores-apps-lisboa · FAQ 2

- Intencion: ¿Funciona Free Now en Lisboa?
- Respuesta retirada: No. Dejó de operar en Portugal el 3 de abril de 2023, aunque muchas listas lo sigan recomendando. En Lisboa se usan Bolt y Uber.
- Evidencia actual: Free Now dejó de operar en Portugal el 3 de abril de 2023. Sigue apareciendo en muchas listas de apps para Lisboa, incluidas guías que se presentan como actualizadas. Si la instalas no te va a servir de nada aquí.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/mejores-apps-lisboa · FAQ 3

- Intencion: ¿Necesito datos móviles para moverme?
- Respuesta retirada: Ayuda, pero si descargas el mapa de Lisboa sin conexión en Google Maps el GPS sigue funcionando sin cobertura.
- Evidencia actual: Google Maps no necesita presentación, pero sí una advertencia concreta para Lisboa: descarga el mapa sin conexión antes de viajar. En Alfama, Mouraria y Graça las calles son estrechas y los edificios altos, y la señal falla más de lo que esperas justo cuando estás perdido entre callejones que no siguen ninguna lógica.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/como-pagar-en-portugal · FAQ 1

- Intencion: ¿Se puede pagar con tarjeta en Lisboa?
- Respuesta retirada: Sí, con total normalidad en hoteles, restaurantes, comercios, museos y transporte. Conviene llevar algo de efectivo para tascas pequeñas, mercados y establecimientos que piden un importe mínimo.
- Evidencia actual:  Restaurantes, hoteles y comercio general: tarjeta sin problema Transporte público y billetes: tarjeta, aunque conviene consultar cada operador Tascas pequeñas, mercados y puestos: mejor llevar efectivo Propinas: casi siempre en efectivo, aunque no son obligatorias
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/como-pagar-en-portugal · FAQ 2

- Intencion: ¿Hace falta llevar efectivo a Portugal?
- Respuesta retirada: No mucho, pero sí algo. Se puede pasar días pagando solo con tarjeta; el efectivo resuelve puestos de mercado, comercio tradicional y propinas. Suele ser mejor reponer sobre la marcha que traer una cantidad grande de casa.
- Evidencia actual: Una forma razonable de plantearlo es llevar una cantidad pequeña para los primeros días y reponer sobre la marcha, en lugar de traer un fajo desde casa. Así evitas cambiar de golpe una cantidad grande en el peor momento y solo sacas lo que realmente vas usando.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/como-pagar-en-portugal · FAQ 3

- Intencion: ¿Qué opción elegir cuando el terminal pregunta entre euros y mi moneda?
- Respuesta retirada: Si eliges tu moneda, la conversión la hace el comercio o el cajero con su propio margen; si eliges euros, la hace tu banco. El margen del terminal suele ser menos ventajoso, así que merece la pena comparar las dos cifras en pantalla antes de aceptar.
- Evidencia actual: Si eliges tu moneda, la conversión la hace el comercio o el operador del cajero, con el tipo de cambio y el margen que ellos decidan. Si eliges euros, la conversión la hace tu banco o tu red de tarjeta, con sus propias condiciones. Ninguna de las dos es automáticamente mejor en todos los casos, pero el margen que aplica el terminal suele ser menos ventajoso, así que merece la pena mirar la cifra que te ofrecen antes de aceptar en lugar de pulsar por inercia.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/como-pagar-en-portugal · FAQ 4

- Intencion: ¿Los cajeros pueden cobrar comisión en Portugal?
- Respuesta retirada: Puede haber dos cargos distintos: el de tu propio banco, que figura en tu contrato, y el del operador del cajero, que debe mostrarse en pantalla antes de confirmar. Los cajeros de operadores independientes en zonas turísticas suelen tener condiciones menos favorables que la red bancaria habitual.
- Evidencia actual: Junto a ellos han aparecido en zonas turísticas cajeros de operadores independientes, con marcas propias y a menudo pantallas más llamativas. Funcionan, pero sus condiciones las fija el operador, no tu banco, y suelen ser menos favorables. Si tienes las dos opciones a la vista, la red bancaria habitual es la apuesta más previsible.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/como-pagar-en-portugal · FAQ 5

- Intencion: ¿Conviene cambiar dinero antes de viajar?
- Respuesta retirada: Si vienes de la zona euro no necesitas cambiar nada. Si vienes de fuera, cambiar todo el presupuesto por adelantado rara vez compensa; las casas de cambio de aeropuertos y zonas turísticas suelen aplicar el margen en el tipo de cambio aunque anuncien cero comisión.
- Evidencia actual: Si necesitas cambiar efectivo, las casas de cambio de zonas muy turísticas y las de los aeropuertos son, casi siempre, el lugar más caro para hacerlo. El truco habitual es anunciar “sin comisión” y meter el margen en el tipo de cambio, de modo que la operación parece gratuita cuando no lo es.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-alojarse-en-lisboa · FAQ 1

- Intencion: ¿Cuál es la mejor zona para una primera visita?
- Respuesta retirada: Baixa, Chiado o Avenida da Liberdade suelen ser las opciones más cómodas por conexión y facilidad para volver caminando.
- Evidencia actual:  Primera visita: Baixa, Chiado o Avenida da Liberdade. Pareja: Chiado, Príncipe Real o una Alfama bien elegida. Familia: Avenida da Liberdade, Saldanha o Parque das Nações si priorizas comodidad. Vida nocturna: Bairro Alto o Cais do Sodré, aceptando ruido. Presupuesto ajustado: Saldanha, Arroios o zonas con metro bien conectado.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-alojarse-en-lisboa · FAQ 2

- Intencion: ¿Alfama es buena zona para dormir?
- Respuesta retirada: Tiene mucho encanto, pero también cuestas, escaleras y accesos irregulares. Funciona mejor si viajas ligero y aceptas caminar.
- Evidencia actual: Alfama es preciosa para pasear, escuchar fado y perderse, pero no siempre es la mejor base. Hay callejones estrechos, escaleras, accesos irregulares y alojamientos donde llegar con maleta se convierte en una pequeña prueba física. Si buscas postal y ambiente antiguo, puede ser maravillosa; si buscas eficiencia, quizá no.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-alojarse-en-lisboa · FAQ 3

- Intencion: ¿Qué zona evitar si quiero dormir tranquilo?
- Respuesta retirada: Revisa con cuidado Bairro Alto y Cais do Sodré si necesitas silencio, porque algunas calles tienen bastante vida nocturna.
- Evidencia actual:  Primera visita: Baixa, Chiado o Avenida da Liberdade. Pareja: Chiado, Príncipe Real o una Alfama bien elegida. Familia: Avenida da Liberdade, Saldanha o Parque das Nações si priorizas comodidad. Vida nocturna: Bairro Alto o Cais do Sodré, aceptando ruido. Presupuesto ajustado: Saldanha, Arroios o zonas con metro bien conectado.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-card-vale-la-pena · FAQ 1

- Intencion: ¿La Lisboa Card vale la pena siempre?
- Respuesta retirada: No. Compensa sobre todo si concentras monumentos, museos y transporte en poco tiempo. Para un viaje lento puede no hacer falta.
- Evidencia actual: La Lisboa Card puede ser útil, pero no es una compra automática. Compensa cuando concentras monumentos, museos y transporte en poco tiempo; pierde sentido si vas a caminar sin prisa, mirar miradores gratuitos y entrar solo en uno o dos lugares de pago.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-card-vale-la-pena · FAQ 2

- Intencion: ¿Debo comprarla antes de organizar la ruta?
- Respuesta retirada: Mejor no. Primero decide qué vas a visitar y después compara si la tarjeta encaja con ese plan.
- Evidencia actual: La decisión se hace con una suma sencilla: anota los lugares de pago que de verdad vas a visitar, confirma si están incluidos o tienen descuento, añade los trayectos de transporte y compara. Si necesitas inventar visitas para justificar la tarjeta, probablemente no la necesitas. Si la ruta ya tiene varias entradas y desplazamientos, puede ser buena aliada.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-card-vale-la-pena · FAQ 3

- Intencion: ¿Puedo fiarme de listas antiguas de atracciones?
- Respuesta retirada: No conviene. Las inclusiones y condiciones pueden cambiar, así que revisa siempre la información oficial vigente.
- Evidencia actual: Información comprobada en julio de 2026. Los precios, cierres, monumentos incluidos y condiciones de acceso pueden cambiar; consulta las condiciones oficiales antes de comprar.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/como-moverse-por-lisboa · FAQ 1

- Intencion: ¿Cuál es la mejor forma de moverse por Lisboa?
- Respuesta retirada: Combinar metro, caminata y transporte puntual según la zona. El metro cruza ciudad; caminar funciona mejor en barrios compactos.
- Evidencia actual: La mejor forma de moverse por Lisboa es combinar. Metro para cruzar ciudad, caminata por zonas compactas, tranvía como experiencia puntual, tren para Belém o escapadas, y coche con app cuando el cuerpo lo pida. Si ordenas la ruta por barrios, el transporte deja de ser un problema y empieza a trabajar a tu favor.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/como-moverse-por-lisboa · FAQ 2

- Intencion: ¿El tranvía 28 sirve para moverse rápido?
- Respuesta retirada: Normalmente no. Es una buena experiencia si vas temprano, pero puede ir lleno y ser lento.
- Evidencia actual: El tranvía 28 es famoso por una razón: atraviesa calles estrechas, sube colinas y condensa una imagen muy reconocible de Lisboa. Pero también puede ir lleno, lento y con colas. Si lo quieres vivir como experiencia, intenta hacerlo temprano o al final de la tarde. Si solo quieres llegar rápido, quizá no es la mejor herramienta.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/como-moverse-por-lisboa · FAQ 3

- Intencion: ¿Cómo llegar del aeropuerto al centro?
- Respuesta retirada: El metro suele ser práctico de día si tu alojamiento queda cerca de una estación; de madrugada o con mucho equipaje, taxi o apps pueden ser más cómodos.
- Evidencia actual: Para llegar desde el aeropuerto suele ser una opción práctica si llevas equipaje manejable y tu alojamiento queda cerca de una estación. El aeropuerto tiene estación de metro y la conexión Aeroporto-Saldanha se anuncia como unos 20 minutos, pero eso no significa que llegue directo a todas las zonas céntricas: muchas rutas necesitan transbordo.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/que-hacer-gratis-en-lisboa · FAQ 1

- Intencion: ¿Se puede disfrutar Lisboa gratis?
- Respuesta retirada: Sí. Miradores, barrios, jardines, plazas y paseos junto al río permiten montar un día completo sin pagar entradas.
- Evidencia actual: Lisboa se presta mucho a gastar sin darte cuenta, pero también permite días muy buenos con presupuesto mínimo. Lo importante es no confundir gratis con improvisado: si ordenas miradores, barrios, río y pausas, puedes tener una jornada completa sin pagar entradas.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/que-hacer-gratis-en-lisboa · FAQ 2

- Intencion: ¿Todos los museos son gratis?
- Respuesta retirada: No. Algunos tienen días, condiciones o zonas gratuitas, pero hay que verificar la información oficial antes de ir.
- Evidencia actual: Algunos lugares tienen exterior gratuito y zonas de pago. Otros son gratis ciertos días, para determinados residentes, edades o documentos. Antes de organizar un día alrededor de una entrada gratuita, verifica la información oficial. Lo gratuito no debería obligarte a discutir en una taquilla.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/que-hacer-gratis-en-lisboa · FAQ 3

- Intencion: ¿Cuál es el mejor plan gratis al atardecer?
- Respuesta retirada: Un mirador como Graça, Senhora do Monte o Santa Catarina, elegido según dónde termines la ruta.
- Evidencia actual: Santa Catarina tiene ambiente joven, Graça es más de barrio, Senhora do Monte ofrece vistas amplias y Ribeira das Naus da una versión más abierta del río. Elige según dónde termines la ruta. Cruzar la ciudad solo por un atardecer puede quitarle gracia al plan.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mejores-miradores-lisboa · FAQ 1

- Intencion: ¿Cuál es el mirador más bonito de Lisboa?
- Respuesta retirada: Senhora do Monte suele ser el favorito por vistas amplias y ambiente local.
- Evidencia actual: 1. Mirador da Senhora do Monte — El preferido de quienes viven aquí
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mejores-miradores-lisboa · FAQ 2

- Intencion: ¿Qué mirador es mejor para fotos?
- Respuesta retirada: Santa Luzia por los azulejos y Portas do Sol por la vista abierta a Alfama.
- Evidencia actual: 3. Mirador das Portas do Sol — El vecino relajado
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mejores-miradores-lisboa · FAQ 3

- Intencion: ¿Se pueden visitar varios en una tarde?
- Respuesta retirada: Sí, Santa Luzia + Portas do Sol + Graça están a pocos minutos a pie.
- Evidencia actual: Se diferencian por la vista que abarcan, por dónde están y por lo que hay alrededor: si tienen sombra, si hay un quiosco, si uno puede sentarse. Y también por cómo se enlazan entre sí, porque algunos quedan a un par de minutos a pie y otros al otro lado de la ciudad. Esta guía recoge diez con ese criterio, con lo que se ve desde cada uno y lo que conviene saber antes de subir.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-comer-barato-lisboa · FAQ 1

- Intencion: ¿Cuánto cuesta comer barato en Lisboa?
- Respuesta retirada: Entre 8 y 12€ en tascas locales con plato del día.
- Evidencia actual: Así empecé a mapear cada rincón donde los lisboetas comen de verdad. No los restaurantes que salen en las guías ni los locales con menús traducidos a cinco idiomas, sino las tascas de barrio donde el dueño conoce a cada cliente por su nombre, los mercados donde las señoras compran el pescado del día, y los quioscos donde un bocadillo de cerdo cuesta lo mismo que hace veinte años.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/donde-comer-barato-lisboa · FAQ 2

- Intencion: ¿Dónde comer barato sin turistas?
- Respuesta retirada: Mouraria, Arroios y Campo de Ourique suelen tener precios reales.
- Evidencia actual: La buena noticia es que basta caminar diez minutos en cualquier dirección para encontrar otro mundo. En Mouraria, Graça, Arroios o Intendente la realidad es completamente diferente: menús del día por siete u ocho euros, porciones generosas, y cocina que sabe a casa de abuela portuguesa.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-comer-barato-lisboa · FAQ 3

- Intencion: ¿Los mercados son buena opción?
- Respuesta retirada: Sí, para variedad; pero Time Out Market es más caro que otros.
- Evidencia actual: El Mercado da Ribeira tiene dos caras completamente diferentes. La que conoce todo el mundo es el Time Out Market: puestos de chefs reconocidos, colas interminables, precios de restaurante con formato de comida rápida. Funciona bien si quieres probar cocina de autor sin reserva, pero no es precisamente barato.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/barrios-imprescindibles · FAQ 1

- Intencion: ¿Cuál es el mejor barrio para primera visita?
- Respuesta retirada: Baixa-Chiado por ubicación, plano y buena conexión.
- Evidencia actual: Baixa-Chiado: el corazón comercial con siglos de historia
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/barrios-imprescindibles · FAQ 2

- Intencion: ¿Qué barrio tiene más encanto?
- Respuesta retirada: Alfama, por sus calles y ambiente de fado.
- Evidencia actual: Lisboa no es una ciudad que se entienda en plano. Hay que caminarla para comprender cómo cada colina guarda una personalidad distinta, cómo la luz cambia según la orientación de las calles, cómo el sonido del fado en Alfama da paso al bullicio juvenil del Bairro Alto apenas cruzas unas manzanas.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/barrios-imprescindibles · FAQ 3

- Intencion: ¿Dónde está la vida nocturna?
- Respuesta retirada: En Bairro Alto y Cais do Sodré.
- Evidencia actual: Lisboa no es una ciudad que se entienda en plano. Hay que caminarla para comprender cómo cada colina guarda una personalidad distinta, cómo la luz cambia según la orientación de las calles, cómo el sonido del fado en Alfama da paso al bullicio juvenil del Bairro Alto apenas cruzas unas manzanas.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/evitar-turistadas-lisboa · FAQ 1

- Intencion: ¿Cuál es la mayor turistada en Lisboa?
- Respuesta retirada: Comer en Rua Augusta: precios altos y calidad media.
- Evidencia actual: La Rua Augusta y sus alrededores concentran docenas de establecimientos con menús traducidos a seis idiomas, camareros en la puerta invitándote a entrar, y precios que duplican o triplican lo normal. El mismo bacalhau que aquí cuesta veinte euros lo encuentras por nueve en Mouraria o Graça, cocinado con más cariño y servido en porciones más generosas.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/evitar-turistadas-lisboa · FAQ 2

- Intencion: ¿Cómo evitar colas en el tranvía 28?
- Respuesta retirada: Sube temprano o usa el tranvía 12 que hace una ruta similar.
- Evidencia actual: Y la tercera, mi favorita, es olvidarte del 28 y probar el tranvía 12, que hace un recorrido similar por Alfama pero sin el aura turística. Mismo encanto, mismas cuestas, una décima parte de la gente.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/evitar-turistadas-lisboa · FAQ 3

- Intencion: ¿Dónde hay fado auténtico?
- Respuesta retirada: En tascas pequeñas de Alfama o Bairro Alto, no en restaurantes turísticos.
- Evidencia actual: Tasca do Chico en el Bairro Alto, Mesa de Frades en Alfama, Senhor Vinho en Lapa... Hay locales donde por veinte o treinta euros cenas bien, bebes vino, y escuchas fado del que pone la piel de gallina. Solo hay que saber buscarlos.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/pasteles-de-belem · FAQ 1

- Intencion: ¿Qué diferencia hay con los pastéis de nata?
- Respuesta retirada: La receta de Belém es secreta y solo se hace en esa pastelería.
- Evidencia actual: Pastel de Belém, en cambio, es una denominación de origen. Solo puede llamarse así el que sale de esta fábrica concreta, elaborado con la receta original del monasterio. La diferencia se nota al morder: el hojaldre es más delicado, con capas finísimas que crujen sin deshacerse; la crema tiene una textura más densa y un sabor que recuerda vagamente a canela aunque no la lleve dentro; el caramelizado superior forma burbujas doradas que contrastan con la suavidad del relleno.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/pasteles-de-belem · FAQ 2

- Intencion: ¿Cuánto cuesta un Pastel de Belém?
- Respuesta retirada: Suele rondar 1,30-1,50€ por unidad.
- Evidencia actual: El local tiene dos colas separadas que la mayoría de visitantes no distingue. La cola exterior, la que serpentea por la calle, es para comprar pasteles para llevar. Aquí puedes pedir una caja de seis, doce o más unidades, pagar, y marcharte. Suele moverse relativamente rápido porque las transacciones son breves.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/pasteles-de-belem · FAQ 3

- Intencion: ¿Merece la pena la cola?
- Respuesta retirada: Sí si es tu primera visita; prueba a entrar al salón para menos espera.
- Evidencia actual: La otra cola, menos visible, da acceso al salón interior. Aquí te sientas, te traen los pasteles calientes en un plato con los dispensadores de canela y azúcar, y puedes acompañarlos de café, zumo o incluso un vino de Madeira si te sientes decadente a media mañana. Esta cola paradójicamente suele ser más corta, porque muchos visitantes no saben que existe.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mejor-epoca-visitar-lisboa · FAQ 1

- Intencion: ¿Cuál es el mejor mes para visitar Lisboa?
- Respuesta retirada: Mayo y septiembre ofrecen buen clima y menos gente.
- Evidencia actual: Buen clima y menos turistas. Ideal para caminar y ver miradores sin colas.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mejor-epoca-visitar-lisboa · FAQ 2

- Intencion: ¿Lisboa es buena en invierno?
- Respuesta retirada: Sí, es más tranquila y con precios más bajos.
- Evidencia actual: Lisboa se disfruta todo el año, pero cada temporada tiene ventajas y desventajas. Depende de si priorizas clima, precios o ambiente.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mejor-epoca-visitar-lisboa · FAQ 3

- Intencion: ¿Cuándo es temporada alta?
- Respuesta retirada: De junio a agosto, con precios y ocupación más altos.
- Evidencia actual: Verano (junio-agosto)
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/aeropuerto-lisboa-al-centro · FAQ 1

- Intencion: ¿Cuál es la forma más barata de ir del aeropuerto de Lisboa al centro?
- Respuesta retirada: El metro, con la tarjeta Viva Viagem: 1,50€ el trayecto (más 0,50€ la tarjeta la primera vez).
- Evidencia actual: El aeropuerto tiene su propia estación de metro, Aeroporto, en la línea roja. Es la opción más económica con diferencia: un billete con la tarjeta Viva Viagem cuesta 1,50 euros (más 0,50 euros la primera vez por la tarjeta). El trayecto hasta el centro tarda entre 20 y 25 minutos, normalmente con un cambio en Alameda o Saldanha si tu destino es Baixa-Chiado, Rossio o Cais do Sodré.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/aeropuerto-lisboa-al-centro · FAQ 2

- Intencion: ¿Cuánto cuesta un taxi del aeropuerto al centro?
- Respuesta retirada: Entre 15 y 25€ según hora, tráfico y suplemento de equipaje.
- Evidencia actual: Hay una parada oficial de taxis justo a la salida de llegadas. El trayecto al centro suele rondar los 15-20 euros, pero con el suplemento de equipaje (1,60 euros por maleta en el maletero) y el recargo nocturno o de fin de semana puede superar los 25 euros. Súbete solo a los taxis oficiales de la parada, nunca a quien se ofrezca sin taxímetro.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/aeropuerto-lisboa-al-centro · FAQ 3

- Intencion: ¿Hay metro toda la noche desde el aeropuerto?
- Respuesta retirada: No, el metro cierra a la 1:00. Si llegas de madrugada, usa taxi o Uber/Bolt.
- Evidencia actual: Aterrizas en el aeropuerto Humberto Delgado y lo primero que necesitas resolver es cómo llegar al centro. Hay cuatro opciones razonables —metro, Aerobus, taxi y Uber/Bolt— y la mejor depende de cuánto equipaje llevas, a qué hora llegas y cuánta prisa tienes.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/restaurantes-romanticos-lisboa · FAQ 1

- Intencion: ¿Hay restaurantes con vistas en Lisboa?
- Respuesta retirada: Sí, Chapitô à Mesa y Ponto Final tienen vistas excelentes.
- Evidencia actual: Si planeas una propuesta de matrimonio, Chapitô à Mesa y Ponto Final tienen las mejores vistas y suelen estar abiertos a colaborar con planes especiales si avisas con tiempo. Para aniversarios, Taberna da Rua das Flores o Solar dos Presuntos ofrecen intimidad y elegancia. Y si buscas algo diferente, A Cevicheria o Tasca da Esquina combinan modernidad con buen ambiente.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/restaurantes-romanticos-lisboa · FAQ 2

- Intencion: ¿Hay que reservar siempre?
- Respuesta retirada: En los más populares sí, sobre todo viernes y sábados.
- Evidencia actual: Cruzar el Tajo en ferry desde Cais do Sodré hasta Cacilhas es una experiencia en sí misma. Diez minutos navegando con Lisboa como telón de fondo, y al llegar, un restaurante de pescado fresco con terraza directamente sobre el agua. Ponto Final no es sofisticado —mesas de plástico, ambiente de tasca de barrio— pero tiene algo que los restaurantes del centro no pueden ofrecer: la vista completa de Lisboa desde fuera.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/restaurantes-romanticos-lisboa · FAQ 3

- Intencion: ¿Opciones románticas sin gastar mucho?
- Respuesta retirada: Ponto Final o Tasca da Esquina con presupuesto medio.
- Evidencia actual: Si planeas una propuesta de matrimonio, Chapitô à Mesa y Ponto Final tienen las mejores vistas y suelen estar abiertos a colaborar con planes especiales si avisas con tiempo. Para aniversarios, Taberna da Rua das Flores o Solar dos Presuntos ofrecen intimidad y elegancia. Y si buscas algo diferente, A Cevicheria o Tasca da Esquina combinan modernidad con buen ambiente.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/que-ver-cascais-desde-lisboa · FAQ 1

- Intencion: ¿Cascais se puede ver en un día?
- Respuesta retirada: Sí, es ideal para una excursión de un día.
- Evidencia actual: Cascais fue el refugio de verano de la familia real portuguesa a finales del siglo XIX, y esa herencia de elegancia todavía se percibe en sus calles. Aunque hoy es más accesible que entonces, mantiene un aire distinguido que la diferencia de otros pueblos costeros. A solo treinta minutos en tren desde Lisboa, es la excursión perfecta cuando necesitas un respiro del bullicio urbano.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/que-ver-cascais-desde-lisboa · FAQ 2

- Intencion: ¿Hace falta coche?
- Respuesta retirada: No, el tren es rápido y llega al centro.
- Evidencia actual: A las doce y media, come en Porto de Santa Maria o O Pescador. Después de comer, camina hacia Boca do Inferno —el paseo te ayudará a hacer la digestión y las vistas valen la pena. Vuelve al centro sobre las tres y media, tómate un helado en Santini, y si hace buen tiempo, dedica el resto de la tarde a la playa. El último tren de vuelta sale alrededor de las once de la noche, así que no hay prisa.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/que-ver-cascais-desde-lisboa · FAQ 3

- Intencion: ¿Qué no me puedo perder?
- Respuesta retirada: Boca do Inferno y el paseo marítimo.
- Evidencia actual: A las doce y media, come en Porto de Santa Maria o O Pescador. Después de comer, camina hacia Boca do Inferno —el paseo te ayudará a hacer la digestión y las vistas valen la pena. Vuelve al centro sobre las tres y media, tómate un helado en Santini, y si hace buen tiempo, dedica el resto de la tarde a la playa. El último tren de vuelta sale alrededor de las once de la noche, así que no hay prisa.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/playas-cerca-lisboa · FAQ 1

- Intencion: ¿Cuál es la playa más fácil desde Lisboa?
- Respuesta retirada: Cascais, por tren directo desde Cais do Sodré.
- Evidencia actual: A solo treinta minutos en tren desde Cais do Sodré, Cascais es la playa más accesible desde Lisboa. El viaje en sí es parte del encanto: el tren sigue la costa ofreciendo vistas constantes al Atlántico. Cuando llegas, la playa está literalmente en el centro del pueblo —bajas del tren y en cinco minutos estás en la arena.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/playas-cerca-lisboa · FAQ 2

- Intencion: ¿Dónde hay playa más salvaje?
- Respuesta retirada: Arrábida y Adraga son más naturales y menos urbanas.
- Evidencia actual: Lisboa tiene muchas cosas, pero playa en el centro no es una de ellas. Sin embargo, a menos de una hora en transporte público o coche, encuentras algunas de las playas más bonitas de Portugal. He pasado incontables fines de semana explorando la costa desde Cascais hasta la Arrábida, y cada playa tiene su personalidad.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/playas-cerca-lisboa · FAQ 3

- Intencion: ¿Se puede ir en invierno?
- Respuesta retirada: Sí, para pasear; para bañarse mejor de junio a septiembre.
- Evidencia actual: Las playas son bonitas todo el año, pero la experiencia cambia según la temporada. De junio a septiembre el agua está más cálida (aunque nunca realmente caliente —el Atlántico es frío incluso en verano) y puedes bañarte cómodamente. Mayo y octubre también funcionan si hace buen tiempo, aunque el agua será más fría.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-escuchar-fado-autentico · FAQ 1

- Intencion: ¿Dónde escuchar fado auténtico?
- Respuesta retirada: En tascas pequeñas como Tasca do Chico o A Baiuca.
- Evidencia actual: Tasca do Chico — El templo del fado vadio
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-escuchar-fado-autentico · FAQ 2

- Intencion: ¿El fado es gratis?
- Respuesta retirada: En bares locales suele ser gratis con consumición.
- Evidencia actual: El fado auténtico es diferente: bares pequeños donde los fadistas aparecen espontáneamente, sin micrófonos ni amplificación, cantando porque les nace, no porque les pagan. El público es mayoritariamente local, el ambiente es íntimo, y no hay menú obligatorio —solo consumes lo que quieras beber. El precio es el de una consumición, no el de una cena completa.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/donde-escuchar-fado-autentico · FAQ 3

- Intencion: ¿Qué evitar?
- Respuesta retirada: Restaurantes turísticos con “show de fado” caro en Baixa.
- Evidencia actual: Ese es el fado real: espontáneo, íntimo, nacido de la necesidad de expresar algo que las palabras no pueden. No el espectáculo estructurado que se ofrece en restaurantes turísticos con menús fijos y precios inflados. Esta guía te ayudará a encontrar el primero y evitar el segundo.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/presupuesto-viajar-lisboa · FAQ 1

- Intencion: ¿Cuánto cuesta un viaje medio a Lisboa?
- Respuesta retirada: Entre 60 y 90€ al día incluyendo alojamiento y comidas.
- Evidencia actual:  Alojamiento: Hotel 50-60 EUR/noche Comida: 20-25 EUR/día (restaurantes locales) Transporte: 6.40 EUR (pase diario) Actividades: 10-15 EUR (museos, entradas) TOTAL: 86-106 EUR/día
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/presupuesto-viajar-lisboa · FAQ 2

- Intencion: ¿Es Lisboa cara?
- Respuesta retirada: Puede serlo en zonas turísticas, pero hay opciones económicas.
- Evidencia actual: Lisboa puede ser una de las capitales más baratas de Europa o una de las más caras, dependiendo completamente de cómo viajes. He visto a viajeros gastar 200 euros al día sin darse cuenta, y a otros vivir perfectamente con 30. La diferencia no está en la ciudad, sino en las decisiones que tomas.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/presupuesto-viajar-lisboa · FAQ 3

- Intencion: ¿Qué gasto es el más alto?
- Respuesta retirada: El alojamiento suele ser el mayor coste.
- Evidencia actual: Lisboa puede ser una de las capitales más baratas de Europa o una de las más caras, dependiendo completamente de cómo viajes. He visto a viajeros gastar 200 euros al día sin darse cuenta, y a otros vivir perfectamente con 30. La diferencia no está en la ciudad, sino en las decisiones que tomas.
- Clase: **B**. Integrar una frase de decision en el cuerpo, sin cifras ni otra FAQ.
- Confianza: media: mejora de decision breve, no nueva seccion

### /blog/mejores-mercados-lisboa · FAQ 1

- Intencion: ¿Cuál es el mercado más famoso?
- Respuesta retirada: Time Out Market, aunque es más turístico.
- Evidencia actual: 1. Time Out Market (Mercado da Ribeira)
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mejores-mercados-lisboa · FAQ 2

- Intencion: ¿Dónde comprar barato y local?
- Respuesta retirada: Mercado de Arroios y la parte tradicional del Mercado da Ribeira.
- Evidencia actual: 1. Time Out Market (Mercado da Ribeira)
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mejores-mercados-lisboa · FAQ 3

- Intencion: ¿Cuándo es Feira da Ladra?
- Respuesta retirada: Martes y sábados por la mañana.
- Evidencia actual: Mercado de segunda mano los martes y sabados en Alfama. Azulejos antiguos, ropa vintage, antiguedades. Perfecto para encontrar souvenirs unicos.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/donde-tomar-cafe-lisboa · FAQ 1

- Intencion: ¿Cómo se pide un café en Lisboa?
- Respuesta retirada: Pide una “bica” si quieres un espresso.
- Evidencia actual: El café en Portugal no es solo una bebida, es un ritual social. Los portugueses toman café constantemente —al despertar, después de comer, en las pausas del trabajo, antes de dormir—. Un bica (café expreso) cuesta menos de un euro y se bebe de pie en el mostrador de cualquier pastelería, en menos de dos minutos, y luego sigues con tu día.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-tomar-cafe-lisboa · FAQ 2

- Intencion: ¿Café de especialidad o tradicional?
- Respuesta retirada: Ambos son buenos; prueba A Brasileira y Copenhagen Coffee Lab.
- Evidencia actual: 2. Copenhagen Coffee Lab
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/donde-tomar-cafe-lisboa · FAQ 3

- Intencion: ¿Es caro el café?
- Respuesta retirada: No, suele costar entre 0,70 y 1,50€.
- Evidencia actual:  Bica: Cafe expreso (0.60-0.80 EUR) Meia de leite: Cortado (1.20 EUR) Galao: Cafe con leche largo (1.50 EUR) Carioca: Expreso mas suave (0.70 EUR)
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/que-comprar-lisboa-souvenirs · FAQ 1

- Intencion: ¿Qué souvenir vale la pena?
- Respuesta retirada: Azulejos, conservas de pescado y vino de Oporto.
- Evidencia actual: Los souvenirs tipicos de Lisboa son baratos y autenticos. Azulejos, vino, conservas, artesania. Aqui que comprar y donde encontrarlo sin turistadas.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/que-comprar-lisboa-souvenirs · FAQ 2

- Intencion: ¿Dónde comprar sin turistadas?
- Respuesta retirada: Feira da Ladra y tiendas locales fuera de Baixa.
- Evidencia actual: Evita souvenirs baratos de Rossio o Baixa. Son de mala calidad y caros. Mejor comprar en tiendas locales o Feira da Ladra.
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/que-comprar-lisboa-souvenirs · FAQ 3

- Intencion: ¿Puedo llevar comida en avión?
- Respuesta retirada: Sí, conservas y dulces suelen pasar sin problema en equipaje.
- Evidencia actual: Los souvenirs tipicos de Lisboa son baratos y autenticos. Azulejos, vino, conservas, artesania. Aqui que comprar y donde encontrarlo sin turistadas.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/excursiones-desde-lisboa · FAQ 1

- Intencion: ¿Cuál es la excursión número uno?
- Respuesta retirada: Sintra, por palacios y paisajes únicos.
- Evidencia actual:  Cascais + Cabo da Roca: sí, hay autobús directo entre los dos Sintra + Cabo da Roca: sí, si renuncias a uno de los palacios Óbidos + Nazaré: sí, están en la misma dirección y la carretera las une Sintra + Cascais: mala idea, aunque haya autobús: los dos piden su tiempo Évora o Arrábida con cualquier otra: no, están en la otra dirección
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/excursiones-desde-lisboa · FAQ 2

- Intencion: ¿Se pueden combinar excursiones?
- Respuesta retirada: Óbidos y Nazaré sí; Sintra y Cascais es muy justo.
- Evidencia actual:  Cascais + Cabo da Roca: sí, hay autobús directo entre los dos Sintra + Cabo da Roca: sí, si renuncias a uno de los palacios Óbidos + Nazaré: sí, están en la misma dirección y la carretera las une Sintra + Cascais: mala idea, aunque haya autobús: los dos piden su tiempo Évora o Arrábida con cualquier otra: no, están en la otra dirección
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/excursiones-desde-lisboa · FAQ 3

- Intencion: ¿Hace falta tour?
- Respuesta retirada: No siempre, pero ayuda si quieres todo organizado.
- Evidencia actual: Antiguo pueblo de pescadores convertido en villa de veraneo de la aristocracia portuguesa, y hoy la escapada más fácil de todas: tren directo desde Cais do Sodré, sin transbordos, con el Tajo a la izquierda durante todo el trayecto. Es el único de esta lista que se puede hacer en media tarde.
- Clase: **B**. Integrar una frase de decision en el cuerpo, sin cifras ni otra FAQ.
- Confianza: media: mejora de decision breve, no nueva seccion

### /blog/vida-nocturna-lisboa · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual:  Horarios: Los bares abren entre 21:00-22:00, los clubs no arrancan hasta la 1:00 Transporte: El metro cierra a la 1:00. Después, usa Uber/Bolt (5-8€ al centro) Seguridad: Lisboa es muy segura de noche, pero cuida el móvil en zonas muy concurridas Dresscode: Casual en casi todos los sitios. Solo Lux Frágil pide vestir un poco mejor Precios: Cervezas 2-4€, cocktails 8-12€, entradas a clubs 0-15€
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/vida-nocturna-lisboa · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: Lisboa de noche es una ciudad completamente distinta. Las calles empinadas que durante el día transpiran historia y melancolía se transforman después de las diez en un escenario vibrante donde la música sale por las ventanas abiertas, los grupos se forman espontáneamente en las esquinas, y el olor a ginja —el licor de guinda típico— se mezcla con la brisa atlántica.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/vida-nocturna-lisboa · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Ninguna noche en Lisboa está completa sin una ginjinha. Este licor de guinda servido en vasito de chocolate es una tradición lisboeta que debes probar al menos una vez. Los dos sitios clásicos son A Ginjinha (en Rossio, abierto desde 1840) y Ginjinha Sem Rival, justo enfrente. Un chupito cuesta 1.50€ y el ritual es simple: pides 'com elas' (con las guindas) o 'sem elas' (sin), te lo bebes de un trago, y sigues tu camino.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/errores-turistas-lisboa · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: En el mapa, todo parece cerca. En la realidad, las cuestas multiplican el tiempo de caminata por dos. Lo que Google Maps marca como '10 minutos caminando' puede ser una subida brutal que te deja sin aliento. Planifica máximo tres o cuatro zonas por día, con descansos para café entre ellas.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/errores-turistas-lisboa · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: La Lisboa Card (24h: 27€, 48h: 44€, 72h: 54€) parece atractiva porque incluye transporte y entradas. Pero a menos que vayas a visitar tres o más monumentos de pago por día, no te sale rentable. Muchos de los mejores sitios de Lisboa son gratis: miradores, callejuelas de Alfama, playas, mercados. Haz números antes de comprar.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/errores-turistas-lisboa · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: La Lisboa Card (24h: 27€, 48h: 44€, 72h: 54€) parece atractiva porque incluye transporte y entradas. Pero a menos que vayas a visitar tres o más monumentos de pago por día, no te sale rentable. Muchos de los mejores sitios de Lisboa son gratis: miradores, callejuelas de Alfama, playas, mercados. Haz números antes de comprar.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/sintra-desde-lisboa · FAQ 1

- Intencion: ¿Cuánto tarda el tren a Sintra?
- Respuesta retirada: Unos 40 minutos desde la estación de Rossio.
- Evidencia actual: El tren sale desde la estación de Rossio (en pleno centro de Lisboa) cada 20-30 minutos. El trayecto dura 40 minutos y cuesta 2.30€ por trayecto con la tarjeta Viva Viagem cargada con 'zapping' (prepago). Compra la tarjeta Viva Viagem en cualquier estación de metro (0.50€ + saldo que quieras cargar) y úsala tanto para el metro de Lisboa como para el tren a Sintra.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/sintra-desde-lisboa · FAQ 2

- Intencion: ¿Se puede ver Sintra en un día?
- Respuesta retirada: Sí, pero planifica 2-3 lugares para no ir con prisas.
- Evidencia actual:  1. Quinta da Regaleira (abre a las 9:30) — El pozo iniciático, los túneles, los jardines. Es el sitio que más impresiona y a primera hora está vacío 2. Palacio da Pena (llegar sobre las 11:30) — Las colas de la mañana ya bajaron. La terraza tiene las mejores vistas de Sintra 3. Castelo dos Mouros (si tienes tiempo) — Las murallas medievales con vistas panorámicas. Está en el camino entre Regaleira y Pena 4. Centro de Sintra (para comer) — Baja al pueblo, come en una tasca y prueba las travesseiros (dulce típico de Sintra)
- Clase: **D**. Resumen de una decision o recomendacion ya cubierta por el cuerpo; no justifica repetir un bloque FAQ.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/sintra-desde-lisboa · FAQ 3

- Intencion: ¿Conviene comprar entradas online?
- Respuesta retirada: Sí, evita colas largas especialmente en temporada alta.
- Evidencia actual: El problema es que esa popularidad tiene consecuencias: en verano, las colas para entrar al Palacio da Pena pueden ser de dos horas, los restaurantes del centro están llenos de turistas, y los precios son un 50% más altos que en Lisboa. He ido a Sintra más de treinta veces y he aprendido exactamente cómo evitar todo eso. Esta guía es el resultado de esos años de prueba y error.
- Clase: **C**. No restaurar: tarifa, servicio, horario, acceso o condicion variable sin verificacion actual.
- Confianza: alta en no restaurar sin comprobar; vigencia no confirmada

### /blog/historia-de-lisboa · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: El 1 de noviembre de 1755, Día de Todos los Santos, mientras la población asistía a misa, un terremoto de magnitud estimada entre 8 y 9 sacudió Lisboa durante diez minutos. Lo que no destruyó el sismo lo destruyó el tsunami que llegó cuarenta minutos después por el Tajo. Los incendios ardieron durante días. Entre 30.000 y 60.000 personas murieron en Lisboa (de una población de 200.000).
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/historia-de-lisboa · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: La ciudad romana se extendía por las actuales Baixa y parte de Alfama. Tenía teatro (se pueden ver restos bajo el Chiado), termas, acueducto y el foro en lo que hoy es la Praça da Figueira. Olissipo exportaba garum —una salsa de pescado fermentada que era al Imperio Romano lo que el ketchup al siglo XX— a toda Europa. Las fábricas de garum se han encontrado bajo varios edificios del centro histórico.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/historia-de-lisboa · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Los moros construyeron o reforzaron el castillo, excavaron cisternas de agua, y convirtieron la ciudad en un centro comercial entre Europa y el Mediterráneo. La palabra 'alfange' (tipo de espada), 'alcova' (dormitorio), 'azulejo' (del árabe az-zulayj) y muchas otras palabras portuguesas tienen origen árabe. El legado moro en la lengua, la arquitectura y la gastronomía portuguesa es inmenso.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/terremoto-lisboa-1755 · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: Lo que pasó en las siguientes horas —el terremoto, el tsunami, el incendio de cinco días— destruyó el 85% de la ciudad y mató a entre 30.000 y 60.000 personas. Pero la historia del terremoto de Lisboa no termina en la catástrofe. Termina en la reconstrucción más rápida y moderna de la historia europea, y en un debate filosófico que todavía hoy no tiene respuesta definitiva.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/terremoto-lisboa-1755 · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: El plan de Pombal para reconstruir la Baixa (el barrio más destruido) fue revolucionario. Calles rectilíneas trazadas en cuadrícula, lo que en 1755 era una modernidad urbanística extraordinaria. Edificios estandarizados con estructuras de madera llamadas 'gaiola pombalina' (jaula pombalina), un sistema antisísmico que los ingenieros modernos todavía admiran. Plazas regulares que conectaban la nueva ciudad con el río.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/terremoto-lisboa-1755 · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: La Baixa Pombalina —el corazón moderno de Lisboa— fue construida sobre los escombros del terremoto. Cada vez que caminas por la Rua Augusta o la Praça do Comércio, estás en un barrio que fue diseñado de cero hace menos de 270 años.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/descubrimientos-portugueses-lisboa · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: Hubo un período de poco más de cien años, entre 1415 y 1542, en que Portugal —un pequeño reino en el extremo occidental de Europa, con apenas un millón de habitantes— conectó el mundo. Comerciantes portugueses llegaron a Brasil, a India, a China, a Japón, a las costas de África. Vasco de Gama encontró la ruta marítima a las especias. Pedro Álvares Cabral llegó a Brasil. Fernando de Magallanes (Fernando Magalhães), aunque al servicio de España, era portugués y su expedición completó la primera vuelta al mundo.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/descubrimientos-portugueses-lisboa · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: Hubo un período de poco más de cien años, entre 1415 y 1542, en que Portugal —un pequeño reino en el extremo occidental de Europa, con apenas un millón de habitantes— conectó el mundo. Comerciantes portugueses llegaron a Brasil, a India, a China, a Japón, a las costas de África. Vasco de Gama encontró la ruta marítima a las especias. Pedro Álvares Cabral llegó a Brasil. Fernando de Magallanes (Fernando Magalhães), aunque al servicio de España, era portugués y su expedición completó la primera vuelta al mundo.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/descubrimientos-portugueses-lisboa · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Hubo un período de poco más de cien años, entre 1415 y 1542, en que Portugal —un pequeño reino en el extremo occidental de Europa, con apenas un millón de habitantes— conectó el mundo. Comerciantes portugueses llegaron a Brasil, a India, a China, a Japón, a las costas de África. Vasco de Gama encontró la ruta marítima a las especias. Pedro Álvares Cabral llegó a Brasil. Fernando de Magallanes (Fernando Magalhães), aunque al servicio de España, era portugués y su expedición completó la primera vuelta al mundo.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/azulejos-portugueses-historia · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: La palabra 'azulejo' viene del árabe 'az-zulayj', que significa 'pequeña piedra pulida'. Los primeros azulejos llegaron a Portugal desde Al-Ándalus (la España mora) en el siglo XV. El rey Manuel I los importó de Sevilla para decorar el Palácio de Sintra, y pueden verse todavía hoy: azulejos geométricos de colores brillantes, sin figuras, en el estilo árabe-mudéjar.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/azulejos-portugueses-historia · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: En Lisboa, el mejor ejemplo de este período son los paneles del Mirador de Santa Luzia, en Alfama, que representan la Praça do Comércio antes del terremoto de 1755 y la reconquista del castillo a los moros. Los azulejos en la fachada de la Iglesia de São Vicente de Fora narran las fábulas de La Fontaine en 38 paneles.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/azulejos-portugueses-historia · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Hay una imagen de Lisboa que no aparece en las postales pero que cualquier visitante lleva consigo para siempre: la pared de una casa cubierta de azulejos azules y blancos, desgastados por el tiempo, con pequeñas grietas donde crece una planta diminuta. O la fachada de una iglesia entera vestida de cerámica policromada, brillando bajo el sol de la tarde. O el interior de una estación de metro decorada con paneles narrativos del siglo XX que parecen miniaturizaciones de la historia de Portugal.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/novedades-lisboa-2026 · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: Lisboa en 2026 no es la misma que hace cinco años. La ciudad ha cambiado con más rapidez de lo que la mayoría de los viajeros imagina: nuevos barrios en transformación, museos renovados, cambios en el transporte, y una escena gastronómica que no para de sorprender. Si viniste hace dos o tres años, esta guía te dará motivos para volver. Si es tu primera vez, aquí están todas las novedades que hacen de 2026 un año especialmente bueno para visitar Lisboa.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/novedades-lisboa-2026 · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: El mapa de alojamiento en Lisboa ha cambiado. Los precios en el centro histórico (Alfama, Chiado, Baixa) siguen siendo los más altos, pero barrios como Penha de França, Mouraria alta, Arroios e Intendente ofrecen opciones más económicas con transporte excelente al centro. El Airbnb tiene restricciones desde 2023 en zonas residenciales protegidas, lo que ha reducido la oferta pero también ha frenado la turistificación extrema de algunos barrios.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/novedades-lisboa-2026 · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Para los amantes de la cultura, el Doclisboa (festival de cine documental, octubre) y el Jazz em Agosto (Fundação Gulbenkian, agosto) son los eventos más recomendables del otoño-verano. Y para los amantes del running, la Maratona de Lisboa en octubre ofrece una de las rutas más espectaculares de Europa: el recorrido pasa por Belém, el Chiado y la orilla del Tajo.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/festivales-eventos-lisboa-2026 · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: Mayo es uno de los mejores meses para visitar Lisboa: temperatura perfecta (18-22°C), jardines en flor, sin las multitudes del verano, y la ciudad saliendo del invierno con energía renovada. Los mercados callejeros y los conciertos al aire libre empiezan a poblar parques y plazas.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/festivales-eventos-lisboa-2026 · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: Junio es el mes de Lisboa por antonomasia. Las Festas de Lisboa ocupan todo el mes con eventos culturales, conciertos, exposiciones y los famosos Arraiais (fiestas de barrio) que llenan Alfama, Mouraria y el Bairro Alto de mesas en la calle, sardinas a la brasa y música hasta el amanecer.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/festivales-eventos-lisboa-2026 · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Para los amantes del cine, el IndieLisboa (festival de cine independiente, generalmente en abril) y el Monstra (festival de cine de animación, marzo) son los eventos culturales más interesantes del invierno-primavera. Las entradas son económicas y la calidad de la programación es muy alta.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-vs-porto · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: Si tienes 10 días en Portugal, la combinación perfecta es 5 días en Lisboa (con día en Sintra), tren o autocar a Porto (2,5 horas), y 4-5 días en Porto con excursión al Duero. Es uno de los mejores itinerarios de Europa.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-vs-porto · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: En Lisboa, el corazón histórico es Alfama —callejuelas medievales, mirador de Santa Luzia, fado auténtico en pequeñas casas— seguido de Belém para los monumentos de los Descubrimientos (Jerónimos, Torre de Belém) y el Chiado para compras y cafés. El recorrido puede hacerse a pie en 2-3 días.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/lisboa-vs-porto · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Porto es más gris, más atlántica, más severa en su belleza. La luz es diferente: más dramática, con más nubes y más contrastes. El río Duero es más estrecho y más encajado que el Tajo en Lisboa, creando un paisaje urbano más vertical y denso. Los portuenses tienen fama de ser más directos y menos diplomáticos que los lisboetas, aunque eso depende del barrio y del contexto.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/monumentos-de-lisboa · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: El mayor palacio de Lisboa es también uno de sus secretos mejor guardados. Construido para la familia real a partir de 1795, nunca llegó a completarse (la corte huyó a Brasil antes de que terminara la obra), lo que le da un curioso estatus de palacio inacabado. El interior, sin embargo, está entre los más ricos de Europa: salones de azulejos del siglo XIX, muebles de época, colecciones de pintura y porcelana. La visita es mucho menos masificada que los Jerónimos o el Castillo.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/monumentos-de-lisboa · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: Este ascensor de hierro forjado, con una estructura de 45 metros de altura, fue diseñado por Raoul Mesnier du Ponsard y conecta la Baixa con el Largo do Carmo, en el Chiado. Construido en 1902, es una pieza de ingeniería y arquitectura que parece sacada de un libro de Jules Verne. La terraza superior ofrece vistas de 360 grados sobre los tejados de la Baixa, la colina del Castillo y el Tajo.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/monumentos-de-lisboa · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: El mayor palacio de Lisboa es también uno de sus secretos mejor guardados. Construido para la familia real a partir de 1795, nunca llegó a completarse (la corte huyó a Brasil antes de que terminara la obra), lo que le da un curioso estatus de palacio inacabado. El interior, sin embargo, está entre los más ricos de Europa: salones de azulejos del siglo XIX, muebles de época, colecciones de pintura y porcelana. La visita es mucho menos masificada que los Jerónimos o el Castillo.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/semana-santa-lisboa · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: La Semana Santa es una fiesta móvil: cae entre finales de marzo y finales de abril según el año. En 2027 va del 21 al 28 de marzo, una de las más tempranas de las últimas décadas. Sea cual sea la fecha, siempre coincide con el inicio de la primavera lisboeta, cuando los jardines empiezan a florecer y la temperatura se vuelve perfecta para caminar. Combinar los actos religiosos con la exploración de la ciudad en este momento del año es uno de los planes más gratificantes que puedes hacer en Lisboa.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/semana-santa-lisboa · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: Las procesiones de Semana Santa en Lisboa son más recogidas que las del sur de España, pero tienen una solemnidad particular. Las más importantes salen de Alfama, el barrio más antiguo y más religioso de la ciudad. La Procissão do Senhor dos Passos da Graça, organizada por la Iglesia de Nossa Senhora da Graça, es una de las tradiciones más antiguas de Lisboa: recorre las calles de Alfama el Domingo de Ramos con imágenes barrocas llevadas en andas.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/semana-santa-lisboa · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: La Semana Santa en Lisboa es una experiencia diferente a la de otras capitales europeas. No tiene la espectacularidad visual de Sevilla ni la masividad de Roma, pero tiene algo que esas ciudades han perdido en parte: una espiritualidad auténtica y de barrio que no está pensada para los turistas sino para los propios vecinos.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/alfama-historia-guia · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: No uses Google Maps en Alfama para rutas a pie. Marca los puntos que quieres ver y camina libremente entre ellos. Las mejores calles de Alfama no están en ningún mapa porque son demasiado estrechas para aparecer como rutas.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/alfama-historia-guia · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: Para escuchar fado auténtico en Alfama: busca los locales pequeños, con pocas mesas, donde se pide silencio cuando empieza la música. El fado no es background: es lo que importa. En los mejores sitios, el fadista canta con los ojos cerrados y el público no aplaude hasta que termina la última nota, no antes.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/alfama-historia-guia · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: La noche cambia Alfama. Las callejuelas que de día estaban llenas de turistas con selfie-stick se vacían y quedan solo los que van a algo concreto: a cenar a una tasca pequeña o a escuchar fado. Las casas de fado en Alfama van desde las más conocidas —que cobran 25-30€ de consumo mínimo y tienen actuaciones programadas para grupos— hasta tabernas de barrio donde el fado surge de manera más espontánea entre la gente que se conoce.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/gastronomia-portuguesa-guia · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: Vine a Lisboa sin conocer nada de su gastronomía y en tres años se ha convertido en una de las razones por las que no me quiero ir. Esta guía es el mapa que me habría gustado tener al principio.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/gastronomia-portuguesa-guia · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: Los ovos moles de Aveiro (cápsulas de oblea rellenas de crema de yema) son el souvenir gastronómico más deseado del país. Los travesseiros de Sintra, los queijadas de Sintra, los pastéis de Tentúgal... cada región tiene su especialidad conventual. En Lisboa, la pastelería A Brasileira en el Chiado es histórica aunque turística; para pastelería de verdad, busca cualquier pastelería de barrio.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/gastronomia-portuguesa-guia · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: La cocina portuguesa tiene un problema de imagen. En un continente donde Francia, Italia y España acaparan toda la atención gastronómica, Portugal lleva siglos cocinando en silencio platos que llevan 500 años perfeccionándose. El bacalhau que los pescadores portugueses salaban en los barcos camino de Terranova, la pastelería conventual que las monjas desarrollaron durante siglos con yema de huevo y azúcar, el vino verde que se bebe frío y espumoso en verano...
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/fado-historia-origen · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: Para escuchar fado con presupuesto ajustado: busca las tasas de Mouraria los jueves por la noche (hay fado en vivo en algunos bares sin consumo mínimo), o el Museu do Fado, que organiza sesiones gratuitas algunos meses. Los grandes casas de fado de Alfama son estupendas pero cuestan entre 20-35€ de consumo mínimo.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/fado-historia-origen · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: La primera vez que escuché fado de verdad fue en una tasca pequeña de Alfama, en una mesa junto a la pared, con un vaso de vino tinto que nadie me había pedido permiso para traer. La fadista tenía unos sesenta años, llevaba un chal negro sobre los hombros, y cuando empezó a cantar el local entero se quedó sin hablar. No porque fuera una obligación —era una costumbre. El fado pide silencio no por protocolo sino porque es demasiado para compartirlo con ruido.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/fado-historia-origen · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Las influencias que se mezclan en el fado son difusas y debatidas: la modinha brasileña (canción romántica popular), el lundum africano (traído por los esclavos a través de Brasil), la música árabe que quedó en la memoria de los barrios que fueron moros, el canto gregoriano de las iglesias. Nadie sabe exactamente la proporción, y probablemente importa menos que el resultado.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/belem-barrio-guia · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: Construido entre 1501 y 1572 en estilo manuelino —el Renacimiento portugués con decoración de cuerdas, cruces de Cristo y motivos marinos— los Jerónimos son probablemente el edificio más bello de Portugal. La nave de la iglesia tiene columnas tan esbeltas y tan decoradas que el ojo no sabe por dónde empezar. Los claustros, arriba, tienen una armonía de proporciones que hace que la gente se siente en el suelo y no quiera levantarse.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/belem-barrio-guia · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: No hay discusión posible sobre si vale la pena la cola (que a veces llega a los 40 minutos): vale. Come el pastel caliente, recién salido del horno, espolvoreado con canela y azúcar glass. Es objetivamente diferente a cualquier otro pastel de nata de la ciudad, aunque los defensores de la Manteigaria en Chiado lo discuten apasionadamente.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/belem-barrio-guia · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Hoy Belém es un barrio tranquilo integrado en la ciudad, accesible en tranvía o en bicicleta desde el centro, con los monumentos más visitados de Portugal y también con algunos de los mejores museos del país. Merece al menos medio día, mejor uno completo.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/chiado-bairro-alto-guia · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: El Bairro Alto tiene también las mejores casas de fado de Lisboa fuera de Alfama, y algunos de los mejores restaurantes de la ciudad. La Rua do Norte y la Rua da Barroca concentran la mayor densidad de opciones buenas. Cena antes de las 21:30 para conseguir mesa sin reserva.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/chiado-bairro-alto-guia · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: El Chiado y el Bairro Alto son vecinos físicamente —los separa apenas una calle— pero tienen personalidades tan distintas que da la impresión de que se toleran más que se quieren. El Chiado es el barrio de los cafés con historia, las librerías antiguas, los teatros, los museos. El Bairro Alto es el barrio de los bares que abren a las diez de la noche, las escaleras llenas de gente bebiendo en la calle y la resaca del domingo. Los dos juntos definen gran parte de la identidad cultural de Lisboa.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/chiado-bairro-alto-guia · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: El Chiado y el Bairro Alto son vecinos físicamente —los separa apenas una calle— pero tienen personalidades tan distintas que da la impresión de que se toleran más que se quieren. El Chiado es el barrio de los cafés con historia, las librerías antiguas, los teatros, los museos. El Bairro Alto es el barrio de los bares que abren a las diez de la noche, las escaleras llenas de gente bebiendo en la calle y la resaca del domingo. Los dos juntos definen gran parte de la identidad cultural de Lisboa.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mouraria-barrio-guia · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: El mercado de la zona — el Mercado de Arroios, a diez minutos a pie— tiene una sección de puestos de comida preparada donde almorzar por 6-7€ entre trabajadores locales. El restaurante del mercado sirve el mejor menú de precio fijo del centro de Lisboa según muchos locales que conozco.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mouraria-barrio-guia · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: Mouraria Hoy: El Barrio Más Auténtico
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/mouraria-barrio-guia · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: El Intendente, la gran plaza que hace de centro de gravedad del barrio, tiene en sus alrededores algunos de los mejores restaurantes económicos de Lisboa. O Corvo es una taberna pequeña donde siempre hay lista de espera al mediodía. Las ruas da Mouraria que bajan hacia la Baixa tienen tascas que han servido el mismo menú del día durante décadas a los trabajadores del barrio.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/vinos-portugueses-guia · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: El Vinho Verde es el vino más refrescante del mundo para días de calor. Viene del Minho, el noroeste verde y lluvioso de Portugal, y su nombre no describe el color (hay blancos, rosados y tintos) sino la juventud: se cosecha joven, se embotella joven, y se bebe joven con su frescura intacta. Tiene una ligera efervescencia natural, baja graduación alcohólica (entre 8% y 11%), y una acidez que lo hace perfecto con mariscos, pescado fresco y el calor de Lisboa en julio.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/vinos-portugueses-guia · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: Portugal tiene más variedades de uva autóctonas que cualquier otro país del mundo de tamaño comparable. La touriga nacional, la aragonez, la trincadeira, la alvarinho, la loureiro... nombres que no suenan en las cartas de vino de otros países pero que producen vinos de una personalidad que deja a mucha gente sorprendida. El problema es que Portugal lleva siglos siendo discreto sobre sus vinos, y el mundo tardó en prestar atención.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/vinos-portugueses-guia · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: El Alentejo es la región vinícola que más ha crecido en reputación en las últimas dos décadas. Sus tintos, hechos con uvas como la aragonez (la tempranillo portuguesa), la trincadeira y la alicante bouschet, tienen cuerpo, color intenso y aromas de fruta madura y especias que los hacen perfectos para las carnes y los guisos de la cocina portuguesa. Son los tintos que más se beben en los restaurantes de Lisboa.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/tram-28-historia-guia · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: El tranvía 28 es el símbolo más reconocible de Lisboa. Sus vagones amarillos de madera, diseñados en los años veinte del siglo XX, han recorrido las mismas cuestas imposibles de Alfama durante más de cien años. Es también, hay que decirlo sin rodeos, la mayor trampa turística de Lisboa: colas de una hora, carteristas profesionales, vagones tan llenos en verano que es difícil respirar, y finalmente un trayecto que puedes hacer caminando en veinte minutos.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/tram-28-historia-guia · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: El 28 sale de la Praça Martim Moniz (límite del barrio de Mouraria con la Baixa), sube por Alfama con sus curvas cerradas y sus pendientes de infarto, pasa por la Sé Catedral y los miradores de Santa Luzia y Portas do Sol, atraviesa el Chiado, pasa por el Largo do Chiado y la Calçada do Combro, y termina en Campo de Ourique, un barrio residencial tranquilo. El trayecto completo dura unos 30 minutos si no hay incidencias.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/tram-28-historia-guia · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: El 28 es uno de los pocos tranvías históricos del mundo que sigue siendo un medio de transporte público funcional, no una atracción turística. Los lisboetas lo usan, aunque cada vez menos: las colas de turistas y los retrasos habituales han hecho que muchos vecinos prefieran el autobús o el metro.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/bacalhau-plato-portugal · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: Hoy Portugal importa más del 80% del bacalao que consume de Noruega e Islandia. Y sin embargo el bacalhau sigue siendo el ingrediente más consumido del país, el plato más cargado de significado cultural, y el objeto de un orgullo culinario que a veces raya el chauvinismo. 'Temos 365 receitas de bacalhau, uma por cada dia do ano' es una frase que escuchas en cualquier conversación sobre gastronomía portuguesa.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/bacalhau-plato-portugal · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: Hay una paradoja en el corazón de la cocina portuguesa: el plato nacional de un país con 850 kilómetros de costa atlántica es un pescado que viene de Noruega y Terranova. El bacalhau —bacalao salado y secado— no es un pescado fresco del Atlántico ibérico. Es el resultado de cinco siglos de historia marítima que empezó cuando los pescadores portugueses cruzaron el Atlántico en el siglo XV para pescar en los bancos de Terranova y Labrador, y resolvieron el problema de la conservación salando el pescado directamente en el barco.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/bacalhau-plato-portugal · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Hay una paradoja en el corazón de la cocina portuguesa: el plato nacional de un país con 850 kilómetros de costa atlántica es un pescado que viene de Noruega y Terranova. El bacalhau —bacalao salado y secado— no es un pescado fresco del Atlántico ibérico. Es el resultado de cinco siglos de historia marítima que empezó cuando los pescadores portugueses cruzaron el Atlántico en el siglo XV para pescar en los bancos de Terranova y Labrador, y resolvieron el problema de la conservación salando el pescado directamente en el barco.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/arquitectura-manuelina-lisboa · FAQ 1

- Intencion: ¿Cuántos días son ideales para Lisboa?
- Respuesta retirada: Entre 2 y 4 días para ver lo esencial sin prisas.
- Evidencia actual: Los Elementos Manuelinos: Lo que Ver Hay que Saber Leer
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/arquitectura-manuelina-lisboa · FAQ 2

- Intencion: ¿Cuál es el mejor barrio para alojarse?
- Respuesta retirada: Baixa-Chiado es práctico; Alfama es más auténtico.
- Evidencia actual: En Lisboa también hay elementos manuelinos en la Sé Catedral (el claustro tiene añadidos del período), en la Iglesia de la Conceição Velha en la Baixa (la portada lateral sobrevivió al terremoto de 1755), y en varios edificios del convento de São Francisco en el Chiado.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

### /blog/arquitectura-manuelina-lisboa · FAQ 3

- Intencion: ¿Qué época es mejor para viajar?
- Respuesta retirada: Primavera y otoño tienen buen clima y menos turistas.
- Evidencia actual: Hay un momento en el claustro del Mosteiro dos Jerónimos en que el ojo no sabe dónde posarse. Las columnas están cubiertas de esculturas tan detalladas que cada metro cuadrado de piedra cuenta algo diferente: cuerdas trenzadas que recuerdan los aparejos de los barcos, esferas armilares que representan los instrumentos de navegación, cruces de la Orden de Cristo que identifican la misión religiosa de los descubrimientos, corales y algas marinas como si la piedra hubiera crecido en el fondo del océano. Eso es el estilo manuelino.
- Clase: **D**. Fallback generico compartido: no resuelve una duda propia de este articulo.
- Confianza: media-alta: sintesis repetida o fallback

## Decision previa a cambios

{"A":0,"B":2,"C":15,"D":137}. No restaurar FAQs masivamente. B: alojamiento como partida principal al planificar presupuesto; tour opcional para quien prioriza organizacion en excursiones. Mantener C pendiente. No introducir FAQPage vacio ni fechas artificiales.

## Riesgos factuales existentes fuera de restauracion

Aeropuerto contiene tarifas antiguas y Aerobus; presupuesto conserva cifras historicas; Sintra contiene frecuencias/precios y promesas de acceso; fado y restaurantes tienen condiciones comerciales no verificadas. No corregidos en esta fase. HIGH si se presentan como informacion actual verificada: requieren una revision con operadores/fuentes oficiales.
