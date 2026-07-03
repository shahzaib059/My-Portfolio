"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";
import { site } from "@/data/site";
import type { Project } from "@/lib/types";
import { ProjectCard, ProjectModal } from "@/components/projects/shared";

export default function ProjectsArchive() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.cat === filter);

  const list = filtered;

  const changeFilter = (c: string) => {
    setFilter(c);
  };

  return (
    <main>
      {/* fixed top bar with logo + back link */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 6000,
          background: "color-mix(in srgb, var(--bg) 78%, transparent)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          className="wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
          }}
        >
          <Link href="/" className="logo">
            <b>{site.initials}</b> {site.short}
            <span style={{ color: "var(--gold)" }}>.</span>
          </Link>

          <Link
            href="/"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              color: "var(--text)",
              opacity: 0.85,
            }}
          >
            ← Back to home
          </Link>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 130 }}>
        <div className="wrap">
          <span className="eyebrow">Full Portfolio</span>

          <h1 className="h-section">All projects &amp; case studies</h1>

          <p className="sub">
            Every automation system, AI agent and web build I&apos;ve delivered —
            filter by category to explore.
          </p>

          <div className="filters">
            {projectCategories.map((c) => (
              <button
                key={c}
                className={`filter ${filter === c ? "active" : ""}`}
                onClick={() => changeFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="proj-grid">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <ProjectCard
                  key={`${p.cat}-${p.t}`}
                  p={p}
                  onClick={() => setActive(p)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <ProjectModal
            active={active}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}