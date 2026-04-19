'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserButton, SignInButton, useUser } from '@clerk/nextjs';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import Icon from '@/components/Icon';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const isAdmin = useIsAdmin();

  const [utilidadesDropdownOpen, setUtilidadesDropdownOpen] = useState(false);

  const navLinks = [
    { href: '/itinerarios', label: 'Guías' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-background-light border-b border-border-soft sticky top-0 z-50">
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
            {/* Utilidades Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setUtilidadesDropdownOpen(true)}
              onMouseLeave={() => setUtilidadesDropdownOpen(false)}
            >
              <button className={`px-4 py-2 font-semibold text-sm transition-colors flex items-center gap-1.5 ${
                ['/apps', '/presupuesto', '/transporte', '/info-util', '/donde-dormir', '/free-tours', '/tours'].some(p => pathname.startsWith(p))
                  ? 'text-primary'
                  : 'text-text-main hover:text-primary'
              }`}>
                Utilidades
                <Icon name="expand_more" size={16} />
              </button>

              {utilidadesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-background-light border border-border-soft py-2 z-50">
                  <Link href="/apps" className="flex items-start gap-3 px-4 py-3 hover:bg-border-soft/30 transition-colors">
                    <Icon name="phone_iphone" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-text-main text-sm">Apps Útiles</div>
                      <div className="text-xs text-text-secondary">Mejores apps para viajar</div>
                    </div>
                  </Link>
                  <Link href="/presupuesto" className="flex items-start gap-3 px-4 py-3 hover:bg-border-soft/30 transition-colors">
                    <Icon name="calculate" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-text-main text-sm">Calculadora Presupuesto</div>
                      <div className="text-xs text-text-secondary">Calcula cuánto necesitas</div>
                    </div>
                  </Link>
                  <div className="border-t border-border-soft my-1"></div>
                  <Link href="/transporte" className="flex items-center gap-3 px-4 py-2.5 text-text-main hover:text-primary transition-colors">
                    <Icon name="directions_transit" size={16} />
                    <span className="text-sm">Transporte</span>
                  </Link>
                  <Link href="/donde-dormir" className="flex items-center gap-3 px-4 py-2.5 text-text-main hover:text-primary transition-colors">
                    <Icon name="hotel" size={16} />
                    <span className="text-sm">Dónde Dormir</span>
                  </Link>
                  <Link href="/tours" className="flex items-center gap-3 px-4 py-2.5 text-text-main hover:text-primary transition-colors">
                    <Icon name="explore" size={16} />
                    <span className="text-sm">Tours y Actividades</span>
                  </Link>
                  <Link href="/free-tours" className="flex items-center gap-3 px-4 py-2.5 text-text-main hover:text-primary transition-colors">
                    <Icon name="tour" size={16} />
                    <span className="text-sm">Free Tours</span>
                  </Link>
                  <Link href="/info-util" className="flex items-center gap-3 px-4 py-2.5 text-text-main hover:text-primary transition-colors">
                    <Icon name="info" size={16} />
                    <span className="text-sm">Info Útil</span>
                  </Link>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-semibold text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-text-main hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            {isSignedIn ? (
              <>
                <Link
                  href="/mis-guias"
                  className="px-4 py-2 text-text-main hover:text-primary font-semibold text-sm transition-colors"
                >
                  Mis Guías
                </Link>
                {isAdmin && (
                  <Link
                    href="/admin"
                    className="px-4 py-2 text-text-secondary hover:text-text-main font-semibold text-sm transition-colors border border-border-soft"
                  >
                    Admin
                  </Link>
                )}
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <SignInButton mode="modal">
                <button className="px-4 py-2 text-text-main hover:text-primary font-semibold text-sm transition-colors">
                  Iniciar Sesión
                </button>
              </SignInButton>
            )}

            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2 transition-colors text-sm"
            >
              Ver Guías
              <Icon name="arrow_forward" size={16} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-main hover:text-primary transition-colors"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={28} aria-hidden="true" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-soft">
            <div className="flex flex-col">
              <div className="mb-2">
                <div className="px-4 py-2 text-xs font-bold text-text-secondary uppercase tracking-widest">Utilidades</div>
                <Link href="/apps" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-main hover:text-primary transition-colors">
                  <Icon name="phone_iphone" size={16} className="text-primary" />
                  <span>Apps Útiles</span>
                </Link>
                <Link href="/presupuesto" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-main hover:text-primary transition-colors">
                  <Icon name="calculate" size={16} className="text-primary" />
                  <span>Calculadora Presupuesto</span>
                </Link>
                <Link href="/transporte" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-main hover:text-primary transition-colors">
                  <Icon name="directions_transit" size={16} />
                  <span>Transporte</span>
                </Link>
                <Link href="/donde-dormir" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-main hover:text-primary transition-colors">
                  <Icon name="hotel" size={16} />
                  <span>Dónde Dormir</span>
                </Link>
                <Link href="/tours" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-main hover:text-primary transition-colors">
                  <Icon name="explore" size={16} />
                  <span>Tours y Actividades</span>
                </Link>
                <Link href="/free-tours" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-main hover:text-primary transition-colors">
                  <Icon name="tour" size={16} />
                  <span>Free Tours</span>
                </Link>
                <Link href="/info-util" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-main hover:text-primary transition-colors">
                  <Icon name="info" size={16} />
                  <span>Info Útil</span>
                </Link>
              </div>

              <div className="pt-2 border-t border-border-soft">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                      isActive(link.href)
                        ? 'text-primary'
                        : 'text-text-main hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-border-soft pt-3 mt-2 flex flex-col gap-2">
                {isSignedIn ? (
                  <>
                    <Link
                      href="/mis-guias"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2.5 text-text-main hover:text-primary font-semibold text-sm transition-colors"
                    >
                      Mis Guías
                    </Link>
                    {isAdmin && (
                      <Link
                        href="/admin"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-4 py-2.5 text-text-secondary font-semibold text-sm border border-border-soft transition-colors"
                      >
                        Panel de Admin
                      </Link>
                    )}
                    <div className="px-4 py-2">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </>
                ) : (
                  <SignInButton mode="modal">
                    <button className="px-4 py-2.5 text-text-main hover:text-primary font-semibold text-sm transition-colors text-left">
                      Iniciar Sesión
                    </button>
                  </SignInButton>
                )}

                <Link
                  href="/itinerarios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 transition-colors text-sm mx-4"
                >
                  Ver Guías
                  <Icon name="arrow_forward" size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
