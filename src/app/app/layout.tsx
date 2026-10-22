import DocumentShell from '@/components/DocumentShell';
export { spanishSiteMetadata as metadata } from '@/lib/spanish-site-metadata';
export default function AppLayout({ children }: { children: React.ReactNode }) {
 return <DocumentShell>{children}</DocumentShell>;
}
