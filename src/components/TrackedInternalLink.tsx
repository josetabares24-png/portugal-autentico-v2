'use client';

import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';

type Props = Omit<ComponentProps<typeof Link>, 'href' | 'onClick'> & {
  href: string;
  contentType: string;
  contentId: string;
  children: ReactNode;
};

export default function TrackedInternalLink({
  href,
  contentType,
  contentId,
  children,
  ...props
}: Props) {
  return (
    <Link
      href={href}
      {...props}
      onClick={() => {
        trackEvent('select_content', {
          content_type: contentType,
          content_id: contentId,
        });
      }}
    >
      {children}
    </Link>
  );
}
