import Image from 'next/image';
import Link from 'next/link';

export default function SobreNosotrosPage() {
  return (
    <main className="bg-background-light">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lisboa.jpg"
            alt="Sobre nosotros"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white border border-white/25 mb-8">
            <span className="material-symbols-outlined text-base">verified</span>
            <span className="text-sm font-semibold tracking-wide">Locales en Lisboa</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black leading-tight mb-6 text-white tracking-tight drop-shadow-lg">
            Sobre
            <br />
            <span className="text-accent">Estaba en Lisboa</span>
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Guías reales creadas por quien vive aquí. Sin turistadas, sin perder tiempo.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-background-cream rounded-3xl p-8 border border-border-soft">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">home</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Vivimos aquí</h3>
              <p className="text-slate-600">
                Probamos rutas cada mes para que lo que recomiendas funcione de verdad.
              </p>
            </div>
            <div className="bg-background-cream rounded-3xl p-8 border border-border-soft">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">update</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Actualizadas</h3>
              <p className="text-slate-600">
                Si algo cambia, se actualiza. Nada de guías viejas.
              </p>
            </div>
            <div className="bg-background-cream rounded-3xl p-8 border border-border-soft">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">workspace_premium</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Garantía</h3>
              <p className="text-slate-600">
                48h de devolución. Si no te funciona, te devolvemos el dinero.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-orange-500 rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl font-black mb-4">¿Hablamos?</h2>
            <p className="text-white/90 mb-6">
              Si quieres colaborar o tienes dudas, escríbenos y te respondemos rápido.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-2xl font-bold shadow-xl hover:scale-105 transition-all"
            >
              Contactar
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
