import { Abril_Fatface, Heebo, Caveat } from 'next/font/google';
import RootDocument from './RootDocument';
import '@/app/grok-redesign.css';
const grokDisplay = Abril_Fatface({ subsets: ["latin"], weight: "400", variable: "--grok-display", display: "swap" });
const grokBody = Heebo({ subsets: ["latin"], variable: "--grok-body", display: "swap" });
const grokScript = Caveat({ subsets: ["latin"], variable: "--grok-script", display: "swap" });


export default function DocumentShell({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument bodyClassName={`${grokDisplay.variable} ${grokBody.variable} ${grokScript.variable} brand-es`}>
      {children}
    </RootDocument>
  );
}
