import type { ReactNode } from 'react';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  className = '',
}: PageIntroProps) {
  return (
    <section className={`page-intro ${className}`}>
      <div className="site-container">
        <div className="page-intro-content">
          {breadcrumb}
          <p className="page-eyebrow">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
          <p className="page-description">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
