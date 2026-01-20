'use client';

import { useUser } from '@clerk/nextjs';
import { useMemo } from 'react';

export function useIsAdmin(): boolean {
  const { user, isLoaded } = useUser();

  const isAdmin = useMemo(() => {
    if (!isLoaded || !user) return false;

    const metadata = user.publicMetadata as { role?: string; isAdmin?: boolean; isMaster?: boolean };
    
    // Verifica si es admin por metadata
    if (metadata?.isAdmin === true || metadata?.isMaster === true || metadata?.role === 'admin') {
      return true;
    }

    // También verifica por email (fallback)
    const adminEmails = process.env.NEXT_PUBLIC_ADMIN_EMAILS?.split(',') || ['josetabares24@gmail.com'];
    const userEmail = user.emailAddresses[0]?.emailAddress;
    
    if (userEmail && adminEmails.includes(userEmail)) {
      return true;
    }

    return false;
  }, [user, isLoaded]);

  return isAdmin;
}
