'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface App {
  nombre: string;
  categoria: string;
  descripcion: string;
  descripcionLarga: string;
  logo: string;
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
      nombre: 'Citymapper',
      categoria: 'Transporte',
      descripcion: 'La mejor app para moverte por Lisboa. Metro, bus, tranvía, Uber: todo en una app con rutas en tiempo real.',
      descripcionLarga: 'Citymapper es la app de transporte público más completa para Lisboa. Te muestra todas las opciones: metro, autobuses, tranvías, e incluso integra Uber y Bolt. Lo mejor es que calcula rutas en tiempo real considerando retrasos, cierres y el tráfico actual. Perfecta para comparar opciones y elegir la ruta más rápida o económica. También te dice cuánto cuesta cada trayecto y cuánto tiempo caminarás.',
      logo: 'https://logo.clearbit.com/citymapper.com',
      color: 'from-green-500 to-emerald-600',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/app/citymapper/id469463298',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.citymapper.app.release',
      pros: ['Rutas en tiempo real', 'Integra todos los transportes', 'Muestra precios', 'Funciona offline parcialmente'],
      mejorPara: 'Primera vez en Lisboa, quieres optimizar tu tiempo'
    },
    {
      nombre: 'Google Maps',
      categoria: 'Navegación',
      descripcion: 'Imprescindible para GPS offline. Descarga el mapa de Lisboa antes de viajar y úsalo sin datos.',
      descripcionLarga: 'Google Maps es esencial para no perderte en Lisboa. La función clave es descargar el mapa offline antes de viajar: ve a "Tus sitios" → "Mapas" → "Descargar mapa" y selecciona el área de Lisboa. Así tendrás GPS sin consumir datos. También tiene información de restaurantes, horarios de monumentos, y rutas a pie optimizadas. Úsalo para encontrar restaurantes cercanos, ver fotos de lugares antes de ir, y navegar por las calles empinadas de Alfama sin perderte.',
      logo: 'https://logo.clearbit.com/google.com',
      color: 'from-blue-500 to-blue-600',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/app/google-maps/id585027354',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps',
      pros: ['GPS offline', 'Información de lugares', 'Fotos y reseñas', 'Rutas optimizadas'],
      mejorPara: 'Navegación GPS, encontrar lugares, ver fotos antes de ir'
    },
    {
      nombre: 'Viva Viagem App',
      categoria: 'Transporte',
      descripcion: 'App oficial para recargar tu tarjeta de transporte público desde el móvil.',
      descripcionLarga: 'La app oficial de Viva Viagem te permite recargar tu tarjeta de transporte sin ir a una máquina. Es súper útil porque las máquinas en las estaciones de metro suelen tener colas, especialmente en hora pico. Con esta app recargas desde el móvil con tarjeta de crédito y luego acercas tu tarjeta física al lector NFC del móvil para transferir el saldo. También puedes ver tu historial de viajes y el saldo restante. Ahorra tiempo y evita colas.',
      logo: 'https://www.metrolisboa.pt/wp-content/uploads/2020/03/viva-viagem-app.png',
      color: 'from-purple-500 to-purple-600',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/pt/app/viva-viagem/id1449782000',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=pt.metrolisboa.vivaviagem',
      pros: ['Recarga sin colas', 'Historial de viajes', 'Ver saldo', 'NFC para transferir'],
      mejorPara: 'Usar transporte público frecuentemente, evitar colas'
    },
    {
      nombre: 'TheFork',
      categoria: 'Restaurantes',
      descripcion: 'Reserva restaurantes con descuentos de hasta 50%. Los mejores sitios de Lisboa con ofertas exclusivas.',
      descripcionLarga: 'TheFork (antes LaFourchette) es la app de reservas de restaurantes más usada en Lisboa. Lo mejor son los descuentos: muchos restaurantes ofrecen 30-50% de descuento si reservas a través de la app, especialmente en horarios menos populares (almuerzos entre semana, cenas tempranas). También puedes ver menús, fotos de platos, y reseñas. Perfecta para reservar en restaurantes populares que suelen estar llenos. Los descuentos son reales y funcionan - he ahorrado cientos de euros usando esta app.',
      logo: 'https://logo.clearbit.com/thefork.com',
      color: 'from-red-500 to-rose-600',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/app/thefork-restaurant-booking/id318452441',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.lafourchette.android',
      pros: ['Descuentos 30-50%', 'Reservas fáciles', 'Ver menús y fotos', 'Reseñas verificadas'],
      mejorPara: 'Comer bien con descuento, reservar restaurantes populares'
    },
    {
      nombre: 'Uber / Bolt',
      categoria: 'Transporte',
      descripcion: 'Taxis privados más baratos que taxis oficiales. Bolt suele ser 10-20% más económico que Uber.',
      descripcionLarga: 'Uber y Bolt son las apps de transporte privado más usadas en Lisboa. Son más baratas que los taxis oficiales (que tienen tarifas fijas altas) y más cómodas. Bolt suele ser 10-20% más barato que Uber, así que comprueba ambas antes de pedir. Ambas funcionan igual: pides un viaje, ves el precio estimado, y pagas con tarjeta. Perfectas para ir del aeropuerto al centro (15-20€ vs 25-30€ en taxi oficial), o para moverte por la noche cuando el transporte público cierra. También tienen opción de compartir viaje para ahorrar más.',
      logo: 'https://logo.clearbit.com/uber.com',
      color: 'from-slate-700 to-slate-800',
      precio: 'Gratis (pago por uso)',
      linkAppStore: 'https://apps.apple.com/app/uber/id368677368',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.ubercab',
      pros: ['Más barato que taxis', 'Precio fijo antes de viajar', 'Pago con tarjeta', 'Rastreo en tiempo real'],
      mejorPara: 'Aeropuerto, viajes nocturnos, cuando tienes prisa'
    },
    {
      nombre: 'Revolut / Wise',
      categoria: 'Utilidades',
      descripcion: 'Las mejores tarjetas para viajar: sin comisiones de cambio, tasas reales, sacar dinero gratis.',
      descripcionLarga: 'Revolut y Wise son tarjetas prepago que te ahorran dinero al viajar. Los bancos tradicionales te cobran comisiones de cambio (2-3%) y tasas infladas. Estas apps te dan el tipo de cambio real (el del mercado) y sin comisiones ocultas. Puedes cambiar euros a tu moneda antes de viajar o pagar directamente y te cambia al tipo real. También puedes sacar dinero gratis (hasta cierto límite mensual). Revolut tiene mejor app, Wise tiene mejor tipo de cambio. Ambas son mejores que cualquier banco tradicional para viajar.',
      logo: 'https://logo.clearbit.com/revolut.com',
      color: 'from-indigo-500 to-indigo-600',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/app/revolut-better-way-to-money/id932493382',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.revolut.revolut',
      pros: ['Sin comisiones de cambio', 'Tipo de cambio real', 'Sacar dinero gratis', 'App fácil de usar'],
      mejorPara: 'Ahorrar en comisiones, cambiar moneda, sacar dinero'
    },
    {
      nombre: 'Timeout Lisboa',
      categoria: 'Eventos',
      descripcion: 'Qué hacer en Lisboa: eventos, conciertos, exposiciones, mercados. Agenda actualizada diariamente.',
      descripcionLarga: 'Timeout Lisboa es la guía de eventos y cultura más completa de la ciudad. Actualizan diariamente con conciertos, exposiciones, mercados, festivales, y eventos especiales. También tienen recomendaciones de restaurantes, bares, y lugares que visitar. Es la versión digital de la revista Time Out que se distribuye gratis en hoteles y cafés. Perfecta para descubrir qué está pasando en Lisboa durante tu visita, especialmente si buscas música en vivo, mercados locales, o eventos culturales.',
      logo: 'https://logo.clearbit.com/timeout.com',
      color: 'from-orange-500 to-orange-600',
      precio: 'Gratis',
      linkWeb: 'https://www.timeout.pt/lisboa',
      pros: ['Eventos actualizados diariamente', 'Conciertos y cultura', 'Mercados y festivales', 'Recomendaciones locales'],
      mejorPara: 'Descubrir eventos, música en vivo, cultura local'
    },
    {
      nombre: 'XE Currency',
      categoria: 'Utilidades',
      descripcion: 'Conversor de moneda offline. Perfecto para saber cuánto estás gastando en tu moneda local.',
      descripcionLarga: 'XE Currency es el conversor de moneda más preciso y confiable. Funciona offline una vez que descargas los tipos de cambio, así que no necesitas internet para saber cuánto cuesta algo en tu moneda. Los tipos de cambio se actualizan automáticamente cuando tienes conexión. Perfecta para saber si algo es caro o barato comparado con tu país, especialmente útil en restaurantes y tiendas donde los precios están en euros. También tiene gráficos históricos para ver tendencias.',
      logo: 'https://logo.clearbit.com/xe.com',
      color: 'from-teal-500 to-teal-600',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/app/xe-currency/id315241195',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.xe.currency',
      pros: ['Funciona offline', 'Tipos de cambio precisos', 'Gráficos históricos', 'Widget para pantalla de inicio'],
      mejorPara: 'Saber cuánto cuesta todo en tu moneda, comparar precios'
    },
    {
      nombre: 'Google Translate',
      categoria: 'Utilidades',
      descripcion: 'Traduce menús, carteles y conversaciones. Descarga portugués offline antes de viajar.',
      descripcionLarga: 'Google Translate es esencial para comunicarte en Lisboa. La función más útil es la traducción por cámara: apuntas a un menú, cartel, o texto y te lo traduce instantáneamente. También puedes hablar y traducir conversaciones en tiempo real. Lo mejor es descargar el paquete de idioma portugués offline antes de viajar, así funciona sin internet. Perfecta para leer menús en restaurantes locales (que a veces solo están en portugués), entender carteles, y comunicarte básicamente con locales que no hablan inglés.',
      logo: 'https://logo.clearbit.com/translate.google.com',
      color: 'from-blue-600 to-blue-700',
      precio: 'Gratis',
      linkAppStore: 'https://apps.apple.com/app/google-translate/id414706506',
      linkPlayStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate',
      pros: ['Traducción por cámara', 'Conversación en tiempo real', 'Funciona offline', 'Muy precisa'],
      mejorPara: 'Leer menús, entender carteles, comunicarte básicamente'
    }
  ];

  const categorias = ['Todas', 'Transporte', 'Restaurantes', 'Utilidades', 'Eventos'];

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
            quality={85}
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

            <div className="space-y-8 md:space-y-12">
              {appsFiltradas.map((app, idx) => (
                <article
                  key={idx}
                  className="group bg-white rounded-2xl p-6 md:p-10 border-2 border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Logo y Info Principal */}
                    <div className="flex-shrink-0">
                      <div className="flex items-start gap-4 md:gap-6">
                        {/* Logo de la App */}
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-white border-2 border-slate-200 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                          {app.logo && app.logo.startsWith('http') ? (
                            <Image
                              src={app.logo}
                              alt={`Logo de ${app.nombre}`}
                              width={96}
                              height={96}
                              className="object-contain p-2"
                              onError={(e) => {
                                // Fallback a icono si el logo falla
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                if (target.parentElement) {
                                  target.parentElement.innerHTML = `<span class="material-symbols-outlined text-4xl text-slate-600">${app.nombre === 'Uber / Bolt' ? 'local_taxi' : app.nombre === 'Revolut / Wise' ? 'credit_card' : 'phone_iphone'}</span>`;
                                }
                              }}
                            />
                          ) : (
                            <span className="material-symbols-outlined text-4xl text-slate-600">phone_iphone</span>
                          )}
                        </div>

                        {/* Info Básica */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`inline-block px-3 py-1 bg-gradient-to-r ${app.color} text-white rounded-full text-xs font-bold`}>
                              {app.categoria}
                            </span>
                            <span className="text-sm font-bold text-green-600">{app.precio}</span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 group-hover:text-primary transition-colors">
                            {app.nombre}
                          </h3>
                          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                            {app.descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Descripción Larga */}
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-6">
                      {app.descripcionLarga}
                    </p>

                    {/* Pros y Mejor Para */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">check_circle</span>
                          Ventajas
                        </h4>
                        <ul className="space-y-2">
                          {app.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <span className="text-primary mt-1">✓</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">star</span>
                          Mejor para
                        </h4>
                        <p className="text-slate-600 leading-relaxed">{app.mejorPara}</p>
                      </div>
                    </div>

                    {/* Botones de Descarga */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                      {app.linkAppStore && (
                        <a
                          href={app.linkAppStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold transition-all hover:scale-105"
                          aria-label={`Descargar ${app.nombre} en App Store`}
                        >
                          <span className="material-symbols-outlined">phone_iphone</span>
                          App Store
                        </a>
                      )}
                      {app.linkPlayStore && (
                        <a
                          href={app.linkPlayStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all hover:scale-105"
                          aria-label={`Descargar ${app.nombre} en Google Play`}
                        >
                          <span className="material-symbols-outlined">android</span>
                          Google Play
                        </a>
                      )}
                      {app.linkWeb && (
                        <a
                          href={app.linkWeb}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all hover:scale-105"
                          aria-label={`Visitar sitio web de ${app.nombre}`}
                        >
                          <span className="material-symbols-outlined">open_in_new</span>
                          Visitar Web
                        </a>
                      )}
                    </div>
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
