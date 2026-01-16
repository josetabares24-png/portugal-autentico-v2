# Configurar Usuario Master/Admin

## Opción 1: Via Clerk Dashboard (Recomendado)

### Paso 1: Acceder a Clerk Dashboard
1. Ve a https://dashboard.clerk.com
2. Selecciona tu aplicación "portugal-autentico"
3. Ir a **Users** en el menú lateral

### Paso 2: Crear o Asignar Usuario Master
1. Click en **+ Create user** (o selecciona usuario existente)
2. Crea usuario con:
   - Email: tu email de admin
   - Password: contraseña segura
   - First name: Admin
   - Last name: Master

### Paso 3: Asignar Rol de Administrador
1. En Clerk Dashboard, ve a **Organizations** → **Roles**
2. Crea rol "admin" si no existe:
   - Name: `admin`
   - Description: `Administrator with full access`
   - Permissions: Todos marcados

3. Asignar rol al usuario:
   - Ve a **Users** → Selecciona tu usuario
   - Click en **Metadata** tab
   - En **Public metadata**, agrega:
   ```json
   {
     "role": "admin",
     "isAdmin": true
   }
   ```

### Paso 4: Verificar en la App
1. Inicia sesión en https://estabaenlisboa.com
2. Verifica que puedes acceder a /mis-guias
3. (Opcional) Agrega middleware para proteger rutas admin

---

## Opción 2: Crear Usuario Programáticamente

Si quieres automatizarlo, crea un script:

```typescript
// scripts/create-admin.ts
import { clerkClient } from '@clerk/nextjs';

async function createAdminUser() {
  const user = await clerkClient.users.createUser({
    emailAddress: ['admin@estabaenlisboa.com'],
    password: 'TuPasswordSegura123!',
    firstName: 'Admin',
    lastName: 'Master',
    publicMetadata: {
      role: 'admin',
      isAdmin: true
    }
  });

  console.log('Usuario admin creado:', user.id);
}

createAdminUser();
```

Ejecutar:
```bash
npx ts-node scripts/create-admin.ts
```

---

## Opción 3: Usuario de Testing (Desarrollo Local)

Para desarrollo, puedes hacer bypass de autenticación:

1. Modifica `src/app/mis-guias/page.tsx`:

```typescript
export default async function MisGuiasPage() {
  const { userId } = await auth();

  // SOLO EN DESARROLLO - ELIMINAR EN PRODUCCIÓN
  const isDev = process.env.NODE_ENV === 'development';
  if (!userId && !isDev) {
    redirect('/');
  }

  // ... resto del código
}
```

---

## Credenciales Sugeridas para Testing

**Usuario Admin:**
- Email: `admin@estabaenlisboa.com`
- Password: `Lisboa2025!Admin`
- Rol: admin

**Usuario Test:**
- Email: `test@estabaenlisboa.com`
- Password: `Lisboa2025!Test`
- Rol: user

---

## Verificar Acceso

### Comprobar si usuario es admin en la app:

```typescript
// src/lib/auth-utils.ts
import { auth } from '@clerk/nextjs/server';

export async function isAdmin() {
  const { userId } = await auth();
  if (!userId) return false;

  const user = await clerkClient.users.getUser(userId);
  return user.publicMetadata?.role === 'admin';
}
```

### Proteger rutas de admin:

```typescript
// src/app/admin/page.tsx
import { isAdmin } from '@/lib/auth-utils';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const admin = await isAdmin();

  if (!admin) {
    redirect('/');
  }

  return <div>Panel de Admin</div>;
}
```

---

## Dashboard de Clerk

URL: https://dashboard.clerk.com/apps/[TU_APP_ID]/instances/[INSTANCE_ID]/users

Desde aquí puedes:
- Ver todos los usuarios
- Editar metadata de usuarios
- Borrar usuarios
- Ver sesiones activas
- Configurar roles y permisos

---

## ⚠️ Importante

1. **NUNCA** subas credenciales de admin a Git
2. Usa variables de entorno para emails de admin:
   ```env
   ADMIN_EMAILS=admin@estabaenlisboa.com,jose@email.com
   ```

3. En producción, usa autenticación 2FA para admins

4. Revisa logs de acceso regularmente en Clerk Dashboard
