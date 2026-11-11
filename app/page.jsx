import Link from "next/link";
import { Hero, Reviews, Pricing, Documents, Steps, Faq, CtaBand, AreaLinks } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = {
  title: { absolute: "Mobile Notary Gainesville FL | Same Day | Stratton Collective" },
  alternates: { canonical: "/" },
};

const faqs = [
  ["How fast can you get to me?", "Most days we can be there the same day, often within a few hours. For emergencies within 20 miles of Gainesville we offer service within the hour. Call or text to confirm."],
  ["How much does a mobile notary cost in Gainesville?", "Scheduled visits start at $75. Next day starts at $125, same day is $200 flat and emergency service within the hour is $275 flat within 20 miles. Witnesses are $30 each in person."],
  ["What do I need to bring?", "A current government photo ID such as a driver license or passport, and your documents unsigned. Do not sign before we arrive. If your document needs witnesses, we can bring them."],
  ["Can you come to the hospital?", "Yes. We visit patients at UF Health Shands, North Florida Regional, the VA and senior living facilities. The signer must be alert and able to understand what they are signing."],
  ["Can I get notarized online instead?", "Yes. Florida allows remote online notarization by live video. You need a computer or phone with a camera, a valid ID and your document as a PDF."],
  ["Can you give legal advice or fill out my form?", "No. A notary verifies identity and witnesses signatures. We cannot give legal advice or choose a form for you. For that, talk to an attorney."],
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Gainesville and Alachua County"
        title="Same day mobile notary in Gainesville, FL"
        sub="We come to your home, office, hospital room or anywhere you are. Or sign online by video in minutes. Friendly, careful and on time."
      >
        <ul className="hero-points">
          <li>Open 7 days, 8am to 8pm</li>
          <li>Emergency service within the hour</li>
          <li>Witnesses and printing available</li>
          <li>Commissioned Florida notary and RON</li>
        </ul>
      </Hero>

      <section className="section">
        <div className="wrap grid2">
          <div className="card">
            <h2>Mobile notary</h2>
            <p>We drive to you anywhere in Gainesville and Alachua County. Homes, offices, hospitals, jails and senior living. We can print your documents and bring witnesses.</p>
            <div className="cta-row">
              <a className="btn btn-gold" href={SITE.bookMobile}>Book mobile</a>
              <Link className="btn btn-light" href="/mobile-notary">Pricing and details</Link>
            </div>
          </div>
          <div className="card">
            <h2>Online notary</h2>
            <p>Sign by live video from anywhere in the country, any day of the week. Most sessions take under 15 minutes and you get your notarized PDF right away.</p>
            <div className="cta-row">
              <a className="btn btn-gold" href={SITE.bookOnline}>Book online</a>
              <Link className="btn btn-light" href="/online-notary">How it works</Link>
            </div>
          </div>
        </div>
      </section>

      <Reviews />

      <section className="section">
        <div className="wrap">
          <h2>How it works</h2>
          <Steps
            items={[
              ["Book a time", "Pick a time online or call or text us. We confirm within the hour."],
              ["Get your documents ready", "Have your ID and unsigned documents. We can print them for you if you email them."],
              ["Sign and you are done", "We verify your ID, witness your signature, stamp and record it. Usually 15 minutes."],
            ]}
          />
        </div>
      </section>

      <Pricing />
      <Documents />
      <AreaLinks />
      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
