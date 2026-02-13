'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface App {
  nombre: string;
  categoria: string;
  descripcion: string;
  descripcionLarga: string;
  logo?: string; // Opcional - usamos iconos Material
  color: string;
  precio: 'Gratis' | 'Gratis (pago por uso)' | 'Freemium';
  linkAppStore?: string;
  linkPlayStore?: string;
  linkWeb?: string;
  pros: string[];
  mejorPara: string;
}

export default function AppsPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');

  const apps: App[] = [
    {
      nombre: 'Google Maps',
      categoria: 'Navegación',
      descripcion: 'Imprescindible para GPS offline. Descarga el mapa de Lisboa antes de viajar.',
      descripcionLarga: 'Google Maps es esencial para no perderte en Lisboa. Descarga el mapa offline antes de viajar para usar GPS sin datos. Información de restaurantes, horarios de monumentos, rutas a pie optimizadas.',
      logo: 'https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png',
      color: 'from-blue-500 to-blue-600',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/app/google-maps/id585027354',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps',
      pros: ['GPS offline', 'Información de lugares', 'Fotos y reseñas'],
      mejorPara: 'Navegación GPS, encontrar lugares'
    },
    {
      nombre: 'Citymapper',
      categoria: 'Transporte',
      descripcion: 'La mejor app para moverte por Lisboa. Metro, bus, tranvía en tiempo real.',
      descripcionLarga: 'Citymapper es la app de transporte público más completa para Lisboa. Te muestra todas las opciones: metro, autobuses, tranvías con rutas en tiempo real considerando retrasos y cierres. Perfecta para comparar opciones.',
      logo: '/logos/citymapper.png',
      color: 'from-green-500 to-emerald-600',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/app/citymapper/id469463298',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.citymapper.app.release',
      pros: ['Rutas en tiempo real', 'Integra todos los transportes'],
      mejorPara: 'Transporte público, primera vez en Lisboa'
    },
    {
      nombre: 'Uber',
      categoria: 'Transporte',
      descripcion: 'Taxis privados más baratos que taxis oficiales. Pago con tarjeta.',
      descripcionLarga: 'Uber es más barato que los taxis oficiales y más cómodo. Ves el precio estimado antes de pedir y pagas con tarjeta. Perfecto para aeropuerto o viajes nocturnos.',
      logo: '/logos/uber.png',
      color: 'from-slate-700 to-slate-800',
      precio: 'Gratis (pago por uso)',
      linkAppStore: 'https://apps.apple.com/app/uber/id368677368',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.ubercab',
      pros: ['Más barato que taxis', 'Precio fijo', 'Pago con tarjeta'],
      mejorPara: 'Aeropuerto, viajes nocturnos'
    },
    {
      nombre: 'Bolt',
      categoria: 'Transporte',
      descripcion: 'Similar a Uber pero 10-20% más barato.',
      descripcionLarga: 'Bolt es como Uber pero más barato. Suele costar 10-20% menos. Siempre compara precios entre ambas apps antes de pedir.',
      logo: '/logos/bolt.png',
      color: 'from-yellow-500 to-orange-500',
      precio: 'Gratis (pago por uso)',
      linkAppStore: 'https://apps.apple.com/app/bolt/id6750336309',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=ee.mtakso.client',
      pros: ['10-20% más barato que Uber', 'Precio fijo'],
      mejorPara: 'Ahorrar en taxis, comparar precios'
    },
    {
      nombre: 'TheFork',
      categoria: 'Restaurantes',
      descripcion: 'Reserva restaurantes con descuentos de hasta 50%.',
      descripcionLarga: 'TheFork ofrece descuentos de 30-50% en muchos restaurantes de Lisboa. Perfecta para reservar en restaurantes populares.',
      logo: '/logos/thefork.png',
      color: 'from-red-500 to-rose-600',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/app/thefork-restaurant-booking/id318452441',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.lafourchette.android',
      pros: ['Descuentos 30-50%', 'Reservas fáciles'],
      mejorPara: 'Comer bien con descuento'
    },
    {
      nombre: 'Revolut',
      categoria: 'Utilidades',
      descripcion: 'Tarjeta prepago sin comisiones de cambio.',
      descripcionLarga: 'Revolut te ahorra dinero al viajar. Los bancos tradicionales cobran comisiones de cambio (2-3%). Revolut te da el tipo de cambio real.',
      logo: '/logos/revolut.png',
      color: 'from-indigo-500 to-indigo-600',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/app/revolut-better-way-to-money/id932493382',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.revolut.revolut',
      pros: ['Sin comisiones', 'Tipo de cambio real'],
      mejorPara: 'Ahorrar en comisiones, cambiar moneda'
    },
    {
      nombre: 'GetYourGuide',
      categoria: 'Actividades',
      descripcion: 'Tours y actividades en Lisboa con cancelación gratuita.',
      descripcionLarga: 'GetYourGuide es la plataforma más grande para tours y experiencias en Lisboa. Cancelación gratuita hasta 24 horas antes.',
      logo: '/logos/getyourguide.jpg',
      color: 'from-green-600 to-teal-600',
      precio: 'Gratis (pago por uso)',
      linkAppStore: 'https://apps.apple.com/app/getyourguide-tours-activities/id412395452',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.getyourguide.android',
      pros: ['Cancelación gratuita', 'Reseñas verificadas'],
      mejorPara: 'Tours y actividades, experiencias locales'
    },
    {
      nombre: 'Airbnb',
      categoria: 'Alojamiento',
      descripcion: 'Encuentra alojamiento único en Lisboa.',
      descripcionLarga: 'Airbnb es perfecto para encontrar alojamiento alternativo en Lisboa. Desde apartamentos hasta habitaciones compartidas.',
      logo: '/logos/airbnb.png',
      color: 'from-pink-500 to-rose-600',
      precio: 'Gratis (pago por uso)',
      linkAppStore: 'https://apps.apple.com/app/airbnb/id401626263',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.airbnb.android',
      pros: ['Alojamientos únicos', 'Contactar anfitriones'],
      mejorPara: 'Alojamiento alternativo'
    },
    {
      nombre: 'Glovo',
      categoria: 'Delivery',
      descripcion: 'Delivery de comida y productos.',
      descripcionLarga: 'Glovo es el servicio de delivery más usado en Lisboa. Puedes pedir comida o productos del supermercado. Entrega rápida.',
      logo: '/logos/glovo.png',
      color: 'from-orange-500 to-red-500',
      precio: 'Gratis (pago por uso)',
      linkAppStore: 'https://apps.apple.com/app/glovo-food-delivery/id951624702',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.glovo',
      pros: ['Entrega rápida', 'Todo tipo de productos'],
      mejorPara: 'Comida a domicilio, compras urgentes'
    }
  ];

  const categorias = ['Todas', 'Navegación', 'Transporte', 'Restaurantes', 'Utilidades', 'Alojamiento', 'Actividades', 'Delivery'];

  const appsFiltradas = categoriaActiva === 'Todas'
    ? apps
    : apps.filter(app => app.categoria === categoriaActiva);

  return (
    <main id="main-content" className="bg-background-light">
      {/* Hero Section - Estilo Blog */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/yingcan-chen-xZ_GfV_JZlE-unsplash.jpg"
            alt="Apps esenciales para viajar a Lisboa en 2026"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">phone_iphone</span>
            <span className="text-sm font-semibold tracking-wide">Apps esenciales</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            Apps
            <br />
            <span className="text-accent">Imprescindibles</span>
          </h1>

          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Las mejores apps para viajar a Lisboa en 2026: transporte, mapas offline, restaurantes y dinero. Útiles de verdad y sin perder tiempo.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Categorías - Estilo Blog */}
      <section className="py-4 bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                aria-label={`Filtrar por categoría: ${cat}`}
                aria-pressed={cat === categoriaActiva}
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full font-semibold transition-all text-xs md:text-sm ${
                  cat === categoriaActiva
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-700 text-lg leading-relaxed">
            Complementa estas apps con nuestras{' '}
            <Link href="/transporte" className="text-primary font-semibold hover:underline">
              guías de transporte
            </Link>
            ,{' '}
            <Link href="/presupuesto" className="text-primary font-semibold hover:underline">
              calculadora de presupuesto
            </Link>{' '}
            y{' '}
            <Link href="/itinerarios" className="text-primary font-semibold hover:underline">
              itinerarios completos por días
            </Link>
            . Actualizado Enero 2026.
          </p>
        </div>
      </section>

      {/* Apps Grid - Estilo Editorial Mejorado */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Apps <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Recomendadas</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                Descarga estas apps antes de viajar y tendrás todo lo necesario para moverte, comer y disfrutar Lisboa
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {appsFiltradas.map((app, idx) => (
                <article
                  key={idx}
                  className="group bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border-2 border-slate-200 hover:border-primary hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Logo y Header */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo de la App */}
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                          {app.logo && app.logo.startsWith('http') ? (
                            <img
                              src={app.logo}
                              alt={`Logo de ${app.nombre}`}
                              className="w-full h-full object-contain p-2"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  const iconMap: Record<string, string> = {
                                    'Uber': 'local_taxi',
                                    'Bolt': 'local_taxi',
                                    'Revolut': 'credit_card',
                                    'Wise': 'credit_card',
                                    'CP - Comboios de Portugal': 'train',
                                    'Citymapper': 'directions_transit',
                                    'Google Maps': 'map',
                                    'Viva Viagem App': 'confirmation_number',
                                    'TheFork': 'restaurant',
                                    'Timeout Lisboa': 'event',
                                    'XE Currency': 'currency_exchange',
                                    'Google Translate': 'translate',
                                  };
                                  const icon = iconMap[app.nombre] || 'phone_iphone';
                                  parent.innerHTML = `<span class="material-symbols-outlined text-3xl text-slate-600">${icon}</span>`;
                                }
                              }}
                            />
                          ) : (
                            <span className="material-symbols-outlined text-3xl text-slate-600">phone_iphone</span>
                          )}
                        </div>

                    {/* Info Básica */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`inline-block px-2 py-0.5 bg-gradient-to-r ${app.color} text-white rounded-full text-xs font-bold`}>
                          {app.categoria}
                        </span>
                        <span className="text-xs font-bold text-green-600">{app.precio}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {app.nombre}
                      </h3>
                    </div>
                  </div>

                  {/* Descripción Corta */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                    {app.descripcion}
                  </p>

                  {/* Descripción Larga (Colapsable) */}
                  <details className="mb-4">
                    <summary className="cursor-pointer text-sm font-semibold text-primary hover:text-primary-dark mb-3">
                      Ver más detalles
                    </summary>
                    <div className="space-y-4 pt-3 border-t border-slate-100">
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {app.descripcionLarga}
                      </p>

                      {/* Pros */}
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                          Ventajas
                        </h4>
                        <ul className="space-y-1.5">
                          {app.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                              <span className="text-primary mt-0.5 text-xs">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Mejor Para */}
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-base">star</span>
                          Mejor para
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{app.mejorPara}</p>
                      </div>
                    </div>
                  </details>

                  {/* Botones de Descarga */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 mt-auto">
                    {app.linkAppStore && (
                      <a
                        href={app.linkAppStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold text-xs transition-all hover:scale-105"
                        aria-label={`Descargar ${app.nombre} en App Store`}
                      >
                        <span className="material-symbols-outlined text-sm">phone_iphone</span>
                        App Store
                      </a>
                    )}
                    {app.linkPlayStore && (
                      <a
                        href={app.linkPlayStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-xs transition-all hover:scale-105"
                        aria-label={`Descargar ${app.nombre} en Google Play`}
                      >
                        <span className="material-symbols-outlined text-sm">android</span>
                        Play Store
                      </a>
                    )}
                    {app.linkWeb && (
                      <a
                        href={app.linkWeb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold text-xs transition-all hover:scale-105"
                        aria-label={`Visitar sitio web de ${app.nombre}`}
                      >
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                        Web
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {appsFiltradas.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-slate-500">
                  No hay apps en esta categoría todavía
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tips Adicionales - Mejorado */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Tips <span className="text-primary">Adicionales</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Consejos prácticos para aprovechar al máximo estas apps durante tu viaje
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: 'download',
                  titulo: 'Descarga mapas offline',
                  desc: 'Google Maps permite descargar mapas completos. Hazlo con WiFi del hotel antes de salir para no gastar datos. El mapa de Lisboa ocupa unos 50-100MB y te servirá para toda la semana.'
                },
                {
                  icon: 'wifi',
                  titulo: 'WiFi gratis en Lisboa',
                  desc: 'Casi todos los cafés, restaurantes y bares tienen WiFi gratis. Pide la contraseña al pedir. Los centros comerciales y algunas plazas también tienen WiFi público. Perfecto para descargar apps o mapas sin gastar datos.'
                },
                {
                  icon: 'sim_card',
                  titulo: 'SIM turística en el aeropuerto',
                  desc: 'En el aeropuerto de Lisboa puedes comprar SIM prepago de Vodafone o MEO. Cuestan 10-20€ y vienen con 10-20GB de datos válidos por 15-30 días. Más barato que roaming internacional y suficiente para todo el viaje.'
                },
                {
                  icon: 'battery_charging_full',
                  titulo: 'Lleva powerbank',
                  desc: 'Usar GPS, Google Maps y apps de transporte consume mucha batería. Lleva una batería externa de al menos 10.000mAh. Te salvará cuando estés todo el día fuera y necesites el móvil para navegar o reservar restaurantes.'
                }
              ].map((tip, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 border-2 border-slate-200 hover:border-primary hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-4 shadow-lg">
                    <span className="material-symbols-outlined text-white text-2xl">{tip.icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">
                    {tip.titulo}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2000&auto=format&fit=crop"
            alt="Atardecer sobre Lisboa con el puente 25 de Abril iluminado y el río Tajo reflejando los colores del cielo"
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              ¿Listo para Explorar
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Lisboa?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              Descubre nuestros itinerarios completos con restaurantes verificados, coordenadas GPS y tips de local. Actualizado Enero 2026.
            </p>

            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-4 px-10 rounded-2xl text-lg md:text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span>Ver Itinerarios</span>
              <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            </Link>

            <p className="text-slate-400 text-sm mt-8">
              ✓ Desde 1.99€ · ✓ Descarga inmediata · ✓ Actualizadas Enero 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}