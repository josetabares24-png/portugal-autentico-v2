'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';
import { englishCounterpart } from '@/lib/language-alternates';
import { primaryNavigation } from '@/data/editorial-navigation';

type NavigationGroup = Extract<(typeof primaryNavigation)[number], { kind: 'group' }>;
type DropdownProps = {
  group: NavigationGroup;
  open: boolean;
  onToggle: (event: MouseEvent<HTMLButtonElement>) => void;
  onClose: () => void;
  onNavigate: () => void;
  isActive: (href: string) => boolean;
};

function DesktopDropdown({ group, open, onToggle, onClose, onNavigate, isActive }: DropdownProps) {
  return (
    <div className="relative" onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) onClose();
    }}>
      <button type="button" data-primary-nav={group.id} aria-expanded={open} aria-controls={`${group.id}-desktop-links`} onClick={onToggle} className={`nav-link nav-link-desktop gap-2 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${group.links.some((link) => isActive(link.href)) ? 'text-terracotta' : ''}`}>
        <span>{group.label}</span><span aria-hidden="true" className="text-xs">{open ? '−' : '+'}</span>
      </button>
      <div id={`${group.id}-desktop-links`} hidden={!open} className={`absolute top-full w-56 border border-border-soft bg-cream p-2 shadow-soft ${group.id === 'experiencias' ? 'right-0' : 'left-0'}`}>
        {group.links.map((link) => <Link key={link.href} href={link.href} onClick={onNavigate} aria-current={isActive(link.href) ? 'page' : undefined} className="flex min-h-11 items-center rounded-sm px-4 text-sm text-night hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta">{link.label}</Link>)}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopGroup, setDesktopGroup] = useState<NavigationGroup['id'] | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const activeDesktopButton = useRef<HTMLButtonElement | null>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const mobilePanel = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const publicPathname = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  const englishHref = englishCounterpart(publicPathname);
  const isActive = (href: string) => !href.includes('#') &&
    (publicPathname === href || publicPathname.startsWith(`${href}/`));

  const closeMenus = useCallback(() => {
    setDesktopGroup(null);
    setMobileMenuOpen(false);
    mobilePanel.current?.querySelectorAll('details').forEach((details) => { details.open = false; });
  }, []);

  useEffect(() => {
    if (!desktopGroup && !mobileMenuOpen) return;
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) closeMenus();
    };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [desktopGroup, mobileMenuOpen, closeMenus]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    desktop.addEventListener('change', closeMenus);
    return () => desktop.removeEventListener('change', closeMenus);
  }, [closeMenus]);

  return (
    <nav ref={navRef} aria-label="Navegación principal" onKeyDown={(event) => {
      if (event.key !== 'Escape') return;
      if (desktopGroup) activeDesktopButton.current?.focus();
      else if (mobileMenuOpen) mobileButton.current?.focus();
      closeMenus();
    }} className="sticky top-0 z-50 border-b border-taupe/10 bg-cream/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" onClick={closeMenus} className="shrink-0 rounded-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta">
            <Image src="/logo.png" alt="Estaba en Lisboa" width={160} height={48} priority className="h-12 w-auto" />
          </Link>
          <div data-navigation-layout="desktop" className="hidden items-center gap-3 lg:flex">
            {primaryNavigation.map((item) => item.kind === 'group' ? <DesktopDropdown key={item.id} group={item} open={desktopGroup === item.id} onToggle={(event) => {
              activeDesktopButton.current = event.currentTarget;
              setDesktopGroup((open) => open === item.id ? null : item.id);
            }} onClose={() => setDesktopGroup(null)} onNavigate={closeMenus} isActive={isActive} /> : <Link key={item.href} href={item.href} data-primary-nav={item.label} onClick={closeMenus} aria-current={isActive(item.href) ? 'page' : undefined} className="nav-link nav-link-desktop rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">{item.label}</Link>)}
            {englishHref ? <a href={englishHref} hrefLang="en" lang="en" onClick={closeMenus} className="inline-flex min-h-11 items-center border-l border-border-soft pl-4 text-xs font-bold text-night" aria-label="Read this page in English">EN</a> : null}
          </div>
          <button ref={mobileButton} type="button" onClick={() => {
            if (mobileMenuOpen) closeMenus();
            else { setMobileMenuOpen(true); setDesktopGroup(null); }
          }} className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-night hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta lg:hidden" aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'} aria-controls="editorial-mobile-links" aria-expanded={mobileMenuOpen}>
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={28} aria-hidden="true" />
          </button>
        </div>
        <div ref={mobilePanel} id="editorial-mobile-links" hidden={!mobileMenuOpen} className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-taupe/20 py-3 lg:hidden">
          {primaryNavigation.map((item) => item.kind === 'group' ? <details key={item.id} className="border-b border-border-soft pb-2">
            <summary data-primary-nav={item.id} className="min-h-11 cursor-pointer py-3 font-semibold text-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta">{item.label}</summary>
            <div className="pl-4">{item.links.map((link) => <Link key={link.href} href={link.href} onClick={closeMenus} aria-current={isActive(link.href) ? 'page' : undefined} className="nav-link nav-link-mobile focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta">{link.label}</Link>)}</div>
          </details> : <Link key={item.href} href={item.href} data-primary-nav={item.label} onClick={closeMenus} aria-current={isActive(item.href) ? 'page' : undefined} className="nav-link nav-link-mobile focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta">{item.label}</Link>)}
          {englishHref ? <div className="mt-2 border-t border-border-soft pt-2 text-sm text-text-secondary"><a href={englishHref} hrefLang="en" lang="en" onClick={closeMenus} className="inline-flex min-h-11 items-center underline underline-offset-4">Read this page in English</a></div> : null}
        </div>
      </div>
    </nav>
  );
}
