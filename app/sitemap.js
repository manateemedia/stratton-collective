import { SITE } from "@/lib/site";
import { TOWNS } from "@/lib/towns";
export default function sitemap() {
  const pages = ["", "/mobile-notary", "/online-notary", "/apostille", "/uf-shands-hospital-notary", "/uf-employees", "/power-of-attorney-in-florida", "/real-estate", "/contact", "/what-is-a-notary-how-does-an-online-notary-work", "/service-areas", ...TOWNS.map((t) => `/${t.slug}`)];
  return pages.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.8 }));
}
