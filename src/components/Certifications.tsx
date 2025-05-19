
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

const certifications: Certification[] = [
  {
    title: "Python Programming",
    issuer: "Coursera",
    date: "March 2023",
    description: "Comprehensive course covering Python fundamentals, data structures, and application development.",
    link: "#"
  },
  {
    title: "Git and Version Control",
    issuer: "GitHub Learning Lab",
    date: "January 2023",
    description: "Mastery of Git workflows, branching strategies, and collaborative development practices.",
    link: "#"
  },
  {
    title: "Communication Networking Fundamentals",
    issuer: "Cisco Learning Network",
    date: "November 2022",
    description: "In-depth study of network protocols, architecture, and troubleshooting methodologies.",
    link: "#"
  },
  {
    title: "IoT Systems Architecture",
    issuer: "IBM",
    date: "August 2022",
    description: "Advanced course on designing and implementing Internet of Things ecosystems and applications.",
    link: "#"
  }
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={cn(
            "transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className={cn(
                  "transition-all transform",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-accent mr-2" />
                    <h3 className="font-semibold text-lg">{cert.title}</h3>
                  </div>
                  {cert.link && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0" asChild>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">View Certificate</span>
                      </a>
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-neutral mb-2">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm text-neutral">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
