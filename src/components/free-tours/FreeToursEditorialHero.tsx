import Image from 'next/image';
import Link from 'next/link';

/**
 * Portada editorial de Free tours (solo esta ruta).
 * Se preservan los anclajes de búsqueda y comparación existentes.
 * Sin widgets, nuevas dependencias ni banners promocionales superpuestos.
 */
export default function FreeToursEditorialHero() {
  return (
    <section aria-labelledby="free-tours-title" className="border-b border-night/10 bg-cream">
      <div className="mx-auto grid w-full max-w-[1600px] lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
        <div className="flex min-w-0 flex-col px-6 pb-9 pt-7 sm:px-10 sm:pb-11 sm:pt-9 lg:min-h-[510px] lg:justify-between lg:py-11 lg:pl-[max(2.5rem,calc((100vw-72rem)/2))] lg:pr-12">
          <nav aria-label="Ruta de navegación" className="flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-[0.13em] text-night/60">
            <Link href="/" className="rounded-sm py-1 underline-offset-4 transition-colors hover:text-terracotta hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">
              Inicio
            </Link>
            <span aria-hidden="true" className="text-night/35">/</span>
            <span aria-current="page" className="text-night/85">Free tours</span>
          </nav>

          <div className="mt-9 lg:my-10">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.19em] text-terracotta">
              Rutas a pie · Lisboa
            </p>
            <h1 id="free-tours-title" className="mt-3 max-w-[11ch] font-display text-[clamp(3.05rem,5.1vw,5.25rem)] font-semibold not-italic leading-[1.06] tracking-[-0.035em] text-night">
              Free tours <span className="block font-normal italic">en Lisboa</span>
            </h1>
            <p className="mt-5 max-w-[34rem] font-body text-[15px] leading-[1.7] text-night/85 sm:text-base">
              Compara recorridos por el centro, Alfama y Belém. Elige tu fecha, consulta los horarios en español y reserva el que más te apetezca.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="#disponibilidad"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-terracotta px-6 py-3 font-body text-sm font-bold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-terracotta"
              >
                Buscar por fecha
                <span className="ml-2 text-lg leading-none" aria-hidden="true">↓</span>
              </Link>
              <Link
                href="#comparar-rutas"
                className="inline-flex min-h-11 items-center font-body text-sm font-semibold text-night underline decoration-terracotta/60 underline-offset-4 transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-terracotta"
              >
                Comparar recorridos
              </Link>
            </div>
          </div>

          <p className="border-t border-night/15 pt-4 font-body text-xs leading-5 text-night/75">
            Reserva sin pago previo <span aria-hidden="true" className="px-1.5 text-terracotta">·</span> La propina se entrega al finalizar.
          </p>
        </div>

        <figure className="relative h-[265px] overflow-hidden bg-night/10 sm:h-[340px] lg:h-auto lg:min-h-[510px]">
          <Image
            src="/images/lisboa-originales/rua-augusta-arco-lisboa.webp"
            alt="Arco da Rua Augusta y viajeros en la Baixa de Lisboa"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            style={{ objectPosition: 'center 47%' }}
            sizes="(max-width: 1023px) 100vw, 53vw"
          />
          <figcaption className="absolute bottom-4 right-4 bg-cream/95 px-3 py-2 font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-night sm:bottom-6 sm:right-6">
            Baixa · Lisboa
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
