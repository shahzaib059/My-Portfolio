"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal";
import { site } from "@/data/site";

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = target / 60;
    const id = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(id); }
      setVal(Math.floor(cur));
    }, 22);
    return () => clearInterval(id);
  }, [inView, target]);

  return (
    <div className="num" ref={ref}>
      {val}
      {target >= 100 ? "+" : ""}
    </div>
  );
}

const journey = [
  ["2020", "Started in web development — HTML, CSS, JavaScript, React."],
  ["2022", "Moved deep into CRM & automation, mastering GoHighLevel."],
  ["2024", "Built AI agents & voice systems on top of automation pipelines."],
  ["Now", "Delivering full automation infrastructure for agencies & SaaS."],
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">About Me</span>
          <h2 className="h-section">
            Building systems that <span className="grad-text">work while you sleep</span>
          </h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              I&apos;m an <strong>Automation Specialist &amp; AI Workflow Developer</strong> focused on one
              outcome: removing manual, repetitive work from businesses so teams can focus on growth.
            </p>
            <p>
              Over the last few years I&apos;ve built end-to-end systems on <strong>GoHighLevel</strong>,
              designed multi-step automations in <strong>n8n, Zapier and Make</strong>, and shipped{" "}
              <strong>AI agents</strong> that handle conversations, qualify leads and book appointments — all
              without a human in the loop.
            </p>
            <p>
              My background spans full-stack development, which means I don&apos;t just connect tools — I build
              the custom pieces (APIs, webhooks, dashboards) when off-the-shelf isn&apos;t enough.
            </p>
            <div className="journey">
              {journey.map(([yr, txt]) => (
                <div className="journey-item" key={yr}>
                  <span className="yr">{yr}</span>
                  <p>{txt}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="stats-grid" delay={0.15}>
            {site.stats.map((s) => (
              <div className="stat-card glass" key={s.label}>
                <Counter target={s.count} />
                <div className="lbl">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}



