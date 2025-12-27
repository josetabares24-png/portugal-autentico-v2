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

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="flex flex-col p-4 space-y-3">
            <Link href="/itinerarios" className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50" onClick={() => setIsOpen(false)}>
              Itinerarios
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/free-tour" className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50" onClick={() => setIsOpen(false)}>
              Free Tours
            </Link>
            <Link href="/apps" className="text-slate-700 hover:text-slate-900 font-medium py-2 px-3 rounded-lg hover:bg-slate-50" onClick={() => setIsOpen(false)}>
              Apps
            </Link>
            <Link href="/itinerarios" className="btn-primary text-center mt-2" onClick={() => setIsOpen(false)}>
              Ver Packs
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
