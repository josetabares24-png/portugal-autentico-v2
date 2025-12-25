import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-6">
            +1,500 viajeros felices
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Descubre Lisboa como un local
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Guias premium creadas por portugueses. Evita colas, encuentra tesoros escondidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/itinerarios" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100">
              Ver Itinerarios
            </Link>
            <Link href="/guia-practica" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10">
              Guia Gratis
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">4.9/5 - 430 resenas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Pago 100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Garantia 14 dias</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Elige tu aventura</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Cada itinerario incluye rutas optimizadas, horarios exactos y restaurantes locales
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">1</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Lisboa 1 Dia</h3>
                <p className="text-gray-600 mb-4">Lo esencial: Alfama, Baixa y los mejores miradores</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold text-blue-600">27 EUR</p>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl border-2 border-blue-500 relative">
              <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                MAS VENDIDO
              </div>
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-6xl">2</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Lisboa 2 Dias</h3>
                <p className="text-gray-600 mb-4">La experiencia completa con Belem y LX Factory</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold text-blue-600">37 EUR</p>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">3</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Lisboa 3 Dias</h3>
                <p className="text-gray-600 mb-4">Lisboa + Sintra y Cascais como un local</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold text-blue-600">47 EUR</p>
                  <Link href="/itinerarios/lisboa-3-dias-premium" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                    Ver mas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Por que Portugal Autentico</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Creado por locales</h3>
              <p className="text-gray-600">Somos portugueses viviendo en Lisboa. Conocemos cada rincon.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Ahorra tiempo</h3>
              <p className="text-gray-600">Rutas optimizadas para evitar colas y aprovechar cada minuto.</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Come como local</h3>
              <p className="text-gray-600">Restaurantes donde comemos nosotros. Nada de trampas turisticas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Lo que dicen nuestros viajeros</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">"Increible! Descubrimos lugares que jamas habriamos encontrado solos."</p>
              <p className="font-bold text-gray-800">Maria G. - Madrid</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">"La guia de 3 dias es perfecta. Sintra fue magico."</p>
              <p className="font-bold text-gray-800">Carlos R. - Mexico</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">"Vale cada centimo. Los mapas offline fueron super utiles."</p>
              <p className="font-bold text-gray-800">Ana L. - Argentina</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Listo para descubrir Lisboa?</h2>
          <p className="text-xl mb-8 opacity-90">Unete a +1,500 viajeros que ya viven la experiencia autentica</p>
          <Link href="/itinerarios" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100">
            Ver Itinerarios
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Portugal Autentico</h3>
              <p className="text-gray-400">Guias de viaje creadas por locales en Lisboa</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Itinerarios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="hover:text-white">Lisboa 1 Dia</Link></li>
                <li><Link href="/itinerarios/lisboa-2-dias-completo" className="hover:text-white">Lisboa 2 Dias</Link></li>
                <li><Link href="/itinerarios/lisboa-3-dias-premium" className="hover:text-white">Lisboa 3 Dias</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/guia-practica" className="hover:text-white">Guia Gratis</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-gray-400">hola@portugalautentico.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>2025 Portugal Autentico. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
