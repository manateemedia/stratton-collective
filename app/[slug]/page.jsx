import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero, Split, Pricing, Reviews, Faq, CtaBand, Breadcrumbs, AreaLinks, JsonLd, Bring, DocTiles, FacilityList, PlaceTiles } from "@/components/ui";
import { HOSPITALS, JAILS, EVERYDAY, placeBySlug, isHospital, everydayBySlug } from "@/lib/places";
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
  return [...TOWNS, ...SERVICES, ...HOSPITALS, ...JAILS, ...EVERYDAY].map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (s) return { title: { absolute: `${s.title} | Stratton Collective` }, description: s.description, alternates: { canonical: `/${s.slug}` } };
  const ev = everydayBySlug(slug);
  if (ev) return { title: { absolute: `${ev.title} | Stratton Collective` }, description: ev.description, alternates: { canonical: `/${ev.slug}` } };
  const pl = placeBySlug(slug);
  if (pl) {
    const hosp = isHospital(pl);
    return {
      title: { absolute: hosp ? `${pl.seoTitle} | Stratton Collective` : `${pl.short} Notary | $175 Inmate Notary Visits | Stratton Collective` },
      description: hosp ? `Need a notary at ${pl.name}? We come to the patient's bedside at ${pl.address}, often the same day. Powers of attorney, healthcare surrogates, wills. Witnesses provided. Call ${SITE.phone}.` : `${pl.intro} ${pl.address}. Call ${SITE.phone}.`.slice(0, 300),
      alternates: { canonical: `/${pl.slug}` },
    };
  }
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
  const ev = everydayBySlug(slug);
  if (ev) return <EverydayPage e={ev} />;
  const pl = placeBySlug(slug);
  if (pl) return <PlacePage p={pl} />;
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
      <Reviews count={3} />
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
      <Reviews count={3} />
      <Split image={side} title={`How we help people in ${t.name}`}>
        {t.focus.map(([h, d]) => (
          <p key={h}><strong>{h}.</strong> {d}</p>
        ))}
        <p className="muted small">Places we often go in and around {t.name}: {t.places.join(", ")}.</p>
      </Split>
      <DocTiles title={`Documents we notarize in ${t.name}`} />
      <Pricing tone="tone-mist" />
      <Faq items={faqs} />
      <AreaLinks current={t.slug} />
      <CtaBand title={`Need a notary in ${t.name}?`} />
    </>
  );
}

