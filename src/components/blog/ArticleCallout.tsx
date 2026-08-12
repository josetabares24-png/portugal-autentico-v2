import type { ReactNode } from 'react';

type ArticleCalloutProps = {
  label: string;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
};

export function ArticleCallout({
  label,
  children,
  className = 'article-info-box article-note border-l-2 border-gold',
  labelClassName = 'article-box-label article-box-label-accent uppercase tracking-widest',
}: ArticleCalloutProps) {
  return (
    <div className={className}>
      <p className={labelClassName}>{label}</p>
      {children}
    </div>
  );
}
