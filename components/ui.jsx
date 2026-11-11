import Link from "next/link";
import { SITE, PRICING, ADDONS, REVIEWS, DOCUMENTS } from "@/lib/site";
import { TOWNS } from "@/lib/towns";

export function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>Same day mobile notary in Gainesville and Alachua County</span>
          <a href={SITE.phoneHref}>Call or text {SITE.phone}</a>
        </div>
      </div>
      <div className="wrap nav">
        <Link href="/" className="brand" aria-label="Stratton Collective home">
          <span className="brand-mark">SC</span>
          <span className="brand-text">
            Stratton Collective
            <small>Mobile and Online Notary</small>
          </span>
        </Link>
        <nav className="links" aria-label="Main">
          <Link href="/mobile-notary">Mobile Notary</Link>
          <Link href="/online-notary">Online Notary</Link>
          <Link href="/apostille">Apostille</Link>
          <Link href="/uf-shands-hospital-notary">Hospital</Link>
          <Link href="/service-areas">Areas</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="btn btn-gold nav-cta" href={SITE.bookMobile}>Book now</a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-brand">Stratton Collective</div>
          <p>Mobile and online notary based in Gainesville, Florida. Commissioned Florida notary, remote online notary and loan signing agent.</p>
          <p>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <br />
            {SITE.hoursText}
          </p>
        </div>
        <div>
          <div className="footer-h">Services</div>
          <ul>
            <li><Link href="/mobile-notary">Mobile notary</Link></li>
            <li><Link href="/online-notary">Online notary</Link></li>
            <li><Link href="/apostille">Apostille</Link></li>
            <li><Link href="/real-estate">Real estate and loan signings</Link></li>
            <li><Link href="/power-of-attorney-in-florida">Power of attorney</Link></li>
            <li><Link href="/uf-shands-hospital-notary">UF Shands hospital notary</Link></li>
            <li><Link href="/uf-employees">UF employee forms</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-h">Service areas</div>
          <ul>
            {TOWNS.map((t) => (
              <li key={t.slug}><Link href={`/${t.slug}`}>{t.name}, FL</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="footer-h">Help</div>
          <ul>
            <li><Link href="/what-is-a-notary-how-does-an-online-notary-work">How notarization works</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><a href={SITE.googleWriteReview}>Leave us a Google review</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-legal">
        © {new Date().getFullYear()} Stratton Collective. A notary public is not an attorney and cannot give legal advice or prepare legal documents.
      </div>
    </footer>
  );
}

export function StickyBook() {
  return (
    <div className="sticky-book" role="region" aria-label="Quick booking">
      <a className="btn btn-ghost" href={SITE.phoneHref}>Call</a>
      <a className="btn btn-gold" href={SITE.bookMobile}>Book a notary</a>
    </div>
  );
}

export function Hero({ eyebrow, title, sub, primary = "mobile", children }) {
  return (
    <section className="hero">
      <div className="wrap hero-in">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {sub && <p className="lead">{sub}</p>}
        <div className="cta-row">
          {primary === "online" ? (
            <>
              <a className="btn btn-gold btn-lg" href={SITE.bookOnline}>Book online notary</a>
              <a className="btn btn-light btn-lg" href={SITE.bookMobile}>Book mobile notary</a>
            </>
          ) : (
            <>
              <a className="btn btn-gold btn-lg" href={SITE.bookMobile}>Book mobile notary</a>
              <a className="btn btn-light btn-lg" href={SITE.bookOnline}>Book online notary</a>
            </>
          )}
        </div>
        <a className="stars-line" href={SITE.googleReviews}>
          <span className="stars" aria-hidden>★★★★★</span> {SITE.rating} from {SITE.reviewCount} Google reviews
        </a>
        {children}
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section className="section alt" id="reviews">
      <div className="wrap">
        <div className="reviews-head">
          <div>
            <h2>What clients say</h2>
            <p className="muted"><span className="stars" aria-hidden>★★★★★</span> {SITE.rating} average from {SITE.reviewCount} reviews on Google</p>
          </div>
          <div className="cta-row">
            <a className="btn btn-light" href={SITE.googleReviews}>Read all reviews</a>
            <a className="btn btn-navy" href={SITE.googleWriteReview}>Review us on Google</a>
          </div>
        </div>
        <div className="grid3">
          {REVIEWS.map((r) => (
            <figure className="card review" key={r.name}>
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <blockquote>{r.text}</blockquote>
              <figcaption>{r.name}, Google review</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing({ title = "Mobile notary pricing" }) {
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <h2>{title}</h2>
        <p className="muted">Pick how fast you need us. You will see the exact price before you book.</p>
        <div className="grid4">
          {PRICING.map((p) => (
            <div className="card price" key={p.name}>
              <div className="price-name">{p.name}</div>
              <div className="price-when">{p.when}</div>
              <div className="price-amt">{p.price}</div>
              <p className="small muted">{p.note}</p>
            </div>
          ))}
        </div>
        <ul className="addons">
          {ADDONS.map((a) => <li key={a}>{a}</li>)}
        </ul>
        <a className="btn btn-gold" href={SITE.bookMobile}>See times and book</a>
      </div>
    </section>
  );
}

export function Documents() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>Documents we notarize</h2>
        <div className="grid4">
          {DOCUMENTS.map(([t, d]) => (
            <div className="card" key={t}>
              <h3>{t}</h3>
              <p className="small">{d}</p>
            </div>
          ))}
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
          <span className="step-n">{i + 1}</span>
          <div>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items }) {
  return (
    <section className="section">
      <div className="wrap narrow">
        <h2>Questions people ask</h2>
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

export function CtaBand({ title = "Need a notary today?", sub = "Book online in two minutes or call and we will confirm a time within the hour." }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-band-in">
        <div>
          <h2>{title}</h2>
          <p>{sub}</p>
        </div>
        <div className="cta-row">
          <a className="btn btn-gold btn-lg" href={SITE.bookMobile}>Book mobile</a>
          <a className="btn btn-light btn-lg" href={SITE.bookOnline}>Book online</a>
          <a className="btn btn-ghost-light btn-lg" href={SITE.phoneHref}>{SITE.phone}</a>
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

export function AreaLinks() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>Areas we serve</h2>
        <p className="muted">Mobile visits across Alachua County and nearby. Online notarization anywhere.</p>
        <div className="chips">
          {TOWNS.map((t) => (
            <Link className="chip" key={t.slug} href={`/${t.slug}`}>{t.name}</Link>
          ))}
        </div>
      </div>
    </section>
  );
}
