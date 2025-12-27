"use client";

import Link from 'next/link';

export default function AppsPage() {
  const apps = {
    transporte: [
      {
        name: 'Citymapper',
        description: 'La mejor app para transporte publico en Lisboa. Metro, tranvia, bus, todo integrado.',
        why: 'Muestra todas las opciones de transporte y te dice exactamente cuando llegar a la parada.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/51/80/b7/5180b7e6-e4c7-4e63-5c39-b7c933f25700/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/citymapper/id469463298',
        playStore: 'https://play.google.com/store/apps/details?id=com.citymapper.app.release',
        color: '#3DB846'
      },
      {
        name: 'Bolt',
        description: 'Alternativa a Uber, generalmente mas barata en Lisboa.',
        why: 'Precios mas competitivos y muy popular en Portugal.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/77/02/a4/7702a4f1-fe94-c5a4-ae59-85f0cc49a63f/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/bolt-fast-affordable-rides/id675033630',
        playStore: 'https://play.google.com/store/apps/details?id=ee.mtakso.client',
        color: '#34D186'
      },
      {
        name: 'Uber',
        description: 'El clasico que ya conoces. Funciona muy bien en Lisboa.',
        why: 'Confiable, conocido, y con buen servicio en la ciudad.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/07/21/e0/0721e000-3ea9-e55a-3c7f-97f9dba31fa7/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/uber/id368677368',
        playStore: 'https://play.google.com/store/apps/details?id=com.ubercab',
        color: '#000000'
      },
      {
        name: 'Free Now',
        description: 'App de taxis oficiales y VTC. Antes conocida como MyTaxi.',
        why: 'Ideal si prefieres taxis tradicionales con precio cerrado.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e1/0a/d4/e10ad401-3081-d954-d498-31eec6a8c039/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/free-now-mytaxi/id357852748',
        playStore: 'https://play.google.com/store/apps/details?id=taxi.android.client',
        color: '#C8102E'
      }
    ],
    comida: [
      {
        name: 'The Fork',
        description: 'Reservas en restaurantes con descuentos de hasta 50%.',
        why: 'Muchos restaurantes en Lisboa ofrecen descuentos exclusivos.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/36/71/b8/3671b8a3-0c3c-7a01-fec2-be68f66cd55a/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/thefork-restaurant-bookings/id351091731',
        playStore: 'https://play.google.com/store/apps/details?id=com.lafourchette.lafourchette',
        color: '#00665A'
      },
      {
        name: 'Glovo',
        description: 'Delivery de comida, super, farmacia... de todo.',
        why: 'Muy popular en Lisboa con entregas rapidas.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b9/69/24/b96924d3-d1c0-5746-a7bd-3c0a377dc683/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/glovo-delivery-from-any-store/id951812684',
        playStore: 'https://play.google.com/store/apps/details?id=com.glovo',
        color: '#FFC244'
      },
      {
        name: 'Uber Eats',
        description: 'Delivery de restaurantes. Gran variedad en Lisboa.',
        why: 'Interfaz conocida y muchas opciones de restaurantes.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/70/47/d6/7047d698-2c98-b385-60fb-e9ad5ad5a71c/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/uber-eats-food-delivery/id1058959277',
        playStore: 'https://play.google.com/store/apps/details?id=com.ubercab.eats',
        color: '#06C167'
      }
    ],
    mapas: [
      {
        name: 'Google Maps',
        description: 'El estandar para navegacion y busqueda de lugares.',
        why: 'Descarga el mapa offline de Lisboa antes de viajar.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a2/24/60/a22460c2-28e5-e6de-5bbe-678c4e4f7bf6/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/google-maps/id585027354',
        playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps',
        color: '#4285F4'
      },
      {
        name: 'Maps.me',
        description: 'Mapas offline gratuitos, perfectos para viajar.',
        why: 'No necesitas internet. Muy detallado para caminar.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/af/26/63/af266356-6321-9767-f498-b5a3ddb11c66/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/maps-me-offline-maps-gps-nav/id510623322',
        playStore: 'https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro',
        color: '#20B24B'
      }
    ],
    utilidades: [
      {
        name: 'Google Translate',
        description: 'Traductor con camara para menus y carteles.',
        why: 'Apunta la camara a cualquier texto en portugues.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6e/d7/a3/6ed7a33f-8b8c-5720-2d78-dd3acef7dc11/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/google-translate/id414706506',
        playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate',
        color: '#4285F4'
      },
      {
        name: 'Revolut',
        description: 'Tarjeta sin comisiones en el extranjero.',
        why: 'Paga en euros sin comisiones de cambio.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/63/53/e8/6353e83c-41ab-7cd2-3e59-1e146132af9f/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/revolut/id932493382',
        playStore: 'https://play.google.com/store/apps/details?id=com.revolut.revolut',
        color: '#0075EB'
      },
      {
        name: 'Wise',
        description: 'Transferencias y tarjeta con el mejor tipo de cambio.',
        why: 'Alternativa a Revolut, excelente para viajeros.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f8/99/ce/f899ce09-0c64-c4d8-e313-9bdda6c0d23e/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/wise-ex-transferwise/id612261027',
        playStore: 'https://play.google.com/store/apps/details?id=com.transferwise.android',
        color: '#00B9FF'
      }
    ],
    experiencias: [
      {
        name: 'GetYourGuide',
        description: 'Tours, entradas y experiencias en Lisboa.',
        why: 'Reserva tours de Sintra, Belem, y mas con cancelacion gratis.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/70/c5/22/70c52275-1e6c-8415-e56d-aaff39790f90/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/getyourguide-tours-activities/id657029209',
        playStore: 'https://play.google.com/store/apps/details?id=com.getyourguide.android',
        color: '#FF5533'
      },
      {
        name: 'Airbnb',
        description: 'Alojamientos y experiencias locales.',
        why: 'Encuentra experiencias unicas con locales en Lisboa.',
        logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f9/89/5c/f9895cf5-4e57-54cc-f498-5c8ec86c498d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
        appStore: 'https://apps.apple.com/app/airbnb/id401626263',
        playStore: 'https://play.google.com/store/apps/details?id=com.airbnb.android',
        color: '#FF5A5F'
      }
    ]
  };

  const categories = [
    { key: 'transporte', name: 'Transporte', icon: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' },
    { key: 'comida', name: 'Comida', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { key: 'mapas', name: 'Mapas', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { key: 'utilidades', name: 'Utilidades', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
    { key: 'experiencias', name: 'Experiencias', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' }
  ];

  return (
    <main>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80"
            alt="Lisboa apps"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-white/10 text-white backdrop-blur-sm border border-white/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            14 apps recomendadas
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Apps esenciales para<br />tu viaje a Lisboa
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Las aplicaciones que usamos nosotros y que te haran la vida mucho mas facil durante tu viaje.
          </p>
        </div>
      </section>

      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">Consejo: Descarga antes de viajar</h3>
              <p className="text-amber-800 text-sm">Instala todas las apps antes de salir de casa. Asi las tendras listas con tu cuenta configurada cuando llegues a Lisboa.</p>
            </div>
          </div>
        </div>
      </section>

      {categories.map((category) => (
        <section key={category.key} className="py-16 border-b border-slate-100 last:border-0">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--color-accent), var(--color-primary))'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold" style={{color: 'var(--color-primary)'}}>{category.name}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {apps[category.key as keyof typeof apps].map((app) => (
                <div key={app.name} className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0">
                      <img
                        src={app.logo}
                        alt={app.name}
                        className="w-16 h-16 rounded-2xl object-cover shadow-sm"
                      />
                      <span className="absolute -bottom-1 -right-1 px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                        Gratis
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-1" style={{color: 'var(--color-primary)'}}>{app.name}</h3>
                      <p className="text-slate-600 text-sm mb-2">{app.description}</p>
                      <p className="text-sm mb-4">
                        <span style={{color: 'var(--color-accent)'}} className="font-medium">Por que la recomendamos: </span>
                        <span className="text-slate-500">{app.why}</span>
                      </p>
                      <div className="flex gap-2">
                        
                          href={app.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800 transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                          App Store
                        </a>
                        
                          href={app.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-200 transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
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
          <p className="text-slate-600 text-lg mb-8">Estas apps son solo el principio. Nuestros packs incluyen todo lo que necesitas para tu viaje.</p>
          <Link href="/itinerarios" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105" style={{background: 'var(--color-accent)'}}>
            Ver itinerarios
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
