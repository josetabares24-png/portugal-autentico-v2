export interface Itinerary {
  id: string;
  slug: string;
  title: string;
  subtitle: string;  // <-- ¡IMPORTANTE!
  destination: string;
  duration: number;
  price: number;
  featured: boolean;
  coverImage: string;
  gallery: string[];
}
