# ByBoat: corrección tipográfica y botones

28 de octubre de 2026. José aporta una captura de iPhone y pide coherencia con los artículos del blog: quitar cursivas, iconos de acción y números decorativos. La selección de Home y la nueva navegación no están aprobadas.

## Baseline y alcance

Base `cc61ffe`, con aplicación ByBoat `09936f0` ya verificada en la Preview `ayhzhtemq`. La rama `preview/byboat-final-polish` parte de esa base y excluye los commits de Home/header del PR120. No modifica la cabecera, portada, estilos globales u otros artículos.

Hecho: el H1 del blog editorial v2 se define en redonda y negrita. ByBoat declaraba cursiva en la segunda línea del H1 y heredaba cursiva global en H2. Sus botones incluían el carácter Unicode ↗, que en la captura iPhone aparece como emoji. El precio utilizaba Playfair Display a 34px, con cifras de aspecto decorativo. Preferencia explícita: tipografía sobria y botones solo con texto. No se infiere un cambio de importe.

## Cambios

- H1 completo, H2 y títulos de los paseos en redonda. Se mantienen las fuentes existentes y la composición fotográfica.
- Se retiran las flechas Unicode de reservas, mapa y enlace final; se conserva la indicación accesible de nueva pestaña y el marcado de patrocinio.
- Precios con la fuente de lectura existente, cifras alineadas, tamaño de 26px y peso 600; unidad y «por persona» comparten línea base. Importes 45 y 60 euros intactos.
- Los dos botones mantienen 48px de altura mínima, contraste de marca y estado de foco; texto centrado sin iconos.

El contenido factual, fotos, precios, destinos Bokun/mapa/operador, canonical, schema, URL, noindex/follow y exclusión de sitemap permanecen. No se hacen compras, reservas ni envíos de correo.

## Revisión

Aplicación `ae79d0fcc6b0c3e39b222ef343093835687a0a79`, PR121 borrador. Vercel `dpl_97axvQiPhPuFBoqKkmhuRtwtuPBv` READY, host `portugal-autentico-v2-njaxvlns1-estabaenlisboa.vercel.app`; enlace temporal entregado fuera de Git. Seis CI de la aplicación correctos. Build de 144 rutas, TypeScript y ESLint del componente pasan.

Conservación local y remota: 39/39 comprobaciones; objeto Article, diez párrafos/notas, constantes de fotos/destinos, precios, patrocinios, canonical/noindex, mapa, índice/anclas y schema correctos. SEO local 1530/1530; remoto 1424/1424, 106 URLs de sitemap, 115 páginas y 16 redirects, sin fallos. La diferencia de recuento local/remoto corresponde al entorno del script, no a controles omitidos.

Revisión visual sobre la misma compilación local a 320, 390, 412, 768 y 1440px: sin overflow, H1/H2/H3 y segunda línea del H1 en redonda; precios Plus Jakarta Sans de 26px y `lining-nums proportional-nums`; dos botones de al menos 48px, texto centrado, cero flechas Unicode en los enlaces del reportaje. Capturas y estilos computados en [evidencia](qa/2026-10-28/byboat-final-polish/). No se incorporan fuentes, dependencias o código cliente nuevos.

Límite: la revisión automática bloqueó abrir el nuevo origen Vercel en el navegador por cuota de uso. Se mantuvo ese bloqueo; la certificación visual es local, mientras que los controles HTTP remotos iniciados previamente sí finalizaron. No se afirma una comprobación visual remota ni en un iPhone físico.

No producción. La aprobación de este reportaje no aprobaría el lote Home/header que continúa en PR120; antes de publicar se debe preparar el estado editorial/indexación y verificar el alcance exacto.
