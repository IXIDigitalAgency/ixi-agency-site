'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/projects', label: 'PROGETTI' },
  { href: '/services', label: 'SERVIZI' },
  { href: '/aboutus', label: 'CHI SIAMO' },
  { href: '/contacts', label: 'CONTATTI' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // (opzionale) evita lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white text-black shadow-[inset_0_-1px_0_rgba(0,0,0,0.08)]">
      <Container>
        <div className="flex h-[120px] items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="IXI" className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt="IXI"
              width={110}
              height={110}
              priority
            />
          </Link>

          {/* Menu desktop SOLO da lg+ */}
          <nav className="hidden lg:flex items-center gap-14" aria-label="Navigazione principale">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md text-2xl font-extrabold text-black transition-transform transition-colors duration-200 ease-out hover:scale-110 hover:text-[var(--brand-accent-2)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger visibile fino a lg-1 (quindi anche su tablet) */}
          <button
            type="button"
            className="lg:hidden p-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>

        {/* Menu mobile/tablet (fino a lg-1) */}
        <div className={`lg:hidden ${open ? 'block' : 'hidden'}`}>
          <nav id="mobile-nav" className="border-top border-black/10 bg-white" aria-label="Navigazione mobile">
            <ul className="flex flex-col gap-4 py-5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    onTouchStart={() => {}} /* abilita :active su iOS */
                    className="touchable block px-5 py-4 rounded-md text-xl font-extrabold text-black transition-transform transition-colors duration-200 ease-out hover:scale-110 hover:text-[var(--brand-accent-2)] active:bg-[var(--brand-accent-2)] active:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
