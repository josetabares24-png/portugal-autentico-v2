import type { ArticleBookingBlockProps } from '@/components/blog/ArticleBookingBlock';
import { getFreeTourAffiliateUrl, getFreeTourCategory } from '@/data/affiliate-links';
import type { BlogBookingPlacement, BookingBlockPosition } from '@/data/blog-booking-placements';
import { bookingBlockContentId } from '@/data/blog-booking-placements';
import { findProductById, resolveBookingLink } from '@/data/bookings';
import { buildAffiliateUrl, withTiqetsCampaign } from '@/lib/affiliate';

export type ResolvedBookingBlock = ArticleBookingBlockProps & {
  beforeHeading?: string;
  position?: BookingBlockPosition;
};

/**
 * Resuelve en el servidor una lista de bloques de reserva. Un bloque sin
 * producto, sin enlace o sin ref de GuruWalk configurado simplemente no se
 * pinta.
 *
 * `surface` identifica la página en la medición:
 *   - blog:       contentId `blog-<slug>-…`, Tiqets `tq_campaign=web_blog_<slug>`
 *   - otra guía:  contentId `<surface>-<slug>-…`, Tiqets `web_<surface>_<slug>`
 *
 * GetYourGuide usa el enlace corto tal cual (lleva su campaña dentro); el
 * desglose por página queda en el evento `affiliate_click` de GA4.
 */
export function resolveBookingBlocks(
  slug: string,
  placements: BlogBookingPlacement[],
  surface: 'blog' | 'guia' = 'blog',
): ResolvedBookingBlock[] {
  return placements.flatMap<ResolvedBookingBlock>((placement) => {
    const contentId = bookingBlockContentId(surface, slug, placement.offer, placement.position);
    const { offer } = placement;

    if (offer.type === 'free-tour') {
      const category = getFreeTourCategory(offer.categoryId);
      const href = getFreeTourAffiliateUrl(category);
      if (!href) return [];
      return [{
        intro: placement.intro,
        kind: 'Free tour',
        name: category.name,
        ctaLabel: category.ctaLabel,
        url: buildAffiliateUrl(href, category.campaign, contentId),
        partner: 'guruwalk',
        campaign: category.campaign,
        contentId,
        linkPlacement: 'article',
        articleSlug: slug,
        beforeHeading: placement.beforeHeading,
        position: placement.position,
      }];
    }

    const product = findProductById(offer.productId);
    const link = product ? resolveBookingLink(product, 'article') : null;
    if (!product || !link) return [];
    const campaign = link.provider === 'tiqets' ? `web_${surface}_${slug}` : link.campaign;
    const url = link.provider === 'tiqets' ? withTiqetsCampaign(link.url, campaign) : link.url;
    return [{
      intro: placement.intro,
      kind: product.kind,
      name: product.name,
      ctaLabel: product.ctaLabel,
      url,
      partner: link.provider,
      campaign,
      contentId,
      linkPlacement: link.usedPlacement,
      articleSlug: slug,
      beforeHeading: placement.beforeHeading,
      position: placement.position,
    }];
  });
}
