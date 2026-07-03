"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/data/site";

const links = [
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#services", "Services"],
  ["#projects", "Work"],
  ["#experience", "Journey"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <a href="#hero" className="logo">
          <b>{site.initials}</b> {site.short}
          <span style={{ color: "var(--gold)" }}>.</span>
        </a>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <div
            className={`burger ${open ? "open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            role="button"
          >
            <span /><span /><span />
          </div>
        </div>
      </div>
    </header>
  );
}



