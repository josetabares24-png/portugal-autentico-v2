# Criterio editorial humano — artículos de restaurantes de Estaba en Lisboa

**Estado:** propuesta en rama de QOSQO, pendiente de aprobación y merge.  
**Fecha:** 2026-11-11.  
**Alcance:** reportajes y colaboraciones de restaurantes; preservar el marco LOCKED de Mente Lisboa y las fuentes propias de cada proyecto.

## Principios

1. **Una historia específica, no una plantilla.** Sinchi y QOSQO pueden ser restaurantes peruanos, pero sus artículos no deben compartir mecánicamente portada, estructura ni voz. El contenido debe surgir de datos y fotografías reales del local.
2. **Hechos antes que adjetivos.** Decir qué plato lleva un ingrediente, dónde está el negocio y cómo reservar. Evitar «experiencia única», «sabores inolvidables», «joya escondida», «viaje gastronómico» y eslóganes vacíos.
3. **Hablar como una persona.** Frases con longitud variada, verbos concretos y construcciones sencillas en español natural. Eliminar introducciones y conclusiones previsibles, transiciones automáticas y redundancias.
4. **La procedencia importa.** Distinguir información recibida del restaurante, fuentes externas y visitas propias. No insinuar que el autor estuvo allí, comió o fotografió platos si no sucedió.
5. **SEO sin repetir la palabra clave.** Título y ubicación claros; no introducir el nombre del restaurante ni «Lisboa» en cada párrafo. Resolver preguntas reales del lector.
6. **La foto puede hablar sola.** Una imagen no exige pie de foto. Añadirlo cuando identifica un plato ambiguo, aporta contexto o resuelve una duda. Mantener `alt` descriptivo para accesibilidad y crédito fotográfico cuando proceda; no duplicar «Foto: X» ocho veces.
7. **Sin inventar certezas.** Horarios, platos, carta, precios, antigüedad, hitos, reseñas y fotografías requieren verificación. No convertir materiales publicitarios del cliente en afirmaciones verificadas.
8. **Publicidad identificada, sin molestar.** Aviso comercial legible; contacto útil; enlaces patrocinados marcados. Sin promesas de ventas ni clasificaciones en buscadores.
9. **Podar sin piedad.** Cada párrafo debe aportar un dato, una explicación útil o contexto local verificable. Si es relleno o reitera el párrafo anterior, eliminarlo.
10. **Revisión oral final.** ¿Lo diría José a alguien que pregunta dónde comer? ¿Suena a guía útil y no a anuncio o resumen automático?

## Referencias revisadas en GitHub

- [btford/write-good](https://github.com/btford/write-good): revisión de redundancias, clichés, vaguedad y palabras que debilitan la prosa.
- [amperser/proselint](https://github.com/amperser/proselint): estilo directo, reducción de lenguaje comercial y repeticiones innecesarias.
- [tbhb/vale-ai-tells](https://github.com/tbhb/vale-ai-tells): referencias sobre patrones repetitivos de documentación asistida; su propio README avisa que tiene menor utilidad en escritura creativa y publicidad.

**Limitación:** estas herramientas están centradas en inglés y ninguna demuestra quién escribió un texto. Se usaron como criterios de revisión manual, no como correctores de español ejecutados ni como detector de autoría. No se incluyen como dependencias del proyecto.

## Aplicación a QOSQO (PR #141)

- Titulares concretos en lugar de lemas gastronómicos.
- Dos salas, renovación, sugerencia de platos compartidos y opciones vegetarianas, siempre atribuidos al negocio.
- Platos explicados por ingredientes y técnica usando los datos que aportó QOSQO; evitamos afirmaciones no contrastadas como «primer restaurante peruano de Portugal».
- De ocho imágenes en el componente, solo dos pies de foto identifican el ají de gallina y la corvina mostrados en pareja. Todas conservan `alt` y hay un crédito general a QOSQO.
- Evitados testimonios de visita o degustación, precios y horarios no confirmados.
- Se conserva la vista previa en `noindex`; no se fusiona ni se envía al restaurante sin autorización.

**Criterio de salida:** propuesta aprobada visualmente, contenido cotejado, fotoautorizaciones comprobadas y QA SEO/móvil realizado. No confundir un despliegue READY con una revisión editorial definitiva.
