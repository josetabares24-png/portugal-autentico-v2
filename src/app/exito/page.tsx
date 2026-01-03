import Link from 'next/link';

export default function ExitoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background-cream">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl p-12 shadow-xl border border-slate-200">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-green-600 text-5xl">check_circle</span>
          </div>
          
          <h1 className="text-4xl font-bold text-text-main mb-4">
            ¡Pago completado!
          </h1>
          
          <p className="text-lg text-text-secondary mb-8">
            Tu guía de Lisboa ha sido enviada a tu email.<br />
            Revisa tu bandeja de entrada (y spam por si acaso).
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-600 text-2xl mt-0.5">info</span>
              <div className="text-left">
                <h3 className="font-bold text-blue-900 mb-2">¿No recibes el email?</h3>
                <p className="text-sm text-blue-800">
                  1. Revisa tu carpeta de spam o promociones<br />
                  2. Espera hasta 10 minutos<br />
                  3. Escríbenos a <a href="mailto:contacto@estabaenlisboa.com" className="underline font-semibold">contacto@estabaenlisboa.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/itinerarios"
              className="btn-primary"
            >
              Ver más guías
            </Link>
            <Link 
              href="/"
              className="btn-secondary"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
