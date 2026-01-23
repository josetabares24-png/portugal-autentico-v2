'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TransportePage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const transportOptions = [
    {
      type: 'aeropuerto',
      name: 'Desde el Aeropuerto',
      options: [
        {
          method: 'Metro (Línea Roja)',
          duration: '25-30 min',
          price: '1.65€',
          frequency: 'Cada 6-9 min',
          details: 'Estación Aeroporto → Alameda (cambio a Línea Verde) → Centro',
          bestFor: 'Económico y rápido. Ideal si vas a Baixa, Chiado, Marquês de Pombal'
        },
        {
          method: 'Aerobus',
          duration: '30-45 min',
          price: '4.00€',
          frequency: 'Cada 20 min',
          details: 'Línea 1: Centro | Línea 2: Zona financiera y hoteles',
          bestFor: 'Directo a hoteles principales. Perfecto con maletas grandes'
        },
        {
          method: 'Taxi / Uber / Bolt',
          duration: '15-25 min',
          price: '15-25€',
          frequency: 'Inmediato',
          details: 'Precio fijo en taxi. Uber/Bolt suele ser 10-20% más barato',
          bestFor: 'Comodidad, grupos 3-4 personas, llegada nocturna'
        },
        {
          method: 'Transfer privado',
          duration: '20 min',
          price: '30-40€',
          frequency: 'Reserva previa',
          details: 'Conductor te espera con cartel en Llegadas',
          bestFor: 'Familias, grupos grandes, viajeros business'
        }
      ]
    },
    {
      type: 'city',
      name: 'Moverse por la Ciudad',
      options: [
        {
          method: 'Metro',
          duration: 'Variable',
          price: '1.65€ viaje',
          frequency: 'Cada 5-7 min',
          details: '4 líneas (Azul, Amarilla, Verde, Roja). Funciona 6:30 - 1:00',
          bestFor: 'Distancias largas. Rápido y fiable. Evita tráfico'
        },
        {
          method: 'Tranvía 28',
          duration: '40 min completo',
          price: '3.00€',
          frequency: 'Cada 10 min',
          details: 'Martim Moniz → Graça → Alfama → Baixa → Estrela → Campo Ourique',
          bestFor: 'Experiencia turística. Barrios históricos. Evita 10:00-16:00 (lleno)'
        },
        {
          method: 'Tranvía 15E',
          duration: '25 min',
          price: '3.00€',
          frequency: 'Cada 12 min',
          details: 'Praça da Figueira → Belém (Torre, Monasterio, MAAT)',
          bestFor: 'Ir a Belém. Moderno y espacioso. Alternativa al 15'
        },
        {
          method: 'Autobus',
          duration: 'Variable',
          price: '2.00€',
          frequency: '10-20 min',
          details: 'Red extensa. Útiles: 737 (Belém), 794 (Oriente), 714 (Torre)',
          bestFor: 'Zonas sin metro. Líneas nocturnas (prefijo "2")'
        },
        {
          method: 'Tuk-tuk',
          duration: 'Variable',
          price: '40-60€/hora',
          frequency: 'Inmediato',
          details: 'Tours personalizados por Alfama, Castelo, miradores',
          bestFor: 'Grupos pequeños, personas con movilidad reducida, fotos'
        }
      ]
    },
    {
      type: 'trains',
      name: 'Trenes Regionales',
      stations: [
        {
          station: 'Rossio',
          destination: 'Sintra',
          duration: '40 min',
          price: '2.30€',
          frequency: 'Cada 20 min',
          details: 'Centro histórico → Palacios de Sintra. Compra ida y vuelta (4.60€)',
          bestFor: 'Excursión a Sintra. Salir antes de las 9:00 para evitar colas'
        },
        {
          station: 'Oriente',
          destination: 'Sintra (alternativa)',
          duration: '47 min',
          price: '2.30€',
          frequency: 'Cada 20 min',
          details: 'Desde Parque das Nações. Conexión con Metro Línea Roja',
          bestFor: 'Si te alojas en zona Oriente o Aeroporto'
        },
        {
          station: 'Cais do Sodré',
          destination: 'Cascais',
          duration: '35 min',
          price: '2.30€',
          frequency: 'Cada 20 min',
          details: 'Ruta costera: Belém → Estoril → Cascais. Vistas al mar',
          bestFor: 'Playas, casino Estoril, pueblo pesquero Cascais'
        },
        {
          station: 'Cais do Sodré',
          destination: 'Almada / Cristo Rei',
          duration: '10 min ferry',
          price: '1.30€',
          frequency: 'Cada 10 min',
          details: 'Ferry + Bus 101 al Cristo Rei. Vistas panorámicas de Lisboa',
          bestFor: 'Ver Lisboa desde el otro lado del río. Atardecer espectacular'
        },
        {
          station: 'Santa Apolónia / Oriente',
          destination: 'Porto',
          duration: '2h 40min',
          price: '25-35€',
          frequency: 'Cada hora',
          details: 'Alfa Pendular (rápido) o Intercidades (económico)',
          bestFor: 'Excursión de un día o escapada de fin de semana a Porto'
        }
      ]
    }
  ];

  const passesPrices = [
    { pass: 'Viaje sencillo (Zapping)', price: '1.35€ metro + 0.50€ tarjeta', validity: '1 viaje', bestFor: 'Viajes ocasionales' },
    { pass: '24 horas', price: '6.80€', validity: '24h ilimitado', bestFor: '1 día intenso de turismo' },
    { pass: 'Lisboa Card 24h', price: '21€', validity: '24h + museos gratis', bestFor: 'Muchos museos + transporte' },
    { pass: 'Lisboa Card 48h', price: '35€', validity: '48h + museos gratis', bestFor: 'Fin de semana cultural' },
    { pass: 'Lisboa Card 72h', price: '44€', validity: '72h + museos gratis', bestFor: 'Estancia completa 3+ días' },
    { pass: 'Viva Viagem (recargable)', price: '0.50€ (una vez)', validity: 'Permanente', bestFor: 'Residentes y estancias largas' },
  ];

  const faqItems = [
    {
      question: '¿Cuál es la mejor forma de ir del aeropuerto al centro?',
      answer: 'El metro (línea roja) es la opción más rápida y económica. Taxi/Uber conviene si vas con maletas o llegas tarde.',
    },
    {
      question: '¿Conviene comprar el pase de 24 horas?',
      answer: 'Sí si vas a hacer más de 4-5 viajes en un día. Sale más barato que billetes sueltos.',
    },
    {
      question: '¿Qué tranvía usar para ir a Belém?',
      answer: 'El tranvía 15E es el más práctico para llegar a Belém desde el centro.',
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main id="main-content" className="min-h-screen bg-background-light">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/tranvia-28.jpg"
            alt="Tranvía 28 Lisboa"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">train</span>
            <span className="text-sm font-semibold tracking-wide">Guía completa de transporte</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            Transporte en<br />
            <span className="text-accent">Lisboa</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Todo lo que necesitas saber sobre metro, tranvías, trenes y tarjetas de transporte.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span>Actualizado 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">verified</span>
              <span>Por locales</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400">map</span>
              <span>100% gratis</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                selectedTab === 'overview'
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              📍 Visión General
            </button>
            <button
              onClick={() => setSelectedTab('airport')}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                selectedTab === 'airport'
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              ✈️ Desde el Aeropuerto
            </button>
            <button
              onClick={() => setSelectedTab('city')}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                selectedTab === 'city'
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🚇 Por la Ciudad
            </button>
            <button
              onClick={() => setSelectedTab('trains')}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                selectedTab === 'trains'
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🚂 Trenes Regionales
            </button>
            <button
              onClick={() => setSelectedTab('passes')}
              className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                selectedTab === 'passes'
                  ? 'bg-primary text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              🎫 Tarjetas y Precios
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Overview Tab */}
          {selectedTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Lo más importante que debes saber</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Lisboa tiene un sistema de transporte público eficiente y económico. Esta guía te ayudará a moverte como un local.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                  <span className="material-symbols-outlined text-blue-600 text-5xl mb-4">credit_card</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Tarjeta Viva Viagem (Obligatoria)</h3>
                  <p className="text-slate-700 mb-4">
                    Necesitas esta tarjeta recargable para usar metro, tranvías y autobuses. Cuesta <strong>0.50€</strong> (una sola vez) y la compras en cualquier estación de metro.
                  </p>
                  <div className="bg-white/70 rounded-xl p-4 text-sm">
                    <strong>Dónde comprar:</strong> Máquinas automáticas en estaciones de metro (aceptan tarjeta y efectivo)
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200">
                  <span className="material-symbols-outlined text-orange-600 text-5xl mb-4">savings</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Ahorra con el Pase de 24h</h3>
                  <p className="text-slate-700 mb-4">
                    Si vas a hacer más de 5 viajes en un día, compra el <strong>pase de 24 horas por 6.80€</strong>. Viajes ilimitados en metro, tranvías y autobuses.
                  </p>
                  <div className="bg-white/70 rounded-xl p-4 text-sm">
                    <strong>Cuándo conviene:</strong> Días intensos de turismo visitando varios barrios
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
                  <span className="material-symbols-outlined text-green-600 text-5xl mb-4">directions_railway</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Estaciones Clave</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li><strong>Rossio:</strong> Trenes a Sintra</li>
                    <li><strong>Cais do Sodré:</strong> Trenes a Cascais y Ferry a Almada</li>
                    <li><strong>Oriente:</strong> Trenes de larga distancia (Porto, Coimbra)</li>
                    <li><strong>Santa Apolónia:</strong> Trenes internacionales</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
                  <span className="material-symbols-outlined text-purple-600 text-5xl mb-4">lightbulb</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Consejos Pro</h3>
                  <ul className="text-slate-700 space-y-2 text-sm">
                    <li>✅ Valida tu tarjeta al entrar Y al salir en el metro</li>
                    <li>✅ Tranvía 28: evita 10:00-16:00 (masificado)</li>
                    <li>✅ Apps útiles: <strong>Moovit, Google Maps</strong></li>
                    <li>✅ Metro cierra a la 1:00 AM (autobuses nocturnos disponibles)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Airport Tab */}
          {selectedTab === 'airport' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Desde el Aeropuerto al Centro</h2>
                <p className="text-lg text-slate-600 mb-8">
                  El aeropuerto está a solo 7 km del centro. Estas son todas tus opciones ordenadas por precio.
                </p>
              </div>

              <div className="space-y-4">
                {transportOptions[0]?.options?.map((option, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-primary transition-all">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-slate-900">{option.method}</h3>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                            {option.price}
                          </span>
                        </div>
                        <p className="text-slate-600 mb-3">{option.details}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <span>⏱️ {option.duration}</span>
                          <span>🔄 {option.frequency}</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 md:w-64">
                        <p className="text-xs font-bold text-blue-900 mb-1">MEJOR PARA:</p>
                        <p className="text-sm text-blue-800">{option.bestFor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommendation Box */}
              <div className="bg-gradient-to-r from-primary to-orange-500 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-5xl">recommend</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Nuestra Recomendación</h3>
                    <p className="text-white/90 mb-4">
                      <strong>Metro Línea Roja</strong> es la mejor opción relación calidad-precio para el 90% de viajeros.
                      Rápido, económico y te deja en pleno centro. Solo toma <strong>Uber/Bolt</strong> si llegas tarde por la noche (después de las 00:00) o con muchas maletas.
                    </p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-sm">
                      <strong>💡 Tip Pro:</strong> Compra la tarjeta Viva Viagem en las máquinas del metro del aeropuerto y carga el pase de 24h (6.80€). Así ya tienes transporte ilimitado para tu primer día.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* City Tab */}
          {selectedTab === 'city' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Transporte dentro de Lisboa</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Todas las opciones para moverte por los barrios de Lisboa.
                </p>
              </div>

              <div className="space-y-4">
                {transportOptions[1]?.options?.map((option, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-primary transition-all">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-slate-900">{option.method}</h3>
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                            {option.price}
                          </span>
                        </div>
                        <p className="text-slate-600 mb-3">{option.details}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <span>⏱️ {option.duration}</span>
                          <span>🔄 {option.frequency}</span>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 md:w-64">
                        <p className="text-xs font-bold text-green-900 mb-1">MEJOR PARA:</p>
                        <p className="text-sm text-green-800">{option.bestFor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Reference */}
              <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200">
                <div className="flex items-start gap-4 mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl">map</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Mapa del Metro de Lisboa</h3>
                    <p className="text-slate-600 mb-4">
                      4 líneas de colores: <strong className="text-blue-600">Azul</strong>, <strong className="text-yellow-600">Amarilla</strong>, <strong className="text-green-600">Verde</strong> y <strong className="text-red-600">Roja</strong>
                    </p>
                  </div>
                </div>

                {/* Placeholder for metro map image */}
                <div className="bg-white rounded-xl p-8 border-2 border-dashed border-slate-300 text-center">
                  <span className="material-symbols-outlined text-slate-400 text-6xl mb-4">subway</span>
                  <p className="text-slate-500 text-sm">
                    📸 <strong>Foto Placeholder:</strong> Mapa oficial del metro de Lisboa en alta resolución (1200x800px)<br/>
                    Descárgalo en: <a href="https://www.metrolisboa.pt/viajar/diagrams-and-maps/" target="_blank" rel="noopener" className="text-primary hover:underline">metrolisboa.pt</a>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Trains Tab */}
          {selectedTab === 'trains' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Trenes para Excursiones</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Conexiones esenciales para visitar Sintra, Cascais y otras ciudades desde Lisboa.
                </p>
              </div>

              {/* Stations Table */}
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-primary to-orange-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Estación</th>
                      <th className="px-6 py-4 text-left font-bold">Destino</th>
                      <th className="px-6 py-4 text-left font-bold">Duración</th>
                      <th className="px-6 py-4 text-left font-bold">Precio</th>
                      <th className="px-6 py-4 text-left font-bold">Frecuencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transportOptions[2]?.stations?.map((station, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-900">{station.station}</td>
                        <td className="px-6 py-4 text-slate-700">{station.destination}</td>
                        <td className="px-6 py-4 text-slate-600">{station.duration}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                            {station.price}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{station.frequency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Detailed Info Cards */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {transportOptions[2]?.stations?.map((station, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 border-2 border-slate-200">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="material-symbols-outlined text-primary text-3xl">train</span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{station.station} → {station.destination}</h3>
                        <p className="text-sm text-slate-500">{station.duration} · {station.price}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-3">{station.details}</p>
                    <div className="bg-green-50 rounded-xl p-3">
                      <p className="text-xs font-bold text-green-900 mb-1">RECOMENDADO PARA:</p>
                      <p className="text-sm text-green-800">{station.bestFor}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pro Tip for Sintra */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-5xl">castle</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Tips para Sintra</h3>
                    <ul className="space-y-2 text-white/90">
                      <li>🕐 <strong>Sal temprano:</strong> Trenes desde las 6:47. Llega antes de las 9:00 para evitar multitudes</li>
                      <li>🎟️ <strong>Compra ida y vuelta:</strong> 4.60€ en total (ahorra tiempo)</li>
                      <li>🚌 <strong>Bus 434:</strong> Circuito por los palacios principales (6.90€, sale cada 15 min)</li>
                      <li>📱 <strong>Reserva online:</strong> Palacio da Pena y Quinta da Regaleira se llenan (compra entradas 1-2 días antes)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Passes Tab */}
          {selectedTab === 'passes' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Tarjetas y Precios</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Comparativa completa de todas las opciones de tarjetas de transporte.
                </p>
              </div>

              {/* Pricing Table */}
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-2xl overflow-hidden shadow-xl">
                  <thead className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Tipo de Pase</th>
                      <th className="px-6 py-4 text-left font-bold">Precio</th>
                      <th className="px-6 py-4 text-left font-bold">Validez</th>
                      <th className="px-6 py-4 text-left font-bold">Mejor para</th>
                    </tr>
                  </thead>
                  <tbody>
                    {passesPrices.map((pass, index) => (
                      <tr key={index} className={`border-b border-slate-100 hover:bg-primary/5 transition-colors ${pass.pass.includes('Lisboa Card') ? 'bg-orange-50' : ''}`}>
                        <td className="px-6 py-4 font-bold text-slate-900">{pass.pass}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-primary text-white text-sm font-bold rounded-full">
                            {pass.price}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-700">{pass.validity}</td>
                        <td className="px-6 py-4 text-slate-600">{pass.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Lisboa Card Highlight */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-orange-600 text-5xl">confirmation_number</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">¿Vale la pena la Lisboa Card?</h3>
                    <p className="text-slate-700 mb-4">
                      La Lisboa Card incluye transporte ilimitado + entrada gratis a más de 30 museos y monumentos.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white rounded-xl p-4">
                        <p className="font-bold text-green-900 mb-2">✅ VALE LA PENA SI...</p>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Vas a visitar 3+ museos/monumentos</li>
                          <li>• Harás muchos viajes en transporte</li>
                          <li>• Te gustan los museos y cultura</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-xl p-4">
                        <p className="font-bold text-red-900 mb-2">❌ NO VALE LA PENA SI...</p>
                        <ul className="text-sm text-slate-700 space-y-1">
                          <li>• Solo quieres ver barrios y callejear</li>
                          <li>• Prefieres experiencias gastronómicas</li>
                          <li>• Viajas con presupuesto ajustado</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-600 text-white rounded-xl p-4">
                      <p className="font-bold mb-2">💡 Nuestra Recomendación</p>
                      <p className="text-sm text-white/90">
                        Para 2-3 días en Lisboa, es mejor comprar el <strong>pase de 24h (6.80€)</strong> para transporte y pagar entradas individuales.
                        Solo compra Lisboa Card si vas a entrar a Torre de Belém (6€) + Monasterio dos Jerónimos (10€) + 2-3 museos más.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Buy */}
              <div className="bg-white rounded-2xl p-8 border-2 border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">shopping_cart</span>
                  Dónde comprar las tarjetas
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-slate-900 mb-2">Viva Viagem</p>
                    <p className="text-sm text-slate-600">Máquinas automáticas en estaciones de metro. Aceptan monedas, billetes y tarjeta.</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-slate-900 mb-2">Lisboa Card</p>
                    <p className="text-sm text-slate-600">Ask Me Lisboa (aeropuerto), oficinas de turismo, o compra online en <a href="https://www.lisboacard.org" target="_blank" rel="noopener" className="text-primary hover:underline">lisboacard.org</a></p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="font-bold text-slate-900 mb-2">Taquillas</p>
                    <p className="text-sm text-slate-600">Estaciones grandes (Cais do Sodré, Oriente, Santa Apolónia) tienen taquillas con atención personal.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background-cream">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">
            Preguntas frecuentes sobre transporte en Lisboa
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-700">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-orange-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <span className="material-symbols-outlined text-white text-7xl mb-6 inline-block">map</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            ¿Ya sabes cómo moverte?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ahora descubre nuestras Guías Digitales Interactivas con itinerarios completos, restaurantes locales y todos los secretos de Lisboa
          </p>
          <Link
            href="/itinerarios"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">explore</span>
            Ver Guías Premium
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <p className="text-white/80 text-sm mt-6">✅ Desde 1.99€ · ✅ Acceso inmediato · ✅ Garantía 48 horas</p>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
