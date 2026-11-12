import Link from "next/link";
import { SITE, PRICING, ADDONS, REVIEWS } from "@/lib/site";
import { TOWNS } from "@/lib/towns";
import { SERVICES } from "@/lib/services";
import { PLACE_HUBS, HOSPITALS, JAILS } from "@/lib/places";
import { IMG, img, srcSet } from "@/lib/images";
import MobileMenu from "@/components/MobileMenu";

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Photo({ image, ratio = 0.66, sizes = "(max-width: 900px) 100vw, 50vw", priority = false, className = "" }) {
  return (
    <img
      className={`photo ${className}`}
      src={img(image, 1200, Math.round(1200 * ratio))}
      srcSet={srcSet(image, ratio)}
      sizes={sizes}
      alt={image.alt}
      width={1200}
      height={Math.round(1200 * ratio)}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}

// The notary seal: the one decorative signature of the site.
export function Seal({ size = 168, className = "" }) {
  const ring = "STRATTON COLLECTIVE ✦ NOTARY PUBLIC ✦ STATE OF FLORIDA ✦ ";
  return (
    <svg className={`seal ${className}`} width={size} height={size} viewBox="0 0 200 200" role="img" aria-label="Stratton Collective notary seal">
      <defs>
        <path id="sealRing" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text fontSize="13.2" letterSpacing="2.2" fill="currentColor" fontFamily="var(--sans)" fontWeight="700">
        <textPath href="#sealRing">{ring}</textPath>
      </text>
      <text x="100" y="92" textAnchor="middle" fontFamily="var(--serif)" fontSize="30" fill="currentColor">5.0</text>
      <text x="100" y="112" textAnchor="middle" fontSize="13" fill="currentColor" letterSpacing="3">★★★★★</text>
      <text x="100" y="130" textAnchor="middle" fontFamily="var(--sans)" fontSize="10.5" fill="currentColor" fontWeight="600">{SITE.reviewCount} Google reviews</text>
    </svg>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label="Stratton Collective home">
          <Seal size={44} className="brand-seal" />
          <span className="brand-text">
            Stratton Collective
            <small>Mobile and online notary, Gainesville FL</small>
          </span>
        </Link>
        <nav className="links" aria-label="Main">
          <Link href="/mobile-notary">Mobile</Link>
          <Link href="/online-notary">Online</Link>
          <Link href="/services">Documents</Link>
          <Link href="/places">Places</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/service-areas">Areas</Link>
          <Link href="/guides">Guides</Link>
        </nav>
        <a className="nav-phone" href={SITE.phoneHref}>{SITE.phone}</a>
        <a className="btn btn-ink nav-cta" href={SITE.bookMobile}>Book a notary</a>
        <MobileMenu phone={SITE.phone} phoneHref={SITE.phoneHref} bookHref={SITE.bookMobile} />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Seal size={96} className="footer-seal" />
          <p className="footer-name">Stratton Collective</p>
          <p>Mobile and online notary in Gainesville, Florida. Commissioned Florida notary, remote online notary and certified loan signing agent.</p>
          <p>
            <a href={SITE.phoneHref}>{SITE.phone}</a> (call or text)
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <br />
            {SITE.hoursText}
          </p>
        </div>
        <div>
          <p className="footer-h">Documents</p>
          <ul>
            {SERVICES.map((s) => (
              <li key={s.slug}><Link href={`/${s.slug}`}>{s.short}</Link></li>
            ))}
            <li><Link href="/uf-employees">UF employee forms</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-h">Places we go</p>
          <ul className="footer-gap">
            {PLACE_HUBS.map((h) => (
              <li key={h.slug}><Link href={`/${h.slug}`}>{h.title}</Link></li>
            ))}
          </ul>
          <p className="footer-h">Service areas</p>
          <ul>
            {TOWNS.map((t) => (
              <li key={t.slug}><Link href={`/${t.slug}`}>Notary in {t.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-h">Company</p>
          <ul>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/guides">Notary guides</Link></li>
            <li><Link href="/faq">Questions</Link></li>
            <li><Link href="/what-is-a-notary-how-does-an-online-notary-work">How notarization works</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><a href={SITE.googleWriteReview}>Leave a Google review</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-legal">
        <p>© {new Date().getFullYear()} Stratton Collective, Gainesville, Florida. I am not an attorney licensed to practice law in the State of Florida, and I may not give legal advice or accept fees for legal advice.</p>
      </div>
    </footer>
  );
}

export function StickyBook() {
  return (
    <div className="sticky-book" role="region" aria-label="Quick booking">
      <a className="btn btn-line" href={SITE.phoneHref}>Call or text</a>
      <a className="btn btn-ink" href={SITE.bookMobile}>Book a notary</a>
    </div>
  );
}

export function BookButtons({ primary = "mobile", light = false }) {
  const mobile = <a key="m" className={`btn ${primary === "mobile" ? "btn-ink" : light ? "btn-paper" : "btn-line"}`} href={SITE.bookMobile}>Book mobile notary</a>;
  const online = <a key="o" className={`btn ${primary === "online" ? "btn-ink" : light ? "btn-paper" : "btn-line"}`} href={SITE.bookOnline}>Book online notary</a>;
  return <div className="cta-row">{primary === "online" ? [online, mobile] : [mobile, online]}</div>;
}

const ICONS = {
  phone: "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z",
  clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4V6h-2v7.4l5.2 3.1 1-1.7z",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7z",
  people: "M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2c-2.7 0-8 1.3-8 4v3h16v-3c0-2.7-5.3-4-8-4zm8 0c-.3 0-.7 0-1.1.1 1.3.9 2.1 2.2 2.1 3.9v3h7v-3c0-2.7-5.3-4-8-4z",
  shield: "M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5zm-1.2 14.2-3.5-3.5 1.4-1.4 2.1 2.1 4.6-4.6 1.4 1.4z",
};
export function Icon({ name, size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d={ICONS[name]} /></svg>;
}
export function PhoneIcon() { return <Icon name="phone" size={18} />; }

export function Facts({ light = false }) {
  const items = [["clock", "7 days, 8am to 8pm"], ["bolt", "Emergency within the hour"], ["people", "Witnesses available"], ["shield", "Florida commissioned"]];
  return (
    <ul className={`facts ${light ? "facts-light" : ""}`}>
      {items.map(([i, t]) => <li key={t}><Icon name={i} size={17} />{t}</li>)}
    </ul>
  );
}

const NEEDS = [
  ["Power of attorney", "/power-of-attorney-in-florida", IMG.holdingHands],
  ["Someone is in the hospital", "/hospital-notary-gainesville", IMG.hospitalRoom],
  ["Nursing home or hospice", "/nursing-home-notary-gainesville", IMG.seniorCouple],
  ["Home sale or deed", "/real-estate", IMG.houseKeys],
  ["Will or trust", "/will-and-estate-notary", IMG.lastWill],
  ["Divorce papers", "/divorce-documents-notary", IMG.reviewingDocs],
  ["Apostille for overseas", "/apostille", IMG.passport],
  ["Jail or prison visit", "/jail-notary-gainesville", IMG.courthouse],
  ["Something else", "/contact", IMG.paperStack],
];

// Home hero: full-bleed photo, live status, big call button and a "what do you need" picker.
export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-bg"><Photo image={IMG.twoWomenSigning} ratio={0.5} priority sizes="100vw" /></div>
      <div className="hh-photo">
        <Photo image={IMG.twoWomenSigning} ratio={0.62} priority sizes="100vw" />
        <a href={SITE.googleReviews} className="hh-seal" aria-label={`Rated ${SITE.rating} from ${SITE.reviewCount} Google reviews`}><Seal size={104} /></a>
      </div>
      <div className="wrap home-hero-in">
        <div className="home-hero-copy">
          <h1>Need a notary today? We come to you.</h1>
          <p className="lead">Home, office, hospital bed or jail, anywhere in Alachua County. Or sign online in minutes.</p>
          <div className="cta-row">
            <a className="btn btn-call" href={SITE.phoneHref}><PhoneIcon /> Call or text {SITE.phone}</a>
            <a className="btn btn-paper" href={SITE.bookMobile}>Book online</a>
          </div>
          <a className="hero-rating" href={SITE.googleReviews}>
            <span className="stars" aria-hidden>★★★★★</span>
            <span><strong>{SITE.rating}</strong> from {SITE.reviewCount} Google reviews</span>
          </a>
          <p className="hero-note">Open 7 days, 8am to 8pm. Emergency visits within the hour.</p>
        </div>
        <div className="needs-card">
          <p className="needs-title">What do you need notarized?</p>
          <p className="needs-sub">Tell us when, where and what. One of our notaries will be there.</p>
          <ul className="need-list">
            {NEEDS.map(([t, href, im]) => (
              <li key={href}>
                <Link href={href} className="need-row">
                  <img src={img(im, 120, 120)} alt="" width={44} height={44} loading="lazy" />
                  <span>{t}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/services" className="need-all">See every document we notarize</Link>
        </div>
      </div>
    </section>
  );
}

export function ThatEasy() {
  const cards = [
    { kind: "In person", title: "We come to you", image: IMG.stampOnDoc, steps: ["Pick a day and time", "Give us the address", "Tell us what you're signing"], promise: "One of our notaries shows up with the stamp, a printer and witnesses if you need them.", href: SITE.bookMobile, cta: "Book a mobile notary" },
    { kind: "Online", title: "Sign from anywhere", image: IMG.videoCall, steps: ["Pick a time", "Upload your PDF", "Open the video link"], promise: "A Florida online notary is waiting on the call at your time. Done in minutes.", href: SITE.bookOnline, cta: "Book an online notary" },
  ];
  return (
    <section className="easy">
      <div className="wrap">
        <h2 className="easy-h">Book in two minutes. We handle the rest.</h2>
        <div className="easy-grid">
          {cards.map((c) => (
            <div className="easy-card" key={c.kind}>
              <div className="easy-photo"><Photo image={c.image} ratio={0.5} sizes="(max-width: 860px) 100vw, 50vw" /><span className="easy-kind">{c.kind}</span></div>
              <div className="easy-body">
                <h3>{c.title}</h3>
                <ol className="easy-steps">{c.steps.map((st, n) => <li key={st}><span>{n + 1}</span>{st}</li>)}</ol>
                <p className="easy-promise">{c.promise}</p>
                <a className="btn btn-call" href={c.href}>{c.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Page hero: text on paper, a large photo, and the seal pressed onto the photo's corner.
export function Hero({ kicker, title, lead, image, primary = "mobile", children }) {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          {kicker && <p className="kicker">{kicker}</p>}
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          <BookButtons primary={primary} />
          <a className="call-link" href={SITE.phoneHref}><PhoneIcon /> Call or text {SITE.phone}</a>
          {children}
        </div>
        <div className="hero-media">
          <Photo image={image} ratio={1.25} priority sizes="(max-width: 900px) 100vw, 46vw" />
          <a href={SITE.googleReviews} className="hero-seal-link" aria-label={`Rated ${SITE.rating} from ${SITE.reviewCount} Google reviews`}>
            <Seal size={150} className="hero-seal" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Split({ image, title, children, flip = false, tone = "" }) {
  return (
    <section className={`band ${tone}`}>
      <div className={`wrap split ${flip ? "flip" : ""}`}>
        <div className="split-media"><Photo image={image} ratio={0.75} /></div>
        <div className="split-copy">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

export function DocTiles({ title = "What are you signing?", limit }) {
  const list = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <section className="band">
      <div className="wrap">
        <h2>{title}</h2>
        <p className="muted section-lead">Pick your document for what Florida requires, what to bring and how fast we can come.</p>
        <div className="tiles">
          {list.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} className="tile">
              <Photo image={s.hero} ratio={0.7} sizes="(max-width: 700px) 50vw, 25vw" />
              <span className="tile-label">{s.short}</span>
            </Link>
          ))}
          <Link href="/uf-employees" className="tile">
            <Photo image={IMG.centuryTower} ratio={0.7} sizes="(max-width: 700px) 50vw, 25vw" />
            <span className="tile-label">UF employee forms</span>
          </Link>
          <Link href="/contact" className="tile tile-text">
            <span className="tile-text-h">Other document</span>
            <span>Don't see yours? Call or text and tell us what you have. If it needs a notary, we can do it.</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PlaceTiles({ title = "Where should we meet you?", lead = "Your home, your office, a coffee shop or a parking lot. And when someone can't leave, we come to the hospital bed, the care home or the jail visiting room." }) {
  return (
    <section className="band tone-mist">
      <div className="wrap">
        <h2>{title}</h2>
        <p className="muted section-lead">{lead}</p>
        <div className="tiles">
          {PLACE_HUBS.map((h) => (
            <Link key={h.slug} href={`/${h.slug}`} className="tile">
              <Photo image={h.image} ratio={0.7} sizes="(max-width: 700px) 100vw, 33vw" />
              <span className="tile-label">{h.title}</span>
            </Link>
          ))}
          <Link href="/contact" className="tile tile-text">
            <span className="tile-text-h">Other place</span>
            <span>Church, school, a friend's house, a job site. Tell us where and we'll be there.</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FacilityList({ items, linkBase = true }) {
  return (
    <ul className="facility-list">
      {items.map((f) => (
        <li key={f.slug || f[0]}>
          {f.slug ? <Link href={`/${f.slug}`}><strong>{f.name}</strong></Link> : <strong>{f[0]}</strong>}
          <span>{f.address || f[1]}</span>
        </li>
      ))}
    </ul>
  );
}

export function Reviews({ count = 6 }) {
  return (
    <section className="band tone-ink" id="reviews">
      <div className="wrap">
        <div className="reviews-head">
          <div className="big-rating">
            <span className="big-num">{SITE.rating}</span>
            <span>
              <span className="stars" aria-hidden>★★★★★</span>
              <br />
              {SITE.reviewCount} reviews on Google
            </span>
          </div>
          <div className="cta-row">
            <a className="btn btn-paper" href={SITE.googleReviews}>Read them on Google</a>
            <a className="btn btn-line-light" href={SITE.googleWriteReview}>Write a review</a>
          </div>
        </div>
        <div className="quotes">
          {REVIEWS.slice(0, count).map((r) => (
            <figure className="quote" key={r.name}>
              <blockquote>“{r.text}”</blockquote>
              <figcaption>{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing({ title = "Mobile notary pricing", tone = "" }) {
  return (
    <section className={`band ${tone}`} id="pricing">
      <div className="wrap price-wrap">
        <div>
          <h2>{title}</h2>
          <p className="muted">Choose how soon you need us. The exact price shows before you confirm.</p>
          <Photo image={IMG.inkStamps} ratio={0.6} className="price-photo" sizes="(max-width: 900px) 100vw, 40vw" />
        </div>
        <div className="fee-sheet">
          <p className="fee-title">Fee schedule</p>
          <table>
            <tbody>
              {PRICING.map((p) => (
                <tr key={p.name}>
                  <th scope="row">{p.name}<span>{p.when}</span></th>
                  <td>{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul>
            {ADDONS.map((a) => <li key={a}>{a}</li>)}
          </ul>
          <p className="small muted">Same day and emergency rates apply within 20 miles of Gainesville. Florida law caps the notary fee itself at $10 per notarial act; the rest covers travel, time and printing.</p>
          <a className="btn btn-ink" href={SITE.bookMobile}>See open times</a>
        </div>
      </div>
    </section>
  );
}

export function Steps({ items }) {
  return (
    <ol className="steps">
      {items.map(([t, d], i) => (
        <li key={t}>
          <span className="step-n" aria-hidden>{i + 1}</span>
          <h3>{t}</h3>
          <p>{d}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items, title = "Questions people ask" }) {
  return (
    <section className="band">
      <div className="wrap narrow">
        <h2>{title}</h2>
        {items.map(([q, a]) => (
          <details className="faq" key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
        }}
      />
    </section>
  );
}

export function CtaBand({ title = "Need a notary today?", sub = "Book online in two minutes, or call or text and we will confirm a time within the hour." }) {
  return (
    <section className="cta-band">
      <div className="cta-bg"><Photo image={IMG.stampOnDoc} ratio={0.4} sizes="100vw" /></div>
      <div className="wrap cta-inner">
        <h2>{title}</h2>
        <p>{sub}</p>
        <div className="cta-row">
          <a className="btn btn-paper" href={SITE.bookMobile}>Book mobile</a>
          <a className="btn btn-paper" href={SITE.bookOnline}>Book online</a>
          <a className="btn btn-line-light" href={SITE.phoneHref}>{SITE.phone}</a>
        </div>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${SITE.url}${it.path}`,
        })),
      }}
    />
  );
}

export function AreaLinks({ current }) {
  return (
    <section className="band tone-mist">
      <div className="wrap split">
        <div className="split-media"><Photo image={IMG.paynesPrairie} ratio={0.62} /></div>
        <div className="split-copy">
          <h2>Mobile notary across Alachua County</h2>
          <p>We drive to you in all of these towns, and online notarization works from anywhere.</p>
          <div className="chips">
            {TOWNS.filter((t) => t.slug !== current).map((t) => (
              <Link className="chip" key={t.slug} href={`/${t.slug}`}>{t.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Bring({ items }) {
  return (
    <div className="bring">
      <p className="bring-h">What to have ready</p>
      <ul>{items.map((b) => <li key={b}>{b}</li>)}</ul>
    </div>
  );
}
