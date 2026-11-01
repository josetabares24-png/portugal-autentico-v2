# Rediseño Estaba en Lisboa — fidelidad al modelo aprobado

> Estado: **solo Preview / PR #134**. No fusionar ni publicar sin aprobación expresa. El objetivo es sustituir la presentación visual, no reiniciar el proyecto ni las URLs.

## Referencia que aprobó el propietario
Composición de tres pantallas en una imagen (escritorio Home, itinerario Lisboa en 2 días, móvil Home):
- Cabecera **turquesa** con logo original inverso, enlaces existentes y CTA **amarillo**.
- Home con panorámica de Lisboa, titular blanco en **Abril Fatface**, rótulo manuscrito amarillo, buscador en blanco/amarillo y accesos a cinco categorías que sobresalen del hero.
- Blog de portada: **mosaico** de fotografía grande de tranvía para «Lisboa en 2 días» + cuatro guías con fotografía y texto breve, no listas de iconos.
- Entradas/actividades: fotografía del destino, etiqueta amarilla, texto editorial compacto, acción turquesa.
- Itinerario: hero fotográfico, barra blanca de cuatro datos, cuadrícula **3×2** de seis fotografías con número amarillo, jornadas día 1/2 con filas imagen/explicación/panel de acción turquesa, botones amarillos, ficha de Alfama y tres aclaraciones comerciales.
- Móvil: hero de texto centrado, buscador vertical, categorías **2 columnas + última a ancho completo**, artículos en **una columna** con fotografía protagonista, menú utilizable y paneles de itinerario legibles.

## Fuentes de verdad
- Producción: `https://estabaenlisboa.com`.
- Código real: `josetabares24-png/portugal-autentico-v2`.
- Prototipo original de Grok: proyecto Vercel `estabaenlisboa-preview` (HTML estático; no publicar como sustituto).
- Implementación actual: rama `preview/grok-redesign-real-site-2026-11-01`, PR #134.
- Tipos: `Abril Fatface` (títulos), `Heebo` (interfaz), `Caveat` (rótulos cortos).
- Colores: turquesa `#016d6f`, turquesa oscuro `#015a5c`, amarillo `#fcc603`, tinta `#0b2a3d`.

## Integrado
- Home reconstruida con contenidos reales; acceso inmediato a blog, entradas, tours, excursiones y alojamiento.
- Portada de blog tipo revista con un destacado y cuatro miniaturas fotográficas; archivo y filtros conservados.
- Ruta `/itinerarios/lisboa-2-dias-completo`: diseño específico de seis paradas y dos jornadas (sin precios no comprobados).
- Artículos y guías: estilo editorial compartido, sin alterar sus datos o estructura semántica.
- Hub de entradas y free tours: hero, catálogo y botones visualmente adaptados; funcionamiento comercial existente conservado.
- Actividades, tarjetas de itinerario, header, footer y navegación.
- Comprobaciones automatizadas TypeScript, SEO de 107 URLs, y contrato del rediseño.

## Criterios para aprobar ANTES de publicar
- [ ] Comparación visual **real** con la imagen aportada: 1440, 1024, 768, 390 y 320 px.
- [ ] QA de logos, fotografía LCP, foco, contraste y legibilidad. Sin desbordamientos horizontales.
- [ ] Probar manualmente buscador y menú móvil (tab, escape si corresponde, cierre al navegar).
- [ ] Abrir imágenes originales, seis tarjetas y todos los botones del itinerario.
- [ ] Validar itinerario con realidad operativa: cierres de Torre, horario de Jerónimos, obras/transporte.
- [ ] Comparar Lighthouse móvil, LCP, CLS e INP con producción.
- [ ] Confirmar que las 107 URLs y sus canonicals/JSON-LD, redirecciones, afiliados y consentimientos no han cambiado.
- [ ] Revisar PR #132 de Belém independientemente; no incluirlo silenciosamente en este rediseño.
- [ ] Obtener aprobación expresa **«publica»** para fusionar PR #134.

## Advertencias editoriales
La captura de Grok contiene importes de 2026 y horarios que pueden caducar: **no copiarlos** hasta validarlos con las fuentes oficiales. La página de 2 días enlaza a las fichas de reservas existentes para consultar información y evita fabricar disponibilidad de GuruWalk/Tiqets/GetYourGuide. El itinerario visual propone un orden orientativo, no tiempos exactos garantizados.
