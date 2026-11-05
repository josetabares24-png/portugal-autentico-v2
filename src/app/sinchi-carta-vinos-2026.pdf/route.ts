import { sinchiCartaVinosPdfBase64 } from '@/data/sinchi-carta-vinos-pdf';

export const runtime = 'nodejs';

export function GET() {
  const pdf = Buffer.from(sinchiCartaVinosPdfBase64, 'base64');
  if (pdf.length < 1000 || pdf.toString('ascii', 0, 5) !== '%PDF-') {
    return new Response('Carta PDF temporalmente no disponible', { status: 503 });
  }

  return new Response(new Uint8Array(pdf), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="sinchi-carta-vinos-2026.pdf"',
      'Content-Length': String(pdf.length),
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
