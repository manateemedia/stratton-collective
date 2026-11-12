import { Hero, Split, Pricing, DocTiles, PlaceTiles, Reviews, Steps, Faq, CtaBand, AreaLinks, Breadcrumbs } from "@/components/ui";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Mobile Notary Gainesville FL | We Come to You Today",
  description: "Mobile notary in Gainesville and Alachua County. Same day and emergency within the hour. Homes, offices, hospitals, jails. From $75. Book online or call (352) 443-6272.",
  alternates: { canonical: "/mobile-notary" },
};

const faqs = [
  ["Where will you meet me?", "Anywhere that works for you: your home, office, a coffee shop, a hospital room, an assisted living community or a jail. We serve all of Alachua County and travel farther by appointment."],
  ["Do you bring witnesses?", "Yes. Many Florida documents, like powers of attorney, wills and deeds, need two witnesses. We bring them for $30 each."],
  ["Can you print my documents?", "Yes. Email them before the appointment and we print up to 20 pages free."],
  ["What ID is accepted?", "A current driver license, state ID, passport or military ID. Florida accepts some other forms too. Ask us if you are not sure."],
  ["Do you charge for travel?", "Travel is built into the appointment price, which depends on how soon you need us and how far we drive. You see it before you book."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Mobile Notary", path: "/mobile-notary" }]} />
      <Hero kicker="Mobile notary" title="A Gainesville notary who comes to you" lead="Same day appointments most days, emergency service within the hour, evenings and weekends. We bring the stamp, the printer and the witnesses." image={IMG.manSigning} />
      <Reviews />
      <section className="band">
        <div className="wrap">
          <h2>How a mobile appointment works</h2>
          <Steps items={[
            ["Book online or call", "Choose a time and tell us what you are signing. We call to confirm within the hour."],
            ["We travel to you", "Your home, office, hospital or anywhere in Alachua County."],
            ["Sign with confidence", "We check ID, witness the signing, stamp and record it in our journal."],
          ]} />
        </div>
      </section>
      <Split image={IMG.brassSeal} title="Everything in one visit" tone="tone-mist">
        <ul>
          <li>Two witnesses when your document needs them</li>
          <li>Printing up to 20 pages free</li>
          <li>Scanning, emailing or mailing the finished documents</li>
          <li>Multiple signers and multiple documents in one appointment</li>
        </ul>
      </Split>
      <Pricing />
      <DocTiles />
      <PlaceTiles />
      <AreaLinks />
      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
