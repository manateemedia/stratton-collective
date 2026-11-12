import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero, Split, Pricing, Reviews, Faq, CtaBand, Breadcrumbs, AreaLinks, JsonLd, Bring, DocTiles } from "@/components/ui";
import { TOWNS, townBySlug } from "@/lib/towns";
import { SERVICES, serviceBySlug } from "@/lib/services";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";

const TOWN_IMAGES = {
  "gainesville-florida": [IMG.centuryTower, IMG.twoWomenSigning],
  "newberry-florida": [IMG.springsOaks, IMG.houseModel],
  "high-springs-florida": [IMG.springsOaks, IMG.signingTable],
  "alachua-florida": [IMG.marshGazebo, IMG.businessDoc],
  "archer-florida": [IMG.paynesPrairie, IMG.houseKeys],
  "hawthorne-florida": [IMG.marshGazebo, IMG.seniorCouple],
  "micanopy-florida": [IMG.paynesPrairie, IMG.lastWill],
  "waldo-florida": [IMG.springsOaks, IMG.penOnPaper],
  "lake-city-florida": [IMG.hospitalLobby, IMG.manSigning],
  "jacksonville-florida": [IMG.courthouse, IMG.videoCall],
};

export const dynamicParams = false;
export function generateStaticParams() {
  return [...TOWNS.map((t) => ({ slug: t.slug })), ...SERVICES.map((s) => ({ slug: s.slug }))];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (s) return { title: { absolute: `${s.title} | Stratton Collective` }, description: s.description, alternates: { canonical: `/${s.slug}` } };
  const t = townBySlug(slug);
  if (t)
    return {
      title: `Mobile Notary ${t.name}, FL | Same Day Service`,
      description: `Mobile notary in ${t.name}, FL and ${t.county}. We come to your home, office or hospital, 7 days a week. Online notary too. 5.0 stars from ${SITE.reviewCount} Google reviews. Call ${SITE.phone}.`,
      alternates: { canonical: `/${t.slug}` },
    };
  return {};
}

export default async function Page({ params }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (s) return <ServicePage s={s} />;
  const t = townBySlug(slug);
  if (t) return <TownPage t={t} />;
  notFound();
}

function ServicePage({ s }) {
  const [first, ...rest] = s.sections;
  return (
    <>
      <Breadcrumbs items={[{ name: "Documents", path: "/services" }, { name: s.short, path: `/${s.slug}` }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", serviceType: s.short, name: s.h1, description: s.description, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "City", name: "Gainesville, FL" } }} />
      <Hero kicker={s.short} title={s.h1} lead={s.lead} image={s.hero} />
      <Split image={s.side} title={first[0]}>
        <p>{first[1]}</p>
        <Bring items={s.bring} />
      </Split>
      <section className="band tone-mist">
        <div className="wrap cards">
          {rest.map(([h, p]) => (
            <div className="card-plain" key={h}>
              <h3>{h}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>
      <Pricing />
      <Reviews count={3} />
      <Faq items={s.faqs} />
      <DocTiles title="Other documents we notarize" limit={8} />
      <CtaBand />
    </>
  );
}

function TownPage({ t }) {
  const [hero, side] = TOWN_IMAGES[t.slug] || [IMG.stampOnDoc, IMG.manSigning];
  const faqs = [
    [`Do you really come to ${t.name}?`, `Yes. We travel to homes, offices, hospitals and senior living in ${t.name} and across ${t.county}. Travel cost depends on distance and shows before you book.`],
    [`Can I get a same day notary in ${t.name}?`, "Most days, yes. Call or text for the fastest answer, or book online and we will confirm within the hour."],
    [`Is there a notary open on weekends near ${t.name}?`, "Yes. We work 7 days a week, 8am to 8pm."],
    ["Is there an online option?", "Yes. Florida online notarization by live video is available 7 days a week from anywhere."],
  ];
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Areas", path: "/service-areas" }, { name: `${t.name}, FL`, path: `/${t.slug}` }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", serviceType: "Mobile notary", name: `Mobile notary in ${t.name}, FL`, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "City", name: `${t.name}, FL` } }} />
      <Hero kicker={`${t.name}, ${t.county}`} title={`Mobile notary in ${t.name}, Florida`} lead={t.intro} image={hero} />
      <Split image={side} title={`How we help people in ${t.name}`}>
        {t.focus.map(([h, d]) => (
          <p key={h}><strong>{h}.</strong> {d}</p>
        ))}
        <p className="muted small">Places we often go in and around {t.name}: {t.places.join(", ")}.</p>
      </Split>
      <DocTiles title={`Documents we notarize in ${t.name}`} />
      <Pricing tone="tone-mist" />
      <Reviews count={3} />
      <Faq items={faqs} />
      <AreaLinks current={t.slug} />
      <CtaBand title={`Need a notary in ${t.name}?`} />
    </>
  );
}
