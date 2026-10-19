# Sistema editorial — candidato Fases 3/4

Respuesta primero, contexto y experiencia después, monetización contextual al final. La voz procede del sitio; las fuentes verifican hechos y permanecen accesibles en Datos verificados. No inventar experiencias ni fechas de comprobación.

## Componentes y tipos

ArticleEssentials es un componente de servidor, sin JavaScript cliente. Recibe tipo, título opcional y 4–7 pares label/value definidos por página. Usa section, h2 y dl/dt/dd; no iconos, tarjetas, precios comunes ni fuentes embebidas. Valores de texto: no HTML arbitrario ni CTA en esta caja.

Tipos disponibles: transport, place, neighborhood, food, itinerary, event, culture y practical. El tipo no obliga a poner un precio ni a renderizar una caja. Historia/cultura usa por defecto En 30 segundos; puede describir qué ocurrió, cuándo, dónde y por qué importa. Transporte puede resumir horarios/títulos; barrio, ambiente/transporte; comida, para quién/precios; evento, fechas/lugar; itinerario, ritmo/zonas. No activar variantes en todo el catálogo sin revisión.

El piloto usa cuatro variantes: transport, food, practical y neighborhood (vida nocturna organizada por zonas). Movilidad y vida nocturna emplean la misma semántica de pares como decisión por destino/ambiente, sin añadir una segunda tabla repetida. El contenido concreto vive en src/data/editorial-pilot.ts, con índices de bloques originales como trazabilidad.

## Estructura

H1 y bajada, imagen real, autor/actualización, respuesta directa, Lo esencial cuando aporta, desarrollo, criterio/recomendación ya existente, relacionados, fuentes y autor. La estructura se adapta a la intención. No inventar una recomendación personal para rellenar una sección. Conservar IDs de encabezados y enlaces al reorganizar.

CTA: D-045, después de resolver la intención; candidato conservador de módulo final tras FAQ. Fuentes: un único ArticleSources, primeras cinco y resto desplegable, sin eliminar las reales. Autor: nombre real y perfil existente; fechas no se renuevan por retocar CSS. Newsletter pausada por D-044.

## Mantenimiento y límites

Las tarifas copiadas a un resumen requieren revisar el bloque original y el perfil juntos. No generar perfiles automáticamente. En el piloto, los tests comprueban siete activaciones exactas, 4–7 filas, ausencia de afiliación en el resumen y conservación del contenido factual, metadata y schema. Ningún rollout a otras URLs hasta aprobación. No nuevos slugs, FAQ ni ratings. Navegación, home, portada del blog y demás grupos siguen fuera de estas fases.

## Rollout autorizado — Fase 6A

Después de entregar el piloto, José indicó continuar. El grupo de transporte añade tres perfiles explícitos en src/data/editorial-transport.ts: aeropuerto, 28E y patinetes. Se conserva la tabla ya útil de Cómo moverse por Portugal. El modo de QA suma esas tres activaciones a las siete del piloto. No expandir a otras categorías por una condición genérica ni usar el registro como generador de contenido. [Revisión del lote](editorial-phase6-transport-review.md).

## Rollout autorizado — Fase 6B

Continuación de José: seis perfiles manuales de barrios en src/data/editorial-neighborhoods.ts. Resumen de visita, sin imponer precio o duración donde no existen datos. No nueva entradilla ni cambio de orden del cuerpo. Se conserva la intención de alojamiento en su página propia; Belém y la comparativa general quedan REVIEW por dudas documentadas, sin fusionar ni borrar. QA espera exactamente 16 perfiles entre 72 superficies, con conservación estricta del orden en los dos lotes de Fase 6. [Revisión del lote](editorial-phase6-neighborhoods-review.md).

## Rollout autorizado — Fase 6C

Continuación de José: comer barato y Pastéis de Belém reciben seis pares cada uno en src/data/editorial-food.ts. Importes y horario contrastados puntualmente con los negocios; no generalizar referencias históricas a precios garantizados. Time Out conserva el piloto. Café y gastronomía quedan pendientes de dudas específicas; vinos/bacalhau y las consolidaciones conservan Fase 7. No reactivar el antiguo artículo de natas, que ya redirige. QA espera 18 perfiles exactos y mantiene contenido/orden/SEO. [Revisión del lote](editorial-phase6-food-review.md).
