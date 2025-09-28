// src/components/home/Hero.tsx
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="IXI – Digital Agency"
      className="
        bg-[var(--brand-bg)] text-[var(--brand-fg)]
        pt-[calc(env(safe-area-inset-top,0)+8px)]
      "
    >
      <Container>
        <div className="mx-auto w-full max-w-7xl text-left py-8 sm:py-10 md:py-12 lg:py-14">
          <h1
            className="
              impact font-title font-black uppercase
              tracking-[-0.02em]
              leading-[0.92] md:leading-[0.9] lg:leading-[0.88]
              text-balance break-words
              text-[clamp(2.4rem,9.5vw,3.6rem)]
              sm:text-[clamp(3rem,7.8vw,5.6rem)]
              md:text-[clamp(4rem,6.8vw,7.2rem)]
              lg:text-[clamp(5.8rem,6vw,10rem)]
              xl:text-[clamp(6.8rem,5vw,12rem)]
            "
            style={{ wordSpacing: '0.06em' }}
          >
            <span className="sm:whitespace-nowrap">IXI Digital Agency</span>
            <br />
            Brand Identity
            <br />
            Sviluppo Web
            <br />
            Social Media
          </h1>

          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <Button
              href="/contatti"
              size="lg"
              ariaLabel="Scopri di più sui nostri servizi"
              className="font-black"
            >
              SCOPRI DI PIÙ
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
