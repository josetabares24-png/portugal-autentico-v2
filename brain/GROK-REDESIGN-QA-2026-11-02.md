# Grok en la aplicación real — diagnóstico, decisión y aprendizaje

## HECHO / baseline

José encarga perfeccionar la imagen Grok adjunta e integrarla en la web existente, conservando contenido/SEO/afiliación; solo Preview. Base `06ecc92`, PR134 borrador, rama `preview/grok-redesign-real-site-2026-11-01`. Catálogo71, último ByBoat27/10/2026; sitemap107. Los estados antiguos de otras previews no validan este candidato.

## DIAGNÓSTICO → EVIDENCIA

La página concreta de dos días ocultaba el componente del segmento dinámico. Un test de fuente verde no garantizaba diseño servido. Además, variables tipográficas de `:root` dependían de valores declarados en body: interiores con fallback y siete precargas. Había portadas equivocadas, repeticiones, Home redundante y un botón flotante que tapaba lectura. [Informe A–K y capturas](../docs/grok-redesign-audit-2026-11-02.md).

## DECISIÓN / PROPUESTA → RAZÓN

La identidad turquesa/amarillo/Abril/Heebo/Caveat aprobada por José el1/11 es el contrato de esta preview, aunque notas anteriores prefieran otra paleta. No se cambia silenciosamente la decisión de producción ni se autoriza merge. Se aplica a rutas reales y componentes compartidos; se conservan las11 paradas, mapa, reservas y metadata anteriores dentro de un desplegable en dos días. Fotos sin correspondencia se retiran, sin fallback global ni imágenes inventadas. Las decisiones de foto son explícitas en `editorial-photo-policy.ts` y compartidas con OG/schema. Créditos visibles a las nuevas Commons.

## PRUEBA / SEGUNDA REVISIÓN

Build144, TypeScript, lint0errores/1warningprevio, Grok43+138render, sitemap67, migración1530/115páginas/16redirects, técnico1220/122páginas, itinerarios26, Free tours12sinconfig, analytics6/opciones3/bookingEN2 pasan.45vistas reales en cinco anchos para siete superficies y dos anchos para otras cinco, sin overflow observado. Menú/buscador/filtros/paginación/cookies/anclas/desplegable probados.

La segunda revisión del mismo agente encontró fuentes interiores incorrectas, etiquetas de galería aún fallidas pese a a11y100 y preferencias flotantes que cubrían texto; corregidos y repetidos. Una prueba por error reconstruyó `.next` mientras se servía: errores transitorios resueltos recompilando/reiniciando y repitiendo HTTP con `SMOKE_BASE_URL`. No ejecutar pruebas que reconstruyan la misma `.next` en paralelo con una preview.

## APRENDIZAJE

- Comprobar la URL concreta servida antes de dar por válido un componente dinámico.
- Resolver tokens CSS en el elemento donde existen sus dependencias; verificar fuente computada, no solo className.
- Medir `innerWidth` en cada captura: un override de otra pestaña no prueba responsive. No reutilizar imágenes mal dimensionadas como evidencia.
- La puntuación de Lighthouse puede omitir hallazgos experimentales: leer los fallos individuales.
- Mantener el baseline de metadata/cuerpo comercial y contrastar contenido renderizado, además de SEO superficial.
- El catálogo cronológico no debe imitar los artículos ficticios del montaje; la composición y la marca sí.

## IMPACTO ESPERADO / HIPÓTESIS / RIESGO

Coherencia, orientación y lectura mejores son hipótesis de producto; no se atribuyen mejoras SEO ni ventas. Home local perf82→88 y LCP4,81→3,90s, tres precargas frente a siete; producción sigue más rápida en el laboratorio. No hay INP de campo. Diez artículos necesitan fotografía apropiada y falta completar documentación de derechos del archivo histórico. Lo preservado del recorrido antiguo requiere revisión factual fechada antes de publicar.

## ESTADO / SIGUIENTE ACCIÓN

Commits de aplicación `1b164b7`, `67e1119`; pruebas/evidencia/memoria en la misma PR. [Estado remoto final](../docs/qa/grok-2026-11-02/remote-status.json). Revisar Home/dos días con José, comprobar READY y reservas en entorno configurado, revisar precios/horarios históricos; después decidir producción con autorización expresa. Ningún merge, producción, compra, campaña o correo ejecutado.

Los bloqueos previos de GSC/Windsor no cambian; no se vuelven a interpretar datos ausentes como cero. Conversiones y comisiones siguen DESCONOCIDAS. PR132/133 revisados selectivamente, sin fusión automática.
