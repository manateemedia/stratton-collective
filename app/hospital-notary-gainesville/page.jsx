import { Hero, Split, Pricing, Reviews, Faq, CtaBand, Breadcrumbs, FacilityList, PlaceTiles } from "@/components/ui";
import { HOSPITALS } from "@/lib/places";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Hospital Notary Gainesville FL | Bedside Notary at UF Health, HCA, VA",
  description: "Same day bedside notary at UF Health Shands, HCA Florida North Florida Hospital, Malcom Randall VA, UF Health Shands Rehab and Lake City hospitals. Witnesses provided.",
  alternates: { canonical: "/hospital-notary-gainesville" },
};

const faqs = [
  ["How fast can a notary come to the hospital?", "Often within the hour in Gainesville for emergencies, and the same day for most requests. Lake City hospitals are scheduled ahead."],
  ["What if the patient cannot sign their name?", "Florida allows another person to sign at the patient's direction and in their presence, if the patient is alert and can communicate. Call us and we will explain how it works."],
  ["Can you notarize if the patient is sedated or confused?", "No. A notary must be satisfied the signer understands what they are signing. If they are not alert, we will come back when they are."],
  ["Do you bring witnesses?", "Yes. Powers of attorney, wills and many healthcare documents need two witnesses. We bring them for $30 each."],
  ["What if the patient's ID is in hospital property or lost?", "Ask the nurse to retrieve it from property. If it is lost, Florida allows identification by credible witnesses in some cases. Tell us when you book."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Places we go", path: "/places" }, { name: "Hospitals", path: "/hospital-notary-gainesville" }]} />
      <Hero kicker="Hospital notary" title="Bedside notary at Gainesville hospitals" lead="When someone you love cannot leave their bed, we come to them. Same day, often within the hour, with witnesses when you need them." image={IMG.hospitalBed} />
      <section className="band">
        <div className="wrap">
          <h2>Hospitals we visit</h2>
          <p className="muted section-lead">Pick a hospital for parking and check-in tips and what families usually need signed there.</p>
          <FacilityList items={HOSPITALS} />
          <p className="disclaimer">We are an independent mobile notary and are not affiliated with these hospitals.</p>
        </div>
      </section>
      <Split image={IMG.holdingHands} title="Documents families sign in the hospital" tone="tone-mist">
        <ul>
          <li>Durable power of attorney</li>
          <li>Designation of healthcare surrogate and living will</li>
          <li>HIPAA authorization</li>
          <li>Will and self-proving affidavit</li>
          <li>Vehicle, property and bank paperwork</li>
          <li>Guardianship and caregiver forms</li>
        </ul>
      </Split>
      <Pricing title="Hospital notary pricing" />
      <Reviews count={3} />
      <Faq items={faqs} />
      <PlaceTiles title="Other places we go" />
      <CtaBand title="Need a notary at the hospital now?" sub="Call or text for the fastest answer. We will tell you exactly when we can be there." />
    </>
  );
}
