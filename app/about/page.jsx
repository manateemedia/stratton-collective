import { Hero, Split, Reviews, CtaBand, Breadcrumbs } from "@/components/ui";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "About Stratton Collective | Gainesville Mobile Notary",
  description: "Stratton Collective is a Gainesville mobile and online notary founded by Nicolette Stratton. Florida commissioned notary, remote online notary and certified loan signing agent.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
      <Hero kicker="About us" title="A local notary Gainesville trusts" lead="Stratton Collective was started by Nicolette Stratton to make notarization easy for Gainesville families, UF employees, hospital patients and real estate professionals." image={IMG.writingClose} />
      <Reviews count={3} />
      <Split image={IMG.brassSeal} title="Credentials">
        <ul>
          <li>Commissioned Florida notary public</li>
          <li>Florida registered remote online notary</li>
          <li>Certified notary signing agent for loan closings</li>
          <li>Bonded, with a recorded journal of every notarization</li>
        </ul>
      </Split>
      <Split image={IMG.centuryTower} title="Rooted in Gainesville" flip tone="tone-mist">
        <p>We know the hospitals, the title companies, the UF HR offices and the back roads to Archer and Hawthorne. That local knowledge is why we can usually be there the same day.</p>
      </Split>
      <CtaBand />
    </>
  );
}
