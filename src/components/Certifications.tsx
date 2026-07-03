import Reveal from "./Reveal";
import { certs } from "@/data/certs";

export default function Certifications() {
  return (
    <section id="certs" className="section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Certifications</span>
          <h2 className="h-section">Verified credentials</h2>
        </Reveal>
        <div className="cert-grid">
          {certs.map((c, i) => (
            <Reveal key={c.t} className="cert-card glass" delay={(i % 3) * 0.08}>
              <div className="cert-icon">{c.i}</div>
              <h3>{c.t}</h3>
              <span className="cert-org">{c.org}</span>
              <span className="cert-date">Issued {c.date}</span>
              <a href={c.link}>Verify credential ↗</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



