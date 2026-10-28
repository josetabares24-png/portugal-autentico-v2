'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';
import { englishCounterpart } from '@/lib/language-alternates';

const navLinks = [
  { href: '/blog', label: 'Guías' },
  { href: '/comprar-entradas', label: 'Entradas' },
  { href: '/free-tours-lisboa', label: 'Free tours' },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const publicPathname = pathname.replace(/^\/es(?=\/|$)/, '') || '/';
  const englishHref = englishCounterpart(publicPathname);
  const isActive = (href: string) =>
    publicPathname === href || publicPathname.startsWith(`${href}/`);

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <nav
      aria-label="Navegación principal"
      className="sticky top-0 z-50 border-b border-night/10 bg-cream/95 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            onClick={closeMenu}
            className="shrink-0 rounded-sm transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta"
          >
            <Image
              src="/logo.png"
              alt="Estaba en Lisboa"
              width={160}
              height={48}
              priority
              className="h-11 w-auto md:h-12"
            />
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className="relative inline-flex min-h-11 items-center font-body text-sm font-semibold text-night transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta aria-[current=page]:text-terracotta"
              >
                {link.label}
                {isActive(link.href) ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 h-px bg-terracotta"
                  />
                ) : null}
              </Link>
            ))}

            {englishHref ? (
              <a
                href={englishHref}
                hrefLang="en"
                lang="en"
                className="inline-flex min-h-11 items-center border-l border-night/10 pl-5 font-body text-xs font-semibold text-text-secondary transition-colors hover:text-night"
                aria-label="Read this page in English"
              >
                EN
              </a>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-night hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta md:hidden"
            aria-label={mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-controls="main-mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={27} aria-hidden="true" />
          </button>
        </div>

        <div
          id="main-mobile-menu"
          hidden={!mobileMenuOpen}
          className="border-t border-night/10 py-2 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className="flex min-h-12 items-center justify-between border-b border-night/10 py-3 font-body text-base font-semibold text-night last:border-b-0 aria-[current=page]:text-terracotta"
            >
              {link.label}
              <span aria-hidden="true" className="text-terracotta">↗</span>
            </Link>
          ))}

          {englishHref ? (
            <a
              href={englishHref}
              hrefLang="en"
              lang="en"
              onClick={closeMenu}
              className="mt-2 inline-flex min-h-11 items-center font-body text-sm text-text-secondary underline underline-offset-4"
            >
              Read this page in English
            </a>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
