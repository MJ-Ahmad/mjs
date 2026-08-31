import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://MJ-Ahmad.github.io/mjs'),
  title: 'MJSovereign | Ethical Governance & Finance',
  description:
    'MJSovereign is a sovereign ethical governance and finance platform for transparent systems, governance infrastructure, and uplifting communities through responsible technology.',
  keywords: ['MJSovereign', 'ethics', 'governance', 'finance', 'AI', 'blockchain', 'social entrepreneurship'],
  openGraph: {
    title: 'MJSovereign',
    description: 'Ethical governance and finance for a just, sovereign future.',
    url: 'https://MJ-Ahmad.github.io/mjs',
    siteName: 'MJSovereign',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MJSovereign',
    description: 'Ethical governance and finance for a just, sovereign future.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
