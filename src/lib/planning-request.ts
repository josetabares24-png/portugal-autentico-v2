import { PLANNING_EMAIL } from './planning-contact';

const fieldLimits = {
  nombre: 120, email: 254, fechas: 200, dias: 8, personas: 8,
  ritmo: 100, presupuesto: 200, intereses: 1000, comentarios: 5000,
} as const;
export type PlanningRequest = Record<keyof typeof fieldLimits, string>;

export function parsePlanningRequest(body: unknown): PlanningRequest | null {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const input = body as Record<string, unknown>;
  const result = {} as PlanningRequest;
  for (const [key, limit] of Object.entries(fieldLimits)) {
    const value = input[key];
    // Keep compatibility with older clients which sent numeric days/travelers.
    if (value != null && typeof value !== 'string' &&
        !((key === 'dias' || key === 'personas') && typeof value === 'number' && Number.isFinite(value))) return null;
    const normalized = value == null ? '' : String(value).trim();
    if (normalized.length > limit) return null;
    if (['nombre', 'email'].includes(key) && /[\r\n]/.test(normalized)) return null;
    result[key as keyof PlanningRequest] = normalized;
  }
  if (!result.nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.email)) return null;
  return result;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
}

export type PlanningMessage = {
  to: { email: string; name: string }[];
  replyTo: { email: string; name: string };
  subject: string;
  htmlContent: string;
  textContent: string;
};
type Send = (message: PlanningMessage) => Promise<{ success: boolean }>;

export function planningMessages(data: PlanningRequest) {
  const fields = [
    ['Nombre', data.nombre], ['Email', data.email], ['Fechas', data.fechas],
    ['Días', data.dias], ['Personas', data.personas], ['Ritmo', data.ritmo],
    ['Presupuesto', data.presupuesto], ['Intereses', data.intereses], ['Mensaje', data.comentarios],
  ];
  const notification: PlanningMessage = {
    to: [{ email: PLANNING_EMAIL, name: 'José — Estaba en Lisboa' }],
    replyTo: { email: data.email, name: data.nombre },
    subject: `[Planifica] Nuevo mensaje de ${data.nombre}`,
    htmlContent: `<h2>Contacto para planificar un viaje</h2>${fields.map(([label, value]) =>
      `<p><strong>${label}:</strong> ${escapeHtml(value || 'No especificado').replace(/\n/g, '<br>')}</p>`).join('')}`,
    textContent: fields.map(([label, value]) => `${label}: ${value || 'No especificado'}`).join('\n'),
  };
  const text = `Hola ${data.nombre},\n\nTu mensaje para planificar el viaje se ha enviado a José. Lo revisaré personalmente y te responderé por email para hablar de lo que necesitas y de cómo puedo ayudarte. Antes de preparar el plan acordaremos el alcance y el precio.\n\nPuedes responder a este correo si quieres añadir algo.\n\n— José, Estaba en Lisboa`;
  const confirmation: PlanningMessage = {
    to: [{ email: data.email, name: data.nombre }],
    replyTo: { email: PLANNING_EMAIL, name: 'José — Estaba en Lisboa' },
    subject: 'Tu mensaje para José — Estaba en Lisboa',
    htmlContent: `<p>${escapeHtml(text).replace(/\n/g, '<br>')}</p>`,
    textContent: text,
  };
  return { notification, confirmation };
}

/** A lead succeeds only when the owner's notification is accepted by a transport.
 * Visitor acknowledgement is secondary. No newsletter/contact-list writes.
 */
export async function deliverPlanningRequest(
  data: PlanningRequest,
  transports: { primary?: Send; fallback?: Send },
): Promise<{ success: boolean; confirmationSent: boolean }> {
  const { notification, confirmation } = planningMessages(data);
  const attempt = async (send: Send, message: PlanningMessage) => {
    try { return (await send(message)).success; } catch { return false; }
  };
  const senders = [transports.primary, transports.fallback].filter((send): send is Send => Boolean(send));
  for (const [index, send] of senders.entries()) {
    if (!await attempt(send, notification)) continue;
    // Never resend the owner's notification if only acknowledgement fails.
    for (const acknowledge of senders.slice(index)) {
      if (await attempt(acknowledge, confirmation)) return { success: true, confirmationSent: true };
    }
    return { success: true, confirmationSent: false };
  }
  return { success: false, confirmationSent: false };
}
