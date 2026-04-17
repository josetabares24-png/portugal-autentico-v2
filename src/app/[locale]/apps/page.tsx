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
  precio: string;
  linkAppStore?: string;
  linkPlayStore?: string;
  linkWeb?: string;
  pros: string[];
  mejorPara: string;
}

const apps: App[] = [
  {
    nombre: 'Google Maps',
    categoria: 'Navegación',
    descripcion: 'Imprescindible para GPS offline. Descarga el mapa de Lisboa antes de viajar.',
    descripcionLarga: 'Google Maps es esencial para no perderte en Lisboa. Descarga el mapa offline antes de viajar para usar GPS sin datos. Información de restaurantes, horarios de monumentos, rutas a pie optimizadas.',
    logo: '/logos/google-maps.png',
    precio: 'Gratis',
    linkAppStore: 'https://apps.apple.com/app/google-maps/id585027354',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.maps',
    pros: ['GPS offline sin datos', 'Info de lugares y horarios', 'Fotos y reseñas reales'],
    mejorPara: 'Navegación GPS, encontrar lugares'
  },
  {
    nombre: 'Citymapper',
    categoria: 'Transporte',
    descripcion: 'La mejor app para transporte público en Lisboa. Metro, bus y tranvía en tiempo real.',
    descripcionLarga: 'Citymapper es la app de transporte público más completa para Lisboa. Te muestra todas las opciones: metro, autobuses, tranvías con rutas en tiempo real considerando retrasos y cierres.',
    logo: '/logos/citymapper.png',
    precio: 'Gratis',
    linkAppStore: 'https://apps.apple.com/app/citymapper/id469463298',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.citymapper.app.release',
    pros: ['Rutas en tiempo real', 'Integra metro, bus, tranvía', 'Horarios exactos'],
    mejorPara: 'Transporte público, primera vez en Lisboa'
  },
  {
    nombre: 'Bolt',
    categoria: 'Transporte',
    descripcion: 'Taxis privados más baratos que Uber. El favorito de los locales.',
    descripcionLarga: 'Bolt es como Uber pero 10-20% más barato en Lisboa. Es la app que usan los locales. Siempre compara precios entre Bolt y Uber antes de pedir.',
    logo: '/logos/bolt.png',
    precio: 'Gratis (pago por uso)',
    linkAppStore: 'https://apps.apple.com/app/bolt/id6750336309',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=ee.mtakso.client',
    pros: ['10-20% más barato que Uber', 'Precio fijo antes de pedir', 'Pago con tarjeta'],
    mejorPara: 'Ahorrar en taxis, aeropuerto'
  },
  {
    nombre: 'Uber',
    categoria: 'Transporte',
    descripcion: 'Taxis privados cómodos con precio fijo. Ideal para aeropuerto.',
    descripcionLarga: 'Uber es cómodo y más barato que los taxis oficiales. Ves el precio estimado antes de pedir y pagas con tarjeta. Perfecto para aeropuerto o viajes nocturnos.',
    logo: '/logos/uber.png',
    precio: 'Gratis (pago por uso)',
    linkAppStore: 'https://apps.apple.com/app/uber/id368677368',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.ubercab',
    pros: ['Disponible en todo Lisboa', 'Precio fijo', 'Pago con tarjeta'],
    mejorPara: 'Aeropuerto, viajes nocturnos'
  },
  {
    nombre: 'TheFork',
    categoria: 'Restaurantes',
    descripcion: 'Reserva restaurantes con descuentos de hasta 50%. Imprescindible.',
    descripcionLarga: 'TheFork ofrece descuentos de 30-50% en muchos restaurantes de Lisboa. Perfecta para reservar en restaurantes populares y ahorrar dinero.',
    logo: '/logos/thefork.png',
    precio: 'Gratis',
    linkAppStore: 'https://apps.apple.com/app/thefork-restaurant-booking/id318452441',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.lafourchette.android',
    pros: ['Descuentos 30-50%', 'Reservas fáciles', 'Reseñas verificadas'],
    mejorPara: 'Comer bien con descuento'
  },
  {
    nombre: 'Revolut',
    categoria: 'Dinero',
    descripcion: 'Tarjeta prepago sin comisiones de cambio. Ahorra en cada pago.',
    descripcionLarga: 'Revolut te ahorra dinero al viajar. Los bancos tradicionales cobran comisiones de cambio (2-3%). Revolut te da el tipo de cambio real sin comisiones.',
    logo: '/logos/revolut.png',
    precio: 'Gratis',
    linkAppStore: 'https://apps.apple.com/app/revolut-better-way-to-money/id932493382',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.revolut.revolut',
    pros: ['Sin comisiones de cambio', 'Tipo de cambio real', 'Tarjeta virtual instantánea'],
    mejorPara: 'Pagar sin comisiones'
  },
  {
    nombre: 'Wise',
    categoria: 'Dinero',
    descripcion: 'Transferencias internacionales baratas y tarjeta multidivisa.',
    descripcionLarga: 'Wise (antes TransferWise) es ideal si necesitas enviar dinero o cambiar divisa. Las comisiones son transparentes y mucho más bajas que cualquier banco.',
    logo: '/logos/wise.png',
    precio: 'Gratis',
    linkAppStore: 'https://apps.apple.com/app/wise-ex-transferwise/id612261027',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.transferwise.android',
    pros: ['Comisiones transparentes', 'Tarjeta multidivisa', 'Transferencias baratas'],
    mejorPara: 'Cambio de divisa, transferencias'
  },
  {
    nombre: 'GetYourGuide',
    categoria: 'Actividades',
    descripcion: 'Tours y actividades en Lisboa con cancelación gratuita.',
    descripcionLarga: 'GetYourGuide es la plataforma más grande para tours y experiencias en Lisboa. Cancelación gratuita hasta 24 horas antes.',
    logo: '/logos/getyourguide.jpg',
    precio: 'Gratis (pago por uso)',
    linkAppStore: 'https://apps.apple.com/app/getyourguide-tours-activities/id412395452',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.getyourguide.android',
    pros: ['Cancelación gratuita 24h', 'Reseñas verificadas', 'Tours en español'],
    mejorPara: 'Tours, free tours, experiencias'
  },
  {
    nombre: 'Google Translate',
    categoria: 'Utilidades',
    descripcion: 'Traduce menús y carteles con la cámara. Funciona offline.',
    descripcionLarga: 'Google Translate con la función de cámara te permite apuntar a un menú o cartel en portugués y ver la traducción al instante. Descarga el paquete de portugués para usar sin datos.',
    logo: '/logos/google-translate.png',
    precio: 'Gratis',
    linkAppStore: 'https://apps.apple.com/app/google-translate/id414706506',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.google.android.apps.translate',
    pros: ['Traducción con cámara', 'Funciona offline', 'Portugués incluido'],
    mejorPara: 'Traducir menús, carteles'
  },
  {
    nombre: 'Airbnb',
    categoria: 'Alojamiento',
    descripcion: 'Encuentra alojamiento único en los mejores barrios de Lisboa.',
    descripcionLarga: 'Airbnb es perfecto para encontrar alojamiento con carácter en Lisboa. Desde apartamentos en Alfama hasta lofts en LX Factory.',
    logo: '/logos/airbnb.png',
    precio: 'Gratis (pago por uso)',
    linkAppStore: 'https://apps.apple.com/app/airbnb/id401626263',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.airbnb.android',
    pros: ['Alojamientos con carácter', 'Contactar anfitriones', 'Experiencias locales'],
    mejorPara: 'Alojamiento alternativo'
  },
  {
    nombre: 'Glovo',
    categoria: 'Delivery',
    descripcion: 'Delivery de comida y productos del supermercado a tu alojamiento.',
    descripcionLarga: 'Glovo es el servicio de delivery más usado en Lisboa. Puedes pedir comida o productos del supermercado. Entrega rápida.',
    logo: '/logos/glovo.png',
    precio: 'Gratis (pago por uso)',
    linkAppStore: 'https://apps.apple.com/app/glovo-food-delivery/id951624702',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=com.glovo',
    pros: ['Entrega rápida', 'Comida y supermercado', 'Disponible de noche'],
    mejorPara: 'Comida a domicilio'
  },
  {
    nombre: 'Free Now',
    categoria: 'Transporte',
    descripcion: 'Alternativa a Uber/Bolt con taxis oficiales y VTC.',
    descripcionLarga: 'Free Now (antes MyTaxi) combina taxis oficiales y coches VTC. A veces tiene precios mejores que Uber/Bolt, especialmente en hora punta.',
    logo: '/logos/freenow.png',
    precio: 'Gratis (pago por uso)',
    linkAppStore: 'https://apps.apple.com/app/free-now-formerly-mytaxi/id357852748',
    linkPlayStore: 'https://play.google.com/store/apps/details?id=taxi.android.client',
    pros: ['Taxis oficiales + VTC', 'Compara precios', 'Pago con tarjeta'],
    mejorPara: 'Comparar precios de taxi'
  },
];

