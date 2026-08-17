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
                className={`relative flex items-center px-4 py-3 font-semibold text-sm transition-colors ${
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

            <NavbarAuthSlot variant="desktop" pathname={pathname} />
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
                    className={`block px-4 py-3 text-sm font-semibold transition-colors ${
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

              <NavbarAuthSlot variant="mobile" pathname={pathname} onNavigate={() => setMobileMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
