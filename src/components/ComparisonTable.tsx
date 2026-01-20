'use client';

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            ¿Por qué elegir nuestras guías?
          </h2>
          <p className="text-xl text-gray-600">
            Comparación honesta vs alternativas gratuitas
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4 font-bold text-gray-700"></th>
                <th className="text-center py-4 px-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-green-600 font-black text-lg">Nuestras Guías</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4">
                  <span className="text-gray-400 font-bold">Blogs Gratis</span>
                </th>
                <th className="text-center py-4 px-4">
                  <span className="text-gray-400 font-bold">Apps Turísticas</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-orange-50/30 transition-colors">
                <td className="py-4 px-4 font-semibold text-gray-700">Horarios exactos hora a hora</td>
                <td className="text-center py-4 px-4">
                  <span className="text-green-500 text-2xl">✅</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-red-500 text-2xl">❌</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-yellow-500 text-2xl">⚠️</span>
                </td>
              </tr>
              <tr className="hover:bg-orange-50/30 transition-colors">
                <td className="py-4 px-4 font-semibold text-gray-700">Coordenadas GPS precisas</td>
                <td className="text-center py-4 px-4">
                  <span className="text-green-500 text-2xl">✅</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-yellow-500 text-2xl">⚠️</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-green-500 text-2xl">✅</span>
                </td>
              </tr>
              <tr className="hover:bg-orange-50/30 transition-colors">
                <td className="py-4 px-4 font-semibold text-gray-700">Actualizado 2025</td>
                <td className="text-center py-4 px-4">
                  <span className="text-green-500 text-2xl">✅</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-red-500 text-2xl">❌</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-red-500 text-2xl">❌</span>
                </td>
              </tr>
              <tr className="hover:bg-orange-50/30 transition-colors">
                <td className="py-4 px-4 font-semibold text-gray-700">Sin trampas turísticas</td>
                <td className="text-center py-4 px-4">
                  <span className="text-green-500 text-2xl">✅</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-red-500 text-2xl">❌</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-red-500 text-2xl">❌</span>
                </td>
              </tr>
              <tr className="hover:bg-orange-50/30 transition-colors">
                <td className="py-4 px-4 font-semibold text-gray-700">Restaurantes verificados</td>
                <td className="text-center py-4 px-4">
                  <span className="text-green-500 text-2xl">✅</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-yellow-500 text-2xl">⚠️</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-red-500 text-2xl">❌</span>
                </td>
              </tr>
              <tr className="hover:bg-orange-50/30 transition-colors">
                <td className="py-4 px-4 font-semibold text-gray-700">Soporte directo del creador</td>
                <td className="text-center py-4 px-4">
                  <span className="text-green-500 text-2xl">✅</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-red-500 text-2xl">❌</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-red-500 text-2xl">❌</span>
                </td>
              </tr>
              <tr className="hover:bg-orange-50/30 transition-colors">
                <td className="py-4 px-4 font-semibold text-gray-700">Tips para evitar colas</td>
                <td className="text-center py-4 px-4">
                  <span className="text-green-500 text-2xl">✅</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-yellow-500 text-2xl">⚠️</span>
                </td>
                <td className="text-center py-4 px-4">
                  <span className="text-red-500 text-2xl">❌</span>
                </td>
              </tr>
              <tr className="bg-gradient-to-r from-orange-50 to-orange-100/50 font-bold">
                <td className="py-5 px-4 text-gray-900 text-lg">Precio</td>
                <td className="text-center py-5 px-4">
                  <div className="text-[#FF6B35] text-2xl font-black">€3.99</div>
                  <div className="text-sm text-gray-600">pago único</div>
                </td>
                <td className="text-center py-5 px-4">
                  <div className="text-green-600 text-2xl font-black">Gratis</div>
                  <div className="text-sm text-gray-600">pero info vieja</div>
                </td>
                <td className="text-center py-5 px-4">
                  <div className="text-gray-900 text-2xl font-black">€9-15</div>
                  <div className="text-sm text-gray-600">por mes</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            <strong className="text-gray-900">ROI claro:</strong> €3.99 te ahorra 3+ horas de investigación (= tu tiempo vale €100+)
          </p>
          <a
            href="#itinerarios"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-5 rounded-xl text-lg hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Ver Guías Desde €3.99</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
