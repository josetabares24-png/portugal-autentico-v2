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
    <nav className="bg-cream/98 backdrop-blur-xl border-b border-taupe/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-20">
          {/* Logo + Hora/Clima (Mobile) */}
          <div className="flex items-center gap-2.5 md:gap-0 flex-1 min-w-0">
            <Link href="/" className="flex items-center hover:opacity-90 transition-opacity flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Estaba en Lisboa"
                width={180}
                height={56}
                priority
                className="h-14 w-auto"
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
              <button className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:bg-taupe/10 flex items-center gap-1.5 ${
                ['/apps', '/presupuesto', '/transporte', '/info-util', '/donde-dormir', '/free-tours'].some(p => pathname.startsWith(p))
                  ? 'text-primary bg-primary/10'
                  : 'text-night'
              }`}>
                Utilidades
                <Icon name="expand_more" size={16} />
              </button>

              {utilidadesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-cream rounded-2xl border border-taupe/20 border border-taupe/15 py-3 z-50">
                  <Link href="/apps" className="flex items-start gap-3 px-4 py-3 hover:bg-taupe/10 transition-colors group">
                    <Icon name="phone_iphone" size={20} className="text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-night text-sm mb-0.5">Apps Útiles</div>
                      <div className="text-xs text-taupe">Mejores apps para viajar</div>
                    </div>
                  </Link>
                  <Link href="/presupuesto" className="flex items-start gap-3 px-4 py-3 hover:bg-taupe/10 transition-colors group">
                    <Icon name="calculate" size={20} className="text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-bold text-night text-sm mb-0.5">Calculadora Presupuesto</div>
                      <div className="text-xs text-taupe">Calcula cuánto necesitas</div>
                    </div>
                  </Link>
                  <div className="border-t border-taupe/15 my-2"></div>
                  <Link href="/transporte" className="flex items-center gap-3 px-4 py-2.5 hover:bg-taupe/10 text-night hover:text-primary transition-colors group">
                    <Icon name="directions_transit" size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-sm">Transporte</span>
                  </Link>
                  <Link href="/donde-dormir" className="flex items-center gap-3 px-4 py-2.5 hover:bg-taupe/10 text-night hover:text-primary transition-colors group">
                    <Icon name="hotel" size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-sm">Dónde Dormir</span>
                  </Link>
                  <Link href="/free-tours" className="flex items-center gap-3 px-4 py-2.5 hover:bg-taupe/10 text-night hover:text-primary transition-colors group">
                    <Icon name="tour" size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-sm">Free Tours</span>
                  </Link>
                  <Link href="/info-util" className="flex items-center gap-3 px-4 py-2.5 hover:bg-taupe/10 text-night hover:text-primary transition-colors group">
                    <Icon name="info" size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-sm">Info Útil</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Regular Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:bg-taupe/10 ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-night'
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
                  className="px-4 py-2.5 text-night hover:text-primary font-semibold text-sm transition-colors rounded-xl hover:bg-taupe/10"
                >
                  Mis Guías
                </Link>
                {isAdmin && (
                  <Link
                    href="/admin"
                    className="px-4 py-2.5 text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors rounded-xl hover:bg-orange-50 border border-orange-200"
                  >
                    <Icon name="admin_panel_settings" size={18} className="align-middle mr-1" />
                    Admin
                  </Link>
                )}
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <SignInButton mode="modal">
                <button className="px-4 py-2.5 text-night hover:text-primary font-semibold text-sm transition-colors rounded-xl hover:bg-taupe/10">
                  Iniciar Sesión
                </button>
              </SignInButton>
            )}
            
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              <span>Ver Guías</span>
              <Icon name="arrow_forward" size={18} />
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-night hover:text-primary transition-colors"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={30} aria-hidden="true" />
          </button>
        </div>


        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-taupe/20 bg-cream">
            <div className="flex flex-col gap-1">
              {/* Utilidades Section */}
              <div className="mb-3">
                <div className="px-4 py-2 text-xs font-bold text-taupe uppercase tracking-wide">Utilidades</div>
                <Link href="/apps" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-night hover:bg-taupe/10 rounded-xl transition-colors">
                  <Icon name="phone_iphone" size={20} className="text-primary" />
                  <span>Apps Útiles</span>
                </Link>
                <Link href="/presupuesto" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-night hover:bg-taupe/10 rounded-xl transition-colors">
                  <Icon name="calculate" size={20} className="text-primary" />
                  <span>Calculadora Presupuesto</span>
                </Link>
                <Link href="/transporte" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-night hover:bg-taupe/10 rounded-xl transition-colors font-medium">
                  <Icon name="directions_transit" size={18} />
                  <span>Transporte</span>
                </Link>
                <Link href="/donde-dormir" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-night hover:bg-taupe/10 rounded-xl transition-colors font-medium">
                  <Icon name="hotel" size={18} />
                  <span>Dónde Dormir</span>
                </Link>
                <Link href="/free-tours" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-night hover:bg-taupe/10 rounded-xl transition-colors font-medium">
                  <Icon name="tour" size={18} />
                  <span>Free Tours</span>
                </Link>
                <Link href="/info-util" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-night hover:bg-taupe/10 rounded-xl transition-colors font-medium">
                  <Icon name="info" size={18} />
                  <span>Info Útil</span>
                </Link>
              </div>

              {/* Other Pages */}
              <div className="pt-3 border-t border-taupe/15">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                      isActive(link.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-night hover:bg-taupe/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="border-t border-taupe/20 pt-4 mt-2 flex flex-col gap-3">
                {isSignedIn ? (
                  <>
                    <Link
                      href="/mis-guias"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-night hover:text-primary font-semibold text-base rounded-xl hover:bg-taupe/10 transition-colors"
                    >
                      Mis Guías
                    </Link>
                    {isAdmin && (
                      <Link
                        href="/admin"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-4 py-3 text-orange-600 hover:text-orange-700 font-semibold text-base rounded-xl hover:bg-orange-50 transition-colors border border-orange-200"
                      >
                        <Icon name="admin_panel_settings" size={18} className="align-middle mr-2" />
                        Panel de Admin
                      </Link>
                    )}
                    <div className="px-4 py-2">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </>
                ) : (
                  <SignInButton mode="modal">
                    <button className="px-4 py-3 text-night hover:text-primary font-semibold text-base rounded-xl hover:bg-taupe/10 transition-colors text-left">
                      Iniciar Sesión
                    </button>
                  </SignInButton>
                )}

                <Link
                  href="/itinerarios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
                >
                  <span>Ver Guías</span>
                  <Icon name="arrow_forward" size={18} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
