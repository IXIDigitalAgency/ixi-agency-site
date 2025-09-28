// src/components/home/ValuesSection.tsx
'use client'

import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const WORDS = [
  { text: 'FOCUS',    className: 'text-[var(--brand-fg)]' },
  { text: 'BRAND',    className: 'text-[var(--brand-accent-2)]' },
  { text: 'TRUST',    className: 'text-[var(--brand-fg)]' },
  { text: 'SOCIAL',   className: 'text-[var(--brand-primary)]' },
  { text: 'CODING',   className: 'text-[var(--brand-accent-1)]' },
  { text: 'STRATEGY', className: 'text-[var(--brand-fg)]' },
]

export default function ValuesSection() {
  const contentWidth = 'max-w-[720px] sm:max-w-[720px] md:max-w-[740px]'

  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] py-14 sm:py-16 md:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-x-16 lg:gap-x-24 xl:gap-x-32 gap-y-10">
          {/* SINISTRA */}
          <div className="md:col-span-6 flex">
            <ul className="flex flex-col justify-center h-full w-full">
              {WORDS.map(({ text, className }) => (
                <li
                  key={text}
                  className={[
                    'impact font-title font-black uppercase',
                    'leading-[0.74] tracking-[-0.015em]',
                    'text-[clamp(2.4rem,7.4vw,6.8rem)] sm:text-[clamp(2.8rem,7.2vw,7rem)]',
                    'mb-[0.012em] last:mb-0',
                    className,
                  ].join(' ')}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* DESTRA */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div
              className={`${contentWidth} space-y-3 sm:space-y-3.5 md:space-y-4 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[1.55]`}
            >
              <h2 className="font-semibold text-white text-[20px] sm:text-[22px] md:text-[23px] lg:text-[24px]">
                Il nostro lavoro va oltre le etichette.
              </h2>

              <p>
                Ogni progetto nasce da un’idea semplice:{' '}
                <span className="font-semibold">partire da te</span>.
              </p>
              <p>
                Creiamo strategie <span className="font-semibold">su misura</span>, pensate per
                rispettare <br />
                la tua visione e parlare al tuo pubblico.
              </p>
              <p>
                Unendo contenuti, sviluppo e <span className="font-semibold">strategia</span>,
                raccontiamo <br />
                il tuo valore in modo chiaro, diretto e incisivo.
              </p>
              <p className="font-semibold">Ascoltiamo. Progettiamo. Realizziamo.</p>
              <p>
                Le nostre strategie sono personalizzate, concrete e <br />
                orientate al successo.
              </p>
              <p>
                Contenuti efficaci.
                <br />
                Codice solido.
                <br />
                Scelte orientate ai risultati.
              </p>
              <p>
                Perché il successo si <span className="font-semibold">costruisce</span>, non si
                improvvisa.
              </p>
            </div>

            {/* CTA: abbassata e ancora più lunga */}
            <div className={`${contentWidth} w-full mt-6 sm:mt-7 md:mt-8`}>
              <Button
                href="/contatti"
                size="lg"
                ariaLabel="Raccontaci il tuo progetto"
                className="
                  block w-full rounded-none font-extrabold
                  border-2 border-[var(--brand-accent-1)]
                  text-[var(--brand-accent-1)]
                  px-8 sm:px-14 md:px-20 py-4 md:py-5
                  transition-transform duration-200 hover:scale-105
                  hover:bg-[var(--brand-accent-1)] hover:text-black
                "
              >
                RACCONTACI IL TUO PROGETTO
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
