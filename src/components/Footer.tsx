import { site } from "@/data/site";

const links = [
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#services", "Services"],
  ["#projects", "Work"],
  ["#contact", "Contact"],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <a href="#hero" className="logo">
            <b>{site.initials}</b> {site.short}
            <span style={{ color: "var(--gold)" }}>.</span>
          </a>
          <nav className="foot-links">
            {links.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <div className="socials">
            <a href={site.socials.github} className="glass" aria-label="GitHub" target="_blank" rel="noopener noreferrer">⌨</a>
            <a href={site.socials.linkedin} className="glass" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
            <a href={site.socials.whatsapp} className="glass" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">💬</a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} {site.name} — Designed &amp; built with intent.</p>
      </div>
    </footer>
  );
}



