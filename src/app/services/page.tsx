// src/app/servizi/page.tsx
import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import ServicesDetailSection from '@/components/services/ServicesDetailSection'
import ProcessSection from '@/components/services/ProcessSection'
import FinalCtaServizi from '@/components/services/FinalCtaServizi'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com'

export const metadata: Metadata = {
  title: 'Servizi',
  description:
    'Ogni progetto nasce da un’esigenza: ascoltiamo, capiamo davvero e costruiamo soluzioni su misura orientate ai risultati.',
  alternates: { canonical: `${SITE_URL}/servizi` },
  openGraph: {
    title: 'Servizi | IXI',
    description:
      'Ascoltiamo, capiamo davvero e costruiamo soluzioni su misura per persone, bisogni e obiettivi.',
    type: 'website',
    url: `${SITE_URL}/servizi`,
    siteName: 'IXI',
  },
}

export default function ServiziPage() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* spazio per navbar fissa (più basso rispetto a prima) */}
      <div className="h-[48px] sm:h-[56px] md:h-[64px]" />

      {/* INTRO */}
      <section className="pt-6 md:pt-8 pb-14 md:pb-20" aria-labelledby="servizi-title">
        <Container>
          <h1
            id="servizi-title"
            className="
              impact font-title font-black uppercase
              leading-[0.9] tracking-[-0.01em]
              mb-8 md:mb-10
              text-[clamp(3.4rem,8.3vw,7.4rem)]
            "
          >
            SERVIZI
          </h1>

          <div className="space-y-7 text-[1.05rem] sm:text-[1.2rem] md:text-[1.35rem] lg:text-[1.45rem] leading-[1.75] max-w-[85ch]">
            <p className="font-extrabold">
              Ogni progetto nasce da un’esigenza.
            </p>

            <p>
              A volte è chiara, altre volte ha bisogno di tempo per emergere.
              <br /> Per questo, prima di proporre soluzioni,{' '}
              <span className="font-extrabold">ascoltiamo</span> con attenzione,
              facciamo domande e ci prendiamo <br />il tempo necessario per{' '}
              <span className="font-extrabold">capire davvero</span>.
            </p>

            <p>
              I nostri servizi non seguono schemi fissi: si adattano alle{' '}
              <span className="font-extrabold">persone</span>, ai loro{' '}
              <span className="font-extrabold">bisogni</span> e{' '}
              <span className="font-extrabold">obiettivi</span>. <br />Che si tratti
              di comunicazione, strategia o presenza online, costruiamo insieme
              qualcosa che funzioni <br /> — e che ti rappresenti.
            </p>

            <p>
              Qui sotto trovi come possiamo{' '}
              <span className="font-extrabold">affiancarti</span>, con strumenti
              chiari e un percorso costruito su misura per te.
            </p>
          </div>
        </Container>
      </section>

      {/* DETTAGLIO SERVIZI (layout con linea centrale e titoli colorati) */}
      <ServicesDetailSection />

      {/* PROCESSO A 4 STEP */}
      <ProcessSection />

      {/* CTA FINALE SPECIFICA PER SERVIZI */}
      <FinalCtaServizi />
    </main>
  )
}
