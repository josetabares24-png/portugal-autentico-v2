# Planifica: contacto personal con José

Fecha: 22 octubre 2026. Decisión D-065. Candidato en PR #113, sin publicación.

## Diagnóstico y criterio

**Preferencia explícita:** José quiere que Planifica permita contactarle para que él prepare el viaje personalmente. **Hecho:** la página anterior ya ofrecía un plan, pero situaba el formulario a y≈1.419 px en escritorio de 1.440 px, mezclaba nueve campos, tarjetas, recursos gratuitos y promesas repetidas de 24–48 h. Baseline: código 5b83dbc, Preview `dpl_By26Cn7YTbCkBNcAEii5GQ87A328`.

**Decisión:** conservar `/planifica-tu-viaje` y hacer del contacto el objetivo principal. Nombre, email y mensaje obligatorios; fechas y personas opcionales. José recibe la solicitud y responde por email; alcance y precio se acuerdan antes de preparar el plan. Email público existente `estabaenlisboa@gmail.com` como alternativa directa. Recursos propios en enlaces secundarios, sin tarjetas ni automatizar itinerarios. No se inventa teléfono, WhatsApp, tarifa ni plazo de respuesta. El encabezado Planifica y el ancla `#solicitar-plan` permanecen.

**Hipótesis:** una petición más breve y visible facilitará las conversaciones útiles. No hay prueba de incremento de conversiones. Se conservan `personal_plan_view/start/submit`; el submit se registra después de respuesta exitosa del servidor, sin nombres/emails/mensajes. Al retirar campos visibles, días/ritmo/presupuesto dejan de recogerse en el cliente; las series de esas dimensiones no son comparables. Mailto no equivale a mensaje enviado y no se contabiliza como submit.

## Corrección del envío

El endpoint anterior devolvía éxito si llegaba la confirmación al visitante aunque fallara el aviso al propietario; además, podía devolver error después de notificar al propietario si fallaba una confirmación SMTP. Ahora el éxito requiere aceptación del aviso a José por Brevo o por el respaldo SMTP. Solo después se intenta confirmar al visitante. Fallar la confirmación no repite el lead ni transforma su envío aceptado en error. Fallar ambos transportes devuelve 503, conserva el formulario y ofrece correo directo.

La respuesta de un proveedor acredita aceptación, no lectura ni entrega garantizada a la bandeja de entrada. No se añade almacenamiento ni suscripción: L-007 conservada. Se escapa HTML de entrada y se validan tipos/longitudes; clientes antiguos con días/personas numéricos siguen siendo compatibles. Se conserva rate limit existente; no se certifica protección antispam completa.

Se usan mensajes transaccionales del repositorio para esta ruta. Deja de emplear `BREVO_CONSERJERIA_TEMPLATE_ID` y `BREVO_CONSERJERIA_CONFIRMATION_TEMPLATE_ID`: las plantillas externas podían mantener promesas de entrega incompatibles. No se borran plantillas ni variables externas. Se mantiene el remitente Brevo configurado; Reply-To de confirmación apunta a José y el aviso permite responder al visitante. SMTP conserva credenciales existentes y usa TLS implícito en 465 / STARTTLS del transporte en otros puertos.

## Alcance SEO y archivos

- Misma URL, canonical y H1; `noindex,follow` conservado, fuera de sitemap.
- Metadata descriptiva alineada con contacto personal. Ninguna redirección nueva.
- Sin cambios en robots, sitemap, schema, artículos protegidos, Free tours, Entradas o página general de Contacto.
- `src/app/[locale]/planifica-tu-viaje/{page.tsx,layout.tsx}`: contacto y metadatos.
- `src/app/api/planifica-tu-viaje/route.ts`, `src/lib/planning-request.ts`, `src/lib/planning-contact.ts`: transporte, validación, mensajes y correo público compartido.
- `scripts/test-planning-request.mjs`, `package.json`: pruebas sin red/correo real, incluidas respuestas de la ruta con Brevo interceptado.
- `scripts/smoke-calculadora.mjs`: etiquetas de los tres recursos secundarios actualizadas por D-065; siguen presentes y sigue prohibida la antigua calculadora duplicada.

## Validación y límites

Ocho pruebas de parsing, escape, orden de envíos, confirmación fallida, ambos proveedores fallidos, respaldo y API real con HTTP interceptado. Nunca se envía un correo real de QA. La validación de aceptación real/bandeja del proveedor no se deduce de estas pruebas; se deberá comprobar con una solicitud autorizada o con una consulta real tras publicar.

Validación local: build 137 páginas, TypeScript correcto, lint sin errores/un warning previo en `ItineraryContextualCta.tsx:84`, ocho pruebas de planificación y cinco de compatibilidad mailer correctas. Navegación 171/171; calidad técnica 1.130/1.130 en 113 páginas; calculadora/recursos 92/92. Este último smoke tenía un contrato obsoleto: esperaba 200 de `/pack-completo`, retirado antes de este cambio; ahora exige su 308 directo a `/blog` y 200 final, sin modificar configuración ni producto.

Ocho vistas DOM 320/360/390/430/768/1024/1280/1440 sin overflow, cinco campos etiquetados, canonical/noindex y un H1 conservados. A 1.440 px, inicio del formulario y≈464 frente a≈1.419 previo. Teclado nombre→email y bloqueo nativo de campos vacíos/email inválido comprobados sin envíos. No certificación de accesibilidad completa. Capturas e informes en `docs/qa/2026-10-22/planifica-personal/`.

Preview y QA remota: pendientes de cierre.

## Siguiente paso

Revisar visualmente esta página junto con el resto de PR #113 y acordar condiciones del servicio antes de anunciarlas. No hacer merge ni publicar con una continuación genérica. No ampliar el rollout ni ejecutar consolidaciones WAIT por este ajuste.
