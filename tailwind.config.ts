import type { Config } from 'tailwindcss'

const config = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-raleway)',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        title: [
          'var(--font-clash-display)',
          'var(--font-raleway)',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
