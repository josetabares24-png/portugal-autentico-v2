# Crear Usuario Master/Admin

## Email del Master: josetabares24@gmail.com

## Método 1: Clerk Dashboard (MÁS RÁPIDO - RECOMENDADO)

### Pasos:
1. Ve a https://dashboard.clerk.com
2. Selecciona tu proyecto "portugal-autentico"
3. Click en "Users" en el menú lateral
4. Click en "Create user"
5. Ingresa:
   - **Email**: `josetabares24@gmail.com`
   - **Password**: (elige una contraseña segura)
6. Después de crear el usuario, haz click en el usuario
7. Ve a la pestaña "Metadata"
8. En "Public metadata", agrega:
```json
{
  "role": "admin",
  "isAdmin": true,
  "isMaster": true
}
```
9. Click "Save"

✅ **LISTO**: Ya puedes iniciar sesión con josetabares24@gmail.com

---

## Método 2: Desde el código (para desarrollo local)

Si quieres crear el usuario programáticamente, puedes usar este script:

```typescript
// scripts/create-master-user.ts
import { clerkClient } from '@clerk/nextjs/server';

async function createMasterUser() {
  try {
    const user = await clerkClient.users.createUser({
      emailAddress: ['josetabares24@gmail.com'],
      password: 'TuPasswordSegura123!', // Cambia esto
      publicMetadata: {
        role: 'admin',
        isAdmin: true,
        isMaster: true
      }
    });

    console.log('✅ Usuario master creado:', user.id);
    console.log('Email:', user.emailAddresses[0].emailAddress);
  } catch (error) {
    console.error('Error creando usuario:', error);
  }
}

createMasterUser();
```

Para ejecutar:
```bash
npx ts-node scripts/create-master-user.ts
```

---

## Verificar que funciona:

1. Ve a https://estabaenlisboa.com
2. Click en el icono de usuario (arriba derecha)
3. Inicia sesión con: `josetabares24@gmail.com`
4. Deberías tener acceso completo como administrador

---

## Proteger rutas de admin:

En cualquier página que quieras proteger, usa:

```typescript
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/');
  }

  // Opcional: verificar que es admin
  const user = await clerkClient.users.getUser(userId);
  const isAdmin = user.publicMetadata?.isAdmin === true;

  if (!isAdmin) {
    redirect('/');
  }

  return <div>Panel de Admin</div>;
}
```

---

## Permisos recomendados del Master:

- ✅ Acceso a /mis-guias
- ✅ Ver estadísticas de usuarios
- ✅ Gestionar contenido
- ✅ Acceso a analytics
- ✅ Modificar guías

---

**Importante**: Una vez creado el usuario master, guarda bien la contraseña en un lugar seguro.
