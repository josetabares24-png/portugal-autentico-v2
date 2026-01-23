# 📋 Parámetros de la Plantilla de Conserjería Digital

## ✅ Plantilla Creada

**Nombre:** Conserjería Digital - Propuesta Personalizada  
**ID:** `13`  
**Subject:** `Tu propuesta de viaje a Portugal - {{params.NOMBRE}}`

---

## 🔧 Configuración en Vercel

Agrega esta variable de entorno en Vercel:

```
BREVO_CONSERJERIA_TEMPLATE_ID=13
```

**Pasos:**
1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto
3. Ve a **Settings** → **Environment Variables**
4. Agrega:
   - **Name:** `BREVO_CONSERJERIA_TEMPLATE_ID`
   - **Value:** `13`
   - **Environment:** Production, Preview, Development (marca todas)
5. Guarda y haz redeploy

---

## 📝 Parámetros de la Plantilla

### Parámetros Básicos (Obligatorios)

| Parámetro | Tipo | Ejemplo | Descripción |
|-----------|------|---------|-------------|
| `{{params.NOMBRE}}` | string | "María" | Nombre del usuario |
| `{{params.TOTAL_VIAJE}}` | string | "240" | Presupuesto total sin decimales |
| `{{params.PERSONAS}}` | string | "2" | Número de personas |
| `{{params.PERSONAS_SINGULAR}}` | string | "personas" | "persona" o "personas" |
| `{{params.DIAS}}` | string | "3" | Número de días |
| `{{params.DIAS_SINGULAR}}` | string | "días" | "día" o "días" |
| `{{params.TOTAL_PERSONA_DIA}}` | string | "80" | Total por persona al día sin decimales |

### Parámetros de Estilo

| Parámetro | Tipo | Ejemplo | Descripción |
|-----------|------|---------|-------------|
| `{{params.ESTILO_NOMBRE}}` | string | "Premium Experience" | "Smart & Local", "Premium Experience" o "Ultra-Luxury" |
| `{{params.ALOJAMIENTO_ROW}}` | HTML | Ver abajo | Fila de tabla HTML (opcional, puede estar vacío) |
| `{{params.RITMO_ROW}}` | HTML | Ver abajo | Fila de tabla HTML (opcional, puede estar vacío) |

### Parámetros de Desglose

| Parámetro | Tipo | Ejemplo | Descripción |
|-----------|------|---------|-------------|
| `{{params.ALOJAMIENTO_VALOR}}` | string | "60" | Precio de alojamiento |
| `{{params.COMIDA_VALOR}}` | string | "40" | Precio de comida (almuerzo + cena) |
| `{{params.TRANSPORTE_VALOR}}` | string | "7" | Precio de transporte |
| `{{params.ACTIVIDADES_VALOR}}` | string | "25" | Precio de actividades |

### Parámetros de Contenido

| Parámetro | Tipo | Ejemplo | Descripción |
|-----------|------|---------|-------------|
| `{{params.INTERESES_SECTION}}` | HTML | Ver abajo | Sección completa HTML (opcional, puede estar vacío) |

---

## 📄 Formato de Parámetros HTML

### ALOJAMIENTO_ROW

Si hay alojamiento seleccionado, debe ser:
```html
<tr><td style="padding: 8px 0; font-size: 15px; color: #475569;"><strong style="color: #1e293b; min-width: 120px; display: inline-block;">Alojamiento:</strong>Boutique</td></tr>
```

Si no hay alojamiento, debe ser cadena vacía: `""`

**Valores posibles:**
- "Boutique"
- "Lujo"
- "Local Auténtico"

---

### RITMO_ROW

Si hay ritmo seleccionado, debe ser:
```html
<tr><td style="padding: 8px 0; font-size: 15px; color: #475569;"><strong style="color: #1e293b; min-width: 120px; display: inline-block;">Ritmo:</strong>Relajado</td></tr>
```

Si no hay ritmo, debe ser cadena vacía: `""`

**Valores posibles:**
- "Relajado"
- "Intenso"

---

### INTERESES_SECTION

Si hay intereses seleccionados, debe ser:
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

Si no hay intereses, debe ser cadena vacía: `""`

**Formato del texto de intereses:**
- `🍷 Gastronomía`
- `🏛️ Historia Oculta`
- `🌊 Naturaleza Salvaje`
- `🎭 Cultura Local`
- `🎉 Vida Nocturna`
- `📸 Fotografía`

Separados por comas y espacios: `, `

---

## 🔄 Mapeo de Valores

### ESTILO_NOMBRE

| Valor del formulario | ESTILO_NOMBRE |
|---------------------|---------------|
| `smart` | "Smart & Local" |
| `premium` | "Premium Experience" |
| `luxury` | "Ultra-Luxury" |

### ALOJAMIENTO_NOMBRE

| Valor del formulario | ALOJAMIENTO_NOMBRE |
|---------------------|-------------------|
| `boutique` | "Boutique" |
| `lujo` | "Lujo" |
| `local` | "Local Auténtico" |

### RITMO_NOMBRE

| Valor del formulario | RITMO_NOMBRE |
|---------------------|--------------|
| `relajado` | "Relajado" |
| `intenso` | "Intenso" |

