# Fase 7C — entradas de Belém en Monumentos

21/10/2026. Continuación de José; base `c145415`, rama editorial-rebuild-phase-7 y PR #113. Corrección puntual, sin consolidar Monumentos con Qué ver ni modificar la guía protegida de Jerónimos.

## Diagnóstico, evidencia y decisión

HECHO: dos párrafos consecutivos afirman respectivamente «Hay entrada combinada con la Torre de Belém» y «en un billete aparte del de los Jerónimos». No explican producto, proveedor o condiciones. Las tarifas de 18/15 € tampoco distinguen los totales mostrados por la taquilla online. HIPÓTESIS: esa contradicción puede llevar a comprar una opción equivocada; no hay datos de reclamaciones ni impacto SEO atribuible. DECISIÓN: retirar ambas afirmaciones incompatibles, pedir que se comprueben las inclusiones de cada paquete y distinguir tarifa base/total online comprobado. PREFERENCIA: información concreta con alcance y fecha, sin prometer un producto no verificado.

Fuentes primarias consultadas:

- [Taquilla oficial MMP — claustro de los Jerónimos](https://mmp.bymeoblueticket.pt/pt/event/14759/mosteiro-dos-jeronimos-claustro): producto individual, rango hasta 18 € entre paréntesis y total 19,11 €, horario martes–domingo 09:30–17:30/último acceso 17:00. Advierte de colas de acceso que pueden superar dos horas. No acredita un combinado Jerónimos/Torre.
- [Taquilla oficial MMP — Torre de Belém](https://mmp.bymeoblueticket.pt/pt/event/14776/torre-de-belem): producto individual, rango hasta 15 € y total 15,92 €. La extracción no resuelve sesiones para una fecha: un producto publicado no demuestra disponibilidad ni reapertura para cualquier día.
- [Catálogo oficial de combinados](https://mmp.bymeoblueticket.pt/pt/Search?subCategory=4): aparecen Jerónimos/Coches y Jerónimos/Coches/Ajuda, entre otros. No se encontró en esa lista un combinado Jerónimos/Torre. Ausencia observada no prueba inexistencia universal de paquetes comerciales ni permite invalidar productos de otro proveedor.

Las páginas institucionales MMP enlazan esa taquilla, pero su contenido dinámico no fue legible por el extractor. No se toma esa limitación como cierre o ausencia de información. No se hacen reservas, selección de sesiones, login o compra. Precios mostrados el 21/10, sujetos a condiciones del proveedor; no se inventa una comisión ni se extrapolan descuentos. El respaldo de este lote no certifica todos los horarios, cierres, datos históricos o precios de los otros monumentos.

## Cambio y conservación

Solo dos bloques de veintiuno: párrafos prácticos de Jerónimos y Torre. Se elimina la promesa no respaldada del combinado y su negación implícita; se recomienda comprobar ambas inclusiones/condiciones y la disponibilidad por fecha. Las tarifas base previas se conservan y se añaden los totales online comprobados. Mantener el resto del texto de ambos párrafos, los otros diecinueve bloques, títulos/H1/meta, slug, intención, enlaces internos, fotos, FAQ, reservas y componentes.

Se conservan las siete fuentes previas y se añaden las dos fichas oficiales de venta al mismo acordeón. El desplegable existente permite acceder a todas; no se crea otra bibliografía. Se fecha la corrección parcial de entradas de Belém: `dateModified` 21/10 y etiqueta visible específica, sin «Verificado el» integral. Publicación original 3/03/2026 intacta. El índice declara esa misma modificación; solo el lastmod de Monumentos cambia respecto al candidato F7B.

Aplicación: `src/app/[locale]/blog/[slug]/page.tsx`, `src/data/blog-posts.ts`. Documentación: este informe, CURRENT-STATE, D-058, manifest y evidencia QA. Contrato de 16 redirects, ocho noindex y dos fusiones aplazadas intacto. Sitemap conserva 98 URLs; sin cambios de generador, robots, canonicals, tipos/IDs de schema, Clerk o navegación. El schema existente deriva la fecha de modificación corregida.

## Riesgos y límites

Monumentos mantiene REVIEW: no hay autorización para fusionarlo ni señal suficiente de canibalización para retirar una URL. Permanecen por revisar horarios/cierres de Torre y otros espacios y afirmaciones históricas del artículo. No se alteran la guía reciente de Jerónimos, Qué ver ni sus ofertas: un paquete comercial puede agrupar entradas sin equivaler a un único billete oficial. No se garantiza que un precio o una sesión estén disponibles en una fecha futura.

Baseline: [extracción GSC hasta 17/10](../brain/data/CONSOLIDATION-SEARCH-2026-10-20.json); sin filas para Monumentos en esa consulta, lo que no equivale a demanda cero ni problema de indexación. Es anterior a producción del 20/10 y al candidato. Impacto esperado: claridad de compra; efecto SEO incierto. Esfuerzo bajo, riesgo de migración nulo porque no se realiza ninguna. Sin Lighthouse nuevo ni medición posterior de resultados.

## Validación y Preview

QA local correcto: build 137 páginas, TypeScript, lint cero errores/un warning previo en ItineraryContextualCta.tsx:84. Blog: 828 invariantes y 97 enlaces sin rotos. Migración: 1.426 controles; sitemap 64/64 con 98 URLs. Comparación de conservación/HTML: 26 controles correctos; diecinueve bloques y otros artículos/tarjetas conservados, metadata/títulos/canonical/robots y enlaces internos iguales, nueve fuentes renderizadas, publicación original intacta y fecha de modificación coherente. Solo cambia el lastmod de Monumentos respecto a F7B (se conserva la modificación previa de Festivales). Navegador local: ocho vistas de Monumentos/Jerónimos a 390/412/768/1440 px, sin overflow y una H1. [Resumen](qa/2026-10-21/phase7c-local-summary.json), [integridad](qa/2026-10-21/phase7c-local-integrity.json), [vistas](qa/2026-10-21/phase7c-local-responsive.json). No se relaja el contrato de plantilla para aceptar cambios de contenido. Preview pendiente; sin merge ni producción.


## Cierre de Preview — 21/10

Código **00168de0f756ec7d90900bdaf7f415e54512077c**, deployment **dpl_AKx7F1tpDE1XSB5iECRMSSczcNfg**, READY, entorno Preview (`target:null`): https://portugal-autentico-v2-6w1lwjhmo-estabaenlisboa.vercel.app . Seis checks correctos: SEO smoke, TypeScript, GitGuardian, comentario automático de Preview y los dos proyectos Vercel. Enlace temporal de acceso entregado en conversación; token/cookie fuera de Git y cookie del QA solo en memoria. No se modifica la protección/noindex de plataforma.

QA remoto: 26 controles de integridad/HTML/sitemap correctos, ocho vistas en los cuatro tamaños sin overflow/H1 duplicada; desplegables de fuentes abiertos y fichas oficiales accesibles. [Resumen](qa/2026-10-21/phase7c-preview-summary.json), [integridad](qa/2026-10-21/phase7c-preview-integrity.json), [vistas](qa/2026-10-21/phase7c-preview-responsive.json), [escritorio](qa/2026-10-21/phase7c-preview-desktop.png), [móvil](qa/2026-10-21/phase7c-preview-mobile.png). La comprobación remota se centra en contenido/SEO de este cambio; no se presenta como otra ejecución completa del smoke de migración local.

Producción consultada al cierre: **5ad2c40 / dpl_BdGSFAuvGY1dudTfLHSU6MYdoWes READY**, sin cambios desde PR #112. Sin merge ni publicación. Este cierre solo añade documentación/evidencia al mismo código probado. Siguiente pendiente: correcciones puntuales de Vinos/Gastronomía; no redirecciones ni nueva navegación todavía.
