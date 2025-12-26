import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Estaba en Lisboa - Itinerarios de Lisboa por Locales",
  description: "Descubre Lisboa como un local. Itinerarios, restaurantes secretos y los mejores spots de fotos. Creado por quienes viven aqui.",
};

const Logo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{height: '45px', width: 'auto'}}>
    <text x="0" y="22" fontFamily="Georgia, serif" fontSize="14" fontWeight="400" fontStyle="italic" fill="#9ca3af">estaba en</text>
    <text x="0" y="45" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="#1e3a5f">Lisboa</text>
    <circle cx="108" cy="38" r="5" fill="#E8C547"/>
    <circle cx="108" cy="38" r="8" fill="none" stroke="#E8C547" strokeWidth="1" opacity="0.5"/>
  </svg>
);

const LogoWhite = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{height: '40px', width: 'auto'}}>
    <text x="0" y="22" fontFamily="Georgia, serif" fontSize="14" fontWeight="400" fontStyle="italic" fill="rgba(255,255,255,0.6)">estaba en</text>
    <text x="0" y="45" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="white">Lisboa</text>
    <circle cx="108" cy="38" r="5" fill="#E8C547"/>
    <circle cx="108" cy="38" r="8" fill="none" stroke="#E8C547" strokeWidth="1" opacity="0.5"/>
  </svg>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header */}
        <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
          <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/itinerarios" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Itinerarios</Link>
              <Link href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Blog</Link>
              <Link href="/apps" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Apps</Link>
              <Link href="/itinerarios" className="btn-primary">Ver Packs</Link>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </header>

        {/* Main content with padding for fixed header */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer style={{background: 'var(--color-primary)'}} className="text-white">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Logo y descripcion */}
              <div className="md:col-span-1">
                <LogoWhite className="mb-4" />
                <p className="text-white/70 text-sm leading-relaxed">
                  Lisboa vista por quienes la viven. Itinerarios autenticos, restaurantes locales y experiencias unicas.
                </p>
              </div>
              
              {/* Links rapidos */}
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Explorar</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/itinerarios" className="text-white/70 hover:text-white transition-colors">Itinerarios</Link></li>
                  <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/apps" className="text-white/70 hover:text-white transition-colors">Apps Utiles</Link></li>
                </ul>
              </div>
              
              {/* Packs */}
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Packs</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="text-white/70 hover:text-white transition-colors">Lisboa 1 Dia</Link></li>
                  <li><Link href="/itinerarios/lisboa-2-dias-completo" className="text-white/70 hover:text-white transition-colors">Lisboa 2 Dias</Link></li>
                  <li><Link href="/itinerarios/lisboa-3-dias-premium" className="text-white/70 hover:text-white transition-colors">Lisboa 3 Dias</Link></li>
                </ul>
              </div>
              
              {/* Contacto */}
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Contacto</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://instagram.com/estabaenlisboa" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      @estabaenlisboa
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hola@estabaenlisboa.com" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      hola@estabaenlisboa.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-white/50 text-sm">© 2025 Estaba en Lisboa. Hecho con amor en Lisboa.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

        {/* Main content with padding for fixed header */}
        <div className="pt-16">
          {children}
        </div>

        {/* Footer */}
        <footer style={{background: 'var(--color-primary)'}} className="text-white">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Logo y descripcion */}
              <div className="md:col-span-1">
                <LogoWhite className="mb-4" />
                <p className="text-white/70 text-sm leading-relaxed">
                  Lisboa vista por quienes la viven. Itinerarios autenticos, restaurantes locales y experiencias unicas.
                </p>
              </div>
              
              {/* Links rapidos */}
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Explorar</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/itinerarios" className="text-white/70 hover:text-white transition-colors">Itinerarios</Link></li>
                  <li><Link href="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/apps" className="text-white/70 hover:text-white transition-colors">Apps Utiles</Link></li>
                </ul>
              </div>
              
              {/* Packs */}
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Packs</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="text-white/70 hover:text-white transition-colors">Lisboa 1 Dia</Link></li>
                  <li><Link href="/itinerarios/lisboa-2-dias-completo" className="text-white/70 hover:text-white transition-colors">Lisboa 2 Dias</Link></li>
                  <li><Link href="/itinerarios/lisboa-3-dias-premium" className="text-white/70 hover:text-white transition-colors">Lisboa 3 Dias</Link></li>
                </ul>
              </div>
              
              {/* Contacto */}
              <div>
                <h4 className="font-semibold mb-4 text-white/90">Contacto</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://instagram.com/estabaenlisboa" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      @estabaenlisboa
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hola@estabaenlisboa.com" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      hola@estabaenlisboa.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="pt-8 border-t border-white/10 text-center">
              <p className="text-white/50 text-sm">© 2025 Estaba en Lisboa. Hecho con amor en Lisboa.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
