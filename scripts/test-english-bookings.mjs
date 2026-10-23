import test from "node:test";
import assert from "node:assert/strict";
import {
  englishPenaBookingUrl,
  ENGLISH_PENA_PATH,
  ENGLISH_PENA_CAMPAIGN,
} from "../src/lib/english-bookings.ts";

test("verified English Pena destination preserves partner and all original booking parameters", () => {
  const original =
    "https://www.tiqets.com/es/atracciones-sintra-c76496/entradas-para-palacio-nacional-da-pena-y-parque-entrada-p1120392/?partner=existing-partner&tq_campaign=spanish-campaign&date=2026-11-01&custom=keep";
  const result = new URL(englishPenaBookingUrl(original));
  assert.equal(result.pathname, ENGLISH_PENA_PATH);
  assert.equal(result.searchParams.get("tq_campaign"), ENGLISH_PENA_CAMPAIGN);
  for (const [key, value] of new URL(original).searchParams)
    if (key !== "tq_campaign")
      assert.equal(result.searchParams.get(key), value);
});

test("localization never substitutes another product, provider or unattributed link", () => {
  for (const invalid of [
    null,
    "not a URL",
    "http://www.tiqets.com/es/foo-p1120392/?partner=a",
    "https://tiqets.com.example.org/es/foo-p1120392/?partner=a",
    "https://www.tiqets.com/es/foo-p123/?partner=a",
    "https://www.tiqets.com/es/foo-p1120392/",
  ])
    assert.equal(englishPenaBookingUrl(invalid), null);
});
