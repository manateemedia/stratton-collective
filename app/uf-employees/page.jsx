import { Hero, Faq, CtaBand, Breadcrumbs } from "@/components/ui";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "UF HR Forms Notary | Loyalty Oath, Domestic Partnership",
  description: "Notary for University of Florida HR forms: Florida loyalty oath, domestic partnership affidavits, ORP retirement forms. Online or in person in Gainesville.",
  alternates: { canonical: "/uf-employees" },
};

const forms = [
  ["Florida State Employee Loyalty Oath", "Required for public employees under Florida Statute 876.05 before your first paycheck. Can be done online if you cannot get to a UF HR office.", "https://hr.ufl.edu"],
  ["Affidavit of Domestic Partnership", "Adds a domestic partner to UF benefits. You and your partner both sign before a notary.", "https://benefits.hr.ufl.edu"],
  ["Affidavit of Termination of Domestic Partnership", "Filed with UF HR Benefits within 60 days after a partnership ends.", "https://benefits.hr.ufl.edu"],
  ["ORP Retirement Application", "May need notarization if you submit by fax or email instead of online.", "https://hr.ufl.edu/benefits/retirement/"],
  ["Form I-9 help", "If you cannot appear in person, an authorized representative can complete Section 2. Ask us how this works.", null],
];

const faqs = [
  ["Can I do my UF loyalty oath online?", "Yes. We notarize it by live video. Download the form from UF HR, fill it in, then book an online session."],
  ["Do both partners need to be there for the domestic partnership affidavit?", "Yes. Both of you sign in front of the notary, in person or on the same video call."],
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "UF Employees", path: "/uf-employees" }]} />
      <Hero primary="online" kicker="For UF faculty and staff" title="UF HR forms that need a notary" lead="New hire, moving to Gainesville, or updating benefits? Get your UF forms notarized online or in person today." image={IMG.centuryTower} />
      <section className="band">
        <div className="wrap">
          <h2>Three steps</h2>
          <p>1. Download your form from UF HR. 2. Fill it out but do not sign. 3. Book an online or mobile appointment.</p>
          <table className="table">
            <thead><tr><th>Form</th><th>What to know</th></tr></thead>
            <tbody>
              {forms.map(([f, d, url]) => (
                <tr key={f}>
                  <td><strong>{f}</strong></td>
                  <td>{d} {url && <a href={url} rel="nofollow">UF HR page</a>}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cta-row">
            <a className="btn btn-ink" href={SITE.bookOnline}>Book online notary</a>
            <a className="btn btn-line" href="/contact">Ask about I-9 help</a>
          </div>
        </div>
      </section>
      <Faq items={faqs} />
      <CtaBand />
    </>
  );
}
