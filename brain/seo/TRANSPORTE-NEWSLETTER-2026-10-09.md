# Transporte en Lisboa + newsletter en artículos — 2026-10-09

Acciones 7 (en parte) y 8 de la auditoría máxima. Rama `feat/transporte-newsletter`, sin publicar: espera la aprobación de José.

## 1. `/transporte-lisboa`

**Qué es.** Una página de referencia de precios con un directorio que lleva a las guías de transporte que ya existían. No sustituye a ninguna:

- arriba van las respuestas rápidas (qué billete, cómo salir del aeropuerto, el billete de 24 h, el tren a Sintra o Cascais);
- después, una tabla de 13 filas con las tarifas oficiales comprobadas el 9/10/2026 en Carris, Metro, CP y Lisboa Card;
- después, una sección por tema, cada una con enlaces a las guías y a las fichas de `/actividades`;
- al final, la cuenta de la Lisboa Card con un solo bloque de reserva (Tiqets).

**Cómo está hecha.** Reutiliza `TravelPillarPage`, que ahora acepta `table` y `links` por sección. Lleva el schema Article y BreadcrumbList del componente, sin FAQPage. Los datos están en `src/data/transport-guide.ts`.

**Enlaces.**
- La página entra en el sitemap y en el pie (nueva columna «Planificar»).
- Reciben un enlace de vuelta (en `links`) las guías aeropuerto, metro, Navegante, tram 28, cómo moverse, Oriente, Olaias, patinetes, Sintra, Cascais y Lisboa Card.
- No se toca la cabecera.

**Riesgos que José tiene que valorar:**
- **E-001.** `/blog/como-moverse-por-lisboa` está en OBSERVE, y `/transporte` y `/guia/movilidad` redirigen ahí con un 308. La nueva URL puede competir por «transporte Lisboa». Para separarlas, la página nueva va a precios y directorio, y «cómo moverse» se queda con el qué usar según la situación. Hay que vigilar en GSC si se reparten impresiones. Si pasa, se elige una canónica.
- **D-031.** Dice que Movilidad no lleva widgets de reserva. Aquí hay un bloque de la Lisboa Card, solo en la sección que hace la cuenta. Si José prefiere seguir la regla al pie de la letra, basta con quitar `afterSection` en `src/app/[locale]/transporte-lisboa/page.tsx`.
- **E-001, E-004 (Oriente) y E-011.** Esos artículos reciben un enlace más en «También te puede servir» y el formulario de newsletter. Hay que anotarlo como posible factor de confusión al leer sus resultados.

## 2. Páginas huérfanas

- `/blog/semana-santa-lisboa` recibe enlaces desde `mejor-epoca-visitar-lisboa` (marzo-abril) y `festivales-eventos-lisboa-2026` (enero-marzo).
- `/terminos-condiciones` entra en el pie, junto a Privacidad, Cookies y Aviso legal.

## 3. Newsletter dentro de los artículos

**El formulario.** `ArticleNewsletter` aparece dos veces:
- una antes del primer subtítulo que esté a partir del 60 % del texto y que no lleve un bloque de reserva delante (si no hay ninguno, va al final del cuerpo);
- otra encima del CTA final del artículo.

Tiene el email y una casilla obligatoria de consentimiento, que nombra a Brevo, la baja y la política de privacidad. Usa el mismo `/api/subscribe`, la misma lista (5) y el mismo `FUENTE: 'blog'`.

**El regalo.** Es `public/que-reservar-antes-de-ir-a-lisboa.pdf`, de 2 páginas A4, y su fuente está en `docs/lead-magnet/`. El enlace sale en el mensaje de éxito.

**El email de bienvenida.** Sale de la plantilla de Brevo `BREVO_SUBSCRIPTION_TEMPLATE_ID`, que no se puede editar desde el repo:
- la API ya envía `params.lead_magnet_title` y `params.lead_magnet_url`;
- falta añadirlos a la plantilla en Brevo para que el email también lleve el PDF;
- el HTML de respaldo ya incluye el enlace.

**Double opt-in.** No hay. El alta se hace directamente con `addBrevoContact`. La casilla deja constancia del consentimiento en el momento del alta. Si José quiere doble confirmación, hay que usar el endpoint DOI de Brevo con una plantilla de confirmación creada en Brevo.

**Sin newsletter.** E-006 (`donde-tomar-cafe-lisboa`) y E-007 (`donde-comer-barato-lisboa`) quedan fuera. La lista está en `src/lib/newsletter.ts`.

**Medición.** El alta envía el evento GA4 `sign_up` con `content_type: 'article_newsletter'`, `content_id: <slug>` y `placement: 'article_inline' | 'article_footer'`. La descarga envía `file_download`.

**Privacidad.** En el punto 2.1 de la política se añade una frase sobre el PDF, y la fecha pasa al 9 de octubre de 2026.

## Cómo medirlo

Hay que esperar a que la página esté publicada y tenga 28 días finalizados. Después se miran:

- las altas por `placement`, y si la del pie aporta algo o sobra;
- las impresiones y clics de `/transporte-lisboa` frente a los de `como-moverse-por-lisboa`;
- `affiliate_click` en los artículos con bloque de reserva, para comprobar que el formulario no le quita clics (E-011).

## Cambios técnicos de apoyo

- `src/proxy.ts` excluye ahora `.pdf` del matcher. Sin ese cambio, next-intl reescribía `/que-reservar-antes-de-ir-a-lisboa.pdf` a `/es/...` y la URL daba 404.
- El pie deja más espacio abajo en móvil (`pb-24`) para que el botón flotante de cookies no tape los enlaces legales.

## Arreglo del 9/10/2026 por la tarde: Brevo rechaza la API key

En producción, Brevo respondía «API Key is not enabled» y cada alta acababa en error, así que el lector no recibía el PDF. Desde este arreglo:

- `/api/subscribe` responde `success: true, stored: false` cuando Brevo no guarda el contacto.
- En ese caso envía a estabaenlisboa@gmail.com el email del lector, el artículo, el formulario, si marcó la casilla, la hora del consentimiento (UTC) y el texto aceptado. Usa la misma cadena que `/api/contact`, primero Brevo y luego SMTP, ahora en `src/lib/admin-notify.ts`.
- Si tampoco sale ese email, los datos del alta quedan en el log de Vercel, con la etiqueta «ALTA NO GUARDADA NI ENVIADA».
- El formulario abre el PDF solo con un enlace `download` del mismo origen y además muestra el botón «Descargar la lista (PDF)».

**Pendiente de José:** reactivar o regenerar la API key en Brevo y añadir a mano a la lista 5 las altas que lleguen por email.
