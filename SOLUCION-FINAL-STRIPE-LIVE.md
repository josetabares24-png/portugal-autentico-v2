# 🔴 PROBLEMA: Vercel Sigue en Modo TEST

## ❌ Error Actual en el Sitio Web:
```
El producto no está configurado correctamente en Stripe (Modo: TEST). 
El Price ID 'price_1SrROZJglPw4zh36UyYmizEN' no existe.
```

**Esto significa:** Vercel todavía está usando claves de Stripe en modo TEST.

---

## ✅ SOLUCIÓN DEFINITIVA

### PASO 1: Verificar Variables en Vercel (MUY IMPORTANTE)

1. **Ve a Vercel Dashboard**: https://vercel.com
2. **Click en tu proyecto** (estabaenlisboa)
3. **Settings** → **Environment Variables**
4. **Busca estas 2 variables y verifica:**

**`STRIPE_SECRET_KEY`:**
- ¿Empieza con `sk_live_` o `sk_test_`?
- **DEBE empezar con `sk_live_`** ✅
- Si empieza con `sk_test_`, necesitas actualizarlo

**`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`:**
- ¿Empieza con `pk_live_` o `pk_test_`?
- **DEBE empezar con `pk_live_`** ✅
- Si empieza con `pk_test_`, necesitas actualizarlo

### PASO 2: Si Empiezan con `sk_test_` o `pk_test_`:

**ACTUALÍZALAS AHORA:**

1. **Ve a Stripe Dashboard**: https://dashboard.stripe.com/
2. **IMPORTANTE**: Asegúrate de estar en **modo LIVE** (toggle arriba a la derecha)
3. **Developers** → **API keys**
4. **Copia estas claves LIVE:**
   - Secret key (empieza con `sk_live_...`)
   - Publishable key (empieza con `pk_live_...`)

5. **En Vercel**, para cada variable:
   - Click en los **3 puntos** (⋯)
   - **Edit**
   - **Reemplaza** con la clave LIVE de Stripe
   - **Selecciona**: Production, Preview, Development (los 3)
   - **Save**

### PASO 3: FORZAR NUEVO DEPLOY (CRÍTICO)

**DESPUÉS de cambiar las variables, SIEMPRE haz un nuevo deploy:**

#### Opción A: Desde Vercel Dashboard (RECOMENDADO)
1. Ve a **Deployments**
2. Click en los **3 puntos** (⋯) del último deployment
3. **Redeploy**
4. Espera 2-3 minutos

#### Opción B: Desde Terminal
```bash
git commit --allow-empty -m "Force redeploy - Stripe LIVE keys"
git push origin main
```

### PASO 4: Verificar que Funcionó

1. Espera a que termine el deploy en Vercel (2-3 minutos)
2. Ve a https://estabaenlisboa.com
3. Recarga la página (Ctrl+F5 o Cmd+Shift+R para forzar recarga)
4. Intenta hacer una compra
5. El error debería desaparecer

---

## 🔍 Cómo Verificar el Modo en los Logs de Vercel

1. Ve a **Vercel** → **Deployments** → Último deployment
2. Click en **View Function Logs**
3. Intenta hacer una compra
4. Busca líneas que empiecen con "API Checkout:"
5. Deberías ver: `stripeMode: 'LIVE'` (no 'TEST')

---

## ⚠️ IMPORTANTE

**El problema es que Vercel tiene caché de variables de entorno.**

Aunque cambies las variables:
- ✅ Se guardan en Vercel
- ❌ NO se aplican automáticamente al deployment actual
- ✅ Necesitas hacer un **nuevo deploy** para que se apliquen

---

## 📋 Checklist Final

- [ ] Variables en Vercel empiezan con `sk_live_` y `pk_live_` (no `sk_test_` o `pk_test_`)
- [ ] Variables están en Production, Preview, Development (los 3 ambientes)
- [ ] Haz un **nuevo deploy** después de cambiar variables
- [ ] Esperas a que termine el deploy (2-3 minutos)
- [ ] Recargas la página en el navegador (Ctrl+F5)
- [ ] Pruebas hacer una compra
- [ ] El error desaparece

---

## 🆘 Si Aún No Funciona

1. Verifica los logs de Vercel para ver qué modo detecta
2. Verifica que las claves en Stripe Dashboard sean de modo LIVE
3. Asegúrate de haber hecho un nuevo deploy después de cambiar variables
4. Intenta limpiar el caché del navegador (Ctrl+Shift+Del)
