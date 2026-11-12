import { Hero, DocTiles, PlaceTiles, CtaBand, Breadcrumbs, Faq } from "@/components/ui";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Documents We Notarize in Gainesville | Notary Services",
  description: "Powers of attorney, deeds, wills, healthcare directives, apostilles, VIN verifications, travel consent letters, loan signings and more. Mobile and online in Gainesville.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Documents", path: "/services" }]} />
      <Hero kicker="Notary services" title="Every document, done right the first time" lead="From a single affidavit to a full closing package, we know what Florida requires for each document and bring the witnesses when you need them." image={IMG.sealedSignatures} />
      <DocTiles title="Choose your document" />
      <PlaceTiles />
      <Faq items={[
        ["Do you notarize documents in other languages?", "Yes, as long as the notarial certificate is in English and we can communicate with the signer. We cannot translate the document."],
        ["Can you notarize a document without a notarial certificate?", "Yes. You choose an acknowledgment or a jurat and we attach a Florida certificate."],
        ["Can you help me fill out my form?", "No. Florida notaries who are not attorneys cannot give legal advice or choose forms. We focus on signing it correctly."],
      ]} />
      <CtaBand />
    </>
  );
}
