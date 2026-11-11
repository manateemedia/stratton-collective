import { Hero, Pricing, Reviews, Faq, CtaBand, Breadcrumbs } from "@/components/ui";

export const metadata = {
  title: "UF Shands Hospital Notary | Bedside Notary Same Day",
  description: "Bedside notary at UF Health Shands Hospital, 1600 SW Archer Rd, Gainesville. Same day, often within an hour. Powers of attorney, advance directives, HIPAA forms.",
  alternates: { canonical: "/uf-shands-hospital-notary" },
};

const faqs = [
  ["Can you come to a patient room?", "Yes. We meet patients in their room, a waiting area or any space the hospital allows at UF Health Shands and nearby UF Health locations."],
  ["What if the patient cannot sign?", "Florida allows another person to sign at the patient's direction in some cases. The patient must be alert and able to understand and communicate. Call us and we will talk through it."],
  ["Do you bring witnesses?", "Yes. Powers of attorney and many healthcare documents need two witnesses. We can bring them for $30 each."],
  ["Is there parking or visitor rules I should know?", "We handle parking and check in. If the unit has visitor limits, let us know the room number and any rules when you book."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "UF Shands Hospital Notary", path: "/uf-shands-hospital-notary" }]} />
      <Hero eyebrow="Hospital notary" title="Notary at UF Health Shands Hospital" sub="Same day bedside notarizations, often within the hour, at 1600 SW Archer Rd. We know the hospital and work calmly and kindly with patients and families." />
      <section className="section">
        <div className="wrap grid3">
          <div className="card"><h3>For patients and families</h3><p>Powers of attorney, healthcare surrogate forms, living wills and advance directives.</p></div>
          <div className="card"><h3>For caregivers</h3><p>HIPAA authorizations, guardianship and caregiver forms, affidavits and estate documents.</p></div>
          <div className="card"><h3>Also online</h3><p>Family members out of town can join or sign by video with remote online notarization.</p></div>
        </div>
      </section>
      <Pricing title="Hospital notary pricing" />
      <Reviews />
      <Faq items={faqs} />
      <CtaBand title="Need a notary at the hospital now?" sub="Call or text for the fastest response. We will tell you exactly when we can be there." />
    </>
  );
}
