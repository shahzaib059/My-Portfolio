"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const len = testimonials.length;

  const go = useCallback((i: number) => setIdx(((i % len) + len) % len), [len]);

  const start = useCallback(() => {
    stop();
    timer.current = setInterval(() => setIdx((p) => (p + 1) % len), 5500);
  }, [len]);
  const stop = () => { if (timer.current) clearInterval(timer.current); };

  useEffect(() => { start(); return stop; }, [start]);

  return (
    <section id="testimonials" className="section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Testimonials</span>
          <h2 className="h-section">What clients say</h2>
        </Reveal>
        <Reveal className="tcarousel">
          <div onMouseEnter={stop} onMouseLeave={start}>
            <motion.div
              className="ttrack"
              animate={{ x: `-${idx * 100}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {testimonials.map((t) => (
                <div className="tslide" key={t.n}>
                  <div className="tcard glass">
                    <div className="tstars">★★★★★</div>
                    <p className="tquote">&ldquo;{t.q}&rdquo;</p>
                    <div className="tperson">
                      <img
                        src={`https://placehold.co/100x100/0c0c16/${t.img}?text=${t.n.charAt(0)}`}
                        alt={t.n}
                      />
                      <div style={{ textAlign: "left" }}>
                        <div className="nm">{t.n}</div>
                        <div className="ps">{t.p}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="tdots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`tdot ${i === idx ? "active" : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="tnav">
              <div className="icon-btn glass" onClick={() => go(idx - 1)} role="button" aria-label="Previous">←</div>
              <div className="icon-btn glass" onClick={() => go(idx + 1)} role="button" aria-label="Next">→</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}



