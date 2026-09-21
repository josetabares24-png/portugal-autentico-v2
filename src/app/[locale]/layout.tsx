import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ErrorBoundary from '@/components/ErrorBoundary';
import messages from '@/messages/es.json';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // next-intl otherwise resolves the locale from request headers, which
  // opts the entire public [locale] subtree into dynamic rendering.
  setRequestLocale(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ErrorBoundary>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <GoogleAnalytics />
      </ErrorBoundary>
    </NextIntlClientProvider>
  );
}
