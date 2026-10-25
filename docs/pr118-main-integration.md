# Integración de main en PR118 — 25/10/2026

Antes de pulir las entradas inglesas se detecta main `06d9e14a40716a33790a7bf54798752b8143a3aa`, posterior al baseline `ffe27e6`, y PR118 con conflictos. Se integra main en la rama de Preview mediante merge normal, sin cambiar main ni publicar el candidato.

Se preservan los cambios publicados: retirada de Clerk/admin, protección de Brevo, guías de Oceanário/Torre/Regaleira/enero, sustituciones de proveedor, colocación contextual de reservas, títulosSEO actuales, fechas reales del sitemap y Stay22 solo donde corresponde. También se conserva el referido GuruWalk en la fuente inglesa y la regla de títulos ingleses. Estas decisiones de main sustituyen las notas históricas del24/10 que describían Clerk pendiente y sitemap104; ahora hay106URLs.

Cuatro archivos presentaban16hunks: blog page.tsx, activities.ts, blog-posts.ts y ticket-guides.ts. Se leyeron ambas versiones y su historial. Los bloques de temporada, entradas y fechas del25/10 sustituyen las correcciones parciales del24/10 donde coinciden. Fuera de esos conflictos se conservan las correcciones previas puntuales de café, barrios, historia y azulejos del PR118.

Combinaciones deliberadas: conservar la etiqueta2026 de la fila Óbidos; conservar la URL canónica oficial de horarios junto con la nueva fuente de preventa; conservar la FAQ que dice que los horarios de2026 ya están publicados y añadir el resto de respuestas actualizadas sobre transporte/precios/cierres. La FAQ antigua de main contradice su propia tabla y no se restaura. activities.ts y ticket-guides.ts quedan idénticos a main en esta integración.

Los IDs de decisiones locales073–075 colisionaban con los incorporados de main. Sus registros pasan a081–083 con nota explícita y sus fechas originales;073–080 de main permanecen intactos. No se reescribe la historia de autorizaciones.

La comparación y los checks se ejecutan antes de completar el merge de rama. El pulido de entradas irá en otro commit, con su Preview y QA. El reenvío de indexación en Search Console del25/10 fue una operación separada:11solicitudes aceptadas, Torre/enero rechazadas por cuota y sitemap reenviadoCorrecto. Solicitud no equivale a indexación confirmada.
