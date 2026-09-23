# Blog Level 1 — reconciliación de producción

Fecha: **2026-09-23**

## Resultado

Vercel volvió a aceptar builds de `main`.

Producción validada:
- deployment: `dpl_9TtghppVN1vd9VgL1o9XYAomK2GK`
- estado: `READY`
- commit desplegado: `4ac3dc4e1784dde42b1b574e027d22e32b761b50`
- target: `production`

El commit de producción está **2 commits por delante** del merge de Historia (`28cecc7c`) y por tanto contiene los lotes editoriales anteriores de Blog Level 1.

## Cierre del bloqueo de producción

Los siguientes estados `N1 — MERGED / PROD BLOCKED` quedan reconciliados y sustituidos operativamente por **N1 — LIVE / DONE**:

| Slug | Estado reconciliado | Evidencia |
|---|---|---|
| `que-ver-cascais-desde-lisboa` | **N1 — LIVE / DONE** | Producción READY; respuesta 200 del deployment; rebuild N1 visible, canonical correcto y `dateModified=2026-09-23`. |
| `playas-cerca-lisboa` | **N1 — LIVE / DONE** | Producción READY; respuesta 200 del deployment; rebuild N1 visible, canonical correcto y `dateModified=2026-09-23`. |
| `que-comprar-lisboa-souvenirs` | **N1 — LIVE / DONE** | Incluido en el commit de producción posterior al merge del batch 2; CI previo verde. |
| `mouraria-barrio-guia` | **N1 — LIVE / DONE** | Incluido en el commit de producción posterior al merge del batch 2; CI previo verde. La deuda visual del hero propio de Mouraria sigue separada y no invalida el cierre editorial. |
| `semana-santa-lisboa` | **N1 — LIVE / DONE** | Producción actual contiene el merge; página pública muestra el rebuild 2027 actualizado el 23/09/2026. |
| `mejor-epoca-visitar-lisboa` | **N1 — LIVE / DONE** | Incluido en el commit de producción posterior a PR #95; TypeScript + SEO smoke ya estaban verdes. |
| `historia-de-lisboa` | **N1 — LIVE / DONE** | `4ac3dc4e` es descendiente de `28cecc7c` (Historia) y el deployment de producción está READY. |

## Regla de precedencia

Este archivo es la **reconciliación posterior** al estado `PROD BLOCKED` registrado en `BLOG-LEVEL-1-CONTROL-2026-09-23.md`. Para estas siete páginas, este estado más reciente prevalece sobre las filas antiguas hasta que el control 60/60 sea compactado en una futura actualización normal.

## Protección de experimentos

- **E-006 — `donde-tomar-cafe-lisboa`: sin cambios.**
- **E-007 — `donde-comer-barato-lisboa`: sin cambios.**

No se modificó contenido, CTA, metadata ni estado experimental de E-006/E-007 durante esta reconciliación.

## Siguiente estado operativo

El bloqueo por `build-rate-limit` ya no es un impedimento para estos lotes. No repetir builds solo para confirmar el mismo estado. Continuar con la cola editorial/medición vigente y mantener la disciplina de no reabrir páginas protegidas sin señal nueva.
