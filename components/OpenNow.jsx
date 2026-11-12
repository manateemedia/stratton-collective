"use client";
import { useEffect, useState } from "react";

// Live open/closed status in Gainesville time (8am to 8pm, 7 days).
export default function OpenNow() {
  const [label, setLabel] = useState(null);
  useEffect(() => {
    const tick = () => {
      const h = Number(new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: false, timeZone: "America/New_York" }).format(new Date()));
      setLabel(h >= 8 && h < 20 ? { open: true, text: "Open now until 8pm, booking same day" } : { open: false, text: "Closed now, opens 8am. Book tomorrow's first slot" });
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);
  if (!label) return <span className="open-pill"><span className="dot" />Open 7 days, 8am to 8pm</span>;
  return (
    <span className={`open-pill ${label.open ? "is-open" : "is-closed"}`}>
      <span className="dot" />
      {label.text}
    </span>
  );
}
