# 🔴 PROBLEMA: Stripe está en modo TEST en lugar de LIVE

## ❌ Error Actual
```
Stripe (Modo: TEST). El Price ID 'price_1SrROZJglPw4zh36UyYmizEN' no existe. 
Por favor, verifica que los productos estén creados en el modo correcto (TEST).
```

**El problema:** Vercel está usando claves de Stripe en modo **TEST** pero los productos están en modo **LIVE**.

## ✅ SOLUCIÓN: Actualizar Variables en Vercel

### Paso 1: Verificar Claves en Vercel

1. Ve a **Vercel Dashboard**: https://vercel.com
2. Click en tu proyecto: `portugal-autentico-v2` (o `estabaenlisboa`)
3. Ve a **Settings** → **Environment Variables**
4. Busca estas variables:

**Verifica:**
- `STRIPE_SECRET_KEY` → ¿Empieza con `sk_test_` o `sk_live_`?
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` → ¿Empieza con `pk_test_` o `pk_live_`?

### Paso 2: Si Empiezan con `sk_test_` o `pk_test_`:

**DEBES CAMBIARLAS a modo LIVE:**

1. **Ve a Stripe Dashboard**: https://dashboard.stripe.com/
2. **Asegúrate de estar en modo LIVE** (toggle arriba a la derecha debe decir "Live mode")
3. Ve a **Developers** → **API keys**
4. Copia:
   - **Secret key** (debe empezar con `sk_live_...`)
   - **Publishable key** (debe empezar con `pk_live_...`)

### Paso 3: Actualizar en Vercel

1. En Vercel → **Settings** → **Environment Variables**
2. Para cada variable (`STRIPE_SECRET_KEY` y `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`):
   - Click en los **3 puntos** (⋯)
   - Click en **Edit**
   - Reemplaza el valor con la clave de **modo LIVE** de Stripe
   - **IMPORTANTE**: Selecciona **Production, Preview, Development** (todos los ambientes)
   - Click en **Save**

### Paso 4: Forzar Nuevo Deploy en Vercel

**DESPUÉS de cambiar las variables, SIEMPRE haz un nuevo deploy:**

1. Ve a **Deployments**
2. Click en los **3 puntos** (⋯) del último deployment
3. Selecciona **Redeploy**
4. Espera 2-3 minutos

O desde terminal:
```bash
git commit --allow-empty -m "Force redeploy after Stripe LIVE keys update"
git push origin main
```

### Paso 5: Verificar que Funcione

1. Espera a que termine el deploy en Vercel
2. Intenta hacer una compra en tu sitio
3. El error debería desaparecer

## 🔍 Cómo Verificar que Está en Modo LIVE

El código detecta automáticamente el modo basándose en las claves:

```typescript
stripeMode: process.env.STRIPE_SECRET_KEY?.startsWith('sk_live_') ? 'LIVE' : 'TEST'
```

**Si la clave empieza con `sk_live_`** → Modo LIVE ✅
**Si la clave empieza con `sk_test_`** → Modo TEST ❌

## ⚠️ IMPORTANTE

- **Los productos en Stripe están en modo LIVE** ✅
- **Las claves en Vercel DEBEN ser de modo LIVE** ❌ (esto es lo que falta)
- **Si usas claves de TEST, los productos LIVE no existirán** ❌

## 📋 Checklist

- [ ] Claves en Stripe Dashboard (modo LIVE): Copiadas
- [ ] Variables en Vercel actualizadas a `sk_live_...` y `pk_live_...`
- [ ] Nuevo deploy en Vercel después de cambiar variables
- [ ] Error desaparece después del deploy
