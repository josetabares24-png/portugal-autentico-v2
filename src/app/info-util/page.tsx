import Image from 'next/image';
import Link from 'next/link';

export default function InfoUtilPage() {
  return (
    <div className="min-h-screen bg-background-light">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-6">
            <span className="text-sm font-bold">✓ 100% GRATIS</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Guía Práctica<br />
            <span className="text-yellow-300">de Lisboa</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Todo lo que necesitas saber antes de viajar a Lisboa
          </p>
        </div>
      </section>

      {/* TRANSPORTE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">directions_transit</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                Transporte
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="font-black text-xl text-blue-900 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined">flight_land</span>
                  Desde el aeropuerto
                </h3>
                <p className="text-blue-800 mb-2">
                  <strong>Metro (más barato):</strong> El metro es la opción más barata (1.50 EUR). Línea roja directa al centro en 25 minutos.
                </p>
                <p className="text-blue-800">
                  <strong>Taxi:</strong> 15-20 EUR al centro. Uber/Bolt: 10-15 EUR.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="font-black text-xl text-blue-900 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined">confirmation_number</span>
                  Tarjeta Viva Viagem
                </h3>
                <p className="text-blue-800 mb-2">
                  Compra esta tarjeta recargable (0.50 EUR) en cualquier estación de metro.
                </p>
                <p className="text-blue-800">
                  <strong>Ventajas:</strong> Funciona en metro, tranvías, autobuses y elevadores. Recargable en cualquier momento.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="font-black text-xl text-blue-900 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined">sell</span>
                  Pase diario
                </h3>
                <p className="text-blue-800">
                  <strong>6.60 EUR:</strong> Metro, bus y tranvía ilimitado durante 24 horas. Perfecto si vas a usar transporte público varias veces al día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DINERO Y PRECIOS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">euro</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                Dinero y Precios
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-black text-xl text-slate-900 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600">payments</span>
                  Moneda
                </h3>
                <p className="text-slate-700">
                  <strong>Euro (€).</strong> Tarjetas aceptadas en casi todos lados. Lleva algo de efectivo para mercados tradicionales y pequeños comercios.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-black text-xl text-slate-900 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600">restaurant</span>
                  Presupuesto diario
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Económico:</span>
                    <span className="font-bold text-slate-900">50-80 EUR</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600">Medio:</span>
                    <span className="font-bold text-slate-900">100-150 EUR</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600">Confortable:</span>
                    <span className="font-bold text-slate-900">200+ EUR</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-black text-xl text-slate-900 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-600">volunteer_activism</span>
                  Propinas
                </h3>
                <p className="text-slate-700">
                  <strong>No obligatorias.</strong> 5-10% si el servicio fue bueno. En cafés, redondear está bien (ej: si son 8.60€, dejar 9€).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIMA Y MEJOR ÉPOCA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">wb_sunny</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                Clima y Mejor Época
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-orange-50 rounded-2xl p-6 border-l-4 border-orange-500">
                <h3 className="font-black text-xl text-orange-900 mb-3">🌸 Primavera (Mar-May)</h3>
                <p className="text-orange-800 mb-2"><strong>Mejor época.</strong> Clima perfecto (15-25°C), menos turistas, precios más bajos.</p>
                <span className="inline-block px-3 py-1 bg-orange-200 text-orange-900 rounded-full text-sm font-bold">
                  ⭐ RECOMENDADO
                </span>
              </div>

              <div className="bg-red-50 rounded-2xl p-6 border-l-4 border-red-500">
                <h3 className="font-black text-xl text-red-900 mb-3">☀️ Verano (Jun-Ago)</h3>
                <p className="text-red-800 mb-2"><strong>Más caluroso.</strong> 25-35°C, muchos turistas, precios altos. Playas de Cascais perfectas.</p>
                <span className="inline-block px-3 py-1 bg-red-200 text-red-900 rounded-full text-sm font-bold">
                  ALTA TEMPORADA
                </span>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-500">
                <h3 className="font-black text-xl text-yellow-900 mb-3">🍂 Otoño (Sep-Nov)</h3>
                <p className="text-yellow-800"><strong>Excelente opción.</strong> Clima agradable (15-25°C), menos gente que verano, precios razonables.</p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <h3 className="font-black text-xl text-blue-900 mb-3">❄️ Invierno (Dic-Feb)</h3>
                <p className="text-blue-800"><strong>Más económico.</strong> Lluvia frecuente, 10-15°C. Perfecto si buscas precios bajos y no te importa el frío.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDIOMA Y COMUNICACIÓN */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">translate</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                Idioma y Comunicación
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-slate-700 mb-6 text-lg">
                <strong>Portugués:</strong> Idioma oficial. El español se entiende bastante, pero aprecia que intentes hablar portugués.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 rounded-xl p-4">
                  <p className="font-bold text-purple-900 mb-2">Frases útiles:</p>
                  <ul className="space-y-2 text-purple-800">
                    <li>• <strong>Olá</strong> → Hola</li>
                    <li>• <strong>Obrigado/a</strong> → Gracias</li>
                    <li>• <strong>Por favor</strong> → Por favor</li>
                    <li>• <strong>Desculpe</strong> → Disculpe</li>
                    <li>• <strong>Quanto custa?</strong> → ¿Cuánto cuesta?</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-4">
                  <p className="font-bold text-purple-900 mb-2">Inglés:</p>
                  <p className="text-purple-800">
                    La mayoría de jóvenes y trabajadores de turismo hablan inglés. No tendrás problemas en zonas turísticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS IMPORTANTES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-2xl">lightbulb</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
                Tips Importantes
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: 'hiking',
                  title: 'Calzado cómodo',
                  desc: 'Lisboa tiene muchas cuestas y calles empedradas. Zapatillas deportivas son tu mejor aliado.'
                },
                {
                  icon: 'electrical_services',
                  title: 'Enchufes',
                  desc: 'Tipo C/F (europeos de 2 clavijas redondas). 220V. Trae adaptador si vienes de UK/USA.'
                },
                {
                  icon: 'local_drink',
                  title: 'Agua del grifo',
                  desc: 'Potable y segura. Puedes beberla sin problemas en toda la ciudad.'
                },
                {
                  icon: 'verified_user',
                  title: 'Seguridad',
                  desc: 'Ciudad muy segura. Cuidado con carteristas en zonas turísticas como el Tranvía 28 y Baixa.'
                },
                {
                  icon: 'schedule',
                  title: 'Horarios comerciales',
                  desc: 'Tiendas: 10:00-19:00. Restaurantes: comida 12:00-15:00, cena 19:00-23:00.'
                },
                {
                  icon: 'wifi',
                  title: 'WiFi y SIM',
                  desc: 'WiFi gratis en cafés y hoteles. SIM turísticas: Vodafone/MEO en aeropuerto (10-20€).'
                }
              ].map((tip, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white">{tip.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-black text-lg text-slate-900 mb-2">{tip.title}</h3>
                      <p className="text-slate-600 text-sm">{tip.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-br from-primary to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              ¿Listo para Explorar Lisboa?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Descubre nuestros itinerarios completos con restaurantes, GPS y tips de local
            </p>

            <Link 
              href="/itinerarios"
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 font-black py-6 px-12 rounded-2xl text-2xl shadow-2xl hover:scale-105 transition-all"
            >
              <span>Ver Itinerarios</span>
              <span className="material-symbols-outlined text-2xl">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
