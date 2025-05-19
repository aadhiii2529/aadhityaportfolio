
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "IoT-based Water Level Detection System",
    description: "Designed and implemented an automated system to monitor water levels in tanks using ultrasonic sensors, Arduino, and cloud integration for real-time monitoring and alerts.",
    tags: ["IoT", "Arduino", "Cloud", "Sensors"],
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22732f9e34?q=80&w=1064&auto=format&fit=crop",
  },
  {
    title: "Agro Dehydrator using Hybrid Solar Power",
    description: "Developed an energy-efficient agricultural dehydrator powered by hybrid solar technology, optimizing the drying process and reducing energy consumption for rural farmers.",
    tags: ["Solar Energy", "Agriculture Tech", "Sustainable Design"],
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1064&auto=format&fit=crop",
  },
  {
    title: "Smart Home Automation System",
    description: "Created a comprehensive home automation solution allowing users to control lighting, temperature, and security systems through a mobile application with voice commands.",
    tags: ["IoT", "Mobile App", "Voice Recognition"],
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1064&auto=format&fit=crop",
  },
  {
    title: "Communication Network Analyzer",
    description: "Developed a tool to analyze network traffic, identify bottlenecks, and optimize performance for enterprise communication networks using machine learning algorithms.",
    tags: ["Networking", "Python", "Machine Learning"],
    imageUrl: "https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=1064&auto=format&fit=crop",
  },
];

const Projects = () => {
  const { ref: projectsHeadingRef, isVisible: projectsHeadingVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div 
          ref={projectsHeadingRef as React.RefObject<HTMLDivElement>}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            projectsHeadingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-neutral max-w-lg mx-auto">
            A selection of my notable projects showcasing my technical skills and problem-solving approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
