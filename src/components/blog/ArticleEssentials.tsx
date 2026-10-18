import styles from './ArticleEssentials.module.css';

export type EditorialArticleType = 'transport' | 'place' | 'neighborhood' | 'food' | 'itinerary' | 'event' | 'culture' | 'practical';
export type EssentialRow = { label: string; value: string };
export type ArticleEssentialsProps = {
  rows: readonly EssentialRow[];
  type: EditorialArticleType;
  title?: string;
};

/** Page-owned facts only. No prices, dates, defaults or commercial links here. */
export function ArticleEssentials({ rows, type, title = type === 'culture' ? 'En 30 segundos' : 'Lo esencial' }: ArticleEssentialsProps) {
  if (!rows.length) return null;
  return (
    <section className={`article-reading ${styles.essentials}`} data-editorial-essentials={type} aria-label={title}>
      <h2 className={styles.title}>{title}</h2>
      <dl className={styles.rows}>
        {rows.map(({ label, value }) => (
          <div className={styles.row} key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
