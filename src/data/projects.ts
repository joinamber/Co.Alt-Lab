
import { Brain, Podcast, Package, Wrench } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: any;
  ctaText: string;
  ctaLink: string;
}

export const projects: Project[] = [
  {
    id: "hyperpersona",
    title: "Hyperpersona",
    description: "Mapping human decision patterns through AI-driven behavioral segmentation.",
    category: "Behavioral Systems",
    icon: Brain,
    ctaText: "AI-Powered Persona Builder",
    ctaLink: "/projects/hyperpersona",
  },
  {
    id: "adaptive-erp",
    title: "Adaptive ERP",
    description: "Reimagining ERP systems with AI-native workflows for leaner, smarter operations.",
    category: "Business Enablers",
    icon: Package,
    ctaText: "Enterprise AI Builder",
    ctaLink: "/projects/adaptive-erp",
  },
  {
    id: "contrarian-economist",
    title: "The Contrarian Economist",
    description: "A podcast unearthing overlooked data and counterintuitive truths shaping the modern economy with AI hosts.",
    category: "Creative Endeavors",
    icon: Podcast,
    ctaText: "Listen on Spotify",
    ctaLink: "https://open.spotify.com",
  },
  {
    id: "agentic-infrastructure",
    title: "Agentic Infrastructure",
    description: "Authenticating AI agents for secure transactions and delegated action — the trust layer for an agentic future.",
    category: "Business Enablers",
    icon: Wrench,
    ctaText: "View the pitch deck",
    ctaLink: "/projects/agentic-infrastructure",
  },
];
