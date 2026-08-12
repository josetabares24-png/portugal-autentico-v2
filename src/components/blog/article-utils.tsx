export function renderEditorialHeading(text: string) {
  const separator = ' — ';
  const cut = text.indexOf(separator);
  if (cut === -1) return text;
  return (
    <>
      <span className="article-h2-main">{text.slice(0, cut)}</span>
      <span className="article-h2-sep">{separator}</span>
      <span className="article-h2-sub">{text.slice(cut + separator.length)}</span>
    </>
  );
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}
