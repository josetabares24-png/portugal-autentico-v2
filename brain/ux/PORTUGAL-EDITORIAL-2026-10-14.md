# Portugal — revisión editorial y visual, 14/10/2026

**Estado:** preparada en `codex/portugal-editorial`; pendiente de aprobación visual de José antes de merge (L-003). Autoriza el trabajo la petición de revisar `/portugal`, retirar el retrato que no quiere y desarrollar la página.

## Diagnóstico → evidencia

HECHO: la página pública devolvía 200 y se titulaba «Viajar a Portugal 2026: rutas, transporte y consejos». Tenía un retrato de José en Oporto, también en Open Graph/Twitter, promesas como «Aquí voy reuniendo» y un bloque con instrucciones editoriales internas («No publicar Portugal por publicar»). La visita al país quedaba reducida a cuatro enlaces, tres excursiones desde Lisboa y una derivación al artículo de Cristiano Ronaldo.

HECHO: Search Console/Windsor.ai no devuelve filas al filtrar la URL exacta `https://estabaenlisboa.com/portugal` entre 15/07 y 11/10/2026. Es ausencia de filas visibles, no prueba de cero demanda. No se cambia URL, canonical, indexación ni enlaces globales hacia esta página.

PREFERENCIA explícita: José no quiere ese retrato en esta página y considera que el contenido parece una preview con texto genérico. No se extrapola a borrar el archivo ni retirar fotos de otras páginas.

## Oportunidad → propuesta → razón

Convertir la portada nacional en una entrada práctica al viaje, manteniendo Playfair/Montserrat, crema, azul noche y terracota:

- H1 literal «Viajar por Portugal», introducción concreta y navegación por anclas.
- Cinco regiones continentales y dos archipiélagos, con destinos y una decisión de planificación en cada zona.
- Repartos orientativos de 3–4, 7 y 10–14 días. Son recomendaciones editoriales, no horarios ni experiencias personales atribuidas a José.
- Comparación de tren, autobús y coche, más comprobaciones de llegada/salida, noches, reservas y último tramo.
- Enlaces hacia las guías existentes y fuentes oficiales; no se inventan guías de regiones que el sitio no tiene.
- Retirar las promesas de desarrollo y reglas internas del contenido público y la derivación a Cristiano Ronaldo como argumento turístico.
- Sustituir el retrato visible y social por una fotografía real de Oporto de Michael Gaylard, CC BY 4.0, revisada visualmente y con crédito/licencia. La segunda foto muestra el Palacio Nacional de Sintra, de Jakub Hałun, CC BY 4.0; ya existía en el repositorio. No se generan imágenes.

## Fuentes comprobadas

Fichas oficiales de Turismo de Portugal, consultadas el 14/10/2026:

- https://www.visitportugal.com/es/destinos/lisboa-regiao
- https://www.visitportugal.com/es/destinos/porto-e-norte
- https://www.visitportugal.com/es/destinos/centro-de-portugal
- https://www.visitportugal.com/es/destinos/alentejo
- https://www.visitportugal.com/es/destinos/algarve
- https://www.visitportugal.com/es/destinos/madeira
- https://www.visitportugal.com/es/destinos/acores

Transporte: CP, https://www.cp.pt/info/pt/lisboa y https://www.cp.pt/info/alfa-pendular. No se publican precios ni horarios como constantes. La guía de siete días enlazada existe y propone dos bases Lisboa/Oporto con Sintra como excursión.

Foto nueva: https://commons.wikimedia.org/wiki/File:Panoramic_View_of_Porto%27s_Ribeira_District_and_Dom_Lu%C3%ADs_I_Bridge_(55245842707).jpg — Michael Gaylard, CC BY 4.0. JPEG de 1280 × 853, 426.025 bytes, servido por Commons; no se retoca, solo se adapta el encuadre con CSS. Créditos en `src/data/photo-credits.ts` y `public/images/commons/CREDITOS.md`.

## Impacto esperado → esfuerzo → riesgo

Objetivo: que el visitante pueda elegir región, reparto de días y guía siguiente. No se promete un aumento de tráfico por ampliar texto. Esfuerzo medio; riesgo principal de sobrecargar móvil o alterar la identidad visual. Se conserva el shell, URL, enlaces editoriales útiles, canonical y CollectionPage; no se añade FAQ artificial ni una nueva herramienta.

## Prueba → decisión → siguiente acción

TypeScript y lint pasan; build de producción completado. Smoke con el servidor construido: 52/52 comprobaciones y 110 URLs correctas. Inspección en navegador de escritorio y móvil: un H1, sin desbordamiento horizontal, anclas operativas, ambas imágenes cargan y no aparece el retrato en la página ni en la imagen social. La primera configuración local con `--hostname 127.0.0.1` provocó un bucle de redirección de next-intl; usando el arranque estándar del proyecto (`next start --port 4173`) la previa y el smoke pasan, sin cambios al enrutado.

DECISIÓN: mostrar la previa y pedir aprobación visual antes de publicar. Tras publicar, registrar SHA/fecha; observar la misma URL en Search Console y las visitas a guías con consentimiento, sin atribuir causalidad con muestras escasas. No se crea seguimiento automático.
