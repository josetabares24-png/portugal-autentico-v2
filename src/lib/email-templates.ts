interface PurchaseEmailData {
  customerName: string;
  productName: string;
  productPrice: string;
  downloadUrl: string;
  guideContent?: string;
}

export function generatePurchaseEmailHtml(data: PurchaseEmailData): string {
  const { customerName, productName, productPrice, downloadUrl, guideContent } = data;

  return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Tu guía ${productName} está lista!</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            background-color: #f8f9fa;
        }
        .container {
            background-color: white;
            margin: 20px;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #FF6B35;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #FF6B35;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #666;
            font-size: 16px;
        }
        .content {
            margin: 25px 0;
        }
        .highlight-box {
            background-color: #f0f8ff;
            border-left: 4px solid #FF6B35;
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
        }
        .download-button {
            display: inline-block;
            background-color: #FF6B35;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            font-size: 16px;
            margin: 20px 0;
            text-align: center;
            box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
            transition: all 0.3s ease;
        }
        .download-button:hover {
            background-color: #e55a2b;
            box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }
        .guide-preview {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border: 1px solid #e9ecef;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
        .social-links {
            margin: 15px 0;
        }
        .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #FF6B35;
            text-decoration: none;
            font-weight: bold;
        }
        .warning {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Portugal Auténtico</div>
            <div class="subtitle">Tu viaje comienza aquí</div>
        </div>

        <div class="content">
            <h1 style="color: #FF6B35; margin-bottom: 20px;">¡Felicidades, ${customerName}!</h1>

            <p style="font-size: 18px; margin-bottom: 20px;">
                Tu compra de <strong>${productName}</strong> por <strong>${productPrice}</strong> ha sido procesada exitosamente.
            </p>

            <div class="highlight-box">
                <h3 style="margin-top: 0; color: #FF6B35;">📥 Tu guía está lista para descargar</h3>
                <p>Haz clic en el botón de abajo para acceder inmediatamente a tu guía completa. El enlace es seguro y personal para ti.</p>

                <a href="${downloadUrl}" class="download-button">
                    🚀 DESCARGAR MI GUÍA AHORA
                </a>
            </div>

            <div class="warning">
                <strong>⚠️ Importante:</strong> Guarda este email y el enlace de descarga. El enlace es válido por 30 días y solo puede ser usado una vez por motivos de seguridad.
            </div>

            ${guideContent ? `
            <div class="guide-preview">
                <h3 style="margin-top: 0; color: #FF6B35;">📖 Vista previa de tu guía</h3>
                <div style="max-height: 200px; overflow-y: auto;">
                    ${guideContent}
                </div>
            </div>
            ` : ''}

            <h3 style="color: #FF6B35; margin-top: 30px;">¿Qué incluye tu guía?</h3>
            <ul style="padding-left: 20px;">
                <li>Itinerarios detallados día por día</li>
                <li>Mapas interactivos con puntos de interés</li>
                <li>Recomendaciones locales auténticas</li>
                <li>Consejos prácticos para tu viaje</li>
                <li>Información actualizada para 2026</li>
            </ul>

            <p style="margin-top: 25px;">
                Si tienes alguna pregunta sobre tu guía o necesitas ayuda adicional, no dudes en contactarnos.
                Estamos aquí para hacer que tu viaje a Portugal sea inolvidable.
            </p>
        </div>

        <div class="footer">
            <div class="social-links">
                <a href="https://estabaenlisboa.com">🌐 Web</a>
                <a href="mailto:hola@estabaenlisboa.com">📧 Email</a>
            </div>
            <p>
                Portugal Auténtico - Descubre el Portugal real<br>
                © 2026 Estába en Lisboa. Todos los derechos reservados.
            </p>
            <p style="font-size: 12px; margin-top: 10px;">
                Este email fue enviado automáticamente tras tu compra.
                Si no realizaste esta compra, por favor ignora este mensaje.
            </p>
        </div>
    </div>
</body>
</html>`;
}

export function generatePurchaseEmailText(data: PurchaseEmailData): string {
  const { customerName, productName, productPrice, downloadUrl, guideContent } = data;

  return `
¡Felicidades, ${customerName}!

Tu compra de ${productName} por ${productPrice} ha sido procesada exitosamente.

DESCARGA TU GUÍA: ${downloadUrl}

Importante: Guarda este enlace. Es válido por 30 días y solo puede ser usado una vez por seguridad.

${guideContent ? `Vista previa de tu guía:
${guideContent}` : ''}

¿Qué incluye tu guía?
- Itinerarios detallados día por día
- Mapas interactivos con puntos de interés
- Recomendaciones locales auténticas
- Consejos prácticos para tu viaje
- Información actualizada para 2026

Si tienes preguntas, contactanos en hola@estabaenlisboa.com

Portugal Auténtico - Descubre el Portugal real
© 2026 Portugal Auténtico

---
Este email fue enviado automáticamente tras tu compra.
`;
}