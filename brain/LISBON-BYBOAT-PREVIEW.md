# Lisbon ByBoat — identidad propia, 27 October 2026

## Entrega independiente — 28 octubre

José no está convencido de la propuesta Home/header y pide recibir primero la versión final de ByBoat. No existe aprobación de esas superficies ni de producción. Se entrega el reportaje de aplicación `09936f0`, Preview `ayhzhtemq`, con la cabecera anterior: su diseño/contenido ByBoat coincide con el candidato posterior, sin incluir la propuesta nueva de navegación/Home. Enlace temporal renovado y entregado fuera de Git. Verificados en navegador título, foto, comparación de salidas y destinos patrocinados; canonical propio y noindex/follow conservados. Esta entrega es para revisión, no publicación. PR120 aún reúne ambos lotes: una futura autorización limitada a ByBoat requiere aislar ese lote antes de fusionar; no incluir silenciosamente Home/header. La reconsideración del menú queda pendiente después de esta entrega.

## Ampliación solicitada —28 octubre

Nuevo cierre de aplicación `adf76c7`: Preview `7938lei1b` READY, seis CI y revisión visual en 15 vistas correctos; navegación178/SEO1424/inglés224/conservaciónByBoat39 sin fallos. Home automática y menú de cuatro opciones listos para revisión de José, con capturas en el informe enlazado. La Preview anterior `ayhzhtemq` queda como evidencia histórica del diseño ByBoat. Producción no modificada; PR120 sigue borrador.

José pregunta por la ausencia en Home y pide menos confusión en el header. Se prepara selección automática de publicaciones recientes y cuatro entradas principales, en commits separados de este mismo candidato. ByBoat continúa noindex y se excluye del feed hasta su publicación autorizada; el nuevo selector no convierte un borrador en artículo publicado. [Detalle y QA](../docs/home-latest-navigation-preview.md). La nueva revisión de portada/navegación también requiere Preview; no producción.

## Cierre de Preview — 28 octubre

Aplicación09936f0, Previewayhzhtemq READY y seisCI correctos; PR120 borrador, revisión visual pendiente. Build144rutas, TypeScript y ESLint sin errores;39checks de contenido renderizado/fuente correctos (incluidos los diez párrafos/notas, objetoArticle y destinos/fotos existentes). QA SEO remota1424/1424:106URLs de sitemap,115páginas,16redirects; la nueva ruta noindex también se inspecciona. Cinco anchos reales320/390/412/768/1440 sin overflow, unaH1 y un índice; colores computados coinciden con la marca y los dos botones miden48px. Índice cerrado en móvil/abierto en escritorio, apertura con teclado y salto al mapa verificados; mapaOSM visible. [Informe y capturas](../docs/lisbon-byboat-brand-preview.md). Sin publicación, compra o correo. El bloqueo anterior de revisión automática fue por uso disponible, no por una acción insegura; al reanudar se aplicó la corrección por el flujo normal.

Última preferencia: José recupera la primera Previewb43edf4, la ve y pide mejorarla con su identidad. Esta instrucción sustituye la preferencia anterior de copiar exactamente la plantilla del blog. Decisión: conservar composición/fotografías y comparación visual de paseos del original; usar tokens reales crema/azul noche/terracota y tipografías de Estaba en Lisboa, con cabecera más compacta y lectura móvil. Reportaje especial solo en esta URL, sin rediseñar otros artículos.

Baselinee8f2830 de preview/lisbon-byboat-editorial; producción conocida96162fe (PR118 publicado). Nuevo componente servidor y CSSmodule local; ArticleToc/ArticleRelated/ArticleFooter y navegación/pie globales compartidos intactos. Datos del objetoArticle, precios45/60, enlaces Bokun/operador/mapa y URLs de las tres fotos exactamente preservados. Son fotos del sitio oficial ya usadas por la primera Preview; no se presentan como adjuntos del correo importados o experiencia personal de José. No nuevos datos/claims o integración comercial.

Se corrigen dos límites del borrador: canonical heredado de Home pasa a la propia ruta; el artículo noindex se declara en seo-url-policy.json y se excluye del sitemap usando el sistema existente. Noindex se conserva y follow se alinea con esa política común; los enlaces comerciales siguen sponsored/nofollow. Se conserva la redirección previa desde /colaboraciones. BlogClient sigue mostrándolo en la Preview. Sin publicación ni correo a Pedro autorizados por esta petición. El cierre de QA está registrado arriba. No pago de50€ confirmado ni ingresos medidos.

## Historial — adaptación anterior

Baseline: e59ca0c, preview/lisbon-byboat-editorial; main 96162fe. User explicitly prefers existing blog styling and prohibits production publication or email to Pedro. Commercial agreement: EUR 50, user-reported; no payment confirmation inferred.

Inspection: current blog uses ArticleHero, ArticleBody, ArticleToc, ArticleRelated and ArticleFooter with article-v2 on main. The custom blog route had those components but omitted article-v2, disabling shared title, image frame, reading-width and spacing rules. Restore that scope without changing shared CSS or other articles. Preserve two tours (EUR 45/60), sponsored booking URLs, map and disclosure. Select three relevant related articles; add map to TOC. Earlier custom-design preview redirects to the blog route.

The first blogPosts record is Lisbon ByBoat: BlogClient renders it on page one in Todos and Guias. Existing layout supplies site navigation/footer. Partner photo uses an already-present official-site image URL, unoptimized to avoid changing global image policy; original emailed attachments have not been imported. Existing local hero retained. No invented personal visit.

Validation: component/style and listing data paths inspected. Deployment build and remote route checks are the next validation step; no local typecheck claimed (repository clone unavailable). No production release or email authorized. Preview retains noindex/nofollow; publication preparation is a separate approval step. No SEO or sales effect measured.
