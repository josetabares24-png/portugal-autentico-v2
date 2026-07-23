'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import Icon from '@/components/Icon';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const isAdmin = useIsAdmin();

  const navLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/itinerarios', label: 'Itinerarios' },
    { href: '/actividades', label: 'Actividades' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav className="bg-cream/95 backdrop-blur-sm border-b border-taupe/10 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-1 min-w-0">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Estaba en Lisboa"
                width={160}
                height={48}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`relative px-4 py-2 font-semibold text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-terracotta after:absolute after:-bottom-px after:left-4 after:right-4 after:h-[2px] after:rounded-full after:bg-terracotta'
                    : 'text-night hover:text-terracotta'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/planifica-tu-viaje"
              aria-current={isActive('/planifica-tu-viaje') ? 'page' : undefined}
              className="btn-primary px-5 py-2 text-sm"
            >
              Planifica tu viaje
              <Icon name="arrow_forward" size={16} />
            </Link>

            {isSignedIn && (
              <>
                {isAdmin && (
                  <Link
                    href="/admin"
                    aria-current={isActive('/admin') ? 'page' : undefined}
                    className="px-4 py-2 text-taupe hover:text-night font-semibold text-sm transition-colors border border-taupe/20"
                  >
                    Admin
                  </Link>
                )}
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-night hover:text-terracotta transition-colors"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={28} aria-hidden="true" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-taupe/20">
            <div className="flex flex-col">
              <div className="pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                      isActive(link.href)
                        ? 'text-terracotta'
                        : 'text-night hover:text-terracotta'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/planifica-tu-viaje"
                  aria-current={isActive('/planifica-tu-viaje') ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary px-6 py-3 text-sm mx-4 mt-3"
                >
                  Planifica tu viaje
                  <Icon name="arrow_forward" size={16} />
                </Link>
              </div>

              {isSignedIn && (
                <div className="border-t border-taupe/20 pt-3 mt-4 flex flex-col gap-2">
                  {isAdmin && (
                    <Link
                      href="/admin"
                      aria-current={isActive('/admin') ? 'page' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2.5 text-taupe font-semibold text-sm border border-taupe/20 transition-colors"
                    >
                      Panel de Admin
                    </Link>
                  )}
                  <div className="px-4 py-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
