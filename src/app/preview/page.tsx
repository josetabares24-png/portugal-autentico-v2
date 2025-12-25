import Link from 'next/link';

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6">PREVIEW GRATIS</span>
          <h1 className="text-4xl font-bold mb-4">Mira como es un itinerario</h1>
          <p className="text-xl text-slate-300">Te mostramos las primeras 3 horas del itinerario de 1 dia. Sin compromiso.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-center justify-between">
            <p className="text-amber-800">Este es un preview. El itinerario completo tiene 8+ horas de contenido.</p>
            <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="bg-amber-500 text-white px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap">
              Ver completo
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">Itinerario - Primeras 3 horas</h2>
          
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-center min-w-16">
                  <span className="text-xl font-bold text-blue-600">08:30</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Praca do Comercio - Punto de inicio</h3>
                  <p className="text-slate-600 mt-2">Empieza tu dia en la plaza mas impresionante de Lisboa, justo frente al rio Tajo. El ambiente a primera hora es magico - pocos turistas y luz perfecta para fotos.</p>
                  <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200">
                    <p className="text-sm font-semibold text-slate-700">Desayuno recomendado:</p>
                    <p className="text-sm text-slate-600">Cafe Martinho da Arcada (el mas antiguo de Lisboa, desde 1782). Pide tostada con mantequilla y cafe: 4 EUR. Esta en los arcos de la plaza.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-center min-w-16">
                  <span className="text-xl font-bold text-blue-600">09:30</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Rua Augusta y Arco Triunfal</h3>
                  <p className="text-slate-600 mt-2">Camina por la calle peatonal principal de Lisboa. Esta llena de tiendas y cafes. Pasa bajo el Arco da Rua Augusta - si quieres subir (3 EUR), hazlo ahora que no hay cola. Las vistas desde arriba son espectaculares.</p>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-700">Tip local:</p>
                    <p className="text-sm text-blue-600">Evita los restaurantes de Rua Augusta - son caros y turisticos. Guarda el hambre para Alfama.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-center min-w-16">
                  <span className="text-xl font-bold text-blue-600">10:00</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Elevador de Santa Justa - El truco</h3>
                  <p className="text-slate-600 mt-2">Este elevador es iconico pero la cola puede ser de 1 hora. NO hagas la cola. Hay una alternativa gratuita que te explicamos:</p>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm font-semibold text-green-700">Alternativa gratis:</p>
                    <p className="text-sm text-green-600">Sube por las escaleras del Convento do Carmo (al lado). Llegas al mismo mirador sin cola y sin pagar. Las vistas son identicas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-center min-w-16">
                  <span className="text-xl font-bold text-blue-600">10:30</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Convento do Carmo</h3>
                  <p className="text-slate-600 mt-2">Ruinas goticas impresionantes al aire libre. El terremoto de 1755 destruyo el techo, pero las columnas siguen en pie. Muy fotogenico.</p>
                  <p className="text-slate-500 text-sm mt-2">Entrada: 5 EUR | Tiempo: 20-30 minutos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-slate-100 to-blue-50 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">í´’</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">El itinerario continua...</h3>
            <p className="text-slate-600 mb-6">Faltan 5+ horas de contenido: Chiado, Alfama, Castillo, miradores, restaurantes recomendados, tips de transporte y mas.</p>
            <Link href="/itinerarios/lisboa-1-dia-lo-esencial" className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all">
              Ver itinerario completo - 27 EUR
            </Link>
            <p className="text-slate-500 text-sm mt-4">Garantia de 14 dias - Si no te gusta, te devolvemos el dinero</p>
          </div>
        </div>
      </section>
    </main>
  );
}
