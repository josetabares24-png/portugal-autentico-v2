import type { LiveFreeTour } from '@/types/guruwalk-live';

export function formatFreeTourTime(time: string): string {
  return time.match(/(?:T|\b)([01]\d|2[0-3]):([0-5]\d)/)?.[0].replace('T', '') ?? time;
}

/** Keep provider URLs verbatim. Several displayed times may share one
 * date-level destination; do not pretend those links preselect a time.
 */
export function freeTourBookingOptions(tour: LiveFreeTour, language: 'es' | 'en' = 'es') {
  const destinations = new Map<string, typeof tour.slots>();
  for (const slot of tour.slots) {
    const previous = destinations.get(slot.url) ?? [];
    destinations.set(slot.url, [...previous, slot]);
  }
  if (destinations.size <= 1) {
    const label = language === 'en'
      ? (tour.slots.length ? 'Choose a time and book' : 'View tour and book')
      : (tour.slots.length ? 'Elegir hora y reservar' : 'Ver tour y reservar');
    return [{
      url: tour.slots[0]?.url ?? tour.url,
      content: String(tour.id),
      label,
      accessibleLabel: `${label}: ${tour.name}, ${language === 'en' ? 'on' : 'en'} GuruWalk`,
    }];
  }
  return [...destinations].map(([url, slots]) => ({
    url,
    content: `${tour.id}-${slots[0].eventId}`,
    label: `${language === 'en' ? 'View' : 'Ver'} ${slots.map((slot) => formatFreeTourTime(slot.time)).join(' / ')}`,
    accessibleLabel: `${language === 'en' ? 'View' : 'Ver'} ${slots.map((slot) => formatFreeTourTime(slot.time)).join(' / ')}: ${tour.name}, ${language === 'en' ? 'on' : 'en'} GuruWalk`,
  }));
}
