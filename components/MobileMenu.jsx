"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SECTIONS = [
  ["Book", [["Mobile notary", "/mobile-notary"], ["Online notary", "/online-notary"], ["Pricing", "/pricing"]]],
  ["Documents", [["Power of attorney", "/power-of-attorney-in-florida"], ["Apostille", "/apostille"], ["Real estate and loan signings", "/real-estate"], ["Wills and estate", "/will-and-estate-notary"], ["Divorce documents", "/divorce-documents-notary"], ["All documents", "/services"]]],
  ["Places", [["Hospitals", "/hospital-notary-gainesville"], ["Nursing homes", "/nursing-home-notary-gainesville"], ["Jails and prisons", "/jail-notary-gainesville"], ["Your home or office", "/places"], ["Service areas", "/service-areas"]]],
  ["Learn", [["Guides", "/guides"], ["Reviews", "/reviews"], ["FAQ", "/faq"], ["About", "/about"], ["Contact", "/contact"]]],
];

export default function MobileMenu({ phone, phoneHref, bookHref }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.classList.toggle("menu-open", open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; document.body.classList.remove("menu-open"); };
  }, [open]);
  return (
    <>
      <button className={`burger ${open ? "is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <div id="mobile-menu" className={`mmenu ${open ? "is-open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {SECTIONS.map(([h, links]) => (
            <div className="mmenu-group" key={h}>
              <p className="mmenu-h">{h}</p>
              <ul>{links.map(([t, href]) => <li key={href}><Link href={href} onClick={() => setOpen(false)}>{t}</Link></li>)}</ul>
            </div>
          ))}
        </nav>
        <div className="mmenu-cta">
          <a className="btn btn-call" href={phoneHref}>Call or text {phone}</a>
          <a className="btn btn-ink" href={bookHref}>Book a notary</a>
        </div>
      </div>
    </>
  );
}
