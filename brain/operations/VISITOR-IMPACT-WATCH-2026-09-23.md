# Visitor Impact Watch — cambios que afectan al viajero

Actualizado: **2026-09-23**

## Objetivo

Mantener Estaba en Lisboa útil cuando cambia la ciudad sin convertir el blog en un feed de noticias ni reescribir páginas por ansiedad SEO.

Cadena operativa:

**CAMBIO → FUENTE OFICIAL → PÁGINA AFECTADA → IMPACTO → ACCIÓN → VERIFICACIÓN → REVISAR DE NUEVO**

## Qué entra

Registrar un cambio cuando pueda alterar una decisión real del visitante:

- cierre o reapertura;
- acceso o transporte;
- precio/tarifa;
- horario;
- reserva obligatoria;
- cambio de ruta/parada;
- restricción de vehículo;
- requisito de entrada;
- producto comercial que deja de corresponder con la realidad.

No registrar:
- rumores;
- cambios cosméticos;
- eventos pequeños sin relación con contenido existente;
- noticias que no cambien una decisión del viajero.

## Jerarquía de fuentes

1. operador/monumento/entidad oficial;
2. autoridad pública;
3. organismo oficial de turismo;
4. fuente periodística fiable para descubrir un cambio, nunca como sustituto permanente si existe fuente primaria;
5. reportes de usuarios solo como pista para verificar.

## Severidad

### P0 — acceso/seguridad
Cierre, suspensión, acceso imposible, requisito que puede invalidar una entrada o causar pérdida importante de tiempo/dinero.

Acción:
- verificar inmediatamente;
- corregir cualquier página materialmente falsa;
- no esperar una ventana SEO si el dato vigente está mal.

### P1 — decisión económica/operativa
Tarifa, horario, reserva, ruta, transporte, precio o condición que cambia la planificación.

Acción:
- verificar fuente primaria;
- corregir si la página publica un dato falso;
- si ya está correcta, registrar sin tocarla.

### P2 — contexto útil
Cambio real pero no decisivo.

Acción:
- backlog; no abrir un experimento solo por actualizar una frase.

## Duración

- **Temporal corto:** <14 días. Evitar contaminar un artículo evergreen salvo que bloquee una ruta crítica. Preferir aviso temporal o no publicar.
- **Temporal largo:** >=14 días o sin fecha de fin. Puede justificar aviso en páginas afectadas.
- **Persistente:** tarifa, regla, acceso, producto o infraestructura sin fecha próxima de reversión. Integrar en contenido canónico.

## Regla de experimentos

Una corrección factual no es un experimento SEO.

Si una página está protegida por una ventana de medición:
- no reescribir estructura/título/CTA;
- sí corregir un hecho materialmente falso;
- registrar la corrección como confound;
- mantener el parche mínimo.

## Registro vivo

| ID | Cambio verificado | Fuente oficial | Impacto | Páginas/activos | Estado | Próxima revisión |
|---|---|---|---|---|---|---|
| VI-001 | Elevador de Santa Justa / miradouro temporalmente cerrado | https://www.carris.pt/viaje/alteracoes-de-servico/elevador-sta-justa-miradouro-encerrado/ | P0 | /actividades/elevador-santa-justa; /blog/baixa-lisboa-que-ver; /blog/monumentos-de-lisboa; miradores | **ACTUADO**: actividad ya tenía estado; monumentos ya tenía aviso; Baixa corregida 2026-09-23 | comprobar semanalmente hasta reapertura |
| VI-002 | Tarifas Metro 2026: Carris/Metro 1,90 €; zapping Metro 1,72 €; contactless Metro 1,92 €; 24h Carris/Metro 7,25 € | https://www.metrolisboa.pt/2025/12/19/novas-tarifas-2026/ | P1 | tarjeta-navegante; como-moverse; presupuesto; aeropuerto | **VERIFICADO / SIN CAMBIO**: tarjeta Navegante ya coincide con tarifa oficial | al anunciar tarifas 2027 o cambio extraordinario |
| VI-003 | Pena: interior con fecha/hora; prever ~30 min entre entrada del parque y palacio; acceso particular restringido | https://www.parquesdesintra.pt/pt/planear-a-visita/bilhetes-palacio-da-pena/ | P1 | /blog/sintra-desde-lisboa; producto Pena; actividad Sintra | **VERIFICADO / SIN CAMBIO**: guía de Sintra ya explica estas reglas | mensual o ante aviso oficial |
| VI-004 | 15E acortado temporalmente a Belém del 22–29 septiembre después de las 21h | https://www.carris.pt/ | P1 temporal corto | Belém; movilidad; Pastéis de Belém | **NO EDITAR EVERGREEN**: expira pronto y no bloquea acceso diurno | 2026-09-30: cerrar registro |
| VI-005 | Oceanário: 10:00–20:00; última entrada 19:00; precios variables por franja; 5% online según web oficial | https://oceanario.pt/planear-visita/ | P1 | actividad Oceanário; tickets; contenido familiar | **VERIFICADO / SIN CAMBIO**: prioridad comercial ya usa fuente oficial y precio variable | mensual |

## Aprendizaje del primer pase

La utilidad de este sistema no está en publicar más.

El valor aparece en tres decisiones:
1. detectar una contradicción real antes de que envejezca;
2. no tocar una página que ya está correcta;
3. no meter una incidencia de una semana dentro de una guía que debe durar años.

## Siguiente expansión

Añadir fuentes de vigilancia por familia:
- Carris / Metro / CP / Transtejo;
- monumentos estatales y Castelo;
- Parques de Sintra;
- Oceanário;
- aeropuerto;
- Lisboa Card / Visit Lisboa cuando afecte el producto;
- eventos solo si alteran movilidad/acceso o ya existe una página canónica relacionada.
