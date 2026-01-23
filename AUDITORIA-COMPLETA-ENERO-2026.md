# 🔍 AUDITORÍA COMPLETA - Estaba en Lisboa
## Enero 2026

**Fecha:** 23 de Enero 2026  
**Proyecto:** portugal-autentico (estabaenlisboa.com)  
**Framework:** Next.js 16.1.1  
**Estado General:** ⚠️ **FUNCIONAL CON FALLAS CRÍTICAS**

---

## 📊 RESUMEN EJECUTIVO

### ✅ Aspectos Positivos
- ✅ Sin errores de linter o TypeScript
- ✅ SEO básico implementado (meta tags, sitemap, robots.txt)
- ✅ Validación de inputs en APIs
- ✅ Manejo de errores en la mayoría de rutas
- ✅ Imágenes optimizadas con Next.js Image
- ✅ Metadata explícita en páginas de itinerarios (corregido recientemente)

### 🔴 FALLAS CRÍTICAS (Resolver Inmediatamente)
1. **Seguridad:** Falta rate limiting en 8 APIs públicas
2. **Código de Debug:** Script de CORS debug en producción
3. **Console.log:** 17+ archivos con console.log en producción
4. **Headers de Seguridad:** Faltan headers de seguridad en next.config.mjs

### 🟡 FALLAS MEDIAS (Resolver Este Mes)
5. **Accesibilidad:** Faltan ARIA labels en múltiples componentes
6. **SEO:** Sitemap no incluye posts de blog dinámicamente
7. **Performance:** Falta lazy loading en componentes pesados
8. **Alt Text:** Algunas imágenes tienen alt text genérico

### 🟢 MEJORAS MENORES (Opcional)
9. Duplicación de código en APIs
10. Falta Error Boundary global
11. Falta preconnect para recursos externos

---

## 🔒 1. SEGURIDAD

### 🔴 CRÍTICO: Rate Limiting Faltante

**Problema:** No hay rate limiting en endpoints públicos, lo que permite:
- Ataques de fuerza bruta
- Spam masivo
- DDoS básico
- Abuso de APIs

**Endpoints afectados:**
- ❌ `/api/subscribe` - Suscripciones
- ❌ `/api/contact` - Formulario de contacto
- ❌ `/api/presupuesto` - Calculadora de presupuesto
- ❌ `/api/quiz-lead` - Quiz de Lisboa
- ❌ `/api/checkout` - Checkout de Stripe
- ❌ `/api/reviews` - Reseñas
- ❌ `/api/media` - Media uploads
- ❌ `/api/brevo/campaign` - Campañas Brevo

**Solución Recomendada:**
```typescript
// Instalar: npm install @upstash/ratelimit @upstash/redis
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "1 m"), // 10 requests por minuto
  analytics: true,
});

// En cada API route:
export async function POST(request: NextRequest) {
  const identifier = request.headers.get("x-forwarded-for") || "anonymous";
  const { success } = await ratelimit.limit(identifier);
  if (!success) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en un momento." },
      { status: 429 }
    );
  }
  // ... resto del código
}
```

**Prioridad:** 🔴 **ALTA - Implementar esta semana**

---

### 🔴 CRÍTICO: Headers de Seguridad Faltantes

**Problema:** `next.config.mjs` no incluye headers de seguridad

**Solución:**
```javascript
// next.config.mjs
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()'
        }
      ]
    }
  ];
}
```

**Prioridad:** 🔴 **ALTA - Implementar esta semana**

---

### 🟡 MEDIO: Código de Debug en Producción

**Problema:** Script de debug de CORS de Clerk en `src/app/layout.tsx` (líneas 136-203)

**Código problemático:**
```typescript
<Script id="clerk-cors-debug" strategy="afterInteractive">
  {`
    // Código que envía logs a http://127.0.0.1:7242/ingest/...
    fetch('http://127.0.0.1:7242/ingest/...', {
      method: 'POST',
      // ...
    })
  `}
</Script>
```

**Riesgos:**
- Código innecesario en producción
- Posibles errores si el endpoint no existe
- Aumenta el bundle size (~2KB)
- Requests fallidos a localhost

**Solución:**
```typescript
{process.env.NODE_ENV === 'development' && (
  <Script id="clerk-cors-debug" strategy="afterInteractive">
    {/* código de debug */}
  </Script>
)}
```

**Prioridad:** 🟡 **MEDIA - Eliminar esta semana**

---

### 🟡 MEDIO: Console.log en Producción

**Problema:** 17+ archivos con `console.log/error/warn` que deberían usar un logger

