import Link from 'next/link';

export default function LisboaPracticaPage() {
  const centrosComerciales = [
    { nombre: 'Centro Colombo', desc: 'El más grande de Portugal con más de 340 tiendas', rating: 4.5, badge: 'Más grande', badgeColor: 'bg-orange-500', imagen: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80' },
    { nombre: 'Vasco da Gama', desc: 'Centro moderno junto al Oceanário en Parque das Nações', rating: 4.4, badge: 'Moderno', badgeColor: 'bg-blue-500', imagen: 'https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?w=800&q=80' },
    { nombre: 'El Corte Inglés', desc: 'Grandes almacenes premium con supermercado gourmet', rating: 4.3, badge: 'Premium', badgeColor: 'bg-purple-500', imagen: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #FF6B35 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-orange-100">
            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-slate-700">GUÍA PRÁCTICA</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={{fontFamily: 'Georgia, serif'}}>
            Info Útil de Lisboa
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Emergencias, transporte, estadios, compras y todo lo que necesitas saber.
          </p>
        </div>
      </section>

      {/* Emergencias */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
              Números de Emergencia
            </h2>
            <p className="text-slate-600">Guárdalos en tu móvil antes de viajar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { numero: '112', nombre: 'Emergencias General', desc: 'Policía, bomberos, ambulancia' },
              { numero: '21 342 1623', nombre: 'Policía Turística', desc: 'Hablan inglés y español' },
              { numero: '21 792 7700', nombre: 'Ambulancia (INEM)', desc: 'Emergencias médicas' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-8 text-center border border-orange-100">
                <p className="text-4xl font-bold text-orange-600 mb-3">{item.numero}</p>
                <p className="font-bold text-slate-900 mb-2">{item.nombre}</p>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aeropuerto */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
              Aeropuerto → Centro
            </h2>
            <p className="text-slate-600">Solo 7 km del centro de Lisboa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { medio: 'Metro', precio: '1.65€', tiempo: '25-30 min', tip: 'Línea Roja. La opción más barata.' },
              { medio: 'Aerobus', precio: '4€', tiempo: '20-35 min', tip: 'Directo con espacio para maletas.' },
              { medio: 'Taxi', precio: '15-20€', tiempo: '15-25 min', tip: 'Precio fijo al centro ~15€.' },
              { medio: 'Uber/Bolt', precio: '10-18€', tiempo: '15-25 min', tip: 'Generalmente más barato que taxi.' },
            ].map((op, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-xl text-slate-900 mb-3">{op.medio}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-orange-600">{op.precio}</span>
                  <span className="text-slate-500 text-sm">{op.tiempo}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{op.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transporte */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
              Transporte Público
            </h2>
            <p className="text-slate-600">Cómo moverse por la ciudad</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 md:p-10 mb-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Tarjeta Viva Viagem</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold mb-2">0.50€</p>
                <p className="text-white/80">Coste tarjeta</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold mb-2">1.65€</p>
                <p className="text-white/80">Viaje sencillo</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold mb-2">6.80€</p>
                <p className="text-white/80">24h ilimitado</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { nombre: 'Metro', info: '4 líneas · 6:30 - 1:00 · Cada 4-7 min', tip: 'La forma más rápida de cruzar la ciudad' },
              { nombre: 'Tranvía', info: 'Líneas 12, 15, 18, 24, 25, 28', tip: 'El 28 es turístico pero muy lleno. Prueba el 12 o 25' },
              { nombre: 'Autobús', info: 'Red extensa · 6:00 - 21:00', tip: 'Útil para zonas sin metro como Belém' },
              { nombre: 'Elevadores', info: 'Bica, Glória, Lavra + Santa Justa', tip: 'Incluidos en la tarjeta 24h' },
            ].map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-2xl p-6 border border-orange-100">
                <h3 className="font-bold text-xl text-slate-900 mb-2">{t.nombre}</h3>
                <p className="text-slate-600 text-sm mb-3">{t.info}</p>
                <p className="text-sm text-orange-600 font-medium">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centros Comerciales */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
              Shopping en Lisboa
            </h2>
            <p className="text-slate-600">Los mejores centros comerciales</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {centrosComerciales.map((cc, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-orange-100 hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cc.imagen}
                    alt={cc.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`${cc.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {cc.badge}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span className="font-bold text-sm">{cc.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{cc.nombre}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">{cc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-3xl p-10 md:p-12 border border-orange-100 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>
              ¿Listo para explorar?
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Descubre nuestros itinerarios con rutas, restaurantes y los mejores spots.
            </p>
            <Link 
              href="/itinerarios" 
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Ver Itinerarios desde 5.99€
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
