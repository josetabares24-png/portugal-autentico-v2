'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { routing } from '@/i18n/routing';

const localeNames: Record<string, string> = {
  es: 'Espanol',
  en: 'English',
  ko: '한국어',
};

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    // Remove current locale prefix from pathname
    let path = pathname;
    for (const loc of routing.locales) {
      if (path.startsWith(`/${loc}/`)) {
        path = path.substring(loc.length + 1);
        break;
      }
      if (path === `/${loc}`) {
        path = '/';
        break;
      }
    }

    // Build new path
    const newPath = newLocale === routing.defaultLocale ? path : `/${newLocale}${path}`;
    router.push(newPath);
    setOpen(false);
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary rounded-lg hover:bg-slate-50 transition-colors"
        aria-label="Cambiar idioma"
        aria-expanded={open}
      >
        <span className="material-symbols-outlined text-base">language</span>
        <span className="uppercase text-xs font-bold tracking-wider">{locale}</span>
        <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-premium border border-slate-100 py-1 z-50">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                locale === loc
                  ? 'text-primary font-bold bg-primary/5'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-primary'
              }`}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
