
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with intuitive user experience and seamless checkout process.",
    tags: ["React", "Tailwind", "Stripe", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1064&auto=format&fit=crop",
  },
  {
    title: "Portfolio Website",
    description: "A minimal and elegant portfolio website for a professional photographer.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1064&auto=format&fit=crop",
  },
  {
    title: "Mobile Banking App",
    description: "A user-friendly mobile banking application with advanced security features.",
    tags: ["React Native", "Redux", "Firebase"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1064&auto=format&fit=crop",
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for social media analytics and management.",
    tags: ["Vue.js", "Chart.js", "Express"],
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1074&auto=format&fit=crop",
  },
];

const Index = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: projectsHeadingRef, isVisible: projectsHeadingVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div 
            ref={aboutRef as React.RefObject<HTMLDivElement>}
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700",
              aboutVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-neutral">
                <p>
                  Hi there! I'm a passionate designer and developer focused on creating beautiful, functional digital experiences.
                </p>
                <p>
                  With over 5 years of experience in the industry, I've worked with clients ranging from startups to established companies to deliver projects that not only look great but also meet business objectives.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving to build websites and applications that stand out in today's digital landscape.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-lg shadow-sm border border-border">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-neutral text-sm">Years of Experience</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-border">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-neutral text-sm">Projects Completed</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-border">
                <div className="text-3xl font-bold text-accent mb-2">30+</div>
                <div className="text-neutral text-sm">Happy Clients</div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm border border-border">
                <div className="text-3xl font-bold text-accent mb-2">12+</div>
                <div className="text-neutral text-sm">Awards Received</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
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
              A selection of my recent work across different industries and technologies.
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
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
