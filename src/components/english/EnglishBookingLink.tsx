"use client";
import { trackAffiliateClick } from "@/lib/affiliate-analytics";
export default function EnglishBookingLink({
  href,
  partner,
  campaign,
  children,
}: {
  href: string | null;
  partner: "guruwalk" | "tiqets";
  campaign: string;
  children: React.ReactNode;
}) {
  if (!href)
    return (
      <p>
        Booking links are temporarily unavailable. Use the official information
        linked above.
      </p>
    );
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-terracotta px-5 py-3 text-center font-body text-sm font-bold text-white hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-night"
      onClick={() =>
        trackAffiliateClick({
          affiliate_partner: partner,
          affiliate_campaign: campaign,
          affiliate_content: "english-pilot",
          affiliate_placement: "english-contextual",
          page_path: window.location.pathname,
          link_url: href,
          link_domain: new URL(href).hostname,
          outbound: "true",
          destination: "lisboa",
        })
      }
    >
      {children}
      <span aria-hidden="true">↗</span>
      <span className="sr-only"> (affiliate link, opens in a new tab)</span>
    </a>
  );
}
