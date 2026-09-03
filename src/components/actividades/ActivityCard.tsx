import Link from 'next/link';
import Image from 'next/image';
import { Activity } from '@/data/activities';
import { ActivityImagePlaceholder } from '@/components/actividades/ActivityImagePlaceholder';

function formatPrice(n: number) {
  return n % 1 === 0 ? `${n}` : n.toFixed(2).replace('.', ',');
}

export function ActivityCard({ activity }: { activity: Activity }) {
  const priceBadge = activity.isFree
    ? 'Gratis'
    : activity.priceFrom !== undefined
      ? `Desde ${formatPrice(activity.priceFrom)} €`
      : 'De pago';

  return (
    <Link
      href={`/actividades/${activity.slug}`}
      className="group flex h-full flex-col border-t border-border-soft bg-white/25 px-1 pt-3 transition-colors hover:bg-white/45"
    >
      <article className="flex h-full flex-col">
        <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-md bg-white/60">
          {activity.image ? (
            <Image
              src={activity.image}
              alt={activity.imageAlt ?? activity.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <ActivityImagePlaceholder />
          )}
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
            {activity.category}
          </p>
          <span aria-hidden="true" className="h-px w-4 bg-border-soft" />
          <span className={`font-body text-[10px] font-semibold uppercase tracking-[0.16em] ${
            activity.isFree ? 'text-terracotta' : 'text-text-secondary'
          }`}>
            {priceBadge}
          </span>
        </div>

        <h3 className="mb-2 font-display text-lg font-semibold not-italic leading-snug text-text-main transition-colors group-hover:text-terracotta">
          {activity.title}
        </h3>
        <p className="mb-3 min-h-[2.75rem] text-sm leading-relaxed text-text-secondary line-clamp-2">{activity.description}</p>

        <div className="mb-3 mt-auto flex items-center justify-between gap-4 border-t border-border-soft pt-3 text-sm">
          <span className={`font-semibold ${activity.isFree ? 'text-terracotta' : 'text-text-main'}`}>
            {activity.priceLabel}
          </span>
          <span className="text-text-secondary text-xs font-medium">{activity.duration}</span>
        </div>

        <div className="border-l-2 border-gold bg-background-light/60 px-3 py-2.5">
          <p className="text-xs leading-relaxed text-text-secondary">
            <span className="text-terracotta font-semibold">Tip para ahorrar: </span>
            {activity.savingTip}
          </p>
        </div>
      </article>
    </Link>
  );
}
