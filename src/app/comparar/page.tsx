import Link from 'next/link';

export default function CompararPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Compara los packs</h1>
          <p className="text-xl text-white/80">Elige segun cuantos dias tienes en Lisboa</p>
        </div>
      </section>

      <section className="py-16" style={{background: 'var(--color-secondary)'}}>
        <div className="max-w-5xl mx-auto px-4">
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-sm font-semibold mb-2" style={{color: 'var(--color-primary)'}}>1 DIA</div>
              <div className="text-4xl font-bold mb-1" style={{color: 'var(--color-text)'}}>5.99</div>
              <div className="text-slate-500 text-sm mb-4">EUR</div>
              <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="btn-secondary text-sm w-full block text-center">Ver pack</Link>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg relative border-2" style={{borderColor: 'var(--color-accent)'}}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white" style={{background: 'var(--color-accent)'}}>POPULAR</div>
              <div className="text-sm font-semibold mb-2" style={{color: 'var(--color-accent)'}}>2 DIAS</div>
              <div className="text-4xl font-bold mb-1" style={{color: 'var(--color-text)'}}>8.99</div>
              <div className="text-slate-500 text-sm mb-4">EUR</div>
              <Link href="/itinerarios/lisboa-2-dias-completo" className="btn-primary text-sm w-full block text-center">Ver pack</Link>
            </div>
            
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-sm font-semibold mb-2 text-purple-600">3 DIAS</div>
              <div className="text-4xl font-bold mb-1" style={{color: 'var(--color-text)'}}>11.99</div>
              <div className="text-slate-500 text-sm mb-4">EUR</div>
              <Link href="/itinerarios/lisboa-3-dias-premium" className="btn-secondary text-sm w-full block text-center">Ver pack</Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{background: 'var(--color-primary)'}}>
                    <th className="p-4 text-left text-white font-semibold">Incluye</th>
                    <th className="p-4 text-center text-white font-semibold">1 Dia</th>
                    <th className="p-4 text-center font-semibold" style={{background: 'var(--color-accent)', color: 'white'}}>2 Dias</th>
                    <th className="p-4 text-center text-white font-semibold">3 Dias</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Itinerario hora a hora</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                    <td className="p-4 text-center text-green-600 font-bold" style={{background: 'rgba(232,165,75,0.1)'}}>Si</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Contexto historico</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                    <td className="p-4 text-center text-green-600 font-bold" style={{background: 'rgba(232,165,75,0.1)'}}>Si</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Restaurantes recomendados</td>
                    <td className="p-4 text-center" style={{color: 'var(--color-text)'}}>10</td>
                    <td className="p-4 text-center font-semibold" style={{background: 'rgba(232,165,75,0.1)', color: 'var(--color-text)'}}>20</td>
                    <td className="p-4 text-center" style={{color: 'var(--color-text)'}}>30+</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Spots de fotos con horarios</td>
                    <td className="p-4 text-center" style={{color: 'var(--color-text)'}}>8</td>
                    <td className="p-4 text-center font-semibold" style={{background: 'rgba(232,165,75,0.1)', color: 'var(--color-text)'}}>15</td>
                    <td className="p-4 text-center" style={{color: 'var(--color-text)'}}>25+</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Mapas offline</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                    <td className="p-4 text-center text-green-600 font-bold" style={{background: 'rgba(232,165,75,0.1)'}}>Si</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Centro historico + Alfama</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                    <td className="p-4 text-center text-green-600 font-bold" style={{background: 'rgba(232,165,75,0.1)'}}>Si</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Belem + Torre</td>
                    <td className="p-4 text-center text-slate-300">—</td>
                    <td className="p-4 text-center text-green-600 font-bold" style={{background: 'rgba(232,165,75,0.1)'}}>Si</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>LX Factory</td>
                    <td className="p-4 text-center text-slate-300">—</td>
                    <td className="p-4 text-center text-green-600 font-bold" style={{background: 'rgba(232,165,75,0.1)'}}>Si</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Bares y vida nocturna</td>
                    <td className="p-4 text-center text-slate-300">—</td>
                    <td className="p-4 text-center text-green-600 font-bold" style={{background: 'rgba(232,165,75,0.1)'}}>Si</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Sintra (Pena + Regaleira)</td>
                    <td className="p-4 text-center text-slate-300">—</td>
                    <td className="p-4 text-center text-slate-300" style={{background: 'rgba(232,165,75,0.1)'}}>—</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Cascais + costa</td>
                    <td className="p-4 text-center text-slate-300">—</td>
                    <td className="p-4 text-center text-slate-300" style={{background: 'rgba(232,165,75,0.1)'}}>—</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Cabo da Roca</td>
                    <td className="p-4 text-center text-slate-300">—</td>
                    <td className="p-4 text-center text-slate-300" style={{background: 'rgba(232,165,75,0.1)'}}>—</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="p-4 font-medium" style={{color: 'var(--color-text)'}}>Casas de fado autenticas</td>
                    <td className="p-4 text-center text-slate-300">—</td>
                    <td className="p-4 text-center text-slate-300" style={{background: 'rgba(232,165,75,0.1)'}}>—</td>
                    <td className="p-4 text-center text-green-600 font-bold">Si</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold" style={{color: 'var(--color-primary)'}}>Ideal para</td>
                    <td className="p-4 text-center text-sm" style={{color: 'var(--color-text-soft)'}}>Escala corta</td>
                    <td className="p-4 text-center text-sm font-medium" style={{background: 'rgba(232,165,75,0.1)', color: 'var(--color-text)'}}>Fin de semana</td>
                    <td className="p-4 text-center text-sm" style={{color: 'var(--color-text-soft)'}}>Viaje completo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>No sabes cual elegir?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2" style={{color: 'var(--color-text)'}}>1 Dia</h4>
                <p className="text-sm text-slate-600">Tienes escala en Lisboa o solo unas horas. Quieres ver lo esencial sin prisas.</p>
              </div>
              <div className="p-4 rounded-xl" style={{background: 'var(--color-secondary)'}}>
                <h4 className="font-semibold mb-2" style={{color: 'var(--color-accent)'}}>2 Dias (recomendado)</h4>
                <p className="text-sm text-slate-600">Fin de semana clasico. Ves Lisboa completa incluyendo Belem y puedes disfrutar la vida nocturna.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{color: 'var(--color-text)'}}>3 Dias</h4>
                <p className="text-sm text-slate-600">Quieres la experiencia completa. Sintra es imprescindible y merece un dia entero.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
