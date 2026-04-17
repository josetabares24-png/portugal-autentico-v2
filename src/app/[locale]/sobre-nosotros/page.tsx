import Image from 'next/image';
import Link from 'next/link';

export default function SobreNosotrosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[340px] overflow-hidden">
        <Image
          src="/images/hero-lisboa.jpg"
          alt="Lisboa desde las alturas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 p-10 md:p-16 max-w-2xl">
          <p className="text-white/70 text-sm tracking-widest uppercase mb-3">Quiénes somos</p>
          <h1 className="font-display italic text-white text-4xl md:text-6xl leading-tight">
            Estaba en Lisboa
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background-light py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-display italic text-text-main text-xl md:text-2xl leading-relaxed mb-8">
            Vivimos en Lisboa. Probamos las rutas cada mes. Escribimos solo lo que funciona.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            Nada de guías copiadas de Wikipedia. Nada de listas de &ldquo;los 10 mejores restaurantes&rdquo; que llevan tres años sin actualizarse. Solo lo que nosotros mismos haríamos si llegásemos por primera vez a Lisboa mañana.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Cada itinerario está verificado, cada restaurante sigue abierto, cada precio está actualizado para 2026. Si algo cambia, lo actualizamos.
          </p>
        </div>
      </section>

      {/* Separador */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-border-soft" />
      </div>

      {/* Tres pilares */}
      <section className="bg-background-light py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="border-t-2 border-primary pt-6">
              <h3 className="font-display italic text-text-main text-xl mb-3">Vivimos aquí</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Probamos rutas cada mes para que lo que recomendamos funcione de verdad, no solo en papel.
              </p>
            </div>
            <div className="border-t-2 border-border-soft pt-6">
              <h3 className="font-display italic text-text-main text-xl mb-3">Siempre actualizadas</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Si algo cambia &mdash; precio, horario, restaurante que cierra &mdash; actualizamos la guía. Nada de información vieja.
              </p>
            </div>
            <div className="border-t-2 border-border-soft pt-6">
              <h3 className="font-display italic text-text-main text-xl mb-3">Garantía 48h</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Si la guía no te es útil, te devolvemos el dinero en 48 horas. Sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA contacto */}
      <section className="bg-[#1a2b4a] py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display italic text-white text-2xl md:text-3xl mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Si quieres colaborar, tienes dudas sobre alguna guía o simplemente quieres preguntar algo de Lisboa, escríbenos.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors"
          >
            Escribirnos
          </Link>
        </div>
      </section>
    </main>
  );
}
