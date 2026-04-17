'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { isFreeAccessActive } from '@/lib/guide-config';

const transportOptions = [
  {
    type: 'aeropuerto',
    name: 'Desde el Aeropuerto',
    options: [
      { method: 'Metro (Línea Roja)', duration: '25-30 min', price: '1.65 €', frequency: 'Cada 6-9 min', details: 'Estación Aeroporto → Alameda (cambio a Línea Verde) → Centro', bestFor: 'Económico y rápido. Ideal si vas a Baixa, Chiado, Marquês de Pombal' },
      { method: 'Aerobus', duration: '30-45 min', price: '4.00 €', frequency: 'Cada 20 min', details: 'Línea 1: Centro | Línea 2: Zona financiera y hoteles', bestFor: 'Directo a hoteles principales. Perfecto con maletas grandes' },
      { method: 'Taxi / Uber / Bolt', duration: '15-25 min', price: '15-25 €', frequency: 'Inmediato', details: 'Precio fijo en taxi. Uber/Bolt suele ser 10-20% más barato', bestFor: 'Comodidad, grupos 3-4 personas, llegada nocturna' },
      { method: 'Transfer privado', duration: '20 min', price: '30-40 €', frequency: 'Reserva previa', details: 'Conductor te espera con cartel en Llegadas', bestFor: 'Familias, grupos grandes, viajeros business' },
    ],
  },
  {
    type: 'city',
    name: 'Por la Ciudad',
    options: [
      { method: 'Metro', duration: 'Variable', price: '1.65 € / viaje', frequency: 'Cada 5-7 min', details: '4 líneas (Azul, Amarilla, Verde, Roja). Funciona 6:30–1:00', bestFor: 'Distancias largas. Rápido y fiable. Evita tráfico' },
      { method: 'Tranvía 28', duration: '40 min completo', price: '3.00 €', frequency: 'Cada 10 min', details: 'Martim Moniz → Graça → Alfama → Baixa → Estrela → Campo Ourique', bestFor: 'Experiencia turística. Barrios históricos. Evita 10:00-16:00 (lleno)' },
      { method: 'Tranvía 15E', duration: '25 min', price: '3.00 €', frequency: 'Cada 12 min', details: 'Praça da Figueira → Belém (Torre, Monasterio, MAAT)', bestFor: 'Ir a Belém. Moderno y espacioso' },
      { method: 'Autobús', duration: 'Variable', price: '2.00 €', frequency: '10-20 min', details: 'Red extensa. Útiles: 737 (Belém), 794 (Oriente), 714 (Torre)', bestFor: 'Zonas sin metro. Líneas nocturnas (prefijo "2")' },
      { method: 'Tuk-tuk', duration: 'Variable', price: '40-60 € / hora', frequency: 'Inmediato', details: 'Tours personalizados por Alfama, Castelo, miradores', bestFor: 'Grupos pequeños, personas con movilidad reducida, fotos' },
    ],
  },
  {
    type: 'trains',
    name: 'Trenes Regionales',
    stations: [
      { station: 'Rossio', destination: 'Sintra', duration: '40 min', price: '2.30 €', frequency: 'Cada 20 min', details: 'Centro histórico → Palacios de Sintra. Ida y vuelta: 4.60 €', bestFor: 'Excursión a Sintra. Salir antes de las 9:00 para evitar colas' },
      { station: 'Oriente', destination: 'Sintra (alt.)', duration: '47 min', price: '2.30 €', frequency: 'Cada 20 min', details: 'Desde Parque das Nações. Conexión con Metro Línea Roja', bestFor: 'Si te alojas en zona Oriente o Aeroporto' },
      { station: 'Cais do Sodré', destination: 'Cascais', duration: '35 min', price: '2.30 €', frequency: 'Cada 20 min', details: 'Ruta costera: Belém → Estoril → Cascais. Vistas al mar', bestFor: 'Playas, casino Estoril, pueblo pesquero Cascais' },
      { station: 'Cais do Sodré', destination: 'Almada / Cristo Rei', duration: '10 min ferry', price: '1.30 €', frequency: 'Cada 10 min', details: 'Ferry + Bus 101 al Cristo Rei. Vistas panorámicas', bestFor: 'Ver Lisboa desde el otro lado del río. Atardecer espectacular' },
      { station: 'Oriente', destination: 'Porto', duration: '2h 40min', price: '25-35 €', frequency: 'Cada hora', details: 'Alfa Pendular (rápido) o Intercidades (económico)', bestFor: 'Excursión de un día o escapada de fin de semana' },
    ],
  },
];

