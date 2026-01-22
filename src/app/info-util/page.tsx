import Image from 'next/image';
import Link from 'next/link';

export default function InfoUtilPage() {
  return (
    <main className="bg-background-light">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/eduardo-goody-0Iu7mKa1sPw-unsplash.jpg"
            alt="Lisboa práctica"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">verified</span>
            <span className="text-sm font-semibold tracking-wide">100% gratis</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            Guía Práctica<br />
            <span className="text-accent">de Lisboa</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Guía práctica de Lisboa con transporte, presupuesto, barrios y consejos reales para viajeros hispanohablantes.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      {/* TRANSPORTE */}
      <section className="py-24 bg-background-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-16">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center shadow-soft">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">directions_transit</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-text-main">
                  Transporte
                </h2>
                <p className="text-text-secondary mt-0.5 md:mt-1 text-xs md:text-base">
                  Cómo moverte por Lisboa
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-soft border border-slate-200/80 hover:shadow-soft-lg transition-all">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">flight_land</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-text-main mb-1 md:mb-2">
                      Desde el Aeropuerto
                    </h3>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 text-text-secondary text-sm md:text-base">
                  <div>
                    <p className="font-bold mb-1">Metro (más económico)</p>
                    <p>
                      Línea roja directa al centro. Solo 1.50 EUR, 25 minutos de viaje.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Taxi / Uber / Bolt</p>
                    <p>
                      Taxi oficial: 15-20 EUR al centro. Uber/Bolt: 10-15 EUR.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-soft border border-slate-200/80 hover:shadow-soft-lg transition-all">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">confirmation_number</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-text-main mb-1 md:mb-2">
                      Tarjeta Viva Viagem
                    </h3>
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4 text-text-secondary text-sm md:text-base">
                  <p>
                    Tarjeta recargable que cuesta 0.50 EUR. Cómprala en cualquier estación de metro.
                  </p>
                  <p>
                    <strong>Funciona en:</strong> Metro, tranvías, autobuses y elevadores. Recargable cuando quieras.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-soft border border-slate-200/80 hover:shadow-soft-lg transition-all">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">sell</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-text-main mb-1 md:mb-2">
                      Pase Diario
                    </h3>
                  </div>
                </div>
                <div className="text-text-secondary text-sm md:text-base">
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3">6.60 EUR</p>
                  <p>
                    Metro, bus y tranvía ilimitado durante 24 horas. Perfecto si usarás transporte público varias veces al día.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-soft border border-slate-200/80 hover:shadow-soft-lg transition-all">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">tram</span>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-text-main mb-1 md:mb-2">
                      Tranvía 28
                    </h3>
                  </div>
                </div>
                <div className="text-text-secondary text-sm md:text-base">
                  <p>
                    El tranvía icónico de Lisboa. Pasa por Graça, Alfama, Baixa y Estrela. 
                    <strong className="block mt-2">Tip:</strong> Ve temprano (antes de 10:00) para evitar multitudes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DINERO Y PRECIOS COMPACTO */}
      <section className="py-12 md:py-32 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-16">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center shadow-soft">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">euro</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-text-main">
                  Dinero y Precios
                </h2>
                <p className="text-text-secondary mt-0.5 md:mt-1 text-xs md:text-base">
                  Presupuesto y gastos típicos
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-8 mb-8 md:mb-12">
              {[
                { rango: '50-80 EUR', tipo: 'Económico' },
                { rango: '100-150 EUR', tipo: 'Medio' },
                { rango: '200+ EUR', tipo: 'Confortable' }
              ].map((budget, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-4 md:p-8 text-center border border-slate-200/80 shadow-soft">
                  <p className="text-[10px] md:text-sm text-text-secondary mb-1 md:mb-2 tracking-wide uppercase">{budget.tipo}</p>
                  <p className="text-2xl md:text-4xl font-bold text-text-main mb-2 md:mb-4">
                    {budget.rango}
                  </p>
                  <p className="text-[10px] md:text-sm text-text-secondary">por persona/día</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-soft">
                <h3 className="text-lg md:text-2xl font-bold text-text-main mb-3 md:mb-4">
                  Moneda
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  <strong>Euro (€).</strong> Tarjetas aceptadas en prácticamente todos lados. 
                  Lleva algo de efectivo para mercados tradicionales y pequeños comercios locales.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200/80 shadow-soft">
                <h3 className="text-lg md:text-2xl font-bold text-text-main mb-3 md:mb-4">
                  Propinas
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                  <strong>No obligatorias.</strong> 5-10% si el servicio fue bueno. 
                  En cafés, redondear está bien (ejemplo: 8.60€ → dejar 9€).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIMA COMPACTO */}
      <section className="py-12 md:py-32 bg-background-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-16">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center shadow-soft">
                <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">wb_sunny</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-black text-text-main">
                  Clima y Mejor Época
                </h2>
                <p className="text-text-secondary mt-0.5 md:mt-1 text-xs md:text-base">
                  Cuándo visitar Lisboa
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
              {[
                {
                  estacion: 'Primavera',
                  meses: 'Marzo - Mayo',
                  temp: '15-25°C',
                  desc: 'La mejor época para visitar. Clima perfecto, menos turistas, precios más bajos.',
                  badge: '⭐ RECOMENDADO',
                  color: 'from-pink-500 to-rose-500'
                },
                {
                  estacion: 'Verano',
                  meses: 'Junio - Agosto',
                  temp: '25-35°C',
                  desc: 'Más caluroso y con más turistas. Playas de Cascais y Estoril perfectas.',
                  badge: 'ALTA TEMPORADA',
                  color: 'from-red-500 to-orange-500'
                },
                {
                  estacion: 'Otoño',
                  meses: 'Septiembre - Noviembre',
                  temp: '15-25°C',
                  desc: 'Excelente opción. Clima agradable, menos gente que verano.',
                  badge: 'BUENA OPCIÓN',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  estacion: 'Invierno',
                  meses: 'Diciembre - Febrero',
                  temp: '10-15°C',
                  desc: 'Más económico. Lluvia frecuente pero temperaturas suaves.',
                  badge: 'MÁS BARATO',
                  color: 'from-blue-500 to-cyan-500'
                }
              ].map((season, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 md:p-10 shadow-soft border border-slate-200/80 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1.5 md:w-2 h-full bg-gradient-to-b ${season.color}`}></div>
                  
                  <div className="mb-3 md:mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-text-main mb-1 md:mb-2">
                      {season.estacion}
                    </h3>
                    <p className="text-text-secondary text-sm md:text-base">{season.meses}</p>
                  </div>

                  <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-background-cream rounded-lg mb-3 md:mb-4">
                    <span className="font-bold text-text-main text-sm md:text-base">{season.temp}</span>
                  </div>

                  <p className="text-text-secondary mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                    {season.desc}
                  </p>

                  <span className={`inline-block px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r ${season.color} text-white font-bold rounded-lg text-xs md:text-sm`}>
                    {season.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIPS COMPACTOS */}
      <section className="py-12 md:py-32 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-black text-text-main mb-2 md:mb-4">
                Tips <span className="text-primary">Esenciales</span>
              </h2>
              <p className="text-sm md:text-xl text-text-secondary">
                Lo que necesitas saber antes de viajar
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {[
                { icon: 'hiking', titulo: 'Calzado cómodo', desc: 'Lisboa tiene muchas cuestas y calles empedradas. Zapatillas deportivas son esenciales.' },
                { icon: 'electrical_services', titulo: 'Enchufes', desc: 'Tipo C/F europeos (2 clavijas redondas). 220V. Trae adaptador si vienes de UK/USA.' },
                { icon: 'local_drink', titulo: 'Agua potable', desc: 'Agua del grifo totalmente segura. Puedes beberla sin problemas en toda la ciudad.' },
                { icon: 'verified_user', titulo: 'Seguridad', desc: 'Ciudad muy segura. Atento a carteristas en zonas turísticas (Tranvía 28, Baixa).' },
                { icon: 'schedule', titulo: 'Horarios', desc: 'Tiendas: 10:00-19:00. Comida: 12:00-15:00. Cena: 19:00-23:00.' },
                { icon: 'wifi', titulo: 'WiFi & SIM', desc: 'WiFi gratis en cafés. SIM turísticas en aeropuerto: Vodafone/MEO (10-20€).' },
                { icon: 'translate', titulo: 'Idioma', desc: 'Portugués. El español se entiende. Inglés común en zonas turísticas.' },
                { icon: 'credit_card', titulo: 'Pagos', desc: 'Tarjetas ampliamente aceptadas. Contactless disponible en casi todos lados.' },
                { icon: 'local_hospital', titulo: 'Salud', desc: 'Tarjeta Sanitaria Europea válida. Farmacias (cruz verde) abundantes.' }
              ].map((tip, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-5 md:p-8 hover:shadow-soft-lg transition-all border border-slate-200/80">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 shadow-soft">
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">{tip.icon}</span>
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-text-main mb-2 md:mb-3">
                    {tip.titulo}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-xs md:text-base">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA COMPACTO */}
      <section className="py-12 md:py-32 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-3 md:mb-6">
              ¿Listo para Explorar
              <br />
              <span className="text-accent">
                Lisboa?
              </span>
            </h2>

            <p className="text-sm md:text-xl text-white/90 mb-6 md:mb-12 leading-relaxed max-w-2xl mx-auto">
              Descubre nuestros itinerarios completos con restaurantes verificados,
              <span className="hidden md:inline"><br />coordenadas GPS y tips de local</span>
            </p>

            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-2 md:gap-3 bg-white text-primary font-bold py-3 px-8 md:py-6 md:px-12 rounded-xl md:rounded-2xl text-base md:text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span>Ver Itinerarios</span>
              <span className="material-symbols-outlined text-lg md:text-2xl">arrow_forward</span>
            </Link>

            <p className="text-white/70 text-xs md:text-sm mt-4 md:mt-8">
              ✓ Desde 1.99€ · ✓ Descarga inmediata · ✓ Actualizadas 2025
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
