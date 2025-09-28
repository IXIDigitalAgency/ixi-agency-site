
interface Props { params: { slug: string } }
export default function ClientProfile({ params }: Props) {
  const { slug } = params
  const links = [
    { label: 'Sito ufficiale', href: 'https://example.com' },
    { label: 'Instagram', href: 'https://instagram.com/example' },
  ]
  return (
    <main className="max-w-md mx-auto p-6">
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto" />
        <h1 className="mt-4 text-2xl font-semibold">{slug}</h1>
      </div>
      <ul className="mt-6 grid gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <a className="block p-4 border rounded-lg text-center" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
