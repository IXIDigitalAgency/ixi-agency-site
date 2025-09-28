// src/app/aboutus/page.tsx
import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import TeamSection from '@/components/aboutus/TeamSection'
import VisionSection from '@/components/aboutus/VisionSection'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com'

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description:
    'IXI è incrocio, connessione e sinergia: strategia, contenuti e sviluppo su misura per progetti digitali chiari, distintivi e funzionali.',
  alternates: { canonical: `${SITE_URL}/aboutus` },
  openGraph: {
    title: 'Chi Siamo | IXI',
    description:
      'Un team unico: strategia, contenuti e sviluppo per risultati concreti.',
    type: 'website',
    url: `${SITE_URL}/aboutus`,
    siteName: 'IXI',
  },
}

export default function AboutUsPage() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* spazio per la navbar fissa */}
      <div className="h-[56px] sm:h-[64px] md:h-[72px]" />

      {/* INTRO */}
      <section className="pt-7 md:pt-9 pb-14 md:pb-20">
        <Container>
          <h1
            className="impact font-title font-black uppercase leading-[0.9] tracking-[-0.01em] mb-8 md:mb-10
                       text-[clamp(3.2rem,8vw,7.2rem)]"
          >
            CHI SIAMO
          </h1>

          <div className="space-y-7 md:space-y-9 text-[1.05rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.45rem] leading-[1.8] max-w-[90ch]">
            <p>Siamo un team, non una catena di montaggio.</p>

            <p>
              <span className="font-extrabold">
                IXI è incrocio, connessione, sinergia.
              </span>
              <br />
              Tre profili diversi, una direzione condivisa: trasformare idee in
              progetti digitali chiari, distintivi e funzionali.
            </p>

            <p>
              Uniamo strategia, contenuti e sviluppo in soluzioni su misura:
              flessibili, personalizzate, orientate ai risultati. Lavoriamo per
              dare forma alla tua visione e renderla{' '}
              <span className="font-extrabold">
                coerente, riconoscibile e competitiva.
              </span>
            </p>

            <p className="font-extrabold">Perché ogni progetto, parte da te.</p>
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <TeamSection />

      {/* Visione / Idee / Valore / Azione */}
      <VisionSection />
    </main>
  )
}
