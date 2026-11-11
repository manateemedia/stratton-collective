import { Breadcrumbs } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact a Gainesville Notary | Call or Text (352) 443-6272",
  description: "Call or text (352) 443-6272 or email us. Open 7 days, 8am to 8pm. Book a mobile or online notary in Gainesville, FL.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <section className="hero">
        <div className="wrap hero-in">
          <div className="eyebrow">Contact</div>
          <h1>Talk to a notary today</h1>
          <p className="lead">The fastest way to reach us is a call or text. We reply to emails within 24 hours.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid3">
          <div className="card">
            <h3>Call or text</h3>
            <p><a href={SITE.phoneHref}>{SITE.phone}</a></p>
            <div className="cta-row">
              <a className="btn btn-gold" href={SITE.phoneHref}>Call</a>
              <a className="btn btn-light" href={SITE.smsHref}>Text</a>
            </div>
          </div>
          <div className="card">
            <h3>Email</h3>
            <p><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p className="small muted">Tell us the document, the number of signers and where you are.</p>
          </div>
          <div className="card">
            <h3>Book online</h3>
            <p>{SITE.hoursText}. Based in Gainesville, FL, serving Alachua County in person and anywhere online.</p>
            <div className="cta-row">
              <a className="btn btn-gold" href={SITE.bookMobile}>Mobile</a>
              <a className="btn btn-light" href={SITE.bookOnline}>Online</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
