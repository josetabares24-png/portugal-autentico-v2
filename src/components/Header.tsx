'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { UserButton, SignInButton, useUser } from '@clerk/nextjs';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn, isLoaded } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Original */}
          <Link href="/" className="flex items-center">
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
            <Link href="/itinerarios" className="text-slate-700 hover:text-primary font-medium transition-colors">
              Itinerarios
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-primary font-medium transition-colors">
              Blog
            </Link>
            <Link href="/free-tours" className="text-slate-700 hover:text-primary font-medium transition-colors">
              Free Tours
            </Link>
            <Link href="/apps" className="text-slate-700 hover:text-primary font-medium transition-colors">
              Apps
            </Link>
            <Link href="/info-util" className="text-slate-700 hover:text-primary font-medium transition-colors">
              Info Útil
            </Link>

            {/* User Button or Sign In */}
            {isLoaded && (
              <div className="flex items-center gap-4">
                {isSignedIn ? (
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 rounded-full border-2 border-primary hover:border-primary-dark transition-colors"
                      }
                    }}
                  />
                ) : (
                  <SignInButton mode="modal">
                    <button className="flex items-center gap-2 text-slate-700 hover:text-primary font-medium transition-colors">
                      <span className="material-symbols-outlined">person</span>
                      <span>Iniciar Sesión</span>
                    </button>
                  </SignInButton>
                )}
                
                <Link 
                  href="/pack-completo" 
                  className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-2 px-6 rounded-full transition-all hover:scale-105"
                >
                  Ver Packs
                </Link>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/itinerarios" 
                className="text-slate-700 hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Itinerarios
              </Link>
              <Link 
                href="/blog" 
                className="text-slate-700 hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/free-tours" 
                className="text-slate-700 hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Free Tours
              </Link>
              <Link 
                href="/apps" 
                className="text-slate-700 hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Apps
              </Link>
              <Link 
                href="/info-util" 
                className="text-slate-700 hover:text-primary font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Info Útil
              </Link>

              {/* Mobile User Button */}
              {isLoaded && (
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  {isSignedIn ? (
                    <div className="flex items-center gap-3">
                      <UserButton 
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            avatarBox: "w-10 h-10"
                          }
                        }}
                      />
                      <span className="text-sm text-slate-600">Mi Cuenta</span>
                    </div>
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

              <Link 
                href="/pack-completo" 
                className="bg-gradient-to-r from-primary to-orange-500 text-white font-bold py-3 px-6 rounded-full text-center transition-all hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                Ver Packs
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
