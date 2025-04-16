
import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
}

const ProjectCard = ({ icon: Icon, title, description, href, className }: ProjectCardProps) => {
  return (
    <a 
      href={href}
      className={cn(
        "block transition-all duration-200 hover:scale-[1.02] focus:scale-[1.02]",
        "focus:outline-none focus:ring-2 focus:ring-primary",
        "rounded-lg",
        className
      )}
    >
      <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="rounded-full p-2 bg-primary/10">
            <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </a>
  );
};

export default ProjectCard;
