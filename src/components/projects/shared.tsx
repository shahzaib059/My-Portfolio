"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

export const thumb = (img: string, title: string) =>
  `linear-gradient(135deg,#${img}33,#0c0c16),url('https://placehold.co/600x360/0c0c16/${img}?text=${encodeURIComponent(
    title
  )}')`;

export function ProjectCard({ p, onClick }: { p: Project; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className="proj-card"
      onClick={onClick}
    >
      <div className="proj-thumb" style={{ backgroundImage: thumb(p.img, p.t) }}>
        <span className="proj-tag">{p.tag}</span>
      </div>
      <div className="proj-body">
        <h3>{p.t}</h3>
        <p>{p.d.slice(0, 90)}…</p>
        <div className="proj-stack">
          {p.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectModal({ active, onClose }: { active: Project; onClose: () => void }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-card glass"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-close" onClick={onClose} role="button" aria-label="Close">
          ✕
        </div>
        <div
          className="modal-img"
          style={{
            backgroundImage: `linear-gradient(135deg,#${active.img}44,#0c0c16),url('https://placehold.co/640x300/0c0c16/${active.img}?text=${encodeURIComponent(
              active.t
            )}')`,
          }}
        />
        <div className="modal-inner">
          <span
            className="proj-tag"
            style={{ position: "static", display: "inline-block", marginBottom: 14 }}
          >
            {active.tag}
          </span>
          <h3>{active.t}</h3>
          <p>{active.d}</p>
          <div className="proj-stack">
            {active.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <div className="modal-actions">
            <a href={active.live} className="btn btn-primary" target="_blank" rel="noreferrer">
              Live Demo ↗
            </a>
            <a href={active.git} className="btn btn-ghost" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
