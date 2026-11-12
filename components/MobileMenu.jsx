"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const SECTIONS = [
  ["Book", [["Mobile notary", "/mobile-notary"], ["Online notary", "/online-notary"], ["Pricing", "/pricing"]]],
  ["Documents", [["Power of attorney", "/power-of-attorney-in-florida"], ["Apostille", "/apostille"], ["Real estate and loan signings", "/real-estate"], ["Wills and estate", "/will-and-estate-notary"], ["Divorce documents", "/divorce-documents-notary"], ["All documents", "/services"]]],
  ["Places", [["Hospitals", "/hospital-notary-gainesville"], ["Nursing homes", "/nursing-home-notary-gainesville"], ["Jails and prisons", "/jail-notary-gainesville"], ["Your home or office", "/places"], ["Service areas", "/service-areas"]]],
  ["Learn", [["Guides", "/guides"], ["Reviews", "/reviews"], ["FAQ", "/faq"], ["About", "/about"], ["Contact", "/contact"]]],
];

export default function MobileMenu({ phone, phoneHref, bookHref }) {
  const [open, setOpen] = useState(false);
  const scrollY = useRef(0);
  const path = usePathname();
  useEffect(() => { setOpen(false); }, [path]);

  // Freeze the page behind the menu (works on iPhone Safari and in-app browsers).
  useEffect(() => {
    const b = document.body;
    if (open) {
      scrollY.current = window.scrollY;
      b.style.position = "fixed";
      b.style.top = `-${scrollY.current}px`;
      b.style.left = "0";
      b.style.right = "0";
      b.classList.add("menu-open");
    } else if (b.classList.contains("menu-open")) {
      b.style.position = ""; b.style.top = ""; b.style.left = ""; b.style.right = "";
      b.classList.remove("menu-open");
      window.scrollTo({ top: scrollY.current, behavior: "instant" });
    }
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button className="burger" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
        <span /><span /><span />
      </button>
      {open && (
        <div id="mobile-menu" className="mmenu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mmenu-top">
            <span className="mmenu-title">Menu</span>
            <button className="burger is-open mmenu-close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <span /><span /><span />
            </button>
          </div>
          <div className="mmenu-scroll">
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
        </div>
      )}
    </>
  );
}
