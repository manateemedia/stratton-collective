import { Hero, Pricing, Documents, Reviews, Steps, Faq, CtaBand, AreaLinks, Breadcrumbs } from "@/components/ui";

export const metadata = {
  title: "Mobile Notary Gainesville FL | We Come to You Today",
  description: "Mobile notary in Gainesville and Alachua County. Same day and emergency within the hour. Homes, offices, hospitals. From $75. Book online or call (352) 443-6272.",
  alternates: { canonical: "/mobile-notary" },
};

const faqs = [
  ["Where will you meet me?", "Anywhere that works for you: your home, office, a coffee shop, a hospital room, an assisted living facility or a jail. We serve all of Alachua County and travel farther by appointment."],
  ["Do you bring witnesses?", "Yes. Many Florida documents, like powers of attorney and wills, need two witnesses. We can bring them for $30 each."],
  ["Can you print my documents?", "Yes. Email them before the appointment and we print up to 20 pages free."],
  ["What ID is accepted?", "A current driver license, state ID, passport or military ID. Florida also allows some other forms. Ask us if you are not sure."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Mobile Notary", path: "/mobile-notary" }]} />
      <Hero
        eyebrow="Mobile notary"
        title="A Gainesville notary who comes to you"
        sub="Same day appointments most days, emergency service within the hour, and evenings and weekends. We bring the stamp, the printer and the witnesses."
      />
      <section className="section">
        <div className="wrap">
          <h2>How a mobile appointment works</h2>
          <Steps
            items={[
              ["Book online or call", "Choose a time and tell us what you are signing. We call to confirm within the hour."],
              ["We travel to you", "Your home, office, hospital or anywhere in Alachua County."],
              ["Sign with confidence", "We check ID, witness the signing, stamp and log it. You keep your originals."],
            ]}
          />
        </div>
      </section>
      <Pricing />
      <Documents />
      <Reviews />
      <AreaLinks />
      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
