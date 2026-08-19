'use client';

import type { ReactNode } from 'react';

interface FilterChipProps {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
  tone?: 'primary' | 'secondary';
  className?: string;
}

export function FilterChip({
  active,
  children,
  onClick,
  tone = 'primary',
  className = '',
}: FilterChipProps) {
  const activeClass = tone === 'secondary'
    ? 'filter-chip-secondary-active'
    : 'filter-chip-primary-active';

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`filter-chip ${active ? activeClass : ''} ${className}`}
    >
      {children}
    </button>
  );
}
