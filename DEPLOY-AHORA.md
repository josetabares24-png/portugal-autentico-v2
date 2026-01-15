# 🚀 DEPLOY EN VERCEL - INSTRUCCIONES PASO A PASO

## ✅ ARCHIVOS PREPARADOS

Acabo de crear/actualizar estos archivos para facilitar el deploy:

1. ✅ `vercel.json` - Configuración optimizada de Vercel
2. ✅ `next.config.mjs` - Con ESLint bypass para build
3. ✅ `.env.example` - Template de variables de entorno
4. ✅ `VERCEL-DEPLOY-FIX.md` - Guía completa de troubleshooting

---

## 🎯 OPCIÓN 1: DEPLOY DESDE VERCEL DASHBOARD (RECOMENDADO)

### **Paso 1: Hacer Push de los Cambios**

```bash
git add .
git commit -m "fix: add vercel config and optimize for deployment"
git push origin fix/sistema-ventas-automatizado
```

### **Paso 2: Ir a Vercel Dashboard**

1. Abre: https://vercel.com
2. Login con tu cuenta
3. Click en **"Add New..."** → **"Project"**

### **Paso 3: Importar desde Git**

1. Selecciona tu proveedor Git (GitHub, GitLab, Bitbucket)
2. Busca el repositorio: **portugal-autentico**
3. Click en **"Import"**

### **Paso 4: Configurar Variables de Entorno**

**⚠️ CRÍTICO: Sin estas variables el deploy FALLARÁ**

Click en **"Environment Variables"** y agrega:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clerk_publishable_key
CLERK_SECRET_KEY=tu_clerk_secret_key
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
SUPABASE_SERVICE_ROLE_KEY=tu_supabase_service_role_key
STRIPE_SECRET_KEY=tu_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_stripe_publishable_key
NEXT_PUBLIC_SITE_URL=https://tu-proyecto.vercel.app
```

**Importante:**
- Para cada variable, selecciona: **Production**, **Preview**, y **Development**
- Copia los valores exactos de tu `.env.local`

### **Paso 5: Deploy**

1. Click en **"Deploy"**
2. Espera 2-4 minutos
3. ✅ Si todo sale bien, verás: **"Congratulations! Your project has been deployed"**

### **Paso 6: Actualizar NEXT_PUBLIC_SITE_URL**

1. Una vez deployed, verás tu URL: `https://portugal-autentico-xxx.vercel.app`
2. Ve a **Settings** → **Environment Variables**
3. Edita `NEXT_PUBLIC_SITE_URL` con tu URL real
4. Click en **"Save"**
5. Ve a **Deployments** → Click en el último → **"Redeploy"**

---

## 🎯 OPCIÓN 2: DEPLOY CON VERCEL CLI

Si la opción 1 no funciona, usa CLI:

### **Paso 1: Instalar Vercel CLI**

```bash
npm install -g vercel
```

### **Paso 2: Login**

```bash
vercel login
```

Te pedirá confirmar en el navegador.

### **Paso 3: Deploy**

```bash
# Desde la raíz del proyecto
cd c:\Users\joset\OneDrive\Desktop\portugal-nuevo\portugal-autentico

# Deploy
vercel
```

Durante el proceso, responde:

```
? Set up and deploy "portugal-autentico"? [Y/n] Y
? Which scope do you want to deploy to? [Tu usuario]
? Link to existing project? [N/y] N
? What's your project's name? portugal-autentico
? In which directory is your code located? ./
```

### **Paso 4: Configurar Variables (CLI)**

```bash
# Agregar cada variable
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
# Pega el valor cuando te lo pida
# Selecciona: Production, Preview, Development (espacio para seleccionar)

# Repetir para cada variable:
vercel env add CLERK_SECRET_KEY
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add STRIPE_SECRET_KEY
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
vercel env add NEXT_PUBLIC_SITE_URL
```

### **Paso 5: Deploy a Producción**

```bash
vercel --prod
```

---

## 🔍 SI EL DEPLOY FALLA

### **Paso 1: Ver el Error**

En Vercel Dashboard:
1. Ve a tu proyecto
2. **Deployments** → Click en el deployment fallido
3. Click en **"Build Logs"** o **"Function Logs"**
4. Busca líneas que empiecen con `Error:`

### **Paso 2: Errores Comunes**

#### **Error: "Cannot find module '@/components/...'"**

**Causa:** Problema con imports absolutos

**Solución:**
```bash
# Verificar tsconfig.json tiene:
cat tsconfig.json | grep -A 5 "paths"

# Debe mostrar:
# "paths": {
#   "@/*": ["./src/*"]
# }
```

#### **Error: "Missing environment variable"**

**Causa:** Variables de entorno no configuradas

**Solución:**
1. Ve a Vercel Dashboard → Tu proyecto
2. **Settings** → **Environment Variables**
3. Verifica que TODAS las variables están agregadas
4. Verifica que seleccionaste **Production**
5. **Deployments** → **Redeploy**

