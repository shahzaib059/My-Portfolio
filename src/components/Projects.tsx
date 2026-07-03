"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";
import type { Project } from "@/lib/types";
import { ProjectCard, ProjectModal } from "./projects/shared";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  // sirf featured projects, max 6
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Selected Work</span>
          <h2 className="h-section">Projects &amp; case studies</h2>
          <p className="sub">
            A selection of automation systems, AI agents and web builds delivered for real businesses.
          </p>
        </Reveal>

        <motion.div layout className="proj-grid" style={{ marginTop: 36 }}>
          <AnimatePresence mode="popLayout">
            {featured.map((p) => (
              <ProjectCard key={p.t} p={p} onClick={() => setActive(p)} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
          <Link href="/projects" className="btn btn-ghost">
            View All Projects ↗
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal active={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
