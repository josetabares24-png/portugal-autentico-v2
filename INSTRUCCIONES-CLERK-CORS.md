# 🚨 SOLUCIÓN URGENTE: Error de CORS con Clerk

## ❌ El Problema

```
Access to script at 'https://clerk.estabaenlisboa.com/npm/@clerk/clerk-js@5/dist/clerk.browser.js' 
from origin 'https://estabaenlisboa.com' has been blocked by CORS policy
```

**Esto significa:** Clerk está intentando usar un dominio personalizado (`clerk.estabaenlisboa.com`) que no está configurado correctamente.

## ✅ SOLUCIÓN RÁPIDA (5 minutos)

### Paso 1: Ve a Clerk Dashboard
1. Abre: https://dashboard.clerk.com/
2. Selecciona tu aplicación

### Paso 2: Verificar Dominios
1. Ve a **Settings** → **Domains**
2. Busca si hay un dominio personalizado configurado (`clerk.estabaenlisboa.com` o `estabaenlisboa.com`)

### Paso 3: SOLUCIÓN A (Recomendada - Más Rápida)

**Desactivar Dominio Personalizado:**

1. Si ves un dominio personalizado activo:
   - Click en **"Remove"** o **"Disable"** (desactivar)
   - O simplemente **elimínalo**

2. Esto hará que Clerk use su dominio por defecto (sin problemas de CORS)

3. **No necesitas configurar nada más** - Clerk funcionará automáticamente

### Paso 4: Hacer Redeploy en Vercel

**DESPUÉS de desactivar el dominio personalizado:**

1. Ve a **Vercel Dashboard** → **Deployments**
2. Click en los **3 puntos** (⋯) del último deployment
3. **Redeploy**
4. Espera 2-3 minutos

### Paso 5: Probar Nuevamente

1. Ve a https://estabaenlisboa.com
2. **Recarga con Ctrl+F5** (limpiar caché)
3. **Abre la consola (F12)**
4. **Verifica que NO aparezca el error de CORS**
5. **Intenta hacer una compra**

## 🔧 SOLUCIÓN B (Alternativa - Si quieres usar dominio personalizado)

Si prefieres usar el dominio personalizado de Clerk:

### 1. En Clerk Dashboard:
- **Settings** → **Domains**
- Configura `estabaenlisboa.com` como dominio personalizado
- Sigue las instrucciones de verificación de Clerk

### 2. En tu DNS (donde gestionas los DNS de estabaenlisboa.com):
- Agrega los registros CNAME que Clerk te indique
- Espera a que se propaguen (puede tomar hasta 24 horas)

### 3. Verifica en Clerk Dashboard:
- Espera a que Clerk verifique el dominio (estado: "Verified")

### 4. Redeploy en Vercel:
- Haz un nuevo deploy después de que el dominio esté verificado

## ✅ Qué Esperar Después de la Solución

Una vez solucionado:

1. ✅ **No más errores de CORS** en la consola
2. ✅ **Clerk se carga correctamente** (verás logs de Clerk sin errores)
3. ✅ **El botón "Comprar ahora" funciona** (no dice "Cargando..." indefinidamente)
4. ✅ **Puedes iniciar sesión** con Clerk
5. ✅ **El checkout funciona** correctamente

## 🔍 Verificación

### En la Consola del Navegador (F12):
- **ANTES:** Errores de CORS con `clerk.estabaenlisboa.com`
- **DESPUÉS:** Clerk carga sin errores, logs normales de Clerk

### En Clerk Dashboard:
- **Settings** → **Domains**
- Debería mostrar el dominio por defecto de Clerk (no dominio personalizado)
- O si usas dominio personalizado: debería estar **Verified** (verificado)

## 📝 Nota Importante

**El código está correcto.** El problema es solo la configuración del dominio en Clerk Dashboard.

No necesitas cambiar ningún código - solo la configuración en Clerk Dashboard.

## 🚀 Siguiente Paso

**Haz esto AHORA:**

1. Ve a Clerk Dashboard → Settings → Domains
2. Desactiva/elimina el dominio personalizado
3. Haz redeploy en Vercel
4. Prueba nuevamente

**Después de hacer esto, el checkout debería funcionar correctamente.**
