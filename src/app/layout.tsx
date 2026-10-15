import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harshit Saxena | Senior Android & Mobile Architect | Portfolio',
  description: 'Portfolio of Harshit Saxena. Senior Android Developer specializing in Kotlin, Modern Jetpack, Coroutines, and Flutter with 14+ published Google Play Store applications.',
  keywords: [
    'Harshit Saxena',
    'Android Developer',
    'Senior Android Developer',
    'Flutter Developer',
    'Kotlin',
    'Jetpack Compose',
    'Mobile Application Developer',
    'Portfolio',
    'Google Play Store Apps'
  ],
  authors: [{ name: 'Harshit Saxena' }],
  creator: 'Harshit Saxena',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://harshit-portfolio-3d-three.vercel.app',
    title: 'Harshit Saxena | Senior Android & Mobile Architect',
    description: 'Explore 14+ Google Play Store apps, interactive mobile simulators, tech skills, and mobile architecture.',
    siteName: 'Harshit Saxena Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshit Saxena | Senior Android Developer',
    description: 'Explore 14+ production Android apps and interactive mobile portfolio.'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Modern Typography Pairing: Plus Jakarta Sans for headlines/body + JetBrains Mono for code/numbers */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0b1120] text-slate-100 min-h-screen selection:bg-sky-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
