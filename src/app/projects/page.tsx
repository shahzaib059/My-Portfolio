import type { Metadata } from "next";
import { site } from "@/data/site";
import ProjectsArchive from "@/components/ProjectsArchive";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description:
    "Full portfolio of automation systems, AI agents, GoHighLevel builds and web development projects delivered for real businesses.",
};

export default function ProjectsPage() {
  return <ProjectsArchive />;
}
