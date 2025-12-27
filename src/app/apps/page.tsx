"use client";

import Link from 'next/link';

export default function AppsPage() {
  const apps = {
    transporte: [
      { name: 'Citymapper', description: 'La mejor app para transporte público en Lisboa. Metro, tranvía, bus, todo integrado.', why: 'Muestra todas las opciones de transporte y te dice exactamente cuándo llegar a la parada.', logo: '/logos/citymapper.png', appStore: 'https://apps.apple.com/app/citymapper/id469463298', playStore: 'https://play.google.com/store/apps/details?id=com.citymapper.app.release' },
      { name: 'Bolt', description: 'Alternativa a Uber, generalmente más barata en Lisboa.', why: 'Precios más competitivos y muy popular en Portugal.', logo: '/logos/bolt.png', appStore: 'https://apps.apple.com/app/bolt/id675033630', playStore: 'https://play.google.com/store/apps/details?id=ee.mtakso.client' },
      { name: 'Uber', description: 'El clásico que ya conoces. Funciona muy bien en Lisboa.', why: 'Confiable, conocido, y con buen servicio en la ciudad.', logo: '/logos/uber.png', appStore: 'https://apps.apple.com/app/uber/id368677368', playStore: 'https://play.google.com/store/apps/details?id=com.ubercab' },
      { name: 'Free Now', description: 'App de taxis oficiales y VTC. Antes conocida como MyTaxi.', why: 'Ideal si prefieres taxis tradicionales con precio cerrado.', logo: '/logos/freenow.png', appStore: 'https://apps.apple.com/app/free-now/id357852748', playStore: 'https://play.google.com/store/apps/details?id=taxi.android.client' }
    ],
    comida: [
      { name: 'The Fork', description: 'Reservas en restaurantes con descuentos de hasta 50%.', why: 'Muchos restaurantes en Lisboa ofrecen descuentos exclusivos.', logo: '/logos/thefork.png', appStore: 'https://apps.apple.com/app/thefork/id351091731', playStore: 'https://play.google.com/store/apps/details?id=com.lafourchette.lafourchette' },
      { name: 'Glovo', description: 'Delivery de comida, supermercado, farmacia... de todo.', why: 'Muy popular en Lisboa con entregas rápidas.', logo: '/logos/glovo.png', appStore: 'https://apps.apple.com/app/glovo/id951812684', playStore: 'https://play.google.com/store/apps/details?id=com.glovo' },
      { name: 'Uber Eats', description: 'Delivery de restaurantes. Gran variedad en Lisboa.', why: 'Interfaz conocida y muchas opciones de restaurantes.', logo: '/logos/uber-eats.png', appStore: 'https://apps.apple.com/app/uber-eats/id1058959277', playStore: 'https://play.google.com/store/apps/details?id=com.ubercab.eats' }
    ],
    mapas: [
      { name: 'Google Maps', description: 'El estándar para navegación y búsqueda de lugares.', why: 'Descarga el mapa offline de Lisboa antes de viajar.', logo: '/logos/google-maps.png', appStore: 'https://apps.apple.com/app/google-maps/id585027354', playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps' },
      { name: 'Maps.me', description: 'Mapas offline gratuitos, perfectos para viajar.', why: 'No necesitas internet. Muy detallado para caminar.', logo: '/logos/mapsme.webp', appStore: 'https://apps.apple.com/app/maps-me/id510623322', playStore: 'https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro' }
    ],
    utilidades: [
      { name: 'Google Translate', description: 'Traductor con cámara para menús y carteles.', why: 'Apunta la cámara a cualquier texto en portugués.', logo: '/logos/google-translate.png', appStore: 'https://apps.apple.com/app/google-translate/id414706506', playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate' },
      { name: 'Revolut', description: 'Tarjeta sin comisiones en el extranjero.', why: 'Paga en euros sin comisiones de cambio.', logo: '/logos/revolut.png', appStore: 'https://apps.apple.com/app/revolut/id932493382', playStore: 'https://play.google.com/store/apps/details?id=com.revolut.revolut' },
      { name: 'Wise', description: 'Transferencias y tarjeta con el mejor tipo de cambio.', why: 'Alternativa a Revolut, excelente para viajeros.', logo: '/logos/wise.png', appStore: 'https://apps.apple.com/app/wise/id612261027', playStore: 'https://play.google.com/store/apps/details?id=com.transferwise.android' }
    ],
    experiencias: [
      { name: 'GetYourGuide', description: 'Tours, entradas y experiencias en Lisboa.', why: 'Reserva tours de Sintra, Belém y más con cancelación gratis.', logo: '/logos/getyourguide.jpg', appStore: 'https://apps.apple.com/app/getyourguide/id657029209', playStore: 'https://play.google.com/store/apps/details?id=com.getyourguide.android' },
      { name: 'Airbnb', description: 'Alojamientos y experiencias locales.', why: 'Encuentra experiencias únicas con locales en Lisboa.', logo: '/logos/airbnb.png', appStore: 'https://apps.apple.com/app/airbnb/id401626263', playStore: 'https://play.google.com/store/apps/details?id=com.airbnb.android' }
    ]
  };

  const categories = [
    { key: 'transporte', name: 'Transporte', description: 'Muévete por Lisboa como un local' },
    { key: 'comida', name: 'Comida', description: 'Reservas y delivery' },
    { key: 'mapas', name: 'Mapas', description: 'Nunca te pierdas' },
    { key: 'utilidades', name: 'Utilidades', description: 'Apps que te salvarán' },
    { key: 'experiencias', name: 'Experiencias', description: 'Tours y actividades' }
  ];

  return (
    <main>
      {/* Hero igual que el home */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80" alt="Lisboa apps" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-white/10 text-white backdrop-blur-sm border border-white/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            14 apps gratuitas
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Apps esenciales para
            <span className="block" style={{color: 'var(--color-accent)'}}>tu viaje a Lisboa</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Las aplicaciones que usamos nosotros y que te harán la vida mucho más fácil durante tu viaje.
          </p>
        </div>
      </section>

      {/* Tip con mismo estilo que home */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-sm">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-slate-600"><span className="font-semibold text-amber-600">Consejo:</span> Descarga todas las apps antes de viajar para tenerlas listas cuando llegues.</span>
          </div>
        </div>
      </section>

      {/* Categorías con mismo estilo */}
      {categories.map((category, index) => (
        <section key={category.key} className={`py-20 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>{category.name}</span>
              <h2 className="text-3xl md:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>{category.description}</h2>
            </div>

            <div className={`grid gap-6 ${apps[category.key as keyof typeof apps].length <= 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
              {apps[category.key as keyof typeof apps].map((app) => (
                <div key={app.name} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center flex-shrink-0 p-2 border border-slate-100">
                        <img src={app.logo} alt={app.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>{app.name}</h3>
                        <span className="inline-block px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">Gratis</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">{app.description}</p>
                    <p className="text-sm mb-4">
                      <span style={{color: 'var(--color-accent)'}} className="font-medium">Por qué: </span>
                      <span className="text-slate-500">{app.why}</span>
                    </p>
                    <div className="flex gap-2 pt-4 border-t border-slate-100">
                      <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                        App Store
                      </a>
                      <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-200 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                        Play Store
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA igual que el home */}
      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>El siguiente paso</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>¿Quieres el itinerario completo?</h2>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">Estas apps son solo el principio. Nuestros packs incluyen rutas, restaurantes, horarios y todos los secretos locales.</p>
              <Link href="/itinerarios" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl text-white" style={{background: 'var(--color-accent)'}}>
                Ver packs desde 5.99 EUR
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
