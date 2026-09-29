import Image from 'next/image';
import type { Metadata } from 'next';
import { travelerGuides } from '@/data/traveler-guide-preview';
import TravelerDirectory from '@/components/home/TravelerDirectory';

export const metadata: Metadata = {
  title: { absolute: 'Estaba en Lisboa | Guías de Lisboa en español' },
  description: 'Guías sobre Lisboa: transporte, barrios, comida, qué ver, dónde alojarse y excursiones. Información práctica para organizar el viaje.',
  openGraph: {
    title: 'Estaba en Lisboa | Guías de Lisboa',
    description: 'Guías sobre Lisboa: qué ver, transporte, barrios, comida, alojamiento y excursiones.',
    url: 'https://estabaenlisboa.com',
    images: [
      {
        url: 'https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg',
        width: 1200,
        height: 630,
        alt: 'Vista de Alfama y el río Tajo en Lisboa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estaba en Lisboa | Guías de Lisboa',
    description: 'Información práctica en español para organizar un viaje a Lisboa.',
    images: ['https://estabaenlisboa.com/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg'],
  },
  alternates: {
    canonical: 'https://estabaenlisboa.com',
  },
};

export default function HomePage() {
  return (
    <main id="main-content" className="bg-cream">
      <section className="relative h-[78svh] min-h-[540px] max-h-[680px] overflow-hidden md:h-[82svh] md:min-h-[600px] md:max-h-[760px]">
        <Image
          src="/images/lisboa-originales/alfama-lisboa-tejados-rio-tejo.jpg"
          alt="Vista de Alfama y del río Tajo desde un mirador de Lisboa"
          fill
          className="scale-[1.22] object-cover object-[52%_50%] md:scale-100 md:object-center"
          priority
          fetchPriority="high"
          quality={75}
          sizes="(max-width: 767px) 450vw, (max-width: 1279px) 190vw, 100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top right, rgba(10,15,30,0.82) 0%, rgba(10,15,30,0.45) 35%, transparent 65%)',
          }}
        />

        <div className="absolute bottom-0 left-0 max-w-3xl p-6 pb-12 sm:p-10 md:p-14 md:pb-16">
          <h1
            className="mb-4 font-display italic leading-[1.02] text-white"
            style={{ fontSize: 'clamp(2.45rem, 5.2vw, 4.6rem)', fontWeight: 400 }}
          >
            La Lisboa que le enseño a quien viene a verme.
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Rutas, transporte, comida y consejos para aprovechar la ciudad sin convertir el viaje en una carrera.
          </p>
          <a
            href="#guia-practica"
            className="inline-flex min-h-12 max-w-full items-center justify-center bg-terracotta px-7 py-3 text-center font-body text-base font-semibold leading-tight text-white transition-colors duration-200 hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Preparar mi viaje ↓
          </a>
        </div>
      </section>

      <section id="guia-practica" className="scroll-mt-20">
        <TravelerDirectory portals={travelerGuides} />
      </section>
    </main>
  );
}
