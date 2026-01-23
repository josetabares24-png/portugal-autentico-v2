# 📊 Análisis Completo del Proyecto - Portugal Auténtico

**Fecha:** Enero 2026  
**Objetivo:** Identificar archivos no utilizados, páginas no visibles y desincronización con el home

---

## 🔴 CRÍTICO: Archivos y Páginas NO Utilizados

### 1. **Páginas que Redirigen (No tienen contenido propio)**

#### `/app/lisboa-1-dia/page.tsx`
- **Estado:** ❌ NO SE USA
- **Problema:** Página duplicada/antigua que probablemente fue reemplazada por `/itinerarios/lisboa-1-dia-lo-esencial`
- **Acción:** Eliminar o verificar si hay enlaces rotos

#### `/comparar/page.tsx`
- **Estado:** ❌ REDIRIGE a `/itinerarios`
- **Problema:** Página sin contenido, solo redirección
- **Acción:** Eliminar si no hay enlaces externos apuntando aquí

#### `/mapa/page.tsx`
- **Estado:** ❌ REDIRIGE a `/itinerarios`
- **Problema:** Página sin contenido, solo redirección
- **Acción:** Eliminar si no hay enlaces externos apuntando aquí

#### `/guia-practica/page.tsx`
- **Estado:** ❌ REDIRIGE a `/info-util`
- **Problema:** Página sin contenido, solo redirección
- **Acción:** Eliminar si no hay enlaces externos apuntando aquí

### 2. **Archivos de Datos NO Utilizados**

#### `src/data/lisboa-1-dia.ts`
- **Estado:** ❌ NO SE IMPORTA EN NINGÚN LADO
- **Problema:** Archivo con datos completos de ruta que no se usa
- **Contenido:** Define `LISBOA_1_DIA` con tipo `Ruta` (8 paradas detalladas)
- **Acción:** 
  - Si los datos son útiles, integrarlos en el sistema actual
  - Si no, eliminar el archivo

#### `src/data/guide-packs.ts`
- **Estado:** ⚠️ PARCIALMENTE USADO
- **Uso actual:** Solo se importa en:
  - `src/app/itinerarios/[slug]/page.tsx`
  - `src/lib/guide-store.ts`
- **Problema:** Los datos en `guide-packs.ts` pueden estar desincronizados con `itineraries.ts`
- **Acción:** Verificar consistencia entre ambos archivos

### 3. **Componentes NO Utilizados**

#### `src/components/BookingWidget.tsx`
- **Estado:** ❌ NO SE IMPORTA EN NINGÚN LADO
- **Problema:** Componente funcional para mostrar hoteles de Booking.com que no se usa
- **Acción:** 
  - Integrar en `/donde-dormir` si es útil
  - O eliminar si no se va a usar

#### `src/components/FlightSearch.tsx`
- **Estado:** ❌ NO SE IMPORTA EN NINGÚN LADO
- **Problema:** Componente de búsqueda de vuelos (Kiwi.com) que no se usa
- **Acción:** Eliminar o integrar si se planea usar

#### `src/components/RutaNavegacion.tsx`
- **Estado:** ❌ NO SE IMPORTA EN NINGÚN LADO
- **Problema:** Componente complejo de navegación GPS con geolocalización que no se usa
- **Acción:** Eliminar o integrar en itinerarios si se planea usar

#### `src/components/PreviewContenido.tsx`
- **Estado:** ❌ NO SE IMPORTA EN NINGÚN LADO
- **Problema:** Componente de preview editorial que no se usa
- **Acción:** Eliminar o integrar si se planea usar

### 4. **Archivos Backup/Residuales**

#### `src/app/itinerarios/[slug]/page.tsx.backup`
- **Estado:** ❌ ARCHIVO BACKUP
- **Problema:** Archivo de respaldo que no debería estar en producción
- **Acción:** Eliminar

---

## ⚠️ Páginas con Contenido pero NO Enlazadas desde Navbar/Footer

### 1. **Páginas Admin (Solo para admins)**
- `/admin` - ✅ Correcto (solo visible para admins)
- `/admin/guias` - ✅ Correcto
- `/admin/compras` - ✅ Correcto
- `/admin/estadisticas` - ✅ Correcto
- `/admin/debug` - ✅ Correcto

### 2. **Páginas Legales (Enlazadas en Footer)**
- `/aviso-legal` - ✅ Enlazada en Footer
- `/politica-privacidad` - ✅ Enlazada en Footer
- `/terminos-condiciones` - ✅ Enlazada en Footer
- `/politica-cookies` - ✅ Enlazada en Footer