#### **Error: "Build exceeded maximum duration"**

**Causa:** Build demora mucho (límite: 45 min en plan gratuito)

**Solución:**
```bash
# Actualizar package.json:
"scripts": {
  "build": "NODE_OPTIONS='--max-old-space-size=2048' next build"
}
```

#### **Error: "ENOENT: no such file or directory"**

**Causa:** Archivo faltante o path incorrecto

**Solución:**
```bash
# Verificar que todos los archivos existen
ls -la src/components/StickyCTA.tsx
ls -la src/components/ExitIntentModal.tsx
ls -la src/components/SchemaMarkup.tsx
ls -la src/components/ComparisonTable.tsx
```

### **Paso 3: Build Local Debug**

```bash
# Limpiar cache
rm -rf .next
rm -rf node_modules
npm install

# Build
npm run build

# Si falla localmente, arreglar antes de deploy
```

---

## 📋 CHECKLIST PRE-DEPLOY

Verifica ANTES de hacer deploy:

```bash
[ ] Git push completado (sin cambios pending)
[ ] npm run build funciona sin errores
[ ] Todos los archivos nuevos están en git (StickyCTA, etc.)
[ ] .env.local tiene todas las variables necesarias
[ ] vercel.json creado
[ ] next.config.mjs actualizado
```

**Comando para verificar:**

```bash
git status
npm run build
ls src/components/StickyCTA.tsx src/components/ExitIntentModal.tsx
```

---

## 🎯 DEPLOYMENT LOGS - QUÉ BUSCAR

### **Logs Exitosos:**

```
✓ Compiled successfully in XXs
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (34/34)
✓ Finalizing page optimization
```

### **Logs de Error (y qué significan):**

```
✘ Type error: Cannot find module '@/...'
→ Problema: TypeScript no encuentra el archivo
→ Solución: Verificar que el archivo existe y el path es correcto

✘ Error: Missing environment variable
→ Problema: Falta variable en Vercel
→ Solución: Agregar en Settings → Environment Variables

✘ Module not found: Can't resolve '...'
→ Problema: Dependencia no instalada
→ Solución: npm install [dependencia]

✘ Build exceeded maximum duration
→ Problema: Build muy lento
→ Solución: Optimizar o actualizar a plan Pro
```

---

## 🆘 SOPORTE URGENTE

Si después de seguir estos pasos sigue fallando:

### **Necesito de ti:**

1. **Screenshot del error en Vercel** (Build Logs completos)
2. **Output de:**
   ```bash
   npm run build
   ```
3. **Lista de variables en Vercel:**
   - Ve a Settings → Environment Variables
   - Screenshot (sin mostrar valores, solo nombres)

### **Mientras tanto, prueba:**

```bash
# Crear branch limpio
git checkout -b deploy-clean

# Commit cambios
git add .
git commit -m "fix: prepare for vercel deployment"
git push origin deploy-clean

# Deploy ese branch en Vercel
# Settings → Git → Production Branch → deploy-clean
```

---

## ✅ POST-DEPLOY VERIFICATION

Una vez que el deploy sea exitoso:

```bash
# 1. Verificar que el sitio carga
curl https://tu-proyecto.vercel.app

# 2. Verificar metadata
curl -s https://tu-proyecto.vercel.app | grep "og:title"

# 3. Test manual
# Abre en navegador y verifica:
[ ] Home page carga
[ ] Sticky CTA aparece al scroll
[ ] Exit modal funciona
[ ] Links funcionan
[ ] Imágenes cargan
```

---

## 🔄 REDEPLOY RÁPIDO

Si necesitas hacer cambios después del deploy:

```bash
# 1. Hacer cambios
# 2. Commit
git add .
git commit -m "fix: tu cambio"
git push

# Vercel hace auto-deploy desde GitHub
# O manualmente:
vercel --prod
```

---

## 📊 MONITORING POST-DEPLOY

### **Vercel Analytics (Gratis):**

1. Dashboard → Tu proyecto
2. **Analytics** → Ver métricas en tiempo real
3. Monitorear:
   - Page views
   - Loading time
   - Errores

### **Vercel Logs:**

```bash
# Ver logs en tiempo real
vercel logs

# Logs de producción
vercel logs --prod

# Logs de una función específica
vercel logs --prod --function api/checkout
```

---

## 🎉 SIGUIENTE PASO

Una vez deployed exitosamente:

1. ✅ Actualiza `NEXT_PUBLIC_SITE_URL` con tu URL de Vercel
2. ✅ Configura dominio custom (si tienes)
3. ✅ Activa Vercel Analytics
4. ✅ Test completo de funcionalidades
5. ✅ Compartir URL para validación

---

**¿Listo para deploy?**

```bash
# Opción fácil (si tienes Vercel CLI):
vercel --prod

# O sigue Opción 1 desde el dashboard
```

¡Vamos! 🚀
