# 🔍 Guía para Verificar y Solucionar Problemas de Compra

## ✅ Verificación Local (Completada)

Ya verificamos que localmente todo está configurado correctamente:
- ✅ Variables de entorno configuradas
- ✅ Conexión con Stripe (Modo: LIVE)
- ✅ 7 productos activos en Stripe
- ✅ Todos los Price IDs existen y están activos

## 🔧 Verificación en Vercel

### Paso 1: Verificar Variables de Entorno en Vercel

1. Ve a tu proyecto en Vercel: https://vercel.com
2. Click en **Settings** → **Environment Variables**
3. Verifica que tienes **EXACTAMENTE** estas variables:

```
STRIPE_SECRET_KEY=sk_live_... (debe empezar con sk_live_)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_... (debe empezar con pk_live_)
NEXT_PUBLIC_SITE_URL=https://estabaenlisboa.com
```

**⚠️ IMPORTANTE:**
- Las claves deben ser del **modo LIVE** (empiezan con `sk_live_` y `pk_live_`)
- Las claves deben coincidir con las que tienes en Stripe Dashboard (modo LIVE)
- El `NEXT_PUBLIC_SITE_URL` debe ser exactamente `https://estabaenlisboa.com` (sin barra al final)

### Paso 2: Verificar que el Modo Coincida

En Stripe Dashboard:
1. Ve a https://dashboard.stripe.com/
2. Verifica que estás en **modo LIVE** (toggle arriba a la derecha debe decir "Live mode")
3. Ve a **Productos** → verifica que todos los productos existen y están **activos**

### Paso 3: Verificar los Price IDs

Los Price IDs en tu código (`src/lib/stripe-products.ts`) deben coincidir con los Price IDs en Stripe (modo LIVE):

1. En Stripe Dashboard (modo LIVE), ve a cada producto
2. Copia el **Price ID** (empieza con `price_`)
3. Compara con los Price IDs en `src/lib/stripe-products.ts`

**Price IDs actuales configurados:**
- `price_1SrQdzJglPw4zh36crmeVMh8` - Lisboa 1 Día (€1.99)
- `price_1SrQdzJglPw4zh36k0f3ry7E` - Lisboa 2 Días (€2.99)
- `price_1SrQe0JglPw4zh36sSQFZuPM` - Lisboa 3 Días (€3.99)
- `price_1SrQe0JglPw4zh36X9fEZreG` - Lisboa 7 Días (€5.99)
- `price_1SrQe1JglPw4zh36n3T893Ce` - Lisboa Romántica (€2.99)
- `price_1SrQe2JglPw4zh361zLoS8HK` - Lisboa Familiar (€2.99)
- `price_1SrQe2JglPw4zh36lWx5sCvp` - Lisboa Fotografía (€2.99)

### Paso 4: Forzar Nuevo Deploy en Vercel

Después de verificar/cambiar las variables de entorno:

1. En Vercel, ve a **Deployments**
2. Click en los **3 puntos** del último deployment
3. Selecciona **Redeploy**
4. Espera a que termine el deploy

**O desde la terminal:**
```bash
git commit --allow-empty -m "Force redeploy to apply env vars"
git push origin main
```

### Paso 5: Verificar los Logs de Vercel

1. En Vercel, ve a **Deployments**
2. Click en el último deployment
3. Click en **View Function Logs**
4. Intenta hacer una compra en tu sitio web
5. Revisa los logs para ver el error específico

**Busca estos mensajes en los logs:**
- `API Checkout: Iniciando proceso de checkout`
- `API Checkout: Auth check`
- `API Checkout: productId recibido`
- `API Checkout: Error completo` (si hay error)

## 🐛 Errores Comunes y Soluciones

### Error: "Debes iniciar sesión para comprar"
**Causa:** El usuario no está autenticado con Clerk
**Solución:** 
- Asegúrate de estar logueado en tu sitio web
- Verifica que Clerk esté configurado correctamente en Vercel

### Error: "El producto no está configurado correctamente en Stripe"
**Causa:** El Price ID no existe en Stripe (modo incorrecto)
**Solución:**
1. Verifica que estás en modo LIVE en Stripe
2. Verifica que el Price ID existe en Stripe
3. Si no existe, crea el producto o actualiza el Price ID en el código

### Error: "Error de configuración del servidor"
**Causa:** Faltan variables de entorno en Vercel
**Solución:**
1. Ve a Vercel → Settings → Environment Variables
2. Verifica que todas las variables estén configuradas
3. Forza un nuevo deploy

### Error: "No se pudo crear la sesión de checkout"
**Causa:** Problema con la API de Stripe
**Solución:**
1. Verifica que la clave `STRIPE_SECRET_KEY` sea válida
2. Verifica que la cuenta de Stripe esté activa
3. Revisa los logs de Vercel para más detalles

## 📋 Checklist Final

Antes de probar una compra, verifica:

- [ ] Variables de entorno en Vercel (STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, NEXT_PUBLIC_SITE_URL)
- [ ] Las claves son del modo LIVE (sk_live_... y pk_live_...)
- [ ] Los productos existen en Stripe (modo LIVE) y están activos
- [ ] Los Price IDs en el código coinciden con Stripe (modo LIVE)
- [ ] Se hizo un nuevo deploy en Vercel después de cambiar las variables
- [ ] Clerk está configurado correctamente
- [ ] Estás logueado en el sitio web antes de intentar comprar

## 🧪 Probar la Compra

1. Ve a tu sitio web: https://estabaenlisboa.com
2. Inicia sesión (si no estás logueado)
3. Ve a una guía (ej: https://estabaenlisboa.com/itinerarios/lisboa-1-dia-lo-esencial)
4. Click en "Comprar ahora"
5. Si funciona, deberías ser redirigido a Stripe Checkout
6. Usa una tarjeta de prueba: `4242 4242 4242 4242`
7. Después del pago, deberías ser redirigido a `/exito`

## 📞 Si Aún No Funciona

1. **Revisa los logs de Vercel** para ver el error específico
2. **Abre la consola del navegador** (F12) y busca errores en la pestaña "Console"
3. **Revisa la pestaña "Network"** en el navegador y busca la llamada a `/api/checkout`
4. **Verifica que el error no sea de Clerk** (autenticación)
5. **Comparte el error exacto** que ves en los logs o en la consola
