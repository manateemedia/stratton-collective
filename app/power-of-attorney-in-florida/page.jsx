import { Hero, Faq, CtaBand, Breadcrumbs, JsonLd } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Do I Need a Notary for a Power of Attorney in Florida?",
  description: "Florida powers of attorney must be signed in front of two witnesses and a notary. What to bring, remote options, and same day mobile notary in Gainesville.",
  alternates: { canonical: "/power-of-attorney-in-florida" },
};

const faqs = [
  ["Does a Florida power of attorney have to be notarized?", "Yes. Under Florida Statute 709.2105, a power of attorney must be signed by the principal, signed by two witnesses, and acknowledged before a notary."],
  ["Can the agent be a witness?", "No. The agent named in the power of attorney should not be a witness. The notary also cannot act as one of the two witnesses."],
  ["Can I do a power of attorney online?", "Florida allows remote online notarization, but powers of attorney with certain banking or real estate powers have extra rules for online signing. Ask us before you book online."],
  ["Can you write my power of attorney?", "No. A notary cannot draft legal documents or give legal advice. Have your attorney prepare it, then we handle the signing."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Power of Attorney in Florida", path: "/power-of-attorney-in-florida" }]} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: "Do I Need a Notary for a Power of Attorney in Florida?", author: { "@type": "Organization", name: SITE.name }, publisher: { "@type": "Organization", name: SITE.name } }} />
      <Hero eyebrow="Guide" title="Do I need a notary for a power of attorney in Florida?" sub="Yes. Here is what Florida requires, what to bring, and how we make it easy." />
      <section className="section">
        <div className="wrap prose">
          <h2>What is a power of attorney?</h2>
          <p>A power of attorney lets someone you trust, called your agent, act for you. That can cover money, property, healthcare or a single task. Common types in Florida are general, durable and limited powers of attorney. Healthcare decisions are usually handled with a separate healthcare surrogate designation.</p>
          <h2>What Florida requires</h2>
          <ul>
            <li>The principal signs. If they physically cannot, another person may sign at their direction and in their presence.</li>
            <li>Two witnesses sign. They should not be the agent, and the notary cannot be one of them.</li>
            <li>The signature is acknowledged before a notary public.</li>
          </ul>
          <p>Without proper witnesses and notarization, banks, hospitals and courts can refuse to accept the document.</p>
          <h2>What to bring</h2>
          <ul>
            <li>The unsigned power of attorney</li>
            <li>A current government photo ID</li>
            <li>Two adult witnesses, or ask us to bring them for $30 each</li>
          </ul>
          <h2>Signing at home, the hospital or online</h2>
          <p>We come to homes, hospitals and senior living facilities across Gainesville and Alachua County, often the same day. Remote online notarization is also an option in many cases, which helps family members who live out of state.</p>
          <div className="cta-row">
            <a className="btn btn-gold" href={SITE.bookMobile}>Book a mobile notary</a>
            <a className="btn btn-light" href={SITE.phoneHref}>Call {SITE.phone}</a>
          </div>
        </div>
      </section>
      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
