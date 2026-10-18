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
