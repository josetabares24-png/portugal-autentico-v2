import type { Metadata } from "next";
import { notFound } from "next/navigation";
import articles from "@/data/english-pilot-articles.json";
import { languageAlternates } from "@/lib/language-alternates";
import EnglishArticle from "@/components/english/EnglishArticle";
export const dynamicParams = false;
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
  return {
    title: article.title,
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
