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
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800)'}}></div>
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

      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Apps esenciales</span>
            <h2 className="text-4xl font-bold mt-4">Tu kit digital para Lisboa</h2>
            <p className="text-slate-300 mt-4 max-w-2xl mx-auto">Las apps que usamos los locales. Te explicamos como usarlas en la guia.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Carris Metropolitana</h3>
              <p className="text-slate-300 text-sm mb-3">Bus y tranvias en tiempo real. Rutas y horarios.</p>
              <span className="text-xs text-amber-400 font-semibold">GRATIS</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Metro Lisboa</h3>
              <p className="text-slate-300 text-sm mb-3">App oficial del metro. Mapa y alertas de servicio.</p>
              <span className="text-xs text-amber-400 font-semibold">GRATIS</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Bolt</h3>
              <p className="text-slate-300 text-sm mb-3">Mas barato que Uber en Lisboa. Para distancias largas.</p>
              <span className="text-xs text-amber-400 font-semibold">RECOMENDADA</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Gira</h3>
              <p className="text-slate-300 text-sm mb-3">Bicicletas publicas. Ideal para zona del rio.</p>
              <span className="text-xs text-amber-400 font-semibold">GRATIS 45 MIN</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Informacion util</span>
            <h2 className="text-4xl font-bold mt-4 text-slate-900">Todo lo que necesitas saber</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl">PT</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Idioma</h3>
              <p className="text-slate-600 text-sm">Portugues. Muchos hablan espanol e ingles.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">EU</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Moneda</h3>
              <p className="text-slate-600 text-sm">Euro. Tarjetas aceptadas en casi todos lados.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 text-xl">220</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Enchufes</h3>
              <p className="text-slate-600 text-sm">Tipo F europeo. 220V igual que Espana.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 text-xl">112</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Emergencias</h3>
              <p className="text-slate-600 text-sm">112 numero europeo. Policia turistica existe.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-600 text-xl">H2O</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Agua</h3>
              <p className="text-slate-600 text-sm">Del grifo es potable y buena. Ahorra en botellas.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-xl">-1h</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Horario</h3>
              <p className="text-slate-600 text-sm">1 hora menos que Espana. Mismo que UK.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 text-xl">Rx</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Farmacias</h3>
              <p className="text-slate-600 text-sm">Muchas y bien surtidas. Busca la cruz verde.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 text-xl">WiFi</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Internet</h3>
              <p className="text-slate-600 text-sm">WiFi gratis en muchos sitios. Roaming EU ok.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Testimonios</span>
            <h2 className="text-4xl font-bold mt-4 text-slate-900">Lo que dicen nuestros viajeros</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4 text-amber-400 text-lg">*****</div>
              <p className="text-slate-700 mb-6">"El restaurante de Alfama que nos recomendaron fue increible. La guia vale oro."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-900">Maria Garcia</p>
                  <p className="text-sm text-slate-500">Madrid, Espana</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4 text-amber-400 text-lg">*****</div>
              <p className="text-slate-700 mb-6">"Gracias al tip del tranvia 28 lo cogimos sin cola. Sintra fue magico."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-900">Carlos Rodriguez</p>
                  <p className="text-sm text-slate-500">Ciudad de Mexico</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4 text-amber-400 text-lg">*****</div>
              <p className="text-slate-700 mb-6">"Los mapas offline nos salvaron. Todo muy bien organizado."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-900">Ana Lopez</p>
                  <p className="text-sm text-slate-500">Buenos Aires</p>
                </div>
              </div>
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
