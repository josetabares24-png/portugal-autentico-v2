"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type EnglishContentsProps = {
  sections: readonly { id: string; title: string }[];
};

const DESKTOP_QUERY = "(min-width: 1024px)";

export default function EnglishContents({ sections }: EnglishContentsProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const updateLayout = () => {
      if (detailsRef.current) detailsRef.current.open = desktop.matches;
    };

    updateLayout();
    desktop.addEventListener("change", updateLayout);
    return () => desktop.removeEventListener("change", updateLayout);
  }, []);

  return (
    <details
      ref={detailsRef}
      className="group border-y border-border-soft text-night lg:sticky lg:top-24"
      onKeyDown={(event) => {
        if (event.key !== "Escape" || !event.currentTarget.open) return;
        event.preventDefault();
        event.currentTarget.open = false;
        summaryRef.current?.focus();
      }}
    >
      <summary
        ref={summaryRef}
        className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-3 font-body text-xs font-bold uppercase tracking-[0.14em] text-text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta [&::-webkit-details-marker]:hidden"
      >
        <span>On this page</span>
        <span
          aria-hidden="true"
          className="text-base text-terracotta group-open:rotate-180 motion-safe:transition-transform"
        >
          ↓
        </span>
      </summary>
      <nav aria-label="On this page" className="pb-2">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className="flex min-h-11 items-center border-t border-border-soft py-3 font-body text-sm leading-relaxed transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            onClick={() => {
              if (!window.matchMedia(DESKTOP_QUERY).matches && detailsRef.current) {
                detailsRef.current.open = false;
              }
            }}
          >
            {section.title}
          </Link>
        ))}
      </nav>
    </details>
  );
}
