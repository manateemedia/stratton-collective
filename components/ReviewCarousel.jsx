"use client";
import { useEffect, useRef, useState } from "react";

const COLORS = ["#262f6b", "#a8352b", "#2f6b5e", "#7a4b8c", "#b06a1f", "#3b6aa8"];

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/>
    </svg>
  );
}

export default function ReviewCarousel({ reviews, googleUrl }) {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const el = track.current;
    const update = () => {
      const card = el.firstElementChild;
      if (!card) return;
      const w = card.getBoundingClientRect().width + 20;
      setPerView(Math.max(1, Math.round(el.clientWidth / w)));
      setActive(Math.round(el.scrollLeft / w));
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { el.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const go = (dir) => {
    const el = track.current;
    const w = el.firstElementChild.getBoundingClientRect().width + 20;
    const max = reviews.length - perView;
    let next = active + dir * perView;
    if (next > max) next = 0;
    if (next < 0) next = max;
    el.scrollTo({ left: next * w, behavior: "smooth" });
  };
  const pages = Math.max(1, Math.ceil(reviews.length / perView));
  const page = Math.min(pages - 1, Math.round(active / perView));

  return (
    <div className="rc">
      <button className="rc-arrow rc-prev" aria-label="Previous reviews" onClick={() => go(-1)}>
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <div className="rc-track" ref={track} tabIndex={0} aria-label="Google reviews">
        {reviews.map((r, i) => (
          <figure className="rc-card" key={r.name}>
            <div className="rc-head">
              <span className="rc-avatar" style={{ background: COLORS[i % COLORS.length] }} aria-hidden="true">{r.name.trim()[0].toUpperCase()}</span>
              <div>
                <p className="rc-name">{r.name}</p>
                <p className="rc-when">{r.when} on <GoogleG /></p>
              </div>
            </div>
            <div className="rc-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote className="rc-text">{r.text}</blockquote>
            {r.text.endsWith("…") && <a className="rc-more" href={googleUrl} target="_blank" rel="noopener">Read more on Google</a>}
          </figure>
        ))}
      </div>
      <button className="rc-arrow rc-next" aria-label="Next reviews" onClick={() => go(1)}>
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      <div className="rc-dots" aria-hidden="true">
        {Array.from({ length: pages }).map((_, i) => <span key={i} className={i === page ? "on" : ""} />)}
      </div>
    </div>
  );
}
