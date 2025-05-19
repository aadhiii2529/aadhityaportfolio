
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    title: "IoT Development Intern",
    company: "TechSolutions Ltd.",
    period: "May 2023 - July 2023",
    description: "Contributed to the development of IoT solutions for smart home applications.",
    responsibilities: [
      "Designed and implemented sensor integration using Arduino and Raspberry Pi",
      "Developed data processing algorithms for real-time analytics",
      "Collaborated with a team of 5 developers to create a mobile application dashboard",
      "Documented system architecture and implementation guidelines"
    ]
  },
  {
    title: "Project Management Trainee",
    company: "InnovateX",
    period: "December 2022 - February 2023",
    description: "Assisted in managing technology projects with focus on timeline and resource optimization.",
    responsibilities: [
      "Coordinated communication between development and client teams",
      "Created project progress reports and risk assessments",
      "Participated in sprint planning and retrospective meetings",
      "Helped implement agile methodologies for improved productivity"
    ]
  }
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 px-4">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
          
          <div className="relative border-l border-accent pl-8 ml-4 space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title} 
                className={cn(
                  "relative transition-all",
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-12 mt-1.5">
                  <div className="h-7 w-7 rounded-full border-2 border-accent bg-white flex items-center justify-center">
                    <Briefcase className="h-3 w-3 text-accent" />
                  </div>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-1 mb-3">
                    <span className="font-medium text-dark">{exp.company}</span>
                    <div className="flex items-center text-sm text-neutral">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-neutral mb-4">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 mr-2"></span>
                          <span className="text-neutral">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
