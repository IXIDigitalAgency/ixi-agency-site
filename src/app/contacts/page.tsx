import type { Metadata } from "next";
import ContactHero from "@/components/contacts/ContactHero";

export const metadata: Metadata = {
  title: "Contatti | IXI",
  description:
    "Costruiamo insieme il tuo progetto: raccontaci la tua idea e ti risponderemo al volo.",
};

export default function ContactPage() {
  return (
    // niente padding extra: il ContactHero gestisce già lo spazio della navbar
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      <ContactHero />
    </main>
  );
}
