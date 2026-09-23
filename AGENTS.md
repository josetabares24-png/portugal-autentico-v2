# Agent instructions — Estaba en Lisboa

El sistema operativo del proyecto se llama **Mente Lisboa**.

## Antes de una tarea importante

No propongas desde una hoja en blanco.

Debes:

1. leer `brain/MENTE-LISBOA.md`;
2. leer `brain/LOCKED-DECISIONS.md`;
3. revisar `brain/01-CURRENT-STATE.md`;
4. revisar `brain/02-METRICS.md` y el snapshot más reciente de `brain/data/`;
5. revisar decisiones/aprendizajes relevantes;
6. inspeccionar el código y/o producción real de la superficie afectada;
7. separar HECHO / HIPÓTESIS / DECISIÓN / PREFERENCIA;
8. solo entonces diagnosticar y proponer.

Si una propuesta contradice una decisión LOCKED, señala el conflicto y argumenta por qué debería reconsiderarse. Nunca la sustituyas silenciosamente.

## Reglas no negociables

- Producto y crecimiento antes que actividad.
- Datos reales antes que intuición cuando existan.
- No rediseñar por estética.
- Cambios visuales importantes requieren aprobación explícita antes de merge.
- Voz humana: si José no lo diría hablando con alguien, no se publica así.
- Fotografía real antes que IA cuando se representa una realidad.
- No inventar experiencias, datos, precios, horarios o autoridad local.
- No hacer SEO de relleno.
- No conservar producto por coste hundido.
- No borrar/noindexar/redirigir URLs con demanda sin revisar Search Console, enlaces y destino.
- Registrar baseline antes de un cambio importante.
- Preferir experimentos pequeños y atribuibles.
- Antes de merge, ejecutar como mínimo `npm run typecheck` y los smoke tests relevantes.

## Formato de análisis esperado

Para revisiones importantes usar:

DIAGNÓSTICO → EVIDENCIA → OPORTUNIDAD → PROPUESTA → RAZÓN → IMPACTO ESPERADO → ESFUERZO → RIESGO → PRUEBA → DECISIÓN → SIGUIENTE ACCIÓN.


## GitHub + memory writeback

A meaningful task is not complete until the repository memory is updated.

After a material change:
- write the baseline/diagnosis/learning to `brain/`;
- update experiments or decisions when applicable;
- keep the code change and memory change in the same PR when practical.

Do not leave important reasoning only in chat.


## Deprecated commercial docs

`GUIA-AFILIADOS.md` is historical only. Do not use its projections, provider rankings, commission claims or placement tactics as current strategy.

Use `brain/business/AFFILIATE-STRATEGY.md` and live partner/data evidence instead.
