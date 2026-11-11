import { Hero, Reviews, Steps, Faq, CtaBand, Breadcrumbs } from "@/components/ui";

export const metadata = {
  title: "Online Notary Florida | Notarize by Video in Minutes",
  description: "Florida remote online notarization by live video. Sign from anywhere in the US or abroad, 7 days a week. Most sessions under 15 minutes. Book now.",
  alternates: { canonical: "/online-notary" },
};

const faqs = [
  ["What is an online notary?", "A Florida commissioned notary who notarizes your document over a secure live video call instead of in person."],
  ["Is online notarization legal?", "Yes. Florida law allows remote online notarization by registered online notaries. Most documents can be done this way. A few, like some wills and trusts, have extra rules, so ask us first."],
  ["What do I need?", "A computer or phone with a camera and microphone, a strong internet connection, a valid government photo ID and your document as a PDF."],
  ["How fast can I get it done?", "Often the same day. The session itself usually takes under 15 minutes and you get the notarized PDF right after."],
  ["Can I use it if I live in another state or country?", "Yes. You can sign from anywhere. Check that the place receiving your document accepts electronic notarization."],
  ["Is my information safe?", "Yes. Sessions run on an encrypted platform with identity checks, and the recording is stored securely as Florida law requires."],
  ["What if I am not good with computers?", "We walk you through it step by step. If it is not working for you, we can switch you to a mobile appointment in Alachua County."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Online Notary", path: "/online-notary" }]} />
      <Hero
        primary="online"
        eyebrow="Remote online notarization"
        title="Get notarized online in minutes"
        sub="A live video session with a Florida commissioned online notary. Sign from home, work or anywhere in the world."
      />
      <section className="section">
        <div className="wrap">
          <h2>The online notary process</h2>
          <Steps
            items={[
              ["Schedule a time", "Pick a slot online. You will get a link and a short checklist by email."],
              ["Join the video call", "Upload your document, confirm your ID and sign electronically while we watch."],
              ["Get your documents", "Your notarized PDF is ready to download right after the session."],
            ]}
          />
        </div>
      </section>
      <Reviews />
      <Faq items={faqs} />
      <CtaBand title="Ready to sign online?" />
    </>
  );
}
