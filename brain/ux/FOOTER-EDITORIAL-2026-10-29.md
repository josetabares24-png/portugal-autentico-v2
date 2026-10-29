# Cierre editorial global — 29 de octubre de 2026

## Solicitud y evidencia
José observa en captura de la Home que el Footer azul noche con patrón de cruces se percibe pesado y poco editorial. La marca en el pie aparece demasiado pequeña, y los enlaces secundarios compiten con un fondo de mucho contraste. Petición explícita: mejorar el pie en todas las páginas, consultando repositorios de GitHub.

## Alcance
- Se modifica `src/components/Footer.tsx` (páginas españolas compartidas) y `src/app/en/layout.tsx` (piloto inglés con Footer propio).
- Se elimina el fondo `bg-night bg-azulejo-pattern-gold`; se usa papel cálido `#eee8df` con texto azul noche.
- Logo existente `/logo.png` a tamaño visible mayor; no sustituir la versión aprobada ni alterar header, metadata o iconos.
- Tres áreas: marca, enlaces para planificar, enlaces de la publicación; datos legales al final.
- Los 4 enlaces de Planificar, 3 del sitio, Instagram y 4 legales se conservan sin cambio de URL; cero dependencias, scripts o imágenes nuevos.\n- En inglés se mantiene íntegra la explicación de afiliados, los enlaces legales en español y el acceso al perfil del autor; solo cambia su presentación visual.
- Accesibilidad: regiones `nav` con títulos referenciados; enlaces enfocados visiblemente, mayor contraste, zonas táctiles de 36/40 px, dos columnas móviles.
- El padding inferior móvil se conserva para el control flotante de cookies, como en el footer anterior.

## Referencias de GitHub, no dependencias
- `themesberg/flowbite`, documentaciones del componente Footer: estructura semántica y adaptabilidad. https://github.com/themesberg/flowbite/blob/main/content/components/footer.md
- `tailwindlabs/tailwindcss`: utilizar utilidades existentes para no instalar sistemas visuales nuevos. https://github.com/tailwindlabs/tailwindcss

No se copió una plantilla o licencia de un tercero, ni se introdujeron componentes shadcn de aspecto SaaS. El diseño conserva la identidad visual de Mente Lisboa.

## Riesgos y verificación
- Estado: candidato en Preview, no producción sin visto bueno visual de José (L-003).
- Confirmar Footer español en Home, Blog y Portugal, y el Footer independiente en rutas /en; verificar en 320, 390 y 1440 px.
- Comprobar ausencia de overflow, contraste, foco y enlaces legales en móvil, sin solapamiento del botón flotante de cookies.
- Comprobar typecheck, lint y smoke de navegación/SEO del repositorio según workflows existentes.
- No adjudicar una mejora SEO o de conversiones al cambio visual sin datos; URLs, SEO y afiliados deben conservarse.

## Decisión
Modificar el cierre global mediante una única plantilla compartida; no rediseñar toda la web ni ampliar CTA de afiliación. Conservar la identidad de logo aprobada por José, sin inferir que los archivos de una conversación previa están publicados.
