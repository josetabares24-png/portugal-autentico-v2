import Link from 'next/link';

export const metadata = {
  title: 'Apps Esenciales para Lisboa | Portugal Autentico',
  description: 'Las mejores apps para moverte, comer y disfrutar Lisboa. Transporte, mapas, comida y mas.',
};

export default function AppsPage() {
  const apps = {
    transporte: [
      {
        nombre: "Citymapper",
        descripcion: "La mejor app para transporte publico. Metro, bus, tranvia, todo integrado con horarios en tiempo real.",
        porque: "Te dice exactamente que tranvia coger, donde bajar, y alternativas si hay retrasos.",
        ios: "https://apps.apple.com/app/citymapper/id469463298",
        android: "https://play.google.com/store/apps/details?id=com.citymapper.app.release",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Citymapper_app_logo.svg/480px-Citymapper_app_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Bolt",
        descripcion: "Alternativa a Uber, mas barata en Lisboa. Taxis y patinetes electricos.",
        porque: "Precios mas bajos que Uber. Muy usado por locales. Patinetes utiles para zonas planas.",
        ios: "https://apps.apple.com/app/bolt-request-a-ride/id675033630",
        android: "https://play.google.com/store/apps/details?id=ee.mtakso.client",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bolt_logo.svg/480px-Bolt_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Uber",
        descripcion: "El clasico. Funciona muy bien en Lisboa con precios razonables.",
        porque: "Alternativa a Bolt. A veces tiene mejores precios segun la hora.",
        ios: "https://apps.apple.com/app/uber/id368677368",
        android: "https://play.google.com/store/apps/details?id=com.ubercab",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/480px-Uber_logo_2018.svg.png",
        gratis: true
      },
      {
        nombre: "Free Now",
        descripcion: "App de taxis oficiales. Util si prefieres taxi tradicional con taximetro.",
        porque: "Taxis con licencia, precio fijo al aeropuerto, pago con tarjeta garantizado.",
        ios: "https://apps.apple.com/app/free-now-mytaxi/id357852748",
        android: "https://play.google.com/store/apps/details?id=taxi.android.client",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/FREE_NOW_logo.svg/480px-FREE_NOW_logo.svg.png",
        gratis: true
      }
    ],
    comida: [
      {
        nombre: "The Fork",
        descripcion: "Reservas en restaurantes con descuentos de hasta 50%. Muy popular en Lisboa.",
        porque: "Descuentos reales en restaurantes buenos. Reserva con un click. Opiniones fiables.",
        ios: "https://apps.apple.com/app/thefork-restaurant-bookings/id351439447",
        android: "https://play.google.com/store/apps/details?id=com.lafourchette.lafourchette",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/TheFork_logo.svg/480px-TheFork_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Glovo",
        descripcion: "Delivery de comida, supermercado, farmacia. El mas usado en Portugal.",
        porque: "Mas restaurantes locales que Uber Eats. Entregas rapidas. Super para el hotel.",
        ios: "https://apps.apple.com/app/glovo/id951812684",
        android: "https://play.google.com/store/apps/details?id=com.glovo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Glovo_logo.svg/480px-Glovo_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Uber Eats",
        descripcion: "Delivery de comida. Buena seleccion de restaurantes en Lisboa.",
        porque: "Alternativa a Glovo. A veces tiene ofertas mejores o restaurantes exclusivos.",
        ios: "https://apps.apple.com/app/uber-eats-food-delivery/id1058959277",
        android: "https://play.google.com/store/apps/details?id=com.ubercab.eats",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_Eats_2020_logo.svg/480px-Uber_Eats_2020_logo.svg.png",
        gratis: true
      }
    ],
    mapas: [
      {
        nombre: "Google Maps",
        descripcion: "El mapa de siempre. Descarga el mapa offline de Lisboa antes de viajar.",
        porque: "Funciona sin internet si descargas el mapa. Opiniones de restaurantes utiles.",
        ios: "https://apps.apple.com/app/google-maps/id585027354",
        android: "https://play.google.com/store/apps/details?id=com.google.android.apps.maps",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Google_Maps_icon_%282020%29.svg/480px-Google_Maps_icon_%282020%29.svg.png",
        gratis: true
      },
      {
        nombre: "Maps.me",
        descripcion: "Mapas 100% offline. Perfecto si no tienes datos moviles.",
        porque: "Funciona completamente sin internet. Rutas a pie muy precisas. Marca tus lugares.",
        ios: "https://apps.apple.com/app/maps-me-offline-maps-gps-nav/id510623322",
        android: "https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Maps.me_logo.svg/480px-Maps.me_logo.svg.png",
        gratis: true
      }
    ],
    utilidades: [
      {
        nombre: "Google Translate",
        descripcion: "Traductor con camara. Apunta a un menu en portugues y lo traduce al instante.",
        porque: "La funcion de camara es magica para menus y carteles. Descarga portugues offline.",
        ios: "https://apps.apple.com/app/google-translate/id414706506",
        android: "https://play.google.com/store/apps/details?id=com.google.android.apps.translate",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/480px-Google_Translate_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Revolut",
        descripcion: "Tarjeta sin comisiones en el extranjero. Cambio de divisa al tipo real.",
        porque: "Paga en euros sin comisiones. Saca dinero gratis en cajeros. Imprescindible para viajar.",
        ios: "https://apps.apple.com/app/revolut/id932493382",
        android: "https://play.google.com/store/apps/details?id=com.revolut.revolut",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Revolut_logo.svg/480px-Revolut_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Wise",
        descripcion: "Alternativa a Revolut. Transferencias internacionales y tarjeta multimoneda.",
        porque: "Otra opcion para pagar sin comisiones. Algunas personas prefieren su interfaz.",
        ios: "https://apps.apple.com/app/wise-ex-transferwise/id612261027",
        android: "https://play.google.com/store/apps/details?id=com.transferwise.android",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wise_Logo.svg/480px-Wise_Logo.svg.png",
        gratis: true
      }
    ],
    experiencias: [
      {
        nombre: "GetYourGuide",
        descripcion: "Tours, entradas a monumentos, experiencias. Cancelacion gratuita en muchos.",
        porque: "Entradas sin cola al Oceanario, Jeronimos, etc. Tours en espanol disponibles.",
        ios: "https://apps.apple.com/app/getyourguide-tours-tickets/id657029442",
        android: "https://play.google.com/store/apps/details?id=com.getyourguide.android",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/GetYourGuide_logo.svg/480px-GetYourGuide_logo.svg.png",
        gratis: true
      },
      {
        nombre: "Airbnb",
        descripcion: "No solo alojamiento. La seccion de Experiencias tiene tours locales unicos.",
        porque: "Experiencias con locales: clases de cocina, tours de fado, paseos alternativos.",
        ios: "https://apps.apple.com/app/airbnb/id401626263",
        android: "https://play.google.com/store/apps/details?id=com.airbnb.android",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/480px-Airbnb_Logo_B%C3%A9lo.svg.png",
        gratis: true
      }
    ]
  };

  const categorias = [
    { key: 'transporte', nombre: 'Transporte', icono: 'ÔøΩÔøΩ', color: 'from-blue-500 to-blue-600' },
    { key: 'comida', nombre: 'Comida y Restaurantes', icono: 'ÌΩΩÔ∏è', color: 'from-amber-500 to-orange-500' },
    { key: 'mapas', nombre: 'Mapas Offline', icono: 'Ì∑∫Ô∏è', color: 'from-green-500 to-emerald-500' },
    { key: 'utilidades', nombre: 'Utilidades', icono: '‚ö°', color: 'from-purple-500 to-violet-500' },
    { key: 'experiencias', nombre: 'Tours y Experiencias', icono: 'Ìæ≠', color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <main>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 text-white backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              {Object.values(apps).flat().length} apps recomendadas
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Apps <span style={{color: 'var(--color-accent)'}}>esenciales</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">Todo lo que necesitas en tu movil para moverte, comer y disfrutar Lisboa como un local.</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="bg-white rounded-2xl p-6 mb-12 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1" style={{color: 'var(--color-primary)'}}>Tip: Descarga antes de viajar</h3>
                <p className="text-slate-600">Instala estas apps con WiFi en casa. Algunas permiten descargar mapas offline. Asi no dependes de datos moviles al llegar.</p>
              </div>
            </div>
          </div>

          {categorias.map((cat) => (
            <div key={cat.key} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {cat.icono}
                </div>
                <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>{cat.nombre}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {apps[cat.key as keyof typeof apps].map((app) => (
                  <div key={app.nombre} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img src={app.logo} alt={app.nombre} className="w-12 h-12 object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>{app.nombre}</h3>
                          {app.gratis && <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Gratis</span>}
                        </div>
                        <p className="text-slate-600 text-sm mb-2">{app.descripcion}</p>
                        <p className="text-slate-500 text-xs mb-4 italic">Por que la recomendamos: {app.porque}</p>
                        <div className="flex gap-2">
                          <a href={app.ios} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                            App Store
                          </a>
                          <a href={app.android} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-600 text-white text-xs font-medium hover:bg-green-700 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 2.047a.5.5 0 00-.683.183L15.05 5.38a9.054 9.054 0 00-6.098 0L7.16 2.23a.5.5 0 10-.866.5l1.725 2.99A8.987 8.987 0 003 13.5V14h18v-.5a8.987 8.987 0 00-5.019-8.08l1.725-2.99a.5.5 0 00-.183-.683zM8.5 11a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2zM3 15.5V19a3 3 0 003 3h12a3 3 0 003-3v-3.5H3z"/></svg>
                            Google Play
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-16 relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900"></div>
            <div className="relative p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Quieres todo organizado?</h3>
                <p className="text-white/70 text-lg">Nuestros itinerarios incluyen que app usar en cada momento del viaje.</p>
              </div>
              <Link href="/itinerarios" className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl bg-white" style={{color: 'var(--color-primary)'}}>
                Ver itinerarios
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
