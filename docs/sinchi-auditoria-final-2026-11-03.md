# SINCHI · Auditoría SEO, editorial y visual para presentar la colaboración
Fecha de corte: 2026-11-03 · Autor: Estaba en Lisboa · Estado: propuesta privada (PR #140)

## Objetivo de la propuesta
Atraer búsquedas en español relacionadas con restaurantes peruanos en Lisboa y convertir lectores en visitas/reservas **en la web oficial de Sinchi**, no en TheFork. Evitar promesas de posicionamiento o reservas garantizadas.

## Fuentes contrastadas
- Carta de comida (SINCHI CARTA.docx) y carta de vinos (CARTA DE VINOS SINCHI.pdf), proporcionadas por Sinchi en Gmail el 02-11-2026.
- Sitio oficial: https://sinchi.eatbu.com/?lang=pt · lugar, teléfono, galería y sección «Reserva».
- Sección Consular de Perú en Lisboa: directorio de restaurante, dirección y teléfono.
- Google Maps: dirección y cambios de horarios para consultar ANTES de ir. Los horarios de otros directorios y capturas del propio sitio no son uniformes.
- Fotografías (seis): galería de la web de Sinchi. La segunda URL correcta es https://cdn.website.dish.co/media/00/1a/8383509/Sinchi-SC2-jpg.jpg (en la propuesta previa había una URL incorrecta).

## Auditoría de calidad final
- [x] Objetivo de búsqueda principal: «restaurante peruano en Lisboa», con Sinchi y Alcântara como términos naturales de búsqueda.
- [x] Título/description editorial de 59 y 150 caracteres, respectivamente, sin lenguaje sensacionalista.
- [x] Un solo H1 en ArticleHero, H2 estructurados mediante ArticleBody, navegación por tabla de contenidos.
- [x] No afirmar visita personal ni opiniones propias de los platos cuando no existe tal visita.
- [x] Precios y descripciones cotejados con la carta original, con fecha y advertencia de cambios.
- [x] Se retiró el menú completo tras la decisión editorial del usuario; solo cuatro ejemplos de platos.
- [x] Se retiró tabla de horarios que podía quedar desactualizada; instrucciones para verificar en Google Maps y confirmar con Sinchi.
- [x] Mapa con iframe diferido y botón de navegación a Google Maps; address + alt y título descriptivos.
- [x] Fotos originales enlazadas desde la web oficial, una URL reparada y miniaturas secundarias ocultas en móvil para evitar un bloque fotográfico excesivo.
- [x] Llamadas a la acción al sitio de Sinchi con parámetros UTM (visitas atribuibles si el sitio acepta/analiza dichos parámetros), WhatsApp con mensaje de referencia a Estaba en Lisboa.
- [x] Enlaces comerciales con rel="sponsored nofollow noopener noreferrer" y divulgación de colaboración comercial.
- [x] Sin enlaces al flujo de reservas de TheFork.
- [x] Vista previa fuera del catálogo de blog y sitemap, con robots noindex y sin canonical de producción inventado.
- [x] Página utiliza estructura editorial existente de Estaba en Lisboa; no se introduce código global ajeno al artículo.

## Fases pendientes de autorización y pruebas ANTES de producción
- [ ] Sinchi acepta texto/fotos y confirma que tiene derechos de uso para replicar su galería en Estaba en Lisboa.
- [ ] Sinchi confirma que su botón «Reserva» permite completar la solicitud; no se ha comprobado la reserva hasta el final.
- [ ] Comprobar en un navegador móvil real la carga de seis imágenes, visual del mapa, cookies y accesibilidad. Vercel READY confirma compilación, no estas experiencias.
- [ ] Confirmar precios y, especialmente, horario del día. No afirmar en el artículo los horarios cambiantes.
- [ ] Tras aprobación comercial y permisos: mover el artículo de /colaboraciones/previa-sinchi a la plantilla del blog publicada, asignar URL canónica definitiva y fecha de publicación, añadir a catálogo del blog (cronología) y sitemap, verificar robots indexable.
- [ ] Enlazar contextual y editorialmente desde una página temática de gastronomía pertinente; no usar enlaces sin contexto.
- [ ] Verificar que el canonical, OG, JSON-LD si aplica, hreflang y metadatos respetan el sistema existente. No usar Rating/Review falso ni copiar reseñas.
- [ ] Medir clics de salida por GA/GSC cuando sea posible, sin prometer posiciones ni ventas. La indexación puede demorar y nunca se garantiza.

## Presentación comercial
Enviar la URL de la vista previa que corresponda al último commit READY, explicando que es una propuesta y **no está publicada**. Pedir confirmación del material fotográfico y corrección de cualquier dato antes de cerrar publicación.

## Nota legal/técnica
Google Search Central recomienda rel="sponsored" para los enlaces pagados. Los derechos sobre fotos alojadas en una web de empresa no se presumen cedidos. El iframe de Google Maps debe respetar la política de consentimiento/cookies del sitio al publicar; verificar el comportamiento antes del lanzamiento.
