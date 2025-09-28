// src/components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'

const year = new Date().getFullYear()

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/progetti', label: 'Progetti' },
  { href: '/servizi', label: 'Servizi' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/contatti', label: 'Contatti' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/cookie', label: 'Cookie' },
  { href: '/termini', label: 'Termini' },
]

export default function Footer() {
  return (
    <footer className="border-t bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* top */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* brand */}
          <div className="md:col-span-2">
            <Link href="/" aria-label="IXI">
              <Image
                src="/images/logo.webp"
                alt="IXI logo"
                width={140}
                height={40}
                className="h-auto w-auto"
              />
            </Link>
            <p className="mt-4 max-w-prose text-sm opacity-80">
              Siti web professionali, SEO e social. Performance, sicurezza e risultati.
            </p>
          </div>

          {/* site nav */}
          <nav aria-label="Footer – Navigazione">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide opacity-70">
              Navigazione
            </h3>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-md text-base transition-colors hover:text-[var(--brand-accent-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent-2)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* legal */}
          <nav aria-label="Footer – Legale">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide opacity-70">
              Legale
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-md text-base transition-colors hover:text-[var(--brand-accent-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent-2)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* bottom */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t pt-6 text-sm opacity-80 md:flex-row">
          <p>© {year} IXI — Tutti i diritti riservati</p>

          {/* social */}
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="https://www.instagram.com/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-md transition-colors hover:text-[var(--brand-accent-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent-2)]"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-md transition-colors hover:text-[var(--brand-accent-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent-2)]"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
