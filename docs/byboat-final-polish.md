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

Pendiente de registrar build, TypeScript/ESLint, conservación del contenido, QA SEO y capturas de la nueva Preview. No producción. La aprobación de este reportaje no aprobaría el lote Home/header que continúa en PR120; antes de publicar se debe preparar el estado editorial/indexación y verificar el alcance exacto.
