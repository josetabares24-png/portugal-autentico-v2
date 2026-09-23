# Deuda de copy comercial

Actualizado: **2026-09-23**

Este archivo registra claims comerciales que necesitan revisión futura.

No autoriza cambios inmediatos. El objetivo es evitar que la medición recién instrumentada se contamine por cambios simultáneos de copy.

## REGLA

Antes de corregir un claim comercial:

1. confirmar que aparece realmente en producción;
2. verificar si es factual, opinión o marketing;
3. buscar fuente actual cuando sea comprobable;
4. registrar baseline si el cambio puede afectar clic/conversión;
5. cambiar una variable a la vez cuando sea posible.

## PRIORIDAD ALTA — FREE TOURS

Superficie: `/free-tours-lisboa`

Motivo:
es la superficie con mayor señal comercial observada.

Claims a revisar después del baseline:

### “rutas y consejos de un local”

Aparece en metadata.

Riesgo:
- puede sonar a posicionamiento artificial;
- “local” es una etiqueta de autoridad que debemos usar con cuidado;
- Mente Lisboa prefiere explicar qué se sabe antes que reclamar estatus.

Decisión:
NO TOCAR todavía. Revisar junto con CTR/comportamiento cuando exista ventana limpia.

### “muchos viajeros se mueven en torno a 5–10 € por persona”

Aparece en FAQ de propinas.

Riesgo:
- cifra orientativa sin fuente guardada;
- puede quedar desactualizada;
- puede interpretarse como norma social o tarifa implícita.

Decisión:
requiere fuente actual o formulación más prudente.

### “en temporada alta… los grupos se llenan”

Aparece en consejos/FAQ.

Riesgo:
- generalización comercial;
- puede ser cierta para ciertas rutas/fechas, pero no está demostrada para todo el catálogo.

Decisión:
verificar con proveedor o suavizar después del baseline.

### Duración “normalmente 2–3 horas”

Aparece en la ruta del centro y FAQ.

Riesgo:
- la duración cambia por producto;
- si no sale de una fuente actual, debe tratarse como orientación fechada.

### “La opinión de la casa / cuál elegiría yo”

Riesgo:
- puede ser una recomendación válida si es realmente de José;
- no debe inventarse como voz personal por copywriting.

Decisión:
mantener solo si José confirma que representa su recomendación real.

## PRIORIDAD ALTA — COMPRAR ENTRADAS

Superficie: `/comprar-entradas`

La página está despromocionada, pero todavía produce algunos clics afiliados.

Claims a revisar:

### “Lo que merece reservarse por adelantado, elegido a mano.”

Riesgo:
- “elegido a mano” es branding, no información;
- “merece” implica criterio editorial que debería ser explícito.

### “Casi todo se puede pagar en taquilla: reserva cuando te ahorre la cola.”

Riesgo:
- puede ser falso para atracciones con franjas horarias, venta online prioritaria o disponibilidad limitada;
- “te ahorre la cola” necesita producto/condición concreta.

### “Grupos pequeños, así que las plazas se acaban antes de lo que parece.”

Riesgo:
- urgencia comercial no demostrada;
- contradice la regla anti-urgencia de Mente Lisboa si no hay fuente.

### “Reservar sólo tiene sentido cuando te ahorra una cola o te asegura una plaza…”

Riesgo:
- simplifica demasiado motivos de compra;
- condiciones varían por producto.

### “los free tours siguen siendo la mejor forma de entender la ciudad”

Riesgo:
- absoluto;
- comercialmente interesado;
- no existe una sola “mejor forma” válida para todos.

## PRIORIDAD MEDIA — PRODUCTOS EN src/data/bookings.ts

### Oceanário

Copy:
“el mejor refugio si el día se pone gris.”

Riesgo:
- superlativo innecesario;
- no necesita esa afirmación para explicar el producto.

### Castelo de São Jorge

Copy:
“la cola de la puerta se salta llevando la entrada comprada.”

Riesgo:
- claim operativo que puede depender del tipo de ticket y control de acceso;
- debe verificarse con proveedor/oficial.

### Fado

Copy:
“las casas buenas son pequeñas y se llenan.”

Riesgo:
- generalización + urgencia;
- “buenas” no tiene criterio explícito.

### Crucero

Copy:
“Si puedes elegir hora, la del atardecer.”

Riesgo:
- recomendación editorial razonable, pero debe distinguirse como preferencia, no hecho.

### Sintra completa

Copy:
“no quiere pelearse con trenes y autobuses.”

Riesgo:
- tono humano, pero simplifica la comparación entre transporte independiente y excursión organizada;
- puede mantenerse si encaja con voz, no necesita corrección prioritaria.

## QUÉ NO HACER AHORA

- no reescribir Free Tours durante el baseline comercial;
- no cambiar CTA + copy + layout a la vez;
- no borrar claims solo porque suenan promocionales;
- no añadir fuentes decorativas que no sostengan exactamente el claim;
- no usar “anti-IA” como excusa para volver todo neutro y sin personalidad.

## ORDEN FUTURO DE REVISIÓN

1. Free Tours FAQ/metadata — cuando haya baseline post-medición.
2. Comprar Entradas — cuando decidamos si sigue viva como superficie propia.
3. Product blurbs — cuando cada producto tenga suficiente señal para justificar optimización.

## MÉTRICA A PROTEGER

Cualquier reparación futura debe vigilar:
- affiliate_click;
- link_url / link_domain;
- CTR orgánico si cambia metadata;
- sesiones hacia la superficie;
- partner conversion si el dashboard está disponible.
