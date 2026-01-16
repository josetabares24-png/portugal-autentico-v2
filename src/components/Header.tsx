'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { UserButton, SignInButton, useUser } from '@clerk/nextjs';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useUser();

  const navLinks = [
    { href: '/itinerarios', label: 'Guías' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/info-util', label: 'Info Útil' }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo Original SVG */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/logo.svg"
              alt="Estaba en Lisboa"
              width={180}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-slate-700 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* User Actions */}
            {isLoaded && (
              <div className="flex items-center gap-4">
                {isSignedIn ? (
                  <>
                    <Link
                      href="/mis-guias"
                      className="text-slate-700 hover:text-primary font-medium transition-colors"
                    >
                      Mis Guías
                    </Link>
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10 rounded-full border-2 border-primary hover:border-primary-dark transition-colors"
                        }
                      }}
                    />
                  </>
                ) : (
                  <SignInButton mode="modal">
                    <button className="flex items-center gap-2 text-slate-700 hover:text-primary font-medium transition-colors">
                      <span className="material-symbols-outlined">person</span>
                      <span>Iniciar Sesión</span>
                    </button>
                  </SignInButton>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-900"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium text-lg py-2 transition-colors ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-slate-700 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile User Actions */}
              {isLoaded && (
                <div className="border-t border-slate-200 pt-4 mt-2 flex flex-col gap-4">
                  {isSignedIn ? (
                    <>
                      <Link
                        href="/mis-guias"
                        onClick={() => setIsOpen(false)}
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
                      <button className="text-slate-700 hover:text-primary font-medium text-lg py-2 text-left transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined">person</span>
                        <span>Iniciar Sesión</span>
                      </button>
                    </SignInButton>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
