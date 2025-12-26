import Link from 'next/link';

export default function FreeTourPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Walking Tours en Lisboa</h1>
          <p className="text-xl text-white/80">Todo lo que necesitas saber antes de reservar</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="prose prose-lg max-w-none">
            <h2 style={{color: 'var(--color-primary)'}}>Como funcionan los Free Tours</h2>
            <p>Los free walking tours son una tradicion en Europa. Un guia local te lleva por la ciudad durante 2-3 horas explicandote la historia y curiosidades. Al final, tu decides cuanto pagar segun tu satisfaccion.</p>
            
            <div className="rounded-2xl p-6 my-8" style={{background: 'var(--color-secondary)'}}>
              <h3 className="mt-0" style={{color: 'var(--color-primary)'}}>Que esperar</h3>
              <ul className="mb-0">
                <li><strong>Duracion:</strong> 2-3 horas caminando</li>
                <li><strong>Grupo:</strong> 15-30 personas normalmente</li>
                <li><strong>Propina sugerida:</strong> 10-15 EUR por persona</li>
                <li><strong>Idiomas:</strong> Espanol, ingles, portugues</li>
                <li><strong>Reserva:</strong> Online, gratis, pero obligatoria</li>
              </ul>
            </div>

            <h2 style={{color: 'var(--color-primary)'}}>Los mejores Free Tours de Lisboa</h2>
            
            <div className="grid gap-6 my-8">
              <div className="border rounded-xl p-6">
                <h3 className="mt-0 text-lg" style={{color: 'var(--color-primary)'}}>Sandeman's New Europe</h3>
                <p className="text-slate-600 mb-4">El mas conocido. Tours en espanol e ingles. Salen de Praca Luis de Camoes varias veces al dia.</p>
                <a href="https://www.neweuropetours.eu/lisbon" target="_blank" className="font-medium" style={{color: 'var(--color-accent)'}}>Reservar en su web →</a>
              </div>
              
              <div className="border rounded-xl p-6">
                <h3 className="mt-0 text-lg" style={{color: 'var(--color-primary)'}}>Lisbon Free Tour</h3>
                <p className="text-slate-600 mb-4">Guias locales portugueses. Grupos mas pequenos. Buenos reviews en TripAdvisor.</p>
                <a href="https://www.lisbonfreetour.com" target="_blank" className="font-medium" style={{color: 'var(--color-accent)'}}>Reservar en su web →</a>
              </div>
              
              <div className="border rounded-xl p-6">
                <h3 className="mt-0 text-lg" style={{color: 'var(--color-primary)'}}>Free Walking Tours Lisboa</h3>
                <p className="text-slate-600 mb-4">Varias rutas tematicas: centro historico, Alfama, Belem. Puedes hacer mas de uno.</p>
                <a href="https://www.freewalkingtourslisboa.com" target="_blank" className="font-medium" style={{color: 'var(--color-accent)'}}>Reservar en su web →</a>
              </div>
            </div>

            <h2 style={{color: 'var(--color-primary)'}}>Free Tour vs. Nuestros Itinerarios</h2>
            <p>Ambas opciones son validas. Depende de como te guste viajar:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border rounded-xl p-6">
              <h3 className="font-bold mb-4" style={{color: 'var(--color-primary)'}}>Free Tour es mejor si...</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Es tu primera vez y quieres una introduccion general
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Viajas solo y quieres conocer otros viajeros
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Prefieres que alguien hable y tu solo escuchar
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Tienes solo unas horas en la ciudad
                </li>
              </ul>
            </div>

            <div className="rounded-xl p-6" style={{background: 'var(--color-secondary)'}}>
              <h3 className="font-bold mb-4" style={{color: 'var(--color-primary)'}}>Nuestro pack es mejor si...</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span style={{color: 'var(--color-accent)'}}>✓</span>
                  No te gustan los grupos grandes
                </li>
                <li className="flex items-start gap-2">
                  <span style={{color: 'var(--color-accent)'}}>✓</span>
                  Quieres ir a tu ritmo, parar a tomar fotos
                </li>
                <li className="flex items-start gap-2">
                  <span style={{color: 'var(--color-accent)'}}>✓</span>
                  Necesitas recomendaciones de restaurantes
                </li>
                <li className="flex items-start gap-2">
                  <span style={{color: 'var(--color-accent)'}}>✓</span>
                  Tienes varios dias y quieres todo organizado
                </li>
              </ul>
              <Link href="/itinerarios" className="inline-block mt-4 font-medium" style={{color: 'var(--color-primary)'}}>Ver nuestros packs →</Link>
            </div>
          </div>

          <div className="rounded-2xl p-8 text-center mt-12" style={{background: 'var(--color-primary)'}}>
            <h3 className="text-2xl font-bold text-white mb-2">Tip: Puedes hacer ambos</h3>
            <p className="text-white/80 mb-6">Muchos viajeros hacen un Free Tour el primer dia para orientarse, y luego usan nuestro itinerario para explorar a fondo los dias siguientes.</p>
            <Link href="/itinerarios" className="inline-block px-6 py-3 rounded-xl font-semibold" style={{background: 'var(--color-accent)', color: 'white'}}>Ver itinerarios desde 5.99 EUR</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
