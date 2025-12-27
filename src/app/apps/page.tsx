"use client";

import Link from 'next/link';

export default function AppsPage() {
  const apps = {
    transporte: [
      { name: 'Citymapper', description: 'La mejor app para transporte publico en Lisboa.', why: 'Muestra todas las opciones de transporte.', color: '#3DB846', appStore: 'https://apps.apple.com/app/citymapper/id469463298', playStore: 'https://play.google.com/store/apps/details?id=com.citymapper.app.release' },
      { name: 'Bolt', description: 'Alternativa a Uber, mas barata en Lisboa.', why: 'Precios mas competitivos.', color: '#34D186', appStore: 'https://apps.apple.com/app/bolt/id675033630', playStore: 'https://play.google.com/store/apps/details?id=ee.mtakso.client' },
      { name: 'Uber', description: 'El clasico. Funciona muy bien en Lisboa.', why: 'Confiable y conocido.', color: '#000000', appStore: 'https://apps.apple.com/app/uber/id368677368', playStore: 'https://play.google.com/store/apps/details?id=com.ubercab' },
      { name: 'Free Now', description: 'App de taxis oficiales.', why: 'Taxis tradicionales con precio cerrado.', color: '#C8102E', appStore: 'https://apps.apple.com/app/free-now/id357852748', playStore: 'https://play.google.com/store/apps/details?id=taxi.android.client' }
    ],
    comida: [
      { name: 'The Fork', description: 'Reservas con descuentos de hasta 50%.', why: 'Muchos restaurantes ofrecen descuentos.', color: '#00665A', appStore: 'https://apps.apple.com/app/thefork/id351091731', playStore: 'https://play.google.com/store/apps/details?id=com.lafourchette.lafourchette' },
      { name: 'Glovo', description: 'Delivery de comida, super, farmacia.', why: 'Muy popular con entregas rapidas.', color: '#FFC244', appStore: 'https://apps.apple.com/app/glovo/id951812684', playStore: 'https://play.google.com/store/apps/details?id=com.glovo' },
      { name: 'Uber Eats', description: 'Delivery de restaurantes.', why: 'Interfaz conocida y muchas opciones.', color: '#06C167', appStore: 'https://apps.apple.com/app/uber-eats/id1058959277', playStore: 'https://play.google.com/store/apps/details?id=com.ubercab.eats' }
    ],
    mapas: [
      { name: 'Google Maps', description: 'El estandar para navegacion.', why: 'Descarga el mapa offline de Lisboa.', color: '#4285F4', appStore: 'https://apps.apple.com/app/google-maps/id585027354', playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps' },
      { name: 'Maps.me', description: 'Mapas offline gratuitos.', why: 'No necesitas internet.', color: '#20B24B', appStore: 'https://apps.apple.com/app/maps-me/id510623322', playStore: 'https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro' }
    ],
    utilidades: [
      { name: 'Google Translate', description: 'Traductor con camara.', why: 'Apunta la camara a cualquier texto.', color: '#4285F4', appStore: 'https://apps.apple.com/app/google-translate/id414706506', playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate' },
      { name: 'Revolut', description: 'Tarjeta sin comisiones.', why: 'Paga en euros sin comisiones.', color: '#0075EB', appStore: 'https://apps.apple.com/app/revolut/id932493382', playStore: 'https://play.google.com/store/apps/details?id=com.revolut.revolut' },
      { name: 'Wise', description: 'El mejor tipo de cambio.', why: 'Alternativa excelente a Revolut.', color: '#9FE870', appStore: 'https://apps.apple.com/app/wise/id612261027', playStore: 'https://play.google.com/store/apps/details?id=com.transferwise.android' }
    ],
    experiencias: [
      { name: 'GetYourGuide', description: 'Tours y experiencias.', why: 'Reserva con cancelacion gratis.', color: '#FF5533', appStore: 'https://apps.apple.com/app/getyourguide/id657029209', playStore: 'https://play.google.com/store/apps/details?id=com.getyourguide.android' },
      { name: 'Airbnb', description: 'Alojamientos y experiencias.', why: 'Experiencias unicas con locales.', color: '#FF5A5F', appStore: 'https://apps.apple.com/app/airbnb/id401626263', playStore: 'https://play.google.com/store/apps/details?id=com.airbnb.android' }
    ]
  };

  const categories = [
    { key: 'transporte', name: 'Transporte', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
    { key: 'comida', name: 'Comida', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
    { key: 'mapas', name: 'Mapas', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
    { key: 'utilidades', name: 'Utilidades', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
    { key: 'experiencias', name: 'Experiencias', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' }
  ];

  return (
    <main>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80" alt="Lisboa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Apps esenciales para Lisboa</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Las aplicaciones que usamos nosotros y que te haran la vida mas facil.</p>
        </div>
      </section>

      {categories.map((category) => (
        <section key={category.key} className="py-16 border-b border-slate-100 last:border-0">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{background: 'var(--color-accent)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{color: 'var(--color-primary)'}}>{category.name}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {apps[category.key as keyof typeof apps].map((app) => (
                <div key={app.name} className="group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg flex-shrink-0" style={{background: app.color}}>
                      {app.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>{app.name}</h3>
                        <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">Gratis</span>
                      </div>
                      <p className="text-slate-600 text-sm mb-1">{app.description}</p>
                      <p className="text-sm text-slate-500 mb-3">{app.why}</p>
                      <div className="flex gap-2">
                        <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                          App Store
                        </a>
                        <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-200 transition-colors">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
                          Play Store
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Quieres el itinerario completo?</h2>
          <p className="text-slate-600 text-lg mb-8">Nuestros packs incluyen todo lo que necesitas para tu viaje.</p>
          <Link href="/itinerarios" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white hover:scale-105 transition-transform" style={{background: 'var(--color-accent)'}}>
            Ver itinerarios
          </Link>
        </div>
      </section>
    </main>
  );
}
