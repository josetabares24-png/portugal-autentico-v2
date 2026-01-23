# 🔧 Cómo Agregar Variables de Entorno en Vercel

## 📋 Variables a Agregar

Necesitas agregar estas 2 variables de entorno en Vercel (las plantillas 12 y 13 ya fueron creadas):

1. **BREVO_PRESUPUESTO_TEMPLATE_ID** = `12`
2. **BREVO_CONSERJERIA_TEMPLATE_ID** = `13`

> **Nota sobre plantilla 14:** Si necesitas una plantilla 14, primero debes crearla en Brevo o agregarla al script. Las plantillas actuales son solo la 12 y 13.

---

## 🚀 Pasos Detallados

### 1. Acceder a Vercel Dashboard

1. Ve a: **https://vercel.com/dashboard**
2. Inicia sesión con tu cuenta
3. Selecciona tu proyecto **"portugal-autentico"** (o el nombre que tenga)

### 2. Ir a Settings → Environment Variables

1. En el menú superior del proyecto, haz clic en **"Settings"**
2. En el menú lateral izquierdo, busca y haz clic en **"Environment Variables"**

### 3. Agregar Primera Variable (Plantilla 12)

1. En la sección **"Environment Variables"**, verás un formulario
2. Completa los campos:
   - **Key (Nombre):** `BREVO_PRESUPUESTO_TEMPLATE_ID`
   - **Value (Valor):** `12`
   - **Environment:** Marca las 3 opciones:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
3. Haz clic en **"Add"** o **"Save"**

### 4. Agregar Segunda Variable (Plantilla 13)

1. Nuevamente en el formulario, completa:
   - **Key:** `BREVO_CONSERJERIA_TEMPLATE_ID`
   - **Value:** `13`
   - **Environment:** Marca las 3 opciones:
     - ✅ Production
     - ✅ Preview
     - ✅ Development
2. Haz clic en **"Add"** o **"Save"**

### 5. (Opcional) Agregar Plantilla 14

Si necesitas una plantilla 14, primero verifica:
- ¿Ya existe en Brevo? Ve a https://app.brevo.com/templates/email y busca el ID 14
- Si no existe, ¿qué plantilla necesitas? Puedo ayudarte a crearla

Si ya existe, agrega:
- **Key:** `BREVO_TEMPLATE_ID_14` (o el nombre específico según su uso)
- **Value:** `14`
- **Environment:** Marca las 3 opciones

---

## ✅ Verificación

Después de agregar las variables, deberías ver algo así:

```
BREVO_PRESUPUESTO_TEMPLATE_ID = 12
BREVO_CONSERJERIA_TEMPLATE_ID = 13
```

Cada una con los 3 ambientes marcados (Production, Preview, Development).

---

## 🔄 Redeploy (Importante)

**Después de agregar las variables, DEBES hacer un redeploy:**

### Opción 1: Desde el Dashboard
1. Ve a la pestaña **"Deployments"**
2. Encuentra el último deployment
3. Haz clic en los **3 puntos** (⋯) a la derecha
4. Selecciona **"Redeploy"**
5. Confirma el redeploy

### Opción 2: Desde Git
1. Haz un pequeño cambio en cualquier archivo (o un commit vacío)
2. Haz push a tu repositorio
3. Vercel detectará el cambio y hará deploy automáticamente

---

## 🔗 Link Directo

**Link directo a Environment Variables de tu proyecto:**
```
https://vercel.com/[TU-USUARIO]/portugal-autentico/settings/environment-variables
```

*(Reemplaza `[TU-USUARIO]` con tu nombre de usuario de Vercel)*

---

## 📝 Resumen de Variables

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `BREVO_PRESUPUESTO_TEMPLATE_ID` | `12` | Plantilla de presupuesto básico |
| `BREVO_CONSERJERIA_TEMPLATE_ID` | `13` | Plantilla de Conserjería Digital (calculadora premium) |

> **Plantilla 14:** Si necesitas una plantilla 14, primero verifica si existe en Brevo o indícame qué tipo de plantilla necesitas para crearla.

---

## ⚠️ Notas Importantes

1. **Todas las variables deben estar en los 3 ambientes** (Production, Preview, Development)
2. **Después de agregar, SIEMPRE haz redeploy** para que los cambios surtan efecto
3. **No compartas estos valores** públicamente (aunque los IDs de plantilla no son sensibles)
4. Si ya existe una variable con el mismo nombre, **edítala** en lugar de crear una nueva

---

## 🐛 Solución de Problemas

### No veo las variables después del deploy
- Verifica que hayas marcado los 3 ambientes
- Asegúrate de haber hecho redeploy
- Revisa que los nombres de las variables sean exactos (case-sensitive)

### Error al hacer redeploy
- Verifica que no haya errores de sintaxis en el código
- Revisa los logs de Vercel para más detalles
- Asegúrate de que todas las variables requeridas estén configuradas

---

**Última actualización:** Enero 2025
