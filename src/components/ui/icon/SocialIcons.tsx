'use client'

type Props = {
  /** nome file nella cartella /public/images/social (senza .svg) */
  name: 'whatsapp' | 'tiktok' | 'facebook' | 'gmail' | 'instagram' | 'linkedin'
  /** dimensione in px (default 48) */
  size?: number
  className?: string
}

/**
 * Icona monocromatica colorabile via CSS (currentColor) usando mask-image.
 * Assicurati che il file esista in /public/images/social/<name>.svg
 */
export default function SocialIcon({ name, size = 48, className }: Props) {
  const src = `/images/social/${name}.svg` // <-- percorso CORRETTO da /public
  return (
    <span
      aria-hidden
      className={['inline-block align-middle', className ?? ''].join(' ')}
      style={{
        width: size,
        height: size,
        backgroundColor: 'currentColor',       // colore = currentColor
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}
