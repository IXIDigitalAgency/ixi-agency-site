// src/app/page.tsx
import Hero from '@/components/home/Hero'
import ExpandingRow from '@/components/home/ExpandingRow'
import ValuesSection from '@/components/home/ValuesSection'
import ServicesSection from '@/components/home/ServicesSection'
import FinalCta from '@/components/home/FinalCta'
import type { ProjectCardItem } from '@/components/cards/ProjectCard'

const projects: ProjectCardItem[] = [
  { href: '/progetto-1', title: 'Progetto 1', description: 'Descrizione del progetto 1', image: '/images/projects/progetto1.png' },
  { href: '/progetto-2', title: 'Progetto 2', description: 'Descrizione del progetto 2', image: '/images/projects/progetto2.png' },
  { href: '/progetto-3', title: 'Progetto 3', description: 'Descrizione del progetto 3', image: '/images/projects/progetto3.jpg' },
  { href: '/progetto-4', title: 'Progetto 4', description: 'Descrizione del progetto 4', image: '/images/projects/progetto4.jpg' },
  { href: '/progetto-5', title: 'Progetto 5', description: 'Descrizione del progetto 5', image: '/images/projects/progetto5.jpg' },
  { href: '/progetto-6', title: 'Progetto 6', description: 'Descrizione del progetto 6', image: '/images/projects/progetto6.jpg' },
  { href: '/progetto-7', title: 'Progetto 7', description: 'Descrizione del progetto 7', image: '/images/projects/progetto7.jpg' },
]

export default function Home() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      <Hero />

      {/* ---- Barra FULL-BLEED subito sotto la Hero ---- */}
      <section className="relative mt-6 sm:mt-8 md:mt-16 lg:mt-20">
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
          <ExpandingRow items={projects} />
        </div>
      </section>

      {/* ---- Sezione Valori ---- */}
      <ValuesSection />

      {/* ---- Sezione Servizi ---- */}
      <ServicesSection />

      {/* ---- Final CTA (riutilizzabile in tutto il sito) ---- */}
      <FinalCta />
    </main>
  )
}









