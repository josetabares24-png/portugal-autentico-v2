'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';

const NavbarAuthSlot = dynamic(() => import('@/components/NavbarAuthSlot'), { ssr: false });

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/itinerarios', label: 'Itinerarios' },
    { href: '/free-tours-lisboa', label: 'Free tours' },
    { href: '/actividades', label: 'Actividades' },
    // Justo después de Actividades: es el paso natural de «qué hago» a
    // «cómo lo reservo», y así se leen como un par.
    { href: '/comprar-entradas', label: 'Entradas' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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

          {/* DESKTOP ACTIONS */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="/planifica-tu-viaje"
              aria-current={isActive('/planifica-tu-viaje') ? 'page' : undefined}
              className="btn-primary"
            >
              Planifica tu viaje
              <Icon name="arrow_forward" size={16} />
            </Link>

            <NavbarAuthSlot variant="desktop" pathname={pathname} />
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
                <Link
                  href="/planifica-tu-viaje"
                  aria-current={isActive('/planifica-tu-viaje') ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary mx-4 mt-4 w-[calc(100%-2rem)]"
                >
                  Planifica tu viaje
                  <Icon name="arrow_forward" size={16} />
                </Link>
              </div>

              <NavbarAuthSlot variant="mobile" pathname={pathname} onNavigate={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
