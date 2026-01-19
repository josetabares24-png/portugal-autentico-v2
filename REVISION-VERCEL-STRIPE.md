# 🔍 GUÍA PASO A PASO: Verificar Vercel y Stripe

## ⚠️ IMPORTANTE: Sigue estos pasos EXACTAMENTE

---

## 📋 PASO 1: VERIFICAR VERCEL - Variables de Entorno

### 1.1. Ve a Vercel Dashboard
1. Abre: https://vercel.com
2. Click en tu proyecto `portugal-autentico-v2`
3. Ve a **Settings** → **Environment Variables**

### 1.2. Verifica estas variables EXACTAS:

**Debes tener estas 5 variables:**

```
✅ STRIPE_SECRET_KEY = sk_live_51Sl...0Vuf
   (Debe empezar con sk_live_)

✅ NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_live_51Sl...meSI
   (Debe empezar con pk_live_)

✅ CLERK_SECRET_KEY = sk_test_... o sk_live_...
   (Debe empezar con sk_test_ o sk_live_)

✅ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_test_... o pk_live_...
   (Debe empezar con pk_test_ o pk_live_)

✅ NEXT_PUBLIC_SITE_URL = https://estabaenlisboa.com
   (EXACTAMENTE esto, sin barra al final)
```

### 1.3. Verifica que cada variable esté en TODOS los ambientes:
- ✅ Production
- ✅ Preview  
- ✅ Development

### 1.4. Si falta alguna o está mal:
1. **Click en la variable**
2. **Edita** y copia el valor correcto
3. **Guarda**
4. **Haz un nuevo deploy** (ver paso 2)

---

## 📋 PASO 2: FORZAR NUEVO DEPLOY EN VERCEL

**DESPUÉS de cambiar variables, SIEMPRE haz un nuevo deploy:**

### Opción A: Desde Vercel Dashboard
1. Ve a **Deployments**
2. Click en los **3 puntos** (⋯) del último deployment
3. Selecciona **Redeploy**
4. Espera a que termine (2-3 minutos)

### Opción B: Desde Terminal
```bash
git commit --allow-empty -m "Force redeploy"
git push origin main
```

---

## 📋 PASO 3: VERIFICAR LOGS DE VERCEL

### 3.1. Intenta hacer una compra:
1. Ve a: https://estabaenlisboa.com
2. **Inicia sesión** (con Clerk)
3. Ve a una guía: `/itinerarios/lisboa-1-dia-lo-esencial`
4. Click en **"Comprar ahora"**

### 3.2. Revisa los logs inmediatamente:
1. Ve a Vercel Dashboard → **Deployments**
2. Click en el último deployment
3. Click en **View Function Logs**
4. Busca líneas que empiecen con: **"API Checkout:"**

### 3.3. Busca estos mensajes:

**✅ Si ves esto → TODO OK:**
```
API Checkout: Iniciando proceso de checkout
API Checkout: Auth check { hasUserId: true }
API Checkout: productId recibido = lisboa-1-dia-lo-esencial
API Checkout: Producto encontrado
API Checkout: Price encontrado en Stripe
API Checkout: Sesión creada: cs_test_...
API Checkout: URL de checkout: https://checkout.stripe.com/...
```

**❌ Si ves esto → ERROR:**
```
API Checkout: Usuario no autenticado
→ Problema: Clerk no está autenticando correctamente

API Checkout: Price missing in Stripe
→ Problema: El Price ID no existe en Stripe (modo incorrecto)

Error: STRIPE_SECRET_KEY is not configured
→ Problema: Falta la variable en Vercel

StripeAuthenticationError
→ Problema: La clave de Stripe es inválida o está en modo incorrecto
```

**Copia el error EXACTO que ves y compártelo.**

---

## 📋 PASO 4: VERIFICAR STRIPE DASHBOARD

### 4.1. Ve a Stripe Dashboard
1. Abre: https://dashboard.stripe.com/
2. **IMPORTANTE**: Verifica que estás en **modo LIVE** (toggle arriba a la derecha debe decir "Live mode")

