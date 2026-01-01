"use client";

import Link from 'next/link';

export default function AppsPage() {
  const categories = [
    {
      titulo: "Transporte",
      descripcion: "Muévete por Lisboa como un local",
      apps: [
        { name: 'Citymapper', description: 'La mejor app para transporte público en Lisboa. Metro, tranvía, bus, todo integrado.', why: 'Muestra todas las opciones de transporte y te dice exactamente cuándo llegar a la parada.', badge: 'Popular' },
        { name: 'Bolt', description: 'Alternativa a Uber, generalmente más barata en Lisboa.', why: 'Precios más competitivos y muy popular en Portugal.', badge: 'Mejor precio' },
        { name: 'Uber', description: 'El clásico que ya conoces. Funciona muy bien en Lisboa.', why: 'Confiable, conocido, y con buen servicio en la ciudad.', badge: 'Clásico' },
      ]
    },
    {
      titulo: "Comida & Delivery",
      descripcion: "Encuentra, reserva y pide comida",
      apps: [
        { name: 'The Fork', description: 'Reservas en restaurantes con descuentos de hasta 50%.', why: 'Muchos restaurantes en Lisboa ofrecen descuentos exclusivos.', badge: 'Descuentos' },
        { name: 'Glovo', description: 'Delivery de comida, supermercado, farmacia... de todo.', why: 'Muy popular en Lisboa con entregas rápidas.', badge: 'Rápido' },
      ]
    },
    {
      titulo: "Mapas & Navegación",
      descripcion: "Nunca te pierdas en la ciudad",
      apps: [
        { name: 'Google Maps', description: 'El estándar para navegación y búsqueda de lugares.', why: 'Descarga el mapa offline de Lisboa antes de viajar.', badge: 'Offline' },
        { name: 'Maps.me', description: 'Mapas offline gratuitos, perfectos para viajar.', why: 'No necesitas internet. Muy detallado para caminar.', badge: 'Sin internet' },
      ]
    },
    {
      titulo: "Dinero & Utilidades",
      descripcion: "Apps que te salvarán",
      apps: [
        { name: 'Google Translate', description: 'Traductor con cámara para menús y carteles.', why: 'Apunta la cámara a cualquier texto en portugués.', badge: 'Esencial' },
        { name: 'Revolut', description: 'Tarjeta sin comisiones en el extranjero.', why: 'Paga en euros sin comisiones de cambio.', badge: 'Sin comisiones' },
        { name: 'Wise', description: 'Transferencias y tarjeta con el mejor tipo de cambio.', why: 'Alternativa a Revolut, excelente para viajeros.', badge: 'Mejor cambio' },
      ]
    },
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-semibold text-slate-700">14 APPS ESENCIALES</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6" style={{fontFamily: 'Georgia, serif'}}>
            Apps para tu viaje
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Las aplicaciones que usamos nosotros y que te harán la vida más fácil en Lisboa.
          </p>

          <div className="inline-flex items-center gap-2 bg-orange-50 px-6 py-3 rounded-xl border border-orange-100">
            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-slate-700"><span className="font-bold text-orange-600">Tip:</span> Descarga todas antes de viajar</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, catIndex) => (
        <section key={catIndex} className={`py-20 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-slate-50 to-orange-50'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2" style={{fontFamily: 'Georgia, serif'}}>
                {category.titulo}
              </h2>
              <p className="text-slate-600 text-lg">{category.descripcion}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.apps.map((app, appIndex) => (
                <div key={appIndex} className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{app.name}</h3>
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-50 text-green-600 rounded-full">
                        Gratis
                      </span>
                    </div>
                    {app.badge && (
                      <span className="px-3 py-1 text-xs font-semibold bg-orange-50 text-orange-600 rounded-full">
                        {app.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">{app.description}</p>
                  
                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-sm">
                      <span className="font-semibold text-orange-600">Por qué: </span>
                      <span className="text-slate-600">{app.why}</span>
                    </p>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors">
                      App Store
                    </button>
                    <button className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-200 transition-colors">
                      Play Store
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg border border-orange-100 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{fontFamily: 'Georgia, serif'}}>
              ¿Quieres el itinerario completo?
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Con rutas detalladas, restaurantes auténticos y todos los secretos que las apps no te dirán.
            </p>
            <Link 
              href="/itinerarios" 
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Ver Packs desde 5.99€
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
