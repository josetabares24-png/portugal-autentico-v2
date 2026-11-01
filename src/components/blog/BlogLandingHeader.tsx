export function BlogLandingHeader() {
  return (
    <header className="border-b border-[#d8e9e9] bg-[#f2f9f9]">
      <div className="site-container py-12 md:py-16">
        <p className="mb-2 font-display text-2xl italic leading-snug text-[#008f91]">Blog</p>
        <h1 className="max-w-4xl font-display text-4xl font-bold not-italic leading-tight text-[#0b3040] md:text-5xl">
          Guías de Lisboa y Portugal
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#526971] md:text-lg">
          Qué ver, cómo moverte y dónde comer. También las historias que ayudan a entender la ciudad.
        </p>
      </div>
    </header>
  );
}
