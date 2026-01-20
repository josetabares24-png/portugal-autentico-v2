'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { UserButton, SignInButton, useUser } from '@clerk/nextjs';
import { useIsAdmin } from '@/hooks/useIsAdmin';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const isAdmin = useIsAdmin();

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
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
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
          <div className="hidden md:flex items-center gap-1">
            {/* Utilidades Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setUtilidadesDropdownOpen(true)}
              onMouseLeave={() => setUtilidadesDropdownOpen(false)}
            >
              <button className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:bg-slate-50 flex items-center gap-1.5 ${
                ['/apps', '/presupuesto', '/transporte', '/donde-dormir', '/info-util'].some(p => pathname.startsWith(p))
                  ? 'text-primary bg-primary/10'
                  : 'text-slate-700'
              }`}>
                Utilidades
                <span className="material-symbols-outlined text-base">expand_more</span>
              </button>

              {utilidadesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 z-50">
                  <Link href="/apps" className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 group-hover:scale-110 transition-transform">phone_iphone</span>
                    <div>
                      <div className="font-bold text-slate-900 text-sm mb-0.5">Apps Útiles</div>
                      <div className="text-xs text-slate-500">Mejores apps para viajar</div>
                    </div>
                  </Link>
                  <Link href="/presupuesto" className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 group-hover:scale-110 transition-transform">calculate</span>
                    <div>
                      <div className="font-bold text-slate-900 text-sm mb-0.5">Calculadora Presupuesto</div>
                      <div className="text-xs text-slate-500">Calcula cuánto necesitas</div>
                    </div>
                  </Link>
                  <div className="border-t border-slate-100 my-2"></div>
                  <Link href="/transporte" className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-primary transition-colors group">
                    <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">directions_transit</span>
                    <span className="font-semibold text-sm">Transporte</span>
                  </Link>
                  <Link href="/info-util" className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-primary transition-colors group">
                    <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">info</span>
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
                className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition-all hover:bg-slate-50 ${
                  isActive(link.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-slate-700'
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
                  className="px-4 py-2.5 text-slate-700 hover:text-primary font-semibold text-sm transition-colors rounded-xl hover:bg-slate-50"
                >
                  Mis Guías
                </Link>
                {isAdmin && (
                  <Link
                    href="/admin"
                    className="px-4 py-2.5 text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors rounded-xl hover:bg-orange-50 border border-orange-200"
                  >
                    <span className="material-symbols-outlined text-lg align-middle mr-1">admin_panel_settings</span>
                    Admin
                  </Link>
                )}
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <SignInButton mode="modal">
                <button className="px-4 py-2.5 text-slate-700 hover:text-primary font-semibold text-sm transition-colors rounded-xl hover:bg-slate-50">
                  Iniciar Sesión
                </button>
              </SignInButton>
            )}
            
            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm"
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
            <div className="flex flex-col gap-1">
              {/* Utilidades Section */}
              <div className="mb-3">
                <div className="px-4 py-2 text-xs font-bold text-slate-500 uppercase tracking-wide">Utilidades</div>
                <Link href="/apps" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                  <span className="material-symbols-outlined text-primary text-xl">phone_iphone</span>
                  <span>Apps Útiles</span>
                </Link>
                <Link href="/presupuesto" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
                  <span className="material-symbols-outlined text-primary text-xl">calculate</span>
                  <span>Calculadora Presupuesto</span>
                </Link>
                <Link href="/transporte" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-xl transition-colors font-medium">
                  <span className="material-symbols-outlined text-lg">directions_transit</span>
                  <span>Transporte</span>
                </Link>
                <Link href="/info-util" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-xl transition-colors font-medium">
                  <span className="material-symbols-outlined text-lg">info</span>
                  <span>Info Útil</span>
                </Link>
              </div>

              {/* Other Pages */}
              <div className="pt-3 border-t border-slate-100">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                      isActive(link.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="border-t border-slate-200 pt-4 mt-2 flex flex-col gap-3">
                {isSignedIn ? (
                  <>
                    <Link
                      href="/mis-guias"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-slate-700 hover:text-primary font-semibold text-base rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      Mis Guías
                    </Link>
                    {isAdmin && (
                      <Link
                        href="/admin"
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-4 py-3 text-orange-600 hover:text-orange-700 font-semibold text-base rounded-xl hover:bg-orange-50 transition-colors border border-orange-200"
                      >
                        <span className="material-symbols-outlined text-lg align-middle mr-2">admin_panel_settings</span>
                        Panel de Admin
                      </Link>
                    )}
                    <div className="px-4 py-2">
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </>
                ) : (
                  <SignInButton mode="modal">
                    <button className="px-4 py-3 text-slate-700 hover:text-primary font-semibold text-base rounded-xl hover:bg-slate-50 transition-colors text-left">
                      Iniciar Sesión
                    </button>
                  </SignInButton>
                )}

                <Link
                  href="/itinerarios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm"
                >
                  <span>Ver Guías</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
