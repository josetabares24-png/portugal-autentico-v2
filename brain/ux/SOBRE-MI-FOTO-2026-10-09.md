# Foto de José en /sobre-nosotros — 2026-10-09

**Estado: rama local `feat/sobre-mi-foto`. No publicado. Cambio visual: requiere aprobación de José (L-003).**

- HECHO: José aportó una foto real suya (`public/images/jose/jose-tabares-oporto.jpg`, 1200×1200 desde el original de 1500). Está hecha en **Oporto**, con el puente Dom Luís I detrás, no en Lisboa.
- DECISIÓN: la foto grande va solo en /sobre-nosotros, junto al bloque «José Tabares», con pie «En Oporto, junto al puente Dom Luís I.» para no dar a entender que es Lisboa. José la quiere discreta: nada en la Home ni en la cabecera de los artículos.
- Opcional (commit aparte, se puede descartar): avatar redondo pequeño (`jose-tabares-avatar.jpg`, recorte de la cara) junto a «Escrito por» al final de los artículos. Sustituye la decisión 3 de DESIGN-TWEAKS-2026-10-08 (bloque solo texto) porque ya hay foto real.
- Texto: titular «Una persona en Lisboa, no una fábrica de listas» y «Escribo desde la ciudad que estás preparando» cambiados por frases llanas (eran eslóganes, L-002). No se ha añadido biografía.
- PENDIENTE: 2-3 frases de José sobre cómo conoce Lisboa → constante `JOSE_LISBOA_INTRO` en `src/app/[locale]/sobre-nosotros/page.tsx` (vacía = no se muestra).
