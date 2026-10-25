# ✅ CHECKLIST FINAL PARA DEPLOY EN VERCEL

## 🎯 ESTADO ACTUAL

### ✅ Completado
- ✅ Build local exitoso (34 rutas generadas)
- ✅ 0 errores de TypeScript
- ✅ Git push completado a branch `fix/sistema-ventas-automatizado`
- ✅ vercel.json creado
- ✅ next.config.mjs actualizado para Next.js 16
- ✅ .env.example creado como template
- ✅ Documentación completa de deploy creada

---

## 🚀 SIGUIENTE PASO: DEPLOY EN VERCEL

### **Opción 1: Vercel Dashboard (Más Fácil)**

1. **Ir a Vercel**: https://vercel.com

2. **Import Project**:
   - Click en **"Add New..."** → **"Project"**
   - Conecta tu cuenta de GitHub (si no está conectada)
   - Busca: `portugal-autentico-v2`
   - Click en **"Import"**

3. **⚠️ CRÍTICO: Configurar Variables de Entorno**

   Ve a **"Environment Variables"** y agrega **TODAS** estas variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=tu_valor_aquí
   SUPABASE_SERVICE_ROLE_KEY=tu_valor_aquí
   STRIPE_SECRET_KEY=tu_valor_aquí
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_valor_aquí
   NEXT_PUBLIC_SITE_URL=https://tu-proyecto.vercel.app
   ```

   **Importante:**
   - Copia los valores exactos de tu archivo `.env.local`
   - Para cada variable, selecciona: **Production**, **Preview**, **Development**

4. **Configure Project**:
   - Framework Preset: **Next.js** (detectado automáticamente)
   - Root Directory: `./` (dejar por defecto)
   - Build Command: `npm run build` (por defecto, vercel.json lo configura)
   - Output Directory: `.next` (por defecto)

5. **Deploy**:
   - Click en **"Deploy"**
   - Espera 2-4 minutos
   - ✅ Si todo sale bien: **"Congratulations! Your project has been deployed"**

6. **Actualizar NEXT_PUBLIC_SITE_URL**:
   - Copia tu URL de Vercel: `https://portugal-autentico-xxx.vercel.app`
   - Ve a **Settings** → **Environment Variables**
   - Edita `NEXT_PUBLIC_SITE_URL` con tu URL real
   - **Deployments** → Click en el último → **"Redeploy"**

---

### **Opción 2: Vercel CLI (Alternativa)**

```bash
# 1. Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# Responde las preguntas:
# - Set up and deploy? Y
# - Which scope? [Tu usuario]
# - Link to existing project? N
# - Project name: portugal-autentico
# - Directory: ./

# 4. Deploy a producción
vercel --prod
```

**Agregar variables de entorno con CLI:**
```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add STRIPE_SECRET_KEY
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
vercel env add NEXT_PUBLIC_SITE_URL

# Luego redeploy:
vercel --prod
```

---

## 🔍 SI EL DEPLOY FALLA

### **1. Ver el Error**
En Vercel Dashboard:
- **Deployments** → Click en deployment fallido
- **Build Logs** → Buscar líneas con `Error:`

### **2. Errores Más Comunes**

#### ❌ "Missing environment variable NEXT_PUBLIC_XXX"
**Solución**:
- Verifica que agregaste TODAS las variables en Settings → Environment Variables
- Verifica que seleccionaste **Production**
- Redeploy

#### ❌ "Module not found: Can't resolve '@/...'"
**Solución**:
- Verifica que tsconfig.json tiene `"paths": { "@/*": ["./src/*"] }`
- Este error NO debería aparecer (ya verificado localmente)

#### ❌ "Build exceeded maximum duration"
**Solución**:
- Actualizar package.json:
  ```json
  "scripts": {
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build"
  }
  ```

#### ❌ "Type error" durante build
**Solución**:
- Ejecutar localmente: `npm run build`
- Si falla local, arreglar primero
- Si funciona local pero falla en Vercel, compartir logs completos

---

## 📋 PRE-DEPLOY VERIFICATION

Ejecuta esto ANTES de deploy para verificar todo:

```bash
# 1. Verificar que no hay cambios pendientes
git status

# 2. Verificar build local
npm run build

# 3. Verificar variables de entorno locales
cat .env.local | grep -v "^#" | grep -v "^$"

# 4. Verificar archivos clave existen
ls -la vercel.json next.config.mjs .env.example
```

**Resultado esperado:**
```
✅ Git: working tree clean
✅ Build: 34 routes generated successfully
✅ .env.local: 7 variables configuradas
✅ Archivos: vercel.json, next.config.mjs, .env.example existen
```

---

## ✅ POST-DEPLOY VERIFICATION

Una vez deployed:

```bash
# 1. Verificar que el sitio carga
curl -I https://tu-proyecto.vercel.app

# 2. Test manual en navegador
# Abre: https://tu-proyecto.vercel.app
# Verifica:
[ ] Home page carga correctamente
[ ] Imágenes se muestran
[ ] Links funcionan
[ ] Sticky CTA aparece al hacer scroll
[ ] Exit modal funciona
```

---

## 🆘 SOPORTE

Si después de seguir estos pasos el deploy sigue fallando:

**Envíame:**
1. Screenshot del error en Vercel (Build Logs completos)
2. Output de `npm run build` local
3. Screenshot de variables de entorno en Vercel (solo nombres, sin valores)

**Mientras tanto:**
- Lee DEPLOY-AHORA.md para instrucciones detalladas
- Lee VERCEL-DEPLOY-FIX.md para soluciones a 7 problemas comunes

---

## 📊 RESUMEN DE ARCHIVOS DEPLOY

| Archivo | Propósito |
|---------|-----------|
| `vercel.json` | Configuración de deployment en Vercel |
| `next.config.mjs` | Configuración Next.js 16 compatible |
| `.env.example` | Template de variables de entorno |
| `DEPLOY-AHORA.md` | Guía paso a paso de deployment |
| `VERCEL-DEPLOY-FIX.md` | Troubleshooting de errores comunes |
| **Este archivo** | Checklist rápido pre/post-deploy |

---

## 🎉 SIGUIENTE PASO

**Ahora mismo:**
1. Ve a https://vercel.com
2. Click en **"Add New..."** → **"Project"**
3. Import `portugal-autentico-v2`
4. **AGREGA LAS 7 VARIABLES DE ENTORNO** (copiar de .env.local)
5. Click en **"Deploy"**
6. Espera 2-4 minutos
7. ✅ Tu sitio estará en: `https://portugal-autentico-xxx.vercel.app`

**Después del deploy:**
1. Actualiza `NEXT_PUBLIC_SITE_URL` con tu URL de Vercel
2. Redeploy
3. Test completo de funcionalidades
4. ¡Celebra! 🎊

---

¡Listo para deploy! 🚀
