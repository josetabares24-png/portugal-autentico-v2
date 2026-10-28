# Lisbon ByBoat con la identidad de Estaba en Lisboa

José prefiere la primera composición de la colaboración y pide mejorarla con su identidad. El objetivo es que se lea como un reportaje especial de la publicación y permita comparar las dos salidas. No se cambia el diseño general del blog ni se publica el patrocinio.

## Baseline y criterio

- Código: e8f2830967851a25691998d6eaf467dab5854833, rama preview/lisbon-byboat-editorial, con producción96162fe incorporada.
- Referencia visual elegida: primera Previewb43edf4. Las fotografías y la comparación de paseos se conservan; su paleta azul verdosa se sustituye por la identidad existente.
- HECHO: la adaptación al blog usa una foto genérica local como apertura y separa la comparación de los enlaces de reserva. El diseño original usa fotos de la empresa y compara dos paseos con sus enlaces juntos. PREFERENCIA de José: recuperar esta última composición. HIPÓTESIS: unir las inclusiones/precio con el enlace facilita elegir; no hay conversión medida que lo demuestre.

## Implementación

LisbonByBoatStory es un componente servidor que recibe el mismo Article, fotografías y destinos comerciales. CSSmodule acotado: tokens de color existentes y fuentes de la web; ningún cambio de globals, logo, menú, pie u otros artículos. H1 completo conservado, con dos niveles visuales para evitar una apertura enorme en móvil. Imagen real del operador protagonista, datos compactos en lista de definición, un índice compartido, dos paseos comparados con botones terracota y mapa junto a la sección de embarque. Relacionados y autor compartidos al cierre.

El objetoArticle completo y las constantes de fotos/enlaces son idénticos al baseline. No inventar experiencia a bordo, disponibilidad, cancelación, descuento, escasez o valoración. El aviso comercial aparece cerca de la firma y al final, antes de cualquier posible confusión con una reseña personal. No se consultan o envían correos ni se comprueba un pago a partir del interés del operador.

## Límites SEO del borrador

URL: /blog/paseo-en-velero-lisboa-lisbon-byboat. Se conserva noindex, metadata título/descripción y el acceso anterior que redirige a esta ruta. El DOM de la Preview anterior heredaba canonical de Home: se declara ahora canonical propio. El sitemap anterior incorporaba el registro de blog pese al noindex; el borrador se añade a noindexPaths en la política SEO existente, para que página, sitemap y smoke compartan la decisión. Follow pasa a true conforme al contrato común de esas páginas; las reservas conservan rel sponsored/nofollow. No cambios de URLs existentes, redirecciones de migración, indexabilidad del resto o robots.txt.

La publicación sigue requiriendo aprobación expresa y preparación específica: visibilidad/indexación, sitemap, documentación comercial y fotografías definitivas autorizadas. No debe activarse index por el mero hecho de aprobar la estética.

## Comprobaciones

Aplicación verificada:09936f0a8e38e3e25f3addaca99fecc51827b463. [Preview READY](https://portugal-autentico-v2-ayhzhtemq-estabaenlisboa.vercel.app/blog/paseo-en-velero-lisboa-lisbon-byboat), Next.js16.3.5; enlace temporal entregado fuera de Git. PR120 sigue en borrador. El commit posterior solo registra evidencia/documentación.

| Control | Resultado |
|---|---|
| Build | 144rutas, incluido el artículo y el alias previo |
| TypeScript / ESLint acotado | Sin errores |
| CI de aplicación | Seis checks correctos |
| Conservación y renderizado remoto | 39/39; Article completo, constantes de fotos/enlaces, diez párrafos/notas, precios, tres destinos patrocinados, índice/anclas, mapa, schema parseable, canonical/noindex, listado y alias |
| SEO remoto | 1424/1424;106URLs de sitemap,115páginas,16redirects, sin fallos |
| Navegador | Cinco anchos reales320/390/412/768/1440, sin overflow ni imágenes cargadas rotas observadas; unaH1/un índice |
| Identidad / CTA | Colores computados crema245/239/230, noche26/43/74 y terracota184/71/46; dos botones de48px |
| Interacciones | Índice cerrado en móvil/abierto en escritorio, apertura con Enter y foco nativo, enlace a embarque a100px bajo cabecera y mapaOSM visible |

El primer controlCI detectó que excluir el borrador solo en sitemap no actualizaba la política compartida. Se declara ahora en noindexPaths y se retira la excepción ad hoc. Se conserva el control original, sin omitirlo ni debilitar sus aserciones. La comparación de fuente normaliza únicamente finales de línea Git/Windows.

[Evidencia y capturas](qa/2026-10-28/lisbon-byboat/README.md). Es emulación de viewport, no dispositivos físicos; no Lighthouse o INP nuevos. Las imágenes lazy se comprueban cuando cargan, sin afirmar que todos los recursos de terceros se han revalidado. Sin compras, clics de reserva, formularios o mensajes reales de QA. No efecto de ventas o posicionamiento medido.
