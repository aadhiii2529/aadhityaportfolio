
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 px-4 bg-background">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Education</h2>
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="bg-accent/10 p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                  <GraduationCap className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold">SNS College of Engineering</h3>
                  <p className="text-neutral mt-2">B.E. Electronics and Communication Engineering</p>
                  <div className="flex items-center mt-4 text-sm text-neutral">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2020 - 2024</span>
                  </div>
                </div>
                
                <div className="p-6 md:w-2/3">
                  <div className="mb-4">
                    <h4 className="text-lg font-medium">Academic Performance</h4>
                    <div className="mt-2 bg-gray-100 rounded-full h-2.5 dark:bg-gray-700">
                      <div 
                        className="bg-accent h-2.5 rounded-full" 
                        style={{ width: '78%' }}
                      ></div>
                    </div>
                    <p className="text-right text-sm mt-1">CGPA: 7.8/10</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2">Key Learnings</h4>
                    <ul className="space-y-2 text-neutral">
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 mr-2"></span>
                        <span>Specialized in IoT system architecture and implementation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 mr-2"></span>
                        <span>Strong foundation in electronics, communication systems, and signal processing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 mr-2"></span>
                        <span>Project-based learning with focus on real-world applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
