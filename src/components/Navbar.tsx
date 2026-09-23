'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // next-intl uses /es internally even though localePrefix='never'.
  // Static HTML can therefore see /es/... while visitors see /...
  // Normalize the internal locale prefix so aria-current is correct in
  // both the server-rendered markup and after hydration.
  const publicPathname = pathname.replace(/^\/es(?=\/|$)/, '') || '/';

  const navLinks = [
    { href: '/blog', label: 'Guías' },
    { href: '/free-tours-lisboa', label: 'Free tours' },
  ];

  const isActive = (href: string) =>
    publicPathname === href || publicPathname.startsWith(`${href}/`);

  return (
    <nav className="sticky top-0 z-50 border-b border-taupe/10 bg-cream/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className="nav-link nav-link-desktop"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-night transition-colors hover:bg-white/60 hover:text-terracotta xl:hidden"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={28} aria-hidden="true" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="border-t border-taupe/20 py-4 xl:hidden">
            <div className="flex flex-col">
              <div className="pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="nav-link nav-link-mobile"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
