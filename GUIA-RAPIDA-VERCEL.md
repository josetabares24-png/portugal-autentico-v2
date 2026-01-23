# ⚡ Guía Rápida: Agregar Variables en Vercel

## 🎯 Variables a Agregar

```
BREVO_PRESUPUESTO_TEMPLATE_ID = 12
BREVO_CONSERJERIA_TEMPLATE_ID = 13
```

---

## 📸 Pasos Visuales

### Paso 1: Ir a Vercel
1. Abre: **https://vercel.com/dashboard**
2. Selecciona tu proyecto

### Paso 2: Settings → Environment Variables
1. Click en **"Settings"** (arriba)
2. Click en **"Environment Variables"** (menú lateral izquierdo)

### Paso 3: Agregar Primera Variable
```
┌─────────────────────────────────────┐
│ Key: BREVO_PRESUPUESTO_TEMPLATE_ID │
│ Value: 12                           │
│ ☑ Production                        │
│ ☑ Preview                           │
│ ☑ Development                       │
│ [Add]                               │
└─────────────────────────────────────┘
```

### Paso 4: Agregar Segunda Variable
```
┌─────────────────────────────────────┐
│ Key: BREVO_CONSERJERIA_TEMPLATE_ID │
│ Value: 13                           │
│ ☑ Production                        │
│ ☑ Preview                           │
│ ☑ Development                       │
│ [Add]                               │
└─────────────────────────────────────┘
```

### Paso 5: Redeploy
1. Ve a **"Deployments"**
2. Click en **⋯** (3 puntos) del último deployment
3. Click en **"Redeploy"**

---

## ✅ Checklist

- [ ] Variable `BREVO_PRESUPUESTO_TEMPLATE_ID = 12` agregada
- [ ] Variable `BREVO_CONSERJERIA_TEMPLATE_ID = 13` agregada
- [ ] Ambas con 3 ambientes marcados (Production, Preview, Development)
- [ ] Redeploy realizado

---

## 🔗 Link Directo

Si ya estás logueado en Vercel:
```
https://vercel.com/[tu-usuario]/portugal-autentico/settings/environment-variables
```

---

## ❓ ¿Y la plantilla 14?

Si necesitas una plantilla 14:
1. Verifica si ya existe en Brevo: https://app.brevo.com/templates/email
2. Si no existe, dime qué tipo de plantilla necesitas y la creo

---

**Tiempo estimado:** 2-3 minutos
