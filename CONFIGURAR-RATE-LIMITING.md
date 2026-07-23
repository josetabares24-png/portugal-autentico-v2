# 🔒 CONFIGURAR RATE LIMITING - Upstash

## Paso 1: Crear cuenta en Upstash (Gratis)

1. Ve a: https://upstash.com
2. Crea una cuenta (gratis hasta 10,000 requests/día)
3. Crea una nueva base de datos Redis:
   - Click en "Create Database"
   - Nombre: `portugal-autentico-ratelimit`
   - Tipo: Regional (elige la región más cercana a Vercel)
   - Click en "Create"

## Paso 2: Obtener credenciales

Después de crear la base de datos:

1. Ve a la página de tu base de datos
2. Click en "REST API" en el menú lateral
3. Copia:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`

## Paso 3: Agregar variables en Vercel

1. Ve a tu proyecto en Vercel: https://vercel.com/tu-proyecto
2. Settings → Environment Variables
3. Agrega estas dos variables:

```
UPSTASH_REDIS_REST_URL=https://tu-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=tu-token-aqui
```

4. Selecciona: **Production, Preview, Development**
5. Click en "Save"

## Paso 4: Instalar dependencias

```bash
npm install @upstash/ratelimit @upstash/redis
```

## Paso 5: Redeploy

Después de agregar las variables:

1. En Vercel, ve a Deployments
2. Click en los 3 puntos del último deployment
3. Selecciona "Redeploy"

O desde terminal:
```bash
git commit --allow-empty -m "Configure rate limiting"
git push origin main
```

## ✅ Verificación

El rate limiting se activará automáticamente cuando las variables estén configuradas.

**Límites configurados:**
- 10 requests por minuto por IP

**Si no está configurado:** El rate limiting se desactiva automáticamente (fail open) para no romper la aplicación.

---

**Nota:** El código ya está implementado. Solo necesitas configurar Upstash y agregar las variables en Vercel.
