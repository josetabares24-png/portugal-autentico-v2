# SEO Growth Plan — objetivo 1.000 impresiones/día

Actualizado: 2026-09-21

## Objetivo

Hacer crecer `estabaenlisboa.com` hasta una media sostenida de más de 1.000 impresiones orgánicas diarias sin perseguir una sola keyword, sin publicar contenido masivo y sin sacrificar precisión editorial.

El objetivo de medición es **28.000+ impresiones en una ventana de 28 días**, no un pico aislado de un día.

## Baseline conocido

Último baseline de Search Console verificado en el proyecto: 2026-09-03.

- 7 días: 2.139 impresiones (~306/día), 14 clics, posición media ~11,6.
- 28 días: 6.621 impresiones (~236/día), 62 clics, posición media ~10,9.
- CTR reciente aproximado del periodo de 7 días: ~0,7 %.

No tratar estas cifras como datos actuales. Antes de tomar decisiones de poda, noindex, fusiones o cambios grandes de title, revisar Search Console otra vez.

## Principios

1. Exprimir URLs que ya reciben impresiones antes de crear decenas de artículos.
2. Priorizar queries en posiciones 4–15 y después 15–30.
3. Construir autoridad temática sobre Lisboa mediante clusters conectados.
4. Mantener URLs posicionadas salvo necesidad clara.
5. No publicar precios, horarios o condiciones variables sin fecha y fuente.
6. No inventar experiencia local, precios medios, tiempos exactos o superioridad de un negocio.
7. No usar noindex ni borrar páginas solo porque parezcan débiles: comprobar GSC primero.
8. No perseguir PageSpeed 100 si el cuello de botella real es contenido, intención o enlazado.
9. Medir CTR además de impresiones.
10. Cada artículo nuevo debe tener enlaces entrantes y salientes útiles.

## Trabajo ya implementado

### Arquitectura y on-page

- Canonical autorreferente para páginas paginadas del blog.
- Home reforzada como hub de “qué ver en Lisboa”.
- Tarjetas de barrios de la home enlazan a guías específicas.
- Sitemap con fechas UTC estables.
- `datePublished` y `dateModified` separados cuando corresponde.
- Presupuesto 2026 revisado para no depender de rangos antiguos de alojamiento.
- Guía de alojamiento revisada para retirar precios medios y afirmaciones no respaldadas.

### Nuevos clusters

Primera expansión:

- Lisboa en 4 días.
- Tarjeta Navegante Lisboa 2026.
- Graça: qué ver.
- Baixa: qué ver.

Segunda expansión:

- Lisboa en 5 días.
- Lisboa cuando llueve.
- Parque das Nações: qué ver.
- Metro de Lisboa 2026.

### Rendimiento / arquitectura pública

- Clerk retirado del layout y navbar públicos.
- Clerk limitado a rutas que requieren autenticación.
- Mensajes de idioma estáticos en sitio monoidioma.
- Cookie de locale desactivada.
- Causa del SSR público identificada: `next-intl` resolvía el locale desde el request.
- Se añadió `setRequestLocale(locale)` tras validar el locale.
- Build verificado con Next.js 16.3.5: home, artículos, actividades, itinerarios y páginas públicas pasan de `ƒ Dynamic` a `● SSG`.
- `/[locale]/blog` permanece dinámico porque su paginación usa `searchParams`; las páginas de artículos sí quedan prerenderizadas.


### Enlazado

- Nuevos clusters conectados con itinerarios, movilidad, Oriente, Sintra y barrios.
- Se añadieron entradas relevantes hacia páginas antes débiles como Lisboa vs Porto, novedades 2026 y evitar turistadas.
- Los artículos nuevos deben seguir recibiendo enlaces desde pilares conforme ganen impresiones.

## Estado editorial real

Corrección de auditoría del 2026-09-21: el conteo inicial de páginas fallback fue incorrecto porque el script de comprobación solo detectaba claves con comillas simples y omitía artículos definidos con comillas dobles.

Estado verificado después de corregir el parser:

- 60 entradas publicadas en `blogPosts`.
- 60/60 tienen contenido editorial explícito en el mapa de artículos.
- El último fallback real era `/blog/restaurantes-romanticos-lisboa`; ya fue sustituido por una guía editorial completa.
- El generador fallback genérico queda eliminado para impedir que una futura entrada sea indexable únicamente por existir en `blogPosts`.

A partir de ahora, una entrada publicada debe tener contenido editorial explícito antes de poder resolverse como artículo. Las decisiones de reescritura, fusión, redirección, noindex o retirada siguen dependiendo de datos reales de Search Console, no de un supuesto estado “legacy”.

## Pilares a vigilar en Search Console

- /
- /blog/donde-alojarse-en-lisboa
- /blog/como-moverse-por-lisboa
- /blog/lisboa-card-vale-la-pena
- /blog/aeropuerto-lisboa-al-centro
- /blog/que-hacer-gratis-en-lisboa
- /blog/mejores-miradores-lisboa
- /blog/sintra-desde-lisboa
- /blog/presupuesto-viajar-lisboa
- /itinerarios/lisboa-1-dia-lo-esencial
- /itinerarios/lisboa-2-dias-completo
- /itinerarios/lisboa-3-dias-premium
- /blog/lisboa-en-4-dias
- /blog/lisboa-en-5-dias
- /blog/tarjeta-navegante-lisboa
- /blog/metro-lisboa-guia

## Próximas oportunidades editoriales

Validar con GSC/SERP antes de producir:

- Lisboa en 6 días.
- Cómo llegar a Belém.
- Cais do Sodré: qué ver.
- Óbidos desde Lisboa.
- Nazaré desde Lisboa.
- Costa da Caparica desde Lisboa.
- Lisboa en Navidad.
- Lisboa en diciembre.
- Estrela: qué ver.
- Príncipe Real: qué ver.
- Lisboa con poco presupuesto.

No crear todas de una vez. Publicar por lotes pequeños y observar qué empieza a recibir impresiones.

## Modelo de 1.000 impresiones/día

No es una previsión; es una forma de repartir el objetivo:

- 10 pilares × 40 impresiones/día = 400.
- 15 URLs secundarias × 20 = 300.
- 25 long-tail × 8 = 200.
- Home y otras consultas = ~100.

Total de referencia: ~1.000 impresiones/día.

La mezcla real debe salir de Search Console.

## Revisión semanal

Cada semana revisar:

- impresiones totales;
- clics;
- CTR;
- queries nuevas;
- queries posición 4–15;
- queries posición 15–30;
- páginas que ganan/pierden impresiones;
- nuevas URLs que empiezan a aparecer;
- páginas con muchas impresiones y CTR bajo.

## Prohibiciones

- No cambiar slugs posicionados sin razón fuerte.
- No borrar contenido en masa.
- No publicar artículos casi idénticos para variaciones de keyword.
- No crear backlinks spam.
- No rellenar artículos con FAQs por sistema.
- No inventar precios, horarios, experiencia personal o “secretos”.
- No afirmar causalidad entre un cambio de diseño y una caída de GSC sin evidencia.
