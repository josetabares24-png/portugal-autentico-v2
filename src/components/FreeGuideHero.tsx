import React from 'react';
import Link from 'next/link';
import styles from './FreeGuideHero.module.css';

const FreeGuideHero = () => {
  return (
    <section className={styles.freeGuideHero}>
      <div className={styles.container}>
        {/* Icono de descarga */}
        <div className={styles.downloadIcon}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </div>

        {/* Título principal */}
        <h2 className={styles.title}>¿Aún no estás seguro?</h2>

        {/* Descripción */}
        <p className={styles.description}>
          Descarga nuestra guía gratuita con 15 consejos que solo los locales conocen
        </p>

        {/* Botón de descarga */}
        <Link href="/guia-gratis" className={styles.downloadButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Descargar Guía Gratis
        </Link>

        {/* Trust badges */}
        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <span className={styles.checkmark}>✓</span>
            <span>Sin spam</span>
          </div>
          <div className={styles.badge}>
            <span className={styles.checkmark}>✓</span>
            <span>Descarga inmediata</span>
          </div>
          <div className={styles.badge}>
            <span className={styles.checkmark}>✓</span>
            <span>100% gratis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeGuideHero;
