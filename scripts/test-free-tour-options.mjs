import assert from 'node:assert/strict';
import { test } from 'node:test';
import { freeTourBookingOptions } from '../src/lib/free-tour-booking-options.ts';

const url = 'https://www.guruwalk.com/walks/123?beginsAt=2026-10-23&endsAt=2026-10-23&ref=offline';
const tour = { id: 123, name: 'Tour de prueba', url, rating: 0, reviews: 0, slots: [] };

test('same destination at several times produces one honest CTA and preserves date/ref', () => {
  const options = freeTourBookingOptions({ ...tour, slots: [
    { eventId: 1, time: '09:30', url }, { eventId: 2, time: '10:30', url },
  ] });
  assert.equal(options.length, 1);
  assert.equal(options[0].url, url);
  assert.equal(options[0].label, 'Elegir hora y reservar');
  assert.doesNotMatch(options[0].accessibleLabel, /a las/);
});

test('different provider destinations remain separate; shared ones are deduplicated', () => {
  const specific = url + '&event_id=2';
  const options = freeTourBookingOptions({ ...tour, slots: [
    { eventId: 1, time: '2026-10-23T09:30:00', url },
    { eventId: 2, time: '10:30', url: specific },
    { eventId: 3, time: '14:30', url },
  ] });
  assert.equal(options.length, 2);
  assert.equal(options[0].url, url);
  assert.equal(options[0].label, 'Ver 09:30 / 14:30');
  assert.equal(options[1].url, specific);
  assert.equal(options[1].label, 'Ver 10:30');
});

test('fallback remains bookable without slots and keeps the original URL', () => {
  const options = freeTourBookingOptions(tour);
  assert.equal(options.length, 1);
  assert.equal(options[0].url, url);
  assert.equal(options[0].label, 'Ver tour y reservar');
});
