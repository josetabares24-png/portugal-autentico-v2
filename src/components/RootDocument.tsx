/* eslint-disable @next/next/no-head-element -- Shared App Router root document. */
import SchemaMarkup from '@/components/SchemaMarkup';
import '@/app/globals.css';
import '@/app/grok-redesign.css';

export default function RootDocument({
  children,
  language = 'es',
  schema,
  bodyClassName,
}: {
  children: React.ReactNode;
  language?: 'es' | 'en';
  schema?: React.ReactNode;
  bodyClassName: string;
}) {
  return (
    <html lang={language}>
      <head>{language === 'es' ? <SchemaMarkup /> : schema}</head>
      <body className={bodyClassName + ' antialiased'}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded focus:shadow-lg focus:outline-none"
        >
          {language === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
        </a>
        {children}
      </body>
    </html>
  );
}
