import "./globals.css";
import { SITE } from "@/lib/site";
import { TOWNS } from "@/lib/towns";
import { Header, Footer, StickyBook, JsonLd } from "@/components/ui";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Mobile Notary Gainesville FL | Same Day | Stratton Collective",
    template: "%s | Stratton Collective",
  },
  description:
    "Same day mobile and online notary in Gainesville, FL. We come to your home, office or hospital room. 5.0 stars from 104 Google reviews. Call (352) 443-6272.",
  openGraph: { siteName: SITE.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#262f6b" };

const business = {
  "@context": "https://schema.org",
  "@type": "Notary",
  "@id": `${SITE.url}/#business`,
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  telephone: "+1-352-443-6272",
  email: SITE.email,
  priceRange: "$75-$275",
  image: `${SITE.url}/og.png`,
  address: { "@type": "PostalAddress", addressLocality: SITE.city, addressRegion: SITE.region, postalCode: SITE.postalCode, addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 29.6516, longitude: -82.3248 },
  openingHours: SITE.hoursSchema,
  areaServed: [
    ...TOWNS.map((t) => ({ "@type": "City", name: `${t.name}, FL` })),
    { "@type": "AdministrativeArea", name: "Alachua County, FL" },
    { "@type": "State", name: "Florida" },
  ],
  makesOffer: [
    "Mobile notary",
    "Remote online notarization",
    "Loan signing agent",
    "Apostille assistance",
    "Hospital notary",
  ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
  aggregateRating: undefined,
  ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Public+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyBook />
        <BackToTop />
        <JsonLd data={business} />
      </body>
    </html>
  );
}
