import { notFound } from "next/navigation";
import { Hero, Pricing, Reviews, Faq, CtaBand, Breadcrumbs, AreaLinks, JsonLd } from "@/components/ui";
import { TOWNS, townBySlug } from "@/lib/towns";
import { SITE } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({ params }) {
  const { town } = await params;
  const t = townBySlug(town);
  if (!t) return {};
  return {
    title: `Mobile Notary ${t.name}, FL | Same Day Service`,
    description: `Mobile notary in ${t.name}, FL and ${t.county}. We come to your home, office or hospital. Online notary any day. 5.0 stars, ${SITE.reviewCount} Google reviews. Call ${SITE.phone}.`,
    alternates: { canonical: `/${t.slug}` },
  };
}

export default async function Page({ params }) {
  const { town } = await params;
  const t = townBySlug(town);
  if (!t) notFound();
  const faqs = [
    [`Do you really come to ${t.name}?`, `Yes. We travel to homes, offices, hospitals and senior living in ${t.name} and across ${t.county}. Travel cost depends on distance and is shown before you book.`],
    [`Can I get same day notary service in ${t.name}?`, "Most days, yes. Call or text for the fastest answer, or book online and we will confirm within the hour."],
    ["Is there an online option?", "Yes. Florida online notarization by live video is available 7 days a week from anywhere."],
  ];
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Areas", path: "/service-areas" }, { name: `${t.name}, FL`, path: `/${t.slug}` }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", serviceType: "Mobile notary", name: `Mobile notary in ${t.name}, FL`, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "City", name: `${t.name}, FL` } }} />
      <Hero eyebrow={`${t.name}, ${t.county}`} title={`Mobile notary in ${t.name}, FL`} sub={t.intro} />
      <section className="section">
        <div className="wrap">
          <h2>How we help in {t.name}</h2>
          <div className="grid3" style={{ marginTop: 20 }}>
            {t.focus.map(([h, d]) => (
              <div className="card" key={h}><h3>{h}</h3><p>{d}</p></div>
            ))}
          </div>
          <h3 style={{ marginTop: 32 }}>Places we often go in and around {t.name}</h3>
          <p className="muted">{t.places.join(", ")}.</p>
        </div>
      </section>
      <Pricing />
      <Reviews />
      <Faq items={faqs} />
      <AreaLinks />
      <CtaBand title={`Need a notary in ${t.name}?`} />
    </>
  );
}
