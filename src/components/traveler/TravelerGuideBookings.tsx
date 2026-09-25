import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { BookingCard } from '@/components/afiliados/BookingCard';
import { findProductById } from '@/data/bookings';
import type { TravelerGuideBookingSection } from '@/data/traveler-guide-preview';

interface TravelerGuideBookingsProps {
  portalId: string;
  section: TravelerGuideBookingSection;
}

export default function TravelerGuideBookings({ portalId, section }: TravelerGuideBookingsProps) {
  const products = section.productIds.map(findProductById).filter((product) => product !== undefined);

  if (products.length === 0) return null;

  const gridClass =
    products.length === 1
      ? 'max-w-xl'
      : products.length === 2
        ? 'max-w-4xl sm:grid-cols-2'
        : 'sm:grid-cols-2 lg:max-w-none lg:grid-cols-3';

  return (
    <section id="reservas" className="scroll-mt-20 border-b border-taupe/20 bg-white/55 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-10 grid gap-5 border-b border-night/15 pb-8 md:grid-cols-[0.72fr_1.28fr] md:items-end md:gap-16">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-taupe">{section.eyebrow}</p>
            <h2 className="max-w-lg font-display text-3xl font-semibold not-italic leading-tight tracking-normal text-night md:text-4xl">
              {section.title}
            </h2>
          </div>
          <div>
            <p className="max-w-2xl font-body text-base leading-relaxed text-text-secondary">{section.intro}</p>
            <p className="mt-3 font-body text-[0.68rem] uppercase tracking-[0.16em] text-taupe">
              Reserva en GetYourGuide
            </p>
          </div>
        </div>

        <div className={`grid gap-x-8 gap-y-10 ${gridClass}`}>
          {products.map((product) => (
            <BookingCard
              key={product.id}
              product={product}
              placement="article"
              placementLabel={`guia-${portalId}`}
            />
          ))}
        </div>

        <AffiliateDisclosure variant="compact" className="mt-9 max-w-2xl font-body text-text-secondary" />
      </div>
    </section>
  );
}
