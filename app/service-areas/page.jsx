import Link from "next/link";
import { Hero, CtaBand, Breadcrumbs } from "@/components/ui";
import { TOWNS } from "@/lib/towns";

export const metadata = {
  title: "Mobile Notary Service Areas | Alachua County and North Florida",
  description: "Mobile notary across Gainesville, Newberry, Alachua, High Springs, Archer, Hawthorne, Micanopy, Waldo, Lake City and Jacksonville. Online notary anywhere.",
  alternates: { canonical: "/service-areas" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Areas", path: "/service-areas" }]} />
      <Hero eyebrow="Service areas" title="Where we come to you" sub="Mobile notary across Alachua County and North Central Florida, plus online notarization anywhere." />
      <section className="section">
        <div className="wrap grid3">
          {TOWNS.map((t) => (
            <Link key={t.slug} href={`/${t.slug}`} className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <h3>{t.name}, FL</h3>
              <p className="small muted">{t.county}</p>
              <p className="small">{t.intro}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