### 3. **Páginas NO Enlazadas (Huérfanas)**

#### `/pack-completo/page.tsx`
- **Estado:** ⚠️ NO ENLAZADA EN NAVBAR/FOOTER
- **Problema:** Página completa de pack completo que no se puede encontrar navegando
- **Contenido:** Landing page completa con oferta de pack (24.99€)
- **Acción:** 
  - Enlazar desde `/itinerarios` o home
  - O eliminar si no se va a usar

#### `/preview/page.tsx`
- **Estado:** ⚠️ NO ENLAZADA EN NAVBAR/FOOTER
- **Problema:** Página de preview que no se puede encontrar navegando
- **Contenido:** Preview de itinerario "Lisboa Esencial - Mañana"
- **Acción:** 
  - Enlazar desde páginas de itinerarios
  - O eliminar si no se va a usar

#### `/lisboa-practica/page.tsx`
- **Estado:** ⚠️ NO ENLAZADA EN NAVBAR/FOOTER
- **Problema:** Página completa con info útil que no se puede encontrar navegando
- **Contenido:** Info útil completa (emergencias, aeropuerto, transporte, centros comerciales)
- **Acción:** 
  - Parece duplicado de `/info-util`
  - Verificar si tiene contenido único
  - Si no, eliminar o redirigir

#### `/faq/page.tsx`
- **Estado:** ⚠️ NO ENLAZADA EN NAVBAR (solo en Footer como "Quiz Viajero")
- **Problema:** FAQ no está en el navbar principal
- **Acción:** Considerar agregar al navbar si es importante

#### `/sobre-nosotros/page.tsx`
- **Estado:** ⚠️ NO ENLAZADA EN NAVBAR/FOOTER
- **Problema:** Página "Sobre Nosotros" que no se puede encontrar navegando
- **Acción:** Enlazar desde Footer o eliminar si no es necesaria

#### `/servicios/page.tsx` y subpáginas
- **Estado:** ⚠️ NO ENLAZADAS EN NAVBAR/FOOTER
- **Páginas:**
  - `/servicios` (página principal)
  - `/servicios/tours-privados`
  - `/servicios/fotografo-personal`
  - `/servicios/transfers`
- **Problema:** Servicios completos que no se pueden encontrar navegando
- **Acción:** Enlazar desde navbar o eliminar si no se van a usar

#### `/free-tours/page.tsx`
- **Estado:** ⚠️ NO ENLAZADA EN NAVBAR/FOOTER
- **Problema:** Página de free tours que no se puede encontrar navegando
- **Acción:** Enlazar desde navbar o eliminar si no se va a usar

#### `/tours/page.tsx`
- **Estado:** ✅ ENLAZADA EN NAVBAR como "Tours"
- **Nota:** Esta sí está enlazada, correcto

#### `/guia-gratis/page.tsx`
- **Estado:** ⚠️ NO ENLAZADA DIRECTAMENTE
- **Problema:** Solo se enlaza desde home con `#free` pero no tiene página dedicada visible
- **Acción:** Verificar si `/guia-gratis` es diferente de `/info-util`

---

## 🔄 Desincronización con el Home

### 1. **Itinerarios en Home vs `/itinerarios`**

#### Home (`src/app/page.tsx`)
- **Usa:** `mainItineraries` de `@/data/itineraries`
- **Muestra:** Cards con `ItineraryCard` component
- **Enlace:** "Ver todas las rutas" → `/itinerarios`

#### `/itinerarios/page.tsx`
- **Usa:** `getGuideList()` de `@/lib/guide-store`
- **Muestra:** Lista de guías con filtros
- **Fuente de datos:** `guide-store.ts` que importa `guide-packs.ts`

**Problema:** 
- Home usa `itineraries.ts`
- `/itinerarios` usa `guide-packs.ts`
- Pueden estar desincronizados

**Acción:** Unificar fuente de datos o verificar que ambos archivos tengan la misma información

### 2. **Precios y Descripciones**

#### Home muestra:
- "8 Rutas completas" en stats
- Itinerarios con precios desde `itineraries.ts`

#### `/itinerarios` muestra:
- Itinerarios con precios desde `guide-packs.ts`

**Problema:** Los precios pueden diferir entre ambos archivos

