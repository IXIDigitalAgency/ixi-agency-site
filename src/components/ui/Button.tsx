'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<{
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaLabel?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}>

export default function Button({
  href,
  onClick,
  type = 'button',
  disabled = false,
  ariaLabel,
  variant = 'primary',
  className,
  children,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center uppercase font-extrabold tracking-wide rounded-none transition-transform transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent-2)] disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary:
      'border-2 border-[var(--brand-accent-1)] text-[var(--brand-accent-1)] hover:bg-[var(--brand-accent-1)] hover:text-black',
    secondary:
      'border-2 border-[var(--brand-accent-2)] text-[var(--brand-accent-2)] hover:bg-[var(--brand-accent-2)] hover:text-white',
    outline:
      'border-2 border-current text-current hover:bg-current hover:text-black',
  } as const

  const sizes =
    // mobile: piena larghezza
    'w-full min-h-[44px] py-3 px-4 text-base ' +
    // desktop: più lunga
    'md:w-auto md:min-h-[52px] md:py-4 md:px-12 md:text-lg ' +
    // comportamento
    'hover:scale-105 active:scale-95'

  const classes = clsx(base, variants[variant], sizes, className)

  const El = href ? Link : 'button'
  const props = href
    ? { href, 'aria-label': ariaLabel, className: classes }
    : { type, onClick, 'aria-label': ariaLabel, disabled, className: classes }

  // @ts-expect-error JSX intrinsic/Link union
  return <El {...props}>{children}</El>
}
