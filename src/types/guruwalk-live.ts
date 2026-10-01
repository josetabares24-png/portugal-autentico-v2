export interface LiveFreeTourSlot {
  eventId: number;
  time: string;
  url: string;
}

export interface LiveFreeTour {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  imageUrl?: string;
  url: string;
  slots: LiveFreeTourSlot[];
}

export interface LiveFreeToursResponse {
  date: string;
  tours: LiveFreeTour[];
  source: 'guruwalk';
}
