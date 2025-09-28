
# IXI Agency Site – Starter

Template pulito per migrare il sito mantenendo **design invariato**, migliorando solo **codice e struttura**.

## Comandi
```bash
pnpm i
pnpm dev
pnpm build && pnpm start
pnpm lint && pnpm typecheck
```

## Struttura
- `src/app` – App Router (Home, Progetti + [slug], Servizi, Chi siamo, Contatti, Clients + [slug])
- `src/components` – Componenti riutilizzabili (senza styling opinato)
- `src/styles` – global.css + legacy.css (per incollare il CSS esistente)
- `src/lib` – SEO/JSON-LD helpers
- `public` – asset (loghi, immagini)

## Migrazione design
1. Copia asset in `public/` (immagini, svg, font con licenza valida).
2. Incolla il CSS esistente in `src/styles/legacy.css` (o moduli CSS).
3. Sostituisci nei componenti il markup con l'HTML del design attuale (pixel parity).
4. Non cambiamo UI, solo struttura/SEO/performance/sicurezza.
