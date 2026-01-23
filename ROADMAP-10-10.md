# 🎯 ROADMAP PARA LLEGAR A 10/10
## Estaba en Lisboa - Enero 2026

**Estado Actual:** 8.5/10  
**Objetivo:** 10/10  
**Tiempo Estimado:** 8-12 horas de trabajo

---

## 📊 ANÁLISIS POR CATEGORÍA

| Categoría | Actual | Objetivo | Falta |
|-----------|--------|----------|-------|
| **Seguridad** | 8/10 | 10/10 | Rate limiting |
| **Rendimiento** | 8/10 | 10/10 | Lazy loading |
| **Accesibilidad** | 7/10 | 10/10 | ARIA labels, alt text, skip link |
| **SEO** | 8/10 | 10/10 | Sitemap dinámico |
| **Código** | 9/10 | 10/10 | Refactor duplicación, Error Boundary |
| **Manejo Errores** | 8/10 | 10/10 | Error Boundary global |

---

## 🔴 CRÍTICO: Seguridad (8/10 → 10/10)

### ❌ Falta: Rate Limiting en APIs

**Impacto:** 🔴 **ALTO** - Sin esto, la web es vulnerable a spam/abuso  
**Tiempo:** 2-3 horas  
**Dificultad:** Media

**Endpoints a proteger:**
- `/api/subscribe` - Suscripciones
- `/api/contact` - Formulario de contacto
- `/api/presupuesto` - Calculadora
- `/api/quiz-lead` - Quiz
- `/api/checkout` - Checkout Stripe
- `/api/reviews` - Reseñas
- `/api/media` - Media uploads
- `/api/brevo/campaign` - Campañas

**Implementación:**
```typescript
// 1. Instalar dependencias
npm install @upstash/ratelimit @upstash/redis

// 2. Crear src/lib/ratelimit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "1 m"), // 10 requests/minuto
  analytics: true,
});

// 3. Usar en cada API route
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

**Configuración necesaria:**
- Crear cuenta gratuita en Upstash (https://upstash.com)
- Obtener `UPSTASH_REDIS_REST_URL` y `UPSTASH_REDIS_REST_TOKEN`
- Agregar variables en Vercel

**Resultado:** Seguridad 10/10 ✅

---

## ⚡ RENDIMIENTO (8/10 → 10/10)

### ❌ Falta: Lazy Loading de Componentes Pesados

**Impacto:** 🟡 **MEDIO** - Mejora tiempo de carga inicial  
**Tiempo:** 2 horas  
**Dificultad:** Baja

**Componentes a optimizar:**

1. **Mapas Interactivos (Leaflet)**
   ```typescript
   // src/components/InteractiveMap.tsx
   import dynamic from 'next/dynamic';
   
   const InteractiveMap = dynamic(
     () => import('./InteractiveMap'),
     {
       loading: () => (
         <div className="animate-pulse bg-slate-200 h-96 rounded-lg flex items-center justify-center">
           <span className="text-slate-400">Cargando mapa...</span>
         </div>
       ),
       ssr: false
     }
   );
   ```

2. **Google Maps Component**
   ```typescript
   // src/components/GoogleMap.tsx
   const GoogleMapComponent = dynamic(
     () => import('./GoogleMap').then(mod => ({ default: mod.GoogleMapComponent })),
     {
       loading: () => <div className="h-96 bg-slate-100 animate-pulse rounded-lg" />,
       ssr: false
     }
   );
   ```

3. **PDF Renderer (si se usa)**
   ```typescript
   const PDFViewer = dynamic(
     () => import('@react-pdf/renderer'),
     {
       ssr: false,
       loading: () => <div>Cargando PDF...</div>
     }
   );
   ```

**Archivos a modificar:**
- `src/components/InteractiveMap.tsx` - Ya tiene lazy loading en iframe ✅
- `src/components/GoogleMap.tsx` - Necesita dynamic import
- Páginas que usan mapas directamente

**Resultado:** Rendimiento 10/10 ✅

---

## ♿ ACCESIBILIDAD (7/10 → 10/10)

### ❌ Falta 1: ARIA Labels Completos

**Impacto:** 🟡 **MEDIO** - Mejora experiencia para screen readers  
**Tiempo:** 2 horas  
**Dificultad:** Baja

**Componentes que necesitan ARIA labels:**

1. **Botones de menú móvil** (ya tiene algunos ✅)
   ```typescript
   // Verificar que todos tengan:
   <button 
     aria-label="Abrir menú de navegación"
     aria-expanded={isOpen}
   >
     <span aria-hidden="true">menu</span>
   </button>
   ```

2. **Iconos decorativos sin texto**
   ```typescript
   <span className="material-symbols-outlined" aria-hidden="true">
     arrow_forward
   </span>
   ```

3. **Enlaces solo con iconos**
   ```typescript
   <Link href="/" aria-label="Ir a inicio">
     <span aria-hidden="true">home</span>
   </Link>
   ```

**Archivos a revisar:**
- `src/components/Navbar.tsx` - Verificar todos los botones
- `src/app/blog/BlogClient.tsx` - Botones de categorías
- `src/components/Footer.tsx` - Enlaces sociales
- Todos los componentes con iconos

**Resultado:** +1 punto en accesibilidad

---

### ❌ Falta 2: Alt Text Descriptivo

**Impacto:** 🟡 **MEDIO** - Mejora SEO y accesibilidad  
**Tiempo:** 1 hora  
**Dificultad:** Baja

**Imágenes que necesitan mejor alt text:**

1. **Alt genéricos encontrados:**
   - `alt="Lisboa"` → `alt="Vista panorámica de Lisboa desde el Mirador de Santa Luzia mostrando tejados naranjas y el río Tajo"`
   - `alt="Hotel en Lisboa"` → `alt="Hotel boutique en el barrio de Chiado, Lisboa, con fachada tradicional portuguesa"`
   - `alt={article.titulo}` → `alt="Imagen del artículo: ${article.titulo} sobre ${article.categoria}"`

**Archivos a mejorar:**
- `src/app/blog/[slug]/page.tsx` - Imágenes de artículos
- `src/app/donde-dormir/page.tsx` - Imágenes de hoteles
- `src/app/tours/page.tsx` - Imágenes de tours
- `src/app/itinerarios/[slug]/page.tsx` - Imágenes de guías

**Resultado:** +1 punto en accesibilidad

---

### ❌ Falta 3: Skip Link

**Impacto:** 🟢 **BAJO** - Mejora navegación por teclado  
**Tiempo:** 15 minutos  
**Dificultad:** Muy baja

**Implementación:**
```typescript
// src/app/layout.tsx
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF6B35] focus:text-white focus:rounded focus:shadow-lg"
>
  Saltar al contenido principal
