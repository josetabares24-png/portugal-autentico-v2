'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserButton, SignInButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  const [utilidadesDropdownOpen, setUtilidadesDropdownOpen] = useState(false);

  const navLinks = [
    { href: '/itinerarios', label: 'Guías' },
    { href: '/donde-dormir', label: 'Dónde Dormir' },
    { href: '/blog', label: 'Blog' },
    { href: '/tours', label: 'Tours' },
    { href: '/contacto', label: 'Contacto' }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Original */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Estaba en Lisboa"
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2">
            {/* Utilidades Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setUtilidadesDropdownOpen(true)}
              onMouseLeave={() => setUtilidadesDropdownOpen(false)}
            >
              <button className={`px-4 py-2 rounded-lg font-medium transition-colors hover:bg-slate-50 ${
                ['/apps', '/presupuesto', '/transporte', '/donde-dormir', '/info-util', '/seguridad'].some(p => pathname.startsWith(p))
                  ? 'text-primary bg-primary/5'
                  : 'text-slate-700'
              }`}>
                Utilidades <span className="text-xs ml-1">▼</span>
              </button>

              {utilidadesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                  <Link href="/apps" className="block px-4 py-2.5 hover:bg-slate-50 text-sm transition-colors">
                    <div className="font-bold text-slate-900">📱 Apps Útiles</div>
                    <div className="text-xs text-slate-500">Mejores apps para viajar</div>
                  </Link>
                  <Link href="/presupuesto" className="block px-4 py-2.5 hover:bg-slate-50 text-sm transition-colors">
                    <div className="font-bold text-slate-900">💰 Calculadora Presupuesto</div>
                    <div className="text-xs text-slate-500">Calcula cuánto necesitas</div>
                  </Link>
                  <div className="border-t border-slate-100 my-2"></div>
                  <Link href="/transporte" className="block px-4 py-2 hover:bg-slate-50 text-sm text-slate-700 hover:text-primary transition-colors">
                    🚇 Transporte
                  </Link>
                  <Link href="/info-util" className="block px-4 py-2 hover:bg-slate-50 text-sm text-slate-700 hover:text-primary transition-colors">
                    ℹ️ Info Útil
                  </Link>
                  <Link href="/seguridad" className="block px-4 py-2 hover:bg-slate-50 text-sm text-slate-700 hover:text-primary transition-colors">
                    🔒 Seguridad
                  </Link>
                </div>
              )}
            </div>

            {/* Regular Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-colors hover:bg-slate-50 ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            {isSignedIn ? (
              <>
                <Link
                  href="/mis-guias"
                  className="text-slate-700 hover:text-primary font-medium transition-colors"
                >
                  Mis Guías
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <SignInButton mode="modal">
                <button className="text-slate-700 hover:text-primary font-medium transition-colors">
                  Iniciar Sesión
                </button>
              </SignInButton>
            )}
            
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold px-6 py-2.5 rounded-xl shadow-lg hover:scale-105 transition-all"
            >
              <span>Ver Guías</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200 bg-white">
            <div className="flex flex-col gap-2">
              {/* Utilidades Section */}
              <div className="mb-2">
                <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wide">Utilidades</div>
                <Link href="/apps" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                  📱 Apps Útiles
                </Link>
                <Link href="/presupuesto" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                  💰 Calculadora Presupuesto
                </Link>
                <Link href="/transporte" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                  🚇 Transporte
                </Link>
                <Link href="/info-util" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                  ℹ️ Info Útil
                </Link>
              </div>

              {/* Other Pages */}
              <div className="pt-2 border-t border-slate-100">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive(link.href)
                        ? 'text-primary bg-primary/5'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="border-t border-slate-200 pt-4 mt-2 flex flex-col gap-4">
                {isSignedIn ? (
                  <>
                    <Link
                      href="/mis-guias"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-slate-700 hover:text-primary font-medium text-lg py-2 transition-colors"
                    >
                      Mis Guías
                    </Link>
                    <div className="py-2">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </>
                ) : (
                  <SignInButton mode="modal">
                    <button className="text-slate-700 hover:text-primary font-medium text-lg py-2 text-left transition-colors">
                      Iniciar Sesión
                    </button>
                  </SignInButton>
                )}

                <Link
                  href="/itinerarios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg"
                >
                  <span>Ver Guías</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
