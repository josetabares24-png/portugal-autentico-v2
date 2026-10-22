# Publicación editorial — PR #113

22 octubre 2026. Decisión D-066. [PR #113 fusionado](https://github.com/josetabares24-png/portugal-autentico-v2/pull/113). [Resumen verificable](qa/2026-10-22/pr113-production/summary.json).

## Autorización, fusión y despliegue

José respondió «si» a la pregunta explícita de publicar el lote completo de PR #113: Home, navegación, Planifica, ajustes editoriales y correcciones técnicas. La confirmación es posterior a la Preview, sus capturas y la prueba funcional de Planifica reportada por él. Satisface el gate visual y de publicación para este lote; no autoriza otras fusiones de URLs o cambios de producto.

- Head autorizado: `e59c5af0965e216e28c0273f883e4603306c75f1`.
- Seis checks correctos, cero hilos sin resolver, MERGEABLE/CLEAN, sin cola obligatoria. Se marcó listo el PR y el watcher determinista confirmó `ready`.
- Helper de landing con digest de política y coincidencia exacta de head. Método merge, sin privilegios admin ni bypass. Watcher posterior confirmó `merged` para el mismo head.
- Merge: `5d3573d3c09ae9d804d0636fc47feac8ed28f563`, 22/10/2026 a las 11:18:49 UTC.
- Vercel: `dpl_9RvX95KAwsrfswTKRaBbmMMieNn5`, **READY**, target **production**, SHA del merge; aliases `estabaenlisboa.com` y `www.estabaenlisboa.com` confirmados. Proyecto `prj_oIbYIcpY2pf4SuS9GelrYEYBAtyP`, equipo `team_vfP8IJB7LilRrZAhk4qnYsR9`.
- Dominio verificado: https://estabaenlisboa.com . `www` conserva 308 al dominio canónico.
- Producción anterior: `5ad2c40`, deployment `dpl_BdGSFAuvGY1dudTfLHSU6MYdoWes`. Se registra como referencia recuperable; no se ejecutó rollback.

El árbol de aplicación/scripts/package.json del merge es idéntico al head aprobado y al código probado cd9f8f9; los commits intermedios solo guardaban evidencia/memoria. El push a main activó el despliegue Git de Vercel; no se desplegó directamente desde local. CI de main: TypeScript/SEO smoke correctos, ambos estados Vercel success.

## Alcance publicado

Home móvil con guías antes de reservas, accesos fotográficos compactos y temporada manual. Cabecera con Lisboa/Escapadas/Historias/Planifica/Free tours/Entradas, portada editorial del blog y recursos existentes conservados. Portugal usa la foto de Pena con crédito y lista de enlaces en lugar de cuatro tarjetas repetidas. Perfil real de autor conservado.

Planifica permite escribir directamente a José por formulario o correo, con alcance/precio acordados antes del plan. No plazo de entrega automático ni precio inventado. Backend exige aviso aceptado para el propietario antes de confirmar éxito, usa respaldo y acuse secundario, valida/escapa entrada y conserva separación de newsletter. Se mantienen eventos sin PII; días/ritmo/presupuesto ya no se recogen en la UI simplificada y no son dimensiones comparables con su histórico.

Se publican las correcciones conservadoras de Cascais, Festivales, Monumentos, Vinos y Gastronomía; fechas ISO del catálogo, primera publicación de ficha separada de modificación, retirada de hints Brevo/quality inválida y controles de cookies de 44 px. Informes detallados de cada fase permanecen en el repositorio.

No nuevas URLs, artículos, redirects o noindex en este lote. No consolidaciones WAIT ni cambios agresivos en páginas protegidas. Dos redirecciones continúan aplazadas: Restaurantes/Pareja y Novedades/Festivales siguen separadas. No cambios de proveedor/afiliación de Free tours.

## QA sobre el dominio público después del despliegue

| Comprobación | Resultado |
|---|---|
| Migración SEO | 1.426 controles, cero fallos, 106 páginas, 113 enlaces internos únicos |
| Redirects | 16 reglas, 64 variantes; 301 → 200 en un salto |
| Calidad técnica | 1.130 controles en 113 páginas; cero fallos/fechas de schema inválidas |
| Navegación editorial | 171 controles, 42 páginas; destinos y selección conservados |
| Sitemap | 64/64; 98 URLs 200, canónicas e indexables |
| Free tours | 66/66; enlaces afiliados/atribución/avisos y recursos activos |
| Calculadora y recursos Planifica | 92/92; no calculadora duplicada, destinos correctos |
| API Planifica | GET 405, POST vacío 400; rechazo antes del transporte de correo |
| Responsive | 32 vistas, ocho páginas × 320/390/768/1440; cero overflow o imágenes visibles rotas |
| Interacciones | Formulario vacío bloqueado, Tab nombre→email, Escape devuelve foco, accesos móviles a Free tours/Planifica y cierre de menú correctos |

Migración valida robots/sitemap, políticas noindex, canonicals, schema parseable, redirects sin cadena y enlaces internos sin depender de redirecciones. La política de ocho rutas noindex se conserva; `/quiz` sigue 404 real. Sitemap y robots no cambian. No confundir la comprobación de parseo con certificación de rich results o de todos los datos factuales.

José había comunicado que ya probó el formulario y funciona. Eso es validación humana reportada antes de publicar, no inspección independiente de su bandeja. Durante QA de producción el agente no envió correos reales: solo formulario vacío y petición vacía que falla antes de Brevo/SMTP. Tampoco hizo reservas ni siguió enlaces de afiliado. No se repite una solicitud ya comprobada por José.

Capturas: [Home escritorio](qa/2026-10-22/pr113-production/browser/home-desktop.png), [Home móvil](qa/2026-10-22/pr113-production/browser/home-mobile.png), [Planifica escritorio](qa/2026-10-22/pr113-production/browser/planifica-desktop.png), [Planifica móvil](qa/2026-10-22/pr113-production/browser/planifica-mobile.png). Informes HTTP, matriz, watcher y lecturas DOM en la misma carpeta. Sin credenciales ni cookies en Git.

## Límites y siguiente decisión

No se repitió Lighthouse: las cifras de Home98/99 y Metro92 de Fase 14 eran del despliegue anterior, no resultados de este release. Las pruebas automatizadas no certifican toda la accesibilidad, los precios o la entrega a bandeja. El lint previo conserva un warning ajeno al lote; no hay errores de build/TypeScript pendientes.

No hay ventana Search Console posterior que permita evaluar crecimiento. La fecha de despliegue inicia una observación nueva; conservar las páginas fuertes y comparar siete días completos finalizados después del lanzamiento y después 28, además del recorrido por dispositivo y solicitudes útiles de Planifica. No atribuir automáticamente variaciones al lote: estacionalidad, mezcla de consultas y cambios previos interfieren. El primer día completo posterior es 23/10; 23–29/10 es la primera ventana de siete días, solo cuando esté finalizada. No cambiar URLs WAIT ni abrir un nuevo rollout por el hecho de haber publicado.

Este documento y su evidencia se guardan después del release en una rama documental. No cambian la aplicación publicada ni requieren un segundo despliegue de código para que PR #113 esté activo.
