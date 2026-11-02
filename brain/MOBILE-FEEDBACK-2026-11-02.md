# Feedback móvil de José — decisión y aprendizaje

**HECHO:** las cinco capturas del iPhone muestran calendario que sale del ancho, créditos largos, explicación de cuatro pasos repetida y pie grande. Blog sin imagen de cabecera: José delega decidir. Base73c3331, misma PR134/borrador.

**DECISIÓN:** mantener blog sin hero fotográfico y reducir cabecera para adelantar el catálogo; inputdate44px sin padding propio, espacio en contenedor; retirar pasos/consejos duplicados conservando FAQ/propina; créditos nativos plegados con fuentes/licencias intactas; pie en filas compactas con13enlaces y cookies. Estas preferencias superan el espaciado/visibilidad de créditos de la primera entrega Grok, sin cambiar de dirección visual.

**EVIDENCIA:** WebKit301648 documenta un problema de ancho del date con padding en iOS. Chromium no reproduce necesariamente ese control nativo: cero overflow a390 no certificaba el iPhone. No resolver recortando overflow ni fingiendo un resultado Safari. Input anterior tenía96px de padding horizontal; ahora0. Pie498→327px y cabecera de blog321→238px a390. Créditos44px cerrados, ocho atribuciones completas al abrir.

**PRUEBA:** build144/TypeScript; lint0errores/1warningprevio; Grok43/render138/SEO1530/técnico1220; cronología71. Nueva captura de110rutas conserva metadata/artículo/enlaces comerciales.15vistas en5anchos sin overflow, formulario4anchos, créditos con click/Enter y hero Jerónimos; consola sin errores capturados. Lighthousea11y100 en las3rutas. Sin nuevos paquetes/hooks, API/precios/slugs/fechas intactos. Free tours12local sin credenciales no equivale a validar una reserva completa.

**HIPÓTESIS:** menos contenido repetido y menor altura facilitan llegar a artículos y reservas; no se atribuyen mejoras de ventas o SEO sin datos.

Revisión final del calendario: el contenedor visual es un label asociado al input, para que el icono no quede como una zona inerte. Un solo campo accesible, teclado y envío comprobados a320px; build144 y Lighthousea11y100 repetidos tras ese ajuste semántico. No altera el aspecto ni la API.

**ESTADO/SIGUIENTE:** [informe y evidencia](../docs/mobile-feedback-2026-11-02.md); head/READY/CI finales en PR134. Revisión física en iPhone pendiente; sin Safari iOS en este entorno. No merge ni producción. No repetir la recomendación de añadir hero al blog salvo nueva necesidad editorial o instrucción de José.
