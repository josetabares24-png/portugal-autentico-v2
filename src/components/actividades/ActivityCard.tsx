import Image from 'next/image';
import { Activity } from '@/data/activities';

export function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <article className="group border-t-2 border-border-soft pt-5">
      <div className="relative aspect-[4/3] overflow-hidden mb-4">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-text-main text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1">
          {activity.category}
        </span>
      </div>
      <p className="text-xs text-text-secondary uppercase tracking-widest mb-1">{activity.zone}</p>
      <h3 className="font-display italic text-text-main text-lg leading-snug mb-2">{activity.title}</h3>
      <p className="text-text-secondary text-sm mb-3 line-clamp-2">{activity.description}</p>

      <div className="flex items-center justify-between text-sm mb-3">
        <span className={`font-semibold ${activity.isFree ? 'text-primary' : 'text-text-main'}`}>
          {activity.priceLabel}
        </span>
        <span className="text-text-secondary text-xs">{activity.duration}</span>
      </div>

      <div className="bg-background-light border border-border-soft px-3 py-2.5">
        <p className="text-xs text-text-secondary leading-relaxed">
          <span className="text-primary font-semibold">Tip para ahorrar: </span>
          {activity.savingTip}
        </p>
      </div>
    </article>
  );
}
