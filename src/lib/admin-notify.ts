import logger from '@/lib/logger';

/**
 * Aviso por email a José. Usa la misma cadena que /api/contact, que es la que
 * llega de verdad: primero Brevo (email transaccional con remitente) y, si
 * falla, SMTP con nodemailer. Nunca registra la API key ni las credenciales.
 */
export const ADMIN_EMAIL = 'estabaenlisboa@gmail.com';

export type AdminNotification = {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

export type AdminNotifyResult = { sent: boolean; via: 'brevo' | 'smtp' | null };

export async function notifyAdmin(message: AdminNotification): Promise<AdminNotifyResult> {
  const brevoApiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || 'Estaba en Lisboa';

  if (brevoApiKey && senderEmail) {
    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': brevoApiKey,
        },
        body: JSON.stringify({
          sender: { name: senderName, email: senderEmail },
          to: [{ email: ADMIN_EMAIL, name: 'Estaba en Lisboa' }],
          ...(message.replyTo ? { replyTo: { email: message.replyTo } } : {}),
          subject: message.subject,
          htmlContent: message.html,
          textContent: message.text,
          headers: { 'X-Mailer': 'Estaba en Lisboa' },
        }),
      });
      if (response.ok) return { sent: true, via: 'brevo' };
      const errorData = await response.json().catch(() => ({}));
      logger.warn('[AdminNotify] Brevo rechazó el aviso; probando SMTP', {
        status: response.status,
        code: errorData?.code,
        message: errorData?.message,
      });
    } catch (error) {
      logger.warn('[AdminNotify] Brevo no disponible; probando SMTP', error instanceof Error ? error.message : error);
    }
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    logger.error('[AdminNotify] SMTP no configurado: no hay forma de enviar el aviso');
    return { sent: false, via: null };
  }

  try {
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: `"Estaba en Lisboa" <${process.env.SMTP_USER}>`,
      to: ADMIN_EMAIL,
      ...(message.replyTo ? { replyTo: message.replyTo } : {}),
      subject: message.subject,
      html: message.html,
      text: message.text,
    });
    return { sent: true, via: 'smtp' };
  } catch (error) {
    logger.error('[AdminNotify] SMTP falló', error instanceof Error ? error.message : error);
    return { sent: false, via: null };
  }
}
