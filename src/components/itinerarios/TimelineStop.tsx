import { TimelineStop as TimelineStopType } from '@/data/itineraries';

interface TimelineStopProps extends TimelineStopType {}

export function TimelineStop({ time, title, description, tip, type }: TimelineStopProps) {
  const borderColor = type === 'food' ? 'border-amber-500' : 'border-sky-500';
  const badgeBg = type === 'food' ? 'bg-amber-100' : 'bg-sky-100';
  const badgeText = type === 'food' ? 'text-amber-700' : 'text-sky-700';
  const tipColor = type === 'food' ? 'text-amber-600' : 'text-sky-600';

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${borderColor}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`px-3 py-1 rounded-full text-sm font-bold ${badgeBg} ${badgeText}`}>
          {time}
        </span>
        <h3 className="text-xl font-bold text-text-main">{title}</h3>
      </div>
      <p className="text-slate-600 text-sm mb-2">{description}</p>
      <p className={`${tipColor} text-xs font-medium mt-2`}>
        💡 {tip}
      </p>
    </div>
  );
} 