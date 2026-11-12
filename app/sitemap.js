import { SITE } from "@/lib/site";
import { TOWNS } from "@/lib/towns";
import { SERVICES } from "@/lib/services";
import { HOSPITALS, JAILS } from "@/lib/places";
export default function sitemap() {
  const pages = ["", "/mobile-notary", "/online-notary", "/services", "/pricing", "/reviews", "/about", "/faq", "/uf-employees", "/contact", "/what-is-a-notary-how-does-an-online-notary-work", "/service-areas", "/places", "/hospital-notary-gainesville", "/jail-notary-gainesville", "/nursing-home-notary-gainesville", ...HOSPITALS.map((p) => `/${p.slug}`), ...JAILS.map((p) => `/${p.slug}`), ...SERVICES.map((s) => `/${s.slug}`), ...TOWNS.map((t) => `/${t.slug}`)];
  return pages.map((p) => ({ url: `${SITE.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority: p === "" ? 1 : 0.8 }));
}
