import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export const metadata = {
  title: 'Mis Guías | Estaba en Lisboa',
  description: 'Accede a tus guías compradas de Lisboa',
};

export default async function MisGuiasPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/');
  }

  return (
    <main className="min-h-screen bg-[#FFFDF7] pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Mis Guías de Lisboa
          </h1>
          <p className="text-xl text-slate-600">
            Aquí encontrarás todas las guías que has comprado
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-12 text-center">
          <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Panel de Guías en Desarrollo
          </h2>

          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Estamos trabajando en tu panel personalizado para gestionar tus guías compradas.
            Mientras tanto, las recibirás por email inmediatamente después de la compra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/itinerarios"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Ver Todas las Guías
            </Link>

            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-2xl hover:border-orange-500 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              ¿Tienes Dudas?
            </Link>
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-black text-orange-600">1</span>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Compras tu Guía</h3>
            <p className="text-slate-600">Elige tu itinerario y completa el pago seguro con Stripe</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-black text-orange-600">2</span>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Recibe tu Email</h3>
            <p className="text-slate-600">Te enviamos la guía en PDF inmediatamente a tu correo</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-black text-orange-600">3</span>
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Descarga y Disfruta</h3>
            <p className="text-slate-600">Acceso de por vida + actualizaciones gratis</p>
          </div>
        </div>
      </div>
    </main>
  );
}
