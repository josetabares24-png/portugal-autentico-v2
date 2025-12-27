"use client";

import Link from 'next/link';

export default function AppsPage() {
  const apps = {
    transporte: [
      { name: 'Citymapper', description: 'La mejor app para transporte publico en Lisboa.', why: 'Muestra todas las opciones de transporte.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/51/80/b7/5180b7e6-e4c7-4e63-5c39-b7c933f25700/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/citymapper/id469463298', playStore: 'https://play.google.com/store/apps/details?id=com.citymapper.app.release', color: '#3DB846' },
      { name: 'Bolt', description: 'Alternativa a Uber, mas barata en Lisboa.', why: 'Precios mas competitivos.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/77/02/a4/7702a4f1-fe94-c5a4-ae59-85f0cc49a63f/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/bolt/id675033630', playStore: 'https://play.google.com/store/apps/details?id=ee.mtakso.client', color: '#34D186' },
      { name: 'Uber', description: 'El clasico. Funciona muy bien en Lisboa.', why: 'Confiable y conocido.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/07/21/e0/0721e000-3ea9-e55a-3c7f-97f9dba31fa7/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/uber/id368677368', playStore: 'https://play.google.com/store/apps/details?id=com.ubercab', color: '#000000' },
      { name: 'Free Now', description: 'App de taxis oficiales.', why: 'Taxis tradicionales con precio cerrado.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e1/0a/d4/e10ad401-3081-d954-d498-31eec6a8c039/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/free-now/id357852748', playStore: 'https://play.google.com/store/apps/details?id=taxi.android.client', color: '#C8102E' }
    ],
    comida: [
      { name: 'The Fork', description: 'Reservas con descuentos de hasta 50%.', why: 'Muchos restaurantes ofrecen descuentos.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/36/71/b8/3671b8a3-0c3c-7a01-fec2-be68f66cd55a/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/thefork/id351091731', playStore: 'https://play.google.com/store/apps/details?id=com.lafourchette.lafourchette', color: '#00665A' },
      { name: 'Glovo', description: 'Delivery de comida, super, farmacia.', why: 'Muy popular con entregas rapidas.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/b9/69/24/b96924d3-d1c0-5746-a7bd-3c0a377dc683/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/glovo/id951812684', playStore: 'https://play.google.com/store/apps/details?id=com.glovo', color: '#FFC244' },
      { name: 'Uber Eats', description: 'Delivery de restaurantes.', why: 'Interfaz conocida y muchas opciones.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/70/47/d6/7047d698-2c98-b385-60fb-e9ad5ad5a71c/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/uber-eats/id1058959277', playStore: 'https://play.google.com/store/apps/details?id=com.ubercab.eats', color: '#06C167' }
    ],
    mapas: [
      { name: 'Google Maps', description: 'El estandar para navegacion.', why: 'Descarga el mapa offline de Lisboa.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/a2/24/60/a22460c2-28e5-e6de-5bbe-678c4e4f7bf6/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/google-maps/id585027354', playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps', color: '#4285F4' },
      { name: 'Maps.me', description: 'Mapas offline gratuitos.', why: 'No necesitas internet.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/af/26/63/af266356-6321-9767-f498-b5a3ddb11c66/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/maps-me/id510623322', playStore: 'https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro', color: '#20B24B' }
    ],
    utilidades: [
      { name: 'Google Translate', description: 'Traductor con camara.', why: 'Apunta la camara a cualquier texto.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6e/d7/a3/6ed7a33f-8b8c-5720-2d78-dd3acef7dc11/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/google-translate/id414706506', playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate', color: '#4285F4' },
      { name: 'Revolut', description: 'Tarjeta sin comisiones.', why: 'Paga en euros sin comisiones.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/63/53/e8/6353e83c-41ab-7cd2-3e59-1e146132af9f/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/revolut/id932493382', playStore: 'https://play.google.com/store/apps/details?id=com.revolut.revolut', color: '#0075EB' },
      { name: 'Wise', description: 'El mejor tipo de cambio.', why: 'Alternativa excelente a Revolut.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f8/99/ce/f899ce09-0c64-c4d8-e313-9bdda6c0d23e/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/wise/id612261027', playStore: 'https://play.google.com/store/apps/details?id=com.transferwise.android', color: '#00B9FF' }
    ],
    experiencias: [
      { name: 'GetYourGuide', description: 'Tours y experiencias.', why: 'Reserva con cancelacion gratis.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/70/c5/22/70c52275-1e6c-8415-e56d-aaff39790f90/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/getyourguide/id657029209', playStore: 'https://play.google.com/store/apps/details?id=com.getyourguide.android', color: '#FF5533' },
      { name: 'Airbnb', description: 'Alojamientos y experiencias.', why: 'Experiencias unicas con locales.', logo: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f9/89/5c/f9895cf5-4e57-54cc-f498-5c8ec86c498d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp', appStore: 'https://apps.apple.com/app/airbnb/id401626263', playStore: 'https://play.google.com/store/apps/details?id=com.airbnb.android', color: '#FF5A5F' }
    ]
  };

  const categories = [
    { key: 'transporte', name: 'Transporte', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
    { key: 'comida', name: 'Comida', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
    { key: 'mapas', name: 'Mapas', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { key: 'utilidades', name: 'Utilidades', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
    { key: 'experiencias', name: 'Experiencias', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' }
  ];

  return (
    <main>
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80" alt="Lisboa apps" className="w-full h-full object-cover" />
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
                    <img src={app.logo} alt={app.name} className="w-16 h-16 rounded-2xl object-cover shadow-sm flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1" style={{color: 'var(--color-primary)'}}>{app.name}</h3>
                      <p className="text-slate-600 text-sm mb-2">{app.description}</p>
                      <p className="text-sm text-slate-500 mb-3">{app.why}</p>
                      <div className="flex gap-2">
                        <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-800">App Store</a>
                        <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg hover:bg-slate-200">Play Store</a>
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
          <Link href="/itinerarios" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white" style={{background: 'var(--color-accent)'}}>
            Ver itinerarios
          </Link>
        </div>
      </section>
    </main>
  );
}
