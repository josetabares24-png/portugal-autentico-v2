"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import routes from "@/data/english-pilot-routes.json";
export default function EnglishNavigation() {
  const pathname = usePathname();
  const spanishPath =
    routes.find((route) => route.path === pathname)?.es ?? "/";
  return (
    <header className="sticky top-0 z-50 border-b border-taupe/10 bg-cream/95 shadow-sm backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link
          href="/en"
          aria-label="Estaba en Lisboa, English home"
          className="shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Estaba en Lisboa"
            width={160}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden items-center gap-5 xl:flex">
          {routes.slice(1).map((r) => (
            <Link
              key={r.path}
              href={r.path}
              aria-current={pathname === r.path ? "page" : undefined}
              className="inline-flex min-h-11 items-center border-b-2 border-transparent text-sm font-semibold text-night hover:text-terracotta aria-[current=page]:border-terracotta aria-[current=page]:text-terracotta"
            >
              {r.label}
            </Link>
          ))}
          <Link
            href={spanishPath}
            lang="es"
            hrefLang="es"
            className="inline-flex min-h-11 items-center border-l border-border-soft pl-5 text-xs font-bold"
          >
            Español
          </Link>
        </div>
        <details
          className="relative xl:hidden"
          onKeyDown={(event) => {
            if (event.key !== "Escape" || !event.currentTarget.open) return;
            event.preventDefault();
            event.currentTarget.open = false;
            event.currentTarget.querySelector("summary")?.focus();
          }}
        >
          <summary className="flex min-h-11 cursor-pointer items-center rounded border border-border-soft px-3 text-sm font-semibold">
            Menu
          </summary>
          <div
            className="absolute right-0 top-full mt-2 w-[min(300px,calc(100vw-2.5rem))] border border-border-soft bg-cream p-3 shadow-soft"
            onClick={(event) => {
              if ((event.target as Element).closest("a")) {
                const menu = event.currentTarget.closest("details");
                if (menu) menu.open = false;
              }
            }}
          >
            {routes.map((r) => (
              <Link
                key={r.path}
                href={r.path}
                aria-current={pathname === r.path ? "page" : undefined}
                className="flex min-h-11 items-center border-b border-border-soft px-3 text-sm text-night aria-[current=page]:font-bold aria-[current=page]:text-terracotta"
              >
                {r.label}
              </Link>
            ))}
            <Link
              href={spanishPath}
              lang="es"
              hrefLang="es"
              className="flex min-h-11 items-center px-3 text-sm"
            >
              Español
            </Link>
          </div>
        </details>
      </nav>
    </header>
  );
}
