'use client'

import Link from 'next/link'
import Container from '@/components/ui/Container'
import SocialIcon from '@/components/ui/icon/SocialIcons'

const SOCIAL_LINKS = [
  { href: 'https://wa.me/0000000000', alt: 'WhatsApp', name: 'whatsapp', external: true },
  { href: 'https://www.tiktok.com/@your-handle', alt: 'TikTok', name: 'tiktok', external: true },
  { href: 'https://facebook.com/your-page', alt: 'Facebook', name: 'facebook', external: true },
  { href: 'mailto:hello@example.com', alt: 'Email', name: 'gmail' },
  { href: 'https://instagram.com/your-handle', alt: 'Instagram', name: 'instagram', external: true },
  { href: 'https://www.linkedin.com/in/your-handle/', alt: 'LinkedIn', name: 'linkedin', external: true },
]

export default function FinalCtaServizi() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] mt-16 sm:mt-20 md:mt-24 py-14 sm:py-18 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-10 md:gap-16">
          
          {/* Testo + CTA */}
          <div className="flex flex-col md:h-full md:justify-between text-left">
            <h2
              className="impact font-title font-black uppercase leading-[0.9] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(3.1rem,8.4vw,7.1rem)' }}
            >
              <span className="block text-white">Non</span>
              <span className="block text-[var(--brand-accent-2)]">Pensarci</span>
              <span className="block text-[var(--brand-primary)]">Troppo</span>
              <span className="block text-[var(--brand-accent-1)]">Scrivici</span>
            </h2>

            {/* CTA */}
            <div className="mt-8 sm:mt-9">
              <Link
                href="/contatti"
                aria-label="Vai alla pagina contatti"
                className="
                  inline-flex items-center justify-center
                  border-2 border-[var(--brand-accent-1)]
                  px-10 sm:px-14 py-4 sm:py-5
                  text-xl md:text-2xl font-extrabold tracking-wide
                  text-[var(--brand-accent-1)]
                  transition-transform duration-200 ease-out
                  hover:scale-[1.06] hover:bg-[var(--brand-accent-1)] hover:text-black
                  focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-accent-1)]/30
                  w-full sm:w-auto
                "
              >
                CONTATTACI ORA
              </Link>
            </div>

            {/* Social su mobile → griglia 3x2 */}
            <ul className="md:hidden mt-10 grid grid-cols-3 gap-6 justify-items-center">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.alt} className="group">
                  <a
                    href={s.href}
                    aria-label={s.alt}
                    target={s.external ? '_blank' : undefined}
                    rel={s.external ? 'noopener noreferrer' : undefined}
                    className="block text-[var(--brand-accent-1)] transition-transform duration-200 ease-out hover:scale-110 hover:text-[var(--brand-accent-2)]"
                  >
                    <SocialIcon name={s.name} size={56} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social su desktop → colonna a destra */}
          <ul className="hidden md:flex flex-col justify-start gap-6">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.alt} className="group">
                <a
                  href={s.href}
                  aria-label={s.alt}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="block text-[var(--brand-accent-1)] transition-transform duration-200 ease-out hover:scale-110 hover:text-[var(--brand-accent-2)]"
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
