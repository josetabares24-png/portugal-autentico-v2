import { getPhotoCredit, photoAdaptation } from '@/data/photo-credits';

/** Atribución accesible a un toque, fuera del enlace principal de la foto. */
export function PhotoAttribution({ image, lang = 'es' }: { image: string; lang?: 'es' | 'en' }) {
  const credit = getPhotoCredit(image);
  if (!credit) return null;
  return (
    <details className="photo-attribution">
      <summary>{lang === 'en' ? 'Photo credits' : 'Créditos de la foto'}</summary>
      <p>
        {lang === 'en' ? 'Photo' : 'Foto'}: <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer">{credit.author} / Wikimedia Commons</a>
        {' · '}{credit.licenseUrl ? <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer license">{credit.license}</a> : credit.license}
        {photoAdaptation(credit, lang) ? ` · ${photoAdaptation(credit, lang)}` : ''}
      </p>
    </details>
  );
}
