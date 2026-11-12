import { SITE, PRICING, ADDONS } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { TOWNS } from "@/lib/towns";
import { HOSPITALS, JAILS, EVERYDAY } from "@/lib/places";
import { GUIDES } from "@/lib/guides";

export const dynamic = "force-static";

export function GET() {
  const u = (p) => `${SITE.url}${p}`;
  const lines = [
    `# ${SITE.legalName}`,
    "",
    `> Mobile and online notary based in Gainesville, Florida. A commissioned Florida notary public, remote online notary and loan signing agent that travels to homes, offices, coffee shops, parking lots, hospitals, nursing homes and jails across Alachua County, and notarizes online by live video anywhere. Open 7 days, 8am to 8pm. Rated ${SITE.rating} stars from ${SITE.reviewCount} Google reviews.`,
    "",
    `Phone (call or text): ${SITE.phone}`,
    `Email: ${SITE.email}`,
    `Book a mobile notary: ${SITE.bookMobile}`,
    `Book an online notary: ${SITE.bookOnline}`,
    "Service area: Gainesville and all of Alachua County, Florida, plus Lake City and Jacksonville by appointment. Online notarization anywhere.",
    "A notary is not an attorney and cannot give legal advice or prepare legal documents.",
    "",
    "## Pricing (mobile notary)",
    ...PRICING.map((p) => `- ${p.name} (${p.when}): ${p.price}. ${p.note}`),
    ...ADDONS.map((a) => `- ${a}`),
    "",
    "## Main pages",
    `- [Mobile notary](${u("/mobile-notary")}): how in-person visits work, pricing`,
    `- [Online notary](${u("/online-notary")}): Florida remote online notarization by video`,
    `- [Pricing](${u("/pricing")})`,
    `- [Reviews](${u("/reviews")})`,
    `- [FAQ](${u("/faq")})`,
    `- [Contact](${u("/contact")})`,
    "",
    "## Documents we notarize",
    ...SERVICES.map((s) => `- [${s.short}](${u("/" + s.slug)}): ${s.description}`),
    `- [UF employee forms](${u("/uf-employees")}): Florida loyalty oath, domestic partnership affidavits, ORP forms`,
    "",
    "## Where we meet clients",
    ...EVERYDAY.map((e) => `- [${e.short}](${u("/" + e.slug)}): ${e.description}`),
    `- [Hospitals](${u("/hospital-notary-gainesville")})`,
    ...HOSPITALS.map((h) => `  - [${h.name}](${u("/" + h.slug)}), ${h.address}`),
    `- [Jails and prisons](${u("/jail-notary-gainesville")}): $175 per visit`,
    ...JAILS.map((j) => `  - [${j.name}](${u("/" + j.slug)}), ${j.address}`),
    `- [Nursing homes, assisted living and hospice](${u("/nursing-home-notary-gainesville")})`,
    "",
    "## Guides (Florida notary rules explained)",
    ...GUIDES.map((g) => `- [${g.title}](${u("/guides/" + g.slug)}): ${g.description}`),
    "",
    "## Towns served",
    ...TOWNS.map((t) => `- [Mobile notary in ${t.name}, FL](${u("/" + t.slug)})`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
