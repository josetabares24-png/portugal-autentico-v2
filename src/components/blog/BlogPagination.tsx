'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  linkPages: boolean;
  onPageChange: (page: number) => void;
};

export function BlogPagination({ currentPage, totalPages, linkPages, onPageChange }: BlogPaginationProps) {
  if (totalPages < 2) return null;

  function control(page: number, label: string, children: ReactNode, numbered = false) {
    const disabled = page < 1 || page > totalPages;
    const current = numbered && page === currentPage;
    const className = `inline-flex min-h-11 items-center justify-center gap-2 rounded-md text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta ${
      numbered ? 'w-11 shrink-0' : 'px-3'
    } ${current ? 'bg-terracotta text-white' : 'text-text-main hover:bg-white'} ${disabled ? 'opacity-40' : ''}`;

    if (disabled) {
      return <span className={className} aria-disabled="true">{children}</span>;
    }

    return linkPages ? (
      <Link href={page === 1 ? '/blog' : `/blog?page=${page}`} aria-label={label} aria-current={current ? 'page' : undefined} className={className}>
        {children}
      </Link>
    ) : (
      <button type="button" onClick={() => onPageChange(page)} aria-label={label} aria-current={current ? 'page' : undefined} className={className}>
        {children}
      </button>
    );
  }

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-between gap-y-3 border-t border-border-soft pt-6 sm:mt-12 sm:justify-center sm:gap-6" aria-label="Paginación">
      {control(currentPage - 1, 'Página anterior', <><ArrowLeft size={18} aria-hidden="true" /><span>Anterior</span></>)}
      <div className="order-first flex w-full flex-wrap justify-center gap-1 sm:order-none sm:w-auto">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <span key={page}>{control(page, `Página ${page}`, page, true)}</span>
        ))}
      </div>
      {control(currentPage + 1, 'Página siguiente', <><span>Siguiente</span><ArrowRight size={18} aria-hidden="true" /></>)}
    </nav>
  );
}
