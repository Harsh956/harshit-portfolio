import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harshit Saxena | Android Developer | Portfolio',
  description: 'Portfolio of Harshit Saxena, Android Developer with 6 years of experience specializing in Kotlin, Core Java, Android SDK, and Flutter with 14 production mobile applications.',
  keywords: [
    'Harshit Saxena',
    'Android Developer',
    'Kotlin',
    'Core Java',
    'Flutter Developer',
    'Android SDK',
    'Retrofit',
    'Firebase',
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
    title: 'Harshit Saxena | Android Developer',
    description: 'Explore 14 professional CV projects, verified Google Play Store apps, interactive mobile simulator, and technical skills.',
    siteName: 'Harshit Saxena Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshit Saxena | Android Developer',
    description: 'Explore 14 production mobile apps and interactive portfolio.'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Modern Typography Pairing: Plus Jakarta Sans for headlines/body + JetBrains Mono for code/numbers */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FAF8F5] text-slate-800 min-h-screen selection:bg-sky-500 selection:text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
