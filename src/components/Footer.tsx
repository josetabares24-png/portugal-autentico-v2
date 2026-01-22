import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Estaba en Lisboa"
                width={140}
                height={44}
                className="h-11 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-4">
              Guías de Lisboa creadas por un local. Rutas probadas, restaurantes auténticos y consejos que no encontrarás en ningún otro sitio.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/estabaenlisboa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-bold text-white mb-4">Guías</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="text-slate-400 hover:text-primary transition-colors">Lisboa 1 Día</Link></li>
              <li><Link href="/itinerarios/lisboa-2-dias-completo" className="text-slate-400 hover:text-primary transition-colors">Lisboa 2 Días</Link></li>
              <li><Link href="/itinerarios/lisboa-3-dias-premium" className="text-slate-400 hover:text-primary transition-colors">Lisboa 3 Días</Link></li>
              <li><Link href="/itinerarios" className="text-slate-400 hover:text-primary transition-colors">Ver todas →</Link></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-bold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-slate-400 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/presupuesto" className="text-slate-400 hover:text-primary transition-colors">Calculadora</Link></li>
              <li><Link href="/quiz" className="text-slate-400 hover:text-primary transition-colors">Quiz Viajero</Link></li>
              <li><Link href="/contacto" className="text-slate-400 hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            {/* Copyright */}
            <div className="flex items-center gap-2">
              <span>© {currentYear} Estaba en Lisboa. Todos los derechos reservados.</span>
            </div>

          {/* Enlaces legales */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/aviso-legal" className="hover:text-slate-300 transition-colors">Aviso Legal</Link>
            <span className="text-slate-700">·</span>
            <Link href="/politica-privacidad" className="hover:text-slate-300 transition-colors">Privacidad</Link>
            <span className="text-slate-700">·</span>
            <Link href="/terminos-condiciones" className="hover:text-slate-300 transition-colors">Términos</Link>
            <span className="text-slate-700">·</span>
            <Link href="/politica-cookies" className="hover:text-slate-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
