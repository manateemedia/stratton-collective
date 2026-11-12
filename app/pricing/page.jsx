import { Hero, Pricing, Faq, CtaBand, Breadcrumbs } from "@/components/ui";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Mobile Notary Prices Gainesville | From $75, Same Day $200",
  description: "Clear mobile notary pricing in Gainesville: from $75 scheduled, $125 next day, $200 same day, $275 within the hour. Witnesses $30. Free printing up to 20 pages.",
  alternates: { canonical: "/pricing" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Pricing", path: "/pricing" }]} />
      <Hero kicker="Pricing" title="Simple, upfront notary pricing" lead="You pay for how soon you need us. No surprise fees, and the price shows before you confirm." image={IMG.inkStamps} />
      <Pricing title="Mobile notary fees" />
      <Faq items={[
        ["Why does a mobile notary cost more than a bank?", "Florida caps the notary fee at $10 per notarial act. Mobile service covers driving to you, your schedule, printing, witnesses and evening or weekend availability."],
        ["How much is online notarization?", "$25 for a 30 minute online session by video. It is the most affordable option when you do not need us in person."],
        ["Do you charge per signature?", "The appointment covers the visit. Very large packages or many signers may cost more, and we will tell you before you book."],
        ["What payment do you take?", "Card at booking. Ask us about invoicing for title companies and businesses."],
      ]} />
      <CtaBand />
    </>
  );
}
