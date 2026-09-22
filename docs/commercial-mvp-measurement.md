# MVP comercial medible — Estaba en Lisboa

## Alcance

Este MVP se limita a tres superficies:

1. `/itinerarios/lisboa-1-dia-lo-esencial`
2. `/calculadora-presupuesto-lisboa`
3. `/planifica-tu-viaje`

No se replica todavía a otros itinerarios, artículos o páginas comerciales.

## Eventos

Todos los eventos dependen de consentimiento analítico explícito y pasan por
`src/lib/analytics.ts`.

| Evento | Cuándo se envía | Propiedades principales |
| --- | --- | --- |
| `itinerary_cta_view` | Un CTA contextual alcanza 35% de visibilidad | `page_path`, `itinerary`, `activity`, `provider`, `cta_position`, `cta_status` |
| `itinerary_cta_click` | Clic en una reserva exacta desde el CTA contextual | las mismas del evento de vista |
| `affiliate_click` | Clic afiliado existente | partner, campaign, placement, content y page_path |
| `calculator_completed` | Tras interactuar y ver el resultado, una vez por visita | días, noches, viajeros, nº de actividades y Sintra |
| `calculator_recommendation_click` | Clic en una recomendación derivada de una selección de la calculadora | `page_path`, `activity`, `provider`, `position` |
| `personal_plan_view` | La sección del plan personalizado alcanza 25% de visibilidad | `page_path` |
| `personal_plan_start` | Primera interacción con el formulario | `page_path` |
| `personal_plan_submit` | La API confirma una solicitud enviada | días, viajeros, si hay fechas/presupuesto y ritmo; nunca nombre/email |

## Embudo mínimo

### Itinerario
`itinerary_cta_view → itinerary_cta_click → affiliate_click`

Métrica principal: CTR del CTA contextual =
`itinerary_cta_click / itinerary_cta_view`.

### Calculadora
`calculator_completed → calculator_recommendation_click → affiliate_click`

Métrica principal: porcentaje de cálculos terminados que producen un clic en
una recomendación relevante.

### Plan personalizado
`personal_plan_view → personal_plan_start → personal_plan_submit`

Métricas principales:
- inicio / vista;
- envío / inicio;
- envío / vista.

## Criterio antes de expandir

No copiar el CTA contextual a los demás itinerarios hasta disponer de una
muestra suficiente para saber si ayuda o distrae. No optimizar sólo por CTR:
también revisar rebote, profundidad de lectura y clics de mapa del itinerario.

## Precio

`NEXT_PUBLIC_PLAN_PRICE_FROM` está deliberadamente vacío por defecto. Sólo
debe definirse cuando exista un precio real aprobado. Sin esa variable la
interfaz no muestra una cantidad.
