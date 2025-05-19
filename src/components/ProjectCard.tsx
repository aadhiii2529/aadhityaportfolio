
import React from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "group rounded-lg overflow-hidden bg-white border border-border transition-all duration-500 transform",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay * 0.1}s` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-colors duration-300 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <Button size="sm" variant="outline" className="bg-white">
            View Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-dark group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-neutral mt-2 line-clamp-2">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-background text-neutral text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