**Ejemplo:**
- `guide-packs.ts`: `lisboa-1-dia-lo-esencial` = `1.99`
- `itineraries.ts`: Puede tener precio diferente

**Acción:** Verificar que los precios coincidan

### 3. **Badges y Etiquetas**

#### Home:
- No muestra badges especiales (MAS VENDIDO, PACK COMPLETO, etc.)

#### `/itinerarios`:
- Muestra badges desde `guide-packs.ts` (MAS VENDIDO, PACK COMPLETO, etc.)

**Problema:** Inconsistencia visual entre home e itinerarios

---

## 📁 Estructura de Datos - Análisis

### Archivos de Datos Existentes:

1. **`src/data/itineraries.ts`**
   - Usado en: Home (`page.tsx`)
   - Contiene: `mainItineraries` array
   - Tipo: Itinerarios con estructura completa

2. **`src/data/itineraries/index.ts`**
   - Estado: ⚠️ Verificar uso
   - Puede ser exportación centralizada

3. **`src/data/guide-packs.ts`**
   - Usado en: `/itinerarios/[slug]` y `guide-store.ts`
   - Contiene: `guidePacks` object con slugs como keys
   - Tipo: Packs con highlights y descripciones

4. **`src/data/lisboa-1-dia.ts`**
   - Estado: ❌ NO USADO
   - Contiene: `LISBOA_1_DIA` con tipo `Ruta`
   - Tipo: Datos detallados de paradas con coordenadas

5. **`src/data/blog-posts.ts`**
   - Usado en: Blog pages
   - Estado: ✅ Correcto

### Recomendación:
**Unificar fuentes de datos:**
- Opción 1: Usar solo `itineraries.ts` y eliminar `guide-packs.ts`
- Opción 2: Usar solo `guide-packs.ts` y eliminar `itineraries.ts`
- Opción 3: Crear un sistema centralizado que ambos importen

---

## 🗑️ Resumen de Archivos a Eliminar

### Alta Prioridad (No se usan):
1. ❌ `src/data/lisboa-1-dia.ts` - No se importa
2. ❌ `src/components/BookingWidget.tsx` - No se importa
3. ❌ `src/components/FlightSearch.tsx` - No se importa
4. ❌ `src/components/RutaNavegacion.tsx` - No se importa
5. ❌ `src/components/PreviewContenido.tsx` - No se importa
6. ❌ `src/app/itinerarios/[slug]/page.tsx.backup` - Backup

### Media Prioridad (Redirigen):
7. ⚠️ `src/app/comparar/page.tsx` - Redirige
8. ⚠️ `src/app/mapa/page.tsx` - Redirige
9. ⚠️ `src/app/guia-practica/page.tsx` - Redirige
10. ⚠️ `src/app/app/lisboa-1-dia/page.tsx` - Verificar si se usa

### Baja Prioridad (Páginas huérfanas - decidir):
11. ⚠️ `src/app/pack-completo/page.tsx` - Enlazar o eliminar
12. ⚠️ `src/app/preview/page.tsx` - Enlazar o eliminar
13. ⚠️ `src/app/lisboa-practica/page.tsx` - Verificar duplicado con `/info-util`

---

## ✅ Acciones Recomendadas

### Fase 1: Limpieza Inmediata
1. Eliminar archivos no utilizados (lista alta prioridad)
2. Eliminar archivos backup
3. Verificar y eliminar redirecciones si no hay enlaces externos

### Fase 2: Unificación de Datos
1. Decidir fuente única de verdad para itinerarios
2. Sincronizar precios entre `itineraries.ts` y `guide-packs.ts`
3. Verificar que home y `/itinerarios` muestren la misma información

### Fase 3: Enlaces y Navegación
1. Enlazar páginas huérfanas o eliminarlas
2. Agregar FAQ al navbar si es importante
3. Verificar que todas las páginas importantes estén accesibles

### Fase 4: Verificación
1. Revisar sitemap.xml para asegurar que todas las páginas importantes estén incluidas
2. Verificar que no haya enlaces rotos
3. Testear navegación completa

---

## 📝 Notas Adicionales

- El componente `LisbonStatus` SÍ se usa en Navbar ✅
- El componente `Navigation.tsx` existe pero parece que se usa `Navbar.tsx` en su lugar
- Hay múltiples layouts en diferentes rutas que pueden estar duplicando estilos
- El sistema de guías parece tener dos implementaciones paralelas que deberían unificarse

---

**Última actualización:** Enero 2026
