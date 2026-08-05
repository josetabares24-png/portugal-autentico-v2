/**
 * Appends measurable UTM params to an affiliate/booking URL (e.g. GuruWalk)
 * without touching any params the URL already has (like the partner ref id).
 */
export function buildAffiliateUrl(baseUrl: string, campaign: string): string {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set('utm_source', 'estabaenlisboa');
    url.searchParams.set('utm_medium', 'affiliate');
    url.searchParams.set('utm_campaign', campaign);
    return url.toString();
  } catch {
    return baseUrl;
  }
}
