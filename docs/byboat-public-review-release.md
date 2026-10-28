# ByBoat: enlace público para revisión del equipo

28 de octubre de 2026. José solicita: «Súbelo despliega para mandarle el correo para que lo vean y den su feedback si les gusta o que mejorarían». Autoriza desplegar el reportaje corregido que acaba de revisar. Home y nueva navegación siguen pendientes.

## Alcance y decisión

Se publica únicamente PR121, rama `preview/byboat-final-polish`, head `1d20a2648aeece094e07c4af24a8035d21f0e41d`. Fusión normal confirmada `006f69808debd86be94a3d6eedb1efcd63ef2b0d`, tras los seis controles correctos, sin conflictos, reviews de cambios solicitados ni hilos pendientes. El watcher confirma que se fusionó el head previsto. El commit de documentación posterior a la aplicación `ae79d0f` no cambió código.

URL estable: https://estabaenlisboa.com/blog/paseo-en-velero-lisboa-lisbon-byboat

Se conserva el estado de revisión visible y noindex/follow mientras el operador revisa el contenido; fuera del sitemap, con canonical propio y enlaces patrocinados. Este despliegue hace accesible la página, no activa una campaña SEO ni supone aprobación del operador, pago recibido o reserva. No se modifica la Home ni el header. PR120 no debe fusionarse para publicar este reportaje: contiene la propuesta de navegación/Home no aprobada y una versión anterior de ByBoat.

La primera petición de despliegue solo preparaba un texto para José, sin enviarlo. Después de revisar el mensaje portugués completo, José autoriza expresamente enviarlo desde su cuenta; el resultado se registra a continuación.

## Envío de la respuesta aprobada

28/10/2026,14:32:59UTC: enviado desde estabaenlisboa@gmail.com a Pedro en el mismo hilo de la conversación, con el asunto existente. Gmail devuelve mensaje `1a182edb95f0a4b3`, hilo `1a17c70d994ebe83`, etiqueta SENT; una lectura posterior confirma remitente, destinatario, asunto, enlace del artículo y las preguntas aprobadas sobre solicitar español/francés al atardecer. No se adjuntan archivos ni se añaden destinatarios. No duplicar el envío.

Se envía el texto mostrado y aprobado por José, en portugués, pidiendo feedback y validación de las informaciones de los paseos. El texto sugerido más abajo conserva el historial de preparación y no constituye un nuevo mensaje pendiente de envío. El bot lisboa-revenue-bot se inspeccionó previamente: prepara borradores/aprobaciones y lee Gmail; este envío se hace mediante el conector Gmail con autorización humana. No se implementan o activan envíos automáticos. Envío confirmado no significa entrega, lectura, aceptación, pago o reserva.

## Despliegue y comprobaciones

Vercel: `dpl_8H77vxVaLbYoSo4Uaq485CLokPX4`, proyecto principal `prj_oIbYIcpY2pf4SuS9GelrYEYBAtyP`, target production, SHA `006f698`, estado READY y alias estabaenlisboa.com/www asignados. Página pública HTTP200, sin necesidad de sesión, clave ni enlace temporal de Vercel.

QA en el dominio público: conservación 39/39 y migración SEO 1530/1530 correctos; 106 URLs de sitemap, 115 páginas y 16 redirects. Canonical propio, noindex/follow y exclusión del sitemap conservados; schema parseable, un H1, índice/anclas, mapa, tres enlaces patrocinados y destinos correctos. No compras ni clics en proveedores.

Revisión visual remota ahora completada en navegador sobre producción a 320/390/412/768/1440px: sin overflow, títulos y segunda línea en redonda, cero flechas Unicode en enlaces, precios de 26px en la fuente de lectura y botones de al menos 48px. Captura pública y matriz en [evidencia](qa/2026-10-28/byboat-public-review/). La incidencia anterior de cuota corresponde a la revisión de la Preview histórica; este despliegue sí se ha visto en el dominio público.

Navbar, Home y CSS global comparados contra producción anterior `96162fe`: sin diferencias de código. No nuevos slugs, migraciones, cambios de intención o activación de indexación. El registro de publicación es documentación; no cambia el código desplegado. Comentarios/aprobación del operador, pago y reservas continúan desconocidos.

## Texto sugerido para José

