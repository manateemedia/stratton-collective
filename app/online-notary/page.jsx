import { Hero, Split, Reviews, Steps, Faq, CtaBand, Breadcrumbs } from "@/components/ui";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Online Notary Florida | Notarize by Video in Minutes",
  description: "Florida remote online notarization by live video. Sign from anywhere in the US or abroad, 7 days a week. Most sessions under 15 minutes. Book now.",
  alternates: { canonical: "/online-notary" },
};

const faqs = [
  ["What is an online notary?", "A Florida commissioned notary who notarizes your document over a secure live video call instead of in person."],
  ["Is online notarization legal?", "Yes. Florida law allows remote online notarization by registered online notaries. Most documents work this way. A few, like wills and some powers of attorney, have extra rules, so ask us first."],
  ["What do I need?", "A phone or computer with a camera and microphone, a steady internet connection, a valid government photo ID and your document as a PDF."],
  ["How fast can I get it done?", "Often the same day. The session usually takes under 15 minutes and you download the notarized PDF right after."],
  ["Can I use it if I live in another state or country?", "Yes, you can sign from anywhere. Check that whoever receives your document accepts electronic notarization."],
  ["Is my information safe?", "Yes. Sessions run on an encrypted platform with identity checks, and the recording is stored securely as Florida law requires."],
  ["What if I am not good with computers?", "We walk you through each step. If it is not working, we can switch you to a mobile visit in Alachua County."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Online Notary", path: "/online-notary" }]} />
      <Hero primary="online" kicker="Remote online notarization" title="Get notarized online in minutes" lead="A live video session with a Florida commissioned online notary. Sign from home, work or anywhere in the world." image={IMG.videoCall} />
      <section className="band">
        <div className="wrap">
          <h2>The online notary process</h2>
          <Steps items={[
            ["Schedule a time", "Pick a slot online. You get a link and a short checklist by email."],
            ["Join the video call", "Upload your document, confirm your identity and sign electronically while we watch."],
            ["Download your documents", "Your notarized PDF is ready right after the session."],
          ]} />
        </div>
      </section>
      <Split image={IMG.laptopCall} title="Who uses online notary" tone="tone-mist">
        <ul>
          <li>Family members out of state who need to sign a Florida document</li>
          <li>UF faculty and staff completing HR forms before they move</li>
          <li>Parents signing travel consent letters from work</li>
          <li>Sellers closing on Gainesville property from another state</li>
          <li>Anyone who would rather not drive across town</li>
        </ul>
        <a className="btn btn-ink" href={SITE.bookOnline}>Book online notary</a>
      </Split>
      <Reviews />
      <Faq items={faqs} />
      <CtaBand title="Ready to sign online?" />
    </>
  );
}
