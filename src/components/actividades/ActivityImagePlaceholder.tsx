import Icon from '@/components/Icon';

/**
 * Neutral editorial placeholder shown when an activity has no photo that has
 * been verified to actually depict that place. Deliberately generic (no
 * stock photo swapped in) so we never risk showing the wrong landmark.
 */
export function ActivityImagePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-border-soft text-text-secondary ${className}`}
    >
      <Icon name="photo_camera" size={28} className="opacity-60" />
      <span className="text-[11px] uppercase tracking-widest opacity-70">Foto pendiente de verificar</span>
    </div>
  );
}
