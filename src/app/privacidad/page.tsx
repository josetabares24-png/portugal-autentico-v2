import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacidad</h1>
          <p className="text-white/70">Simple y transparente</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Tu privacidad es importante</h2>
          <p className="text-slate-600 mb-6">
            Solo guardamos tu email para enviarte los itinerarios que compres. Nada mas.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Pagos seguros</h2>
          <p className="text-slate-600 mb-6">
            Los pagos se procesan directamente por Stripe. Nosotros nunca vemos ni guardamos los datos de tu tarjeta.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>No spam</h2>
          <p className="text-slate-600 mb-6">
            No vendemos tu email ni enviamos publicidad. Solo recibiras tu itinerario y actualizaciones importantes del mismo.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>Contacto</h2>
          <p className="text-slate-600 mb-6">
            Dudas? Escribenos a hola@portugalautentico.com
          </p>

          <div className="mt-12 pt-8 border-t">
            <Link href="/" className="inline-flex items-center gap-2 font-medium" style={{color: 'var(--color-primary)'}}>
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
