// Verified through the English selector of the same Tiqets product, 23 Oct 2026.
// This is an explicit product mapping, never an automatic translation of URLs.
export const ENGLISH_PENA_PATH =
  "/en/sintra-attractions-c76496/tickets-for-national-palace-of-pena-park-entry-ticket-p1120392/";
export const ENGLISH_PENA_CAMPAIGN = "web_en_pena-palace-tickets";
export const ENGLISH_TOURS_CAMPAIGN = "free-tours-lisbon-en";

export function englishPenaBookingUrl(
  original: string | null | undefined,
): string | null {
  if (!original) return null;
  try {
    const url = new URL(original);
    if (
      url.protocol !== "https:" ||
      !["www.tiqets.com", "tiqets.com"].includes(url.hostname) ||
      !/\/[^/]*-p1120392\/?$/.test(url.pathname) ||
      !url.searchParams.get("partner")
    )
      return null;
    url.pathname = ENGLISH_PENA_PATH;
    url.searchParams.set("tq_campaign", ENGLISH_PENA_CAMPAIGN);
    return url.toString();
  } catch {
    return null;
  }
}
