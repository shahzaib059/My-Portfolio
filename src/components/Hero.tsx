"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NodeCanvas from "./NodeCanvas";
import { site } from "@/data/site";

function useTyped(words: string[]) {
  const [text, setText] = useState("");
  useEffect(() => {
    let r = 0, c = 0, del = false, timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[r];
      setText(del ? word.slice(0, c--) : word.slice(0, c++));
      let speed = del ? 45 : 95;
      if (!del && c === word.length + 1) { del = true; speed = 1600; }
      else if (del && c < 0) { del = false; r = (r + 1) % words.length; c = 0; }
      timer = setTimeout(tick, speed);
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);
  return text;
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const typed = useTyped(site.roles);

  return (
    <section id="hero">
      <NodeCanvas />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <motion.span className="avail glass" {...fade(0.1)}>
            <span className="dot" /> Available for new projects
          </motion.span>
          <motion.h1 {...fade(0.2)}>{site.name}</motion.h1>
          <motion.div className="hero-role" {...fade(0.3)}>
            <span>{typed}</span>
            <span className="caret" />
          </motion.div>
          <motion.p className="hero-intro" {...fade(0.4)}>
            {site.intro}
          </motion.p>
          <motion.div className="hero-cta" {...fade(0.5)}>
            <a href="#projects" className="btn btn-primary">View Projects →</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
            <a href={site.resumeUrl} className="btn btn-ghost">↓ Resume</a>
          </motion.div>
          <motion.div className="hero-stats-mini" {...fade(0.65)}>
            {site.heroStats.map((s) => (
              <div key={s.l}>
                <b className="grad-text">{s.n}</b>
                <span>{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-stage">
            <motion.div
              className="portrait-frame"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <div className="frame-glow" />
              <div className="portrait-photo">
                {/* Put your photo in /public and change the src to e.g. "/profile.jpg" */}
                <img src="/profile.jpg" alt={site.name} />
                <div className="scan" />
              </div>
              <svg className="frame-svg" viewBox="0 0 300 360" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="sig" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7C5CFF" />
                    <stop offset="100%" stopColor="#22D6E8" />
                  </linearGradient>
                </defs>
                <rect className="frame-base" x="2" y="2" width="296" height="356" rx="24" />
                <rect className="frame-signal" x="2" y="2" width="296" height="356" rx="24" />
              </svg>
              <span className="bracket bk-tl" />
              <span className="bracket bk-tr" />
              <span className="bracket bk-bl" />
              <span className="bracket bk-br" />
              <div className="status"><span className="d" /> automating…</div>
            </motion.div>
          </div>
          <div className="float-card glass fc-1"><span className="mono">// workflow</span><b>Live & Automated</b></div>
          <div className="float-card glass fc-2"><span className="mono">// ai agent</span><b>24/7 Responding</b></div>
          <div className="float-card glass fc-3"><span className="mono">// crm</span><b>Leads → Closed</b></div>
        </motion.div>
      </div>
    </section>
  );
}



