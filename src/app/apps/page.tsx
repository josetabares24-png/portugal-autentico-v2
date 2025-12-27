"use client";

import Link from 'next/link';

export default function AppsPage() {
  const apps = {
    transporte: [
      { name: 'Citymapper', description: 'Transporte público integrado', why: 'Metro, tranvía, bus - todo en una app', logo: '/logos/citymapper.png', appStore: 'https://apps.apple.com/app/citymapper/id469463298', playStore: 'https://play.google.com/store/apps/details?id=com.citymapper.app.release' },
      { name: 'Bolt', description: 'Alternativa económica a Uber', why: 'Precios más competitivos en Lisboa', logo: '/logos/bolt.png', appStore: 'https://apps.apple.com/app/bolt/id675033630', playStore: 'https://play.google.com/store/apps/details?id=ee.mtakso.client' },
      { name: 'Uber', description: 'El clásico que ya conoces', why: 'Confiable y con buen servicio', logo: '/logos/uber.png', appStore: 'https://apps.apple.com/app/uber/id368677368', playStore: 'https://play.google.com/store/apps/details?id=com.ubercab' },
      { name: 'Free Now', description: 'Taxis oficiales con precio cerrado', why: 'Ideal para taxis tradicionales', logo: '/logos/freenow.png', appStore: 'https://apps.apple.com/app/free-now/id357852748', playStore: 'https://play.google.com/store/apps/details?id=taxi.android.client' }
    ],
    comida: [
      { name: 'The Fork', description: 'Reservas con hasta 50% descuento', why: 'Descuentos exclusivos en Lisboa', logo: '/logos/thefork.png', appStore: 'https://apps.apple.com/app/thefork/id351091731', playStore: 'https://play.google.com/store/apps/details?id=com.lafourchette.lafourchette' },
      { name: 'Glovo', description: 'Delivery de todo tipo', why: 'Entregas rápidas en Lisboa', logo: '/logos/glovo.png', appStore: 'https://apps.apple.com/app/glovo/id951812684', playStore: 'https://play.google.com/store/apps/details?id=com.glovo' },
      { name: 'Uber Eats', description: 'Delivery de restaurantes', why: 'Gran variedad de opciones', logo: '/logos/uber-eats.png', appStore: 'https://apps.apple.com/app/uber-eats/id1058959277', playStore: 'https://play.google.com/store/apps/details?id=com.ubercab.eats' }
    ],
    mapas: [
      { name: 'Google Maps', description: 'Navegación y lugares', why: 'Descarga el mapa offline', logo: '/logos/google-maps.png', appStore: 'https://apps.apple.com/app/google-maps/id585027354', playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps' },
      { name: 'Maps.me', description: 'Mapas 100% offline', why: 'Sin necesidad de internet', logo: '/logos/mapsme.webp', appStore: 'https://apps.apple.com/app/maps-me/id510623322', playStore: 'https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro' }
    ],
    utilidades: [
      { name: 'Google Translate', description: 'Traductor con cámara', why: 'Traduce menús y carteles', logo: '/logos/google-translate.png', appStore: 'https://apps.apple.com/app/google-translate/id414706506', playStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate' },
      { name: 'Revolut', description: 'Tarjeta sin comisiones', why: 'Paga en euros sin fees', logo: '/logos/revolut.png', appStore: 'https://apps.apple.com/app/revolut/id932493382', playStore: 'https://play.google.com/store/apps/details?id=com.revolut.revolut' },
      { name: 'Wise', description: 'Mejor tipo de cambio', why: 'Alternativa excelente', logo: '/logos/wise.png', appStore: 'https://apps.apple.com/app/wise/id612261027', playStore: 'https://play.google.com/store/apps/details?id=com.transferwise.android' }
    ],
    experiencias: [
      { name: 'GetYourGuide', description: 'Tours y experiencias', why: 'Cancelación gratis', logo: '/logos/getyourguide.jpg', appStore: 'https://apps.apple.com/app/getyourguide/id657029209', playStore: 'https://play.google.com/store/apps/details?id=com.getyourguide.android' },
      { name: 'Airbnb', description: 'Experiencias locales', why: 'Actividades con locales', logo: '/logos/airbnb.png', appStore: 'https://apps.apple.com/app/airbnb/id401626263', playStore: 'https://play.google.com/store/apps/details?id=com.airbnb.android' }
    ]
  };

  const categories = [
    { key: 'transporte', name: 'Transporte' },
    { key: 'comida', name: 'Comida' },
    { key: 'mapas', name: 'Mapas' },
    { key: 'utilidades', name: 'Utilidades' },
    { key: 'experiencias', name: 'Experiencias' }
  ];

  return (
    <main className="min-h-screen" style={{background: 'var(--color-secondary)'}}>
      {/* Hero minimalista */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{color: 'var(--color-accent)'}}>
            Recursos gratuitos
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>
            Apps para tu viaje
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Las 14 aplicaciones que usamos nosotros y que te harán la vida más fácil en Lisboa.
          </p>
        </div>
      </section>

      {/* Tip discreto */}
      <section className="pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 w-fit mx-auto">
            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
            <p className="text-sm text-slate-600">
              <span className="font-medium">Tip:</span> Descarga todas antes de viajar
            </p>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {categories.map((category, catIndex) => (
            <div key={category.key} className={catIndex > 0 ? 'mt-16' : ''}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>
                  {category.name}
                </h2>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              {/* Apps */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {apps[category.key as keyof typeof apps].map((app) => (
                  <div 
                    key={app.name} 
                    className="group bg-white rounded-2xl p-5 hover:shadow-lg transition-all duration-300 border border-slate-100"
                  >
                    {/* Logo */}
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center mb-4 p-2">
                      <img src={app.logo} alt={app.name} className="w-full h-full object-contain" />
                    </div>

                    {/* Content */}
                    <h3 className="font-semibold text-lg mb-1" style={{color: 'var(--color-primary)'}}>
                      {app.name}
                    </h3>
                    <p className="text-slate-500 text-sm mb-3">{app.description}</p>
                    
                    {/* Why */}
                    <p className="text-xs text-slate-400 mb-4 pb-4 border-b border-slate-100">
                      {app.why}
                    </p>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a 
                        href={app.appStore} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors"
                      >
                        iOS
                      </a>
                      <span className="text-slate-200">|</span>
                      <a 
                        href={app.playStore} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors"
                      >
                        Android
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA minimalista */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100">
            <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{color: 'var(--color-accent)'}}>
              El siguiente paso
            </p>
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>
              ¿Quieres el plan completo?
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Nuestros itinerarios incluyen rutas, restaurantes, horarios y todos los secretos locales.
            </p>
            <Link 
              href="/itinerarios" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{background: 'var(--color-accent)'}}
            >
              Ver itinerarios
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
