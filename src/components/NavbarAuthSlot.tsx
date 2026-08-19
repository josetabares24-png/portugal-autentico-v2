'use client';

import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { useIsAdmin } from '@/hooks/useIsAdmin';

interface NavbarAuthSlotProps {
  variant: 'desktop' | 'mobile';
  pathname: string;
  onNavigate?: () => void;
}

/**
 * Loads the Clerk SDK only for this slot (code-split out of Navbar and
 * mounted client-side only) so anonymous visitors on public pages don't
 * pay for Clerk's bundle/auth check just to render the sign-in/admin UI.
 */
export default function NavbarAuthSlot({ variant, pathname, onNavigate }: NavbarAuthSlotProps) {
  const { isSignedIn } = useUser();
  const isAdmin = useIsAdmin();
  const isAdminActive = pathname === '/admin' || pathname.startsWith('/admin/');

  if (!isSignedIn) return null;

  if (variant === 'mobile') {
    return (
      <div className="border-t border-taupe/20 pt-3 mt-4 flex flex-col gap-2">
        {isAdmin && (
          <Link
            href="/admin"
            aria-current={isAdminActive ? 'page' : undefined}
            onClick={onNavigate}
            className="btn-secondary mx-4 w-[calc(100%-2rem)]"
          >
            Panel de Admin
          </Link>
        )}
        <div className="px-4 py-2">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    );
  }

  return (
    <>
      {isAdmin && (
        <Link
          href="/admin"
          aria-current={isAdminActive ? 'page' : undefined}
          className="btn-secondary"
        >
          Admin
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </>
  );
}
