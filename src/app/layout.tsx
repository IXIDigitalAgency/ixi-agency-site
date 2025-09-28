import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '../components/layout/Header'   // ← fix percorso
import Footer from '../components/layout/Footer'

import { Raleway } from 'next/font/google'
import localFont from 'next/font/local'

// Google font
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

// Font locale (variabile)
const clashDisplay = localFont({
  src: '../fonts/ClashDisplay-Variable.ttf',
  variable: '--font-clash-display',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'IXI — Web & Social Agency',
    template: '%s | IXI',
  },
  description:
    'IXI: siti web professionali, SEO e social. Performance, sicurezza e risultati.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'IXI',
    title: 'IXI — Web & Social Agency',
    description:
      'Siti web professionali, performance, SEO e social per aziende e professionisti.',
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${raleway.variable} ${clashDisplay.variable}`}>
      <body className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] antialiased font-sans">
        <Header />

        {/* Header è fixed h-[120px] → aggiungo padding top */}
        <main className="flex-1 pt-[120px]">{children}</main>

        {/* StructuredData placeholder – da sostituire con componente reale */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'IXI',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
            }),
          }}
        />

        <Footer />
      </body>
    </html>
  )
}