function PlacePage({ p }) {
  const hosp = isHospital(p);
  const hub = hosp ? { name: "Hospitals", path: "/hospital-notary-gainesville" } : { name: "Jails and prisons", path: "/jail-notary-gainesville" };
  const others = (hosp ? HOSPITALS : JAILS).filter((x) => x.slug !== p.slug);
  const faqs = hosp
    ? [
        [`Is there a notary inside ${p.name}?`, `Some hospitals have staff notaries, but their hours are limited and many are not allowed to notarize personal documents like powers of attorney or wills for patients. A mobile notary comes to the bedside at ${p.name} on your schedule, including evenings and weekends.`],
        [`How fast can a notary get to ${p.short}?`, p.city === "Gainesville" ? "Often within the hour for emergencies and the same day for most requests. Call or text for the quickest answer." : "Visits outside Gainesville are scheduled ahead. Call and we will tell you the soonest time."],
        ["Do you bring witnesses?", "Yes. Powers of attorney, wills and many healthcare documents need two witnesses. We bring them for $30 each."],
        ["What if the patient is not alert?", "We can only notarize when the signer understands what they are signing. We will come back when they are more alert."],
        ["What does the patient need?", "A government photo ID (ask the nurse if it is in hospital property) and the unsigned document. Email it to us and we print it."],
      ]
    : [
        [`How do I set up a notary visit at ${p.short}?`, "Call or text with the inmate's full name, booking or inmate number and the document. We confirm the facility's rules and the soonest time."],
        ["Can the inmate's ID be used?", "The facility decides how property IDs are handled. We plan identification with staff before the visit."],
        ["How much does it cost?", "$175 per visit. Witnesses, if your document needs them, are $30 each."],
        ["Who gets the signed document?", "Tell us who should receive the original. We can hand it to family, an attorney or mail it."],
      ];
  return (
    <>
      <Breadcrumbs items={[{ name: "Places we go", path: "/places" }, hub, { name: p.short, path: `/${p.slug}` }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", serviceType: hosp ? "Hospital notary" : "Jail notary", name: `Notary at ${p.name}`, provider: { "@id": `${SITE.url}/#business` }, areaServed: { "@type": "Place", name: p.name, address: p.address } }} />
      {hosp && <JsonLd data={{ "@context": "https://schema.org", "@type": "Hospital", name: p.name, address: p.address }} />}
      <Hero kicker={p.address} title={hosp ? `Notary at ${p.name}` : `Notary visits at ${p.name}`} lead={p.intro} image={p.image} />
      <Reviews count={3} />
      {hosp && (
        <section className="band">
          <div className="wrap narrow prose">
            <h2>Looking for a notary at {p.short}?</h2>
            <p>Families search for a {p.aliases?.[0]?.toLowerCase() || "hospital notary"} when a loved one is admitted and paperwork can't wait. Stratton Collective is a mobile notary based in Gainesville. We come to {p.name} at {p.address}, check in at the front desk, and meet the patient in their room, a family lounge or wherever the care team allows.</p>
            <p>Most visits to {p.short} happen the same day, and we often arrive within the hour for urgent signings. We bring two witnesses when the document needs them, print documents you email us, and can include family members who are out of town by video.</p>
            <h3>What families sign at {p.short}</h3>
            <ul>
              <li>Durable power of attorney so someone can handle bills, banking and property</li>
              <li>Designation of healthcare surrogate and living will</li>
              <li>HIPAA authorization so doctors can talk to family</li>
              <li>Will and self-proving affidavit</li>
              <li>Vehicle titles, deeds and other paperwork that can't wait for discharge</li>
            </ul>
            {p.aliases && <p className="muted small">Also searched as: {p.aliases.join(", ")}.</p>}
          </div>
        </section>
      )}
      <Split image={hosp ? IMG.holdingHands : IMG.manSigning} title={`How a notary visit works at ${p.short}`}>
        <ul>{p.notes.map((n) => <li key={n}>{n}</li>)}</ul>
        <Bring items={hosp ? ["Patient's government photo ID", "Unsigned documents, or email them and we print", "Room number, unit and any visitor rules", "Two witnesses if needed, or ask us to bring them"] : ["Inmate's full name and booking or inmate number", "The unsigned documents", "Who will receive the signed original"]} />
      </Split>
      {p.facilities && (
        <section className="band tone-mist">
          <div className="wrap">
            <h2>Prisons near Gainesville</h2>
            <FacilityList items={p.facilities} />
          </div>
        </section>
      )}
      {hosp ? <Pricing title="Hospital notary pricing" tone="tone-mist" /> : (
        <section className="band tone-mist">
          <div className="wrap narrow">
            <h2>Jail and prison notary pricing</h2>
            <p className="big-price">$175 <span>per visit</span></p>
            <p>Covers travel, facility check-in and wait time. Witnesses are $30 each if your document needs them.</p>
            <a className="btn btn-ink" href={SITE.phoneHref}>Call or text to schedule</a>
          </div>
        </section>
      )}
      <Faq items={faqs} />
      <section className="band">
        <div className="wrap">
          <h2>{hosp ? "Other hospitals we visit" : "Other jails and prisons"}</h2>
          <FacilityList items={others} />
          <p className="disclaimer">We are an independent mobile notary and are not affiliated with {p.name}.</p>
        </div>
      </section>
      <CtaBand title={hosp ? `Need a notary at ${p.short}?` : "Need a jail notary?"} />
    </>
  );
}

function EverydayPage({ e }) {
  const faqs = [
    ["How much does it cost?", "Scheduled visits start at $75, next day from $125, same day $200 flat and within the hour $275 flat within 20 miles of Gainesville. Witnesses are $30 each."],
    ["How soon can you meet me?", "Most days, the same day. Call or text for the fastest answer, or book online and we confirm within the hour."],
    ["What do I need to bring?", "A current government photo ID for every signer and your documents, unsigned."],
  ];
  return (
    <>
      <Breadcrumbs items={[{ name: "Places we go", path: "/places" }, { name: e.short, path: `/${e.slug}` }]} />
      <Hero kicker="Mobile notary" title={e.h1} lead={e.lead} image={e.image} />
      <Reviews count={3} />
      <Split image={e.side} title="Great for">
        <ul>{e.good.map((g) => <li key={g}>{g}</li>)}</ul>
        <Bring items={e.tips} />
      </Split>
      <Pricing tone="tone-mist" />
      <DocTiles title="What we can notarize there" limit={8} />
      <Faq items={faqs} />
      <PlaceTiles title="Other places we meet" />
      <CtaBand />
    </>
  );
}
