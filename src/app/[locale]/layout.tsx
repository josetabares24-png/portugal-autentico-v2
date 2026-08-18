import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import GetYourGuideScript from '@/components/afiliados/GetYourGuideScript';
import TiqetsScript from '@/components/afiliados/TiqetsScript';
import ErrorBoundary from '@/components/ErrorBoundary';

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

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ErrorBoundary>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <GoogleAnalytics />
        {/* Va aquí y no en el layout raíz por dos razones: es donde viven los
            demás terceros sujetos a consentimiento, y así deja de cargarse en
            el panel de administración, donde no hay ningún widget. */}
        <GetYourGuideScript />
        <TiqetsScript />
      </ErrorBoundary>
    </NextIntlClientProvider>
  );
}
