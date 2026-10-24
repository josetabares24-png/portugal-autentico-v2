# Pulido de la edición inglesa — 24 octubre 2026

## Diagnóstico y baseline

José pide «pule version ingles». Base del lote: PR118/`2e8852618d85d8e092c85e1af42d2103e044e24e`, todavía sin publicar. Producción conocida: PR116/`ffe27e6`. Se mantienen las correcciones previas de Entradas/editorial de118. El piloto sigue limitado a seis URLs; no nuevas traducciones, categorías o productos.

HECHO: en390px, la portada coloca la sección de guías en y763px y su fotografía ocupa256,5px de alto. Las guías prácticas pierden el índice bajo1024px. La lectura inglesa hereda Montserrat mientras la española usa la fuente local Plus Jakarta ya cargada en DocumentShell. Algunas instrucciones repiten advertencias o describen cómo funciona la integración en vez de ayudar a reservar. Capturas previas en audit-evidence/english-refinement-2026-10-24 del workspace.

HIPÓTESIS: un índice móvil accesible, lectura más clara y menos repetición facilitan llegar a una respuesta y elegir una visita. No equivale a mejora de CTR, ventas o comportamiento medido. El último dato SEO utilizable sigue teniendo corte17/10, anterior al piloto; no repetir lecturas bloqueadas sin cambio externo.

DECISIÓN: pulir la implementación existente y su voz inglesa. Conservar las fotografías reales, titularesH1/SEO, tarifas, horarios, fuentes y fechas de comprobación factual. No se presenta una corrección de estilo como reverificación completa.

## Alcance

- Portada: introducción concreta y recorte2:1 solo en móviles pequeños; composición de escritorio y foto intactas. Acerca el inicio de las guías, sin convertir la portada en catálogo.
- Artículos: tipografía de lectura Plus Jakarta ya disponible, mismos titularesPlayfair. Columnas de Lo esencial sin mínimo rígido de100px para etiquetas largas.
- EnglishContents: un único índice con details nativo; cerrado en móvil, abierto en escritorio. Mismo árbol para ambos tamaños, actualización al cruzar1024px y limpieza de listener. En móvil se cierra al elegir sección; Escape devuelve foco al resumen. Enlaces y resumen de44px mínimo.
- Copy: siete sustituciones concretas en cinco guías (respuesta de aeropuerto/Metro, frase de transporte del itinerario, párrafo de Tiqets en Pena y título/dos párrafos de tours). Sin datos nuevos, nuevos CTA o cambios de intención.
- Tours: fotografías/selección de cinco/hero compartido conservados; animación de fotos respeta prefers-reduced-motion.
- Navegación: hrefLang español explícito, mismo destino equivalente.

No cambios de URLs, redirects, noindex, robots, sitemap, canonicals, hreflang de metadata, proveedores, productos, campañas o analítica. La plantilla española y los cambios anteriores de118 permanecen intactos.

## Archivos y criterios de QA

src/app/en/page.tsx; src/components/english/EnglishArticle.tsx, EnglishContents.tsx, EnglishNavigation.tsx, EnglishTourSelection.tsx; src/data/english-pilot-articles.json. Documentación y Mente en el mismo PR.

Validar build, TypeScript y lint; smoke inglés y preservación española contra el candidato118 previo. Comprobar seis páginas a320/390/412/768/1440px reales, menú, un solo índice, fuentes, CTA después de respuesta, calendario/fecha/ref, imágenes y overflow. No enviar formularios o completar reservas. El código de filtrado y la selección de idioma deben conservarse. QA final y Preview se completan antes de entregar.

## Gate y riesgos

L003: Preview y revisión visual antes de producción. No autorización de merge de118 por esta petición. Fuentes y fechas factuales permanecen22/23octubre; no afirmar revisión de precios hoy. Riesgo: desplazamiento de líneas por cambio de fuente; se verificará en anchos pequeños. Nuevo índice es un componente cliente pequeño, sin dependencias y sin duplicar enlaces en dos árboles.
