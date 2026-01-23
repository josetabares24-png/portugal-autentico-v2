# Crear Plantilla de Presupuesto en Brevo

## Pasos para crear la plantilla automáticamente

### 1. Ejecutar el script

Desde la raíz del proyecto, ejecuta:

```bash
node scripts/create-brevo-templates.js
```

Este script creará/actualizará la plantilla de presupuesto en Brevo.

### 2. Obtener el ID de la plantilla

El script mostrará en la consola algo como:

```
5️⃣ Actualizando plantilla de presupuesto...
   ✅ ID de plantilla: 12
   💡 Agrega en Vercel: BREVO_PRESUPUESTO_TEMPLATE_ID=12
```

**Copia el ID** que aparece (en este ejemplo es `12`).

### 3. Agregar variable de entorno en Vercel

1. Ve a tu proyecto en Vercel: https://vercel.com
2. Ve a **Settings** → **Environment Variables**
3. Agrega una nueva variable:
   - **Name**: `BREVO_PRESUPUESTO_TEMPLATE_ID`
   - **Value**: El ID que copiaste (ej: `12`)
   - **Environment**: Production, Preview, Development (marca todas)
4. Guarda los cambios

### 4. Agregar variable de entorno local (opcional)

Si quieres probar localmente, agrega en tu archivo `.env.local`:

```
BREVO_PRESUPUESTO_TEMPLATE_ID=12
```

(Reemplaza `12` con el ID real que obtuviste)

### 5. Verificar en Brevo

1. Ve a https://app.brevo.com/templates/email
2. Busca la plantilla "Presupuesto - Envío Detallado"
3. Verifica que el diseño y los parámetros estén correctos

## Parámetros de la plantilla

La plantilla usa estos parámetros dinámicos:

- `{{params.NOMBRE}}` - Nombre del usuario
- `{{params.TOTAL_VIAJE}}` - Presupuesto total (ej: "240")
- `{{params.PERSONAS}}` - Número de personas
- `{{params.PERSONAS_SINGULAR}}` - "persona" o "personas"
- `{{params.DIAS}}` - Número de días
- `{{params.DIAS_SINGULAR}}` - "día" o "días"
- `{{params.TOTAL_PERSONA_DIA}}` - Total por persona al día
- `{{params.TIPO_NOMBRE}}` - "Mochilero", "Medio" o "Confort"
- `{{params.TIPO_DESCRIPCION}}` - Descripción del tipo de presupuesto
- `{{params.ALOJAMIENTO}}` - Precio de alojamiento
- `{{params.DESAYUNO}}` - Precio de desayuno
- `{{params.ALMUERZO}}` - Precio de almuerzo
- `{{params.CENA}}` - Precio de cena
- `{{params.TRANSPORTE}}` - Precio de transporte
- `{{params.ACTIVIDADES}}` - Precio de actividades
- `{{params.EXTRAS}}` - Precio de extras

## Notas importantes

- Si no configuras `BREVO_PRESUPUESTO_TEMPLATE_ID`, el sistema usará un fallback con HTML directo
- La plantilla incluye un cupón de descuento del 20% (código: PRESUPUESTO20)
- El contacto se agrega automáticamente a la lista ID 5 de Brevo
- El email incluye texto plano para mejor deliverabilidad

## Solución de problemas

### El script no encuentra la plantilla

Si el script dice que no encuentra la plantilla, puede ser que:
1. No tengas permisos en Brevo
2. La API key no sea válida
3. El nombre de la plantilla haya cambiado

**Solución**: Verifica manualmente en Brevo y actualiza el script si es necesario.

### El email no se envía

1. Verifica que `BREVO_API_KEY` esté configurada
2. Verifica que `BREVO_SENDER_EMAIL` esté configurada
3. Verifica que `BREVO_PRESUPUESTO_TEMPLATE_ID` esté configurada
4. Revisa los logs del servidor para ver errores específicos

### El email se envía pero sin formato

Esto significa que el template ID no está configurado o es incorrecto. El sistema está usando el fallback HTML directo.

**Solución**: Verifica que `BREVO_PRESUPUESTO_TEMPLATE_ID` tenga el valor correcto.