### Intereses

| ID del interés | Texto en email |
|----------------|----------------|
| `gastronomia` | "🍷 Gastronomía" |
| `historia` | "🏛️ Historia Oculta" |
| `naturaleza` | "🌊 Naturaleza Salvaje" |
| `cultura` | "🎭 Cultura Local" |
| `fiesta` | "🎉 Vida Nocturna" |
| `fotografia` | "📸 Fotografía" |

---

## ✅ Ejemplo Completo de Parámetros

```json
{
  "NOMBRE": "María",
  "TOTAL_VIAJE": "240",
  "PERSONAS": "2",
  "PERSONAS_SINGULAR": "personas",
  "DIAS": "3",
  "DIAS_SINGULAR": "días",
  "TOTAL_PERSONA_DIA": "80",
  "ESTILO_NOMBRE": "Premium Experience",
  "ALOJAMIENTO_ROW": "<tr><td style=\"padding: 8px 0; font-size: 15px; color: #475569;\"><strong style=\"color: #1e293b; min-width: 120px; display: inline-block;\">Alojamiento:</strong>Boutique</td></tr>",
  "RITMO_ROW": "<tr><td style=\"padding: 8px 0; font-size: 15px; color: #475569;\"><strong style=\"color: #1e293b; min-width: 120px; display: inline-block;\">Ritmo:</strong>Relajado</td></tr>",
  "ALOJAMIENTO_VALOR": "60",
  "COMIDA_VALOR": "40",
  "TRANSPORTE_VALOR": "7",
  "ACTIVIDADES_VALOR": "25",
  "INTERESES_SECTION": "<tr><td style=\"padding-bottom: 35px;\"><table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\" style=\"background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;\"><tr><td style=\"padding: 25px;\"><h3 style=\"margin: 0 0 15px 0; font-size: 16px; font-weight: 700; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;\">Tus intereses</h3><p style=\"margin: 0; font-size: 15px; line-height: 1.7; color: #475569;\">🍷 Gastronomía, 🏛️ Historia Oculta</p></td></tr></table></td></tr>"
}
```

---

## 🔍 Verificar en Brevo

1. Ve a: https://app.brevo.com/templates/email
2. Busca la plantilla **"Conserjería Digital - Propuesta Personalizada"**
3. Verifica que tenga el ID **13**
4. Revisa que todos los parámetros estén correctos

---

## ⚠️ Notas Importantes

1. **Parámetros opcionales**: `ALOJAMIENTO_ROW`, `RITMO_ROW` e `INTERESES_SECTION` pueden ser cadenas vacías si no hay datos
2. **HTML en parámetros**: Los parámetros `ALOJAMIENTO_ROW`, `RITMO_ROW` e `INTERESES_SECTION` contienen HTML, asegúrate de escapar correctamente las comillas
3. **Prioridad**: Si `BREVO_CONSERJERIA_TEMPLATE_ID` está configurado, se usará esta plantilla. Si no, usará `BREVO_PRESUPUESTO_TEMPLATE_ID` (ID 12) como fallback
4. **Texto plano**: Recuerda agregar la versión de texto plano en Brevo para mejor deliverabilidad

---

## 📧 Texto Plano Recomendado

Para agregar en Brevo (sección "Text Version"):

```
Tu propuesta de viaje a Portugal

Hola {{params.NOMBRE}},

Gracias por confiar en nosotros para diseñar tu viaje perfecto a Portugal. He creado una propuesta personalizada basada en tus preferencias.

RESUMEN DE TU VIAJE
Estilo: {{params.ESTILO_NOMBRE}}
Duración: {{params.DIAS}} {{params.DIAS_SINGULAR}}
Viajeros: {{params.PERSONAS}} {{params.PERSONAS_SINGULAR}}

PRESUPUESTO ESTIMADO
{{params.TOTAL_VIAJE}}€
{{params.TOTAL_PERSONA_DIA}}€ por persona al día

DESGLOSE POR PERSONA/DÍA
Alojamiento: {{params.ALOJAMIENTO_VALOR}}€
Comida: {{params.COMIDA_VALOR}}€
Transporte: {{params.TRANSPORTE_VALOR}}€
Actividades: {{params.ACTIVIDADES_VALOR}}€

TOTAL POR DÍA: {{params.TOTAL_PERSONA_DIA}}€

¿QUÉ INCLUYE TU PROPUESTA?
✓ Itinerario día a día (mañana, tarde y noche)
✓ Reserva de restaurantes locales "no turísticos"
✓ Logística de transporte optimizada
✓ Asistencia vía WhatsApp durante el viaje

FEE DE DISEÑO LOCAL: 150€
Incluye planificación completa y asistencia

Ver Guías Premium: https://estabaenlisboa.com/itinerarios

"No vendemos tours, diseñamos memorias que duran toda la vida."

Si tienes alguna pregunta o quieres ajustar algo de tu propuesta, responde a este email. Estaré encantado de ayudarte a crear el viaje perfecto.

José
Estaba en Lisboa
estabaenlisboa.com

Política de privacidad: https://estabaenlisboa.com/politica-privacidad

© 2025 Estaba en Lisboa. Todos los derechos reservados.
```

---

**Última actualización:** Enero 2025
