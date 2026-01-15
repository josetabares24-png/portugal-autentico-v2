# 🔧 SOLUCIÓN: ERROR DE DEPLOY EN VERCEL

## 🔍 DIAGNÓSTICO PASO A PASO

### ✅ Estado Actual Verificado:
- ✅ Build local: **EXITOSO**
- ✅ Git working tree: **LIMPIO**
- ✅ .env.local: **EXISTE**
- ✅ next.config.mjs: **CONFIGURADO CORRECTAMENTE**

---

## 🚨 PROBLEMAS COMUNES Y SOLUCIONES

### **PROBLEMA #1: Variables de Entorno No Configuradas**

**Síntoma:** Error tipo "Missing environment variable" o "Cannot find module"

**Solución:**

1. **Ve a tu proyecto en Vercel:**
   ```
   https://vercel.com/tu-usuario/portugal-autentico
   ```

2. **Settings → Environment Variables**

3. **Agrega TODAS estas variables:**

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# Site URL
NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
```

4. **Importante:** Selecciona **Production, Preview, y Development** para cada variable

5. **Redeploy:**
   - Deployments → Click en el último → **Redeploy**

---

### **PROBLEMA #2: ESLint Blocking Build**

**Síntoma:** Error "ESLint: X errors found" o "Linting failed"

**Solución Rápida:**

Crea `next.config.mjs` (o actualiza el existente):

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // WARNING: Esto permite que el build se complete incluso con errores de ESLint
    // Solo usar temporalmente para deploy urgente
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
```

**Solución Permanente:**

```bash
# Arreglar errores de ESLint localmente
npm run lint -- --fix

# Commit y push
git add .
git commit -m "fix: resolve eslint errors"
git push
```

---

### **PROBLEMA #3: TypeScript Strict Mode Errors**

**Síntoma:** Build falla con errores de TypeScript en Vercel pero no localmente

**Solución:**

Edita `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": false,  // Cambiar de true a false temporalmente
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    // ... resto de config
  }
}
```

Luego:
```bash
git add tsconfig.json
git commit -m "fix: relax typescript strict mode for deploy"
git push
```

---

### **PROBLEMA #4: Node Version Mismatch**

**Síntoma:** Error "Node version X.X.X is not supported"

**Solución:**

1. Verifica tu versión local de Node:
```bash
node -v
```

2. Agrega a `package.json`:
```json
{
  "engines": {
    "node": ">=18.0.0"
  }
}
```

3. Commit y push:
```bash
git add package.json
git commit -m "fix: specify node version for vercel"
git push
```

---

### **PROBLEMA #5: Out of Memory Error**

**Síntoma:** Error "JavaScript heap out of memory"

**Solución:**

Actualiza `package.json` scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "NODE_OPTIONS='--max-old-space-size=4096' next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

### **PROBLEMA #6: Imports Absolutos No Resueltos**

**Síntoma:** Error "Cannot find module '@/components/...'"

**Solución:**

Verifica que `tsconfig.json` tenga:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

### **PROBLEMA #7: Archivos con Caracteres Especiales**

**Síntoma:** Build falla sin mensaje claro

**Solución:**

```bash
# Buscar archivos con caracteres especiales
find src -name "*[áéíóúñ]*"

# Si encuentras alguno, renómbralo
```

---

## 🎯 SOLUCIÓN RÁPIDA: DEPLOY MÍNIMO

Si nada funciona, prueba con configuración mínima:

### **1. Crear vercel.json:**

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### **2. Simplificar next.config.mjs:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
```

### **3. Commit y redeploy:**

```bash
git add vercel.json next.config.mjs
git commit -m "fix: add vercel config for deployment"
git push
```

---

## 📋 CHECKLIST DE VERIFICACIÓN

Antes de hacer redeploy, verifica:

```bash
[ ] Variables de entorno configuradas en Vercel
[ ] Git push completado exitosamente
[ ] npm run build funciona localmente sin errores
[ ] .gitignore incluye .env.local
[ ] next.config.mjs existe y es válido
[ ] tsconfig.json tiene paths configurados
[ ] package.json tiene engines definidos
```

---

## 🔬 DEBUGGING AVANZADO

### **Ver logs completos de Vercel:**

1. Ve a tu proyecto en Vercel
2. **Deployments** → Click en el deployment fallido
3. **View Function Logs** o **Build Logs**
4. Busca la línea que empieza con **"Error:"**

### **Logs típicos y sus soluciones:**

**Log:** `Error: Cannot find module '@/components/StickyCTA'`
**Solución:** El archivo no existe o el path es incorrecto
```bash
ls -la src/components/StickyCTA.tsx
```

**Log:** `Error: NEXT_PUBLIC_SUPABASE_URL is not defined`
**Solución:** Agregar variable de entorno en Vercel Settings

**Log:** `Error: Failed to compile`
**Solución:** Revisar errores de TypeScript con `npm run build`

---

## 🚀 DEPLOY ALTERNATIVO: VERCEL CLI

Si el deploy desde GitHub no funciona:

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Link proyecto (primera vez)
vercel link

# 4. Deploy a producción
vercel --prod

# Durante el proceso te pedirá:
# - Nombre del proyecto: portugal-autentico
# - Framework: Next.js (detectado automáticamente)
# - Build command: npm run build (default)
# - Output directory: .next (default)
```

**Variables de entorno con CLI:**

```bash
# Agregar variable
vercel env add NEXT_PUBLIC_SITE_URL

# Listar variables
vercel env ls

# Importar desde .env.local
vercel env pull .env.vercel.local
```

---

## 🆘 SI NADA FUNCIONA

### **Plan B: Deploy en Netlify**

1. **Crear `netlify.toml`:**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. **Deploy:**
   - Ve a [netlify.com](https://netlify.com)
   - New site from Git
   - Conecta tu repo
   - Deploy

---

## 📞 NECESITAS LOGS ESPECÍFICOS

Para ayudarte mejor, necesito ver:

1. **Screenshot del error en Vercel** (pestaña Build Logs)
2. **Output completo de:**
   ```bash
   npm run build
   ```
3. **Lista de variables de entorno configuradas en Vercel** (sin valores, solo nombres)

---

## ✅ VERIFICACIÓN POST-DEPLOY

Una vez que funcione:

```bash
# Test en producción
curl https://tu-dominio.vercel.app

# Verificar metadata
curl -s https://tu-dominio.vercel.app | grep "og:title"

# Verificar schema
curl -s https://tu-dominio.vercel.app | grep "application/ld+json"
```

---

## 🎯 SOLUCIÓN MÁS COMÚN (80% de casos)

**El problema suele ser variables de entorno faltantes.**

**Solución rápida:**

1. Vercel Dashboard → Tu proyecto
2. **Settings** → **Environment Variables**
3. Copiar TODAS las variables de tu `.env.local`
4. **Deployments** → **Redeploy**

---

**Si sigues teniendo problemas, comparte:**
- Screenshot del error
- Output de `npm run build`
- Lista de variables en Vercel Settings

¡Y te ayudaré a solucionarlo específicamente! 🚀
