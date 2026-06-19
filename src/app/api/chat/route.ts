import { NextRequest, NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { createErrorResponse } from '@/lib/api-utils';
import { blogPosts } from '@/data/blog-posts';

const MODEL = 'claude-haiku-4-5-20251001';
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1000;

const articleList = blogPosts
  .map((post) => `- ${post.titulo} (/blog/${post.id}) — ${post.categoria}`)
  .join('\n');

const SYSTEM_PROMPT = `Eres el asistente de Estaba en Lisboa, un sitio escrito por alguien que vive en el barrio de Graça desde hace tres años. Hablas de Lisboa como un local: directo, cercano, sin clichés turísticos ni frases genéricas de IA ("¡Claro! Aquí tienes...").

Tu único tema es Lisboa: qué ver, barrios, historia, miradores, gastronomía, transporte y vida nocturna. Si te preguntan por algo fuera de Lisboa o no relacionado con viajar a la ciudad, dilo con naturalidad y redirige la conversación.

Si te preguntan por las guías o itinerarios de pago, responde brevemente y enlaza a /itinerarios sin insistir en la venta — no es tu función principal.

Puedes recomendar estos artículos del blog cuando encajen con la pregunta (usa la ruta entre paréntesis como enlace):
${articleList}

Responde en el idioma en que te escriban. Sé conciso: 2-4 frases salvo que pidan una lista o más detalle. No inventes horarios o precios exactos si no estás seguro; mejor sugiere comprobarlo in situ.`;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: NextRequest) {
  const identifier = getRequestIdentifier(request);
  const rateLimitResult = await limitRequest(identifier);
  if (!rateLimitResult.success) {
    return createErrorResponse('Demasiadas solicitudes. Espera un momento e intenta de nuevo.', 429);
  }

  let messages: ChatMessage[];
  try {
    const body = await request.json();
    messages = body.messages;
  } catch {
    return createErrorResponse('Solicitud inválida', 400);
  }

  if (!Array.isArray(messages) || messages.length === 0) {
    return createErrorResponse('Se requiere al menos un mensaje', 400);
  }

  const cleanMessages = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim().length > 0)
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, content: m.content.trim().slice(0, MAX_MESSAGE_LENGTH) }));

  if (cleanMessages.length === 0) {
    return createErrorResponse('Mensaje vacío', 400);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    logger.warn('[Chat] ANTHROPIC_API_KEY no configurada');
    return NextResponse.json({
      reply: 'El asistente todavía no está activado. Escríbenos directamente desde la página de contacto y te respondemos a mano.',
    });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: cleanMessages,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => '');
      logger.error('[Chat] Error de Anthropic API:', { status: response.status, errorBody });
      return createErrorResponse('No se pudo generar una respuesta. Intenta de nuevo en un momento.', 502);
    }

    const data = await response.json();
    const reply = data.content?.find((block: any) => block.type === 'text')?.text;

    if (!reply) {
      return createErrorResponse('Respuesta vacía del asistente', 502);
    }

    return NextResponse.json({ reply });
  } catch (error) {
    logger.error('[Chat] Excepción llamando a Anthropic:', error);
    return createErrorResponse('Error de conexión con el asistente', 500);
  }
}
