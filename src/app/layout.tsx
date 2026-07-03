import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Outfit({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"] });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body", weight: ["400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

const title = `${site.name} — Automation Specialist & AI Workflow Developer`;
const description =
  "Automation Specialist, GoHighLevel Expert and AI Workflow Developer. I build CRMs, workflow automations, AI agents and conversion-focused funnels for businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: ["GoHighLevel", "automation", "n8n", "Zapier", "Make", "AI agents", "workflow automation", "CRM setup", "funnels"],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: site.url,
    title,
    description: "I design CRMs, workflow automations and AI agents that run businesses on autopilot.",
    images: [`https://placehold.co/1200x630/0E0C1A/7C5CFF?text=${encodeURIComponent(site.name)}`],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Automation Specialist & AI Workflow Developer",
  knowsAbout: ["GoHighLevel", "Workflow Automation", "n8n", "Zapier", "Make", "AI Agents", "CRM"],
  sameAs: [site.socials.github, site.socials.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}



