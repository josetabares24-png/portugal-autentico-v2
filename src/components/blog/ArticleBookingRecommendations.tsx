import { ArticleBookingBlock, type ArticleBookingBlockProps } from './ArticleBookingBlock';

/** Conservative fallback: the full answer and visible FAQ precede monetization.
 * One final module, one primary option; alternatives require a reader action.
 * Existing offer URLs, conditions and attribution are passed through unchanged.
 */
export function ArticleBookingRecommendations({ bookings }: { bookings: ArticleBookingBlockProps[] }) {
  const seen = new Set<string>();
  const unique = bookings.filter((booking) => {
    const key = `${booking.partner}|${booking.url}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 2);
  if (!unique.length) return null;

  return (
    <section data-editorial-cta="final" aria-label="Opciones de reserva" className="article-content article-reading mt-9 border-t border-border-soft pt-3">
      <ArticleBookingBlock {...unique[0]} disclosure="full" slot="final" />
      {unique.length > 1 && (
        <details className="border-t border-border-soft py-3">
          <summary className="min-h-11 cursor-pointer py-3 text-sm font-semibold">Otra opción de reserva</summary>
          <ArticleBookingBlock {...unique[1]} disclosure={unique[1].partner === unique[0].partner ? 'short' : 'full'} slot="alternative" />
        </details>
      )}
    </section>
  );
}
