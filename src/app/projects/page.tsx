
import Link from 'next/link'
const demo = [
  { slug: 'cliente-a', title: 'Cliente A', kpi: 'Lancio in 4 settimane' },
  { slug: 'cliente-b', title: 'Cliente B', kpi: '+35% conversioni' },
]
export default function ProgettiPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold">Progetti</h1>
      <ul className="mt-6 grid md:grid-cols-2 gap-6">
        {demo.map((p) => (
          <li key={p.slug} className="border rounded-lg p-4">
            <h2 className="text-xl font-medium">{p.title}</h2>
            <p className="text-sm opacity-70">{p.kpi}</p>
            <Link className="inline-block mt-3 underline" href={`/progetti/${p.slug}`}>
              Vedi case study
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
