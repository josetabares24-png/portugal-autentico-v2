// Servicio para integrar con Brevo (ex-Sendinblue)

interface LeadData {
  email: string;
  name?: string;
  profile: string;
  companion: string;
  interest: string;
  duration: string;
  budget: string;
  experience: string;
}

interface BrevoContact {
  email: string;
  attributes: {
    NOMBRE?: string;
    PERFIL_VIAJERO: string;
    COMPANION: string;
    INTERES: string;
    DURACION: string;
    PRESUPUESTO: string;
    EXPERIENCIA: string;
    QUIZ_DATE: string;
  };
  listIds: number[];
  updateEnabled: boolean;
}

interface CampaignPayload {
  name: string;
  subject: string;
  sender: { name: string; email: string };
  htmlContent: string;
  listIds: number[];
  scheduledAt?: string;
}

type WelcomeEmailPayload = {
  email: string;
  name?: string;
  profile: string;
};

const BREVO_API_URL = 'https://api.brevo.com/v3';

export class BrevoService {
  private apiKey: string;
  private listId: number;

  constructor(apiKey: string, listId: number) {
    this.apiKey = apiKey;
    this.listId = listId;
  }

  async addContact(data: LeadData): Promise<{ success: boolean; error?: string }> {
    try {
      const contact: BrevoContact = {
        email: data.email,
        attributes: {
          NOMBRE: data.name,
          PERFIL_VIAJERO: data.profile,
          COMPANION: data.companion,
          INTERES: data.interest,
          DURACION: data.duration,
          PRESUPUESTO: data.budget,
          EXPERIENCIA: data.experience,
          QUIZ_DATE: new Date().toISOString(),
        },
        listIds: [this.listId],
        updateEnabled: true,
      };

      const response = await fetch(`${BREVO_API_URL}/contacts`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': this.apiKey,
        },
        body: JSON.stringify(contact),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Brevo error:', error);
        return { success: false, error: error.message || 'Error adding contact' };
      }

      return { success: true };
    } catch (error) {
      console.error('Brevo service error:', error);
      return { success: false, error: 'Network error' };
    }
  }

  async sendWelcomeEmail(
    email: string,
    name: string,
    profile: string
  ): Promise<{ success: boolean; reason?: string }> {
    try {
      const templateId = process.env.BREVO_WELCOME_TEMPLATE_ID;
      const senderName = process.env.BREVO_SENDER_NAME || 'Estaba en Lisboa';
      const senderEmail = process.env.BREVO_SENDER_EMAIL;

      // Si hay template ID, usar template
      if (templateId) {
        console.log('[Brevo] Enviando email con template:', templateId);
        const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-key': this.apiKey,
          },
          body: JSON.stringify({
            templateId: parseInt(templateId, 10),
            to: [{ email, name }],
            params: {
              NOMBRE: name || 'Viajero',
              PERFIL: profile,
            },
          }),
        });

        if (!response.ok) {
          const err = await response.json().catch(() => ({}));
          console.error('[Brevo] Error template email:', err);
        }
        return { success: response.ok };
      }

      // Si no hay sender email configurado, no se puede enviar
      if (!senderEmail) {
        console.warn('[Brevo] No se puede enviar email: BREVO_SENDER_EMAIL no está configurado');
        console.warn('[Brevo] Agrega en Vercel: BREVO_SENDER_EMAIL=tu@email-verificado.com');
        return { success: false, reason: 'BREVO_SENDER_EMAIL no configurado' };
      }

      // Enviar email HTML básico
      console.log('[Brevo] Enviando email HTML a:', email);
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#111; max-width:600px; margin:0 auto; padding:20px;">
          <div style="text-align:center; margin-bottom:24px;">
            <h1 style="color:#E07912; margin:0;">Estaba en Lisboa</h1>
          </div>
          <h2 style="margin-bottom:8px; color:#333;">Tu perfil viajero</h2>
          <p>Hola <strong>${name || 'viajero'}</strong>, gracias por hacer el quiz.</p>
          <p>Tu perfil es: <strong style="color:#E07912;">${profile}</strong></p>
          <p>Te enviaré recomendaciones personalizadas según tus respuestas.</p>
          <div style="background:#f7f4ef; padding:16px; border-radius:8px; margin:24px 0;">
            <p style="margin:0; font-size:14px;">Mientras tanto, explora nuestras guías en <a href="https://estabaenlisboa.com/itinerarios" style="color:#E07912;">estabaenlisboa.com</a></p>
          </div>
          <p style="margin-top:24px; color:#666; font-size:14px;">— José, desde Lisboa</p>
        </div>
      `;

      const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': this.apiKey,
        },
        body: JSON.stringify({
          sender: { name: senderName, email: senderEmail },
          to: [{ email, name: name || 'Viajero' }],
          subject: `${name ? name + ', tu' : 'Tu'} perfil viajero en Lisboa`,
          htmlContent,
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        console.error('[Brevo] Error enviando email:', err);
        return { success: false, reason: err?.message || 'Error Brevo' };
      }

      console.log('[Brevo] Email enviado correctamente a:', email);
      return { success: true };
    } catch (error) {
      console.error('[Brevo] Email send error:', error);
      return { success: false, reason: 'Exception' };
    }
  }
}

let brevoInstance: BrevoService | null = null;

export function getBrevoService(): BrevoService {
  if (!brevoInstance) {
    const apiKey = process.env.BREVO_API_KEY;
    const listId = parseInt(process.env.BREVO_LIST_ID || '0', 10);

    if (!apiKey) {
      throw new Error('BREVO_API_KEY not configured');
    }

    if (!listId) {
      throw new Error('BREVO_LIST_ID not configured');
    }

    brevoInstance = new BrevoService(apiKey, listId);
  }

  return brevoInstance;
}

export async function submitQuizLead(
  data: LeadData
): Promise<{ success: boolean; error?: string; emailSent?: boolean }> {
  try {
    const response = await fetch('/api/quiz-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Submit lead error:', error);
    return { success: false, error: 'Network error' };
  }
}

export async function submitBrevoCampaign(
  data: CampaignPayload
): Promise<{ success: boolean; error?: string; data?: unknown }> {
  try {
    const response = await fetch('/api/brevo/campaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Submit campaign error:', error);
    return { success: false, error: 'Network error' };
  }
}
