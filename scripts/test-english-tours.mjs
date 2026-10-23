import assert from "node:assert/strict";
import { test } from "node:test";
import {
  loadLiveTours,
  isAllowedBookingUrl,
} from "../src/lib/live-free-tours.ts";
import { freeTourBookingOptions } from "../src/lib/free-tour-booking-options.ts";
import tours from "../src/data/english-walking-tours.json" with { type: "json" };

const date = "2026-10-27";
const bookingUrl = (id) =>
  `https://www.guruwalk.com/walks/${id}?ref=offline&beginsAt=${date}&endsAt=${date}`;
const event = (id, language = "en", time = "10:30") => ({
  event_id: id,
  start_time: time,
  language,
  booking_url: bookingUrl(id),
});
function provider(eventsForId) {
  const calls = [];
  return {
    calls,
    client: {
      discover: async (p) => {
        calls.push(["discover", p.language]);
        return {
          featured_products: [
            {
              id: 1,
              name: "Spanish walk",
              url: bookingUrl(1),
              rating_out_of_5: 4.5,
              reviews_count: 5,
              image_url: null,
            },
          ],
        };
      },
      availability: async (p) => {
        calls.push(["availability", p]);
        return { dates: { [date]: await eventsForId(p.tourId) } };
      },
    },
  };
}
test("English searches exactly five walks; only confirmed English slots can appear", async () => {
  const p = provider((id) => [
    event(id, "es"),
    event(id, " English ", "11:30"),
  ]);
  const result = await loadLiveTours(date, "en", p.client);
  assert.deepEqual(
    p.calls.map((c) => c[1].tourId),
    tours.map((t) => t.id),
  );
  assert.ok(
    p.calls.every(
      ([kind, params]) =>
        kind === "availability" &&
        params.language === "en" &&
        params.fromDate === date &&
        params.toDate === date,
    ),
  );
  assert.equal(result.length, 3);
  for (const tour of result) {
    assert.deepEqual(
      tour.slots.map((s) => s.time),
      ["11:30"],
    );
    assert.equal(tour.rating, undefined);
    assert.equal(tour.reviews, undefined);
    const option = freeTourBookingOptions(tour, "en")[0];
    assert.equal(option.url, bookingUrl(tour.id));
    assert.equal(option.label, "Choose a time and book");
  }
});
test("later walks remain discoverable when the first three have no English departures", async () => {
  const p = provider((id) =>
    id === tours[4].id ? [event(id)] : [event(id, "es")],
  );
  const result = await loadLiveTours(date, "en", p.client);
  assert.deepEqual(
    result.map((t) => t.id),
    [tours[4].id],
  );
});
test("a missing English slot never becomes an unconfirmed booking link", async () => {
  const p = provider((id) => [event(id, "es")]);
  assert.deepEqual(await loadLiveTours(date, "en", p.client), []);
});
test("partial failure keeps alternatives; total failure is an error, not sold-out", async () => {
  const partial = provider((id) => {
    if (id !== tours[3].id) throw Error("offline");
    return [event(id)];
  });
  assert.deepEqual(
    (await loadLiveTours(date, "en", partial.client)).map((t) => t.id),
    [tours[3].id],
  );
  const failed = provider(() => {
    throw Error("offline");
  });
  await assert.rejects(loadLiveTours(date, "en", failed.client), /unavailable/);
});
test("Spanish discovery, ratings and no-slot fallback remain unchanged", async () => {
  const p = provider(() => []);
  const [tour] = await loadLiveTours(date, "es", p.client);
  assert.equal(tour.id, 1);
  assert.equal(tour.rating, 4.5);
  assert.equal(tour.url, bookingUrl(1));
  assert.deepEqual(tour.slots, []);
  assert.deepEqual(p.calls[0], ["discover", "es"]);
  assert.equal(p.calls.length, 2);
  assert.equal(p.calls[1][1].language, "es");
});
test("five distinct public English products with no cached reviews or departure claims", () => {
  assert.equal(tours.length, 5);
  assert.equal(new Set(tours.map((t) => t.id)).size, 5);
  for (const tour of tours) {
    const url = new URL(tour.url);
    assert.equal(url.hostname, "www.guruwalk.com");
    assert.ok(url.pathname.startsWith(`/walks/${tour.id}-`));
    assert.equal(url.search, "");
    assert.ok(tour.description && tour.consideration && tour.provider);
  }
});
test("outbound destinations require HTTPS, GuruWalk host and referral", () => {
  for (const bad of [
    "http://www.guruwalk.com/walks/1?ref=offline",
    "https://guruwalk.com.evil.invalid/?ref=offline",
    "https://www.guruwalk.com/walks/1",
    "javascript:alert(1)",
  ])
    assert.equal(isAllowedBookingUrl(bad), false);
  assert.equal(isAllowedBookingUrl(bookingUrl(1)), true);
});
