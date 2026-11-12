import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero, Faq, CtaBand, Breadcrumbs, JsonLd } from "@/components/ui";
import { GUIDES, guideBySlug, GUIDE_DATE } from "@/lib/guides";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { img } from "@/lib/images";

export const dynamicParams = false;
export function generateStaticParams() { return GUIDES.map((g) => ({ slug: g.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) return {};
  return {
    title: { absolute: `${g.title} | Stratton Collective` },
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { type: "article", title: g.title, description: g.description, images: [img(g.image, 1200, 630)] },
  };
}

const LABELS = Object.fromEntries([
  ...SERVICES.map((s) => [`/${s.slug}`, s.short]),
  ["/pricing", "Pricing"], ["/mobile-notary", "Mobile notary"], ["/online-notary", "Online notary"], ["/faq", "Notary FAQ"],
  ["/uf-employees", "UF employee forms"], ["/hospital-notary-gainesville", "Hospital notary"], ["/nursing-home-notary-gainesville", "Nursing home notary"],
  ["/jail-notary-gainesville", "Jail notary"], ["/alachua-county-jail-notary", "Alachua County Jail"], ["/florida-state-prison-notary", "State prisons"],
  ["/notary-in-parking-lot", "Curbside notary"], ["/what-is-a-notary-how-does-an-online-notary-work", "How notarization works"],
  ["/guides/acknowledgment-vs-jurat-florida", "Acknowledgment vs. jurat guide"],
]);

export default async function Page({ params }) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) notFound();
  const others = GUIDES.filter((x) => x.slug !== g.slug && (x.category === g.category)).concat(GUIDES.filter((x) => x.slug !== g.slug && x.category !== g.category)).slice(0, 4);
  return (
    <>
      <Breadcrumbs items={[{ name: "Guides", path: "/guides" }, { name: g.title, path: `/guides/${g.slug}` }]} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Article", headline: g.title, description: g.description,
        image: img(g.image, 1200, 630), datePublished: GUIDE_DATE, dateModified: GUIDE_DATE,
        author: { "@type": "Person", name: "Nicolette Stratton", jobTitle: "Florida Notary Public", url: `${SITE.url}/about` },
        publisher: { "@id": `${SITE.url}/#business` }, mainEntityOfPage: `${SITE.url}/guides/${g.slug}`,
      }} />
      <Hero kicker={g.category} title={g.title} lead={g.description} image={g.image} />
      <article className="band">
        <div className="wrap guide-layout">
          <div className="prose guide-body">
            <p className="byline">By Nicolette Stratton, Florida notary public · Updated November 2026</p>
            {g.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p?.map((p, i) => <p key={i}>{p}</p>)}
                {s.ul && <ul>{s.ul.map((li) => <li key={li}>{li}</li>)}</ul>}
              </section>
            ))}
            <p className="note">This guide is general information, not legal advice. A Florida notary who is not an attorney cannot give legal advice. Laws change, so confirm details with the agency receiving your document or a Florida attorney.</p>
          </div>
          <aside className="guide-aside">
            <div className="aside-box">
              <p className="aside-h">Need this notarized?</p>
              <p className="small">We come to you anywhere in Alachua County, or sign online.</p>
              <a className="btn btn-call" href={SITE.phoneHref}>Call or text {SITE.phone}</a>
              <a className="btn btn-line" href={SITE.bookMobile}>Book online</a>
            </div>
            <div className="aside-box">
              <p className="aside-h">Related</p>
              <ul className="aside-links">
                {g.related.map((r) => <li key={r}><Link href={r}>{LABELS[r] || r}</Link></li>)}
              </ul>
            </div>
          </aside>
        </div>
      </article>
      <Faq items={g.faqs} />
      <section className="band tone-mist">
        <div className="wrap">
          <h2>More guides</h2>
          <ul className="aside-links more-guides">
            {others.map((o) => <li key={o.slug}><Link href={`/guides/${o.slug}`}>{o.title}</Link></li>)}
          </ul>
          <Link href="/guides" className="need-all">All guides</Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
