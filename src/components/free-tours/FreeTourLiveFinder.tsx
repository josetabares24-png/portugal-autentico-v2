/* eslint-disable @next/next/no-img-element */
'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowUpRight, CalendarDays, LoaderCircle, Star } from 'lucide-react';
import Link from 'next/link';
import { trackAffiliateClick } from '@/lib/affiliate-analytics';
import { trackEvent } from '@/lib/analytics';
import type { LiveFreeTour, LiveFreeToursResponse } from '@/types/guruwalk-live';

type FinderState = 'idle' | 'loading' | 'success' | 'error';

const FALLBACK_IMAGES = [
  '/images/lisboa-originales/rua-augusta-arco-lisboa.webp',
  '/images/lisboa-originales/alfama-rua-da-adica-lisboa.jpg',
  '/images/actividades/torre-de-belem-lisboa.webp',
];

function lisbonDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Lisbon',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

function addDays(date: string, days: number) {
  const value = new Date(`${date}T12:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}

function dateBounds() {
  const min = lisbonDate();
  return { min, max: addDays(min, 180), suggested: addDays(min, 1) };
}

function formatSlotTime(time: string) {
  return time.match(/(?:T|\b)([01]\d|2[0-3]):([0-5]\d)/)?.[0].replace('T', '') ?? time;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date(`${date}T12:00:00Z`));
}

function daysAheadBucket(date: string) {
  const today = new Date(`${lisbonDate()}T12:00:00Z`);
  const selected = new Date(`${date}T12:00:00Z`);
  const days = Math.max(0, Math.round((selected.getTime() - today.getTime()) / 86_400_000));

  if (days <= 2) return '0-2';
  if (days <= 7) return '3-7';
  if (days <= 30) return '8-30';
  if (days <= 90) return '31-90';
  return '91-180';
}

function trackLiveClick(tour: LiveFreeTour, url: string, content: string) {
  let linkDomain = '';
  try {
    linkDomain = new URL(url).hostname;
  } catch {
    // La reserva sigue abriendo aunque la dimensión no pueda parsearse.
  }

  trackAffiliateClick({
    affiliate_partner: 'guruwalk',
    affiliate_campaign: 'free-tours-live-date',
    affiliate_content: content,
    affiliate_placement: 'live-date-finder',
    destination: 'lisboa',
    tour_id: String(tour.id),
    link_url: url,
    link_domain: linkDomain,
    outbound: 'true',
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  });
}

function LiveTourImage({
  source,
  fallback,
  alt,
}: {
  source?: string;
  fallback: string;
  alt: string;
}) {
  const preferredSource = source || fallback;
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const currentSource = failedSource === preferredSource ? fallback : preferredSource;

  return (
    <img
      src={currentSource}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailedSource(preferredSource)}
      className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
    />
  );
}

export default function FreeTourLiveFinder() {
  const [date, setDate] = useState('');
  const [validDates, setValidDates] = useState({ min: '', max: '' });
  const [state, setState] = useState<FinderState>('idle');
  const [tours, setTours] = useState<LiveFreeTour[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const bounds = dateBounds();
    setValidDates({ min: bounds.min, max: bounds.max });
    setDate(bounds.suggested);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!date) return;

    setState('loading');
    setMessage('');
    const searchWindow = daysAheadBucket(date);
    trackEvent('free_tour_search', {
      placement: 'live-date-finder',
      days_ahead_bucket: searchWindow,
    });

    try {
      const response = await fetch(`/api/free-tours?date=${encodeURIComponent(date)}`, {
        cache: 'no-store',
      });
      const payload = await response.json() as LiveFreeToursResponse | { error?: string };

      if (!response.ok || !('tours' in payload)) {
        throw new Error('error' in payload ? payload.error : undefined);
      }

      setTours(payload.tours);
      setState('success');
      trackEvent('free_tour_search_result', {
        placement: 'live-date-finder',
        days_ahead_bucket: searchWindow,
        result_count: payload.tours.length,
        has_results: payload.tours.length > 0,
      });
      if (payload.tours.length === 0) {
        setMessage('No aparecieron recorridos para ese día. Prueba otra fecha o compara las zonas que encontrarás más abajo.');
      }
    } catch {
      setTours([]);
      setState('error');
      trackEvent('free_tour_search_error', {
        placement: 'live-date-finder',
        days_ahead_bucket: searchWindow,
      });
      setMessage('Ahora mismo no pudimos traer los horarios. La comparación de rutas y los enlaces de reserva siguen disponibles debajo.');
    }
  }

  return (
    <section id="disponibilidad" className="scroll-mt-20 bg-background-light pb-5 pt-9 md:pb-7 md:pt-12">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-6 border-y border-border-soft py-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-16 lg:py-7">
          <div>
            <p className="mb-2 font-body text-xs font-bold uppercase tracking-[0.16em] text-terracotta">
              Reserva tu plaza
            </p>
            <h2 className="max-w-xl font-display text-[2rem] font-semibold not-italic leading-[1.08] text-night md:text-4xl">
              Encuentra un free tour para tu fecha
            </h2>
            <p className="mt-3 max-w-xl font-body text-sm leading-relaxed text-text-secondary md:text-base">
              Elige el día y te enseño hasta tres free tours en español con plaza
              libre, con su hora y el enlace para reservar.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="free-tour-date" className="mb-2 block font-body text-xs font-bold uppercase tracking-[0.14em] text-text-secondary">
              Día del recorrido
            </label>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-terracotta" size={19} aria-hidden="true" />
                <input
                  id="free-tour-date"
                  name="date"
                  type="date"
                  value={date}
                  min={validDates.min || undefined}
                  max={validDates.max || undefined}
                  onChange={(event) => setDate(event.target.value)}
                  required
                  className="min-h-12 w-full rounded-md border border-border-soft bg-white px-12 py-3 font-body text-base text-night shadow-sm [color-scheme:light] focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/15"
                />
              </div>
              <button
                type="submit"
                disabled={state === 'loading'}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-terracotta px-6 font-body text-sm font-bold text-white transition-colors hover:bg-primary-dark disabled:cursor-wait disabled:opacity-70"
              >
                {state === 'loading' ? <LoaderCircle className="animate-spin" size={18} aria-hidden="true" /> : null}
                {state === 'loading' ? 'Buscando' : 'Ver tours disponibles'}
              </button>
            </div>
            <p
              role="note"
              aria-label="Información sobre la reserva y los enlaces afiliados"
              className="mt-3 max-w-2xl font-body text-xs leading-relaxed text-text-secondary"
            >
              Reserva en GuruWalk sin pago previo; al terminar decides la propina.
              Algunos enlaces son afiliados.{' '}
              <Link
                href="/aviso-legal#3-afiliados-y-enlaces-a-terceros"
                className="underline underline-offset-2 hover:no-underline"
              >
                Cómo funcionan los enlaces de afiliado
              </Link>
              .
            </p>
          </form>
        </div>

        <div aria-live="polite" aria-busy={state === 'loading'}>
          {message ? (
            <p className={`mt-7 max-w-2xl border-l-2 pl-4 font-body text-sm leading-relaxed ${state === 'error' ? 'border-terracotta text-text-secondary' : 'border-gold text-text-secondary'}`}>
              {message}
            </p>
          ) : null}

          {state === 'success' && tours.length > 0 ? (
            <div className="mt-9">
              <p className="mb-4 font-body text-xs font-bold uppercase tracking-[0.16em] text-text-secondary">
                Disponibles para {formatDate(date)}
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {tours.map((tour, index) => {
                  const fallback = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
                  return (
                    <article key={tour.id} className="group flex min-w-0 flex-col overflow-hidden rounded-lg border border-border-soft bg-white shadow-card">
                      <div className="aspect-[16/10] overflow-hidden bg-border-soft">
                        <LiveTourImage
                          source={tour.imageUrl}
                          fallback={fallback}
                          alt={`Recorrido de ${tour.name} en Lisboa`}
                        />
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <p className="mb-2 font-body text-[10px] font-bold uppercase tracking-[0.15em] text-terracotta">
                          Free tour en español
                        </p>
                        <h3 className="font-display text-xl font-semibold not-italic leading-snug text-night">
                          {tour.name}
                        </h3>
                        {tour.rating > 0 && tour.reviews > 0 ? (
                          <p className="mt-2 flex items-center gap-2 font-body text-xs text-text-secondary">
                            <Star size={14} fill="currentColor" className="text-gold" aria-hidden="true" />
                            {tour.rating.toLocaleString('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} · {tour.reviews.toLocaleString('es-ES')} opiniones
                          </p>
                        ) : null}

                        <div className="mt-5 flex flex-wrap gap-2 border-t border-border-soft pt-4">
                          {tour.slots.length > 0 ? tour.slots.map((slot) => (
                            <a
                              key={slot.eventId}
                              href={slot.url}
                              target="_blank"
                              rel="sponsored noopener noreferrer"
                              aria-label={`Reservar ${tour.name} a las ${formatSlotTime(slot.time)}`}
                              onClick={() => trackLiveClick(tour, slot.url, `${tour.id}-${slot.eventId}`)}
                              className="inline-flex min-h-10 items-center gap-1.5 rounded-md border border-night/20 px-3 font-body text-xs font-bold text-night transition-colors hover:border-terracotta hover:bg-terracotta hover:text-white"
                            >
                              Reservar {formatSlotTime(slot.time)}
                              <ArrowUpRight size={14} aria-hidden="true" />
                            </a>
                          )) : (
                            <a
                              href={tour.url}
                              target="_blank"
                              rel="sponsored noopener noreferrer"
                              onClick={() => trackLiveClick(tour, tour.url, String(tour.id))}
                              className="inline-flex min-h-10 items-center gap-1.5 rounded-md bg-terracotta px-4 font-body text-xs font-bold text-white transition-colors hover:bg-primary-dark"
                            >
                              Ver tour y reservar
                              <ArrowUpRight size={14} aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>

      </div>
    </section>
  );
}
