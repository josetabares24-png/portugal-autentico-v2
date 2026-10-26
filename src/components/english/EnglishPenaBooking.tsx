import Link from "next/link";
import { englishPenaTicket } from "@/data/english-pena-ticket";
import { ENGLISH_PENA_CAMPAIGN } from "@/lib/english-bookings";
import EnglishBookingLink from "./EnglishBookingLink";

export default function EnglishPenaBooking({ url }: { url: string | null }) {
  return (
    <aside
      id="booking"
      aria-labelledby="pena-booking-title"
      className="mt-7 scroll-mt-24 border border-border-soft bg-white/70 p-5 sm:p-7"
    >
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-terracotta">
        Pena Palace · book with Tiqets
      </p>
      <h3 id="pena-booking-title" className="mt-3 font-display text-2xl font-semibold not-italic">
        Palace and park tickets
      </h3>
      <dl className="my-5 border-y border-border-soft">
        {englishPenaTicket.facts.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-1 border-t border-border-soft py-3 text-sm leading-relaxed first:border-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-5"
          >
            <dt className="font-semibold">{label}</dt>
            <dd className="min-w-0 text-text-secondary">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {englishPenaTicket.priceNote}
      </p>
      <EnglishBookingLink
        href={url}
        partner="tiqets"
        campaign={ENGLISH_PENA_CAMPAIGN}
        placement="pena-after-comparison"
        content="palace-park-english"
        variant="card"
      >
        Check Pena dates on Tiqets
      </EnglishBookingLink>
      <p className="mt-3 text-xs leading-relaxed text-text-secondary">
        Affiliate link. Your booking is handled by Tiqets.{" "}
        <Link className="underline" href="#affiliate-policy">How these links work</Link>.
      </p>
      <p className="mt-3 text-xs leading-relaxed text-text-secondary">
        Ticket conditions checked <time dateTime={englishPenaTicket.checkedAt}>25 October 2026</time>.
      </p>
    </aside>
  );
}
