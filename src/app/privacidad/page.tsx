import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16" style={{background: 'var(--color-primary)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Politica de Privacidad</h1>
          <p className="text-white/70">Ultima actualizacion: Diciembre 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>1. Informacion que recopilamos</h2>
          <p className="text-slate-600 mb-6">
            Recopilamos informacion que nos proporcionas directamente al realizar una compra, como tu nombre, direccion de correo electronico y datos de pago. Los pagos son procesados de forma segura por Stripe y no almacenamos informacion de tarjetas de credito.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>2. Como usamos tu informacion</h2>
          <p className="text-slate-600 mb-6">
            Utilizamos tu informacion para procesar tus pedidos, enviarte los itinerarios adquiridos, y comunicarnos contigo sobre tu compra.
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>3. Compartir informacion</h2>
          <p className="text-slate-600 mb-6">
            No vendemos ni compartimos tu informacion personal con terceros, excepto los proveedores necesarios para procesar pagos (Stripe).
          </p>

          <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--color-primary)'}}>4. Contacto</h2>
          <p className="text-slate-600 mb-6">
            Email: hola@portugalautentico.com
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
