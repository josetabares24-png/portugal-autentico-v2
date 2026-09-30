import { unstable_cache } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
import {
  checkGuruWalkAvailability,
  discoverGuruWalkDestination,
  hasGuruWalkAffiliateRef,
} from '@/lib/guruwalk-mcp';
import type { LiveFreeTour, LiveFreeToursResponse } from '@/types/guruwalk-live';

export const runtime = 'nodejs';

const MAX_RESULTS = 3;
const MAX_ADVANCE_DAYS = 180;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function lisbonToday() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Lisbon',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());
}

function addDays(date: string, days: number) {
  const value = new Date(`${date}T12:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}

function isAllowedBookingUrl(value: string) {
  try {
    const url = new URL(value);
    return (
      url.protocol === 'https:' &&
      (url.hostname === 'guruwalk.com' || url.hostname.endsWith('.guruwalk.com')) &&
      hasGuruWalkAffiliateRef(value)
    );
  } catch {
    return false;
  }
}

const getLiveToursForDate = unstable_cache(
  async (date: string): Promise<LiveFreeTour[]> => {
    const destination = await discoverGuruWalkDestination({
      destination: 'Lisboa',
      language: 'es',
      startDate: date,
      endDate: date,
      page: 1,
    });

    const products = destination.featured_products
      .filter((product) => isAllowedBookingUrl(product.url))
      .slice(0, MAX_RESULTS);

    const availability = await Promise.allSettled(
      products.map((product) =>
        checkGuruWalkAvailability({
          tourId: product.id,
          fromDate: date,
          toDate: date,
          language: 'es',
        })
      )
    );

    return products.map((product, index) => {
      const result = availability[index];
      const events = result.status === 'fulfilled'
        ? (result.value.dates[date] ?? [])
        : [];
      const seenTimes = new Set<string>();
      const slots = events.flatMap((event) => {
        if (!isAllowedBookingUrl(event.booking_url) || seenTimes.has(event.start_time)) {
          return [];
        }
        seenTimes.add(event.start_time);
        return [{
          eventId: event.event_id,
          time: event.start_time,
          url: event.booking_url,
        }];
      }).slice(0, 3);

      return {
        id: product.id,
        name: product.name,
        rating: product.rating_out_of_5,
        reviews: product.reviews_count,
        url: product.url,
        slots,
      };
    });
  },
  ['guruwalk-lisboa-live-v1'],
  { revalidate: 900, tags: ['guruwalk-lisboa-live'] }
);

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get('date')?.trim() ?? '';
  const today = lisbonToday();
  const lastAllowedDate = addDays(today, MAX_ADVANCE_DAYS);

  if (!ISO_DATE.test(date) || date < today || date > lastAllowedDate) {
    return NextResponse.json(
      { error: 'Elige una fecha válida dentro de los próximos seis meses.' },
      { status: 400 }
    );
  }

  try {
    const tours = await getLiveToursForDate(date);
    const payload: LiveFreeToursResponse = { date, tours, source: 'guruwalk' };
    return NextResponse.json(payload, {
      headers: {
        'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=3600',
      },
    });
  } catch (error) {
    logger.error('[free-tours-live] No se pudo consultar GuruWalk', error);
    return NextResponse.json(
      { error: 'No pudimos consultar los horarios en este momento.' },
      { status: 503 }
    );
  }
}
