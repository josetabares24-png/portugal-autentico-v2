'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';
import { editorialNavigation, lisboaNavigation } from '@/data/editorial-navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lisboaOpen, setLisboaOpen] = useState(false);
  const lisboaContainer = useRef<HTMLDivElement>(null);
  const lisboaButton = useRef<HTMLButtonElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  // next-intl's internal /es prefix is absent from public URLs.
  const publicPathname = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  const isActive = (href: string) => !href.includes('#') &&
    (publicPathname === href || publicPathname.startsWith(`${href}/`));

  useEffect(() => {
    if (!lisboaOpen) return;
    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !lisboaContainer.current?.contains(event.target)) setLisboaOpen(false);
    }
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [lisboaOpen]);

  function closeMenus() {
    setLisboaOpen(false);
    setMobileMenuOpen(false);
  }

  return (
    <nav aria-label="Navegación principal" onKeyDown={(event) => {
      if (event.key !== 'Escape') return;
      if (lisboaOpen) lisboaButton.current?.focus();
      if (mobileMenuOpen) mobileButton.current?.focus();
      closeMenus();
    }} className="sticky top-0 z-50 border-b border-taupe/10 bg-cream/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={closeMenus} className="shrink-0 rounded-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta">
            <Image src="/logo.png" alt="Estaba en Lisboa" width={160} height={48} priority className="h-12 w-auto" />
          </Link>
          <div className="hidden items-center gap-3 xl:flex">
            <div ref={lisboaContainer} className="relative" onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setLisboaOpen(false);
            }}>
              <button ref={lisboaButton} type="button" aria-expanded={lisboaOpen} aria-controls="lisboa-desktop-links" onClick={() => setLisboaOpen((open) => !open)} className="nav-link nav-link-desktop gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">
                Lisboa <span aria-hidden="true" className="text-xs">{lisboaOpen ? '−' : '+'}</span>
              </button>
              <div id="lisboa-desktop-links" hidden={!lisboaOpen} className="absolute right-0 top-full w-56 border border-border-soft bg-cream p-2 shadow-soft">
                {lisboaNavigation.map((link) => <Link key={link.href} href={link.href} onClick={closeMenus} aria-current={isActive(link.href) ? 'page' : undefined} className="flex min-h-11 items-center rounded-sm px-4 text-sm text-night hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta">{link.label}</Link>)}
              </div>
            </div>
            {editorialNavigation.map((link) => <Link key={link.href} href={link.href} onClick={closeMenus} aria-current={isActive(link.href) ? 'page' : undefined} className="nav-link nav-link-desktop rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">{link.label}</Link>)}
          </div>
          <button ref={mobileButton} type="button" onClick={() => { setMobileMenuOpen((open) => !open); setLisboaOpen(false); }} className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-night hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta xl:hidden" aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'} aria-controls="editorial-mobile-links" aria-expanded={mobileMenuOpen}>
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={28} aria-hidden="true" />
          </button>
        </div>
        <div id="editorial-mobile-links" hidden={!mobileMenuOpen} className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-taupe/20 py-3 xl:hidden">
          <details className="border-b border-border-soft pb-2">
            <summary className="min-h-11 cursor-pointer py-3 font-semibold text-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta">Lisboa</summary>
            <div className="pl-4">{lisboaNavigation.map((link) => <Link key={link.href} href={link.href} onClick={closeMenus} aria-current={isActive(link.href) ? 'page' : undefined} className="nav-link nav-link-mobile focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta">{link.label}</Link>)}</div>
          </details>
          {editorialNavigation.map((link) => <Link key={link.href} href={link.href} onClick={closeMenus} aria-current={isActive(link.href) ? 'page' : undefined} className="nav-link nav-link-mobile focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta">{link.label}</Link>)}
          <div className="mt-2 flex flex-wrap gap-x-5 border-t border-border-soft pt-2 text-sm text-text-secondary">
            <Link href="/blog#catalogo" onClick={closeMenus} className="inline-flex min-h-11 items-center underline underline-offset-4">Todas las guías</Link>
            <Link href="/free-tours-lisboa" onClick={closeMenus} aria-current={isActive('/free-tours-lisboa') ? 'page' : undefined} className="inline-flex min-h-11 items-center underline underline-offset-4">Free tours</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
