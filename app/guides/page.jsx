import Link from "next/link";
import { Hero, CtaBand, Breadcrumbs, Photo, JsonLd } from "@/components/ui";
import { GUIDES } from "@/lib/guides";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Florida Notary Guides | Plain-English Answers from a Gainesville Notary",
  description: "Free guides on Florida notary rules: ID requirements, apostilles, powers of attorney, wills, deeds, online notarization, jail visits and more, from a Gainesville mobile notary.",
  alternates: { canonical: "/guides" },
};

export default function Page() {
  const cats = [...new Set(GUIDES.map((g) => g.category))];
  return (
    <>
      <Breadcrumbs items={[{ name: "Guides", path: "/guides" }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Florida notary guides", url: `${SITE.url}/guides`, hasPart: GUIDES.map((g) => ({ "@type": "Article", headline: g.title, url: `${SITE.url}/guides/${g.slug}` })) }} />
      <Hero kicker="Guides" title="Florida notary questions, answered" lead="Plain-English guides from a Gainesville mobile notary. Know exactly what Florida requires before your appointment." image={IMG.fountainPen} />
      {cats.map((c) => (
        <section className="band guide-cat" key={c}>
          <div className="wrap">
            <h2>{c}</h2>
            <div className="guide-grid">
              {GUIDES.filter((g) => g.category === c).map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="guide-card">
                  <Photo image={g.image} ratio={0.56} sizes="(max-width: 700px) 100vw, 33vw" />
                  <h3>{g.title}</h3>
                  <p className="small muted">{g.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
