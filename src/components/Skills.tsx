"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="h-section">A full automation stack</h2>
          <p className="sub">
            From CRM architecture to AI orchestration — the tools I use to ship reliable systems.
          </p>
        </Reveal>
        <div className="skills-grid">
          {skills.map((cat, i) => (
            <Reveal key={cat.cat} className="skill-cat glass" delay={i * 0.08}>
              <h3>
                <i>{cat.icon}</i>
                {cat.cat}
              </h3>
              {cat.items.map((s) => (
                <div className="bar" key={s.n}>
                  <div className="bar-top">
                    <span>{s.n}</span>
                    <span>{s.v}%</span>
                  </div>
                  <div className="bar-track">
                    <motion.div
                      className="bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.v}%` }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}



