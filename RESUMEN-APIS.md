# 📊 Resumen de APIs y Configuración

## ✅ Estado Actual

### APIs Funcionales

#### 1. `/api/checkout` - Procesamiento de Pagos
- **Estado**: ✅ FUNCIONAL
- **Stripe**: Modo LIVE (pagos reales)
- **Clerk**: Modo TEST (autenticación funciona)
- **Variables requeridas**: ✅ Todas configuradas

**Variables necesarias:**
- `STRIPE_SECRET_KEY` (sk_live_...)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (pk_live_...)
- `CLERK_SECRET_KEY` (sk_test_...)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (pk_test_...)
- `NEXT_PUBLIC_SITE_URL` (https://estabaenlisboa.com)

#### 2. `/api/contact` - Formulario de Contacto
- **Estado**: ✅ FUNCIONAL
- **Variables requeridas**: ✅ Todas configuradas

**Variables necesarias:**
- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASS`

#### 3. `/api/subscribe` - Suscripciones
- **Estado**: ⚠️ FUNCIONAL PARCIALMENTE
- **Falta**: `SUPABASE_SERVICE_ROLE_KEY` (no crítico para checkout)

**Variables necesarias:**
- `SMTP_HOST` ✅
- `SMTP_USER` ✅
- `SMTP_PASS` ✅
- `NEXT_PUBLIC_SUPABASE_URL` ✅
- `SUPABASE_SERVICE_ROLE_KEY` ❌

---

## 📋 Modos de Operación

### Stripe
- **Modo actual**: LIVE
- **Significado**: Los pagos son reales
- **Estado**: ✅ Listo para producción

### Clerk
- **Modo actual**: TEST
- **Significado**: Los usuarios son de prueba (pero la autenticación funciona)
- **Para producción**: Puedes cambiar a LIVE más adelante si necesitas usuarios reales

---

## 🧪 Cómo Probar el Checkout

1. **Inicia sesión** en el sitio web (con Clerk)
2. **Ve a una guía** (ej: `/itinerarios/lisboa-1-dia-lo-esencial`)
3. **Click en "Comprar ahora"**
4. **Deberías ser redirigido a Stripe Checkout**

---

## 🔍 Diagnóstico de Problemas

Si el checkout no funciona:

1. **Verifica que estés logueado** (Clerk requiere autenticación)
2. **Abre la consola del navegador** (F12) y busca errores
3. **Revisa los logs de Vercel**: Deployments → View Function Logs
4. **Verifica las variables de entorno en Vercel** están actualizadas

---

## 📝 Variables de Entorno en Vercel

Asegúrate de tener estas variables en Vercel:

```
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_test_... o sk_live_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_... o pk_live_...
NEXT_PUBLIC_SITE_URL=https://estabaenlisboa.com
SMTP_HOST=...
SMTP_USER=...
SMTP_PASS=...
```
