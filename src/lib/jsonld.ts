
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IXI',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    logo: '/logo.png',
  }
}
