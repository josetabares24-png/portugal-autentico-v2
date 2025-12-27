"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-sm italic text-slate-400">estaba en</span>
          <span className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Lisboa</span>
          <span className="w-2 h-2 rounded-full ml-1" style={{background: '#E8C547'}}></span>
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/itinerarios" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Itinerarios</Link>
          <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Blog</Link>
          <Link href="/free-tour" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Free Tours</Link>
          <Link href="/apps" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Apps</Link>
          <Link href="/itinerarios" className="btn-primary">Ver Packs</Link>
        </div>

        {/* Mobile menu button - Animated hamburger */}
        <button 
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span 
            className={`block h-0.5 w-6 bg-slate-600 rounded-full transition-all duration-300 ease-out ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`block h-0.5 w-6 bg-slate-600 rounded-full transition-all duration-300 ease-out ${
              isOpen ? 'opacity-0 scale-0' : ''
            }`}
          />
          <span 
            className={`block h-0.5 w-6 bg-slate-600 rounded-full transition-all duration-300 ease-out ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu with slide animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-slate-100 shadow-lg">
          <div className="flex flex-col p-4 space-y-1">
            <Link 
              href="/itinerarios" 
              className="text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-all duration-200" 
              onClick={() => setIsOpen(false)}
            >
              Itinerarios
            </Link>
            <Link 
              href="/blog" 
              className="text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-all duration-200" 
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/free-tour" 
              className="text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-all duration-200" 
              onClick={() => setIsOpen(false)}
            >
              Free Tours
            </Link>
            <Link 
              href="/apps" 
              className="text-slate-700 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-slate-50 transition-all duration-200" 
              onClick={() => setIsOpen(false)}
            >
              Apps
            </Link>
            <div className="pt-2">
              <Link 
                href="/itinerarios" 
                className="btn-primary block text-center" 
                onClick={() => setIsOpen(false)}
              >
                Ver Packs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
