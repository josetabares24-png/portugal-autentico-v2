import { HIDE_GUIDE_PHOTOS } from '@/lib/guide-config';

interface TimelineContainerProps {
  children: React.ReactNode;
  lineColor?: string;
}

export function TimelineContainer({ children }: TimelineContainerProps) {
  return (
    <div className="relative">
      {!HIDE_GUIDE_PHOTOS && (
        <div
          className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-primary md:-translate-x-1/2"
          aria-hidden
        />
      )}
      {children}
    </div>
  );
}
