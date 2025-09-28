// src/components/about/VisionSection.tsx
'use client'

import Link from 'next/link'
import Container from '@/components/ui/Container'
import SocialIcon from '@/components/ui/icon/SocialIcons'

type Social = {
  href: string
  alt: string
  name: 'whatsapp' | 'tiktok' | 'facebook' | 'gmail' | 'instagram' | 'linkedin'
  external?: boolean
}

const SOCIAL_LINKS: Social[] = [
  { href: 'https://wa.me/0000000000',                 alt: 'WhatsApp',  name: 'whatsapp',  external: true },
  { href: 'https://www.tiktok.com/@your-handle',      alt: 'TikTok',    name: 'tiktok',    external: true },
  { href: 'https://facebook.com/your-page',           alt: 'Facebook',  name: 'facebook',  external: true },
  { href: 'mailto:hello@example.com',                 alt: 'Email',     name: 'gmail' },
  { href: 'https://instagram.com/your-handle',        alt: 'Instagram', name: 'instagram', external: true },
  { href: 'https://www.linkedin.com/in/your-handle/', alt: 'LinkedIn',  name: 'linkedin',  external: true },
]

export default function VisionSection() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] mt-12 sm:mt-16 md:mt-20 py-12 sm:py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-10 md:gap-16">
          {/* Testo + CTA */}
          <div className="flex flex-col">
            <h2
              className="impact font-title font-black uppercase leading-[0.92] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(3.2rem, 8.5vw, 7rem)' }}
            >
              <span className="block text-white">Visione</span>
              <span className="block text-[var(--brand-accent-2)]">Idee</span>
              <span className="block text-[var(--brand-primary)]">Valore</span>
              <span className="block text-[var(--brand-accent-1)]">Azione</span>
            </h2>

            {/* CTA: più lunga su desktop, standard su mobile (w-full) */}
            <div className="mt-8">
              <Link
                href="/contatti"
                aria-label="Vai alla pagina contatti"
                className="
                  inline-flex items-center justify-center
                  w-full sm:w-auto
                  border-2 border-[var(--brand-accent-1)]
                  px-10 sm:px-14 md:px-16
                  py-4 sm:py-5
                  text-xl md:text-2xl
                  font-extrabold tracking-wide
                  text-[var(--brand-accent-1)]
                  transition-transform duration-200 ease-out
                  hover:scale-[1.06] hover:bg-[var(--brand-accent-1)] hover:text-black
                  focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-accent-1)]/30
                "
              >
                CONOSCIAMOCI
              </Link>
            </div>
          </div>

          {/* Social (desktop) — colonna a destra */}
          <ul className="hidden md:flex flex-col justify-start gap-6">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.alt}>
                <a
                  href={s.href}
                  aria-label={s.alt}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="
                    text-[var(--brand-accent-1)]
                    block transition-transform duration-200 ease-out
                    hover:scale-[1.18] hover:text-[var(--brand-accent-2)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                  "
                >
                  <SocialIcon name={s.name} size={64} />{/* icone + grandi */}
                </a>
              </li>
            ))}
          </ul>

          {/* Social (mobile) — griglia sotto, centrate */}
          <ul className="md:hidden mt-10 grid grid-cols-3 gap-6 justify-items-center">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.alt}>
                <a
                  href={s.href}
                  aria-label={s.alt}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="
                    text-[var(--brand-accent-1)]
                    block transition-transform duration-200 ease-out
                    hover:scale-[1.15] hover:text-[var(--brand-accent-2)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                  "
                >
                  <SocialIcon name={s.name} size={56} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
