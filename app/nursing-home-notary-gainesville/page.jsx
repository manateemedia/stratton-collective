import { Hero, Split, Pricing, Reviews, Faq, CtaBand, Breadcrumbs, FacilityList, PlaceTiles } from "@/components/ui";
import { CARE_HOMES } from "@/lib/places";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Nursing Home and Assisted Living Notary Gainesville FL",
  description: "Mobile notary at Gainesville nursing homes, rehab centers, assisted living, memory care and hospice: Oak Hammock, Plaza, Park Meadows, Palm Garden, The Windsor and more.",
  alternates: { canonical: "/nursing-home-notary-gainesville" },
};

const faqs = [
  ["Can you notarize for a resident with dementia?", "Only if the resident understands what they are signing at the time we meet. If we have doubts we will not notarize, which protects the family from challenges later. Morning visits often work best."],
  ["Do you coordinate with facility staff?", "Yes. We check in at the front desk, follow visitor rules and work around meals, therapy and medication times."],
  ["Can family members sign from out of town?", "Yes. They can join by video with online notarization while we are with the resident in person, or sign separately."],
  ["Do you bring witnesses?", "Yes. Facility staff are often not allowed to witness, so we bring our own for $30 each."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Places we go", path: "/places" }, { name: "Nursing homes and assisted living", path: "/nursing-home-notary-gainesville" }]} />
      <Hero kicker="Nursing home notary" title="Notary at nursing homes and assisted living in Gainesville" lead="We come to the resident's room, patiently and on their schedule. Witnesses included on request." image={IMG.seniorCouple} />
      <section className="band">
        <div className="wrap">
          <h2>Care communities we visit</h2>
          <p className="muted section-lead">Don't see your facility? We go to every nursing home, rehab center, assisted living and adult family care home in Alachua County.</p>
          {Object.entries(CARE_HOMES).map(([group, items]) => (
            <div key={group} style={{ marginTop: 32 }}>
              <h3>{group}</h3>
              <FacilityList items={items} />
            </div>
          ))}
          <p className="disclaimer">We are an independent mobile notary and are not affiliated with these facilities.</p>
        </div>
      </section>
      <Split image={IMG.holdingHands} title="What residents and families sign" tone="tone-mist">
        <ul>
          <li>Powers of attorney and healthcare surrogates</li>
          <li>Living wills and advance directives</li>
          <li>Wills, trusts and self-proving affidavits</li>
          <li>Admission, Medicaid and financial forms that require a notary</li>
          <li>Vehicle titles and property deeds when a home is sold</li>
        </ul>
      </Split>
      <Pricing />
      <Reviews count={3} />
      <Faq items={faqs} />
      <PlaceTiles title="Other places we go" />
      <CtaBand />
    </>
  );
}
