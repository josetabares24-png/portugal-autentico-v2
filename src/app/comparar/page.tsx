import Link from 'next/link';

export default function CompararPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold mb-6">COMPARA</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cual itinerario es para ti?</h1>
        </div>
      </section>

      <section className="py-12 -mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b">
                  <th className="p-6 text-left bg-slate-50 font-medium text-slate-600">Caracteristica</th>
                  <th className="p-6 text-center">
                    <div className="text-blue-600 font-bold">1 Dia</div>
                    <div className="text-2xl font-bold text-slate-900">27 EUR</div>
                  </th>
                  <th className="p-6 text-center bg-amber-50">
                    <div className="text-amber-600 font-bold">2 Dias</div>
                    <div className="text-2xl font-bold text-slate-900">37 EUR</div>
                    <div className="text-xs text-amber-600 font-bold mt-1">MAS VENDIDO</div>
                  </th>
                  <th className="p-6 text-center">
                    <div className="text-purple-600 font-bold">3 Dias</div>
                    <div className="text-2xl font-bold text-slate-900">47 EUR</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">Paradas</td><td className="p-4 text-center">8</td><td className="p-4 text-center bg-amber-50">15</td><td className="p-4 text-center">22</td></tr>
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">Restaurantes</td><td className="p-4 text-center">3</td><td className="p-4 text-center bg-amber-50">6</td><td className="p-4 text-center">9</td></tr>
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">Centro historico</td><td className="p-4 text-center text-green-600 font-bold">SI</td><td className="p-4 text-center bg-amber-50 text-green-600 font-bold">SI</td><td className="p-4 text-center text-green-600 font-bold">SI</td></tr>
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">Alfama y Castillo</td><td className="p-4 text-center text-green-600 font-bold">SI</td><td className="p-4 text-center bg-amber-50 text-green-600 font-bold">SI</td><td className="p-4 text-center text-green-600 font-bold">SI</td></tr>
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">Belem</td><td className="p-4 text-center text-slate-300">-</td><td className="p-4 text-center bg-amber-50 text-green-600 font-bold">SI</td><td className="p-4 text-center text-green-600 font-bold">SI</td></tr>
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">LX Factory</td><td className="p-4 text-center text-slate-300">-</td><td className="p-4 text-center bg-amber-50 text-green-600 font-bold">SI</td><td className="p-4 text-center text-green-600 font-bold">SI</td></tr>
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">Vida nocturna</td><td className="p-4 text-center text-slate-300">-</td><td className="p-4 text-center bg-amber-50 text-green-600 font-bold">SI</td><td className="p-4 text-center text-green-600 font-bold">SI</td></tr>
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">Sintra</td><td className="p-4 text-center text-slate-300">-</td><td className="p-4 text-center bg-amber-50 text-slate-300">-</td><td className="p-4 text-center text-green-600 font-bold">SI</td></tr>
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">Cascais</td><td className="p-4 text-center text-slate-300">-</td><td className="p-4 text-center bg-amber-50 text-slate-300">-</td><td className="p-4 text-center text-green-600 font-bold">SI</td></tr>
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">Mapas offline</td><td className="p-4 text-center text-green-600 font-bold">SI</td><td className="p-4 text-center bg-amber-50 text-green-600 font-bold">SI</td><td className="p-4 text-center text-green-600 font-bold">SI</td></tr>
                <tr className="border-b"><td className="p-4 bg-slate-50 font-medium">Ideal para</td><td className="p-4 text-center text-slate-600">Escala corta</td><td className="p-4 text-center bg-amber-50 text-slate-600">Fin de semana</td><td className="p-4 text-center text-slate-600">Viaje completo</td></tr>
                <tr>
                  <td className="p-6 bg-slate-50"></td>
                  <td className="p-6 text-center"><Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="inline-block bg-slate-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-800">Comprar</Link></td>
                  <td className="p-6 text-center bg-amber-50"><Link href="/itinerarios/lisboa-2-dias-completo" className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold">Comprar</Link></td>
                  <td className="p-6 text-center"><Link href="/itinerarios/lisboa-3-dias-premium" className="inline-block bg-slate-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-slate-800">Comprar</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-slate-300">Todos incluyen garantia de 14 dias. Si no te gusta, te devolvemos el dinero.</p>
        </div>
      </section>
    </main>
  );
}
