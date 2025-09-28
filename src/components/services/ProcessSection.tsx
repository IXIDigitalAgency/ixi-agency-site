'use client'

import Container from '@/components/ui/Container'

const STEPS = [
  {
    n: '01',
    title: 'Ascolto',
    text: 'Partiamo sempre dall’ascolto: capire esigenze, obiettivi e contesto del cliente è il primo passo per costruire soluzioni efficaci.',
  },
  {
    n: '02',
    title: 'Strategia',
    text: 'Definiamo una strategia chiara e personalizzata, con linee guida precise per garantire coerenza e riconoscibilità.',
  },
  {
    n: '03',
    title: 'Produzione',
    text: 'Realizziamo contenuti e strumenti digitali con cura dei dettagli, design e funzionalità, pronti a fare la differenza.',
  },
  {
    n: '04',
    title: 'Ottimizzazione',
    text: 'Misuriamo i risultati e ottimizziamo continuamente per mantenere performance e competitività nel tempo.',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] pt-12 md:pt-16 pb-16 md:pb-24">
      <Container>
        {/* Titolo grande */}
        <h2
          className="impact font-black uppercase text-right leading-[0.9] tracking-[-0.01em] mb-12 md:mb-16"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          PROCESSO
        </h2>

        {/* Griglia step */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="border border-white p-6 md:p-7 rounded-xl transition-transform duration-200 hover:scale-[1.03]"
            >
              <div className="impact text-[var(--brand-accent-1)] text-[2.6rem] md:text-[3rem] leading-none">
                {s.n}
              </div>
              <h3 className="font-title font-extrabold uppercase mt-3 text-[1.2rem] md:text-[1.3rem]">
                {s.title}
              </h3>
              <p className="mt-3 text-white/90 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
