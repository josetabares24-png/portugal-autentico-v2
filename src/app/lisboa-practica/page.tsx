import Link from 'next/link';

export default function LisboaPracticaPage() {
  const secciones = [
    { id: 'emergencias', nombre: 'Emergencias', icon: '🚨' },
    { id: 'aeropuerto', nombre: 'Aeropuerto', icon: '✈️' },
    { id: 'transporte', nombre: 'Transporte', icon: '🚇' },
    { id: 'estadios', nombre: 'Estadios', icon: '⚽' },
    { id: 'compras', nombre: 'Compras', icon: '🛍️' },
    { id: 'salud', nombre: 'Salud', icon: '🏥' },
    { id: 'conectividad', nombre: 'Conectividad', icon: '📱' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80" alt="Lisboa Práctica" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 text-white" style={{background: 'var(--color-accent)'}}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            INFORMACIÓN ESENCIAL
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
            Lisboa Práctica
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Todo lo que necesitas saber: emergencias, transporte, estadios, compras y más.
          </p>
        </div>
      </section>

      {/* Navegación rápida */}
      <section className="py-4 bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {secciones.map((sec) => (
              <a 
                key={sec.id}
                href={`#${sec.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-sm font-medium whitespace-nowrap transition-colors"
                style={{color: 'var(--color-primary)'}}
              >
                <span>{sec.icon}</span>
                {sec.nombre}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCIAS */}
      <section id="emergencias" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <span className="text-2xl">🚨</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>Números de Emergencia</h2>
              <p className="text-slate-600">Guarda estos números antes de viajar</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { nombre: 'Emergencias general', numero: '112', desc: 'Policía, bomberos, ambulancia', color: 'bg-red-500' },
              { nombre: 'Policía (PSP)', numero: '21 765 4242', desc: 'Policía de Seguridad Pública', color: 'bg-blue-500' },
              { nombre: 'Policía Turística', numero: '21 342 1623', desc: 'Hablan inglés y español', color: 'bg-blue-400' },
              { nombre: 'Bomberos', numero: '21 342 2222', desc: 'Bomberos de Lisboa', color: 'bg-orange-500' },
              { nombre: 'Ambulancia (INEM)', numero: '21 792 7700', desc: 'Emergencias médicas', color: 'bg-green-500' },
              { nombre: 'Protección Civil', numero: '21 424 7100', desc: 'Desastres naturales', color: 'bg-amber-500' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-4 flex items-center gap-4">
                <div className={`w-14 h-14 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-lg">📞</span>
                </div>
                <div>
                  <p className="font-bold" style={{color: 'var(--color-primary)'}}>{item.nombre}</p>
                  <p className="text-xl font-bold text-slate-800">{item.numero}</p>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Embajadas */}
          <h3 className="text-lg font-bold mb-4" style={{color: 'var(--color-primary)'}}>Embajadas y Consulados</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { pais: '🇪🇸 España', direccion: 'Rua do Salitre, 1', telefono: '+351 21 347 2381', horario: 'Lun-Vie 9:00-14:00' },
              { pais: '🇲🇽 México', direccion: 'Av. da Liberdade, 200', telefono: '+351 21 319 2030', horario: 'Lun-Vie 9:00-13:00' },
              { pais: '🇦🇷 Argentina', direccion: 'Av. da República, 46', telefono: '+351 21 799 4810', horario: 'Lun-Vie 9:00-14:00' },
              { pais: '🇨🇴 Colombia', direccion: 'Av. Marquês de Tomar, 22', telefono: '+351 21 017 7470', horario: 'Lun-Vie 9:00-13:00' },
              { pais: '🇨🇱 Chile', direccion: 'Av. Miguel Bombarda, 3', telefono: '+351 21 315 8944', horario: 'Lun-Vie 9:00-14:00' },
              { pais: '🇵🇪 Perú', direccion: 'Rua Castilho, 50', telefono: '+351 21 386 4372', horario: 'Lun-Vie 9:00-13:00' },
            ].map((emb, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-4">
                <p className="font-bold text-lg mb-1">{emb.pais}</p>
                <p className="text-slate-600 text-sm">{emb.direccion}</p>
                <p className="text-slate-600 text-sm">📞 {emb.telefono}</p>
                <p className="text-slate-500 text-xs mt-1">{emb.horario}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEROPUERTO */}
      <section id="aeropuerto" className="py-16 bg-slate-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
              <span className="text-2xl">✈️</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>Aeropuerto de Lisboa (LIS)</h2>
              <p className="text-slate-600">Cómo llegar al centro de la ciudad</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { 
                medio: 'Metro (Línea Roja)', 
                precio: '1.65€', 
                tiempo: '25-30 min',
                destino: 'Estaciones: Alameda, Saldanha, São Sebastião',
                horario: '6:30 - 1:00',
                tip: 'La opción más barata. Compra la tarjeta Viva Viagem (0.50€)',
                icon: '🚇',
                color: 'bg-red-500'
              },
              { 
                medio: 'Aerobus (Línea 1)', 
                precio: '4€', 
                tiempo: '20-35 min',
                destino: 'Marqués de Pombal, Restauradores, Cais do Sodré',
                horario: '7:00 - 23:00 (cada 20 min)',
                tip: 'Directo y con espacio para maletas. Ida y vuelta 6€',
                icon: '🚌',
                color: 'bg-green-500'
              },
              { 
                medio: 'Taxi', 
                precio: '15-20€', 
                tiempo: '15-25 min',
                destino: 'Cualquier punto de Lisboa',
                horario: '24 horas',
                tip: 'Precio fijo al centro: ~15€. Exige taxímetro o acuerda precio antes',
                icon: '🚕',
                color: 'bg-amber-500'
              },
              { 
                medio: 'Uber / Bolt', 
                precio: '10-18€', 
                tiempo: '15-25 min',
                destino: 'Cualquier dirección',
                horario: '24 horas',
                tip: 'Generalmente más barato que taxi. Punto de recogida en llegadas',
                icon: '📱',
                color: 'bg-slate-700'
              },
            ].map((op, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${op.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-xl">{op.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold" style={{color: 'var(--color-primary)'}}>{op.medio}</h3>
                    <div className="flex gap-3 text-sm">
                      <span className="text-green-600 font-semibold">{op.precio}</span>
                      <span className="text-slate-500">{op.tiempo}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-2">📍 {op.destino}</p>
                <p className="text-slate-500 text-sm mb-2">🕐 {op.horario}</p>
                <p className="text-sm bg-amber-50 text-amber-800 p-2 rounded-lg">💡 {op.tip}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-2">📍 Ubicación del aeropuerto</h4>
            <p className="text-blue-800 text-sm">El aeropuerto Humberto Delgado está a solo 7 km del centro. Es uno de los aeropuertos más céntricos de Europa, lo que hace que llegar sea rápido y económico.</p>
          </div>
        </div>
      </section>

      {/* TRANSPORTE */}
      <section id="transporte" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <span className="text-2xl">🚇</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>Transporte Público</h2>
              <p className="text-slate-600">Cómo moverte por Lisboa</p>
            </div>
          </div>

          {/* Tarjetas */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white mb-8">
            <h3 className="text-xl font-bold mb-4">💳 Tarjeta Viva Viagem</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-2xl font-bold">0.50€</p>
                <p className="text-white/80 text-sm">Coste de la tarjeta (recargable)</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-2xl font-bold">1.65€</p>
                <p className="text-white/80 text-sm">Viaje sencillo (metro, bus, tranvía)</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-2xl font-bold">6.80€</p>
                <p className="text-white/80 text-sm">24h ilimitado (metro + bus + tranvía)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                nombre: 'Metro', 
                lineas: '4 líneas (Azul, Amarilla, Verde, Roja)',
                horario: '6:30 - 1:00',
                frecuencia: 'Cada 4-7 minutos',
                tip: 'La forma más rápida de cruzar la ciudad',
                icon: '🚇'
              },
              { 
                nombre: 'Tranvía', 
                lineas: 'Líneas 12, 15, 18, 24, 25, 28',
                horario: '6:00 - 23:00',
                frecuencia: 'Cada 10-15 minutos',
                tip: 'El 28 es turístico pero muy lleno. Prueba el 12 o 25',
                icon: '🚃'
              },
              { 
                nombre: 'Autobús', 
                lineas: 'Red extensa por toda la ciudad',
                horario: '6:00 - 21:00 (nocturnos hasta 2:00)',
                frecuencia: 'Cada 10-20 minutos',
                tip: 'Útil para zonas sin metro como Belém',
                icon: '🚌'
              },
              { 
                nombre: 'Elevadores y Funiculares', 
                lineas: 'Bica, Glória, Lavra + Elevador Santa Justa',
                horario: '7:00 - 21:00',
                frecuencia: 'Continuo',
                tip: 'Incluidos en la tarjeta 24h. Santa Justa tiene cola',
                icon: '🚡'
              },
            ].map((t, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{t.icon}</span>
                  <h3 className="text-lg font-bold" style={{color: 'var(--color-primary)'}}>{t.nombre}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-slate-600">🚏 {t.lineas}</p>
                  <p className="text-slate-600">🕐 {t.horario}</p>
                  <p className="text-slate-600">⏱️ {t.frecuencia}</p>
                  <p className="bg-amber-50 text-amber-800 p-2 rounded-lg">💡 {t.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTADIOS */}
      <section id="estadios" className="py-16 bg-slate-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <span className="text-2xl">⚽</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>Estadios de Fútbol</h2>
              <p className="text-slate-600">Cómo llegar y conseguir entradas</p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              { 
                equipo: 'SL Benfica',
                estadio: 'Estádio da Luz',
                capacidad: '64.642 espectadores',
                direccion: 'Av. Eusébio da Silva Ferreira',
                imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
                color: 'from-red-600 to-red-700',
                metro: 'Línea Azul - Estación "Alto dos Moinhos" o "Colégio Militar/Luz"',
                bus: 'Líneas 703, 726, 729, 750',
                entradas: 'www.slbenfica.pt - Desde 20€',
                tour: 'Tour del estadio + museo: 15€ (incluye trofeos y vestuarios)',
                tip: 'Los partidos grandes se agotan rápido. Compra online con anticipación.'
              },
              { 
                equipo: 'Sporting CP',
                estadio: 'Estádio José Alvalade',
                capacidad: '50.095 espectadores',
                direccion: 'Rua Professor Fernando da Fonseca',
                imagen: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
                color: 'from-green-600 to-green-700',
                metro: 'Línea Verde - Estación "Campo Grande"',
                bus: 'Líneas 701, 736, 738, 755',
                entradas: 'www.sporting.pt - Desde 15€',
                tour: 'Tour del estadio + museo: 12.50€',
                tip: 'El derby contra Benfica es el más intenso de Portugal.'
              },
              { 
                equipo: 'Selección Portugal',
                estadio: 'Estádio da Luz / José Alvalade',
                capacidad: 'Alterna entre ambos estadios',
                direccion: 'Depende del partido',
                imagen: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80',
                color: 'from-red-500 to-green-600',
                metro: 'Según estadio (ver arriba)',
                bus: 'Según estadio (ver arriba)',
                entradas: 'www.fpf.pt - Desde 25€',
                tour: 'N/A',
                tip: 'Los partidos de la selección se anuncian con poca antelación. Sigue @selecaoportugal'
              },
            ].map((est, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto relative">
                    <img src={est.imagen} alt={est.estadio} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${est.color} opacity-60`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <p className="text-3xl font-bold">{est.equipo}</p>
                        <p className="text-white/80">{est.estadio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-semibold text-slate-400 mb-1">CÓMO LLEGAR</p>
                        <p className="text-sm text-slate-600 mb-1">🚇 {est.metro}</p>
                        <p className="text-sm text-slate-600">🚌 {est.bus}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 mb-1">ENTRADAS</p>
                        <p className="text-sm text-slate-600 mb-1">🎟️ {est.entradas}</p>
                        {est.tour !== 'N/A' && <p className="text-sm text-slate-600">🏟️ {est.tour}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <span>📍 {est.direccion}</span>
                      <span>•</span>
                      <span>👥 {est.capacidad}</span>
                    </div>
                    <p className="text-sm bg-amber-50 text-amber-800 p-3 rounded-lg">💡 {est.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPRAS */}
      <section id="compras" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
              <span className="text-2xl">🛍️</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>Centros Comerciales</h2>
              <p className="text-slate-600">Los mejores lugares para compras</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                nombre: 'Centro Colombo',
                tipo: 'El más grande de Portugal',
                tiendas: '340+ tiendas, cine, bowling',
                horario: '10:00 - 24:00 (diario)',
                direccion: 'Av. Lusíada',
                metro: 'Línea Azul - Estación "Colégio Militar/Luz"',
                destacado: ['Zara', 'H&M', 'Apple', 'FNAC', 'Primark'],
                tip: 'Muy grande, necesitas mínimo 3 horas para verlo bien',
                imagen: '🏬'
              },
              { 
                nombre: 'Vasco da Gama',
                tipo: 'Moderno junto al río',
                tiendas: '170+ tiendas, acuario cerca',
                horario: '10:00 - 24:00 (diario)',
                direccion: 'Parque das Nações',
                metro: 'Línea Roja - Estación "Oriente"',
                destacado: ['Mango', 'Massimo Dutti', 'Sephora', 'Nike'],
                tip: 'Combínalo con el Oceanário que está al lado',
                imagen: '🌊'
              },
              { 
                nombre: 'El Corte Inglés',
                tipo: 'Grandes almacenes premium',
                tiendas: 'Moda, gourmet, electrónica',
                horario: '10:00 - 22:00 (Dom hasta 20:00)',
                direccion: 'Av. António Augusto de Aguiar',
                metro: 'Línea Azul - Estación "São Sebastião"',
                destacado: ['Marcas premium', 'Supermercado gourmet', 'Tax Free'],
                tip: 'El supermercado del sótano tiene productos portugueses premium',
                imagen: '👔'
              },
              { 
                nombre: 'Amoreiras Shopping',
                tipo: 'Elegante y céntrico',
                tiendas: '200+ tiendas',
                horario: '10:00 - 23:00 (diario)',
                direccion: 'Av. Eng. Duarte Pacheco',
                metro: 'Bus 702, 713, 720',
                destacado: ['Zara Home', 'COS', 'Boutiques locales'],
                tip: 'Tiene un rooftop con buenas vistas de Lisboa',
                imagen: '✨'
              },
              { 
                nombre: 'Freeport Lisboa',
                tipo: 'Outlet (a 30 min del centro)',
                tiendas: '150+ tiendas con descuentos',
                horario: '10:00 - 21:00 (diario)',
                direccion: 'Alcochete',
                metro: 'Bus directo desde Oriente o Marqués de Pombal',
                destacado: ['Gucci', 'Prada', 'Nike', 'Adidas', '30-70% dto'],
                tip: 'Vale la pena si buscas marcas premium con descuento',
                imagen: '🏷️'
              },
              { 
                nombre: 'LX Factory',
                tipo: 'Mercado alternativo',
                tiendas: 'Tiendas vintage, diseño, arte',
                horario: '10:00 - 20:00 (Dom mercadillo)',
                direccion: 'Rua Rodrigues de Faria, 103',
                metro: 'Tranvía 15E o bus 714',
                destacado: ['Ler Devagar (librería)', 'Diseño portugués', 'Street food'],
                tip: 'Domingos hay mercadillo. El ambiente es increíble',
                imagen: '🎨'
              },
            ].map((cc, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{cc.imagen}</span>
                  <div>
                    <h3 className="font-bold" style={{color: 'var(--color-primary)'}}>{cc.nombre}</h3>
                    <p className="text-slate-500 text-sm">{cc.tipo}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm mb-3">
                  <p className="text-slate-600">🏪 {cc.tiendas}</p>
                  <p className="text-slate-600">🕐 {cc.horario}</p>
                  <p className="text-slate-600">🚇 {cc.metro}</p>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {cc.destacado.map((t, j) => (
                    <span key={j} className="text-xs bg-white px-2 py-1 rounded-full text-slate-600">{t}</span>
                  ))}
                </div>
                <p className="text-sm bg-amber-50 text-amber-800 p-2 rounded-lg">💡 {cc.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALUD */}
      <section id="salud" className="py-16 bg-slate-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <span className="text-2xl">🏥</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>Salud y Farmacias</h2>
              <p className="text-slate-600">Por si necesitas atención médica</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-lg mb-4" style={{color: 'var(--color-primary)'}}>🏥 Hospitales principales</h3>
              <div className="space-y-4">
                {[
                  { nombre: 'Hospital Santa Maria', direccion: 'Av. Prof. Egas Moniz', tel: '21 780 5000', tipo: 'Público - Urgencias 24h' },
                  { nombre: 'Hospital São José', direccion: 'Rua José António Serrano', tel: '21 884 1000', tipo: 'Público - Urgencias 24h' },
                  { nombre: 'CUF Descobertas', direccion: 'Parque das Nações', tel: '21 002 5200', tipo: 'Privado - Mejor atención' },
                  { nombre: 'British Hospital', direccion: 'Rua Saraiva de Carvalho', tel: '21 721 3400', tipo: 'Privado - Hablan inglés' },
                ].map((h, i) => (
                  <div key={i} className="border-b border-slate-100 pb-3 last:border-0">
                    <p className="font-semibold">{h.nombre}</p>
                    <p className="text-slate-600 text-sm">📍 {h.direccion}</p>
                    <p className="text-slate-600 text-sm">📞 {h.tel}</p>
                    <p className="text-slate-500 text-xs">{h.tipo}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-lg mb-4" style={{color: 'var(--color-primary)'}}>💊 Farmacias 24 horas</h3>
              <div className="space-y-4">
                {[
                  { nombre: 'Farmácia Barral', direccion: 'Rossio - Praça D. Pedro IV', zona: 'Centro / Baixa' },
                  { nombre: 'Farmácia Estácio', direccion: 'Rua Áurea, 157', zona: 'Baixa-Chiado' },
                  { nombre: 'Farmácia Azevedos', direccion: 'Praça Dom Pedro IV, 31', zona: 'Rossio' },
                ].map((f, i) => (
                  <div key={i} className="border-b border-slate-100 pb-3 last:border-0">
                    <p className="font-semibold">{f.nombre}</p>
                    <p className="text-slate-600 text-sm">📍 {f.direccion}</p>
                    <p className="text-green-600 text-xs font-medium">🟢 {f.zona} - Abierta 24h</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-800 text-sm">💡 Para encontrar farmacias de turno: <strong>www.farmaciasdeservico.net</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <h4 className="font-bold text-amber-900 mb-2">🇪🇺 Tarjeta Sanitaria Europea</h4>
            <p className="text-amber-800 text-sm">Si eres ciudadano de la UE, la Tarjeta Sanitaria Europea te da acceso a sanidad pública en las mismas condiciones que los portugueses. Aún así, recomendamos un seguro de viaje para repatriación y gastos no cubiertos.</p>
          </div>
        </div>
      </section>

      {/* CONECTIVIDAD */}
      <section id="conectividad" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
              <span className="text-2xl">📱</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>Conectividad</h2>
              <p className="text-slate-600">Internet y comunicaciones</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { 
                titulo: 'Roaming UE',
                icono: '🇪🇺',
                info: 'Si tienes móvil europeo, el roaming es gratuito. Usas tus datos como en casa.',
                tip: 'Verifica con tu operador los límites de datos en roaming.'
              },
              { 
                titulo: 'SIM Local',
                icono: '📲',
                info: 'Vodafone, NOS y MEO venden tarjetas prepago. Desde 10€ con 5GB.',
                tip: 'Cómpralas en el aeropuerto o tiendas de los operadores.'
              },
              { 
                titulo: 'eSIM',
                icono: '✨',
                info: 'Airalo, Holafly ofrecen eSIM para Portugal. Activas desde el móvil.',
                tip: 'Ideal si tu móvil es compatible y no quieres cambiar SIM.'
              },
            ].map((c, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5">
                <span className="text-3xl mb-3 block">{c.icono}</span>
                <h3 className="font-bold mb-2" style={{color: 'var(--color-primary)'}}>{c.titulo}</h3>
                <p className="text-slate-600 text-sm mb-3">{c.info}</p>
                <p className="text-sm bg-amber-50 text-amber-800 p-2 rounded-lg">💡 {c.tip}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-xl p-5">
            <h3 className="font-bold mb-4" style={{color: 'var(--color-primary)'}}>📶 WiFi Gratis en Lisboa</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { lugar: 'Lisboa WiFi (oficial)', cobertura: 'Plazas principales y zonas turísticas' },
                { lugar: 'Metro de Lisboa', cobertura: 'Todas las estaciones' },
                { lugar: 'Starbucks / McDonald\'s', cobertura: 'WiFi gratis para clientes' },
                { lugar: 'Centros comerciales', cobertura: 'Colombo, Vasco da Gama, etc.' },
                { lugar: 'Aeropuerto', cobertura: 'WiFi gratis en todo el aeropuerto' },
                { lugar: 'Bibliotecas públicas', cobertura: 'WiFi gratis con registro' },
              ].map((w, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                  <span className="text-green-500">📶</span>
                  <div>
                    <p className="font-medium text-sm">{w.lugar}</p>
                    <p className="text-slate-500 text-xs">{w.cobertura}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>¿Listo para explorar?</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Ahora que tienes toda la info práctica</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">Descubre nuestros itinerarios con rutas, restaurantes y los mejores spots de Lisboa organizados día a día.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/itinerarios" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-all" style={{background: 'var(--color-accent)'}}>
                Ver itinerarios
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link href="/apps" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg border-2 hover:scale-105 transition-all" style={{borderColor: 'var(--color-primary)', color: 'var(--color-primary)'}}>
                Apps útiles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
