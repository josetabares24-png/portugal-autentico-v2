# Inventario de activos comerciales

Actualizado: **2026-09-23**

Objetivo: distinguir activos realmente operativos de ideas históricas, cuentas solicitadas o proveedores mencionados en documentación vieja.

## OPERATIVOS EN CÓDIGO

### GuruWalk

Estado: **OPERATIVO / MEDIBLE**

Evidencia:
- catálogo editorial de free tours en `src/data/affiliate-links.ts`;
- construcción de enlace con `GURUWALK_AFFILIATE_REF`;
- `AffiliateLink` específico;
- 23 `affiliate_click` observados en `/free-tours-lisboa` durante la ventana de 90 días.

Riesgo:
- el ID vive en entorno; si falta, los CTAs quedan inertes para no perder atribución.

### GetYourGuide

Estado: **OPERATIVO**

Evidencia:
- partner ID en `src/data/bookings.ts`;
- enlaces directos `gyg.me`;
- widgets y scripts propios;
- productos concretos: Castelo, Oceanário en contexto editorial, crucero, fado, tour gastronómico, Sintra y otros.

Medición:
- enlaces directos pueden usar `affiliate_click`;
- widgets dependen también del dashboard del partner y no son completamente observables desde GA4.

### Tiqets

Estado: **OPERATIVO**

Evidencia:
- partner ID en `src/data/bookings.ts`;
- enlaces directos con `partner=estaba_en_lisboa-189233`;
- componentes Tiqets;
- productos actuales: Oceanário, Lisboa Card, Palacio da Pena y otros según inventario.

Medición:
- enlaces directos bajo nuestro control se instrumentan;
- widgets tienen visibilidad limitada desde nuestra analítica.

## NO TRATADOS COMO OPERATIVOS

### Booking.com

Estado: **NO CONFIRMADO COMO ACTIVO EN EL PRODUCTO ACTUAL**

La guía histórica lo proponía como prioridad, pero:
- no aparece como proveedor en `src/data/bookings.ts`;
- no hay componentes dedicados de Booking en el árbol actual revisado;
- no existe señal propia de clic/reserva guardada en Mente Lisboa.

No diseñar contenido/hubs alrededor de Booking hasta confirmar:
1. cuenta activa;
2. link/ID vigente;
3. condiciones actuales;
4. caso de uso que encaje con demanda real.

### Civitatis

Estado: **NO CONFIRMADO COMO ACTIVO EN EL PRODUCTO ACTUAL**

Fue parte de outreach/solicitudes históricas, pero no aparece como proveedor operativo en el inventario actual de reservas.

No asumir aprobación, comisión, cookie ni catálogo vigente sin comprobarlo.

## ACTIVOS PROPIOS / NO PARTNER

### Newsletter

Estado: **ACTIVO A MEDIR**

Activo propio, no afiliado.

Ver:
- [[NEWSLETTER-FUNNEL-2026-09-23]]

Objetivo:
construir audiencia propia si el formulario demuestra captación real.

### Contenido orgánico

Estado: **ACTIVO PRINCIPAL**

El blog genera la mayor parte de visibilidad orgánica.

No es monetización directa por sí solo, pero es el activo que alimenta:
- afiliación;
- marca;
- newsletter;
- posibles acuerdos futuros;
- retorno de usuarios.

### Datos y aprendizaje

Estado: **ACTIVO ESTRATÉGICO**

Search Console + GA4 + Mente Lisboa + experimentos crean conocimiento propio.

No tratarlo como documentación secundaria: reduce decisiones repetidas y evita reconstruir errores.

## MATRIZ DE MADUREZ

| Activo | Operativo | Medible | Señal actual | Prioridad |
|---|---|---|---|---|
| Contenido orgánico | Sí | Sí | alta | CORE |
| GuruWalk Free Tours | Sí | Sí | 23 clics afiliados/90d | ALTA |
| GetYourGuide direct links | Sí | parcial | señal dispersa | MEDIR |
| Tiqets direct links | Sí | parcial | Oceanário destaca | MEDIR |
| GetYourGuide/Tiqets widgets | Sí | parcial | dashboard partner necesario | MEDIR |
| Newsletter | Sí | Sí, recién instrumentado | baseline en formación | MEDIR |
| Booking | no confirmado | no | ninguna propia | NO PRIORIZAR |
| Civitatis | no confirmado | no | ninguna propia | NO PRIORIZAR |

## REGLA DE INVERSIÓN

Un nuevo partner o canal comercial entra en prioridad solo si cumple al menos una:

1. resuelve una necesidad que ya vemos en Search Console/GA4;
2. mejora claramente una recomendación donde ya hay intención;
3. ofrece una oportunidad económica verificable que no exige rehacer el producto;
4. produce un activo propio o una medición que podamos aprender.

No activar partners solo para “tener más opciones”.

## SIGUIENTE PASO

Primero mejorar la calidad de la medición de lo que ya está activo.

Después usar datos de:
- `link_url`;
- `link_domain`;
- UTM campaign/content;
- partner dashboards;

para decidir qué proveedor/producto merece más espacio.
