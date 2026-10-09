# Títulos/metas de páginas con impresiones y CTR bajo + free tours en la Home — 2026-10-08

**Estado: PREPARADO EN RAMA LOCAL `feat/seo-titles-top-pages`. No publicado.**
Necesita decisión de José antes de merge: toca páginas en observación (E-001 a E-004) y la Home recién publicada (E-010, L-003).

## Datos usados

GSC facilitado por José, 28 días hasta el 7/10/2026: 94 clics, 7.401 impresiones, CTR 1,3 %, posición media 10,3, tendencia al alza (8-9 clics/día al final del periodo).

| Página | Clics | Impresiones | CTR |
|---|---:|---:|---:|
| /blog/tarjeta-navegante-lisboa | 23 | 1.060 | 2,2 % |
| /blog/estacion-oriente-lisboa | 9 | 601 | 1,5 % |
| /blog/time-out-market-lisboa | 6 | 616 | 1,0 % |
| /blog/como-pagar-en-portugal | 5 | 550 | 0,9 % |
| /blog/como-moverse-por-lisboa | 5 | 510 | 1,0 % |
| /blog/donde-tomar-cafe-lisboa | 2 | 214 | 0,9 % |
| /blog/graca-lisboa-que-ver | 1 | 199 | 0,5 % |

Consultas: «tarjeta navegante lisboa» 114 impr / 2 clics; «… que incluye» 11 / 1; «tarjeta navegante ocasional» 9 / 1. Horario del Metro sin clics: «a que hora abre el metro de lisboa» 9 impr; «a que hora cierra el metro de lisboa» ~11 impr en variantes; «a que horas abre o metro de lisboa» 2.

## Cambios

- Títulos y metas: tarjeta-navegante-lisboa, metro-lisboa-guia, time-out-market-lisboa (E-003), como-moverse-por-lisboa (E-001), como-pagar-en-portugal (E-002), estacion-oriente-lisboa (E-004), graca-lisboa-que-ver. Criterio: la consulta principal delante, ≤ 60 caracteres antes de « | Estaba en Lisboa», la meta dice qué resuelve la página sin superlativos ni cifras que no estén en el artículo.
- tarjeta-navegante-lisboa: nueva sección «¿Qué incluye la tarjeta Navegante ocasional?» con los títulos que Metro de Lisboa permite cargar (billete Carris/Metro 60 min, zapping 3-40 €, 24 h Carris/Metro, + Transtejo, + CP). Fuente rota `cartao-viva-viagem` (404) sustituida por `cartao-navegante-ocasional`.
- metro-lisboa-guia: el encabezado de horario pasa a «¿A qué hora abre y cierra el Metro de Lisboa?» con último acceso a la 01:00, frecuencia nocturna (~9-10 min desde las 22:30) y accesos secundarios que cierran a las 21:30. Fuente: metrolisboa.pt/viajar/horarios-e-frequencias, consultada el 8/10/2026. Sin FAQPage (D-037).
- como-moverse-por-lisboa: una línea con el horario del Metro y enlace a la guía del Metro.
- Home: segundo botón en el hero, «Free tours por fecha» → /free-tours-lisboa (`home_hero_secondary` / `free_tours_lisboa`). No cambia el directorio 2 + 3 + 3.

## No tocado

- donde-tomar-cafe-lisboa: E-006 RUNNING. Propuesta para cuando cierre: título «Dónde tomar café en Lisboa: bica, cafés clásicos y de especialidad».

## Riesgos y medición

- Cambiar títulos de E-001 a E-004 reinicia su lectura: anotar la fecha de despliegue como nuevo punto de partida y comparar 28 días cerrados contra los 28 anteriores por página y consulta.
- Google puede reescribir los títulos; mirar la SERP real antes de juzgar.
- La Home cambió el 8/10 (E-010): el botón nuevo se mide por separado con `home_hero_secondary`, pero mezcla la lectura de E-010 si se publica en la misma ventana.