</a>

// En cada página principal:
<main id="main-content">
  {/* contenido */}
</main>
```

**Resultado:** +0.5 puntos en accesibilidad

**Total Accesibilidad:** 7/10 → 10/10 ✅

---

## 🔍 SEO (8/10 → 10/10)

### ❌ Falta: Sitemap Dinámico

**Impacto:** 🟡 **MEDIO** - Mejora indexación de blog  
**Tiempo:** 1 hora  
**Dificultad:** Media

**Problema actual:**
- `src/app/sitemap.ts` tiene URLs hardcodeadas
- No incluye posts del blog dinámicamente
- No se actualiza automáticamente

**Solución:**
```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://estabaenlisboa.com'
  const currentDate = new Date()

  // URLs estáticas existentes
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    // ... resto de URLs estáticas
  ]

  // URLs dinámicas del blog
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.fecha) || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticUrls, ...blogUrls]
}
```

**Resultado:** SEO 10/10 ✅

---

## 🏗️ CÓDIGO (9/10 → 10/10)

### ❌ Falta 1: Refactorizar Código Duplicado

**Impacto:** 🟡 **MEDIO** - Mejora mantenibilidad  
**Tiempo:** 3 horas  
**Dificultad:** Media

**Duplicación encontrada:**

1. **Validación de email** (repetida en 5 APIs)
   ```typescript
   // Crear src/lib/api-utils.ts
   export function validateEmail(email: string): boolean {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   }
   ```

2. **Manejo de Brevo** (lógica similar en 4 APIs)
   ```typescript
   export async function sendBrevoEmail(config: {
     templateId?: number;
     to: { email: string; name: string }[];
     params?: Record<string, string>;
     htmlContent?: string;
     textContent?: string;
     subject?: string;
   }) {
     // Lógica compartida
   }
   ```

3. **Respuestas de API** (estructura similar)
   ```typescript
   export function createApiResponse(data: any, status = 200) {
     return NextResponse.json(data, { status });
   }
   ```

**Archivos a refactorizar:**
- `src/app/api/subscribe/route.ts`
- `src/app/api/contact/route.ts`
- `src/app/api/presupuesto/route.ts`
- `src/app/api/quiz-lead/route.ts`

**Resultado:** +0.5 puntos en código

---

### ❌ Falta 2: Error Boundary Global

**Impacto:** 🟢 **BAJO** - Mejora manejo de errores  
**Tiempo:** 30 minutos  
**Dificultad:** Baja

**Implementación:**
```typescript
// src/components/ErrorBoundary.tsx
'use client';

import React from 'react';
import logger from '@/lib/logger';

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
    logger.error('Error capturado por ErrorBoundary:', error, errorInfo);
    // Aquí podrías enviar a Sentry, LogRocket, etc.
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4 text-slate-900">
              Algo salió mal
            </h1>
            <p className="text-slate-600 mb-6">
              Por favor, recarga la página o contacta al soporte.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#FF6B35] text-white rounded-lg font-semibold hover:bg-[#F7931E] transition-colors"
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

**Usar en layout.tsx:**
```typescript
<ErrorBoundary>
  {children}
</ErrorBoundary>
```

**Resultado:** +0.5 puntos en código y manejo de errores

