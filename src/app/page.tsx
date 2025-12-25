import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm">+1,847 viajeros este mes</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Vive Lisboa como<br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">un verdadero local</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
            Itinerarios creados por portugueses. Rutas secretas, horarios sin colas, restaurantes autenticos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/itinerarios" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all">
              Ver Itinerarios
            </Link>
            <Link href="/guia-practica" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20">
              Guia Gratuita
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Nuestros itinerarios</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-slate-900">Elige tu experiencia perfecta</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800)'}}></div>
              <div className="p-6">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">ESENCIAL</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">Lisboa 1 Dia</h3>
                <p className="text-slate-600 mb-4">Lo mejor de Lisboa en un dia perfecto.</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">27</span>
                    <span className="text-slate-500 ml-1">EUR</span>
                  </div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-amber-400 scale-105">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-2 text-sm font-bold">MAS VENDIDO</div>
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1580323956656-26bbb7206583?w=800)'}}></div>
              <div className="p-6">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">COMPLETO</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">Lisboa 2 Dias</h3>
                <p className="text-slate-600 mb-4">Experiencia completa con Belem y vida nocturna.</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">37</span>
                    <span className="text-slate-500 ml-1">EUR</span>
                  </div>
                  <Link href="/itinerarios/lisboa-2-dias-completo" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800)'}}></div>
              <div className="p-6">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">PREMIUM</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">Lisboa 3 Dias</h3>
                <p className="text-slate-600 mb-4">Lisboa + Sintra + Cascais completo.</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">47</span>
                    <span className="text-slate-500 ml-1">EUR</span>
                  </div>
                  <Link href="/itinerarios/lisboa-3-dias-premium" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Apps esenciales</span>
            <h2 className="text-4xl font-bold mt-4 text-slate-900">Tu kit digital para Lisboa</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Carris</h3>
              <p className="text-slate-600 text-sm">Bus y tranvias en tiempo real.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Metro Lisboa</h3>
              <p className="text-slate-600 text-sm">Mapa y alertas de servicio.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bolt</h3>
              <p className="text-slate-600 text-sm">Mas barato que Uber en Lisboa.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Gira</h3>
              <p className="text-slate-600 text-sm">Bicicletas publicas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Seguridad</span>
            <h2 className="text-4xl font-bold mt-4 text-slate-900">Lisboa es muy segura</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Zonas muy seguras</h3>
              <ul className="text-slate-600 space-y-2">
                <li>Belem - turistico y tranquilo</li>
                <li>Parque das Nacoes - moderno</li>
                <li>Principe Real - bohemio</li>
                <li>Chiado - comercial</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Atencion normal</h3>
              <ul className="text-slate-600 space-y-2">
                <li>Baixa - carteristas en hora punta</li>
                <li>Alfama de noche - calles oscuras</li>
                <li>Tranvia 28 - lleno de turistas</li>
                <li>Rossio - mucha gente</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Evitar de noche</h3>
              <ul className="text-slate-600 space-y-2">
                <li>Martim Moniz - despues de las 22h</li>
                <li>Intendente - algunas calles</li>
                <li>Cais do Sodre - madrugada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Datos utiles</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="font-bold mb-2">Idioma</h3>
              <p className="text-slate-400 text-sm">Portugues. Muchos hablan espanol.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Moneda</h3>
              <p className="text-slate-400 text-sm">Euro. Tarjetas aceptadas.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Enchufes</h3>
              <p className="text-slate-400 text-sm">Tipo F europeo. 220V.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Emergencias</h3>
              <p className="text-slate-400 text-sm">112 - numero europeo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">Lo que dicen nuestros viajeros</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <p className="text-slate-700 mb-6">"El restaurante de Alfama que nos recomendaron fue increible. La guia vale oro."</p>
              <p className="font-semibold text-slate-900">Maria Garcia - Madrid</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <p className="text-slate-700 mb-6">"Gracias al tip del tranvia 28 lo cogimos sin cola. Sintra fue magico."</p>
              <p className="font-semibold text-slate-900">Carlos Rodriguez - Mexico</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <p className="text-slate-700 mb-6">"Los mapas offline nos salvaron. Todo muy bien organizado."</p>
              <p className="font-semibold text-slate-900">Ana Lopez - Buenos Aires</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Empieza tu aventura hoy</h2>
          <p className="text-xl text-slate-300 mb-8">Acceso inmediato. Garantia de 14 dias.</p>
          <Link href="/itinerarios" className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl">
            Ver Itinerarios desde 27 EUR
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <span className="text-xl font-bold">Portugal Autentico</span>
              <p className="text-slate-400 mt-2">Guias creadas por locales.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Itinerarios</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial">Lisboa 1 Dia</Link></li>
                <li><Link href="/itinerarios/lisboa-2-dias-completo">Lisboa 2 Dias</Link></li>
                <li><Link href="/itinerarios/lisboa-3-dias-premium">Lisboa 3 Dias</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/guia-practica">Guia Gratuita</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-slate-400">hola@portugalautentico.com</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>2025 Portugal Autentico</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
