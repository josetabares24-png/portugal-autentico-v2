import Link from 'next/link';

export default function LisboaPracticaPage() {
  const centrosComerciales = [
    {
      nombre: 'Centro Colombo',
      desc: 'El más grande de Portugal con más de 340 tiendas',
      metro: 'Colégio Militar/Luz',
      horario: '10:00 - 24:00',
      rating: 4.5,
      reviews: 28450,
      badge: 'Más grande',
      badgeColor: 'bg-amber-500',
      imagen: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80',
      tiendas: ['Zara', 'H&M', 'Apple', 'FNAC', 'Primark']
    },
    {
      nombre: 'Vasco da Gama',
      desc: 'Centro moderno junto al Oceanário en Parque das Nações',
      metro: 'Oriente',
      horario: '10:00 - 24:00',
      rating: 4.4,
      reviews: 15230,
      badge: 'Moderno',
      badgeColor: 'bg-blue-500',
      imagen: 'https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80',
      tiendas: ['Mango', 'Massimo Dutti', 'Nike', 'Sephora']
    },
    {
      nombre: 'El Corte Inglés',
      desc: 'Grandes almacenes premium con supermercado gourmet',
      metro: 'São Sebastião',
      horario: '10:00 - 22:00',
      rating: 4.3,
      reviews: 12840,
      badge: 'Premium',
      badgeColor: 'bg-purple-500',
      imagen: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      tiendas: ['Gourmet', 'Moda', 'Electrónica', 'Hogar']
    },
    {
      nombre: 'Amoreiras Shopping',
      desc: 'Centro elegante con terraza panorámica y cine',
      metro: 'Bus 702, 713',
      horario: '10:00 - 23:00',
      rating: 4.2,
      reviews: 8920,
      badge: 'Elegante',
      badgeColor: 'bg-pink-500',
      imagen: 'https://images.unsplash.com/photo-1555529771-7888783a18d3?w=800&q=80',
      tiendas: ['Boutiques', 'Restaurantes', 'Cine UCI']
    },
    {
      nombre: 'Freeport Lisboa',
      desc: 'Outlet a 30 min del centro con descuentos 30-70%',
      metro: 'Bus desde Oriente (30 min)',
      horario: '10:00 - 21:00',
      rating: 4.1,
      reviews: 19540,
      badge: 'Outlet',
      badgeColor: 'bg-green-500',
      imagen: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
      tiendas: ['Guess', 'Levi\'s', 'Adidas', 'Tommy Hilfiger']
    },
    {
      nombre: 'LX Factory',
      desc: 'Mercado creativo con tiendas vintage, arte y gastronomía',
      metro: 'Tranvía 15E',
      horario: '10:00 - 20:00',
      rating: 4.6,
      reviews: 31280,
      badge: 'Alternativo',
      badgeColor: 'bg-orange-500',
      imagen: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
      tiendas: ['Ler Devagar', 'Landeau', 'Vintage', 'Arte']
    },
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
            GUÍA PRÁCTICA
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 italic" style={{fontFamily: 'Georgia, serif'}}>
            Todo lo que necesitas saber
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            Emergencias, transporte, estadios, compras y conectividad.
          </p>
        </div>
      </section>

      {/* Emergencias */}
      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Números importantes</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>Emergencias</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { numero: '112', nombre: 'Emergencias General', desc: 'Policía, bomberos, ambulancia' },
              { numero: '21 342 1623', nombre: 'Policía Turística', desc: 'Hablan inglés y español' },
              { numero: '21 792 7700', nombre: 'Ambulancia (INEM)', desc: 'Emergencias médicas' },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 shadow-sm text-center">
                <p className="text-3xl font-bold mb-2" style={{color: 'var(--color-accent)'}}>{item.numero}</p>
                <p className="font-bold" style={{color: 'var(--color-primary)'}}>{item.nombre}</p>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>Embajadas y Consulados</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { pais: 'España', tel: '+351 21 347 2381' },
                { pais: 'México', tel: '+351 21 319 2030' },
                { pais: 'Argentina', tel: '+351 21 799 4810' },
                { pais: 'Colombia', tel: '+351 21 017 7470' },
                { pais: 'Chile', tel: '+351 21 315 8944' },
                { pais: 'Perú', tel: '+351 21 386 4372' },
              ].map((emb, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                  <span className="font-medium" style={{color: 'var(--color-primary)'}}>{emb.pais}</span>
                  <span className="text-slate-600 text-sm">{emb.tel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aeropuerto */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Aeropuerto Humberto Delgado</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>Cómo llegar al centro</h2>
            <p className="text-slate-600 mt-2">A solo 7 km del centro de Lisboa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { medio: 'Metro', precio: '1.65€', tiempo: '25-30 min', tip: 'Línea Roja. La opción más barata.' },
              { medio: 'Aerobus', precio: '4€', tiempo: '20-35 min', tip: 'Directo con espacio para maletas.' },
              { medio: 'Taxi', precio: '15-20€', tiempo: '15-25 min', tip: 'Precio fijo al centro ~15€.' },
              { medio: 'Uber/Bolt', precio: '10-18€', tiempo: '15-25 min', tip: 'Generalmente más barato que taxi.' },
            ].map((op, i) => (
              <div key={i} className="card-hover bg-slate-50 rounded-2xl p-5">
                <h3 className="font-bold text-lg mb-1" style={{color: 'var(--color-primary)'}}>{op.medio}</h3>
                <div className="flex gap-3 mb-3">
                  <span className="font-bold" style={{color: 'var(--color-accent)'}}>{op.precio}</span>
                  <span className="text-slate-500">{op.tiempo}</span>
                </div>
                <p className="text-slate-600 text-sm">{op.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transporte */}
      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Moverse por la ciudad</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>Transporte Público</h2>
          </div>

          {/* Tarjeta destacada */}
          <div className="rounded-2xl p-8 mb-8 text-white" style={{background: 'var(--color-primary)'}}>
            <h3 className="text-xl font-bold mb-4">Tarjeta Viva Viagem</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold">0.50€</p>
                <p className="text-white/70 text-sm">Coste tarjeta</p>
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
              { nombre: 'Metro', info: '4 líneas · 6:30 - 1:00 · Cada 4-7 min', tip: 'La forma más rápida de cruzar la ciudad' },
              { nombre: 'Tranvía', info: 'Líneas 12, 15, 18, 24, 25, 28 · 6:00 - 23:00', tip: 'El 28 es turístico pero muy lleno. Prueba el 12 o 25' },
              { nombre: 'Autobús', info: 'Red extensa · 6:00 - 21:00 · Cada 10-20 min', tip: 'Útil para zonas sin metro como Belém' },
              { nombre: 'Elevadores', info: 'Bica, Glória, Lavra + Santa Justa · 7:00 - 21:00', tip: 'Incluidos en la tarjeta 24h. Santa Justa tiene cola' },
            ].map((t, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2" style={{color: 'var(--color-primary)'}}>{t.nombre}</h3>
                <p className="text-slate-600 text-sm mb-3">{t.info}</p>
                <p className="text-sm italic" style={{color: 'var(--color-accent)'}}>{t.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Fútbol en Lisboa</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>Estadios</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                equipo: 'SL Benfica',
                estadio: 'Estádio da Luz',
                capacidad: '64.642 espectadores',
                metro: 'Línea Azul - Colégio Militar/Luz',
                entradas: 'slbenfica.pt - Desde 20€',
                tour: 'Estadio + museo: 15€',
                imagen: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
                color: 'bg-red-600'
              },
              {
                equipo: 'Sporting CP',
                estadio: 'Estádio José Alvalade',
                capacidad: '50.095 espectadores',
                metro: 'Línea Verde - Campo Grande',
                entradas: 'sporting.pt - Desde 15€',
                tour: 'Estadio + museo: 12.50€',
                imagen: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
                color: 'bg-green-600'
              },
            ].map((est, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="h-48 relative">
                  <img src={est.imagen} alt={est.estadio} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-2xl font-bold">{est.equipo}</p>
                    <p className="text-white/80 text-sm">{est.estadio}</p>
                  </div>
                  <div className={`absolute top-4 right-4 ${est.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {est.capacidad}
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><span className="font-medium" style={{color: 'var(--color-primary)'}}>Metro:</span> {est.metro}</p>
                    <p><span className="font-medium" style={{color: 'var(--color-primary)'}}>Entradas:</span> {est.entradas}</p>
                    <p><span className="font-medium" style={{color: 'var(--color-primary)'}}>Tour:</span> {est.tour}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compras - ACTUALIZADO CON IMÁGENES Y RATING */}
      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Shopping</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>Centros Comerciales</h2>
            <p className="text-slate-600 mt-2">Los mejores lugares para ir de compras en Lisboa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centrosComerciales.map((cc, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Imagen */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cc.imagen}
                    alt={cc.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`${cc.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                      {cc.badge}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-lg">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span className="font-bold text-sm">{cc.rating}</span>
                    <span className="text-slate-400 text-xs">({(cc.reviews / 1000).toFixed(1)}k)</span>
                  </div>
                  
                  {/* Nombre sobre imagen */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white text-lg font-bold">{cc.nombre}</h3>
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4">{cc.desc}</p>
                  
                  {/* Tiendas destacadas */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cc.tiendas.map((tienda, i) => (
                        <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{tienda}</span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-sm">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      {cc.metro}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {cc.horario}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salud */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Salud</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>Hospitales y Farmacias</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4" style={{color: 'var(--color-primary)'}}>Hospitales</h3>
              <div className="space-y-4">
                {[
                  { nombre: 'Hospital Santa Maria', tel: '21 780 5000', tipo: 'Público - Urgencias 24h' },
                  { nombre: 'CUF Descobertas', tel: '21 002 5200', tipo: 'Privado - Mejor atención' },
                  { nombre: 'British Hospital', tel: '21 721 3400', tipo: 'Privado - Hablan inglés' },
                ].map((h, i) => (
                  <div key={i} className="flex justify-between items-start border-b border-slate-200 pb-3 last:border-0">
                    <div>
                      <p className="font-medium" style={{color: 'var(--color-primary)'}}>{h.nombre}</p>
                      <p className="text-slate-500 text-xs">{h.tipo}</p>
                    </div>
                    <p className="text-slate-600 text-sm">{h.tel}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4" style={{color: 'var(--color-primary)'}}>Farmacias 24h</h3>
              <div className="space-y-4">
                {[
                  { nombre: 'Farmácia Barral', zona: 'Rossio' },
                  { nombre: 'Farmácia Estácio', zona: 'Baixa-Chiado' },
                  { nombre: 'Farmácia Azevedos', zona: 'Rossio' },
                ].map((f, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-slate-200 pb-3 last:border-0">
                    <p className="font-medium" style={{color: 'var(--color-primary)'}}>{f.nombre}</p>
                    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">{f.zona}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-4">Farmacias de turno: farmaciasdeservico.net</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conectividad */}
      <section className="py-20" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase mb-4 block" style={{color: 'var(--color-accent)'}}>Internet</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>Conectividad</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { titulo: 'Roaming UE', desc: 'Si tienes móvil europeo, usas tus datos como en casa sin coste extra.' },
              { titulo: 'SIM Local', desc: 'Vodafone, NOS, MEO. Desde 10€ con 5GB. Cómprala en el aeropuerto.' },
              { titulo: 'eSIM', desc: 'Airalo, Holafly. Activas desde el móvil sin cambiar tu SIM física.' },
            ].map((c, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold mb-2" style={{color: 'var(--color-primary)'}}>{c.titulo}</h3>
                <p className="text-slate-600 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold mb-4" style={{color: 'var(--color-primary)'}}>WiFi Gratis</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
              {['Lisboa WiFi (plazas)', 'Metro de Lisboa', 'Aeropuerto', 'Centros comerciales', 'Starbucks', 'McDonald\'s'].map((w, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {w}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>¿Listo para explorar Lisboa?</h2>
          <p className="text-slate-600 mb-6">Descubre nuestros itinerarios con rutas, restaurantes y los mejores spots.</p>
          <Link href="/itinerarios" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white hover:scale-105 transition-all" style={{background: 'var(--color-accent)'}}>
            Ver itinerarios desde 5.99€
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
