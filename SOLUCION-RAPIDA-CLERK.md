# 🚀 SOLUCIÓN RÁPIDA: Error de CORS con Clerk

## ❌ El Problema

Tienes un dominio personalizado configurado en Clerk (`estabaenlisboa.com`) pero **no está verificado** (0/5 Verified). Por eso hay error de CORS y Clerk no carga.

## ✅ SOLUCIÓN A: Desactivar Dominio Personalizado (Más Rápida - 2 minutos)

### Paso 1: Buscar opción para eliminar dominio

En la página de Clerk Dashboard que estás viendo:

1. **Busca en la parte superior** de la sección "DNS Configuration"
   - Debe haber un botón o enlace que diga **"Remove"**, **"Delete"**, o **"Disable"**
   - O un icono de **engranaje/configuración** (⚙️)

2. Si no lo encuentras aquí, ve a:
   - **Settings** → **General** (o buscar "Domain")
   - Busca la opción para **"Remove custom domain"** o **"Use default domain"**

3. **Elimina o desactiva** el dominio personalizado

### Paso 2: Verificar que se desactivó

1. Después de eliminarlo, deberías ver:
   - Clerk usando su dominio por defecto (algo como `clerk.dev` o similar)
   - O simplemente ya no aparecer la configuración de DNS

### Paso 3: Redeploy en Vercel

1. Ve a **Vercel Dashboard** → **Deployments**
2. Click en los **3 puntos** (⋯) del último deployment
3. **Redeploy**
4. Espera 2-3 minutos

### Paso 4: Probar

1. Ve a https://estabaenlisboa.com
2. **Recarga con Ctrl+F5** (limpiar caché)
3. Abre la consola (F12)
4. **Verifica que NO aparezca el error de CORS**
5. Intenta hacer una compra

---

## ✅ SOLUCIÓN B: Configurar DNS Correctamente (Si quieres mantener dominio personalizado)

Si prefieres mantener el dominio personalizado para branding, necesitas configurar los DNS.

### Paso 1: Ir a tu proveedor de DNS

Donde gestionas los DNS de `estabaenlisboa.com` (puede ser Vercel, Cloudflare, Namecheap, etc.)

### Paso 2: Agregar los registros CNAME

Desde la página de Clerk que estás viendo, necesitas agregar estos 5 registros CNAME:

#### 1. Frontend API
- **Nombre/Host:** `clerk`
- **Tipo:** `CNAME`
- **Valor/Destino:** `frontend-api.clerk.services`
- **TTL:** `Auto` o `3600`

#### 2. Account Portal
- **Nombre/Host:** `accounts`
- **Tipo:** `CNAME`
- **Valor/Destino:** `accounts.clerk.services`
- **TTL:** `Auto` o `3600`

#### 3. Email 1
- **Nombre/Host:** `clkmail`
- **Tipo:** `CNAME`
- **Valor/Destino:** `mail.5p6m3m2oa8xk.clerk.services`
- **TTL:** `Auto` o `3600`

#### 4. Email DKIM 1
- **Nombre/Host:** `clk._domainkey`
- **Tipo:** `CNAME`
- **Valor/Destino:** `dkim1.5p6m3m2oa8xk.clerk.services`
- **TTL:** `Auto` o `3600`

#### 5. Email DKIM 2
- **Nombre/Host:** `clk2._domainkey`
- **Tipo:** `CNAME`
- **Valor/Destino:** `dkim2.5p6m3m2oa8xk.clerk.services` (probablemente, aunque no se ve completo)
- **TTL:** `Auto` o `3600`

### Paso 3: Esperar propagación DNS

1. Los cambios DNS pueden tardar **15 minutos a 24 horas** en propagarse
2. **Verifica en Clerk Dashboard** cuando todos muestren "Verified" (5/5)

### Paso 4: Verificar en Clerk

1. En la página de Clerk Dashboard, haz click en **"Verify configuration"**
2. Espera a que todos los dominios muestren **"Verified"** (5/5 Verified)

### Paso 5: Redeploy en Vercel

1. Una vez todos verificados, haz redeploy en Vercel
2. Prueba el checkout

---

## 🎯 ¿Cuál Solución Elegir?

### **SOLUCIÓN A (Desactivar dominio)** - Recomendada si:
- ✅ Quieres que funcione **AHORA** (2 minutos)
- ✅ No te importa usar el dominio por defecto de Clerk
- ✅ Puedes configurar el dominio personalizado después

### **SOLUCIÓN B (Configurar DNS)** - Recomendada si:
- ✅ Quieres mejor branding (dominio personalizado)
- ✅ Tienes acceso a gestionar DNS
- ✅ Puedes esperar la propagación DNS (15 min - 24 horas)

---

## ⚠️ IMPORTANTE

**Ambas soluciones funcionan**, pero la **SOLUCIÓN A es mucho más rápida**.

Una vez que el checkout funcione con la SOLUCIÓN A, puedes configurar el dominio personalizado después (SOLUCIÓN B) sin afectar el funcionamiento.

---

## 🚀 Recomendación

**Empieza con SOLUCIÓN A** (desactivar dominio) para que funcione el checkout **ahora**. Después, cuando tengas tiempo, puedes configurar el DNS (SOLUCIÓN B).
