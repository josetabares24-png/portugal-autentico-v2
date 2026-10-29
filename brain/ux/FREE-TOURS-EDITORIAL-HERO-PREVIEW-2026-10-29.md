# Free tours — portada editorial en Preview (29-10-2026)

## Encargo y evidencia
José solicita pulir la parte superior de `/free-tours-lisboa` en modo Preview. En la captura de 1666 × 896 px se observan una fotografía demasiado oscurecida (overlay `bg-night/70`), información repetida (breadcrumb, eyebrow, dos CTA y tres señales) y distancia estética entre portada y buscador por fecha.

## Referencias revisadas
- `Liftof/editorial-ui` (MIT): claridad de jerarquía editorial y empleo de serif/espaciado; sin importar sistema ni efectos. https://github.com/Liftof/editorial-ui
- `Sandeepa-git/Travel-Website` (MIT): imagen real grande junto a tipografía Playfair y aire; no copiar hero oscuro ni Motion. https://github.com/Sandeepa-git/Travel-Website

Se usa la infraestructura Next.js/Tailwind que ya existe. No se añade dependencia, librería, efecto ni fotografía artificial.

## Implementación candidate
- Rama `preview/free-tours-editorial-hero-2026-10-29`.
- Nuevo componente `src/components/free-tours/FreeToursEditorialHero.tsx` solo para esta página.
- Dos columnas escritorio: texto azul noche en papel crema a la izquierda y foto real del Arco da Rua Augusta sin capa oscura a la derecha.
- Móvil: texto claro primero, foto debajo; CTA táctil de al menos 48px.
- Una sola narrativa: ruta + título + descripción + CTA fecha y enlace comparación + aviso discreto sobre propina.
- Se preserva `#disponibilidad`, `#comparar-rutas`, H1 semántico, mismo HERO_IMAGE para OG/Twitter, slug, JSON-LD, metadatos, buscador, campañas/referral, resultados y enlaces GuruWalk.
- El componente global `TourismBookingHero` permanece intacto para Entradas y otras rutas.

## Gate / verificación
- EXCLUSIVAMENTE Preview; ninguna fusión sin aprobación visual explícita (L-003).
- Comprobar TypeScript, Vercel Preview READY y HTML 200 con único H1, foto y ambos anchors.
- Revisar móvil 320 / 390 / 768 y escritorio 1440: saltos de línea, crop de imagen, desbordamiento, foco y continuidad del buscador.
- Si se publica después, medir clic de búsqueda y clic afiliado a GuruWalk sin atribuir cambios sin muestra; no editar SEO protegido E-023 ni afirmar mayor conversión.

## Decisión
Probar un hero editorial propio de Free tours, no rediseñar la web, no añadir productos ni tocar densidad comercial del buscador.