### 4.2. Verifica API Keys:
1. Ve a **Developers** → **API keys**
2. Verifica que las claves que tienes en Vercel coincidan con las de Stripe
   - **Secret key** debe empezar con `sk_live_`
   - **Publishable key** debe empezar con `pk_live_`

### 4.3. Verifica Productos:
1. Ve a **Products**
2. Verifica que existen estos 7 productos y están **ACTIVOS** (el toggle debe estar verde):
   - Lisboa 1 Día (Price ID: `price_1SrQdzJglPw4zh36crmeVMh8`)
   - Lisboa 2 Días (Price ID: `price_1SrQdzJglPw4zh36k0f3ry7E`)
   - Lisboa 3 Días (Price ID: `price_1SrQe0JglPw4zh36sSQFZuPM`)
   - Lisboa 7 Días (Price ID: `price_1SrQe0JglPw4zh36X9fEZreG`)
   - Lisboa Romántica (Price ID: `price_1SrQe1JglPw4zh36n3T893Ce`)
   - Lisboa Familiar (Price ID: `price_1SrQe2JglPw4zh361zLoS8HK`)
   - Lisboa Fotografía (Price ID: `price_1SrQe2JglPw4zh36lWx5sCvp`)

### 4.4. Si algún producto no existe o está inactivo:
1. **Click en el producto**
2. **Verifica el Price ID** (debe coincidir con el del código)
3. **Actívalo** si está desactivado (toggle arriba)

---

## 📋 PASO 5: VERIFICAR CLERK DASHBOARD

### 5.1. Ve a Clerk Dashboard
1. Abre: https://dashboard.clerk.com/
2. Selecciona tu aplicación

### 5.2. Verifica API Keys:
1. Ve a **API Keys**
2. Verifica que las claves que tienes en Vercel coincidan con las de Clerk
   - **Secret key** debe empezar con `sk_test_` o `sk_live_`
   - **Publishable key** debe empezar con `pk_test_` o `pk_live_`

### 5.3. Verifica Allowed Origins:
1. Ve a **Settings** → **Allowed origins**
2. Verifica que `https://estabaenlisboa.com` esté en la lista
3. Si falta, agrégalo

---

## 🐛 DIAGNÓSTICO RÁPIDO

### Pregunta 1: ¿Ves algún error en la pantalla al intentar comprar?
- **Sí** → ¿Cuál es el mensaje exacto? Compártelo
- **No** → Continúa con Pregunta 2

### Pregunta 2: ¿Te redirige a Stripe Checkout?
- **Sí** → ✅ Funciona (aunque haya errores en consola, el checkout funciona)
- **No** → Continúa con Pregunta 3

### Pregunta 3: ¿Qué ves en los logs de Vercel?
- Copia el mensaje EXACTO que ves en "API Checkout:"

### Pregunta 4: ¿Estás logueado cuando intentas comprar?
- **No** → Debes estar logueado para comprar
- **Sí** → Continúa con Pregunta 5

### Pregunta 5: ¿Las variables en Vercel coinciden con Stripe/Clerk?
- **No** → Actualiza las variables y haz redeploy
- **Sí** → Revisa los logs de Vercel para ver el error específico

---

## 📞 INFORMACIÓN PARA COMPARTIR

Si aún no funciona, comparte esta información:

1. **Error en pantalla** (si hay alguno)
2. **Logs de Vercel** (últimas 20 líneas de "API Checkout:")
3. **Consola del navegador** (F12 → Console → errores en rojo)
4. **Network tab** (F12 → Network → buscar `/api/checkout` → click → Response)

Con esta información podré identificar el problema exacto.

---

## ✅ CHECKLIST FINAL

- [ ] Variables de entorno en Vercel: Todas configuradas
- [ ] Modo Stripe en Vercel: LIVE (sk_live_...)
- [ ] Modo Stripe en Stripe Dashboard: LIVE
- [ ] Productos en Stripe: Todos existen y están activos
- [ ] Price IDs: Coinciden entre código y Stripe
- [ ] Clerk configurado en Vercel
- [ ] Allowed origins en Clerk: incluye estabaenlisboa.com
- [ ] Nuevo deploy en Vercel después de cambios
- [ ] Estás logueado cuando intentas comprar
- [ ] Logs de Vercel revisados
