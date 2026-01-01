import Link from 'next/link';
import Image from 'next/image';

export default function LisboaPracticaPage() {
  const centrosComerciales = [
    { nombre: 'Centro Colombo', desc: 'El más grande de Portugal con más de 340 tiendas', rating: 4.5, badge: 'Más grande', badgeColor: 'bg-primary', imagen: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80' },
    { nombre: 'Vasco da Gama', desc: 'Centro moderno junto al Oceanário en Parque das Nações', rating: 4.4, badge: 'Moderno', badgeColor: 'bg-blue-600', imagen: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800&q=80' },
    { nombre: 'El Corte Inglés', desc: 'Grandes almacenes premium con supermercado gourmet', rating: 4.3, badge: 'Premium', badgeColor: 'bg-purple-600', imagen: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' },
  ];

  return (
    <main className="bg-background-light">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
            alt="Lisboa Info Útil"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-yellow-400">info</span>
            <span className="text-sm font-bold tracking-wide">GUÍA PRÁCTICA COMPLETA</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Info Útil de <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Lisboa</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">
            Emergencias, transporte, estadios, compras y todo lo que necesitas saber antes de viajar.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Emergencias */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Números importantes
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Emergencias
            </h2>
            <p className="text-xl text-slate-600">Guárdalos en tu móvil antes de viajar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { numero: '112', nombre: 'Emergencias General', desc: 'Policía, bomberos, ambulancia', icon: 'emergency' },
              { numero: '21 342 1623', nombre: 'Policía Turística', desc: 'Hablan inglés y español', icon: 'shield' },
              { numero: '21 792 7700', nombre: 'Ambulancia (INEM)', desc: 'Emergencias médicas', icon: 'local_hospital' },
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-primary rounded-3xl p-8 text-center hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-red-600 text-3xl">{item.icon}</span>
                </div>
                <p className="text-5xl font-black text-primary mb-3">{item.numero}</p>
                <p className="font-bold text-slate-900 text-lg mb-2">{item.nombre}</p>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aeropuerto */}
      <section className="py-24 bg-background-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="relative w-32 h-32 mx-auto mb-8 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80"
                alt="Aeropuerto"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
              Aeropuerto → Centro
            </h2>
            <p className="text-xl text-slate-600">Solo 7 km del centro de Lisboa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { medio: 'Metro', precio: '1.65€', tiempo: '25-30 min', tip: 'Línea Roja. La opción más barata.', icon: 'subway' },
              { medio: 'Aerobus', precio: '4€', tiempo: '20-35 min', tip: 'Directo con espacio para maletas.', icon: 'airport_shuttle' },
              { medio: 'Taxi', precio: '15-20€', tiempo: '15-25 min', tip: 'Precio fijo al centro ~15€.', icon: 'local_taxi' },
              { medio: 'Uber/Bolt', precio: '10-18€', tiempo: '15-25 min', tip: 'Generalmente más barato que taxi.', icon: 'directions_car' },
            ].map((op, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl">{op.icon}</span>
                </div>
                <h3 className="font-black text-2xl text-slate-900 mb-3">{op.medio}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black text-primary">{op.precio}</span>
                  <span className="text-slate-500">{op.tiempo}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{op.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transporte */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="relative w-32 h-32 mx-auto mb-8 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80"
                alt="Transporte"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
              Transporte Público
            </h2>
            <p className="text-xl text-slate-600">Cómo moverse por la ciudad</p>
          </div>

          <div className="bg-gradient-to-br from-primary to-orange-500 rounded-3xl p-12 mb-12 text-white shadow-2xl">
            <h3 className="text-3xl font-black mb-8 text-center">Tarjeta Viva Viagem</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
                <p className="text-5xl font-black mb-3">0.50€</p>
                <p className="text-white/80 text-lg">Coste tarjeta</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
                <p className="text-5xl font-black mb-3">1.65€</p>
                <p className="text-white/80 text-lg">Viaje sencillo</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
                <p className="text-5xl font-black mb-3">6.80€</p>
                <p className="text-white/80 text-lg">24h ilimitado</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { nombre: 'Metro', info: '4 líneas · 6:30 - 1:00 · Cada 4-7 min', tip: 'La forma más rápida de cruzar la ciudad', icon: 'subway' },
              { nombre: 'Tranvía', info: 'Líneas 12, 15, 18, 24, 25, 28', tip: 'El 28 es turístico pero muy lleno. Prueba el 12 o 25', icon: 'tram' },
              { nombre: 'Autobús', info: 'Red extensa · 6:00 - 21:00', tip: 'Útil para zonas sin metro como Belém', icon: 'directions_bus' },
              { nombre: 'Elevadores', info: 'Bica, Glória, Lavra + Santa Justa', tip: 'Incluidos en la tarjeta 24h', icon: 'elevator' },
            ].map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-orange-50 rounded-3xl p-8 border border-orange-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{t.icon}</span>
                </div>
                <h3 className="font-black text-2xl text-slate-900 mb-3">{t.nombre}</h3>
                <p className="text-slate-600 mb-4">{t.info}</p>
                <p className="text-sm text-primary font-bold">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centros Comerciales */}
      <section className="py-24 bg-background-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              Shopping
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Centros Comerciales
            </h2>
            <p className="text-xl text-slate-600">Los mejores lugares para ir de compras</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {centrosComerciales.map((cc, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={cc.imagen}
                    alt={cc.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <div className="absolute top-6 left-6">
                    <span className={`${cc.badgeColor} text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl`}>
                      {cc.badge}
                    </span>
                  </div>

                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur px-3 py-2 rounded-xl flex items-center gap-1 shadow-xl">
                    <span className="material-symbols-outlined text-yellow-400 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold">{cc.rating}</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl font-bold">{cc.nombre}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-slate-600 leading-relaxed">{cc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Listo para <span className="text-yellow-300">explorar</span>?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestros itinerarios con rutas, restaurantes y los mejores spots de Lisboa.
          </p>
          <Link 
            href="/itinerarios" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">map</span>
            Ver Itinerarios desde 5.99€
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <p className="text-white/80 text-sm mt-6">✅ Descarga inmediata · ✅ Garantía 14 días</p>
        </div>
      </section>
    </main>
  );
}
