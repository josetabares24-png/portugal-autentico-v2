import { redirect } from 'next/navigation';

// Keep earlier preview links pointing to the single blog version.
export default function LisbonByBoatPreview() {
  redirect('/blog/paseo-en-velero-lisboa-lisbon-byboat');
}
