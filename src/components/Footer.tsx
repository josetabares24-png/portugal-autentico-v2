import Link from 'next/link';
import { MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">Portugal Autentico</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">Guias premium creadas por portugueses que viven en Lisboa.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/portugalautentico" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><Instagram className="h-5 w-5" /></a>
              <a href="https://facebook.com/portugalautentico" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><Facebook className="h-5 w-5" /></a>
              <a href="https://wa.me/351XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400"><MessageCircle className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Itinerarios</h3>
            <ul className="space-y-3">
              <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="text-sm hover:text-blue-400">Lisboa 1 Dia</Link></li>
              <li><Link href="/itinerarios/lisboa-2-dias-completo" className="text-sm hover:text-blue-400">Lisboa 2 Dias</Link></li>
              <li><Link href="/itinerarios/lisboa-3-dias-premium" className="text-sm hover:text-blue-400">Lisboa 3 Dias</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li><Link href="/servicios/fotografo-personal" className="text-sm hover:text-blue-400">Fotografo Personal</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li><a href="mailto:hola@portugalautentico.com" className="text-sm hover:text-blue-400">hola@portugalautentico.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} Portugal Autentico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