**Total Código:** 9/10 → 10/10 ✅

---

## 📋 CHECKLIST COMPLETO PARA 10/10

### 🔴 Seguridad (2-3 horas)
- [ ] Instalar `@upstash/ratelimit` y `@upstash/redis`
- [ ] Crear cuenta Upstash (gratis)
- [ ] Crear `src/lib/ratelimit.ts`
- [ ] Agregar rate limiting a `/api/subscribe`
- [ ] Agregar rate limiting a `/api/contact`
- [ ] Agregar rate limiting a `/api/presupuesto`
- [ ] Agregar rate limiting a `/api/quiz-lead`
- [ ] Agregar rate limiting a `/api/checkout`
- [ ] Agregar rate limiting a `/api/reviews`
- [ ] Agregar rate limiting a `/api/media`
- [ ] Agregar rate limiting a `/api/brevo/campaign`
- [ ] Agregar variables de entorno en Vercel

### ⚡ Rendimiento (2 horas)
- [ ] Lazy load `GoogleMap` component
- [ ] Verificar que `InteractiveMap` ya tiene lazy loading
- [ ] Lazy load cualquier componente PDF si existe
- [ ] Agregar `quality={85}` a imágenes principales

### ♿ Accesibilidad (3 horas)
- [ ] Revisar y agregar ARIA labels a todos los botones
- [ ] Agregar `aria-hidden="true"` a iconos decorativos
- [ ] Mejorar alt text de 10-15 imágenes principales
- [ ] Agregar skip link en `layout.tsx`
- [ ] Agregar `id="main-content"` a `<main>` en páginas principales
- [ ] Verificar contraste de colores (WCAG AA)

### 🔍 SEO (1 hora)
- [ ] Hacer sitemap dinámico con posts del blog
- [ ] Verificar que todas las páginas estén en sitemap
- [ ] Crear `src/app/robots.ts` dinámico (opcional)

### 🏗️ Código (3.5 horas)
- [ ] Crear `src/lib/api-utils.ts` con funciones compartidas
- [ ] Refactorizar validación de email en APIs
- [ ] Refactorizar lógica de Brevo en APIs
- [ ] Crear `ErrorBoundary` component
- [ ] Agregar ErrorBoundary en `layout.tsx`

---

## ⏱️ PLAN DE IMPLEMENTACIÓN

### **Opción 1: Implementación Rápida (1 día)**
**Tiempo total:** 8-10 horas

**Orden recomendado:**
1. **Seguridad (2-3h)** - Rate limiting (más crítico)
2. **Accesibilidad (3h)** - ARIA labels y alt text
3. **SEO (1h)** - Sitemap dinámico
4. **Rendimiento (2h)** - Lazy loading
5. **Código (1h)** - Error Boundary (rápido)

**Resultado:** 10/10 en todas las categorías ✅

---

### **Opción 2: Implementación Gradual (1 semana)**
**Día 1:** Seguridad (rate limiting)  
**Día 2:** Accesibilidad (ARIA labels)  
**Día 3:** Accesibilidad (alt text)  
**Día 4:** SEO (sitemap)  
**Día 5:** Rendimiento (lazy loading)  
**Día 6:** Código (refactor + Error Boundary)

---

## 🎯 RESULTADO FINAL ESPERADO

| Categoría | Antes | Después | Mejora |
|------------|-------|---------|--------|
| **Seguridad** | 8/10 | 10/10 | +25% |
| **Rendimiento** | 8/10 | 10/10 | +25% |
| **Accesibilidad** | 7/10 | 10/10 | +43% |
| **SEO** | 8/10 | 10/10 | +25% |
| **Código** | 9/10 | 10/10 | +11% |
| **Manejo Errores** | 8/10 | 10/10 | +25% |

**Score General:** 8.5/10 → **10/10** ✅

---

## 💰 COSTOS ADICIONALES

- **Upstash Redis:** Gratis hasta 10,000 requests/día (suficiente para empezar)
- **Sentry (opcional):** Gratis hasta 5,000 eventos/mes
- **Total:** $0/mes para empezar

---

## 🚀 BENEFICIOS DE LLEGAR A 10/10

1. **Seguridad:** Protección contra spam y abuso
2. **Rendimiento:** Carga más rápida, mejor UX
3. **Accesibilidad:** WCAG 2.1 AA compliance, más usuarios
4. **SEO:** Mejor indexación, más tráfico orgánico
5. **Código:** Más mantenible, menos bugs
6. **Manejo Errores:** Mejor experiencia cuando algo falla

---

## 📝 NOTAS IMPORTANTES

- **Rate limiting es crítico** - Sin esto, la web es vulnerable
- **Accesibilidad mejora SEO** - Google valora sitios accesibles
- **Lazy loading mejora Core Web Vitals** - Mejor ranking en Google
- **Error Boundary previene crashes** - Mejor experiencia de usuario

---

**¿Quieres que implemente todo esto ahora?** Puedo hacerlo paso a paso o todo de una vez.
