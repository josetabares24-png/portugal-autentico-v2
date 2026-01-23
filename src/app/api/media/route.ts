import { NextRequest, NextResponse } from 'next/server';
import { blogImageMap, tourImageMap, blogFallbackImage, tourFallbackImage } from '@/lib/media';
import { limitRequest, getRequestIdentifier } from '@/lib/ratelimit';
import { createErrorResponse } from '@/lib/api-utils';

export async function GET(request: NextRequest) {
  // Rate limiting
  const identifier = getRequestIdentifier(request);
  const rateLimitResult = await limitRequest(identifier);
  if (!rateLimitResult.success) {
    return createErrorResponse(
      'Demasiadas solicitudes. Por favor, espera un momento e intenta de nuevo.',
      429
    );
  }
  return NextResponse.json({
    blog: {
      fallback: blogFallbackImage,
      images: blogImageMap,
    },
    tours: {
      fallback: tourFallbackImage,
      images: tourImageMap,
    },
  });
}
