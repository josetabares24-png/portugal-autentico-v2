"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function AppsPage() {
  const categories = [
    {
      titulo: "Transporte",
      descripcion: "Muévete por Lisboa como un local",
      imagen: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
      apps: [
        { name: 'Citymapper', description: 'La mejor app para transporte público en Lisboa. Metro, tranvía, bus, todo integrado.', why: 'Muestra todas las opciones de transporte y te dice exactamente cuándo llegar a la parada.', badge: 'Popular', badgeColor: 'bg-blue-500' },
        { name: 'Bolt', description: 'Alternativa a Uber, generalmente más barata en Lisboa.', why: 'Precios más competitivos y muy popular en Portugal.', badge: 'Mejor precio', badgeColor: 'bg-green-500' },
        { name: 'Uber', description: 'El clásico que ya conoces. Funciona muy bien en Lisboa.', why: 'Confiable, conocido, y con buen servicio en la ciudad.', badge: 'Clásico', badgeColor: 'bg-slate-700' },
      ]
    },
    {
      titulo: "Comida & Delivery",
      descripcion: "Encuentra, reserva y pide comida",
      imagen: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
      apps: [
        { name: 'The Fork', description: 'Reservas en restaurantes con descuentos de hasta 50%.', why: 'Muchos restaurantes en Lisboa ofrecen descuentos exclusivos.', badge: 'Descuentos', badgeColor: 'bg-red-500' },
        { name: 'Glovo', description: 'Delivery de comida, supermercado, farmacia... de todo.', why: 'Muy popular en Lisboa con entregas rápidas.', badge: 'Rápido', badgeColor: 'bg-primary' },
      ]
    },
    {
      titulo: "Mapas & Navegación",
      descripcion: "Nunca te pierdas en la ciudad",
      imagen: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80",
      apps: [
        { name: 'Google Maps', description: 'El estándar para navegación y búsqueda de lugares.', why: 'Descarga el mapa offline de Lisboa antes de viajar.', badge: 'Offline', badgeColor: 'bg-green-600' },
        { name: 'Maps.me', description: 'Mapas offline gratuitos, perfectos para viajar.', why: 'No necesitas internet. Muy detallado para caminar.', badge: 'Sin internet', badgeColor: 'bg-blue-600' },
      ]
    },
    {
      titulo: "Dinero & Utilidades",
      descripcion: "Apps que te salvarán",
      imagen: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      apps: [
        { name: 'Google Translate', description: 'Traductor con cámara para menús y carteles.', why: 'Apunta la cámara a cualquier texto en portugués.', badge: 'Esencial', badgeColor: 'bg-red-600' },
        { name: 'Revolut', description: 'Tarjeta sin comisiones en el extranjero.', why: 'Paga en euros sin comisiones de cambio.', badge: 'Sin comisiones', badgeColor: 'bg-blue-700' },
        { name: 'Wise', description: 'Transferencias y tarjeta con el mejor tipo de cambio.', why: 'Alternativa a Revolut, excelente para viajeros.', badge: 'Mejor cambio', badgeColor: 'bg-green-700' },
      ]
    },
  ];

  return (
    <main className="bg-background-light">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80"
            alt="Apps para Lisboa"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-blue-400">smartphone</span>
            <span className="text-sm font-bold tracking-wide">14 APPS ESENCIALES GRATIS</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl">
            Apps para <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">tu viaje</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Las aplicaciones que usamos nosotros y que te harán la vida más fácil en Lisboa.
          </p>

          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md px-8 py-4 rounded-2xl border border-primary/30">
            <span className="material-symbols-outlined text-yellow-400 text-2xl">lightbulb</span>
            <span className="text-white text-lg"><span className="font-bold">Tip:</span> Descarga todas antes de viajar</span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, catIndex) => (
        <section key={catIndex} className={`py-24 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-background-cream'}`}>
          <div className="max-w-7xl mx-auto px-4">
            {/* Category Header con Imagen */}
            <div className="text-center mb-16">
              <div className="relative w-32 h-32 mx-auto mb-8 rounded-3xl overflow-hidden">
                <Image
                  src={category.imagen}
                  alt={category.titulo}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                {category.titulo}
              </h2>
              <p className="text-xl text-slate-600">{category.descripcion}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.apps.map((app, appIndex) => (
                <div key={appIndex} className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2">{app.name}</h3>
                      <div className="flex gap-2">
                        <span className="inline-block px-3 py-1 text-xs font-bold bg-green-50 text-green-600 rounded-full">
                          Gratis
                        </span>
                        {app.badge && (
                          <span className={`inline-block px-3 py-1 text-xs font-bold text-white rounded-full ${app.badgeColor}`}>
                            {app.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">{app.description}</p>
                  
                  <div className="pt-4 border-t border-slate-200 mb-6">
                    <p className="text-sm">
                      <span className="font-bold text-primary">Por qué: </span>
                      <span className="text-slate-600">{app.why}</span>
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors">
                      App Store
                    </button>
                    <button className="flex-1 px-4 py-3 bg-slate-100 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-200 transition-colors">
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
      <section className="py-24 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-azulejo-pattern"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            ¿Quieres el <span className="text-yellow-300">itinerario completo</span>?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Con rutas detalladas, restaurantes auténticos y todos los secretos que las apps no te dirán.
          </p>
          <Link 
            href="/itinerarios" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">map</span>
            Ver Packs desde 5.99€
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <p className="text-white/80 text-sm mt-6">✅ Descarga inmediata · ✅ Garantía 14 días</p>
        </div>
      </section>
    </main>
  );
}
