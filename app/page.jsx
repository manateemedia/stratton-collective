import Link from "next/link";
import { Hero, Split, DocTiles, Reviews, Pricing, Steps, Faq, CtaBand, AreaLinks, BookButtons } from "@/components/ui";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata = {
  title: { absolute: "Mobile Notary Gainesville FL | Same Day, 7 Days | Stratton Collective" },
  description:
    "Gainesville's 5-star mobile notary, with 104 Google reviews. We come to your home, office or hospital room the same day, or notarize online by video. Call (352) 443-6272.",
  alternates: { canonical: "/" },
};

const faqs = [
  ["How fast can a mobile notary get to me in Gainesville?", "Most days we can be there the same day, often within a few hours. For emergencies within 20 miles of Gainesville we offer service within the hour. Call or text to confirm."],
  ["How much does a mobile notary cost in Gainesville?", "Scheduled visits start at $75. Next day starts at $125, same day is $200 flat and emergency service within the hour is $275 flat within 20 miles. Witnesses are $30 each in person."],
  ["What do I need to bring?", "A current government photo ID such as a driver license or passport, and your documents unsigned. Do not sign before we arrive. If your document needs witnesses, we can bring them."],
  ["Can you come to the hospital?", "Yes. We visit patients at UF Health Shands, North Florida Regional, the Malcom Randall VA and senior living communities. The signer must be alert and able to understand what they are signing."],
  ["Can I get notarized online instead?", "Yes. Florida allows remote online notarization by live video. You need a phone or computer with a camera, a valid ID and your document as a PDF."],
  ["Is there a notary open on weekends in Gainesville?", "Yes. We are open 7 days a week, 8am to 8pm, including weekends and most holidays."],
];

export default function Home() {
  return (
    <>
      <Hero
        kicker="Gainesville and all of Alachua County"
        title="The notary comes to you. Today."
        lead="Same day mobile notary at your home, office, hospital room or anywhere in Gainesville. Or sign online by video in minutes. Witnesses and printing included on request."
        image={IMG.stampOnDoc}
      >
        <ul className="hero-facts">
          <li>Open 7 days, 8am to 8pm</li>
          <li>Emergency visits within the hour</li>
          <li>Witnesses brought to you</li>
          <li>Florida commissioned and RON certified</li>
        </ul>
      </Hero>

      <DocTiles />

      <Split image={IMG.twoWomenSigning} title="Mobile notary: we drive to you" tone="tone-mist">
        <p>Homes, offices, coffee shops, hospitals, senior living and jails across Gainesville, Newberry, Alachua, High Springs and every corner of Alachua County. We bring the stamp, a printer and, when you need them, two witnesses.</p>
        <p>Scheduled visits start at $75, and same day service is available most days.</p>
        <div className="cta-row">
          <a className="btn btn-ink" href={SITE.bookMobile}>Book mobile notary</a>
          <Link className="btn btn-line" href="/mobile-notary">How mobile works</Link>
        </div>
      </Split>

      <Split image={IMG.videoCall} title="Online notary: sign from anywhere" flip>
        <p>Can't meet in person? Join a secure video call with a Florida online notary from your phone or laptop. Most sessions take under 15 minutes and your notarized PDF is ready right after.</p>
        <p>Perfect for out of state family members, busy professionals and travelers.</p>
        <div className="cta-row">
          <a className="btn btn-ink" href={SITE.bookOnline}>Book online notary</a>
          <Link className="btn btn-line" href="/online-notary">How online works</Link>
        </div>
      </Split>

      <Reviews />

      <Split image={IMG.hospitalRoom} title="Hospital and bedside notary" tone="tone-mist">
        <p>When someone you love is at UF Health Shands, North Florida Regional or the VA, we come to the bedside, often within the hour. Powers of attorney, healthcare surrogates, living wills and HIPAA forms, handled calmly and kindly.</p>
        <div className="cta-row">
          <Link className="btn btn-ink" href="/uf-shands-hospital-notary">UF Shands notary</Link>
          <Link className="btn btn-line" href="/hospital-notary-gainesville">Other hospitals and care homes</Link>
        </div>
      </Split>

      <section className="band">
        <div className="wrap">
          <h2>How it works</h2>
          <Steps
            items={[
              ["Book a time", "Pick a time online or call or text. We confirm within the hour."],
              ["Have your ID ready", "Bring a current photo ID and your unsigned documents. Email them and we print."],
              ["Sign and you're done", "We check ID, witness your signature, stamp and record it. Usually 15 minutes."],
            ]}
          />
        </div>
      </section>

      <Pricing tone="tone-mist" />

      <Split image={IMG.houseKeys} title="Real estate closings and loan signings">
        <p>Certified loan signing agent for Gainesville title companies, lenders, buyers and sellers. Purchases, refinances, HELOCs and deeds, with dual tray printing and fast scan backs.</p>
        <Link className="btn btn-line" href="/real-estate">Loan signing details</Link>
      </Split>

      <Split image={IMG.centuryTower} title="For UF faculty, staff and students" flip tone="tone-mist">
        <p>New to Gainesville? We notarize the Florida loyalty oath, domestic partnership affidavits, retirement forms and documents for international students and scholars, online or in person.</p>
        <Link className="btn btn-line" href="/uf-employees">UF forms we notarize</Link>
      </Split>

      <AreaLinks />
      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
