import { Hero, PlaceTiles, CtaBand, Breadcrumbs, FacilityList } from "@/components/ui";
import { HOSPITALS, JAILS } from "@/lib/places";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Where We Meet You | Home, Office, Hospital and Jail Notary Gainesville",
  description: "A mobile notary meets you at your home, office, a coffee shop or parking lot, or at Gainesville hospitals, jails, nursing homes and hospice. Witnesses available.",
  alternates: { canonical: "/places" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Places we go", path: "/places" }]} />
      <Hero kicker="Places we go" title="We meet you wherever you are" lead="Your home, your office, a coffee shop, a parking lot, a hospital bed or a jail visiting room. Tell us where, and one of our notaries will be there." image={IMG.hospitalLobby} />
      <PlaceTiles title="Choose a place" lead="Each page explains how a visit works there." />
      <section className="band">
        <div className="wrap">
          <h2>Hospitals</h2>
          <FacilityList items={HOSPITALS} />
          <h2 style={{ marginTop: 48 }}>Jails and prisons</h2>
          <FacilityList items={JAILS} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
