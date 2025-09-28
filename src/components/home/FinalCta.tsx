// src/components/home/FinalCta.tsx
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
  { href: 'mailto:hello@example.com',                 alt: 'Email',     name: 'gmail' },
  { href: 'https://facebook.com/your-page',           alt: 'Facebook',  name: 'facebook',  external: true },
  { href: 'https://instagram.com/your-handle',        alt: 'Instagram', name: 'instagram', external: true },
  { href: 'https://www.linkedin.com/in/your-handle/', alt: 'LinkedIn',  name: 'linkedin',  external: true },
  { href: 'https://www.tiktok.com/@your-handle',      alt: 'TikTok',    name: 'tiktok',    external: true },
]

export default function FinalCta() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] mt-6 sm:mt-8 md:mt-12 py-12 sm:py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-10 md:gap-16">
          {/* Testo + CTA */}
          <div className="flex flex-col md:h-full md:justify-between text-left">
            <h2
              className="impact font-title font-black uppercase leading-[0.92] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(3.2rem, 8.5vw, 7rem)', wordSpacing: '0.05em' }}
            >
              <span className="block text-white">
                Hai un’<span className="text-[var(--brand-primary)]">idea</span>?
              </span>
              <span className="block text-white">
                Noi ti <span className="text-[var(--brand-accent-1)]">aiutiamo</span>
              </span>
              <span className="block text-white">
                a darle <span className="text-[var(--brand-accent-2)]">forma</span>
              </span>
            </h2>

            {/* CTA */}
            <div className="mt-8 sm:mt-9">
              <Link
                href="/contatti"
                aria-label="Vai alla pagina contatti"
                className="
                  flex items-center justify-center
                  w-full sm:w-auto sm:inline-flex md:max-w-[340px]
                  border-2 border-[var(--brand-accent-1)]
                  px-10 sm:px-12 md:px-12
                  py-4 sm:py-5
                  text-lg sm:text-xl md:text-2xl
                  font-extrabold tracking-wide
                  text-[var(--brand-accent-1)]
                  transition-all duration-200 ease-out
                  hover:bg-[var(--brand-accent-1)] hover:text-black
                  focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-accent-1)]/30
                "
              >
                CONTATTACI ORA
              </Link>
            </div>

            {/* Social mobile */}
            <ul className="md:hidden mt-8 grid grid-cols-3 gap-6 justify-items-center">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.alt} className="group">
                  <a
                    href={s.href}
                    aria-label={s.alt}
                    target={s.external ? '_blank' : undefined}
                    rel={s.external ? 'noopener noreferrer' : undefined}
                    className="block transition-transform duration-200 ease-out text-[var(--brand-accent-1)] hover:text-[var(--brand-accent-2)] hover:scale-[1.25] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  >
                    <SocialIcon name={s.name} size={56} />
                    <span className="sr-only">{s.alt}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social desktop */}
          <ul className="hidden md:flex flex-col justify-start gap-5">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.alt} className="group">
                <a
                  href={s.href}
                  aria-label={s.alt}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="block transition-transform duration-200 ease-out text-[var(--brand-accent-1)] hover:text-[var(--brand-accent-2)] hover:scale-[1.25] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                >
                  <SocialIcon name={s.name} size={56} />
                  <span className="sr-only">{s.alt}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
