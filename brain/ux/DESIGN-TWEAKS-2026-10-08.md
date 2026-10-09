# Ajustes de diseño propuestos — 2026-10-08

**Estado: rama local `feat/design-tweaks` (incluye las ramas de bloques de reserva y de títulos). No publicado. Cambios visuales: requieren aprobación de José (L-003) y tocan la Home de E-010.**

1. Hero en móvil: degradado oscuro inferior solo en móvil para que el titular blanco no pierda contraste sobre las fachadas claras. Escritorio sin cambios.
2. Home: fila «Imprescindibles para reservar» bajo el hero (free tour por el centro, free tour por Belém, Sintra). Enlaces internos a /free-tours-lisboa#ruta-… y /blog/sintra-desde-lisboa, medidos como `home_essentials`. La Home no lleva enlaces de afiliado directos. Ojo con D-037: la foto de Sintra (`/images/sintra-palacio-turistas.jpg`) y la de Belém (`/images/actividades/torre-de-belem-lisboa.webp`) no están en `lisboa-originales`; confirmar que son propias o cambiarlas.
3. Autor: bloque solo texto (sin foto ni avatar de iniciales), por decisión de José: no tiene foto por ahora. Si aporta una real, se añade entonces; nunca fotos de banco ni generadas.
4. «Lo esencial»: si el artículo tiene bloque de reserva, línea final «Si vas a reservar: …» que salta al bloque (el enlace de afiliado y su aviso siguen en el bloque).
5. «Preparar mi viaje» del hero no lleva a /planifica-tu-viaje: baja a `#guia-practica` (directorio de la Home). Se mantiene; la salida comercial es el botón secundario «Free tours por fecha» (rama de títulos).
