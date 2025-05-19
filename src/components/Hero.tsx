
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/10 animate-rotate-slow blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/20 animate-pulse blur-2xl"></div>
      <div className="absolute top-40 left-20 w-20 h-20 rounded-full bg-primary/10 animate-float blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-primary/15 animate-float-reverse blur-xl"></div>
      
      {/* Animated particles */}
      <div className="particles-container absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle absolute rounded-full bg-accent/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-random ${Math.random() * 10 + 10}s infinite ease-in-out`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto text-center z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Main Heading with enhanced animations */}
          <h1
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark max-w-3xl leading-tight"
          >
            <span className="relative overflow-hidden inline-block mr-2">
              <span
                className={cn(
                  "inline-block",
                  headingVisible ? "animate-text-reveal" : "opacity-0"
                )}
              >
                Hey, I'm
              </span>
            </span>
            <span className="relative overflow-hidden inline-block">
              <span
                className={cn(
                  "inline-block text-gradient reveal-delay-2",
                  headingVisible ? "animate-text-reveal" : "opacity-0"
                )}
              >
                Aadhitya
              </span>
            </span>
          </h1>

          {/* Subtitle with enhanced animation */}
          <p
            ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
            className={cn(
              "text-neutral max-w-xl text-lg md:text-xl",
              subtitleVisible ? "animate-fade-in-up reveal-delay-3" : "opacity-0"
            )}
          >
            Electronics and Communication Engineer passionate about IoT, AI, and project management. Turning innovative ideas into impactful solutions.
          </p>

          {/* CTA with staggered animations */}
          <div
            ref={ctaRef as React.RefObject<HTMLDivElement>}
            className={cn(
              "flex flex-col sm:flex-row gap-4 items-center",
              ctaVisible ? "animate-fade-in reveal-delay-4" : "opacity-0"
            )}
          >
            <Button size="lg" className="bg-dark text-white hover:bg-dark/90 hover:scale-105 transition-all duration-300" asChild>
              <a href="#projects">View my projects</a>
            </Button>
            <Button size="lg" variant="outline" className="group hover:scale-105 transition-all duration-300" asChild>
              <a href="#contact">
                Contact me
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            
            <div className="flex gap-4 ml-2">
              <Button size="icon" variant="ghost" className="rounded-full hover:scale-110 transition-all duration-300 hover:bg-dark/5" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:scale-110 transition-all duration-300 hover:bg-dark/5" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in reveal-delay-5">
          <span className="text-sm text-neutral mb-2 animate-pulse">Scroll</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-neutral/50 to-transparent relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-scroll-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