**Archivos afectados:**
- `src/app/api/presupuesto/route.ts` - 5 console.warn/error
- `src/app/api/contact/route.ts` - console.error
- `src/app/api/subscribe/route.ts` - console.error
- `src/app/api/checkout/route.ts` - 10+ console.log/error
- `scripts/create-brevo-templates.js` - 50+ console.log

**Solución Recomendada:**
```typescript
// Crear src/lib/logger.ts
const logger = {
  log: (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
    // En producción, enviar a servicio de logging (Sentry, LogRocket, etc.)
  },
  error: (...args: any[]) => {
    console.error(...args); // Siempre loggear errores
    // Enviar a servicio de logging en producción
  },
  warn: (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(...args);
    }
  },
};

export default logger;
```

**Luego en next.config.mjs:**
```javascript
compiler: {
  removeConsole: process.env.NODE_ENV === 'production' ? {
    exclude: ['error', 'warn'], // Mantener errores y warnings
  } : false,
}
```

**Prioridad:** 🟡 **MEDIA - Implementar este mes**

---

## ⚡ 2. RENDIMIENTO

### 🟡 MEDIO: Falta Lazy Loading de Componentes Pesados

**Problema:** Componentes pesados se cargan inmediatamente

**Componentes afectados:**
- Mapas interactivos (Leaflet)
- Componentes de PDF (@react-pdf/renderer)
- Componentes de Google Maps

**Solución:**
```typescript
// src/components/InteractiveMap.tsx
import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(
  () => import('./InteractiveMap'),
  {
    loading: () => <div className="animate-pulse bg-slate-200 h-96 rounded-lg" />,
    ssr: false // Los mapas no necesitan SSR
  }
);
```

**Prioridad:** 🟡 **MEDIA - Implementar este mes**

---

### 🟡 MEDIO: Falta Preconnect para Recursos Externos

**Problema:** Recursos externos no tienen preconnect

**Recursos afectados:**
- `https://fonts.googleapis.com` (ya tiene preconnect ✅)
- `https://unpkg.com` (falta preconnect)
- `https://js.stripe.com` (ya tiene preconnect ✅)
- `https://www.googletagmanager.com` (ya tiene preconnect ✅)

**Solución:**
```typescript
// src/app/layout.tsx
<link rel="preconnect" href="https://unpkg.com" />
<link rel="dns-prefetch" href="https://unpkg.com" />
```

**Prioridad:** 🟡 **MEDIA - Implementar este mes**

---

### 🟢 BAJA: Falta Quality en Algunas Imágenes

**Problema:** No se especifica `quality` en todas las imágenes

**Solución:**
```typescript
<Image
  src="..."
  alt="..."
  quality={85} // Balance tamaño/calidad
  // ...
/>
```

**Prioridad:** 🟢 **BAJA - Opcional**

---

## ♿ 3. ACCESIBILIDAD

### 🟡 MEDIO: Faltan ARIA Labels

**Problema:** Botones e iconos sin texto visible necesitan `aria-label`

**Componentes afectados:**
- Botones de menú móvil
- Iconos decorativos
- Botones de acción sin texto
- Enlaces solo con iconos

**Solución:**
```typescript
// ❌ Mal
<button onClick={handleClick}>
  <span className="material-symbols-outlined">menu</span>
</button>

// ✅ Bien
<button 
  onClick={handleClick}
  aria-label="Abrir menú de navegación"
  aria-expanded={mobileMenuOpen}
>
  <span className="material-symbols-outlined" aria-hidden="true">menu</span>
</button>
```

**Prioridad:** 🟡 **MEDIA - Implementar este mes**

---

### 🟡 MEDIO: Alt Text Genérico en Algunas Imágenes

**Problema:** Algunas imágenes tienen alt text muy genérico

**Ejemplos encontrados:**
- `alt="Lisboa"` (muy genérico)
- `alt={article.titulo}` (podría ser más descriptivo)
- `alt="Hotel en Lisboa"` (genérico)

**Solución:**
```typescript
// ❌ Mal
<Image alt="Lisboa" src="..." />

// ✅ Bien
<Image 
  alt="Vista panorámica de Alfama desde el Mirador de Santa Luzia, mostrando tejados naranjas y el río Tajo al atardecer" 
  src="..." 
/>
```

**Prioridad:** 🟡 **MEDIA - Mejorar este mes**

---

### 🟢 BAJA: Falta Skip Link

**Problema:** No hay "Skip to main content" link

**Solución:**
```typescript
// src/app/layout.tsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF6B35] focus:text-white focus:rounded"
>
  Saltar al contenido principal
</a>
```

**Prioridad:** 🟢 **BAJA - Opcional**

