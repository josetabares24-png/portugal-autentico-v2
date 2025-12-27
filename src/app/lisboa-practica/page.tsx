import Link from 'next/link';

export default function LisboaPracticaPage() {
  const secciones = [
    { id: 'emergencias', nombre: 'Emergencias' },
    { id: 'aeropuerto', nombre: 'Aeropuerto' },
    { id: 'transporte', nombre: 'Transporte' },
    { id: 'estadios', nombre: 'Estadios' },
    { id: 'compras', nombre: 'Compras' },
    { id: 'salud', nombre: 'Salud' },
    { id: 'conectividad', nombre: 'Internet' },
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
            Emergencias, transporte, estadios, compras y todo lo que necesitas saber.
          </p>
        </div>
      </section>

      {/* Navegación rápida */}
      <section className="py-3 bg-white border-b sticky top-16 z-30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {secciones.map((sec) => (
              <a 
                key={sec.id}
                href={`#${sec.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border hover:border-slate-300"
                style={{color: 'var(--color-primary)'}}
              >
                {sec.nombre}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCIAS */}
      <section id="emergencias" className="py-16 scroll-mt-32" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-wider uppercase mb-2 block" style={{color: 'var(--color-accent)'}}>Números importantes</span>
            <h2 className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>Emergencias</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { nombre: 'Emergencias', numero: '112', desc: 'Policía, bomberos, ambulancia' },
              { nombre: 'Policía Turística', numero: '21 342 1623', desc: 'Hablan inglés y español' },
              { nombre: 'Ambulancia (INEM)', numero: '21 792 7700', desc: 'Emergencias médicas' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm text-center">
                <p className="text-3xl font-bold mb-1" style={{color: 'var(--color-primary)'}}>{item.numero}</p>
                <p className="font-semibold text-slate-800">{item.nombre}</p>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-4" style={{color: 'var(--color-primary)'}}>Embajadas y Consulados</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { pais: 'España', telefono: '+351 21 347 2381' },
              { pais: 'México', telefono: '+351 21 319 2030' },
              { pais: 'Argentina', telefono: '+351 21 799 4810' },
              { pais: 'Colombia', telefono: '+351 21 017 7470' },
              { pais: 'Chile', telefono: '+351 21 315 8944' },
              { pais: 'Perú', telefono: '+351 21 386 4372' },
            ].map((emb, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm flex justify-between items-center">
                <span className="font-medium" style={{color: 'var(--color-primary)'}}>{emb.pais}</span>
                <span className="text-slate-600 text-sm">{emb.telefono}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AEROPUERTO */}
      <section id="aeropuerto" className="py-16 bg-white scroll-mt-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-wider uppercase mb-2 block" style={{color: 'var(--color-accent)'}}>Aeropuerto Humberto Delgado</span>
            <h2 className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>Cómo llegar al centro</h2>
            <p className="text-slate-600 mt-2">El aeropuerto está a solo 7 km del centro de Lisboa</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                medio: 'Metro (Línea Roja)', 
                precio: '1.65€', 
                tiempo: '25-30 min',
                destino: 'Alameda, Saldanha, São Sebastião',
                tip: 'La opción más barata. Compra tarjeta Viva Viagem (0.50€)'
              },
              { 
                medio: 'Aerobus', 
                precio: '4€', 
                tiempo: '20-35 min',
                destino: 'Marqués de Pombal, Restauradores, Cais do Sodré',
                tip: 'Directo y con espacio para maletas'
              },
              { 
                medio: 'Taxi', 
                precio: '15-20€', 
                tiempo: '15-25 min',
                destino: 'Cualquier punto',
                tip: 'Precio fijo al centro ~15€. Exige taxímetro'
              },
              { 
                medio: 'Uber / Bolt', 
                precio: '10-18€', 
                tiempo: '15-25 min',
                destino: 'Cualquier dirección',
                tip: 'Generalmente más barato que taxi'
              },
            ].map((op, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold" style={{color: 'var(--color-primary)'}}>{op.medio}</h3>
                  <div className="text-right">
                    <span className="font-bold" style={{color: 'var(--color-accent)'}}>{op.precio}</span>
                    <span className="text-slate-500 text-sm ml-2">{op.tiempo}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-2">{op.destino}</p>
                <p className="text-sm text-slate-500 italic">{op.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPORTE */}
      <section id="transporte" className="py-16 scroll-mt-32" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-wider uppercase mb-2 block" style={{color: 'var(--color-accent)'}}>Moverse por Lisboa</span>
            <h2 className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>Transporte Público</h2>
          </div>

          {/* Tarjeta Viva Viagem */}
          <div className="rounded-2xl p-6 mb-8 text-white" style={{background: 'var(--color-primary)'}}>
            <h3 className="text-xl font-bold mb-4">Tarjeta Viva Viagem</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">0.50€</p>
                <p className="text-white/70 text-sm">Coste de la tarjeta</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">1.65€</p>
                <p className="text-white/70 text-sm">Viaje sencillo</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">6.80€</p>
                <p className="text-white/70 text-sm">24h ilimitado</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { nombre: 'Metro', lineas: '4 líneas (Azul, Amarilla, Verde, Roja)', horario: '6:30 - 1:00', frecuencia: 'Cada 4-7 min', tip: 'La forma más rápida' },
              { nombre: 'Tranvía', lineas: 'Líneas 12, 15, 18, 24, 25, 28', horario: '6:00 - 23:00', frecuencia: 'Cada 10-15 min', tip: 'El 28 es turístico pero lleno. Prueba el 12' },
              { nombre: 'Autobús', lineas: 'Red extensa por toda la ciudad', horario: '6:00 - 21:00', frecuencia: 'Cada 10-20 min', tip: 'Útil para Belém' },
              { nombre: 'Elevadores', lineas: 'Bica, Glória, Lavra + Santa Justa', horario: '7:00 - 21:00', frecuencia: 'Continuo', tip: 'Incluidos en tarjeta 24h' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold mb-3" style={{color: 'var(--color-primary)'}}>{t.nombre}</h3>
                <div className="space-y-1 text-sm text-slate-600 mb-3">
                  <p>{t.lineas}</p>
                  <p>{t.horario} · {t.frecuencia}</p>
                </div>
                <p className="text-sm italic text-slate-500">{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTADIOS */}
      <section id="estadios" className="py-16 bg-white scroll-mt-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-wider uppercase mb-2 block" style={{color: 'var(--color-accent)'}}>Fútbol en Lisboa</span>
            <h2 className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>Estadios</h2>
          </div>

          <div className="space-y-6">
            {[
              { 
                equipo: 'SL Benfica',
                estadio: 'Estádio da Luz',
                capacidad: '64.642',
                metro: 'Línea Azul - "Colégio Militar/Luz"',
                entradas: 'slbenfica.pt - Desde 20€',
                tour: '15€ (estadio + museo)',
                imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
                color: 'from-red-600 to-red-700'
              },
              { 
                equipo: 'Sporting CP',
                estadio: 'Estádio José Alvalade',
                capacidad: '50.095',
                metro: 'Línea Verde - "Campo Grande"',
                entradas: 'sporting.pt - Desde 15€',
                tour: '12.50€',
                imagen: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
                color: 'from-green-600 to-green-700'
              },
            ].map((est, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto relative">
                    <img src={est.imagen} alt={est.estadio} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${est.color} opacity-70`}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                      <div>
                        <p className="text-2xl font-bold">{est.equipo}</p>
                        <p className="text-white/80 text-sm">{est.estadio}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-500 text-xs uppercase mb-1">Cómo llegar</p>
                        <p className="text-slate-700">{est.metro}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs uppercase mb-1">Entradas</p>
                        <p className="text-slate-700">{est.entradas}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs uppercase mb-1">Tour del estadio</p>
                        <p className="text-slate-700">{est.tour}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs uppercase mb-1">Capacidad</p>
                        <p className="text-slate-700">{est.capacidad} espectadores</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPRAS */}
      <section id="compras" className="py-16 scroll-mt-32" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-wider uppercase mb-2 block" style={{color: 'var(--color-accent)'}}>Shopping</span>
            <h2 className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>Centros Comerciales</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { nombre: 'Centro Colombo', tipo: 'El más grande de Portugal', metro: 'Colégio Militar/Luz', horario: '10:00 - 24:00' },
              { nombre: 'Vasco da Gama', tipo: 'Moderno junto al Oceanário', metro: 'Oriente', horario: '10:00 - 24:00' },
              { nombre: 'El Corte Inglés', tipo: 'Grandes almacenes premium', metro: 'São Sebastião', horario: '10:00 - 22:00' },
              { nombre: 'Amoreiras', tipo: 'Elegante y céntrico', metro: 'Bus 702, 713', horario: '10:00 - 23:00' },
              { nombre: 'Freeport Outlet', tipo: 'Descuentos 30-70%', metro: 'Bus desde Oriente', horario: '10:00 - 21:00' },
              { nombre: 'LX Factory', tipo: 'Tiendas vintage y diseño', metro: 'Tranvía 15E', horario: '10:00 - 20:00' },
            ].map((cc, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold mb-1" style={{color: 'var(--color-primary)'}}>{cc.nombre}</h3>
                <p className="text-slate-500 text-sm mb-3">{cc.tipo}</p>
                <div className="text-sm text-slate-600 space-y-1">
                  <p>🚇 {cc.metro}</p>
                  <p>🕐 {cc.horario}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALUD */}
      <section id="salud" className="py-16 bg-white scroll-mt-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-wider uppercase mb-2 block" style={{color: 'var(--color-accent)'}}>Salud</span>
            <h2 className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>Hospitales y Farmacias</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-4" style={{color: 'var(--color-primary)'}}>Hospitales</h3>
              <div className="space-y-3">
                {[
                  { nombre: 'Hospital Santa Maria', tel: '21 780 5000', tipo: 'Público' },
                  { nombre: 'CUF Descobertas', tel: '21 002 5200', tipo: 'Privado' },
                  { nombre: 'British Hospital', tel: '21 721 3400', tipo: 'Privado - Inglés' },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0">
                    <div>
                      <p className="font-medium text-slate-800">{h.nombre}</p>
                      <p className="text-slate-500 text-xs">{h.tipo}</p>
                    </div>
                    <p className="text-slate-600 text-sm">{h.tel}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-4" style={{color: 'var(--color-primary)'}}>Farmacias 24h</h3>
              <div className="space-y-3">
                {[
                  { nombre: 'Farmácia Barral', zona: 'Rossio' },
                  { nombre: 'Farmácia Estácio', zona: 'Baixa-Chiado' },
                  { nombre: 'Farmácia Azevedos', zona: 'Rossio' },
                ].map((f, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-0">
                    <p className="font-medium text-slate-800">{f.nombre}</p>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">{f.zona}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-4">Busca farmacias de turno en: farmaciasdeservico.net</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONECTIVIDAD */}
      <section id="conectividad" className="py-16 scroll-mt-32" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-wider uppercase mb-2 block" style={{color: 'var(--color-accent)'}}>Conectividad</span>
            <h2 className="text-3xl font-bold" style={{color: 'var(--color-primary)'}}>Internet y Telefonía</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { titulo: 'Roaming UE', info: 'Si tienes móvil europeo, usas tus datos como en casa.' },
              { titulo: 'SIM Local', info: 'Vodafone, NOS, MEO. Desde 10€ con 5GB. Cómpralas en el aeropuerto.' },
              { titulo: 'eSIM', info: 'Airalo, Holafly. Activas desde el móvil sin cambiar SIM.' },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold mb-2" style={{color: 'var(--color-primary)'}}>{c.titulo}</h3>
                <p className="text-slate-600 text-sm">{c.info}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold mb-4" style={{color: 'var(--color-primary)'}}>WiFi Gratis</h3>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              {['Lisboa WiFi (plazas)', 'Metro de Lisboa', 'Aeropuerto', 'Centros comerciales', 'Starbucks', 'McDonald\'s'].map((w, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-600">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
                  {w}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>¿Listo para explorar Lisboa?</h2>
          <p className="text-slate-600 text-lg mb-8">Descubre nuestros itinerarios con rutas, restaurantes y los mejores spots.</p>
          <Link href="/itinerarios" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg text-white hover:scale-105 transition-all" style={{background: 'var(--color-accent)'}}>
            Ver itinerarios desde 5.99€
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
