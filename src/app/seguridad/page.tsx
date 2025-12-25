import Link from 'next/link';

export default function SeguridadPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">GUIA DE SEGURIDAD</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lisboa es muy segura</h1>
          <p className="text-xl text-slate-300">Como en toda ciudad turistica, hay zonas donde tener mas cuidado. Te lo explicamos todo.</p>
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
