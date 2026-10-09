# Lado humano: arreglos sin input de José — 2026-10-09

**Estado:** rama local `feat/lado-humano`, sin publicar. José verá capturas antes (cambio visual en la plantilla del blog, L-003).
**Origen:** revisión editorial `/workspace/revision-lado-humano.md` (se nota una persona 4/10, da gusto leerlo 5/10). José aprobó aplicar lo que no necesita respuestas suyas.

## Qué cambia
- **«Lo esencial»**: ya no copia los 3 primeros puntos de la primera lista (se leían dos veces en la primera pantalla). Solo sale si el artículo tiene `resumen` propio; ahora ninguno lo tiene, así que la entradilla hace de respuesta rápida.
- **Bloques de reserva**: como mucho uno arriba (`position: 'after-summary'`), pintado al cerrar la primera sección con texto, nunca antes del contenido. Pena: la excursión baja a «Si prefieres una excursión organizada». Nochevieja: el velero baja a «Otros sitios para ver los fuegos». Óbidos: la excursión baja a «Cómo ir desde Lisboa». Navegante: un solo bloque de Lisboa Card.
- **Nota de afiliado**: una vez por página, en primera persona («Si lo haces desde aquí, me llevo una pequeña comisión y a ti te cuesta lo mismo. Solo enlazo lo que le recomendaría a un amigo»). Los demás bloques solo dicen «Reservas en X». También en /que-ver-en-lisboa.
- **Newsletter**: un formulario por artículo (el de mitad del texto); fuera el del pie.
- **Confianza**: neutralizadas frases en primera persona sin confirmar («He probado 15 pastelerías», «He visto cientos de atardeceres», «He visto familias…», «mi favorita, el tranvía 12», «Mi consejo definitivo…», «Mi consejo: empieza por dos», la anécdota del invierno). Home: fuera «Fotografías propias». Monumentos: alineado con la guía de Jerónimos (la entrada comprada no evita la cola de acceso) y sin superlativos de folleto. Sobre mí y CTA del pie en primera persona del singular; URL sin cambios. «Vivo en Lisboa» se mantiene hasta que José confirme.
- **Cautela repetida**: Jerónimos «oficial» en el cuerpo 13→3; Navidad «2025» en el cuerpo 31→25 y «oficial» 8→0; Nochevieja «2025» 21→17.
- **Frases reales de José**: «Yo no me voy de Belém sin comerme unos pastéis de nata» en pasteles-de-belem; en Óbidos, que todavía no ha estado y que la guía sale de fuentes oficiales.

## Qué medir (baseline: GA4/GSC al 9/10/2026)
- Clics de afiliado por artículo (`affiliate_click`, `affiliate_content` con sufijo `-arriba` para el bloque de arriba) en Navegante, Jerónimos, Pena, Sintra y Oriente: el bloque de arriba baja 1-2 pantallas y ya no hay salto «Si vas a reservar ↓».
- Altas a la newsletter por artículo (solo queda `article_inline`).

## Pendiente (necesita a José)
Las 10 preguntas de la revisión, sus fotos y confirmar «Vivo en Lisboa».
