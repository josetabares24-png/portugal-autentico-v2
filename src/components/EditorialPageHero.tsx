import Image from 'next/image';

interface EditorialPageHeroProps {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
}

export function EditorialPageHero({
  eyebrow,
  title,
  image,
  imageAlt,
}: EditorialPageHeroProps) {
  return (
    <section className="editorial-page-hero">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        fetchPriority="high"
        sizes="100vw"
      />
      <div aria-hidden="true" className="editorial-page-hero-overlay absolute inset-0" />
      <div className="site-container absolute inset-x-0 bottom-0 pb-10 pt-28 md:pb-14">
        <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
          {eyebrow}
        </p>
        <h1 className="editorial-page-title font-display italic text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
