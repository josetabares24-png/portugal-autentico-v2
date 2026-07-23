import Image from 'next/image';
import Link from 'next/link';

export default function EditorialNotFound() {
  return (
    <main id="main-content" className="bg-background-light">
      <section className="relative min-h-[72vh] overflow-hidden">
        <Image
          src="/images/alfama-panoramica.jpg"
          alt="Vista de Lisboa desde Alfama"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-night/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/35 to-transparent" />

        <div className="relative mx-auto flex min-h-[72vh] max-w-5xl items-end px-6 py-16 md:px-10 md:py-20">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
              404
            </p>
            <h1 className="max-w-[11ch] break-words font-display text-[2.2rem] italic leading-[1.08] sm:max-w-none sm:text-4xl md:text-6xl">
              Parece que esta calle de Lisboa no lleva a donde buscabas.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              A veces el mapa se tuerce. Volvamos a una ruta clara para seguir explorando Lisboa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/" className="btn-primary px-6 py-3 text-sm">
                Volver al inicio
              </Link>
              <Link href="/itinerarios" className="btn-ghost-light px-6 py-3 text-sm">
                Ver itinerarios
              </Link>
              <Link href="/blog" className="btn-ghost-light px-6 py-3 text-sm">
                Leer el blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
