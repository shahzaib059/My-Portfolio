import Reveal from "./Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Services</span>
          <h2 className="h-section">What I can build for you</h2>
          <p className="sub">
            Productized, outcome-focused services — each one designed to save hours and capture more
            revenue.
          </p>
        </Reveal>
        <div className="serv-grid">
          {services.map((s, i) => (
            <Reveal key={s.t} className="serv-card glass" delay={(i % 3) * 0.08}>
              <div className="serv-icon">{s.i}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



