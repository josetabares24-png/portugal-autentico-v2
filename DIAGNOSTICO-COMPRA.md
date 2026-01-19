# 🔍 Diagnóstico Completo del Sistema de Compra

## ✅ Estado Actual

### Configuración Local (Verificada ✅)
- ✅ Variables de entorno: Configuradas correctamente
- ✅ Modo Stripe: **LIVE**
- ✅ Conexión con Stripe: Funcional
- ✅ Productos en Stripe: 7 productos activos
- ✅ Price IDs: Todos existen y están activos en Stripe (modo LIVE)

### Archivos del Sistema
- ✅ `src/app/api/checkout/route.ts` - API de checkout con logging completo
- ✅ `src/hooks/useCheckout.ts` - Hook de React para checkout
- ✅ `src/components/BuyButton.tsx` - Componente de botón de compra
- ✅ `src/lib/stripe-products.ts` - Configuración de productos y Price IDs

## 🔧 Qué Verificar en Vercel

### 1. Variables de Entorno en Vercel

Ve a: **Vercel Dashboard → Tu Proyecto → Settings → Environment Variables**

**Debes tener estas 3 variables:**

```
STRIPE_SECRET_KEY=sk_live_51Sl...0Vuf
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_51Sl...meSI
NEXT_PUBLIC_SITE_URL=https://estabaenlisboa.com
```

**Verifica que:**
- ✅ Empiecen con `sk_live_` y `pk_live_` (modo LIVE)
- ✅ Sean exactamente las mismas que tienes en `.env.local`
- ✅ `NEXT_PUBLIC_SITE_URL` sea exactamente `https://estabaenlisboa.com` (sin barra final)

### 2. Price IDs en el Código vs Stripe

**Price IDs en `src/lib/stripe-products.ts`:**
```typescript
price_1SrQdzJglPw4zh36crmeVMh8  // Lisboa 1 Día
price_1SrQdzJglPw4zh36k0f3ry7E  // Lisboa 2 Días
price_1SrQe0JglPw4zh36sSQFZuPM  // Lisboa 3 Días
price_1SrQe0JglPw4zh36X9fEZreG  // Lisboa 7 Días
price_1SrQe1JglPw4zh36n3T893Ce  // Lisboa Romántica
price_1SrQe2JglPw4zh361zLoS8HK  // Lisboa Familiar
price_1SrQe2JglPw4zh36lWx5sCvp  // Lisboa Fotografía
```

**Verifica en Stripe Dashboard (modo LIVE):**
1. Ve a https://dashboard.stripe.com/
2. Asegúrate de estar en **modo LIVE** (toggle arriba)
3. Ve a **Productos**
4. Para cada producto, verifica que el Price ID coincida con el del código

### 3. Clerk (Autenticación)

Verifica que Clerk esté configurado en Vercel:

**Variables de entorno de Clerk en Vercel:**
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_... o pk_live_...
CLERK_SECRET_KEY=sk_test_... o sk_live_...
```

**El checkout requiere autenticación**, así que:
- ✅ El usuario debe estar logueado antes de comprar
- ✅ Clerk debe estar funcionando correctamente

### 4. Forzar Deploy en Vercel

Después de cambiar variables de entorno, **SIEMPRE** haz un nuevo deploy:

```bash
git commit --allow-empty -m "Force redeploy after env vars update"
git push origin main
```

O desde Vercel Dashboard:
- **Deployments** → Último deployment → **Redeploy**

## 🐛 Cómo Diagnosticar el Error

### Paso 1: Abrir Consola del Navegador

1. Ve a tu sitio: https://estabaenlisboa.com
2. Abre la consola del navegador (F12 o Cmd+Option+I)
3. Ve a la pestaña **Console**
4. Intenta hacer una compra
5. Busca mensajes de error (en rojo)

### Paso 2: Revisar Network Requests

1. En la consola, ve a la pestaña **Network**
2. Filtra por "checkout" o "api"
3. Click en la llamada a `/api/checkout`
4. Ve a la pestaña **Response** para ver el error del servidor

### Paso 3: Revisar Logs de Vercel

1. Ve a Vercel Dashboard
2. **Deployments** → Último deployment
3. Click en **View Function Logs**
4. Busca mensajes que empiecen con "API Checkout:"
5. Busca errores (líneas en rojo)

## 📋 Checklist de Solución de Problemas

- [ ] Variables de entorno en Vercel: Verificadas
- [ ] Modo Stripe en Vercel: LIVE (sk_live_... y pk_live_...)
- [ ] Price IDs: Coinciden entre código y Stripe (modo LIVE)
- [ ] Productos en Stripe: Todos activos (modo LIVE)
- [ ] Deploy en Vercel: Último deploy después de cambiar variables
- [ ] Clerk: Configurado y funcionando
- [ ] Usuario: Logueado antes de intentar comprar
- [ ] Logs de Vercel: Revisados para ver error específico
- [ ] Consola del navegador: Revisada para ver errores del cliente

## 🚀 Si Todo Está Configurado Correctamente

El flujo debería funcionar así:

1. Usuario hace click en "Comprar ahora"
2. Si no está logueado → Se muestra botón de "Inicia sesión"
3. Si está logueado → Se hace POST a `/api/checkout` con `{ productId: "..." }`
4. El API verifica autenticación, valida producto, crea sesión en Stripe
5. Se redirige a Stripe Checkout (`session.url`)
6. Usuario paga en Stripe
7. Se redirige a `/exito?session_id=...`

## 📞 Información Necesaria para Diagnosticar

Si aún no funciona, comparte:

1. **Error en la consola del navegador** (si hay)
2. **Response de `/api/checkout`** (en Network tab)
3. **Logs de Vercel** (de la función checkout)
4. **Qué producto intentaste comprar**
5. **Si estabas logueado o no**
