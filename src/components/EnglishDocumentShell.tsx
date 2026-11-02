import localFont from 'next/font/local';
import RootDocument from './RootDocument';
const montserrat = localFont({
  src: [
    {
      path: "../fonts/montserrat-latin.woff2",
      weight: "300 500",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
});

const playfair = localFont({
  src: [
    {
      path: "../fonts/playfair-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../fonts/playfair-italic-latin.woff2",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-display",
  display: "swap",
  preload: false,
  adjustFontFallback: "Times New Roman",
});

const plusJakarta = localFont({
  src: [
    {
      path: "../fonts/plus-jakarta-latin.woff2",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-article",
  display: "swap",
  preload: false,
  adjustFontFallback: "Arial",
});


export default function EnglishDocumentShell({ children, schema }: {
  children: React.ReactNode;
  schema?: React.ReactNode;
  language?: 'en';
}) {
  return (
    <RootDocument language="en" schema={schema} bodyClassName={`${montserrat.variable} ${playfair.variable} ${plusJakarta.variable}`}>
      {children}
    </RootDocument>
  );
}
