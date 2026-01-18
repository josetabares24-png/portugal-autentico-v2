import Link from 'next/link';
import Image from 'next/image';

export default function SeguridadPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?q=80&w=2000&auto=format&fit=crop"
            alt="Lisboa safe streets"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-blue-900/75 to-slate-900/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/20 mb-8">
            <span className="material-symbols-outlined text-green-400">verified_user</span>
            <span className="text-sm font-bold tracking-wide">GUÍA DE SEGURIDAD</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 text-white tracking-tight drop-shadow-2xl" style={{fontFamily: 'Georgia, serif'}}>
            Lisboa es<br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              muy segura
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg">
            Como en toda ciudad turística, hay zonas donde tener más cuidado. Te lo explicamos todo.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-400">check_circle</span>
              <span>Ciudad segura</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-yellow-400">verified</span>
              <span>Tips verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400">shield</span>
              <span>100% gratis</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl opacity-70">expand_more</span>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">OK</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Zonas muy seguras</h3>
              <ul className="text-slate-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  <div><strong>Belem</strong> - Turistico, tranquilo, familiar</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  <div><strong>Parque das Nacoes</strong> - Moderno, limpio, seguro</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  <div><strong>Principe Real</strong> - Bohemio, caro, tranquilo</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  <div><strong>Chiado</strong> - Comercial, muy transitado</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">+</span>
                  <div><strong>Estrela</strong> - Residencial, embajadas</div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">!</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Atencion normal</h3>
              <ul className="text-slate-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">!</span>
                  <div><strong>Baixa</strong> - Carteristas en hora punta</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">!</span>
                  <div><strong>Alfama de noche</strong> - Calles oscuras y estrechas</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">!</span>
                  <div><strong>Tranvia 28</strong> - Muy lleno, carteristas</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">!</span>
                  <div><strong>Rossio</strong> - Mucha gente, atencion</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">!</span>
                  <div><strong>Santa Apolonia</strong> - Zona de estacion</div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-2xl">
              <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">X</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Evitar de noche</h3>
              <ul className="text-slate-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">X</span>
                  <div><strong>Martim Moniz</strong> - Despues de las 22h</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">X</span>
                  <div><strong>Intendente</strong> - Algunas calles laterales</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">X</span>
                  <div><strong>Cais do Sodre</strong> - Madrugada, borrachos</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">X</span>
                  <div><strong>Anjos</strong> - Calles aisladas de noche</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Tips de seguridad</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Contra carteristas</h4>
                <ul className="text-slate-700 space-y-2">
                  <li>- Usa rinonera frontal, no mochila</li>
                  <li>- Movil en bolsillo delantero</li>
                  <li>- En el tranvia 28, agarra bien el bolso</li>
                  <li>- No dejes nada en mesas de terraza</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">En general</h4>
                <ul className="text-slate-700 space-y-2">
                  <li>- Lisboa es muy segura, no te preocupes</li>
                  <li>- Policia turistica existe y ayuda</li>
                  <li>- Emergencias: 112</li>
                  <li>- Los portugueses son muy amables</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/itinerarios" className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl">
              Ver Itinerarios con rutas seguras
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
