import Link from 'next/link';

export const metadata = {
  title: 'Lisboa en Familia - Itinerario con Ninos | Portugal Autentico',
  description: 'Actividades perfectas para ninos de todas las edades. Oceanario, teleferico, castillo y mas. Ritmo relajado.',
};

export default function LisboaFamiliarPage() {
  return (
    <main className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1920)'}}></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <Link href="/itinerarios" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Volver a itinerarios
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-500 text-white">FAMILIAR</span>
            <span className="text-white/60 text-sm">2-3 dias</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Lisboa en Familia</h1>
          <p className="text-xl text-white/80 mb-8">Actividades perfectas para ninos de todas las edades. Ritmo relajado, sin prisas, con paradas para helados y descansos.</p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">10 actividades</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">Restaurantes kids-friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">Ritmo relajado</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
              <span className="text-white text-sm">Tips para padres</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <span className="text-3xl font-bold text-slate-900">7.99 EUR</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Link href="/preview" className="px-6 py-3 border-2 border-slate-200 rounded-xl font-semibold hover:border-slate-300">
                Ver preview
              </Link>
              <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Todo lo que incluye</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Itinerario de 2-3 dias con ritmo familiar',
              'Oceanario de Lisboa (el mejor de Europa)',
              'Teleferico con vistas al rio',
              'Castillo de San Jorge (a los ninos les encanta)',
              '5 restaurantes family-friendly con menu infantil',
              'Parques y jardines para correr',
              'Heladerias recomendadas',
              'Tips para transporte con carrito',
              'Horarios de siesta incluidos',
              'Alternativas si llueve',
              'Banos publicos marcados',
              'Zonas de juego en cada barrio'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">1</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Dia 1: Parque das Nacoes</h2>
              <p className="text-slate-500">Oceanario, teleferico, zona moderna</p>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 mb-6">
            <p className="text-emerald-800 text-sm"><strong>Tip para padres:</strong> Esta zona es plana y moderna. Perfecta para carritos. Muchos banos, restaurantes y sombra.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">10:00</span>
                <h3 className="font-bold text-slate-900">Oceanario de Lisboa</h3>
                <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded-full">IMPRESCINDIBLE</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">El mejor acuario de Europa. Tanque central gigante con tiburones, rayas y peces luna. Los ninos flipan. Cuenta 2-3 horas.</p>
              <p className="text-emerald-600 text-xs font-medium">Entrada: 25 EUR adultos, 17 EUR ninos (4-12), gratis menores de 4 | Compra online para evitar cola</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">13:00</span>
                <h3 className="font-bold text-slate-900">Almuerzo: Nosolo Italia</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Pizzas y pasta. Menu infantil. Terraza con vistas al rio. Los ninos pueden moverse sin molestar.</p>
              <p className="text-emerald-600 text-xs font-medium">Menu ninos ~8 EUR | Tronas disponibles | Junto al Oceanario</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">14:30</span>
                <h3 className="font-bold text-slate-900">Teleferico</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Vistas al rio Tajo desde el aire. El recorrido dura 10 minutos. A los ninos les encanta, a los padres tambien.</p>
              <p className="text-emerald-600 text-xs font-medium">Ida y vuelta: 9 EUR adultos, 5 EUR ninos | No hay cola entre semana</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">15:30</span>
                <h3 className="font-bold text-slate-900">Jardines del Agua</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Fuentes donde los ninos pueden mojarse en verano. Cesped para sentarse. Helados en los kioscos.</p>
              <p className="text-emerald-600 text-xs font-medium">Gratis | Lleva toalla en verano | Banos publicos cerca</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">17:00</span>
                <h3 className="font-bold text-slate-900">Merienda: Gelataria Santini</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">El mejor helado de Portugal. Sabores clasicos italianos. Los ninos lo merecen despues del dia.</p>
              <p className="text-emerald-600 text-xs font-medium">Helado desde 3 EUR | Sabor estrella: Stracciatella</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">2</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Dia 2: Centro Historico</h2>
              <p className="text-slate-500">Castillo, tranvia, Baixa</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 mb-6">
            <p className="text-amber-800 text-sm"><strong>Tip para padres:</strong> Hay cuestas. Si llevas carrito, usa el ascensor de Santa Justa o taxis hasta el castillo. Hemos marcado rutas accesibles.</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">10:00</span>
                <h3 className="font-bold text-slate-900">Castillo de San Jorge</h3>
                <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded-full">NINOS LOVE IT</span>
              </div>
              <p className="text-slate-600 text-sm mb-2">Murallas para explorar, pavos reales sueltos, canones antiguos. Los ninos se sienten caballeros. Vistas increibles.</p>
              <p className="text-emerald-600 text-xs font-medium">Entrada: 15 EUR adultos, gratis menores de 12 | Hay sombra | Subida en taxi 6-8 EUR desde Baixa</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">12:30</span>
                <h3 className="font-bold text-slate-900">Bajada por Alfama</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Callejuelas empinadas pero magicas. Busca gatos, azulejos, puertas coloridas. Los ninos disfrutan explorando.</p>
              <p className="text-emerald-600 text-xs font-medium">Ruta de bajada mas facil marcada en el mapa | 30 min hasta la Baixa</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">13:00</span>
                <h3 className="font-bold text-slate-900">Almuerzo: Cervejaria Ramiro</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">El mejor marisco de Lisboa. Gambas, percebes, cangrejo. Los ninos pueden comer con las manos. Una experiencia.</p>
              <p className="text-emerald-600 text-xs font-medium">Presupuesto: 30-40 EUR/persona | Tronas disponibles | Pide el prego al final (tradicion)</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">15:00</span>
                <h3 className="font-bold text-slate-900">Tranvia 28 (tramo corto)</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">El tranvia amarillo historico. Solo 3-4 paradas para que los ninos no se aburran. Sube en Martin Moniz para coger sitio.</p>
              <p className="text-emerald-600 text-xs font-medium">Evita hora punta | Sentaos en ventana | Bajad en Largo da Graca</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">16:00</span>
                <h3 className="font-bold text-slate-900">Jardin da Estrela</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Parque grande con lago, patos, y zona de juegos. Cafe con terraza para padres mientras los ninos juegan. Perfecto para descansar.</p>
              <p className="text-emerald-600 text-xs font-medium">Gratis | Zona de juegos renovada | Banos en el cafe</p>
            </div>

            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">18:00</span>
                <h3 className="font-bold text-slate-900">Merienda-cena: Time Out Market</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Mercado gastronomico. Cada uno elige lo que quiere. Hay de todo: pizza, sushi, hamburguesas, comida portuguesa.</p>
              <p className="text-emerald-600 text-xs font-medium">Ideal con ninos exigentes | Mesas comunes grandes | Ambiente animado pero no ruidoso</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">3</div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Dia 3 (opcional): Belem</h2>
              <p className="text-slate-500">Pasteles, monumentos, jardines</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">10:00</span>
                <h3 className="font-bold text-slate-900">Pasteis de Belem</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Los pasteles de nata originales. Ve a las salas del fondo, no hay cola. A los ninos les encantan con canela y azucar.</p>
              <p className="text-emerald-600 text-xs font-medium">1.30 EUR cada uno | Pide 2 por persona minimo | Tronas en el salon interior</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">11:00</span>
                <h3 className="font-bold text-slate-900">Torre de Belem (exterior)</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Foto obligatoria. No subas dentro con ninos (escaleras estrechas, cola larga). Paseo junto al rio muy agradable.</p>
              <p className="text-emerald-600 text-xs font-medium">Gratis desde fuera | Hay helados y snacks en los kioscos</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">12:00</span>
                <h3 className="font-bold text-slate-900">Museo de los Coches</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Carruajes reales dorados y gigantes. A los ninos les flipan. Moderno, con aire acondicionado, bien explicado.</p>
              <p className="text-emerald-600 text-xs font-medium">8 EUR adultos, gratis menores de 12 | 1 hora suficiente | Muy accesible con carrito</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded">14:00</span>
                <h3 className="font-bold text-slate-900">Jardim Botanico de Belem</h3>
              </div>
              <p className="text-slate-600 text-sm mb-2">Cesped amplio, sombra, tranquilidad. Perfecto para un picnic y que los ninos corran. Muy local, sin turistas.</p>
              <p className="text-emerald-600 text-xs font-medium">Gratis | Compra bocadillos en el supermercado cercano</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vacaciones en familia sin estres</h2>
          <p className="text-xl text-emerald-100 mb-8">Todo planificado para disfrutar con ninos. Ritmo tranquilo, actividades divertidas, restaurantes donde los ninos son bienvenidos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-emerald-600 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
              Comprar por 7.99 EUR
            </button>
          </div>
          <p className="mt-6 text-emerald-200 text-sm">Descarga inmediata - Garantia 14 dias - Tips de padres incluidos</p>
        </div>
      </section>
    </main>
  );
}
