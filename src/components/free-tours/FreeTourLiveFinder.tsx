'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowUpRight, CalendarDays, LoaderCircle, Star } from 'lucide-react';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { trackAffiliateClick } from '@/lib/affiliate-analytics';
import type { LiveFreeTour, LiveFreeToursResponse } from '@/types/guruwalk-live';

type FinderState = 'idle' | 'loading' | 'success' | 'error';

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

function dateBounds() {
  const min = lisbonDate();
  const maxDate = new Date(`${min}T12:00:00Z`);
  maxDate.setUTCDate(maxDate.getUTCDate() + 180);
  return { min, max: maxDate.toISOString().slice(0, 10) };
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

export default function FreeTourLiveFinder() {
  const [date, setDate] = useState('');
  const [validDates, setValidDates] = useState({ min: '', max: '' });
  const [state, setState] = useState<FinderState>('idle');
  const [tours, setTours] = useState<LiveFreeTour[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setValidDates(dateBounds());
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!date) return;

    setState('loading');
    setMessage('');

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
      if (payload.tours.length === 0) {
        setMessage('No aparecieron recorridos para ese día. Debajo puedes abrir cada zona y comprobar otras fechas.');
      }
    } catch {
      setTours([]);
      setState('error');
      setMessage('Ahora mismo no pudimos traer los horarios. La comparación de rutas y sus enlaces siguen disponibles debajo.');
    }
  }

  return (
    <section id="disponibilidad" className="scroll-mt-20 bg-night py-10 text-white md:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Disponibilidad real
            </p>
            <h2 className="max-w-xl font-display text-3xl font-semibold not-italic leading-tight text-white md:text-4xl">
              Mira qué recorridos salen el día que vas.
            </h2>
            <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/72 md:text-base">
              Elige una fecha y te mostramos hasta tres opciones con horario. La reserva se completa directamente en GuruWalk.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="border-y border-white/20 py-5">
            <label htmlFor="free-tour-date" className="mb-2 block font-body text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Día del recorrido
            </label>
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gold" size={19} aria-hidden="true" />
                <input
                  id="free-tour-date"
                  name="date"
                  type="date"
                  value={date}
                  min={validDates.min || undefined}
                  max={validDates.max || undefined}
                  onChange={(event) => setDate(event.target.value)}
                  required
                  className="min-h-12 w-full border border-white/25 bg-white px-12 py-3 font-body text-base text-night [color-scheme:light]"
                />
              </div>
              <button
                type="submit"
                disabled={state === 'loading'}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-terracotta px-6 font-body text-sm font-bold text-white transition-colors hover:bg-primary-dark disabled:cursor-wait disabled:opacity-70"
              >
                {state === 'loading' ? (
                  <LoaderCircle className="animate-spin" size={18} aria-hidden="true" />
                ) : null}
                {state === 'loading' ? 'Consultando' : 'Ver horarios'}
              </button>
            </div>
          </form>
        </div>

        <div aria-live="polite" aria-busy={state === 'loading'}>
          {message ? (
            <p className={`mt-7 max-w-2xl border-l-2 pl-4 font-body text-sm leading-relaxed ${state === 'error' ? 'border-terracotta text-white/80' : 'border-gold text-white/72'}`}>
              {message}
            </p>
          ) : null}

          {state === 'success' && tours.length > 0 ? (
            <div className="mt-9">
              <p className="mb-3 font-body text-xs uppercase tracking-[0.16em] text-white/55">
                Opciones para {formatDate(date)}
              </p>
              <div className="border-y border-white/20">
                {tours.map((tour) => (
                  <article key={tour.id} className="grid gap-5 border-b border-white/20 py-6 last:border-b-0 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
                    <div>
                      <h3 className="font-display text-xl font-semibold not-italic leading-snug text-white md:text-2xl">
                        {tour.name}
                      </h3>
                      {tour.rating > 0 && tour.reviews > 0 ? (
                        <p className="mt-2 flex items-center gap-2 font-body text-xs text-white/65">
                          <Star size={14} fill="currentColor" className="text-gold" aria-hidden="true" />
                          {tour.rating.toLocaleString('es-ES', { maximumFractionDigits: 1 })} · {tour.reviews.toLocaleString('es-ES')} opiniones en GuruWalk
                        </p>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {tour.slots.length > 0 ? tour.slots.map((slot) => (
                        <a
                          key={slot.eventId}
                          href={slot.url}
                          target="_blank"
                          rel="sponsored noopener noreferrer"
                          onClick={() => trackLiveClick(tour, slot.url, `${tour.id}-${slot.eventId}`)}
                          className="inline-flex min-h-11 items-center gap-2 border border-white/30 px-4 font-body text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                        >
                          {formatSlotTime(slot.time)}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      )) : (
                        <a
                          href={tour.url}
                          target="_blank"
                          rel="sponsored noopener noreferrer"
                          onClick={() => trackLiveClick(tour, tour.url, String(tour.id))}
                          className="inline-flex min-h-11 items-center gap-2 border border-white/30 px-4 font-body text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
                        >
                          Ver recorrido
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <AffiliateDisclosure variant="compact" className="mt-6 max-w-2xl text-white/60" />
      </div>
    </section>
  );
}
