import { HIDE_GUIDE_PHOTOS } from '@/lib/guide-config';

interface TimelineContainerProps {
  children: React.ReactNode;
  lineColor?: string;
}

export function TimelineContainer({ children, lineColor = 'primary' }: TimelineContainerProps) {
  const gradientClass =
    lineColor === 'primary'
      ? 'from-primary/20 via-primary to-primary/20'
      : lineColor === 'purple'
      ? 'from-purple-500/20 via-purple-500 to-purple-500/20'
      : lineColor === 'indigo'
      ? 'from-indigo-500/20 via-indigo-500 to-indigo-500/20'
      : lineColor === 'yellow'
      ? 'from-yellow-500/20 via-yellow-500 to-yellow-500/20'
      : lineColor === 'pink'
      ? 'from-pink-500/20 via-pink-500 to-pink-500/20'
      : lineColor === 'teal'
      ? 'from-teal-500/20 via-teal-500 to-teal-500/20'
      : lineColor === 'amber'
      ? 'from-amber-500/20 via-amber-500 to-amber-500/20'
      : 'from-primary/20 via-primary to-primary/20';

  return (
    <div className="relative">
      {!HIDE_GUIDE_PHOTOS && (
        <div
          className={`absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b ${gradientClass} md:-translate-x-1/2`}
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}