const categorias = ['Todas', 'Navegación', 'Transporte', 'Restaurantes', 'Dinero', 'Utilidades', 'Alojamiento', 'Actividades', 'Delivery'];

export default function AppsPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');

  const appsFiltradas = categoriaActiva === 'Todas'
    ? apps
    : apps.filter(app => app.categoria === categoriaActiva);

  return (
    <main id="main-content">
      {/* Cabecera */}
      <section className="bg-background-light pt-20 pb-12 border-b border-border-soft">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-3">Herramientas</p>
          <h1 className="font-display italic text-text-main text-4xl md:text-5xl leading-tight mb-3">
            Apps imprescindibles para Lisboa
          </h1>
          <p className="text-text-secondary">
            Transporte, mapas offline, restaurantes con descuento y dinero sin comisiones. Descárgalas antes de viajar.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-background-light py-8 border-b border-border-soft sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                aria-pressed={cat === categoriaActiva}
                className={`text-sm pb-1 transition-colors ${
                  cat === categoriaActiva
                    ? 'text-text-main font-semibold border-b-2 border-primary'
                    : 'text-text-secondary hover:text-text-main'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista apps */}
      <section className="bg-background-light py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="divide-y divide-border-soft">
            {appsFiltradas.map((app) => (
              <article key={app.nombre} className="py-8">
                <div className="grid md:grid-cols-[5rem,1fr,auto] gap-6 items-start">
                  {/* Logo */}
                  <div className="w-16 h-16 border border-border-soft bg-white flex items-center justify-center flex-shrink-0">
                    <Image
                      src={app.logo}
                      alt={`Logo de ${app.nombre}`}
                      width={48}
                      height={48}
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Contenido */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                      <h3 className="font-semibold text-text-main text-base">{app.nombre}</h3>
                      <span className="text-xs text-text-secondary uppercase tracking-widest">{app.categoria}</span>
                      <span className="text-xs text-primary font-semibold">{app.precio}</span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">{app.descripcion}</p>

                    <details>
                      <summary className="cursor-pointer text-xs text-primary hover:underline underline-offset-2 w-fit">
                        Ver más
                      </summary>
                      <div className="mt-4 space-y-3">
                        <p className="text-text-secondary text-sm leading-relaxed">{app.descripcionLarga}</p>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-text-secondary mb-2">Ventajas</p>
                          <div className="space-y-1">
                            {app.pros.map((pro) => (
                              <div key={pro} className="flex items-start gap-2 text-sm text-text-secondary">
                                <span className="text-primary mt-0.5 flex-shrink-0">&#10003;</span>
                                <span>{pro}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-text-secondary">
                          <span className="font-semibold text-text-main">Mejor para:</span> {app.mejorPara}
                        </p>
                      </div>
                    </details>
                  </div>

                  {/* Descargas */}
                  <div className="flex flex-col gap-2 min-w-[120px]">
                    {app.linkAppStore && (
                      <a
                        href={app.linkAppStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-border-soft hover:border-text-secondary text-text-main text-xs font-semibold transition-colors text-center"
                        aria-label={`Descargar ${app.nombre} en App Store`}
                      >
                        App Store
                      </a>
                    )}
                    {app.linkPlayStore && (
                      <a
                        href={app.linkPlayStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-border-soft hover:border-text-secondary text-text-main text-xs font-semibold transition-colors text-center"
                        aria-label={`Descargar ${app.nombre} en Google Play`}
                      >
                        Play Store
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-background-light py-16 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-8 pb-3 border-b border-border-soft">
            Antes de viajar
          </p>
          <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 divide-border-soft">
            {[
              {
                titulo: 'Descarga mapas offline',
                desc: 'Google Maps permite descargar el mapa de Lisboa (50-100MB). Hazlo con WiFi del hotel para tener GPS todo el día sin gastar datos.'
              },
              {
                titulo: 'WiFi gratis en Lisboa',
                desc: 'Casi todos los cafés y restaurantes tienen WiFi gratis. Los centros comerciales y algunas plazas también. Pide la contraseña al pedir.'
              },
              {
                titulo: 'SIM prepago en el aeropuerto',
                desc: 'Vodafone o MEO en el aeropuerto: 10-20€ por 10-20GB válidos 15-30 días. Más barato que roaming si vienes de fuera de la UE.'
              },
              {
                titulo: 'Lleva powerbank',
                desc: 'GPS y mapas consumen mucha batería. Una batería externa de 10.000mAh te salvará cuando estés todo el día fuera.'
              }
            ].map((tip) => (
              <div key={tip.titulo} className="border-t border-border-soft pt-5 pb-5 sm:pr-10">
                <h3 className="font-semibold text-text-main text-sm mb-1">{tip.titulo}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="bg-background-light py-12 border-t border-border-soft">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-text-secondary mb-5">Completa tu viaje</p>
          <div className="flex flex-wrap gap-6">
            {[
              { href: '/itinerarios', label: 'Itinerarios' },
              { href: '/transporte', label: 'Transporte' },
              { href: '/presupuesto', label: 'Presupuesto' },
              { href: '/info-util', label: 'Info esencial' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary hover:underline underline-offset-2"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
