import { NextResponse } from 'next/server';
import { blogImageMap, tourImageMap, blogFallbackImage, tourFallbackImage } from '@/lib/media';

export async function GET() {
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
