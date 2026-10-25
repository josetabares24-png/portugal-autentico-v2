import type { Metadata } from "next";
import { notFound } from "next/navigation";
import articles from "@/data/english-pilot-articles.json";
import { languageAlternates } from "@/lib/language-alternates";
import EnglishArticle from "@/components/english/EnglishArticle";
export const dynamicParams = false;
const BRAND_SUFFIX = " | Estaba en Lisboa";
const MAX_TITLE_LENGTH = 60;
/** Shorter <title> where the H1 alone would still be over 60 characters. */
const SEO_TITLES: Record<string, string> = {
  "pena-palace-tickets": "Pena Palace tickets: choose the visit, then the time",
};
export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { robots: { index: false, follow: false } };
  const path = `/en/${slug}`;
  // Same rule as the Spanish blog: if the brand pushes the title past 60
  // characters, Google cuts the end, so the page goes out without it.
  const seoTitle = SEO_TITLES[slug] ?? article.title;
  return {
    title: `${seoTitle}${BRAND_SUFFIX}`.length > MAX_TITLE_LENGTH ? { absolute: seoTitle } : seoTitle,
    description: article.description,
    alternates: {
      canonical: "https://estabaenlisboa.com" + path,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "article",
      locale: "en_GB",
      title: article.title,
      description: article.description,
      url: "https://estabaenlisboa.com" + path,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}
export default async function EnglishGuide({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return <EnglishArticle article={article} />;
}
