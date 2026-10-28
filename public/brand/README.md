# Estaba en Lisboa — identidad editorial v1

Selección visual aprobada por José el 28 de octubre de 2026: evolución del logotipo original, no rebranding desde cero. Conserva el texto `estaba en Lisboa.`, la composición editorial en dos alturas y un disco terracota tras la terminación de `Lisboa.`.

## Paleta

- Azul noche: `#1A2B4A`
- Terracota: `#B8472E`
- Crema: `#F5EFE6`

## Archivos

- `/logo.svg` — máster principal **SVG con trazados reales**, sin fuentes externas.
- `/logo.png` — PNG transparente 1200 × 500, mantiene todas las rutas históricas de la web/correos.
- `/brand/logo-v1-horizontal.svg|png` — cabecera ancha.
- `/brand/logo-v1-inverso.svg|png` — texto crema sobre fondo oscuro.
- `/brand/logo-v1-monocromo.svg` — versión una tinta.
- `/brand/logo-v1-monograma.svg` — marca de perfil/favicons `L.` con disco terracota.
- `/icon-192.png`, `/icon-512.png`, `/apple-touch-icon.png` y `/favicon.ico` — iconos compatibles con navegadores y búsqueda.
- `/og-default.jpg` — tarjeta al compartir enlaces; conserva la fotografía editorial de Rua Augusta.

Los PNG se generan desde los SVG con `scripts/generate-brand-version1.py`. Fuentes Playfair Display del propio repositorio convertidas a trazados para preservar la tipografía exacta sin depender de las fuentes instaladas en cada dispositivo.

## Publicación y límites

Las referencias históricas a `/logo.png` en Navbar, Footer, edición inglesa, emails y schema siguen apuntando al mismo path actualizado. En Google, el favicon y el logotipo de Organization se publican en la web, pero su aparición o actualización en resultados depende del próximo rastreo de Google; no se garantiza una fecha.

No se cambian las fotografías, los contenidos, títulos, URLs, estructura de navegación ni intención SEO.
