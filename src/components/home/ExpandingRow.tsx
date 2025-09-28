// src/components/home/ExpandingRow.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import ProjectCard, { type ProjectCardItem } from '@/components/cards/ProjectCard'

type Props = {
  items: ProjectCardItem[]
  className?: string
  /** Altezza riga DESKTOP (invariata) */
  height?: { base?: string; sm?: string; md?: string; lg?: string }
  /** Quante “colonne” in desktop */
  desktopColumns?: 3 | 4 | 5 | 6
  /** Larghezza percentuale della card in hover su desktop */
  hoverPercent?: number
  /** Altezze standard su mobile per ogni item (colonna) */
  mobileItemHeight?: { base?: string; sm?: string }
}

export default function ExpandingRow({
  items,
  className,
  height = {
    base: 'md:h-[520px]',
    sm:   'md:h-[520px]',
    md:   'md:h-[520px]',
    lg:   'md:h-[560px]',
  },
  desktopColumns = 5,
  hoverPercent = 28,
  mobileItemHeight = {
    base: 'h-[300px] min-h-[260px]',
    sm:   'sm:h-[340px] sm:min-h-[300px]',
  },
}: Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  // Determina se siamo in desktop (>= md: 768px) e aggiorna al resize
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)')
    const update = () => setIsDesktop(mql.matches)
    update()
    mql.addEventListener?.('change', update)
    return () => mql.removeEventListener?.('change', update)
  }, [])

  // Mobile: assicurati di partire dall’alto (colonna)
  useEffect(() => {
    const el = rowRef.current
    if (!el) return
    if (!isDesktop) {
      el.scrollTop = 0
      el.scrollLeft = 0
    }
  }, [isDesktop])

  // DESKTOP (invariato): calcolo della base e degli “others” in hover
  const basePercent = 100 / desktopColumns
  const othersPercent = (100 - hoverPercent) / Math.max(1, desktopColumns - 1)

  return (
    <div className={`relative w-full ${className ?? ''}`}>
      <div
        ref={rowRef}
        className={[
          'w-full',
          // MOBILE: colonna con scroll verticale e snap
          // DESKTOP: riga orizzontale con hover espansivo (design invariato)
          'flex flex-col md:flex-row',
          'overflow-y-auto md:overflow-y-hidden',
          'overflow-x-hidden md:overflow-x-auto',
          'snap-y snap-mandatory md:snap-none',
          'scrollbar-hide',
          'gap-0',
          '[&>*]:shrink-0',
          // altezza visibile solo da md in su (la colonna mobile gestisce la propria altezza item)
          height.base, height.sm, height.md, height.lg,
        ].join(' ')}
        role="list"
        aria-label="Progetti"
      >
        {items.map((it, i) => {
          // Solo DESKTOP: calcolo della larghezza dinamica
          const basisDesktop =
            hoverIdx === null ? basePercent : (hoverIdx === i ? hoverPercent : othersPercent)

          return (
            <div
              key={`${it.href ?? '#'}-${it.title}`}
              role="listitem"
              className={[
                'relative snap-center transition-all duration-300 ease-out',
                // MOBILE: full width + altezza standard (immagine fill dentro ProjectCard)
                'w-full', mobileItemHeight.base, mobileItemHeight.sm,
                // DESKTOP: usa la riga con altezza del contenitore
                'md:h-full',
              ].join(' ')}
              onMouseEnter={isDesktop ? () => setHoverIdx(i) : undefined}
              onMouseLeave={isDesktop ? () => setHoverIdx(null) : undefined}
              style={{
                // Applica il flex-basis **solo** su desktop; su mobile 'auto'
                flexBasis: isDesktop ? `min(${basisDesktop}%, 100%)` : 'auto',
                willChange: isDesktop ? 'flex-basis' : undefined,
              }}
            >
              <ProjectCard item={it} strip priority={i === 0} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
