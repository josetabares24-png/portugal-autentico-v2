import Image from 'next/image';
import Link from 'next/link';

export default function InfoUtilPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/eduardo-goody-0Iu7mKa1sPw-unsplash.jpg"
          alt="Lisboa práctica"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-3">Recursos gratuitos</p>
          <h1 className="font-display italic text-white text-4xl md:text-6xl leading-tight">
            Guía práctica de Lisboa
          </h1>
        </div>
      </section>

      {/* Transporte */}
      <section className="bg-background-light py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 border-t-2 border-primary pt-6">
            <h2 className="font-display italic text-text-main text-3xl md:text-4xl">Transporte</h2>
            <p className="text-text-secondary mt-1 text-sm">Cómo moverte por Lisboa</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border-t border-border-soft pt-6">
              <h3 className="font-semibold text-text-main mb-3">Desde el Aeropuerto</h3>
              <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <p><strong className="text-text-main">Metro</strong> &mdash; Línea roja directa al centro. 1.50 € aprox., 25 minutos.</p>
                <p><strong className="text-text-main">Taxi / Uber / Bolt</strong> &mdash; Taxi oficial: 15-20 €. Uber/Bolt: 10-15 €.</p>
              </div>
            </div>
            <div className="border-t border-border-soft pt-6">
              <h3 className="font-semibold text-text-main mb-3">Tarjeta Viva Viagem</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Tarjeta recargable (0.50 €). Cómprala en cualquier estación de metro. Válida para metro, tranvías, autobuses y elevadores.
              </p>
            </div>
            <div className="border-t border-border-soft pt-6">
              <h3 className="font-semibold text-text-main mb-3">Pase Diario</h3>
              <p className="text-sm font-bold text-primary mb-2">6.60 €</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Metro, bus y tranvía ilimitado durante 24 horas. Perfecto si usarás transporte público varias veces al día.
              </p>
            </div>
            <div className="border-t border-border-soft pt-6">
              <h3 className="font-semibold text-text-main mb-3">Tranvía 28</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                El tranvía icónico. Pasa por Graça, Alfama, Baixa y Estrela. Ve antes de las 10:00 para evitar aglomeraciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-5xl mx-auto px-6"><div className="border-t border-border-soft" /></div>

      {/* Dinero */}
      <section className="bg-background-light py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 border-t-2 border-border-soft pt-6">
            <h2 className="font-display italic text-text-main text-3xl md:text-4xl">Dinero y precios</h2>
            <p className="text-text-secondary mt-1 text-sm">Presupuesto y gastos típicos</p>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { rango: '50-80 €', tipo: 'Económico' },
              { rango: '100-150 €', tipo: 'Medio' },
              { rango: '200+ €', tipo: 'Confortable' },
            ].map((budget) => (
              <div key={budget.tipo} className="border-t border-border-soft pt-5 text-center">
                <p className="text-[11px] text-text-secondary uppercase tracking-widest mb-2">{budget.tipo}</p>
                <p className="text-xl md:text-2xl font-bold text-text-main">{budget.rango}</p>
                <p className="text-[11px] text-text-secondary mt-1">por persona/día</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border-t border-border-soft pt-6">
              <h3 className="font-semibold text-text-main mb-2">Moneda</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Euro (€). Tarjetas aceptadas en prácticamente todos los sitios. Lleva algo de efectivo para mercados y pequeños comercios.
              </p>
            </div>
            <div className="border-t border-border-soft pt-6">
              <h3 className="font-semibold text-text-main mb-2">Propinas</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                No son obligatorias. 5-10% si el servicio fue bueno. En cafés, redondear está bien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-5xl mx-auto px-6"><div className="border-t border-border-soft" /></div>

      {/* Clima */}
      <section className="bg-background-light py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 border-t-2 border-border-soft pt-6">
            <h2 className="font-display italic text-text-main text-3xl md:text-4xl">Clima y mejor época</h2>
            <p className="text-text-secondary mt-1 text-sm">Cuándo visitar Lisboa</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { estacion: 'Primavera', meses: 'Marzo — Mayo', temp: '15-25 °C', desc: 'La mejor época para visitar. Clima perfecto, menos turistas, precios más bajos.', recomendado: true },
              { estacion: 'Verano', meses: 'Junio — Agosto', temp: '25-35 °C', desc: 'Más caluroso y con más turistas. Playas de Cascais y Estoril perfectas.' },
              { estacion: 'Otoño', meses: 'Sept. — Nov.', temp: '15-25 °C', desc: 'Excelente opción. Clima agradable, menos gente que en verano.' },
              { estacion: 'Invierno', meses: 'Dic. — Febrero', temp: '10-15 °C', desc: 'Más económico. Lluvia frecuente pero temperaturas suaves.' },
            ].map((season) => (
              <div key={season.estacion} className={`border-t-2 pt-5 ${season.recomendado ? 'border-primary' : 'border-border-soft'}`}>
                {season.recomendado && (
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Recomendado</p>
                )}
                <h3 className="font-display italic text-text-main text-xl mb-1">{season.estacion}</h3>
                <p className="text-xs text-text-secondary uppercase tracking-wide mb-3">{season.meses} &mdash; {season.temp}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{season.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-5xl mx-auto px-6"><div className="border-t border-border-soft" /></div>

      {/* Tips esenciales */}
      <section className="bg-background-light py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 border-t-2 border-border-soft pt-6">
            <h2 className="font-display italic text-text-main text-3xl md:text-4xl">Tips esenciales</h2>
            <p className="text-text-secondary mt-1 text-sm">Lo que necesitas saber antes de viajar</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {[
              { titulo: 'Calzado cómodo', desc: 'Lisboa tiene muchas cuestas y calles empedradas. Zapatillas deportivas son esenciales.' },
              { titulo: 'Enchufes', desc: 'Tipo C/F europeos (2 clavijas redondas). 220V. Trae adaptador si vienes de UK o USA.' },
              { titulo: 'Agua potable', desc: 'Agua del grifo totalmente segura. Puedes beberla sin problemas en toda la ciudad.' },
              { titulo: 'Seguridad', desc: 'Ciudad muy segura. Atento a carteristas en zonas turísticas (Tranvía 28, Baixa).' },
              { titulo: 'Horarios', desc: 'Tiendas: 10:00-19:00. Comida: 12:00-15:00. Cena: 19:00-23:00.' },
              { titulo: 'WiFi y SIM', desc: 'WiFi gratis en cafés. SIM turísticas en aeropuerto: Vodafone/MEO (10-20 €).' },
              { titulo: 'Idioma', desc: 'Portugués. El español se entiende bastante bien. Inglés común en zonas turísticas.' },
              { titulo: 'Pagos', desc: 'Tarjetas ampliamente aceptadas. Contactless disponible en casi todos los sitios.' },
              { titulo: 'Salud', desc: 'Tarjeta Sanitaria Europea válida. Farmacias (cruz verde) abundantes en toda la ciudad.' },
            ].map((tip) => (
              <div key={tip.titulo} className="border-t border-border-soft pt-5">
                <h3 className="font-semibold text-text-main text-sm mb-2">{tip.titulo}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-white text-2xl md:text-3xl mb-4">
            ¿Listo para explorar Lisboa?
          </h2>
          <p className="text-white/60 mb-8 text-sm">
            Itinerarios completos con restaurantes verificados, GPS y tips de local.
          </p>
          <Link
            href="/itinerarios"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors text-sm"
          >
            Ver itinerarios
          </Link>
          <p className="text-white/30 text-xs mt-4">Desde 1.99 € · Descarga inmediata · Actualizados 2026</p>
        </div>
      </section>
    </main>
  );
}
