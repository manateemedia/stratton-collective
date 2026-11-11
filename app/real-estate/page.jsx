import { Hero, Reviews, Faq, CtaBand, Breadcrumbs } from "@/components/ui";

export const metadata = {
  title: "Loan Signing Agent Gainesville FL | Real Estate Notary",
  description: "Certified loan signing agent and real estate notary in Gainesville and Alachua County. Purchases, refinances, HELOCs, deeds. Dual tray printing, fast scan backs.",
  alternates: { canonical: "/real-estate" },
};

const faqs = [
  ["Do you work with title companies and lenders?", "Yes. We handle purchase, refinance, HELOC and seller packages for title companies, lenders and signing services."],
  ["Can you print loan packages?", "Yes. We have a dual tray laser printer for legal and letter size documents and return scan backs fast."],
  ["Can you notarize a quit claim deed?", "Yes. We notarize deeds for buyers, sellers and families. Florida deeds also need two witnesses, which we can provide."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Real Estate", path: "/real-estate" }]} />
      <Hero eyebrow="Real estate and loan signings" title="Loan signing agent in Gainesville, FL" sub="Reliable signings for title companies, lenders, buyers and sellers across Alachua County. On time, careful and easy for your clients." />
      <section className="section">
        <div className="wrap grid3">
          <div className="card"><h3>Loan signings</h3><p>Purchases, refinances, HELOCs and reverse mortgages, with packages printed and scan backs returned fast.</p></div>
          <div className="card"><h3>Deeds</h3><p>Warranty deeds, quit claim deeds and other transfers, with two witnesses when Florida requires them.</p></div>
          <div className="card"><h3>Sellers and investors</h3><p>Seller packages, affidavits and remote signings for owners who live out of town.</p></div>
        </div>
      </section>
      <Reviews />
      <Faq items={faqs} />
      <CtaBand title="Schedule a signing" />
    </>
  );
}
