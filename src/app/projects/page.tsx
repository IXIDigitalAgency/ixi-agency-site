// src/app/progetti/page.tsx
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  kpi: string;
};

const demo: Project[] = [
  { slug: "cliente-a", title: "Cliente A", kpi: "Lancio in 4 settimane" },
  { slug: "cliente-b", title: "Cliente B", kpi: "+35% conversioni" },
];

export default function ProgettiPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight">Progetti</h1>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2">
        {demo.map((p) => (
          <li
            key={p.slug}
            className="border border-white/20 rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-base text-white/70">{p.kpi}</p>
            <Link
              className="inline-block mt-4 text-brand-accent-1 hover:text-brand-accent-2 underline transition"
              href={`/progetti/${p.slug}`}
            >
              Vedi case study →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
