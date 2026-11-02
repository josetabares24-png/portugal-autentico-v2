import { getPhotoCredit, photoAdaptation } from '@/data/photo-credits';

/** Crédito legible fuera de la fotografía; nunca un enlace dentro de otro. */
export function PhotoAttribution({ image }: { image: string }) {
  const credit = getPhotoCredit(image);
  if (!credit) return null;
  return (
    <p className="photo-attribution">
      Foto: <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer">{credit.author} / Wikimedia Commons</a>
      {' · '}{credit.licenseUrl ? <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">{credit.license}</a> : credit.license}
      {photoAdaptation(credit) ? ` · ${photoAdaptation(credit)}` : ''}
    </p>
  );
}