const passesPrices = [
  { pass: 'Viaje sencillo (Zapping)', price: '1.35 € + 0.50 € tarjeta', validity: '1 viaje', bestFor: 'Viajes ocasionales' },
  { pass: 'Pase 24 horas', price: '6.80 €', validity: '24h ilimitado', bestFor: '1 día intenso de turismo' },
  { pass: 'Lisboa Card 24h', price: '21 €', validity: '24h + museos gratis', bestFor: 'Muchos museos + transporte' },
  { pass: 'Lisboa Card 48h', price: '35 €', validity: '48h + museos gratis', bestFor: 'Fin de semana cultural' },
  { pass: 'Lisboa Card 72h', price: '44 €', validity: '72h + museos gratis', bestFor: 'Estancia completa 3+ días' },
  { pass: 'Viva Viagem (recargable)', price: '0.50 € (una vez)', validity: 'Permanente', bestFor: 'Residentes y estancias largas' },
];

const faqItems = [
  { question: '¿Cuál es la mejor forma de ir del aeropuerto al centro?', answer: 'El metro (línea roja) es la opción más rápida y económica. Taxi/Uber conviene si vas con maletas o llegas tarde.' },
  { question: '¿Conviene comprar el pase de 24 horas?', answer: 'Sí si vas a hacer más de 4-5 viajes en un día. Sale más barato que billetes sueltos.' },
  { question: '¿Qué tranvía usar para ir a Belém?', answer: 'El tranvía 15E es el más práctico para llegar a Belém desde el centro.' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const tabs = [
  { id: 'overview', label: 'General' },
  { id: 'airport', label: 'Aeropuerto' },
  { id: 'city', label: 'Ciudad' },
  { id: 'trains', label: 'Trenes' },
  { id: 'passes', label: 'Tarjetas' },
];

export default function TransportePage() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const isFree = isFreeAccessActive();

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/tranvia-28.jpg"
          alt="Tranvía 28 de Lisboa"
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-3">Guía práctica</p>
          <h1 className="font-display italic text-white text-4xl md:text-6xl leading-tight">
            Transporte en Lisboa
          </h1>
        </div>
      </section>

      {/* Tabs */}
      <nav className="bg-background-light border-b border-border-soft sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8 overflow-x-auto py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`text-sm whitespace-nowrap transition-colors pb-1 ${
                  selectedTab === tab.id
                    ? 'text-primary font-semibold border-b-2 border-primary'
                    : 'text-text-secondary hover:text-text-main'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenido */}
      <section className="bg-background-light py-20">
        <div className="max-w-6xl mx-auto px-6">

          {selectedTab === 'overview' && (
            <div>
              <div className="mb-10 border-t-2 border-primary pt-6">
                <h2 className="font-display italic text-text-main text-3xl md:text-4xl mb-2">Lo más importante</h2>
                <p className="text-text-secondary text-sm">Lo que necesitas saber antes de moverte por Lisboa</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-t border-border-soft pt-6">
                  <h3 className="font-semibold text-text-main mb-3">Tarjeta Viva Viagem</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">
                    Necesitas esta tarjeta recargable para usar metro, tranvías y autobuses. Cuesta <strong>0.50 €</strong> y se compra en cualquier estación de metro.
                  </p>
                  <p className="text-xs text-text-secondary">Máquinas automáticas en estaciones (tarjeta y efectivo)</p>
                </div>
                <div className="border-t border-border-soft pt-6">
                  <h3 className="font-semibold text-text-main mb-3">Pase de 24 horas</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-2">
                    Si vas a hacer más de 5 viajes, el pase de <strong>6.80 €</strong> sale a cuenta. Viajes ilimitados en metro, tranvías y autobuses.
                  </p>
                  <p className="text-xs text-text-secondary">Ideal para días intensos de turismo</p>
                </div>
                <div className="border-t border-border-soft pt-6">
                  <h3 className="font-semibold text-text-main mb-3">Estaciones clave</h3>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li><strong className="text-text-main">Rossio</strong> — Trenes a Sintra</li>
                    <li><strong className="text-text-main">Cais do Sodré</strong> — Trenes a Cascais y Ferry a Almada</li>
                    <li><strong className="text-text-main">Oriente</strong> — Trenes de larga distancia (Porto, Coimbra)</li>
                    <li><strong className="text-text-main">Santa Apolónia</strong> — Trenes internacionales</li>
                  </ul>
                </div>
                <div className="border-t border-border-soft pt-6">
                  <h3 className="font-semibold text-text-main mb-3">Consejos básicos</h3>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>Valida tu tarjeta al entrar y al salir en el metro</li>
                    <li>Tranvía 28: evita 10:00-16:00 (masificado)</li>
                    <li>Apps útiles: Moovit, Google Maps</li>
                    <li>Metro cierra a la 1:00 (autobuses nocturnos disponibles)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'airport' && (
            <div>
              <div className="mb-10 border-t-2 border-primary pt-6">
                <h2 className="font-display italic text-text-main text-3xl md:text-4xl mb-2">Desde el aeropuerto</h2>
                <p className="text-text-secondary text-sm">El aeropuerto está a 7 km del centro. Todas las opciones ordenadas por precio.</p>
              </div>
              <div className="space-y-0">
                {(transportOptions[0].options ?? []).map((option, i) => (
                  <div key={i} className="border-t border-border-soft py-7 grid md:grid-cols-[1fr,auto] gap-6 items-start">
                    <div>
                      <div className="flex items-baseline gap-4 mb-2">
                        <h3 className="font-semibold text-text-main">{option.method}</h3>
                        <span className="text-sm font-bold text-primary">{option.price}</span>
                      </div>
                      <p className="text-text-secondary text-sm mb-2">{option.details}</p>
                      <p className="text-xs text-text-secondary">{option.duration} &middot; {option.frequency}</p>
                    </div>
                    <div className="text-sm text-text-secondary md:max-w-xs">
                      <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Mejor para</p>
                      <p>{option.bestFor}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-t-2 border-primary pt-6">
                <h3 className="font-semibold text-text-main mb-3">Nuestra recomendación</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  El <strong>metro (Línea Roja)</strong> es la mejor opción para el 90% de viajeros. Rápido, económico y te deja en el centro. Usa Uber/Bolt si llegas después de medianoche o con muchas maletas. Compra la Viva Viagem en el aeropuerto y carga el pase de 24h (6.80 €) para tener transporte ilimitado tu primer día.
                </p>
              </div>
            </div>
          )}

          {selectedTab === 'city' && (
            <div>
              <div className="mb-10 border-t-2 border-primary pt-6">
                <h2 className="font-display italic text-text-main text-3xl md:text-4xl mb-2">Por la ciudad</h2>
                <p className="text-text-secondary text-sm">Todas las opciones para moverte entre barrios.</p>
              </div>
              <div className="space-y-0">
                {(transportOptions[1].options ?? []).map((option, i) => (
                  <div key={i} className="border-t border-border-soft py-7 grid md:grid-cols-[1fr,auto] gap-6 items-start">
                    <div>
                      <div className="flex items-baseline gap-4 mb-2">
                        <h3 className="font-semibold text-text-main">{option.method}</h3>
                        <span className="text-sm font-bold text-primary">{option.price}</span>
                      </div>
                      <p className="text-text-secondary text-sm mb-2">{option.details}</p>
                      <p className="text-xs text-text-secondary">{option.duration} &middot; {option.frequency}</p>
                    </div>
                    <div className="text-sm text-text-secondary md:max-w-xs">
                      <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Mejor para</p>
                      <p>{option.bestFor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'trains' && (
            <div>
              <div className="mb-10 border-t-2 border-primary pt-6">
                <h2 className="font-display italic text-text-main text-3xl md:text-4xl mb-2">Trenes regionales</h2>
                <p className="text-text-secondary text-sm">Excursiones desde Lisboa a Sintra, Cascais, Porto y más.</p>
              </div>
              <div className="space-y-0">
                {transportOptions[2].stations!.map((station, i) => (
                  <div key={i} className="border-t border-border-soft py-7 grid md:grid-cols-[1fr,auto] gap-6 items-start">
                    <div>
                      <div className="flex items-baseline gap-4 mb-2">
                        <h3 className="font-semibold text-text-main">{station.station} → {station.destination}</h3>
                        <span className="text-sm font-bold text-primary">{station.price}</span>
                      </div>
                      <p className="text-text-secondary text-sm mb-2">{station.details}</p>
                      <p className="text-xs text-text-secondary">{station.duration} &middot; {station.frequency}</p>
                    </div>
                    <div className="text-sm text-text-secondary md:max-w-xs">
                      <p className="text-xs uppercase tracking-widest text-text-secondary mb-1">Mejor para</p>
                      <p>{station.bestFor}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-t border-border-soft pt-6">
                <h3 className="font-semibold text-text-main mb-3">Tips para Sintra</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>Sal temprano: primeros trenes desde las 6:47. Llega antes de las 9:00.</li>
                  <li>Compra ida y vuelta: 4.60 € (ahorra tiempo en taquilla).</li>
                  <li>Bus 434: circuito por los palacios principales (6.90 €, cada 15 min).</li>
                  <li>Reserva online: Palacio da Pena y Quinta da Regaleira se llenan — compra con 1-2 días de antelación.</li>
                </ul>
              </div>
            </div>
          )}

          {selectedTab === 'passes' && (
            <div>
              <div className="mb-10 border-t-2 border-primary pt-6">
                <h2 className="font-display italic text-text-main text-3xl md:text-4xl mb-2">Tarjetas y precios</h2>
                <p className="text-text-secondary text-sm">Comparativa de todas las opciones de transporte.</p>
              </div>
              <div className="overflow-x-auto mb-12">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-text-main">
                      <th className="text-left pb-3 font-semibold text-text-main">Tipo</th>
                      <th className="text-left pb-3 font-semibold text-text-main">Precio</th>
                      <th className="text-left pb-3 font-semibold text-text-main hidden md:table-cell">Validez</th>
                      <th className="text-left pb-3 font-semibold text-text-main hidden md:table-cell">Mejor para</th>
                    </tr>
                  </thead>
                  <tbody>
                    {passesPrices.map((pass, i) => (
                      <tr key={i} className="border-b border-border-soft">
                        <td className="py-4 text-text-main font-medium">{pass.pass}</td>
                        <td className="py-4 text-primary font-bold">{pass.price}</td>
                        <td className="py-4 text-text-secondary hidden md:table-cell">{pass.validity}</td>
                        <td className="py-4 text-text-secondary hidden md:table-cell">{pass.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="border-t border-border-soft pt-8">
                <h3 className="font-semibold text-text-main mb-3">¿Vale la pena la Lisboa Card?</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  La Lisboa Card incluye transporte ilimitado + entrada a más de 30 museos. Vale la pena si vas a visitar 3+ museos o monumentos (Torre de Belém 6 €, Monasterio dos Jerónimos 10 €...). Para una estancia normal de 2-3 días, es mejor el pase de 24h (6.80 €) y pagar entradas sueltas.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  {[
                    { titulo: 'Viva Viagem', desc: 'Máquinas automáticas en estaciones de metro. Aceptan monedas, billetes y tarjeta.' },
                    { titulo: 'Lisboa Card', desc: 'Ask Me Lisboa (aeropuerto), oficinas de turismo o en lisboacard.org.' },
                    { titulo: 'Taquillas', desc: 'Cais do Sodré, Oriente y Santa Apolónia tienen taquillas con atención personal.' },
                  ].map((item) => (
                    <div key={item.titulo} className="border-t border-border-soft pt-4">
                      <h4 className="font-semibold text-text-main text-sm mb-1">{item.titulo}</h4>
                      <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background-light py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-t border-border-soft pt-8 mb-8">
            <h2 className="font-display italic text-text-main text-2xl md:text-3xl">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-0">
            {faqItems.map((item) => (
              <div key={item.question} className="border-t border-border-soft py-6">
                <h3 className="font-semibold text-text-main text-sm mb-2">{item.question}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-white text-2xl md:text-3xl mb-4">
            ¿Ya sabes cómo moverte?
          </h2>
          <p className="text-white/60 mb-8 text-sm leading-relaxed">
            Ahora descubre nuestros itinerarios completos con restaurantes locales, coordenadas GPS y todos los secretos de Lisboa.
          </p>
          <Link
            href="/itinerarios"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors text-sm"
          >
            {isFree ? 'Ver guías gratis' : 'Ver guías'}
          </Link>
          <p className="text-white/30 text-xs mt-4">
            {isFree ? 'Acceso gratuito · Sin registro · Actualizadas 2026' : 'Desde 1.99 € · Acceso inmediato · Garantía 48h'}
          </p>
        </div>
      </section>
    </main>
  );
}
