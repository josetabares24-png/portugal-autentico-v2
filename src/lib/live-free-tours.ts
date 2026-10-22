import type { LiveFreeTour } from "@/types/guruwalk-live";
import type {
  GuruWalkDiscoverDestination,
  GuruWalkAvailability,
} from "@/lib/guruwalk-mcp";

type Language = "es" | "en";
type Client = {
  discover(params: {
    destination: string;
    language: Language;
    startDate: string;
    endDate: string;
    page: number;
  }): Promise<GuruWalkDiscoverDestination>;
  availability(params: {
    tourId: number;
    fromDate: string;
    toDate: string;
    language: Language;
  }): Promise<GuruWalkAvailability>;
};

export function isAllowedBookingUrl(value: string) {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      (url.hostname === "guruwalk.com" ||
        url.hostname.endsWith(".guruwalk.com")) &&
      Boolean(url.searchParams.get("ref"))
    );
  } catch {
    return false;
  }
}

function normalizeTourName(value: string) {
  const cleaned = value
    .replace(
      /^[\s\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\u200D]+/gu,
      "",
    )
    .replace(/\s+/g, " ")
    .trim();

  return cleaned || value.trim();
}

function normalizeImageUrl(value: string | null) {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

export async function loadLiveTours(
  date: string,
  language: Language,
  client: Client,
): Promise<LiveFreeTour[]> {
  const destination = await client.discover({
    destination: "Lisboa",
    language,
    startDate: date,
    endDate: date,
    page: 1,
  });

  const products = destination.featured_products
    .filter((product) => isAllowedBookingUrl(product.url))
    .slice(0, 3);

  const availability = await Promise.allSettled(
    products.map((product) =>
      client.availability({
        tourId: product.id,
        fromDate: date,
        toDate: date,
        language,
      }),
    ),
  );

  return products.flatMap((product, index) => {
    const result = availability[index];
    const events =
      result.status === "fulfilled" ? (result.value.dates[date] ?? []) : [];
    const seenTimes = new Set<string>();
    const slots = events
      .flatMap((event) => {
        const eventLanguage = (event.language ?? "").toLowerCase();
        const englishEvent = ["en", "english", "inglés", "ingles"].includes(
          eventLanguage,
        );
        if (
          !isAllowedBookingUrl(event.booking_url) ||
          seenTimes.has(event.start_time) ||
          (language === "en" && !englishEvent)
        ) {
          return [];
        }
        seenTimes.add(event.start_time);
        return [
          {
            eventId: event.event_id,
            time: event.start_time,
            url: event.booking_url,
          },
        ];
      })
      .slice(0, 3);

    // English results must have a confirmed English slot. Spanish keeps its existing fallback.
    if (language === "en" && slots.length === 0) return [];
    return [
      {
        id: product.id,
        name: normalizeTourName(product.name),
        rating: product.rating_out_of_5,
        reviews: product.reviews_count,
        imageUrl: normalizeImageUrl(product.image_url),
        url: product.url,
        slots,
      },
    ];
  });
}
