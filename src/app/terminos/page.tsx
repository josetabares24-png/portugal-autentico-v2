import Link from 'next/link';

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Términos y Condiciones</h1>
          <p className="text-white/70">Última actualización: Diciembre 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>1. Descripción del servicio</h2>
          <p className="text-slate-600 mb-6">
            Portugal Auténtico ofrece itinerarios digitales descargables para viajes a Lisboa y alrededores.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>2. Garantía de devolución</h2>
          <p className="text-slate-600 mb-6">
            Ofrecemos una garantía de devolución de 14 días. Si no estás satisfecho, puedes solicitar un reembolso completo contactando a hola@portugalautentico.com.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>3. Uso del contenido</h2>
          <p className="text-slate-600 mb-6">
            Los itinerarios son para uso personal. No está permitido redistribuir o revender el contenido.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>4. Contacto</h2>
          <p className="text-slate-600 mb-6">
            Email: hola@portugalautentico.com<br />
            WhatsApp: +351 912 345 678
          </p>

          <div className="mt-12 pt-8 border-t">
            <Link href="/" className="inline-flex items-center gap-2 font-medium" style={{color: 'var(--color-primary)'}}>
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
