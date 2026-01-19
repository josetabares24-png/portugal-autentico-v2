# ✅ SOLUCIÓN DEFINITIVA: Actualizar Vercel a Modo LIVE

## 🎯 El Problema

Vercel está usando claves de Stripe en **modo TEST**, pero los productos están en **modo LIVE**.

## ✅ SOLUCIÓN (Sigue estos pasos EXACTOS)

### PASO 1: Obtener Claves LIVE de Stripe

1. **Ve a Stripe Dashboard**: https://dashboard.stripe.com/
2. **IMPORTANTE**: Asegúrate de estar en **modo LIVE** (toggle arriba a la derecha debe decir "Live mode")
3. **Ve a**: Developers → API keys
4. **Copia estas 2 claves:**
   - **Secret key** (debe empezar con `sk_live_...`)
   - **Publishable key** (debe empezar con `pk_live_...`)

### PASO 2: Actualizar Variables en Vercel

1. **Ve a Vercel Dashboard**: https://vercel.com
2. **Click en tu proyecto**: `estabaenlisboa`
3. **Settings** → **Environment Variables**
4. **Para `STRIPE_SECRET_KEY`:**
   - Click en los **3 puntos** (⋯) → **Edit**
   - **BORRA** el valor actual
   - **PEGA** la clave LIVE que copiaste (la que empieza con `sk_live_...`)
   - **Selecciona**: ✅ Production ✅ Preview ✅ Development (los 3)
   - **Save**

5. **Para `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`:**
   - Click en los **3 puntos** (⋯) → **Edit**
   - **BORRA** el valor actual
   - **PEGA** la clave LIVE que copiaste (la que empieza con `pk_live_...`)
   - **Selecciona**: ✅ Production ✅ Preview ✅ Development (los 3)
   - **Save**

### PASO 3: Hacer Nuevo Deploy (CRÍTICO)

**DESPUÉS de cambiar las variables, DEBES hacer un nuevo deploy:**

1. En Vercel, ve a **Deployments**
2. Click en los **3 puntos** (⋯) del último deployment
3. **Redeploy**
4. **Espera 2-3 minutos** a que termine

### PASO 4: Verificar que Funcionó

1. Ve a https://estabaenlisboa.com
2. **Recarga la página** con Ctrl+F5 (o Cmd+Shift+R) para limpiar caché
3. Intenta hacer una compra
4. **El error debería desaparecer**

---

## ⚠️ VERIFICACIÓN

### ¿Cómo saber si está en modo LIVE?

**En Vercel:**
- Variables deben empezar con `sk_live_` y `pk_live_` (no `sk_test_` o `pk_test_`)

**En el sitio web:**
- NO debe aparecer el error de "Modo: TEST"
- Debe redirigir a Stripe Checkout sin errores

---

## 🆘 Si Aún No Funciona

1. **Verifica los logs de Vercel:**
   - Deployments → Último deployment → View Function Logs
   - Busca líneas que empiecen con "API Checkout:"
   - Deberías ver: `stripeMode: 'LIVE'` (no 'TEST')

2. **Verifica que las variables estén correctas:**
   - En Vercel, abre cada variable y verifica que empiecen con `sk_live_` o `pk_live_`

3. **Limpia el caché del navegador:**
   - Ctrl+Shift+Del → Limpiar caché
   - O usa modo incógnito

---

## ✅ Checklist Final

- [ ] Claves LIVE copiadas de Stripe Dashboard (modo LIVE)
- [ ] Variables en Vercel actualizadas (`sk_live_` y `pk_live_`)
- [ ] Variables están en Production, Preview, Development (los 3)
- [ ] Nuevo deploy hecho en Vercel después de cambiar variables
- [ ] Esperaste 2-3 minutos después del deploy
- [ ] Recargaste la página con Ctrl+F5
- [ ] Probaste hacer una compra
- [ ] El error desapareció

---

**IMPORTANTE:** Si no haces un nuevo deploy después de cambiar las variables, el deploy actual seguirá usando las variables viejas (modo TEST).
