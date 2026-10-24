"use client";
import { trackAffiliateClick } from "@/lib/affiliate-analytics";

const variantStyles = {
  button:
    "justify-center rounded-md bg-terracotta px-5 py-3 text-center text-white hover:bg-primary-dark focus-visible:outline-night",
  text: "text-terracotta underline underline-offset-4 hover:no-underline focus-visible:outline-night",
  card: "w-full justify-center rounded-md bg-terracotta px-4 py-2 text-center text-white hover:bg-primary-dark focus-visible:outline-night",
  light:
    "justify-center rounded-md bg-white px-4 py-2 text-center text-night hover:bg-background-light focus-visible:outline-white",
};
export default function EnglishBookingLink({
  href,
  partner,
  campaign,
  placement = "english-contextual",
  content = "english-pilot",
  variant = "button",
  children,
}: {
  href: string | null;
  partner: "guruwalk" | "tiqets";
  campaign: string;
  placement?: string;
  content?: string;
  variant?: "button" | "text" | "card" | "light";
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
      className={`inline-flex min-h-12 items-center gap-2 font-body text-sm font-bold leading-snug transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variantStyles[variant]}`}
      onClick={() =>
        trackAffiliateClick({
          affiliate_partner: partner,
          affiliate_campaign: campaign,
          affiliate_content: content,
          affiliate_placement: placement,
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
