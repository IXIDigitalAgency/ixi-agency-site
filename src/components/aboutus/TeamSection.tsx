'use client'

import Image from 'next/image'
import Container from '@/components/ui/Container'

type Member = {
  name: string
  role: string
  color: string
  desc: string
  img: string
}

const TEAM: Member[] = [
  {
    name: 'FEDERICA',
    role: 'SOCIAL MEDIA',
    color: 'var(--brand-accent-2)',
    desc: 'Creazione contenuti, brand identity, gestione e strategia social media.',
    img: '/images/team/federica.webp',
  },
  {
    name: 'CHIARA',
    role: 'PROJECT MANAGER',
    color: 'var(--brand-primary)',
    desc: 'Affiancamento clienti, consulenza e gestione progetto.',
    img: '/images/team/chiara.webp',
  },
  {
    name: 'GIULIA',
    role: 'SVILUPPATORE',
    color: 'var(--brand-accent-1)',
    desc: 'Sviluppo web, SEO e UX/UI Experience.',
    img: '/images/team/giulia.webp',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] pt-6 md:pt-8 pb-16 md:pb-20">
      <Container>
        {/* Titolo a destra */}
        <div className="mb-6 md:mb-8">
          <h2
            className="font-title font-extrabold uppercase leading-none text-right"
            style={{ fontSize: 'clamp(3.2rem,7vw,6.2rem)' }}
          >
            TEAM
          </h2>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="border-[3px] border-white/90 bg-transparent p-6 md:p-8"
            >
              {/* wrapper centrato: immagine + testo con lo stesso allineamento a sinistra */}
              <div className="mx-auto w-[210px] md:w-[230px]">
                <div className="relative w-full h-[210px] md:h-[230px]">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 210px, 230px"
                    priority={false}
                  />
                </div>

                {/* Testo allineato al bordo sinistro dell'immagine */}
                <div className="mt-4 text-left">
                  <h3
                    className="font-title font-extrabold uppercase leading-none"
                    style={{ color: m.color, fontSize: 'clamp(1.5rem,2.4vw,2.1rem)' }}
                  >
                    {m.name}
                  </h3>
                  <p
                    className="font-extrabold uppercase text-white mt-1"
                    style={{ fontSize: 'clamp(1.05rem,1.7vw,1.25rem)' }}
                  >
                    {m.role}
                  </p>
                  <p
                    className="mt-3 text-white/95 leading-relaxed"
                    style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)' }}
                  >
                    {m.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
