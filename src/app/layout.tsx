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
                <Link href="/comparar" className="px-4 py-2 text-slate-600 hover:text-slate-900 rounded-lg font-medium transition-colors">Comparar</Link>
                <Link href="/blog" className="px-4 py-2 text-slate-600 hover:text-slate-900 rounded-lg font-medium transition-colors">Blog</Link>
                <Link href="/free-tour" className="px-4 py-2 text-slate-600 hover:text-slate-900 rounded-lg font-medium transition-colors">Free Tour</Link>
                
                <div className="relative group ml-2">
                  <button className="px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium flex items-center gap-1">
                    ES
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-t-xl">Espanol</a>
                    <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">English</a>
                    <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Portugues</a>
                    <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-b-xl">Francais</a>
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
                  <Link href="/comparar" className="block px-4 py-3 hover:bg-slate-50 rounded-lg font-medium">Comparar</Link>
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
        
        <a href="https://wa.me/351912345678?text=Hola!%20Tengo%20una%20pregunta" target="_blank" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all z-50">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
        
        <footer style={{background: 'var(--color-primary)'}} className="text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background: 'var(--color-accent)'}}>
                    <span className="text-white font-bold">P</span>
                  </div>
                  <span className="text-xl font-bold">PortugalAutentico</span>
                </div>
                <p className="text-slate-300 text-sm">Itinerarios creados por locales que aman Lisboa.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Packs</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="hover:text-white transition-colors">Lisboa 1 Dia - 5.99 EUR</Link></li>
                  <li><Link href="/itinerarios/lisboa-2-dias-completo" className="hover:text-white transition-colors">Lisboa 2 Dias - 8.99 EUR</Link></li>
                  <li><Link href="/itinerarios/lisboa-3-dias-premium" className="hover:text-white transition-colors">Lisboa 3 Dias - 11.99 EUR</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Recursos</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/free-tour" className="hover:text-white transition-colors">Free Walking Tour</Link></li>
                  <li><Link href="/guia-practica" className="hover:text-white transition-colors">Guia Gratuita</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>hola@portugalautentico.com</li>
                  <li>WhatsApp: +351 912 345 678</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>2025 Portugal Autentico. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                <Link href="/terminos" className="hover:text-white transition-colors">Terminos</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
