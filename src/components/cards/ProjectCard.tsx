// src/components/cards/ProjectCard.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

export type ProjectCardItem = {
  href?: string
  title: string
  description?: string
  image: string
}

type Props = {
  item: ProjectCardItem
  strip?: boolean
  priority?: boolean
  className?: string
}

export default function ProjectCard({ item, strip, priority, className }: Props) {
  const href = item.href ?? '#'

  return (
    <Link
      href={href}
      prefetch={false}
      className={`group/exp relative block h-full w-full overflow-hidden ${className ?? ''}`}
      aria-label={item.title}
    >
      {/* wrapper RELATIVE per l'immagine fill */}
      <div className="relative h-full w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 will-change-transform md:group-hover/exp:scale-[1.06]"
        />
      </div>

      {/* Overlay: sempre visibile su mobile; in hover su desktop */}
      <div
        className="
          absolute inset-0 flex items-center justify-center
          bg-black/60 text-center px-4
          opacity-100 md:opacity-0 md:group-hover/exp:opacity-100
          transition-opacity duration-300
        "
      >
        <div>
          <h3 className="font-title text-lg sm:text-xl font-black uppercase text-[var(--brand-accent-2)]">
            {item.title}
          </h3>
          {item.description && (
            <p className="mt-2 text-sm text-white opacity-90">{item.description}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
