import Image from 'next/image';

const editorialImages = [
  {
    src: '/images/lisboa-originales/rua-baixa-lisboa-01.webp',
    alt: 'Calle de la Baixa de Lisboa entre fachadas históricas',
  },
  {
    src: '/images/lisboa-originales/tranvia-turistico-baixa-lisboa-01.webp',
    alt: 'Tranvía en una calle de la Baixa de Lisboa',
  },
  {
    src: '/images/lisboa-originales/arquitetura-baixa-pombalina-lisboa-01.webp',
    alt: 'Fachadas de azulejos y balcones de Lisboa',
  },
] as const;

export function BlogLandingHeader() {
  return (
    <header className="border-b border-border-soft bg-background-light">
      <div className="site-container py-9 md:py-12">
        <div className="grid items-end gap-7 md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] md:gap-10 lg:gap-14">
          <div className="max-w-xl pb-1 md:pb-3">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-terracotta">
              Historias, lugares y consejos
            </p>
            <h1 className="font-display text-[2.75rem] font-semibold leading-[1.02] text-text-main sm:text-5xl lg:text-6xl">
              El blog de Lisboa
            </h1>
            <p className="mt-4 max-w-[36rem] text-base leading-relaxed text-text-secondary md:text-lg">
              Guías, rincones, ideas y contexto para entender mejor la ciudad.
            </p>
          </div>

          <div className="grid h-[9.5rem] grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] grid-rows-2 gap-2 overflow-hidden rounded-lg bg-white shadow-soft sm:h-44 md:h-60">
            <div className="relative row-span-2 overflow-hidden">
              <Image
                src={editorialImages[0].src}
                alt={editorialImages[0].alt}
                fill
                className="object-cover"
                priority
                fetchPriority="high"
                sizes="(max-width: 767px) 58vw, (max-width: 1199px) 35vw, 420px"
              />
            </div>
            {editorialImages.slice(1).map((image) => (
              <div key={image.src} className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 36vw, (max-width: 1199px) 23vw, 270px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
