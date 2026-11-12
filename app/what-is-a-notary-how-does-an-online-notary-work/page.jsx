import { Hero, CtaBand, Breadcrumbs, Steps } from "@/components/ui";
import Link from "next/link";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "What Is a Notary and How Does an Online Notary Work?",
  description: "A plain English guide to what a Florida notary does, what to bring, and how online notarization works step by step.",
  alternates: { canonical: "/what-is-a-notary-how-does-an-online-notary-work" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "How notarization works", path: "/what-is-a-notary-how-does-an-online-notary-work" }]} />
      <Hero kicker="Guide" title="What is a notary, and how does an online notary work?" lead="Everything you need to know before your appointment, in plain English." image={IMG.woodStamp} />
      <section className="band">
        <div className="wrap prose">
          <h2>What is a notary?</h2>
          <p>A notary public is an official commissioned by the State of Florida to help prevent fraud. When you sign in front of a notary, they confirm who you are, make sure you are signing willingly and understand what you are signing, and then add their signature and seal.</p>
          <p>A notary does not check whether your document is legally correct and cannot give legal advice. If you have questions about what a document means or which one you need, talk to an attorney.</p>
          <h2>What to bring to any notary appointment</h2>
          <ul>
            <li>A current government photo ID such as a driver license, state ID or passport</li>
            <li>Your document, filled in but not signed</li>
            <li>Witnesses, if your document needs them. We can provide them.</li>
          </ul>
          <h2>How does an online notary work?</h2>
          <p>Florida allows remote online notarization. Instead of meeting in person, you meet a registered online notary on a secure video call.</p>
          <Steps
            items={[
              ["Book and upload", "Schedule a time and upload your document as a PDF."],
              ["Verify your identity", "You answer a few identity questions and show your ID to the camera."],
              ["Sign and download", "You sign electronically while the notary watches. Your notarized PDF is ready right away."],
            ]}
          />
          <p>Not comfortable with video? <Link href="/mobile-notary">Book a mobile notary</Link> and we will come to you.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