Verificación del 28/10: la página pública declara idioma español, sin alternates ni versión inglesa registrada. La web sí tiene seis rutas del piloto inglés, pero ninguna corresponde a ByBoat. El hilo de correo del 27/10 está en portugués: Pedro responde en portugués y acepta avanzar tras una propuesta que especifica un artículo original en español. El correo de revisión debe redactarse en portugués; el idioma de comunicación con el operador no cambia el idioma contratado del artículo. No se guarda el correo completo ni sus adjuntos en el repositorio.

Olá, Pedro,

Já está disponível a versão do artigo sobre a Lisbon ByBoat para a vossa revisão:

https://estabaenlisboa.com/blog/paseo-en-velero-lisboa-lisbon-byboat

Gostaria de saber a vossa opinião sobre o conteúdo e a apresentação, e se há algo que gostariam de alterar. Agradeço também que confirmem as fotografias, os preços, o que está incluído em cada passeio, o ponto de encontro e os links de reserva. Podem confirmar os idiomas disponíveis em cada passeio e se é necessário solicitar espanhol ao reservar? Na ficha do passeio ao pôr do sol, a descrição menciona francês, mas esse idioma não aparece no campo «Live tour guide».

Com os vossos comentários, poderei finalizar a versão do artigo.

Muito obrigado,
José

## Idiomas a bordo — verificación específica del 28/10

Son tres cuestiones distintas: artículo en español, correspondencia con Pedro en portugués e idiomas de las explicaciones a bordo. Pedro confirma expresamente explicaciones en español en su correo del 27/10; no se dedujo del idioma del artículo o de la comunicación comercial.

Se abrieron en navegador las dos reservas oficiales enlazadas por el operador, sin seleccionar fecha ni avanzar a checkout. [Paseo diurno, producto1163355](https://widgets.bokun.io/online-sales/2e607b56-835c-47ed-8b97-91056bb16516/experience/1163355): el campo «Live tour guide» enumera inglés, francés, portugués y español. [Atardecer, producto1163354](https://widgets.bokun.io/online-sales/2e607b56-835c-47ed-8b97-91056bb16516/experience/1163354): ese campo enumera portugués, inglés y español, aunque la descripción de inclusiones también menciona francés. Ambas fichas indican guía multilingüe.

Conclusión: español confirmado en ambos, junto a inglés y portugués; francés confirmado en diurno y pendiente de aclarar para atardecer. La ficha no permite prometer exclusividad de idioma ni que los cuatro se utilicen simultáneamente en cualquier salida. No se ha comprobado disponibilidad de idioma para una fecha concreta. Las páginas antiguas de Experiences también listan cuatro idiomas, pero muestran precios antiguos: se prioriza el producto actual de reserva y la confirmación directa de Pedro.

Redacción verificada: «Guía multilingüe, con explicaciones en español disponibles. Confirma el idioma al reservar». No afirmar «tour exclusivamente en español». [Extractos de las reservas](qa/2026-10-28/byboat-public-review/official-booking-languages.json).

José solicita después aplicar la corrección a todas las menciones de idiomas. PR122 se amplía desde el registro documental a ese cambio factual acotado: introducción, explicación de la experiencia, bloque de idiomas y las dos celdas que alimentan las tarjetas. Se enumera ES/EN/PT en ambos y FR en diurno; el francés en atardecer se consulta con la empresa, sin prometerlo. Mismos precios, fotos, enlaces, diseño, fechas originales y política SEO. Home/header siguen fuera. No correo enviado.

Corrección publicada: PR122/head `352efc7a3223fdfd62fa6687e1dc58cfeca4bc6c`, merge normal `6beb734e564c5250e1930524eecd0b55d206113f`, Vercel production `dpl_2ZbUxMT7TygJPBa4jsGjBCEmqYaG` READY y alias públicos asignados. Watcher confirma exactitud del head fusionado. Cinco controles CI presentes pasan, sin conflictos o hilos pendientes; build144, TypeScript y ESLint correctos. QA SEO local y de producción1530/1530:106URLs de sitemap,115páginas y16redirects, sin fallos.

Preview `qk98liq4o` y producción verificadas en navegador a320/390/1440px, sin overflow. Se leen las correcciones en intro, cuerpo, bloque de idiomas y las dos tarjetas, sin las tres fórmulas antiguas ambiguas. Un H1, canonical propio/noindex follow y los tres destinos patrocinados conservados; precios45/60. [Captura pública, DOM y anchos](qa/2026-10-28/byboat-languages/). Este registro posterior no cambia aplicación.
