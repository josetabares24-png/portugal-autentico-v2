'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';

// Mantener enlaces internos reales; no replicar las rutas .html de Grok.
const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/comprar-entradas', label: 'Entradas' },
  { href: '/free-tours-lisboa', label: 'Free tours' },
  { href: '/blog/excursiones-desde-lisboa', label: 'Excursiones' },
  { href: '/itinerarios', label: 'Itinerarios' },
  { href: '/blog/donde-alojarse-en-lisboa', label: 'Alojamiento' },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const publicPathname = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  const isActive = (href: string) =>
    publicPathname === href || publicPathname.startsWith(href + '/');

  return (
    <nav aria-label="Navegación principal" className="sticky top-0 z-50 border-b border-[#015a5c] bg-[#016d6f] text-white">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6">
        <div className="flex min-h-[68px] items-center justify-between gap-3">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} aria-label="Estaba en Lisboa — Inicio"
            className="shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffcb05]">
            <Image src="/brand/logo-v1-inverso.png" alt="Estaba en Lisboa" width={180} height={56} priority className="h-[48px] w-auto" />
          </Link>

          <div className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? 'page' : undefined}
                className="inline-flex min-h-11 items-center border-b-2 border-transparent font-body text-[13px] font-semibold text-white transition-colors hover:border-[#ffcb05] hover:text-[#ffec94] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffcb05] aria-[current=page]:border-[#ffcb05] aria-[current=page]:text-[#ffec94]">
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/comprar-entradas" className="hidden min-h-10 shrink-0 items-center justify-center rounded-[4px] bg-[#ffcb05] px-4 font-body text-[13px] font-extrabold text-[#103442] transition-colors hover:bg-[#ffe276] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-flex">
            Ver entradas
          </Link>
          <button type="button" onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-sm text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ffcb05] lg:hidden"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-controls="main-mobile-menu" aria-expanded={mobileMenuOpen}>
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={27} aria-hidden="true" />
          </button>
        </div>
        <div id="main-mobile-menu" hidden={!mobileMenuOpen} className="border-t border-white/20 pb-4 pt-2 lg:hidden">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setMobileMenuOpen(false)}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className="flex min-h-12 items-center border-b border-white/15 px-2 font-body text-sm font-semibold text-white hover:bg-white/10 aria-[current=page]:text-[#ffec94]">
              {link.label}
            </Link>
          ))}
          <Link href="/comprar-entradas" onClick={() => setMobileMenuOpen(false)}
            className="mt-3 flex min-h-11 items-center justify-center rounded-[4px] bg-[#ffcb05] px-4 font-body text-sm font-extrabold text-[#103442]">
            Ver entradas
          </Link>
        </div>
      </div>
    </nav>
  );
}
