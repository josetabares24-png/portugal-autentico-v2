// src/components/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin, ShoppingBag, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Itinerarios', href: '/itinerarios' },
  { 
    name: 'Servicios', 
    href: '/servicios',
    submenu: [
      { name: 'Fotógrafo Personal', href: '/servicios/fotografo-personal', description: 'Sesiones fotográficas profesionales' },
      { name: 'Tours Privados', href: '/servicios/tours-privados', description: 'Experiencias exclusivas personalizadas' },
      { name: 'Transfers', href: '/servicios/transfers', description: 'Traslados aeropuerto y ciudad' },
    ],
  },
  { name: 'Guía Práctica', href: '/guia-practica' },
  { name: 'Blog', href: '/blog' },
  { name: 'Mapa', href: '/mapa' },
  { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { name: 'Guía Gratis', href: '/guia-gratis' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-gradient-to-b from-black/30 to-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <MapPin
              className={cn(
                'h-8 w-8 transition-colors',
                isScrolled ? 'text-primary-600' : 'text-white'
              )}
            />
            <div className="flex flex-col">
              <span
                className={cn(
                  'text-xl font-display font-bold transition-colors',
                  isScrolled ? 'text-gray-900' : 'text-white'
                )}
              >
                Portugal Auténtico
              </span>
              <span
                className={cn(
                  'text-xs font-light transition-colors',
                  isScrolled ? 'text-gray-600' : 'text-white/90'
                )}
              >
                Guías Premium Verificadas
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isActive = pathname === item.href || (hasSubmenu && item.submenu.some(sub => pathname === sub.href));
              
              if (hasSubmenu) {
                return (
                  <div 
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        'text-sm font-medium transition-colors relative group flex items-center gap-1',
                        isActive
                          ? isScrolled
                            ? 'text-primary-600'
                            : 'text-white'
                          : isScrolled
                          ? 'text-gray-700 hover:text-primary-600'
                          : 'text-white/90 hover:text-white'
                      )}
                    >
                      {item.name}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span
                        className={cn(
                          'absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full',
                          isScrolled ? 'bg-primary-600' : 'bg-white'
                        )}
                      />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900">{subItem.name}</div>
                            <div className="text-sm text-gray-600">{subItem.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative group',
                    pathname === item.href
                      ? isScrolled
                        ? 'text-primary-600'
                        : 'text-white'
                      : isScrolled
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {item.name}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full',
                      isScrolled ? 'bg-primary-600' : 'bg-white'
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/mis-guias"
              className={cn(
                'p-2 rounded-full transition-colors',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Mis guías"
            >
              <ShoppingBag className="h-5 w-5" />
            </Link>
            <Link
              href="/mis-guias"
              className={cn(
                'p-2 rounded-full transition-colors',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
              aria-label="Mi cuenta"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-2">
            {navigationItems.map((item) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              const isActive = pathname === item.href || (hasSubmenu && item.submenu?.some(sub => pathname === sub.href));
              
              if (hasSubmenu) {
                const isOpen = openDropdown === item.name;
                
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                      className={cn(
                        'w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors',
                        isActive
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      )}
                    >
                      <span>{item.name}</span>
                      <svg 
                        className={cn(
                          "w-5 h-5 transition-transform",
                          isOpen ? "rotate-180" : ""
                        )} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 rounded-lg text-sm hover:bg-gray-50"
                          >
                            <div className="font-medium text-gray-900">{subItem.name}</div>
                            <div className="text-xs text-gray-600">{subItem.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link
                href="/mis-guias"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="font-medium">Mis Guías</span>
              </Link>
              <Link
                href="/mis-guias"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <User className="h-5 w-5" />
                <span className="font-medium">Mi Cuenta</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
