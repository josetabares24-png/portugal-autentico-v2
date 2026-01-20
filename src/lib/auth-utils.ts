import { auth, clerkClient } from '@clerk/nextjs/server';

/**
 * Verifica si el usuario actual es administrador
 * @returns true si el usuario es admin, false en caso contrario
 */
export async function isAdmin(): Promise<boolean> {
  const { userId } = await auth();
  
  if (!userId) {
    return false;
  }

  try {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    const metadata = user.publicMetadata as { role?: string; isAdmin?: boolean; isMaster?: boolean };
    
    // Verifica si es admin por metadata
    if (metadata?.isAdmin === true || metadata?.isMaster === true || metadata?.role === 'admin') {
      return true;
    }

    // También verifica por email (fallback)
    const adminEmails = process.env.ADMIN_EMAILS?.split(',') || ['josetabares24@gmail.com'];
    const userEmail = user.emailAddresses[0]?.emailAddress;
    
    if (userEmail && adminEmails.includes(userEmail)) {
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}

/**
 * Obtiene el userId del usuario actual
 * @returns userId o null si no está autenticado
 */
export async function getCurrentUserId(): Promise<string | null> {
  const { userId } = await auth();
  return userId;
}
