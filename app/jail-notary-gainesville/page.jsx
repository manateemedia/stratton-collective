import { Hero, Split, Faq, CtaBand, Breadcrumbs, FacilityList, PlaceTiles } from "@/components/ui";
import { JAILS } from "@/lib/places";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Jail Notary Gainesville | $175 Visits at Alachua County Jail and Prisons",
  description: "$175 notary visits at the Alachua County Jail, nearby Columbia, Bradford, Levy and Gilchrist county jails, and Florida state prisons near Gainesville. Call to schedule.",
  alternates: { canonical: "/jail-notary-gainesville" },
};

const faqs = [
  ["Can a notary visit someone in jail?", "Yes, through the facility's professional visit process. We confirm the inmate's name and booking number, check the jail's schedule and rules, then arrange the visit."],
  ["How does the inmate prove who they are?", "Their ID is usually in jail property. Each facility decides how it can be used. If no ID is available, Florida allows identification by credible witnesses in some cases."],
  ["What documents are signed in jail most often?", "Powers of attorney so family can manage money, cars or property, affidavits, vehicle title paperwork and consent forms for children."],
  ["Can you bring the document in?", "Usually yes, after the facility inspects it. Have the document ready and unsigned, and tell us who will receive the signed original."],
  ["How much does a jail notary visit cost?", "$175 per visit for jails and prisons. That covers travel, check-in and wait time at the facility. Witnesses, if your document needs them, are $30 each."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Places we go", path: "/places" }, { name: "Jails and prisons", path: "/jail-notary-gainesville" }]} />
      <Hero kicker="Jail notary" title="Notary visits at jails around Gainesville" lead="Need a document signed by someone in custody? $175 per visit. We know how professional visits work and handle the scheduling with the facility." image={IMG.courthouse} />
      <section className="band">
        <div className="wrap">
          <h2>Jails and prisons we help with</h2>
          <p className="muted section-lead">Pick a facility to see how a notary visit works there.</p>
          <FacilityList items={JAILS} />
          <p className="disclaimer">We are an independent mobile notary and are not affiliated with any sheriff's office or the Florida Department of Corrections. Facility rules change; we confirm them before every visit.</p>
        </div>
      </section>
      <Split image={IMG.paperStack} title="How a jail notary visit works" tone="tone-mist">
        <ol>
          <li>Call or text with the inmate's full name, booking number and the document.</li>
          <li>We confirm the facility's professional visit rules and the soonest time.</li>
          <li>We meet the inmate, verify identity, witness the signature and notarize.</li>
          <li>We return the signed original to you or mail it where it needs to go.</li>
        </ol>
      </Split>
      <Faq items={faqs} />
      <PlaceTiles title="Other places we go" />
      <CtaBand title="Need a jail notary?" sub="Call or text and we will tell you how soon we can get in." />
    </>
  );
}
