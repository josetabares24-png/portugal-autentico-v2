# Brief: explorar el blog con menos esfuerzo

## Decision

Mejorar la portada y la paginacion del blog con el lenguaje editorial existente.
El sprint SEO ya esta integrado en main (60a39a1). Esta mejora visual se revisa
en una rama y Preview independientes.

## Evidencia y alcance

- Las paginas 2 a 6 repiten el destacado y las tres ultimas entradas antes de
  mostrar los nuevos resultados. Mantener ese bloque solo en la primera pagina.
- Los numeros de pagina miden 32 x 32 px. Ampliar las areas tactiles a 44 px y
  conservar enlaces HTML para la coleccion completa.
- Los titulos de las tarjetas acumulan cursivas; usar letra recta, mayor claridad
  de lectura y foco visible, conservando textos e imagenes.
- El formulario usa placeholders como unicas etiquetas y notas con blanco al
  30%. Anadir etiquetas persistentes, mejorar contraste y conservar su envio.
- Evitar huecos de listado cuando una categoria cabe en el bloque destacado.

No modificar articulos, metadata, canonicals, robots, sitemap, fotografias,
home, navbar, itinerarios, afiliacion ni APIs. No anadir dependencias.

## Criterios de aceptacion

1. Las paginas 2 a 6 muestran directamente sus resultados, sin repetir destacados.
2. Los mismos 51 articulos siguen accesibles. Snapshot de articulos antes y despues
   identico, incluyendo texto, SEO, enlaces e imagenes.
3. Paginacion por enlace, filtros, atras/adelante del navegador y recarga funcionan.
4. A 390, 768 y 1440 px: sin overflow, titulos completos, fotos proporcionadas y
   controles de al menos 44 px de alto.
5. Etiquetas y errores accesibles; comprobar el formulario con respuesta simulada
   en el navegador de pruebas, sin enviar suscripciones reales.
6. Typecheck, lint, build y smokes relevantes en verde.

## Criterio posterior

Evaluar navegacion entre articulos y salidas del blog tras publicarlo. No atribuir
una futura subida de clics de Google al cambio visual por si solo. Priorizar luego
las consultas y paginas con caida de clics demostrada en Search Console, usando
periodos comparables y sin modificar varias intenciones de busqueda a la vez.
