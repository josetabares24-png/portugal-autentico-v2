import Image from 'next/image';
import Link from 'next/link';

export default function InfoUtilPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-24">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/30">
            <span className="material-symbols-outlined text-white text-xl">verified</span>
            <span className="text-sm font-medium text-white tracking-wide">100% GRATIS</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Guía Práctica
            <br />
            <span className="text-yellow-300">de Lisboa</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Todo lo esencial que necesitas saber antes de viajar
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white/70 text-3xl">expand_more</span>
        </div>
      </section>

      {/* TRANSPORTE */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-3xl">directions_transit</span>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                  Transporte
                </h2>
                <p className="text-slate-600 mt-1" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Cómo moverte por Lisboa
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-blue-600 text-2xl">flight_land</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Desde el Aeropuerto
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <p className="font-bold mb-1">Metro (más económico)</p>
                    <p style={{ fontFamily: 'Georgia, serif' }}>
                      Línea roja directa al centro. Solo 1.50 EUR, 25 minutos de viaje.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">Taxi / Uber / Bolt</p>
                    <p style={{ fontFamily: 'Georgia, serif' }}>
                      Taxi oficial: 15-20 EUR al centro. Uber/Bolt: 10-15 EUR.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-blue-600 text-2xl">confirmation_number</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Tarjeta Viva Viagem
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 text-slate-700">
                  <p style={{ fontFamily: 'Georgia, serif' }}>
                    Tarjeta recargable que cuesta 0.50 EUR. Cómprala en cualquier estación de metro.
                  </p>
                  <p style={{ fontFamily: 'Georgia, serif' }}>
                    <strong>Funciona en:</strong> Metro, tranvías, autobuses y elevadores. Recargable cuando quieras.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-blue-600 text-2xl">sell</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Pase Diario
                    </h3>
                  </div>
                </div>
                <div className="text-slate-700">
                  <p className="text-3xl font-bold text-blue-600 mb-3">6.60 EUR</p>
                  <p style={{ fontFamily: 'Georgia, serif' }}>
                    Metro, bus y tranvía ilimitado durante 24 horas. Perfecto si usarás transporte público varias veces al día.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-blue-600 text-2xl">tram</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Tranvía 28
                    </h3>
                  </div>
                </div>
                <div className="text-slate-700">
                  <p style={{ fontFamily: 'Georgia, serif' }}>
                    El tranvía icónico de Lisboa. Pasa por Graça, Alfama, Baixa y Estrela. 
                    <strong className="block mt-2">Tip:</strong> Ve temprano (antes de 10:00) para evitar multitudes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DINERO Y PRECIOS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-3xl">euro</span>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                  Dinero y Precios
                </h2>
                <p className="text-slate-600 mt-1" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Presupuesto y gastos típicos
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { rango: '50-80 EUR', tipo: 'Económico', color: 'green' },
                { rango: '100-150 EUR', tipo: 'Medio', color: 'blue' },
                { rango: '200+ EUR', tipo: 'Confortable', color: 'purple' }
              ].map((budget, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
                  <p className="text-sm text-slate-600 mb-2 tracking-wide uppercase">{budget.tipo}</p>
                  <p className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    {budget.rango}
                  </p>
                  <p className="text-sm text-slate-500">por persona/día</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 border border-green-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Moneda
                </h3>
                <p className="text-slate-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  <strong>Euro (€).</strong> Tarjetas aceptadas en prácticamente todos lados. 
                  Lleva algo de efectivo para mercados tradicionales y pequeños comercios locales.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-10 border border-green-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  Propinas
                </h3>
                <p className="text-slate-700 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  <strong>No obligatorias.</strong> 5-10% si el servicio fue bueno. 
                  En cafés, redondear está bien (ejemplo: 8.60€ → dejar 9€).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIMA */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-3xl">wb_sunny</span>
              </div>
              <div>
                <h2 className="text-5xl font-bold text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                  Clima y Mejor Época
                </h2>
                <p className="text-slate-600 mt-1" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                  Cuándo visitar Lisboa
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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
                <div key={idx} className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${season.color}`}></div>
                  
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {season.estacion}
                    </h3>
                    <p className="text-slate-600">{season.meses}</p>
                  </div>

                  <div className="inline-block px-4 py-2 bg-slate-100 rounded-lg mb-4">
                    <span className="font-bold text-slate-900">{season.temp}</span>
                  </div>

                  <p className="text-slate-700 mb-4 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    {season.desc}
                  </p>

                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${season.color} text-white font-bold rounded-lg text-sm`}>
                    {season.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIPS ESENCIALES */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Tips <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Esenciales</span>
              </h2>
              <p className="text-xl text-slate-600" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Lo que necesitas saber antes de viajar
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={idx} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:scale-105 border border-slate-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mb-6 shadow-lg">
                    <span className="material-symbols-outlined text-white text-2xl">{tip.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {tip.titulo}
                  </h3>
                  <p className="text-slate-600 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Listo para Explorar
              <br />
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                Lisboa?
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Descubre nuestros itinerarios completos con restaurantes verificados,
              coordenadas GPS y tips de local
            </p>

            <Link
              href="/itinerarios"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-dark hover:to-orange-600 text-white font-bold py-6 px-12 rounded-2xl text-xl shadow-2xl hover:scale-105 transition-all"
            >
              <span>Ver Itinerarios</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>

            <p className="text-slate-500 text-sm mt-8">
              ✓ Desde 3.99€ · ✓ Descarga inmediata · ✓ Actualizadas 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
