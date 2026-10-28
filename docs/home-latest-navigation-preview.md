# Home automática y navegación breve —28/10/2026

José señala que Lisbon ByBoat no aparece en Home y que seis entradas principales confunden. Se responde desde la implementación real: ByBoat sigue en borrador/Preview, y el bloque de la Home usa tresIDs fijos (Historia, Olaias, souvenirs). Añadir un registro al blog no cambiaba esa selección. No es un fallo de indexación o una publicación perdida.

## Decisión

En el mismo candidatoPR120, en commits separados, sustituir únicamente el bloque final del blog por sus tres artículos publicados más recientes. Fecha de publicación `fecha`, nunca `dateModified`; fechas futuras/inválidas, redirects y noindex no se promocionan. El selector ordena sin mutar el catálogo y conserva su orden en empates. La Home estática se actualiza con el siguiente build al publicar un nuevo registro, sin tener que editar otra vez una selección manual. No se añade CMS, polling, rutas o contenido generado.

ByBoat sigue excluido mientras figure como borrador noindex. Al autorizar y preparar su publicación, retirar esa marca lo hará elegible automáticamente; este cambio no lo publica ni simula una publicación. Se conservan el hero, la promesa, las ocho guías, la sección de reservas, la selección estacional, metadata y schema de Home. El bloque conserva su composición y añade fecha visible.

Menú español con cuatro entradas: Lisboa, Escapadas, Planifica y Entradas y tours. Lisboa agrupa las cinco respuestas anteriores y Guías e historias hacia /blog; las historias siguen dentro de la portada editorial. El último desplegable contiene Entradas y Free tours, con los mismos destinos. No se eliminan páginas ni se añaden landings. Revisa la propuesta históricaD060/D061 por petición actual de José; L003 continúa vigente. Menú inglés y sus equivalencias intactos.

La navegación completa cabe desde1024px; móvil muestra cuatro filas principales. Dos desplegables de una columna, sin mega menú. Cierre al navegar, salir con foco, pulsarEscape, clicar fuera o cambiar de breakpoint. Escape devuelve foco al control; los subgrupos móviles se reinician al cerrar. Misma marca, logo y altura; sin cambios de CSS global.

## Evidencia y límites

Baseline de aplicacióncc61ffe/09936f0 y capturas en audit-evidence/home-navigation-2026-10-28. HECHO: seis controles más idioma en escritorio; tres artículos fijos en Home. HIPÓTESIS: cuatro entradas con agrupaciones claras reducen confusión, y la selección por fecha mantiene la portada actualizada. No efecto de tráfico o ventas medido.

QA prevista: fechas/orden/empates/estado editorial, contrato de navegación actualizado a la jerarquía pedida, build/TypeScript/lint, enlaces/SEO y visual en móvil/tablet/escritorio, incluyendo foco y cierre de menús. El importJSON de la política declara su tipo para permitir su uso directo en los checksNode; los datos y la lógica de URL no cambian. Preview antes de publicar. Sin correo, reservas o configuración externa modificados.
