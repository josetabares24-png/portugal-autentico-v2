import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          {/* Copyright */}
          <div className="flex items-center gap-2">
            <span>© {currentYear} Estaba en Lisboa</span>
          </div>

          {/* Enlaces legales */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/aviso-legal" 
              className="hover:text-gray-900 transition-colors"
            >
              Aviso Legal
            </Link>
            <span className="text-gray-300">·</span>
            <Link 
              href="/politica-privacidad" 
              className="hover:text-gray-900 transition-colors"
            >
              Privacidad
            </Link>
            <span className="text-gray-300">·</span>
            <Link 
              href="/terminos-condiciones" 
              className="hover:text-gray-900 transition-colors"
            >
              Términos
            </Link>
            <span className="text-gray-300">·</span>
            <Link 
              href="/politica-cookies" 
              className="hover:text-gray-900 transition-colors"
            >
              Cookies
            </Link>
            <span className="text-gray-300">·</span>
            <a 
              href="mailto:contacto@estabaenlisboa.com"
              className="hover:text-gray-900 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
