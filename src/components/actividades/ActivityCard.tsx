import Link from 'next/link';
import Image from 'next/image';
import { Activity } from '@/data/activities';

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
    <Link href={`/actividades/${activity.slug}`} className="card-surface group flex h-full flex-col p-4">
      <article className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <span className="badge-pill absolute top-3 left-3 bg-white/85 backdrop-blur-sm text-text-main">
            {activity.category}
          </span>
          <span
            className={`badge-pill absolute top-3 right-3 ${
              activity.isFree ? 'bg-gold text-night' : 'bg-white/85 backdrop-blur-sm text-text-main'
            }`}
          >
            {priceBadge}
          </span>
        </div>
        <p className="text-xs text-text-secondary uppercase tracking-widest mb-1">{activity.zone}</p>
        <h3 className="font-display italic text-text-main text-lg leading-snug mb-2 group-hover:text-terracotta transition-colors">
          {activity.title}
        </h3>
        <p className="mb-3 min-h-[2.75rem] text-sm leading-relaxed text-text-secondary line-clamp-2">{activity.description}</p>

        <div className="mb-3 mt-auto flex items-center justify-between text-sm">
          <span className={`font-semibold ${activity.isFree ? 'text-terracotta' : 'text-text-main'}`}>
            {activity.priceLabel}
          </span>
          <span className="text-text-secondary text-xs font-medium">{activity.duration}</span>
        </div>

        <div className="bg-background-light border-l-2 border-gold rounded-md px-3 py-2.5">
          <p className="text-xs leading-relaxed text-text-secondary">
            <span className="text-terracotta font-semibold">Tip para ahorrar: </span>
            {activity.savingTip}
          </p>
        </div>
      </article>
    </Link>
  );
}
