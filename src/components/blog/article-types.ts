export type ArticleBlock = {
  tipo: string;
  texto?: string;
  items?: string[];
  imagen?: string;
  caption?: string;
};

export type ArticleLink = {
  href: string;
  label: string;
};

export type ArticleSource = {
  label: string;
  href: string;
};

export type ArticleCta = {
  href: string;
  label: string;
  title: string;
  text: string;
};

export type Article = {
  titulo: string;
  /**
   * Texto de referencia del artículo. Alimenta la meta description y la
   * og:description a través de `getSeoDescription()`.
   */
  descripcion: string;
  /**
   * Bajada visible bajo el titular. Cuando falta se usa `descripcion`, que es
   * lo que hacen todos los artículos salvo los que necesitan separar el copy
   * editorial del de buscadores.
   */
  subtitulo?: string;
  seoTitle?: string;
  metaDescription?: string;
  imagen: string;
  imageAlt?: string;
  categoria: string;
  fecha: string;
  fechaActualizacion?: string;
  dateModified?: string;
  minutos: number;
  links?: ArticleLink[];
  fuentes?: ArticleSource[];
  cta?: ArticleCta;
  contenido: ArticleBlock[];
};

export type ArticleFaq = {
  q: string;
  a: string;
};

export type ArticleHeading = {
  title: string;
  id: string;
};

export type ArticleExtras = {
  comoLlegar: string;
  mejorHora: string;
  faqs: ArticleFaq[];
};

export type SectionPhoto = {
  src: string;
  alt: string;
  position?: string;
};
