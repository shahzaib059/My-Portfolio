import Reveal from "./Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Experience</span>
          <h2 className="h-section">Career journey</h2>
        </Reveal>
        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal key={e.role} className="tl-item" delay={i * 0.08}>
              <div className="tl-head">
                <div>
                  <h3>{e.role}</h3>
                  <span className="co">{e.co}</span>
                </div>
                <span className="tl-dur">{e.dur}</span>
              </div>
              <ul>
                {e.pts.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



