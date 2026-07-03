"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    let mx = 0, my = 0, cx = 0, cy = 0, raf = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };
    const loop = () => {
      cx += (mx - cx) * 0.18; cy += (my - cy) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    const over = () => ring.current?.classList.add("hover");
    const out = () => ring.current?.classList.remove("hover");
    window.addEventListener("mousemove", move);
    document
      .querySelectorAll("a,button,.btn,.proj-card,.filter,.icon-btn,.serv-card,.tdot")
      .forEach((el) => {
        el.addEventListener("mouseenter", over);
        el.addEventListener("mouseleave", out);
      });
    loop();
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={ring} />
      <div id="cursor-dot" ref={dot} />
    </>
  );
}



