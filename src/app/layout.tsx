import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portugal Autentico - Itinerarios de Lisboa por Locales",
  description: "Itinerarios completos de Lisboa creados por portugueses. Restaurantes locales, spots de fotos y tips secretos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'var(--color-primary)'}}>
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold" style={{color: 'var(--color-primary)'}}>Portugal</span>   
                  <span className="text-xl font-bold" style={{color: 'var(--color-accent)'}}>Autentico</span>   
                </div>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                <Link href="/itinerarios" className="px-4 py-2 text-slate-600 hover:text-slate-900 rounded-lg font-medium transition-colors">Itinerarios</Link>
                <Link href="/blog" className="px-4 py-2 text-slate-600 hover:text-slate-900 rounded-lg font-medium transition-colors">Blog</Link>
                <Link href="/free-tour" className="px-4 py-2 text-slate-600 hover:text-slate-900 rounded-lg font-medium transition-colors">Free Tour</Link>

                <div className="relative group ml-2">
                  <button className="px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium flex items-center gap-1">
                    ES
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-t-xl">Español</a>
                    <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">English</a>        
                    <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Português</a>      
                    <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-b-xl">Français</a>
                  </div>
                </div>

                <Link href="/itinerarios" className="ml-3 btn-primary">
                  Ver Packs
                </Link>
              </div>

              <details className="md:hidden relative">
                <summary className="list-none p-2 cursor-pointer">
                  <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <div className="absolute right-0 top-12 w-64 bg-white rounded-xl shadow-xl border p-4 space-y-2">
                  <Link href="/itinerarios" className="block px-4 py-3 hover:bg-slate-50 rounded-lg font-medium">Itinerarios</Link>
                  <Link href="/blog" className="block px-4 py-3 hover:bg-slate-50 rounded-lg font-medium">Blog</Link>
                  <Link href="/free-tour" className="block px-4 py-3 hover:bg-slate-50 rounded-lg font-medium">Free Tour</Link>
                  <div className="pt-2 border-t">
                    <Link href="/itinerarios" className="block px-4 py-3 text-center rounded-lg font-semibold text-white" style={{background: 'var(--color-accent)'}}>Ver Packs</Link>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </nav>

        {children}

        {/* WhatsApp Button */}
        <a href="https://wa.me/351912345678?text=Hola!%20Tengo%20una%20pregunta" target="_blank" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all z-50">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        {/* Footer Minimalista */}
        <footer className="bg-slate-900 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'var(--color-accent)'}}>
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-white font-semibold">PortugalAutentico</span>
              </Link>

              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                <Link href="/itinerarios" className="text-slate-400 hover:text-white transition-colors">Itinerarios</Link>
                <Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link>    
                <Link href="/free-tour" className="text-slate-400 hover:text-white transition-colors">Free Tour</Link>
                <Link href="/privacidad" className="text-slate-400 hover:text-white transition-colors">Privacidad</Link>
                <Link href="/terminos" className="text-slate-400 hover:text-white transition-colors">Terminos</Link>
              </nav>

              <div className="flex items-center gap-4">
                <a href="https://instagram.com/portugalautentico" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pink-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://facebook.com/portugalautentico" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://wa.me/351912345678" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-green-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
              <p>© 2025 Portugal Autentico. Hecho con amor en Lisboa.</p>
              <div className="flex gap-4">
                <Link href="/privacidad" className="hover:text-slate-300 transition-colors">Privacidad</Link>   
                <Link href="/terminos" className="hover:text-slate-300 transition-colors">Terminos</Link>       
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
