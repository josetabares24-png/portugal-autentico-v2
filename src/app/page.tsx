import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3}}></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm">+1,847 viajeros este mes</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Vive Lisboa como<br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">un verdadero local</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Itinerarios creados por portugueses. Rutas secretas, horarios sin colas, restaurantes autenticos. Todo en tu movil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/itinerarios" className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all hover:-translate-y-1">
              Ver Itinerarios
            </Link>
            <Link href="/guia-practica" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Guia Gratuita
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">‚òÖ‚òÖ‚òÖ‚òÖ‚òÖ</span>
              <span>4.9/5 (847 resenas)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">‚úì</span>
              <span>Garantia 14 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">‚ö°</span>
              <span>Acceso inmediato</span>
            </div>
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
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800&q=80")'}}></div>
              <div className="p-6">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">ESENCIAL</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">Lisboa 1 Dia</h3>
                <p className="text-slate-600 mb-4">Lo mejor de Lisboa en un dia perfecto. Alfama, Baixa, miradores iconicos.</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">27</span>
                    <span className="text-slate-500 ml-1">EUR</span>
                  </div>
                  <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800">
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-amber-400 scale-105">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-b-full">MAS VENDIDO</div>
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1580323956656-26bbb7206583?w=800&q=80")'}}></div>
              <div className="p-6">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">COMPLETO</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">Lisboa 2 Dias</h3>
                <p className="text-slate-600 mb-4">Experiencia completa. Belem, LX Factory, vida nocturna y secretos locales.</p>
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

            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800&q=80")'}}></div>
              <div className="p-6">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">PREMIUM</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">Lisboa 3 Dias</h3>
                <p className="text-slate-600 mb-4">Lisboa + Sintra + Cascais. La experiencia completa de la region.</p>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-900">47</span>
                    <span className="text-slate-500 ml-1">EUR</span>
                  </div>
                  <Link href="/itinerarios/lisboa-3-dias-premium" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800">
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
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Estas son las apps que usamos los locales. Te explicamos como configurarlas en tu guia.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Carris Metropolitana</h3>
              <p className="text-slate-600 text-sm">Bus y tranvias. Rutas y horarios en tiempo real.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Metro Lisboa</h3>
              <p className="text-slate-600 text-sm">Metro oficial. Mapa y alertas de servicio.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">U</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Uber / Bolt</h3>
              <p className="text-slate-600 text-sm">Para distancias largas. Bolt suele ser mas barato.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Gira</h3>
              <p className="text-slate-600 text-sm">Bicicletas publicas. Ideal para la zona del rio.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Seguridad</span>
            <h2 className="text-4xl font-bold mt-4 text-slate-900">Lisboa es muy segura, pero...</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Como en toda ciudad turistica, hay zonas donde debes tener mas cuidado. Te lo explicamos todo.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 border border-green-200 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">‚úì</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Zonas muy seguras</h3>
              <ul className="text-slate-600 space-y-2">
                <li>‚Ä¢ Belem (turistico y tranquilo)</li>
                <li>‚Ä¢ Parque das Nacoes (moderno)</li>
                <li>‚Ä¢ Principe Real (bohemio)</li>
                <li>‚Ä¢ Chiado (comercial)</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">!</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Atencion normal</h3>
              <ul className="text-slate-600 space-y-2">
                <li>‚Ä¢ Baixa (carteristas en hora punta)</li>
                <li>‚Ä¢ Alfama de noche (calles oscuras)</li>
                <li>‚Ä¢ Tranvia 28 (lleno de turistas)</li>
                <li>‚Ä¢ Rossio (mucha gente)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">‚úó</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Evitar de noche</h3>
              <ul className="text-slate-600 space-y-2">
                <li>‚Ä¢ Martim Moniz (despues de las 22h)</li>
                <li>‚Ä¢ Intendente (algunas calles)</li>
                <li>‚Ä¢ Cais do Sodre (madrugada)</li>
                <li>‚Ä¢ Graca sola (calles aisladas)</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-2xl">
            <p className="text-blue-900 text-center">
              <strong>Tip de seguridad:</strong> En Lisboa casi nunca pasa nada grave. El mayor riesgo son los carteristas en zonas turisticas. Usa rinonera frontal y listo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Datos utiles</span>
            <h2 className="text-4xl font-bold mt-4">Lo que necesitas saber</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">Ì∑µÌ∑π</div>
              <h3 className="font-bold mb-2">Idioma</h3>
              <p className="text-slate-400 text-sm">Portugues. Casi todos hablan ingles y muchos espanol.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">Ì≤∂</div>
              <h3 className="font-bold mb-2">Moneda</h3>
              <p className="text-slate-400 text-sm">Euro. Tarjetas aceptadas en casi todos lados.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">Ì¥å</div>
              <h3 className="font-bold mb-2">Enchufes</h3>
              <p className="text-slate-400 text-sm">Tipo F (europeo). 220V como Espana.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">Ì≥±</div>
              <h3 className="font-bold mb-2">Internet</h3>
              <p className="text-slate-400 text-sm">WiFi gratis en muchos sitios. Roaming EU incluido.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">Ì∫∞</div>
              <h3 className="font-bold mb-2">Agua</h3>
              <p className="text-slate-400 text-sm">Del grifo es potable y buena. Ahorra en botellas.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">Ì≤ä</div>
              <h3 className="font-bold mb-2">Farmacias</h3>
              <p className="text-slate-400 text-sm">Muchas y bien surtidas. Busca la cruz verde.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">Ì∫®</div>
              <h3 className="font-bold mb-2">Emergencias</h3>
              <p className="text-slate-400 text-sm">112 (europeo). Policia turistica existe.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">‚è∞</div>
              <h3 className="font-bold mb-2">Horario</h3>
              <p className="text-slate-400 text-sm">Mismo que UK. 1 hora menos que Espana.</p>
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
              <div className="flex gap-1 mb-4 text-amber-400">‚òÖ‚òÖ‚òÖ‚òÖ‚òÖ</div>
              <p className="text-slate-700 mb-6">"El restaurante de Alfama que nos recomendaron fue increible. Comimos bacalao como nunca. La guia vale oro."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-900">Maria Garcia</p>
                  <p className="text-sm text-slate-500">Madrid, Espana</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4 text-amber-400">‚òÖ‚òÖ‚òÖ‚òÖ‚òÖ</div>
              <p className="text-slate-700 mb-6">"Gracias al tip del tranvia 28 lo cogimos sin cola. Sintra fue magico siguiendo el itinerario. 100% recomendado."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-slate-900">Carlos Rodriguez</p>
                  <p className="text-sm text-slate-500">Ciudad de Mexico</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex gap-1 mb-4 text-amber-400">‚òÖ‚òÖ‚òÖ‚òÖ‚òÖ</div>
              <p className="text-slate-700 mb-6">"Los mapas offline nos salvaron cuando nos quedamos sin datos. Todo muy bien organizado. Volveria a comprarlo."</p>
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

      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2}}></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Empieza tu aventura hoy</h2>
          <p className="text-xl text-slate-300 mb-8">Acceso inmediato. Garantia de 14 dias. Sin riesgos.</p>
          <Link href="/itinerarios" className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all hover:-translate-y-1">
            Ver Itinerarios desde 27 EUR
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">‚úì</span>
                </div>
                <span className="text-xl font-bold">PortugalAutentico</span>
              </div>
              <p className="text-slate-400">Guias de viaje creadas por locales que aman Lisboa.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Itinerarios</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="hover:text-white">Lisboa 1 Dia</Link></li>
                <li><Link href="/itinerarios/lisboa-2-dias-completo" className="hover:text-white">Lisboa 2 Dias</Link></li>
                <li><Link href="/itinerarios/lisboa-3-dias-premium" className="hover:text-white">Lisboa 3 Dias</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/guia-practica" className="hover:text-white">Guia Gratuita</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <p className="text-slate-400">hola@portugalautentico.com</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>2025 Portugal Autentico. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
