// src/lib/itineraries.ts
import { Itinerary, mainItineraries, specialItineraries } from '@/data/itineraries';

// Usar los itinerarios ya definidos en @/data/itineraries
export const ALL_ITINERARIES: Itinerary[] = [
  ...mainItineraries,
  ...specialItineraries,
];

export function getItineraryById(id: string): Itinerary | null {
  return ALL_ITINERARIES.find((it) => it.id === id) || null;
}

export function getItineraryBySlug(slug: string): Itinerary | null {
  return ALL_ITINERARIES.find((it) => it.slug === slug) || null;
}

export function getItinerary(idOrSlug: string): Itinerary | null {
  return getItineraryById(idOrSlug) || getItineraryBySlug(idOrSlug);
}

export function itineraryExists(idOrSlug: string): boolean {
  return getItinerary(idOrSlug) !== null;
}

export function getAllItineraries(): Itinerary[] {
  return ALL_ITINERARIES;
}

export function getFeaturedItineraries(): Itinerary[] {
  return ALL_ITINERARIES.filter((it) => it.featured);
}

export function getItineraryPrice(idOrSlug: string): number | null {
  const itinerary = getItinerary(idOrSlug);
  return itinerary ? itinerary.price : null;
}

export function getItineraryTitle(idOrSlug: string): string | null {
  const itinerary = getItinerary(idOrSlug);
  return itinerary ? itinerary.title : null;
}
