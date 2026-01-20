# 🎛️ Guía del Panel de Administración

## 📋 Descripción

Panel de administración completo para gestionar todas las guías de itinerarios de la plataforma. Permite ver, editar y administrar el contenido de todas las guías disponibles.

---

## 🔐 Acceso al Panel

### Requisitos

Para acceder al panel de administración, necesitas:

1. **Ser usuario autenticado** con Clerk
2. **Tener permisos de administrador** configurados en Clerk

### Configurar Usuario Admin

#### Opción 1: Desde Clerk Dashboard (Recomendado)

1. Ve a https://dashboard.clerk.com
2. Selecciona tu proyecto "portugal-autentico"
3. Click en **Users** en el menú lateral
4. Selecciona o crea el usuario que será admin
5. Ve a la pestaña **Metadata**
6. En **Public metadata**, agrega:
   ```json
   {
     "role": "admin",
     "isAdmin": true,
     "isMaster": true
   }
   ```
7. Click en **Save**

#### Opción 2: Usar Variable de Entorno

También puedes configurar emails de admin en `.env.local`:

```env
ADMIN_EMAILS=josetabares24@gmail.com,otro@email.com
```

---

## 🚀 Rutas del Panel

### 1. Panel Principal
**URL:** `/admin`

Dashboard principal con acceso a todas las secciones:
- Gestión de Guías
- Estadísticas
- Compras

### 2. Lista de Guías
**URL:** `/admin/guias`

Muestra todas las guías disponibles organizadas en:
- **Guías Principales**: Lisboa 1 Día, 2 Días, 3 Días
- **Guías Especiales**: Full Week, Romántica, Familiar, Fotografía

Cada guía muestra:
- Título y descripción
- Duración y precio
- Badge (si tiene)
- Estado destacado
- Link para editar

### 3. Edición de Guía Individual
**URL:** `/admin/guias/[slug]`

Página detallada de cada guía que muestra:

#### Información Básica
- ID y Slug
- Título y descripción
- Duración y precio
- Imagen
- Características (features)
- Estado destacado
- Badge

#### Timeline Completo
- Todas las paradas del itinerario
- Hora de cada parada
- Tipo (Visita o Comida)
- Descripción detallada
- Tips y consejos
- Coordenadas GPS
- Enlaces a Google Maps
- Imágenes

#### Acciones Disponibles
- Editar guía (próximamente)
- Eliminar guía (próximamente)
- Ver versión pública

---

## 📝 Funcionalidades Actuales

### ✅ Implementado

1. **Autenticación y Autorización**
   - Verificación de permisos de admin
   - Redirección automática si no eres admin
   - Soporte para múltiples métodos de verificación

2. **Visualización de Guías**
   - Lista completa de todas las guías
   - Vista detallada de cada guía
   - Información completa del timeline
   - Estadísticas rápidas

3. **Navegación**
   - Links entre secciones
   - Acceso rápido a versión pública
   - Breadcrumbs para navegación

### 🚧 Próximamente

1. **Edición de Guías**
   - Formulario para editar información básica
   - Editor de timeline
   - Actualización en tiempo real

2. **Gestión Avanzada**
   - Crear nuevas guías
   - Eliminar guías
   - Duplicar guías
   - Cambiar precios en masa

3. **Estadísticas**
   - Ventas por guía
   - Usuarios que compraron
   - Métricas de rendimiento

---

## 🛠️ Estructura Técnica

### Archivos Creados

```
src/
├── lib/
│   └── auth-utils.ts          # Funciones de autenticación
└── app/
    └── admin/
        ├── page.tsx           # Panel principal
        └── guias/
            ├── page.tsx       # Lista de guías
            └── [slug]/
                └── page.tsx  # Edición individual
```

### Funciones Principales

#### `isAdmin()`
Verifica si el usuario actual tiene permisos de administrador.

```typescript
import { isAdmin } from '@/lib/auth-utils';

const admin = await isAdmin();
if (!admin) {
  redirect('/');
}
```

#### `getCurrentUserId()`
Obtiene el ID del usuario actual.

```typescript
import { getCurrentUserId } from '@/lib/auth-utils';

const userId = await getCurrentUserId();
```

---

## 📊 Datos de las Guías

Las guías se almacenan en:
- **Archivo:** `src/data/itineraries.ts`
- **Estructura:**
  - `mainItineraries`: Guías principales
  - `specialItineraries`: Guías especiales
  - Timelines: Arrays de `TimelineStop[]`

### Mapeo de Timelines

Cada guía tiene su timeline asociado:
- `lisboa-1-dia-lo-esencial` → `lisboa1DiaTimeline`
- `lisboa-2-dias-completo` → `lisboa2DiasDia1Timeline + lisboa2DiasDia2Timeline`
- `lisboa-3-dias-premium` → `lisboa3DiasSintraTimeline`
- `lisboa-romantica` → `lisboaRomanticaTimeline`
- `lisboa-familiar` → `lisboaFamiliarTimeline`
- `lisboa-fotografia` → `lisboaFotografiaTimeline`
- `lisboa-full-week` → `lisboaFullWeekTimeline`

---

## 🔒 Seguridad

### Protección de Rutas

Todas las rutas de admin están protegidas:

1. **Verificación de autenticación**: Usuario debe estar logueado
2. **Verificación de permisos**: Usuario debe ser admin
3. **Redirección automática**: Si no cumple requisitos, redirige a home

### Métodos de Verificación

El sistema verifica admin de 3 formas:

1. **Metadata de Clerk**: `publicMetadata.isAdmin === true`
2. **Rol en metadata**: `publicMetadata.role === 'admin'`
3. **Email en lista**: Email en variable `ADMIN_EMAILS`

---

## 🎨 Diseño

El panel usa el mismo diseño que el resto de la plataforma:
- Colores: Naranja (#FF6B35) y gradientes
- Tipografía: Georgia para títulos
- Estilo: Cards con bordes y sombras
- Responsive: Adaptado a móvil, tablet y desktop

---

## 📝 Próximos Pasos

### Para Implementar Edición

1. **Crear API Routes**
   - `POST /api/admin/guias` - Crear guía
   - `PUT /api/admin/guias/[slug]` - Actualizar guía
   - `DELETE /api/admin/guias/[slug]` - Eliminar guía

2. **Mover Datos a Base de Datos**
   - Considerar mover guías a Supabase
   - O mantener en archivos pero con API de escritura

3. **Crear Formularios**
   - Formulario de edición de información básica
   - Editor de timeline (drag & drop)
   - Upload de imágenes

4. **Validación**
   - Validar datos antes de guardar
   - Sanitizar inputs
   - Verificar permisos en API

---

## 🐛 Solución de Problemas

### No puedo acceder al panel

1. Verifica que estés logueado
2. Verifica que tu usuario tenga `isAdmin: true` en Clerk
3. Verifica que tu email esté en `ADMIN_EMAILS` (si usas esa opción)
4. Revisa la consola del navegador para errores

### No veo las guías

1. Verifica que `src/data/itineraries.ts` tenga datos
2. Verifica que los slugs coincidan
3. Revisa la consola del servidor

### Error al cargar timeline

1. Verifica que el slug esté en `timelineMap`
2. Verifica que el timeline esté exportado en `itineraries.ts`
3. Revisa la consola del navegador

---

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa los logs del servidor
2. Revisa la consola del navegador
3. Verifica la configuración de Clerk
4. Consulta la documentación de Clerk: https://clerk.com/docs

---

**Última actualización:** Enero 2025
**Versión:** 1.0.0
