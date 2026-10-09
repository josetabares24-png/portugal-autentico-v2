'use client';

import Link from 'next/link';
import { useId, useState } from 'react';
import { trackEvent } from '@/lib/analytics';
import { LEAD_MAGNET_PDF, LEAD_MAGNET_TITLE } from '@/lib/newsletter';

type ArticleNewsletterProps = {
  slug: string;
  placement: 'article_inline' | 'article_footer';
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONSENT_TEXT =
  'Acepto recibir por email las novedades de Estaba en Lisboa. Los envíos se hacen con Brevo y puedes darte de baja cuando quieras.';

/**
 * Abre el PDF en cuanto el alta responde. Un enlace del mismo origen con
 * `download` no lo bloquea el navegador aunque llegue después del fetch: en
 * escritorio descarga el archivo y en iPhone Safari lo abre o pregunta qué
 * hacer. Si nada de eso ocurre, queda el botón visible.
 */
function openPdf() {
  try {
    const link = document.createElement('a');
    link.href = LEAD_MAGNET_PDF;
    link.download = LEAD_MAGNET_PDF.split('/').pop() || 'lista.pdf';
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch {
    // Sin descarga automática: el botón del mensaje de éxito sigue ahí.
  }
}

/**
 * Suscripción a novedades con la lista en PDF como regalo. Va sobria a
 * propósito: aparece en mitad de la lectura y no debe parecer un banner.
 */
export function ArticleNewsletter({ slug, placement }: ArticleNewsletterProps) {
  const uid = useId();
  const emailId = `${uid}-email`;
  const consentId = `${uid}-consent`;
  const errorId = `${uid}-error`;
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const isFooter = placement === 'article_footer';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus('error');
      setErrorMessage('Revisa el email: parece que falta algo.');
      return;
    }
    if (!consent) {
      setStatus('error');
      setErrorMessage('Marca la casilla para confirmar que quieres recibir los emails.');
      return;
    }
    setStatus('loading');
    setErrorMessage(null);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          leadMagnet: 'que-reservar',
          slug,
          placement,
          consent: true,
          consentText: CONSENT_TEXT,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        setStatus('error');
        setErrorMessage(data.message || 'No se ha podido completar. Inténtalo otra vez en un rato.');
        return;
      }
      setStatus('success');
      setEmail('');
      openPdf();
      trackEvent('sign_up', {
        method: 'newsletter',
        content_type: 'article_newsletter',
        content_id: slug,
        placement,
      });
    } catch {
      setStatus('error');
      setErrorMessage('Error de conexión. Inténtalo otra vez.');
    }
  }

  return (
    <aside
      className={`article-newsletter${isFooter ? ' article-newsletter-footer' : ''}`}
      aria-label="Suscripción por email"
    >
      <p className="article-newsletter-title">
        Lista en PDF: {LEAD_MAGNET_TITLE.charAt(0).toLowerCase() + LEAD_MAGNET_TITLE.slice(1)}
      </p>

      {status === 'success' ? (
        <div role="status" className="article-newsletter-success">
          <p className="article-newsletter-ok">Aquí tienes la lista.</p>
          <a
            href={LEAD_MAGNET_PDF}
            target="_blank"
            rel="noopener"
            className="btn-primary article-newsletter-download"
            onClick={() => trackEvent('file_download', { file_name: LEAD_MAGNET_PDF, placement, content_id: slug })}
          >
            Descargar la lista (PDF)
          </a>
          <p className="article-newsletter-fine">
            Si no se ha abierto sola, pulsa el botón. Te escribiré cuando publique una guía nueva o cambie algo importante.
          </p>
        </div>
      ) : (
        <>
          <p className="article-newsletter-text">
            Pena, Jerónimos, Torre de Belém, el billete de transporte y el trayecto desde el aeropuerto: qué conviene
            reservar con tiempo y qué puedes comprar al llegar. Te la doy si te apuntas a las novedades por email.
          </p>
          <form onSubmit={handleSubmit} noValidate className="article-newsletter-form">
            <label htmlFor={emailId} className="sr-only">Tu email</label>
            <div className="article-newsletter-row">
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={status === 'error'}
                aria-describedby={errorMessage ? errorId : undefined}
                required
              />
              <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Enviando…' : 'Quiero la lista'}
              </button>
            </div>
            <div className="article-newsletter-consent">
              <input
                id={consentId}
                name="consent"
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                required
              />
              <label htmlFor={consentId}>
                Acepto recibir por email las novedades de Estaba en Lisboa. Los envíos se hacen con Brevo y puedes
                darte de baja cuando quieras. Más detalles en la{' '}
                <Link href="/politica-privacidad">política de privacidad</Link>.
              </label>
            </div>
            {errorMessage && (
              <p id={errorId} role="alert" className="article-newsletter-error">{errorMessage}</p>
            )}
          </form>
        </>
      )}
    </aside>
  );
}
