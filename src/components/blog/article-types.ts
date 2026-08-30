export type ArticleBlock = {
  tipo: string;
  texto?: string;
  items?: string[];
  imagen?: string;
  caption?: string;
  /**
   * Destino del bloque `enlace`, una llamada discreta dentro del cuerpo del
   * artículo. Se usa para los free tours, apuntando a la sección de la ruta
   * que corresponda; nunca a un enlace de afiliado directo, para no llenar
   * los artículos de salientes de afiliación.
   */
  href?: string;
  /** Texto del enlace del bloque `enlace`. */
  label?: string;
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
  /**
   * Ficha de lugar. Ambos campos son opcionales a propósito: hay guías que no
   * hablan de un sitio al que se llegue —cómo pagar, preparar el viaje— y ahí
   * el bloque sobra. Cuando falta, no se pinta el epígrafe ni entra en el
   * índice, en vez de rellenarlo con un "no aplica".
   */
  comoLlegar?: string;
  mejorHora?: string;
};

export type SectionPhoto = {
  src: string;
  alt: string;
  position?: string;
};
