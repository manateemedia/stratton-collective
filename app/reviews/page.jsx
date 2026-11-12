import { Hero, Reviews, CtaBand, Breadcrumbs } from "@/components/ui";
import { IMG } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Reviews | Gainesville's 5-Star Mobile Notary",
  description: `Read why Stratton Collective has a 5.0 rating from ${SITE.reviewCount} Google reviews for mobile and online notary in Gainesville, FL.`,
  alternates: { canonical: "/reviews" },
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Reviews", path: "/reviews" }]} />
      <Hero kicker="Reviews" title={`${SITE.rating} stars from ${SITE.reviewCount} Google reviews`} lead="Clients say we are quick, kind and easy to work with. Here is what a few of them wrote." image={IMG.handshakeDocs} />
      <Reviews />
      <section className="band">
        <div className="wrap narrow">
          <h2>Did we notarize for you?</h2>
          <p>Reviews help other families in Gainesville find a notary they can trust. It takes about a minute.</p>
          <a className="btn btn-ink" href={SITE.googleWriteReview}>Leave a Google review</a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
