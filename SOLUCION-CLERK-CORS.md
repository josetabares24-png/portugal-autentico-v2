# 🔴 SOLUCIÓN: Error de CORS con Clerk

## ❌ Problema Detectado

```
Access to script at 'https://clerk.estabaenlisboa.com/npm/@clerk/clerk-js@5/dist/clerk.browser.js' 
from origin 'https://estabaenlisboa.com' has been blocked by CORS policy
```

**Esto significa:** Clerk está intentando cargar desde un dominio personalizado (`clerk.estabaenlisboa.com`) pero no está configurado correctamente.

## ✅ SOLUCIÓN

### Opción 1: Configurar Dominio Personalizado en Clerk (Recomendado)

1. **Ve a Clerk Dashboard**: https://dashboard.clerk.com/
2. **Selecciona tu aplicación**
3. **Ve a**: Settings → Domains
4. **Agrega el dominio**: `estabaenlisboa.com`
5. **Verifica el dominio** según las instrucciones de Clerk
6. **Configura el subdominio de Clerk**: `clerk.estabaenlisboa.com` (si es necesario)

### Opción 2: Usar Dominio por Defecto de Clerk (Más Simple)

Si no quieres usar un dominio personalizado, Clerk usará su dominio por defecto (no habrá problemas de CORS).

**Verificar en Clerk Dashboard:**
1. Ve a **Settings** → **Domains**
2. Si `clerk.estabaenlisboa.com` está configurado pero no funciona, **desactívalo temporalmente**
3. Esto hará que Clerk use su dominio por defecto (`clerk.dev` o similar)

### Opción 3: Configurar ClerkProvider sin Dominio Personalizado

Verificar que el código no esté forzando un dominio personalizado:

**En `src/app/layout.tsx`**, el `ClerkProvider` debería ser:

```tsx
<ClerkProvider>
  ...
</ClerkProvider>
```

**NO debería ser:**
```tsx
<ClerkProvider domain="clerk.estabaenlisboa.com">
  ...
</ClerkProvider>
```

## 🔍 Verificación

### En Clerk Dashboard:
1. **Settings** → **Domains**
2. Verifica qué dominios están configurados
3. Si `clerk.estabaenlisboa.com` está activo pero no funciona:
   - Desactívalo temporalmente
   - O verifica que esté correctamente configurado en tu DNS

### En Vercel:
1. **Settings** → **Environment Variables**
2. Verifica que `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` esté configurada
3. Verifica que `CLERK_SECRET_KEY` esté configurada

## ⚠️ IMPORTANTE

Si usas un dominio personalizado de Clerk:
- Debes configurarlo en Clerk Dashboard
- Debes configurar los registros DNS correctamente
- Debe estar verificado

**Si no está configurado correctamente, Clerk no funcionará.**

## 🚀 Solución Rápida

**La forma más rápida de solucionarlo:**

1. Ve a **Clerk Dashboard** → **Settings** → **Domains**
2. Si hay un dominio personalizado (`clerk.estabaenlisboa.com`) activo:
   - **Desactívalo temporalmente**
   - O **configúralo correctamente**
3. **Haz un nuevo deploy en Vercel**
4. **Prueba nuevamente**

## 📋 Checklist

- [ ] Clerk Dashboard: Dominio verificado y configurado correctamente
- [ ] O desactivar dominio personalizado para usar dominio por defecto
- [ ] Variables de Clerk en Vercel: Configuradas correctamente
- [ ] Nuevo deploy en Vercel después de cambiar configuración
- [ ] Error de CORS desaparece en la consola
- [ ] Clerk se carga correctamente
- [ ] Checkout funciona
