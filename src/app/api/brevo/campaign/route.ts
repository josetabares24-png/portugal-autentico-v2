import { NextRequest, NextResponse } from 'next/server';

type CampaignPayload = {
  name: string;
  subject: string;
  sender: { name: string; email: string };
  htmlContent: string;
  listIds: number[];
  scheduledAt?: string;
};

const BREVO_API_URL = 'https://api.brevo.com/v3';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'BREVO_API_KEY no configurada' },
        { status: 500 }
      );
    }

    const data = (await request.json()) as CampaignPayload;

    if (!data?.name || !data?.subject || !data?.sender?.email || !data?.sender?.name) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    if (!data?.htmlContent || !data?.listIds?.length) {
      return NextResponse.json(
        { success: false, error: 'Contenido HTML o listas inválidas' },
        { status: 400 }
      );
    }

    const response = await fetch(`${BREVO_API_URL}/emailCampaigns`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        name: data.name,
        subject: data.subject,
        sender: data.sender,
        type: 'classic',
        htmlContent: data.htmlContent,
        recipients: { listIds: data.listIds },
        ...(data.scheduledAt ? { scheduledAt: data.scheduledAt } : {}),
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: result?.message || 'Error al crear campaña' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Brevo campaign API error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
