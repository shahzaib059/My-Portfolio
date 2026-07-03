"use client";

import { useEffect, useRef } from "react";

interface Node { x: number; y: number; vx: number; vy: number; r: number; }
interface Edge { a: number; b: number; }
interface Pulse { e: Edge; t: number; }

export default function NodeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, raf = 0;
    let nodes: Node[] = [], edges: Edge[] = [], pulses: Pulse[] = [];

    const build = () => {
      nodes = []; edges = []; pulses = [];
      const count = W < 700 * dpr ? 10 : 18;
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18 * dpr,
          vy: (Math.random() - 0.5) * 0.18 * dpr,
          r: (Math.random() * 2 + 1.5) * dpr,
        });
      }
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 260 * dpr && Math.random() > 0.45) edges.push({ a: i, b: j });
        }
      edges.forEach((e, i) => { if (i % 2 === 0) pulses.push({ e, t: Math.random() }); });
    };

    const resize = () => {
      W = cv.width = cv.offsetWidth * dpr;
      H = cv.height = cv.offsetHeight * dpr;
      build();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const light = document.documentElement.dataset.theme === "light";
      edges.forEach((e) => {
        const a = nodes[e.a], b = nodes[e.b];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const alpha = Math.max(0, 1 - d / (300 * dpr)) * (light ? 0.18 : 0.22);
        ctx.strokeStyle = `rgba(124,92,255,${alpha})`;
        ctx.lineWidth = 1 * dpr;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      });
      pulses.forEach((p) => {
        const a = nodes[p.e.a], b = nodes[p.e.b];
        p.t += 0.006; if (p.t > 1) p.t = 0;
        const x = a.x + (b.x - a.x) * p.t, y = a.y + (b.y - a.y) * p.t;
        ctx.fillStyle = "rgba(34,214,232,.95)";
        ctx.beginPath(); ctx.arc(x, y, 2.5 * dpr, 0, 7); ctx.fill();
        ctx.shadowBlur = 12 * dpr; ctx.shadowColor = "rgba(34,214,232,.85)";
        ctx.beginPath(); ctx.arc(x, y, 2.5 * dpr, 0, 7); ctx.fill();
        ctx.shadowBlur = 0;
      });
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        ctx.fillStyle = light ? "rgba(124,92,255,.5)" : "rgba(170,180,255,.75)";
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 7); ctx.fill();
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="node-canvas" ref={ref} />;
}



