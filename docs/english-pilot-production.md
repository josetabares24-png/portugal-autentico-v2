# Piloto inglés publicado — 24 octubre 2026

## Autorización y publicación

José autorizó expresamente publicar PR #116, head `f53ba4b5d061fe011d227178d1c290fe3ce64919`, por merge normal y reparar Clerk después. Esta decisión acepta temporalmente la incidencia privada conocida; no desactiva autenticación ni autoriza publicaciones futuras.

- [PR #116](https://github.com/josetabares24-png/portugal-autentico-v2/pull/116): MERGED, 24/10/2026 08:02:25 UTC (09:02:25 Lisboa).
- Merge: `ffe27e6ae5ae24338aa8becfa521daff5d59fdd8`.
- Seis controles aprobados y cero hilos pendientes antes de fusionar; helper de publicación con comprobación de head y política. Watcher posterior confirma MERGED del mismo head autorizado.
- Vercel: `dpl_5kX4uJor2dbtbBEU6JZRv4J3YF8U`, proyecto `portugal-autentico-v2`, entorno production, READY. Alias `estabaenlisboa.com` y `www.estabaenlisboa.com` asignados al merge anterior.
- [Portada inglesa](https://estabaenlisboa.com/en) y [cinco tours ingleses](https://estabaenlisboa.com/en/lisbon-free-walking-tours).

## QA posterior en el dominio público

| Control | Resultado |
|---|---|
| Seis páginas inglesas / equivalencias | 222 comprobaciones correctas |
| Preservación editorial española | 1.659 correctas / 72 superficies frente al baseline posterior a PR115 |
| Migración SEO | 1.490 correctas; 104 URLs sitemap; 16 redirects |
| Free tours español | 66/66 correctas |
| Disponibilidad real por idioma, 27/10/2026 | API 200; tres tours ingleses y tres españoles; fecha conservada |
| Navegador, tours inglés | HTML en, una H1, ocho imágenes cargadas, sin overflow observado a 1440 px |
| Panel privado | /admin y /api/admin/guides siguen devolviendo 500 |

Evidencia HTTP y captura guardadas en `audit-evidence/english-release-2026-10-24/` del workspace, fuera del repositorio. La captura corresponde al dominio público. No se realizaron reservas, pagos, envíos ni clics afiliados de QA. No se certifica QA móvil ni mejora de Lighthouse/conversión.

## Incidencia aceptada y reparación pendiente

Antes del piloto, producción y Preview fallaban por `@clerk/nextjs: Missing secretKey`. La inspección de nombres de variables, sin descifrar valores, confirmó ausencia de `CLERK_SECRET_KEY` en el proyecto principal. Su restauración sigue pendiente: el responsable debe configurar la clave correspondiente a la misma instancia del publishable key en Vercel, mediante los paneles oficiales y sin pegar secretos en chat o Git. Después: redeploy y QA anónimo + sesión autorizada. Un 500 no prueba que el login funcione. No se debilitó Clerk.

## Observación y siguiente lote

E-019 inicia D0 el **24/10/2026**, tras confirmar READY y alias públicos. Revisiones propuestas: indexación 23/11/2026, consultas/clics 23/12/2026 y reservas verificadas 22/01/2027; no son automatizaciones creadas. Si no hay muestra o acceso a métricas, resultado inconcluso. Reservas/comisiones siguen desconocidas.

Siguiente lote recomendado en Preview: mantener la estética de Entradas y sus 16 productos; acercar guías prácticas a las tarjetas; aclarar inclusiones verificadas de Pena/Jerónimos/Oceanário; revisar avisos vencidos (Castelo conserva uno del 17/10). No nuevas URLs, rediseño general, catálogo inglés adicional ni promesas comerciales sin evidencia. Este documento registra el despliegue; no implementa ese lote.
