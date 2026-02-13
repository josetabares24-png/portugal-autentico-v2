'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './guia-gratis.module.css';

export default function GuiaGratisPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '' });
        
        // Descargar guía automáticamente después de 1 segundo
        setTimeout(() => {
          window.location.href = '/downloads/guia-lisboa-gratis.pdf';
        }, 1000);
      } else {
        setError('Hubo un error. Por favor intenta de nuevo.');
      }
    } catch (err) {
      setError('Error de conexión. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.pageContent}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
          <h1>15 Consejos que Solo los Locales Conocen</h1>
          <p>La guía gratuita que te hará vivir Lisboa como un verdadero lisboeta</p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentGrid}>
          
          {/* Form Card */}
          <div className={styles.formCard}>
            <h2>Descarga Gratis</h2>
            <p className={styles.subtitle}>Recibe la guía en tu email en menos de 1 minuto</p>

            {showSuccess && (
              <div className={styles.successMessage}>
                ✓ ¡Listo! Revisa tu email para descargar la guía
              </div>
            )}

            {error && (
              <div className={styles.errorMessage}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Tu nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ej: María"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Tu email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : '📥 Descargar Guía Gratis'}
              </button>

              <div className={styles.trustBadgesSmall}>
                <div className={styles.badgeSmall}>
                  <span className={styles.check}>✓</span>
                  <span>Sin spam</span>
                </div>
                <div className={styles.badgeSmall}>
                  <span className={styles.check}>✓</span>
                  <span>Descarga inmediata</span>
                </div>
                <div className={styles.badgeSmall}>
                  <span className={styles.check}>✓</span>
                  <span>100% gratis</span>
                </div>
              </div>

              <p className={styles.privacyNotice}>
                Al descargar aceptas recibir emails ocasionales con consejos sobre Lisboa.{' '}
                <Link href="/politica-privacidad">Política de Privacidad</Link>
              </p>
            </form>
          </div>

          {/* Benefits Card */}
          <div className={styles.benefitsCard}>
            <h3>¿Qué vas a descubrir?</h3>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🗺️</div>
              <div className={styles.benefitText}>
                <h4>Cómo moverte inteligentemente</h4>
                <p>Evita las cuestas que te destrozan y ahorra tiempo usando el transporte como un local</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>🍽️</div>
              <div className={styles.benefitText}>
                <h4>Dónde comer de verdad</h4>
                <p>Restaurantes auténticos donde comen los lisboetas, lejos de trampas turísticas</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>⏰</div>
              <div className={styles.benefitText}>
                <h4>El mejor momento para cada cosa</h4>
                <p>Cuándo visitar cada sitio para evitar aglomeraciones y disfrutar al máximo</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>💡</div>
              <div className={styles.benefitText}>
                <h4>Secretos que nadie cuenta</h4>
                <p>Miradores escondidos, barrios auténticos y experiencias que no salen en Google</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>💰</div>
              <div className={styles.benefitText}>
                <h4>Ahorra dinero sin sacrificar calidad</h4>
                <p>Tips para no tirar el dinero en cosas innecesarias o mal planificadas</p>
              </div>
            </div>
          </div>

        </div>

        {/* Preview Topics */}
        <div className={styles.previewSection}>
          <h3>Los 15 consejos que encontrarás en la guía:</h3>
          <div className={styles.topicsGrid}>
            {[
              'Las cuestas y cómo evitarlas',
              'La verdad sobre el tranvía 28',
              'Señales de trampas turísticas',
              'Fado auténtico vs show turístico',
              'Mejores horarios para visitar',
              'Miradores secretos',
              'Usa el metro inteligentemente',
              'Qué "típico" vale la pena',
              'Cómo descubrir Alfama',
              'Barrios más allá del centro',
              'La magia del atardecer',
              'Calzado adecuado (en serio)',
              'Por qué NO alquilar coche',
              'Lisboa Card: ¿vale la pena?',
              'Deja espacios en blanco'
            ].map((topic, index) => (
              <div key={index} className={styles.topicItem}>
                <div className={styles.topicNumber}>{index + 1}</div>
                <div className={styles.topicText}>{topic}</div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          &copy; 2026 Estaba en Lisboa · {' '}
          <Link href="/aviso-legal">Aviso Legal</Link> · {' '}
          <Link href="/politica-privacidad">Privacidad</Link>
        </p>
      </footer>
    </div>
  );
}