---

## 🔍 4. SEO

### 🟡 MEDIO: Sitemap No Incluye Posts de Blog Dinámicamente

**Problema:** `src/app/sitemap.ts` tiene URLs hardcodeadas, no incluye posts del blog dinámicamente

**Solución:**
```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog' // Función que obtiene posts

export default async function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://estabaenlisboa.com'
  const currentDate = new Date()

  // Obtener posts del blog dinámicamente
  const blogPosts = await getAllBlogPosts()
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    // URLs estáticas existentes...
    ...blogUrls,
  ]
}
```

**Prioridad:** 🟡 **MEDIA - Implementar este mes**

---

### 🟢 BAJA: Falta robots.txt Dinámico

**Problema:** `public/robots.txt` es estático

**Solución:**
```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/checkout/', '/mis-guias/'],
      },
    ],
    sitemap: 'https://estabaenlisboa.com/sitemap.xml',
  }
}
```

**Prioridad:** 🟢 **BAJA - Opcional**

---

## 🏗️ 5. ESTRUCTURA DE CÓDIGO

### 🟡 MEDIO: Duplicación de Código en APIs

**Problema:** Lógica similar en múltiples API routes:
- Validación de email repetida
- Manejo de Brevo similar
- Estructura de respuesta similar

**Solución:** Crear utilities compartidas:
```typescript
// src/lib/api-utils.ts
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function createApiResponse(data: any, status = 200) {
  return NextResponse.json(data, { status });
}

export async function sendBrevoEmail(config: {
  templateId?: number;
  to: { email: string; name: string }[];
  params?: Record<string, string>;
  htmlContent?: string;
  textContent?: string;
  subject?: string;
}) {
  // Lógica compartida de Brevo
}
```

**Prioridad:** 🟡 **MEDIA - Refactorizar este mes**

---

### 🟢 BAJA: Falta Error Boundary Global

**Problema:** No hay Error Boundary de React para capturar errores no manejados

**Solución:**
```typescript
// src/components/ErrorBoundary.tsx
'use client';

import React from 'react';

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
    // Enviar a servicio de logging (Sentry, etc.)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Algo salió mal</h1>
            <p className="text-slate-600 mb-4">
              Por favor, recarga la página o contacta al soporte.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#FF6B35] text-white rounded-lg"
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

**Prioridad:** 🟢 **BAJA - Opcional**

---

## 📋 CHECKLIST DE ACCIÓN

### 🔴 CRÍTICO (Esta Semana)
- [ ] Implementar rate limiting en 8 APIs públicas
- [ ] Agregar headers de seguridad en next.config.mjs
- [ ] Eliminar script de debug de CORS (condicionar a development)
- [ ] Configurar `compiler.removeConsole` en next.config.mjs

### 🟡 MEDIO (Este Mes)
- [ ] Crear logger compartido y reemplazar console.log
- [ ] Agregar lazy loading a componentes pesados
- [ ] Agregar preconnect para unpkg.com
- [ ] Mejorar ARIA labels en componentes
- [ ] Mejorar alt text descriptivo en imágenes
- [ ] Hacer sitemap dinámico con posts de blog
- [ ] Refactorizar código duplicado en APIs

### 🟢 BAJA (Opcional)
- [ ] Agregar quality={85} a todas las imágenes
- [ ] Crear robots.txt dinámico
- [ ] Agregar skip link
- [ ] Implementar Error Boundary global

---

## 📊 MÉTRICAS ACTUALES

| Categoría | Estado | Score |
|-----------|--------|-------|
| **Seguridad** | ⚠️ Mejorable | 6/10 |
| **Rendimiento** | ✅ Bueno | 8/10 |
| **Accesibilidad** | ⚠️ Mejorable | 7/10 |
| **SEO** | ✅ Bueno | 8/10 |
| **Código** | ✅ Bueno | 8/10 |
| **Manejo de Errores** | ✅ Bueno | 8/10 |

**Score General:** 7.5/10

---

## 🎯 PRIORIDADES RECOMENDADAS

### Semana 1-2: Seguridad Crítica
1. Rate limiting (2-3 horas)
2. Headers de seguridad (30 min)
3. Eliminar debug code (15 min)

### Semana 3-4: Optimización
4. Logger compartido (1 hora)
5. Lazy loading (2 horas)
6. ARIA labels (3 horas)

### Mes 2: Mejoras
7. Sitemap dinámico (1 hora)
8. Refactor APIs (4 horas)
9. Alt text mejorado (2 horas)

---

**Última actualización:** 23 Enero 2026  
**Próxima revisión:** 23 Febrero 2026
