# Estrategia de afiliados vigente

Actualizado: **2026-09-23**

Esta es la referencia comercial vigente para afiliación en Estaba en Lisboa.

No usar proyecciones antiguas de ingresos ni recomendaciones genéricas de “poner afiliados en todas partes”.

## HECHOS MEDIDOS

GA4 — 90 días hasta 2026-09-22, con consentimiento analítico explícito:

| Superficie | affiliate_click |
|---|---:|
| /free-tours-lisboa | 23 |
| /comprar-entradas | 4 |
| /actividades/oceanario-lisboa | 3 |
| /actividades/free-walking-tour-centro | 1 |
| /itinerarios/lisboa-3-dias-premium | 1 |
| /calculadora-presupuesto-lisboa | 1 |

Total observado: **33 clics afiliados**.

Los recuentos absolutos son incompletos porque la analítica exige consentimiento. La dirección relativa sigue siendo útil.

## CONCLUSIÓN ACTUAL

La señal comercial más clara es **Free Tours**.

No hay evidencia suficiente para:
- declarar ganador a GetYourGuide o Tiqets;
- proyectar ingresos mensuales;
- llenar los artículos con CTAs;
- afirmar que Booking debe ser “prioridad #1”;
- asumir que más enlaces producen más dinero.

## MODELO COMERCIAL

El modelo preferido es contextual:

**necesidad → contenido útil → decisión → recomendación relacionada → clic afiliado**

No usar:

**contenido → widget porque hay espacio**

## PRINCIPIOS

1. La recomendación debe aparecer porque resuelve la siguiente decisión del usuario.
2. No inventar urgencia, descuentos, precios ni “últimas plazas”.
3. No prometer que un proveedor tiene “mejor precio” sin evidencia.
4. No aumentar densidad de afiliados solo porque un clic es medible.
5. Un producto puede estar comercialmente vivo aunque su hub esté despromocionado.
6. El dashboard del partner es la fuente final para ventas/comisiones; GA4 mide el paso previo.
7. No proyectar ingresos sin datos propios de conversión y comisión.

## PROVEEDORES / SUPERFICIES ACTUALES

### GuruWalk
Uso principal:
- /free-tours-lisboa
- fichas relacionadas de free tours

Señal:
- 23 affiliate_click en /free-tours-lisboa durante la ventana de 90 días.

### GetYourGuide
Uso actual:
- entradas y experiencias directas en ciertas fichas/artículos;
- widgets en superficies de compra;
- algunos productos de actividades.

### Tiqets
Uso actual:
- Oceanário;
- Lisboa Card;
- Palacio da Pena;
- productos concretos según `src/data/bookings.ts`.

No se debe preferir un proveedor por costumbre. La selección depende del producto, correspondencia exacta, medición y condiciones vigentes.

## MEDICIÓN

Desde 2026-09-23 los clics directos que controlamos envían:
- page_path;
- link_url;
- link_domain;
- outbound;
- parámetros personalizados ya existentes.

Ver [[AFFILIATE-MEASUREMENT-2026-09-23]].

Objetivo:
poder distinguir proveedor/campaña/placement antes de cambiar prominencia comercial.

## QUÉ NO SABEMOS TODAVÍA

- tasa click → reserva por proveedor;
- comisión efectiva por clic;
- ingreso por página;
- ingreso por 100 sesiones orgánicas;
- mejor placement;
- valor de cada categoría comercial.

Estas preguntas requieren datos de dashboards de partner o integraciones adicionales.

## DECISIONES ACTUALES

### KEEP / PROTEGER
- Free Tours como excepción comercial visible.
- Oceanário como ficha con señal comercial.
- enlaces directos con correspondencia exacta producto ↔ necesidad.

### MEASURE
- Itinerarios con clic afiliado aislado.
- Calculadora.
- Comprar Entradas.
- otras fichas de Actividades.

### NO HACER
- añadir Booking por defecto a todas las guías;
- añadir widgets masivos;
- crear artículos de hotel solo para monetizar;
- estimar € por mes sin conversiones reales;
- publicar “ofertas” sin fuente actual;
- seleccionar partner basándonos en comisiones antiguas no verificadas.

## PRÓXIMA DECISIÓN COMERCIAL

Esperar nuevos clics posteriores a la mejora de medición.

Después comparar:
- página;
- dominio;
- campaña/UTM;
- placement;
- partner dashboard cuando esté disponible.

Solo entonces decidir qué superficie merece más prominencia.
