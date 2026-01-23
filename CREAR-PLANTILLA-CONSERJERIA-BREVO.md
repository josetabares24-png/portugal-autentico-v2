# Crear Plantilla de Conserjería Digital en Brevo

## Pasos para crear la plantilla automáticamente

### 1. Ejecutar el script

Desde la raíz del proyecto, ejecuta:

```bash
node scripts/create-brevo-templates.js
```

Este script creará/actualizará la plantilla de Conserjería Digital en Brevo.

### 2. Obtener el ID de la plantilla

El script mostrará en la consola algo como:

```
6️⃣ Actualizando plantilla de Conserjería Digital...
   ✅ ID de plantilla: 13
   💡 Agrega en Vercel: BREVO_CONSERJERIA_TEMPLATE_ID=13
```

**Copia el ID** que aparece (en este ejemplo es `13`).

### 3. Agregar variable de entorno en Vercel

1. Ve a tu proyecto en Vercel: https://vercel.com
2. Ve a **Settings** → **Environment Variables**
3. Agrega una nueva variable:
   - **Name**: `BREVO_CONSERJERIA_TEMPLATE_ID`
   - **Value**: El ID que copiaste (ej: `13`)
   - **Environment**: Production, Preview, Development (marca todas)
4. Guarda los cambios

### 4. Agregar variable de entorno local (opcional)

Si quieres probar localmente, agrega en tu archivo `.env.local`:

```
BREVO_CONSERJERIA_TEMPLATE_ID=13
```

(Reemplaza `13` con el ID real que obtuviste)

### 5. Verificar en Brevo

1. Ve a https://app.brevo.com/templates/email
2. Busca la plantilla "Conserjería Digital - Propuesta Personalizada"
3. Verifica que el diseño y los parámetros estén correctos

## Parámetros de la plantilla

La plantilla usa estos parámetros dinámicos:

### Parámetros básicos:
- `{{params.NOMBRE}}` - Nombre del usuario
- `{{params.TOTAL_VIAJE}}` - Presupuesto total (ej: "240")
- `{{params.PERSONAS}}` - Número de personas
- `{{params.PERSONAS_SINGULAR}}` - "persona" o "personas"
- `{{params.DIAS}}` - Número de días
- `{{params.DIAS_SINGULAR}}` - "día" o "días"
- `{{params.TOTAL_PERSONA_DIA}}` - Total por persona al día

### Parámetros de estilo:
- `{{params.ESTILO_NOMBRE}}` - "Smart & Local", "Premium Experience" o "Ultra-Luxury"
- `{{params.ALOJAMIENTO_ROW}}` - HTML con fila de tabla para alojamiento (opcional, puede estar vacío)
- `{{params.RITMO_ROW}}` - HTML con fila de tabla para ritmo (opcional, puede estar vacío)

### Parámetros de desglose:
- `{{params.ALOJAMIENTO_VALOR}}` - Precio de alojamiento (ej: "60")
- `{{params.COMIDA_VALOR}}` - Precio de comida (ej: "40")
- `{{params.TRANSPORTE_VALOR}}` - Precio de transporte (ej: "7")
- `{{params.ACTIVIDADES_VALOR}}` - Precio de actividades (ej: "25")

### Parámetros de contenido:
- `{{params.INTERESES_SECTION}}` - HTML completo de la sección de intereses (opcional, puede estar vacío)

## Formato de los parámetros HTML

### ALOJAMIENTO_ROW y RITMO_ROW
Deben ser HTML con filas de tabla (o cadena vacía si no aplica):
```html
<tr>
  <td style="padding: 8px 0; font-size: 15px; color: #475569;">
    <strong style="color: #1e293b; min-width: 120px; display: inline-block;">Alojamiento:</strong>
    Boutique
  </td>
</tr>
```

**Ejemplo para RITMO_ROW:**
```html
<tr>
  <td style="padding: 8px 0; font-size: 15px; color: #475569;">
    <strong style="color: #1e293b; min-width: 120px; display: inline-block;">Ritmo:</strong>
    Relajado
  </td>
</tr>
```

**Nota:** Si el parámetro está vacío (cadena vacía `''`), Brevo simplemente no mostrará nada en ese lugar.

### INTERESES_SECTION
Debe ser HTML completo de una fila de tabla (o cadena vacía si no hay intereses):
```html
<tr>
  <td style="padding-bottom: 35px;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
      <tr>
        <td style="padding: 25px;">
          <h3 style="margin: 0 0 15px 0; font-size: 16px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">
            Tus intereses
          </h3>
          <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #475569;">
            🍷 Gastronomía, 🏛️ Historia Oculta, 🌊 Naturaleza Salvaje
          </p>
        </td>
      </tr>
    </table>
  </td>
</tr>
```

**Nota:** Si no hay intereses, este parámetro será una cadena vacía y no se mostrará la sección.

## Notas importantes

- Si no configuras `BREVO_CONSERJERIA_TEMPLATE_ID`, el sistema usará la plantilla de presupuesto original (`BREVO_PRESUPUESTO_TEMPLATE_ID`)
- Si ninguna plantilla está configurada, usará HTML directo como fallback
- La plantilla tiene un diseño premium tipo "Conserjería Digital" con paleta crema/antracita
- El contacto se agrega automáticamente a la lista ID 5 de Brevo
- El email incluye texto plano para mejor deliverabilidad (debes agregarlo manualmente en Brevo)

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
3. Verifica que `BREVO_CONSERJERIA_TEMPLATE_ID` esté configurada
4. Revisa los logs del servidor para ver errores específicos

### El email se envía pero sin formato

Esto significa que el template ID no está configurado o es incorrecto. El sistema está usando el fallback HTML directo.

**Solución**: Verifica que `BREVO_CONSERJERIA_TEMPLATE_ID` tenga el valor correcto.

### Los parámetros HTML no se muestran correctamente

Los parámetros `DESGLOSE_ITEMS`, `ALOJAMIENTO_NOMBRE`, `RITMO_NOMBRE` e `INTERESES_SECTION` deben contener HTML válido.

**Solución**: Verifica que el HTML generado en el API route sea correcto y que Brevo permita HTML en los parámetros.
