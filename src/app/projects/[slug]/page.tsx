
interface Props { params: { slug: string } }
export function generateStaticParams() {
  return [{ slug: 'cliente-a' }, { slug: 'cliente-b' }]
}
export default function ProgettoDettaglio({ params }: Props) {
  const { slug } = params
  return (
    <article className="max-w-3xl mx-auto p-6">
      <header className="py-10">
        <h1 className="text-3xl font-semibold">Case Study: {slug}</h1>
        <p className="opacity-80 mt-2">Sottotitolo/KPI dal design esistente.</p>
      </header>
      <section className="prose max-w-none">
        <h2>Contesto</h2><p>Testo copiato dal sito originale.</p>
        <h2>Sfida</h2><p>…</p>
        <h2>Soluzione</h2><p>…</p>
        <h2>Risultati</h2><p>…</p>
      </section>
    </article>
  )
}
