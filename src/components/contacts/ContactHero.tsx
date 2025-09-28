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
  { href: 'https://wa.me/0000000000', alt: 'WhatsApp',  name: 'whatsapp',  external: true },
  { href: 'mailto:hello@example.com', alt: 'Email',     name: 'gmail' },
  { href: 'https://facebook.com/your-page', alt: 'Facebook', name: 'facebook', external: true },
  { href: 'https://instagram.com/your-handle', alt: 'Instagram', name: 'instagram', external: true },
  { href: 'https://www.linkedin.com/in/your-handle/', alt: 'LinkedIn', name: 'linkedin', external: true },
  { href: 'https://www.tiktok.com/@your-handle', alt: 'TikTok', name: 'tiktok', external: true },
]

export default function ContactHero() {
  return (
    <section
      className="
        bg-[var(--brand-bg)] text-[var(--brand-fg)]
        pt-[calc(var(--header-height,120px)+12px)]
        pb-10 sm:pb-12 md:pb-14
      "
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1.35fr_0.65fr] gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
          {/* COLONNA SINISTRA */}
          <div className="flex flex-col text-left">
            <h1
              className="
                impact font-title font-black uppercase
                leading-[0.9] tracking-[-0.01em]
                text-[clamp(2.6rem,10vw,3.2rem)]
                sm:text-[clamp(2.8rem,8vw,4.2rem)]
                md:text-[clamp(3.2rem,6.6vw,7.6rem)]
              "
              style={{ wordSpacing: '0.05em' }}
            >
              <span className="block text-[var(--brand-primary)]">COSTRUIAMO</span>
              <span className="block text-[var(--brand-accent-2)]">INSIEME</span>
              <span className="block text-white">IL TUO</span>
              <span className="block text-[var(--brand-accent-1)]">PROGETTO</span>
            </h1>

            {/* 3 bottoni in riga da md+ */}
            <div className="mt-7 sm:mt-8 mb-8 sm:mb-10">
              <div className="flex flex-col gap-3 md:flex-row md:flex-nowrap md:gap-4">
                <Link
                  href="#form"
                  aria-label="Vai al form contatti"
                  className="
                    inline-flex items-center justify-center
                    border-2 border-[var(--brand-accent-1)]
                    w-full md:flex-1
                    px-6 md:px-10
                    py-3 md:py-4
                    text-base md:text-lg
                    font-extrabold tracking-wide
                    text-[var(--brand-accent-1)]
                    transition-transform duration-200 ease-out
                    hover:scale-[1.05] hover:bg-[var(--brand-accent-1)] hover:text-black
                    focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-accent-1)]/30
                    whitespace-nowrap
                  "
                >
                  RACCONTACI LA TUA IDEA
                </Link>

                <a
                  href="tel:+391234567890"
                  className="
                    inline-flex items-center justify-center
                    border-2 border-[var(--brand-accent-1)]
                    w-full md:flex-1
                    px-6 md:px-10
                    py-3 md:py-4
                    text-base md:text-lg
                    font-extrabold tracking-wide
                    text-[var(--brand-accent-1)]
                    transition-transform duration-200 ease-out
                    hover:scale-[1.05] hover:bg-[var(--brand-accent-1)] hover:text-black
                    focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-accent-1)]/30
                    whitespace-nowrap
                  "
                >
                  +39 123 456 7890
                </a>

                <a
                  href="mailto:hello@example.com"
                  className="
                    inline-flex items-center justify-center no-underline
                    border-2 border-[var(--brand-accent-1)]
                    w-full md:flex-1
                    px-6 md:px-10
                    py-3 md:py-4
                    text-base md:text-lg
                    font-extrabold tracking-wide
                    text-[var(--brand-accent-1)]
                    transition-transform duration-200 ease-out
                    hover:scale-[1.05] hover:bg-[var(--brand-accent-1)] hover:text-black
                    focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-accent-1)]/30
                    whitespace-nowrap
                  "
                >
                  hello@example.com
                </a>
              </div>
            </div>
          </div>

          {/* COLONNA DESTRA — Social */}
          <div className="flex md:justify-end">
            <div className="w-[min(92vw,440px)] md:w-[380px]">
              <ul className="grid grid-cols-3 gap-x-5 gap-y-5 justify-items-center md:grid-cols-1 md:gap-5 md:justify-items-end">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.alt} className="group">
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
                      <SocialIcon name={s.name} size={56} />
                      <span className="sr-only">{s.alt}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
