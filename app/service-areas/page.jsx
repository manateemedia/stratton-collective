import Link from "next/link";
import { Hero, CtaBand, Breadcrumbs, Photo } from "@/components/ui";
import { TOWNS } from "@/lib/towns";
import { IMG } from "@/lib/images";

const PICS = [IMG.centuryTower, IMG.springsOaks, IMG.marshGazebo, IMG.marshGazebo, IMG.paynesPrairie, IMG.marshGazebo, IMG.paynesPrairie, IMG.springsOaks, IMG.hospitalLobby, IMG.courthouse];

export const metadata = {
  title: "Mobile Notary Service Areas | Alachua County and North Florida",
  description: "Mobile notary across Gainesville, Newberry, Alachua, High Springs, Archer, Hawthorne, Micanopy, Waldo, Lake City and Jacksonville. Online notary anywhere.",
  alternates: { canonical: "/service-areas" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Areas", path: "/service-areas" }]} />
      <Hero kicker="Service areas" title="Where we come to you" lead="Mobile notary across Alachua County and North Central Florida, plus online notarization anywhere." image={IMG.paynesPrairie} />
      <section className="band">
        <div className="wrap cards">
          {TOWNS.map((t, i) => (
            <Link key={t.slug} href={`/${t.slug}`} className="area-card">
              <Photo image={PICS[i] || IMG.stampOnDoc} ratio={0.75} sizes="(max-width: 700px) 100vw, 33vw" />
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
