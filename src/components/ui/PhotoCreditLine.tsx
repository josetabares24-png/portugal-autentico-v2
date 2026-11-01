import { getPhotoCredit, photoAdaptation } from '@/data/photo-credits';

/*
 * Crédito visible de una foto de Wikimedia Commons: autor, enlace al archivo y
 * licencia. No pinta nada si la imagen no está en `photo-credits.ts` (fotos
 * propias o del proveedor). Usa <a> normales para servir también en
 * componentes cliente; nunca va dentro de otro enlace.
 */
export default function PhotoCreditLine({
  image,
  lang = 'es',
  label,
  className = '',
}: {
  image?: string;
  lang?: 'es' | 'en';
  /** Texto antes del autor cuando el pie va fuera de la foto, p. ej. «Foto de Belém». */
  label?: string;
  className?: string;
}) {
  const credit = getPhotoCredit(image);
  if (!credit) return null;
  const via = lang === 'en' ? 'via' : 'vía';
  const adaptation = photoAdaptation(credit, lang);
  return (
    <p className={`font-body text-[11px] leading-snug text-text-secondary ${className}`}>
      {label ?? (lang === 'en' ? 'Photo' : 'Foto')}: {credit.author},{' '}
      <a className="underline underline-offset-2" href={credit.licenseUrl || credit.sourceUrl} rel="license noopener" target="_blank">
        {credit.license}
      </a>
      , {via}{' '}
      <a className="underline underline-offset-2" href={credit.sourceUrl} rel="noopener" target="_blank">
        Wikimedia Commons
      </a>
      {adaptation ? ` (${adaptation})` : null}
    </p>
  );
}
