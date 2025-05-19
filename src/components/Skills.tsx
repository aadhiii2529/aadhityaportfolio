
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Code, Settings, Users, Layers } from "lucide-react";

type Skill = {
  name: string;
  proficiency: number;
};

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const technicalSkills: Skill[] = [
    { name: "Python", proficiency: 85 },
    { name: "Java", proficiency: 75 },
    { name: "IoT Development", proficiency: 90 },
    { name: "Git", proficiency: 80 },
    { name: "Circuit Design", proficiency: 85 },
    { name: "Communication Networking", proficiency: 75 },
  ];
  
  const softSkills = [
    "Team Management",
    "Adaptability",
    "Problem Solving",
    "Project Management",
    "Communication",
    "Critical Thinking"
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent animate-float-reverse blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-primary/30 animate-float blur-3xl"></div>
      </div>
      
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cn(
          "container mx-auto max-w-4xl transition-all duration-700 relative z-10",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="transform transition-all duration-700" style={{ transitionDelay: "200ms" }}>
            <div className="flex items-center mb-6">
              <Code className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-neutral text-sm">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-1500 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.proficiency}%` : "0%",
                        transitionDelay: `${index * 150 + 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="transform transition-all duration-700" style={{ transitionDelay: "400ms" }}>
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-2xl font-semibold">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={skill} 
                  className={cn(
                    "bg-background rounded-lg p-4 flex items-center border border-border transition-all hover:border-accent hover:shadow-lg hover:-translate-y-1",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  )}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className={cn(
          "mt-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )} style={{ transitionDelay: "600ms" }}>
          <div className="flex items-center mb-8 justify-center">
            <Settings className="h-6 w-6 text-accent mr-3" />
            <h3 className="text-2xl font-semibold">Tools & Technologies</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "Java", "IoT Devices", "Arduino", "Raspberry Pi", "Git", "Circuit Design", "Communication Networks"].map((tech, index) => (
              <span 
                key={tech} 
                className={cn(
                  "px-4 py-2 bg-background rounded-full text-sm font-medium border border-border hover:border-accent transition-all duration-300 hover:shadow-md hover:-translate-y-1",
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}
                style={{ transitionDelay: `${index * 80 + 600}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
