import { Hero, Steps, Faq, CtaBand, Breadcrumbs } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Florida Apostille Services Gainesville | Notary and Apostille Help",
  description: "Need a document accepted in another country? We notarize it and help you get a Florida apostille. Birth certificates, POAs, court papers and more. Gainesville, FL.",
  alternates: { canonical: "/apostille" },
};

const faqs = [
  ["What is an apostille?", "A certificate that lets a document from the United States be accepted in another country that is part of the Hague Apostille Convention. It confirms the signature and seal are real. It does not verify what the document says."],
  ["Who issues a Florida apostille?", "The Florida Department of State. We notarize your document correctly first, then help you prepare and submit the request."],
  ["What documents can get an apostille?", "Florida notarized documents like powers of attorney and affidavits, plus Florida vital records and court documents. Federal documents go through the U.S. Department of State instead."],
  ["My country is not in the Hague Convention. Now what?", "Those countries usually need authentication and sometimes embassy legalization. Contact us and we will tell you the steps."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Apostille", path: "/apostille" }]} />
      <Hero eyebrow="Apostille" title="Apostille help in Gainesville, FL" sub="Getting a document ready for another country? We notarize it the right way and help you get the Florida apostille, so it is not rejected abroad." />
      <section className="section">
        <div className="wrap">
          <h2>How it works</h2>
          <Steps
            items={[
              ["Tell us the country and document", "Call, text or email. We confirm what is needed before you pay anything."],
              ["We notarize", "In person or online, with the wording the Department of State requires."],
              ["Apostille request", "We help you prepare and send the request to the Florida Department of State."],
            ]}
          />
          <p className="note">A notary cannot give legal advice. If you are not sure which document you need, ask the agency or attorney requesting it. <a href={`mailto:${SITE.email}`}>Email us</a> or call {SITE.phone} with questions.</p>
        </div>
      </section>
      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
