
import { Brain, Package, Podcast, Wrench, Brush, Sprout } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: any;
  projectUrl: string;
  screenshot: string;
}

export const projects: Project[] = [
  {
    id: "hyperpersona",
    title: "Hyperpersona",
    description: "Mapping human decision patterns through AI-driven behavioral segmentation.",
    category: "Behavioral Systems",
    icon: Brain,
    projectUrl: "https://hyperpersona.cc/",
    screenshot: "/lovable-uploads/84421171-7f95-4bdc-84a0-c23968b503e2.png",
  },
  {
    id: "adaptive-erp",
    title: "Adaptive ERP",
    description: "Reimagining ERP systems with AI-native workflows for leaner, smarter operations.",
    category: "Business Enablers",
    icon: Package,
    projectUrl: "https://adptv.xyz/",
    screenshot: "/lovable-uploads/fd71f1b7-372a-44a8-949f-776f3416f08b.png",
  },
  {
    id: "contrarian-economist",
    title: "The Contrarian Economist",
    description: "A podcast unearthing overlooked data and counterintuitive truths shaping the modern economy with AI hosts.",
    category: "Creative Endeavors",
    icon: Podcast,
    projectUrl: "https://open.spotify.com/show/5qMwiP1Ismiv6lvJ02exns",
    screenshot: "/lovable-uploads/5098e9cf-3058-4da7-8866-cacacf1c8e7a.png",
  },
  {
    id: "agentic-infrastructure",
    title: "Agentic Infrastructure",
    description: "Authenticating AI agents for secure transactions and delegated action — the trust layer for an agentic future.",
    category: "Business Enablers",
    icon: Wrench,
    projectUrl: "https://kyan.coaltlab.com/",
    screenshot: "/lovable-uploads/a87bb7b5-86cd-489e-bb89-b63dad59f4c4.png",
  },
  {
    id: "vibecraft",
    title: "VibeCraft",
    description: "Cohort-based learning to bring your ideas to life, no coding skill required.",
    category: "Learning & Education",
    icon: Brush,
    projectUrl: "https://vibecraft.coaltlab.com/",
    screenshot: "/lovable-uploads/7e75da8c-94c5-4e1b-841c-a7e61a64c83f.png",
  },
  {
    id: "dayofaisingapore",
    title: "Day of AI Singapore",
    description: "AI Education for Bold Young Learners.",
    category: "Learning & Education",
    icon: Sprout,
    projectUrl: "https://www.dayofaisingapore.com/",
    screenshot: "/lovable-uploads/494cf410-3ee5-4ece-8c3d-79f625d67e8a.png",
  },
];
