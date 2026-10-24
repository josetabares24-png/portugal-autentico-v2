"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

export default function EnglishGuideLink({
  href,
  placement,
  className,
  children,
}: {
  href: string;
  placement: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() =>
        trackEvent("booking_guide_click", {
          page_path: window.location.pathname,
          destination_path: href.split("#")[0],
          booking_placement: placement,
          language: "en",
        })
      }
    >
      {children}
    </Link>
  );
}
