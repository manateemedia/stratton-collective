import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section"><div className="wrap narrow">
      <h2>Page not found</h2>
      <p>That page moved. Try the <Link href="/">home page</Link> or <Link href="/mobile-notary">book a mobile notary</Link>.</p>
    </div></section>
  );
}
