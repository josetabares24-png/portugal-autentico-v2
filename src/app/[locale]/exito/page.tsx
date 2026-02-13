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
            ¡Tu guía está lista! Hemos enviado automáticamente un email con:<br />
            <strong>Enlace de descarga directo</strong> • <strong>Instrucciones completas</strong> • <strong>Contenido premium</strong>
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-600 text-2xl mt-0.5">info</span>
              <div className="text-left">
                <h3 className="font-bold text-blue-900 mb-2">¿No recibes el email?</h3>
                <p className="text-sm text-blue-800 mb-3">
                  Los emails se envían automáticamente al completar el pago. Si no lo ves:
                </p>
                <p className="text-sm text-blue-800">
                  1. Revisa tu carpeta de spam o promociones<br />
                  2. Espera hasta 5 minutos<br />
                  3. Escríbenos a <a href="mailto:hola@estabaenlisboa.com" className="underline font-semibold">hola@estabaenlisboa.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-green-600 text-2xl mt-0.5">email</span>
              <div className="text-left">
                <h3 className="font-bold text-green-900 mb-2">¿Qué incluye el email?</h3>
                <p className="text-sm text-green-800">
                  • <strong>Enlace seguro de descarga</strong> (válido 30 días)<br />
                  • <strong>Acceso completo</strong> a tu guía premium<br />
                  • <strong>Instrucciones detalladas</strong> para usar tu guía<br />
                  • <strong>Información de contacto</strong> para soporte
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/mis-guias"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Ver mis guías
            </Link>
            <Link 
              href="/itinerarios"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 hover:border-primary text-slate-700 hover:text-primary font-semibold px-8 py-4 rounded-xl transition-all"
            >
              Ver más guías
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 text-slate-600 hover:text-primary font-medium px-6 py-4 transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
