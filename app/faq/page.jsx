import { Hero, Faq, CtaBand, Breadcrumbs } from "@/components/ui";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Notary Questions Answered | Gainesville Mobile Notary FAQ",
  description: "Answers to common notary questions in Gainesville: ID, witnesses, hospital visits, online notarization, pricing, apostilles and what a notary can and cannot do.",
  alternates: { canonical: "/faq" },
};

const groups = [
  ["Booking and pricing", [
    ["How do I book?", "Book online any time, or call or text (352) 443-6272. We confirm within the hour during business hours."],
    ["What are your hours?", "7 days a week, 8am to 8pm. Emergency visits within the hour are available within 20 miles of Gainesville."],
    ["How much does it cost?", "From $75 scheduled, from $125 next day, $200 flat same day and $275 flat within the hour. Witnesses are $30 each in person."],
  ]],
  ["The appointment", [
    ["What ID do I need?", "A current, government issued photo ID with your signature, such as a driver license, state ID, passport or military ID."],
    ["Should I sign before you arrive?", "No. Most documents must be signed in front of the notary. Wait until we are there."],
    ["Do you provide witnesses?", "Yes, for $30 each in person or $15 each online."],
    ["Can you notarize for a family member?", "We can notarize for anyone who is not related to us and who can show ID and understand the document."],
  ]],
  ["What a notary does", [
    ["Can a notary give legal advice?", "No. A Florida notary who is not an attorney cannot give legal advice, draft documents or choose forms."],
    ["What is the difference between an acknowledgment and a jurat?", "An acknowledgment confirms you signed willingly. A jurat means you swear or affirm the contents are true. Your document usually tells you which one it needs."],
    ["Can you notarize a document in another language?", "Yes, if the notarial certificate is in English and we can communicate directly with you."],
  ]],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "FAQ", path: "/faq" }]} />
      <Hero kicker="Questions" title="Notary questions, answered" lead="If you do not see yours here, call or text and we will answer it in plain English." image={IMG.fountainPen} />
      {groups.map(([title, items]) => <Faq key={title} title={title} items={items} />)}
      <CtaBand />
    </>
  );
}
