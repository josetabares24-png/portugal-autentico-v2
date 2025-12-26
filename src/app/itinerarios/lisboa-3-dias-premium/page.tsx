import Link from 'next/link';

export const metadata = {
  title: 'Lisboa 3 Dias + Sintra + Cascais - Itinerario Premium | Portugal Autentico',
  description: 'El itinerario mas completo: Lisboa, Sintra, Cabo da Roca y Cascais. 22 paradas, 9 restaurantes, mapas offline.',
};

export default function Lisboa3DiasPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/itinerarios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver a itinerarios
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500 text-white">PREMIUM</span>
            <span className="text-white/60 text-sm">3 dias completos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Lisboa + Sintra + Cascais</h1>
          <p className="text-xl text-white/80 mb-8">La experiencia completa. Lisboa, los palacios magicos de Sintra, Cabo da Roca (el punto mas occidental de Europa) y las playas de Cascais.</p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">22 paradas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">9 restaurantes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">3 ciudades</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">Mapas offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Precio sticky */}
      <section className="py-6 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-slate-400 line-through text-lg">69 EUR</span>
                <span className="text-3xl font-bold text-slate-900 ml-2">47 EUR</span>
              </div>
              <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded-full">-32%</span>
            </div>
            <div className="flex gap-3">
              <Link href="/preview" className="px-6 py-3 border-2 border-slate-200 rounded-xl font-semibold hover:border-slate-300">
                Ver preview
              </Link>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Que incluye */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Todo lo que incluye</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Itinerario hora por hora para 3 dias',
              'Dia 1: Centro historico completo',
              'Dia 2: Belem + LX Factory + Fado',
              'Dia 3: Sintra + Cabo da Roca + Cascais',
              '22 paradas imprescindibles',
              '9 restaurantes locales con precios',
              'Guia de transporte (tren a Sintra incluido)',
              'Mapas offline descargables',
              'Tips para evitar colas',
              'Mejores miradores con horarios',
              'Casas de fado autenticas',
              'Actualizaciones gratis'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dia 1 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Dia 1: Centro Historico</h2>
              <p className="text-slate-500">Baixa, Alfama, Castillo, Graca</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">09:00</span>
                <h3 className="font-bold text-slate-900">Praca do Comercio</h3>
              </div>
              <p className="text-slate-600 text-sm">La puerta de entrada a Lisboa. Sube al Arco da Rua Augusta (5 EUR) para la primera vista panoramica.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">10:30</span>
                <h3 className="font-bold text-slate-900">Alfama sin mapa</h3>
              </div>
              <p className="text-slate-600 text-sm">Pierdete 1 hora por el barrio mas antiguo. Busca azulejos, ropa tendida, gatos dormidos. Es la esencia de Lisboa.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">12:00</span>
                <h3 className="font-bold text-slate-900">Almuerzo: Taberna da Rua das Flores</h3>
              </div>
              <p className="text-slate-600 text-sm">Cocina portuguesa moderna. Pide las croquetas de alheira y el pulpo. Reserva o ve temprano. ~25 EUR/persona.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">14:30</span>
                <h3 className="font-bold text-slate-900">Castillo de San Jorge</h3>
              </div>
              <p className="text-slate-600 text-sm">15 EUR entrada. Ve despues de las 15:00 cuando se van los tours. Las mejores vistas de Lisboa.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">17:00</span>
                <h3 className="font-bold text-slate-900">Miradouro da Graca</h3>
              </div>
              <p className="text-slate-600 text-sm">El mirador favorito de los locales. Cerveza en el kiosko viendo el atardecer sobre la ciudad.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">20:30</span>
                <h3 className="font-bold text-slate-900">Cena + Fado en Alfama</h3>
              </div>
              <p className="text-slate-600 text-sm">Mesa de Frades o Tasca do Chico. Fado autentico, no para turistas. Reserva con antelacion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dia 2 */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Dia 2: Belem y Modernidad</h2>
              <p className="text-slate-500">Belem, LX Factory, Time Out Market</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">09:00</span>
                <h3 className="font-bold text-slate-900">Tranvia 15E a Belem</h3>
              </div>
              <p className="text-slate-600 text-sm">Desde Praca do Comercio. Tarda 20 min. Evita el tranvia 28 (es una trampa turistica).</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">09:30</span>
                <h3 className="font-bold text-slate-900">Pasteis de Belem</h3>
              </div>
              <p className="text-slate-600 text-sm">SI, hay cola. Pero ve a las salas del fondo, ahi no hay espera. El pastel de nata original desde 1837.</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">10:30</span>
                <h3 className="font-bold text-slate-900">Monasterio de los Jeronimos</h3>
              </div>
              <p className="text-slate-600 text-sm">Patrimonio UNESCO. Compra entrada online para evitar 1 hora de cola. Iglesia gratis, claustro 10 EUR.</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">12:30</span>
                <h3 className="font-bold text-slate-900">Torre de Belem</h3>
              </div>
              <p className="text-slate-600 text-sm">Foto obligatoria. No subas (colas eternas, vistas regulares). Mejor camina por el paseo maritimo.</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">14:00</span>
                <h3 className="font-bold text-slate-900">LX Factory</h3>
              </div>
              <p className="text-slate-600 text-sm">Fabrica reconvertida en espacio creativo. Libreria Ler Devagar es espectacular. Almuerza en Landeau (mejor tarta de chocolate de Lisboa).</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">17:00</span>
                <h3 className="font-bold text-slate-900">Miradouro de Santa Catarina</h3>
              </div>
              <p className="text-slate-600 text-sm">Ambiente joven, musica en vivo improvisada. Compra cerveza en el supermercado de abajo.</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">20:00</span>
                <h3 className="font-bold text-slate-900">Time Out Market</h3>
              </div>
              <p className="text-slate-600 text-sm">Cena variada. Cada puesto es de un chef reconocido. Coge sitio primero, luego pide. Henrique Sá Pessoa es el mejor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dia 3 - SINTRA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Dia 3: Sintra + Cabo da Roca + Cascais</h2>
              <p className="text-slate-500">Palacios, el fin de Europa, playas</p>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 mb-6">
            <p className="text-purple-800 text-sm"><strong>Transporte:</strong> Tren desde Rossio a Sintra (2.30 EUR, 40 min). En Sintra, bus 434 a los palacios. Ultimo bus Sintra-Cascais a las 18:00.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">08:00</span>
                <h3 className="font-bold text-slate-900">Tren a Sintra</h3>
              </div>
              <p className="text-slate-600 text-sm">Sal temprano. Sintra se llena a las 11:00. Estacion de Rossio, tren cada 20 min.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">09:00</span>
                <h3 className="font-bold text-slate-900">Palacio da Pena</h3>
              </div>
              <p className="text-slate-600 text-sm">El palacio colorido que has visto en Instagram. 14 EUR entrada. COMPRA ONLINE o haras 2 horas de cola. Es magico, parece de cuento.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">11:30</span>
                <h3 className="font-bold text-slate-900">Quinta da Regaleira</h3>
              </div>
              <p className="text-slate-600 text-sm">El pozo iniciatico es increible. Jardines misteriosos, tuneles secretos. 10 EUR. Menos masificado que Pena.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">13:00</span>
                <h3 className="font-bold text-slate-900">Almuerzo en Sintra Vila</h3>
              </div>
              <p className="text-slate-600 text-sm">Incomum by Luis Santos - cocina portuguesa moderna. O Tascantiga para algo mas tradicional y barato. Prueba las queijadas de Sintra.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">14:30</span>
                <h3 className="font-bold text-slate-900">Bus a Cabo da Roca</h3>
              </div>
              <p className="text-slate-600 text-sm">Bus 403 desde Sintra (30 min). El punto mas occidental de Europa continental. Acantilados dramaticos sobre el Atlantico. Hace viento, lleva chaqueta.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">16:00</span>
                <h3 className="font-bold text-slate-900">Bus a Cascais</h3>
              </div>
              <p className="text-slate-600 text-sm">Bus 403 continua a Cascais (30 min). Pueblo costero elegante. Pasea por el centro, helado en Santini (el mejor de Portugal).</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">17:30</span>
                <h3 className="font-bold text-slate-900">Boca do Inferno</h3>
              </div>
              <p className="text-slate-600 text-sm">Formacion rocosa a 15 min caminando del centro. Olas rompiendo contra los acantilados. Atardecer espectacular.</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">19:00</span>
                <h3 className="font-bold text-slate-900">Cena en Cascais</h3>
              </div>
              <p className="text-slate-600 text-sm">House of Wonders para pescado fresco. O Marisco na Praca para mariscos (caro pero vale). Tren de vuelta a Lisboa desde Cascais (40 min, 2.30 EUR).</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">3 dias perfectos te esperan</h2>
          <p className="text-xl text-purple-100 mb-8">Lisboa, Sintra, Cascais. Todo planificado hora a hora para que solo disfrutes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-purple-700 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
              Comprar por 47 EUR
            </button>
            <Link href="/comparar" className="px-10 py-4 border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Comparar packs
            </Link>
          </div>
          <p className="mt-6 text-purple-200 text-sm">Descarga inmediata • Garantia 14 dias • Actualizaciones gratis</p>
        </div>
      </section>
    </main>
  );
}
