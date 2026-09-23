import { NextResponse } from 'next/server';
import {
  checkGuruWalkAvailability,
  discoverGuruWalkDestination,
  hasGuruWalkAffiliateRef,
} from '@/lib/guruwalk-mcp';

export const dynamic = 'force-dynamic';

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export async function GET() {
  // This endpoint exists only to validate the integration in Vercel Preview.
  // Production must never expose a test surface that spends partner API quota.
  if (process.env.VERCEL_ENV === 'production') {
    return new NextResponse(null, { status: 404 });
  }

  const environmentPresent = Boolean(process.env.GURUWALK_MCP_API_KEY?.trim());

  if (!environmentPresent) {
    return NextResponse.json(
      {
        ok: false,
        environmentPresent: false,
        message: 'GURUWALK_MCP_API_KEY is not configured in this Preview environment.',
      },
      { status: 503 }
    );
  }

  try {
    const destination = await discoverGuruWalkDestination({
      destination: 'Lisboa',
      language: 'es',
    });

    const featured = destination.featured_products.slice(0, 3);
    const firstTour = featured[0];

    const today = new Date();
    const oneWeekLater = new Date(today);
    oneWeekLater.setUTCDate(oneWeekLater.getUTCDate() + 7);

    let availabilitySummary:
      | {
          tested: false;
        }
      | {
          tested: true;
          tourId: number;
          datesWithEvents: number;
          totalEvents: number;
          affiliateBookingUrls: boolean;
        } = { tested: false };

    if (firstTour) {
      const availability = await checkGuruWalkAvailability({
        tourId: firstTour.id,
        fromDate: isoDate(today),
        toDate: isoDate(oneWeekLater),
        language: 'es',
      });

      const events = Object.values(availability.dates).flat();

      availabilitySummary = {
        tested: true,
        tourId: firstTour.id,
        datesWithEvents: Object.values(availability.dates).filter(
          (items) => items.length > 0
        ).length,
        totalEvents: events.length,
        affiliateBookingUrls:
          events.length === 0 || events.every((event) => hasGuruWalkAffiliateRef(event.booking_url)),
      };
    }

    return NextResponse.json({
      ok: true,
      environmentPresent: true,
      destination: {
        name: destination.place.name,
        country: destination.place.country,
        hasFreeTours: destination.place.has_free_tours,
      },
      categoryCount: destination.categories.length,
      featuredTotal: destination.pagination.total_count,
      categoryAffiliateUrls: destination.categories.every((category) =>
        hasGuruWalkAffiliateRef(category.url)
      ),
      featured: featured.map((tour) => ({
        id: tour.id,
        name: tour.name,
        rating: tour.rating_out_of_5,
        reviews: tour.reviews_count,
        affiliateUrl: hasGuruWalkAffiliateRef(tour.url),
      })),
      availability: availabilitySummary,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        environmentPresent: true,
        error: error instanceof Error ? error.message : 'Unknown GuruWalk MCP error',
      },
      { status: 502 }
    );
  }
}
