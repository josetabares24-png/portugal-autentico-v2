# ByBoat: enlace público para revisión del equipo

28 de octubre de 2026. José solicita: «Súbelo despliega para mandarle el correo para que lo vean y den su feedback si les gusta o que mejorarían». Autoriza desplegar el reportaje corregido que acaba de revisar. Home y nueva navegación siguen pendientes.

## Alcance y decisión

Se publica únicamente PR121, rama `preview/byboat-final-polish`, head `1d20a2648aeece094e07c4af24a8035d21f0e41d`. Fusión normal confirmada `006f69808debd86be94a3d6eedb1efcd63ef2b0d`, tras los seis controles correctos, sin conflictos, reviews de cambios solicitados ni hilos pendientes. El watcher confirma que se fusionó el head previsto. El commit de documentación posterior a la aplicación `ae79d0f` no cambió código.

URL estable: https://estabaenlisboa.com/blog/paseo-en-velero-lisboa-lisbon-byboat

Se conserva el estado de revisión visible y noindex/follow mientras el operador revisa el contenido; fuera del sitemap, con canonical propio y enlaces patrocinados. Este despliegue hace accesible la página, no activa una campaña SEO ni supone aprobación del operador, pago recibido o reserva. No se modifica la Home ni el header. PR120 no debe fusionarse para publicar este reportaje: contiene la propuesta de navegación/Home no aprobada y una versión anterior de ByBoat.

El propósito expresado es que José pueda enviar el correo. Se prepara un texto para él, sin acceder a Gmail, crear mensajes ni enviarlos al operador.

## Despliegue y comprobaciones

Vercel: `dpl_8H77vxVaLbYoSo4Uaq485CLokPX4`, proyecto principal `prj_oIbYIcpY2pf4SuS9GelrYEYBAtyP`, target production, SHA `006f698`, estado READY y alias estabaenlisboa.com/www asignados. Página pública HTTP200, sin necesidad de sesión, clave ni enlace temporal de Vercel.

QA en el dominio público: conservación 39/39 y migración SEO 1530/1530 correctos; 106 URLs de sitemap, 115 páginas y 16 redirects. Canonical propio, noindex/follow y exclusión del sitemap conservados; schema parseable, un H1, índice/anclas, mapa, tres enlaces patrocinados y destinos correctos. No compras ni clics en proveedores.

Revisión visual remota ahora completada en navegador sobre producción a 320/390/412/768/1440px: sin overflow, títulos y segunda línea en redonda, cero flechas Unicode en enlaces, precios de 26px en la fuente de lectura y botones de al menos 48px. Captura pública y matriz en [evidencia](qa/2026-10-28/byboat-public-review/). La incidencia anterior de cuota corresponde a la revisión de la Preview histórica; este despliegue sí se ha visto en el dominio público.

Navbar, Home y CSS global comparados contra producción anterior `96162fe`: sin diferencias de código. No nuevos slugs, migraciones, cambios de intención o activación de indexación. El registro de publicación es documentación; no cambia el código desplegado. Comentarios/aprobación del operador, pago y reservas continúan desconocidos.

## Texto sugerido para José

Hola, Pedro:

Ya está disponible la versión del artículo sobre Lisbon ByBoat para que podáis revisarla:

https://estabaenlisboa.com/blog/paseo-en-velero-lisboa-lisbon-byboat

Me gustaría saber qué os parece el contenido y la presentación, y si cambiaríais algo. Revisad también las fotos, los precios, lo que incluye cada paseo, el punto de embarque y los enlaces de reserva para confirmar que todo está correcto.

Con vuestros comentarios puedo dejarlo cerrado.

Gracias,
José
