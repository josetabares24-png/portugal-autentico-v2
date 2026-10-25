# Cierre de experimentos E-001 a E-007 y E-012, y lote SEO del 25/10/2026

José, 25/10/2026: «Sí, publícalos y termina el experimento y ve si funcionó; haz todas las mejoras SEO que puedas para que monetizemos. Si tener Tiqets, Stay22 y GuruWalk es mucha confusión, quitamos Stay22, tú decides».

## Datos disponibles (y sus límites)

| Fuente | Ventanas | Nivel |
|---|---|---|
| A. `data/GSC-2026-09-22.md` | 26/08–22/09 (28 días) | página |
| B. `data/BLOG-SEARCH-2026-10-15.json` (Windsor) | 17/08–13/09 frente a 14/09–11/10 | página |
| C. Export de GSC del 25/10 (web, «últimos 3 meses») | 24/07–23/10 agregado | página y consulta, **sin serie diaria por página** |

C no permite cortar por fecha a nivel de página. «Resto» = C − las dos ventanas de B, es decir 24/07–16/08 más 12/10–23/10 mezclados: sirve solo como control de que lo visto en B no se invierte. Volumen bajo en todas las páginas: una diferencia de 2–3 clics no es una señal.

## Resultado por experimento

| ID | Página | B anterior (clics/impr/CTR/pos) | B posterior | Resto (C − B) | Veredicto |
|---|---|---|---|---|---|
| E-001 | como-moverse-por-lisboa | 3 / 1.028 / 0,29 % / 9,55 | 5 / 521 / 0,96 % / 8,67 | 6 / 889 / 0,67 % | **INCONCLUSIVE.** El CTR subió, pero las impresiones cayeron a la mitad y la diferencia son 2 clics. |
| E-002 | como-pagar-en-portugal | 7 / 896 / 0,78 % / 6,81 | 5 / 609 / 0,82 % / 7,41 | 8 / 971 / 0,82 % | **LOSS (no funcionó).** El CTR se quedó en ~0,8 %, bajaron los clics y las impresiones y la posición empeoró 0,6. |
| E-003 | time-out-market-lisboa | 4 / 300 / 1,33 % / 8,90 | 4 / 608 / 0,66 % / 8,80 | 1 / 132 / 0,76 % | **LOSS en CTR.** Las impresiones se duplicaron con los mismos clics. Contaminado por E-016 (15/10). |
| E-004 | estacion-oriente-lisboa | 3 / 302 / 0,99 % / 9,71 | 8 / 662 / 1,21 % / 9,22 | 0 / 318 / 0 % | **INCONCLUSIVE, tirando a positivo.** En B, 8 clics frente a 3. El resto del periodo da 0 clics en 318 impresiones, así que no se puede dar por ganado. |
| E-005 | arquitectura-manuelina-lisboa | 2 / 518 / 0,39 % / 9,09 | 1 / 55 / 1,82 % / 7,96 | 1 / 58 | **LOSS (cobertura).** Las impresiones cayeron un 89 % en B. «estilo manuelino» suma 122 impresiones a la posición 10,0 en C. |
| E-006 | donde-tomar-cafe-lisboa | 2 / 156 / 1,28 % / 11,36 | 2 / 284 / 0,70 % / 10,86 | 2 / 230 / 0,87 % | **INCONCLUSIVE.** Más impresiones y algo mejor de posición, sin más clics. B posterior empieza el 14/09 y el cambio es del 23/09. |
| E-007 | donde-comer-barato-lisboa | 2 / 241 / 0,83 % / 19,6 | 0 / 76 / 0 % / 27,01 | 3 / 249 / 1,2 % | **LOSS.** La posición empeoró 7,4 y las impresiones cayeron un 68 % en B. |
| E-012 | 7 títulos + Home | — | — | — | **CANCELLED.** Nunca se publicó como lote. D-076 recortó títulos; E-022 y E-023 lo sustituyen. |

No se revierte nada. En E-002, E-003, E-001, E-004 y E-005 la siguiente iteración son los títulos de E-023. En E-007 no se toca: es una página de comida (sin recomendaciones atribuidas a José) y no vende.

Siguen RUNNING porque su métrica son clics o reservas de afiliado, que no tenemos (Windsor bloqueado, paneles sin exportar): E-009, E-010, E-013, E-014 (ahora con D-080), E-015, E-018 y E-020.

## Lote publicado con este cierre

- **Títulos y metas (E-023)**
  - cómo pagar: «Cómo pagar en Portugal 2026: ¿tarjeta o efectivo?»
  - cómo moverse: «… qué transporte usar y cuánto cuesta», con 1,90 / 1,72 / 7,25 € en la meta, que salen del cuerpo
  - Oriente: «Gare do Oriente Lisboa: trenes, metro, autobuses y qué ver»
  - Time Out: «menú, horario y si merece la pena», con 10:00–00:00 comprobado el 25/10 en timeoutmarket.com
  - manuelino: «Estilo manuelino: qué es, características y dónde verlo»
  - Graça: «Graça, Lisboa: qué ver, Miradouro da Graça y ruta a pie»
  - vida nocturna: «Vida nocturna en Lisboa: dónde salir de noche por zonas»
  - free tours: «Free tours en Lisboa: Centro, Alfama y Belém, reserva gratis», con «free walking tours» en la meta (la consulta está en la posición 3,5 con 0 clics)
- **Stay22 (D-080).** El script LinkSwap ya no se carga en todo el sitio. Solo se carga en los artículos con bloque de alojamiento por barrio: donde-alojarse-en-lisboa, nochevieja-lisboa y lisboa-en-7-dias. Los bloques manuales ya solo estaban ahí.
- **Enlaces internos**
  - patinetes (tenía 1 enlace entrante) desde cómo moverse y mejores apps
  - Lisboa en enero desde mejor época
  - free tour de Belém desde la guía de la Torre de Belém
- **`/llms.txt`.** Guía de la web para asistentes, sin credenciales inventadas. Se excluye del proxy de idioma.
- **Comprobaciones sin cambio**
  - Luces de Navidad 2025: la Câmara Municipal de Lisboa dice que estuvieron hasta el 6 de enero. El 4 de enero de Visit Lisboa es el cierre de Wonderland. El texto ya estaba bien.
  - Autobús a Óbidos: 9,45 € Campo Grande–Óbidos según la tabla de la Rodoviária do Oeste (PDF de la Rápida Verde), y cerca de 1 h en su horario. Se mantiene.
  - Fechas de 2026 de luces y Wonderland: no hay fuente oficial, sigue «sin fecha».

## Pendiente

- LCP móvil de Home y free tours (3,3–4,1 s en laboratorio). Las dos imágenes ya llevan `priority` y `fetchPriority="high"`. Hace falta un perfil de rendimiento real antes de tocar nada.
- Frases en primera persona de Navidad y Pena: José no ha confirmado que sean suyas.
- Export de GSC por página y fecha (o Windsor) para leer E-021, E-022 y E-023 a 28 días.
