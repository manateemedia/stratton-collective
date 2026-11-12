import { Hero, PlaceTiles, CtaBand, Breadcrumbs, FacilityList } from "@/components/ui";
import { HOSPITALS, JAILS } from "@/lib/places";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Places We Go | Hospital, Jail and Nursing Home Notary Gainesville",
  description: "Mobile notary at Gainesville hospitals, jails, prisons, nursing homes, assisted living and hospice. We handle check-in, witnesses and facility rules.",
  alternates: { canonical: "/places" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Places we go", path: "/places" }]} />
      <Hero kicker="Places we go" title="Hospitals, jails and care homes" lead="Some of the most important signings happen where people cannot leave. We know the rules at each facility and come prepared." image={IMG.hospitalLobby} />
      <PlaceTiles title="Choose a type of place" lead="Each page explains how a notary visit works there." />
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
