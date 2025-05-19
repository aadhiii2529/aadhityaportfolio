
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/10 animate-rotate-slow blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-accent/20 animate-pulse blur-2xl"></div>

      <div className="container mx-auto text-center z-10">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Main Heading */}
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
                Creating
              </span>
            </span>
            <span className="relative overflow-hidden inline-block mr-2">
              <span
                className={cn(
                  "inline-block reveal-delay-1",
                  headingVisible ? "animate-text-reveal" : "opacity-0"
                )}
              >
                digital
              </span>
            </span>
            <span className="relative overflow-hidden inline-block">
              <span
                className={cn(
                  "inline-block text-gradient reveal-delay-2",
                  headingVisible ? "animate-text-reveal" : "opacity-0"
                )}
              >
                experiences
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
            className={cn(
              "text-neutral max-w-xl text-lg md:text-xl",
              subtitleVisible ? "animate-fade-in reveal-delay-3" : "opacity-0"
            )}
          >
            I design and develop websites and applications that deliver exceptional user experiences with clean aesthetics and intuitive functionality.
          </p>

          {/* CTA */}
          <div
            ref={ctaRef as React.RefObject<HTMLDivElement>}
            className={cn(
              "flex flex-col sm:flex-row gap-4 items-center",
              ctaVisible ? "animate-fade-in reveal-delay-4" : "opacity-0"
            )}
          >
            <Button size="lg" className="bg-dark text-white hover:bg-dark/90">
              View my work
            </Button>
            <Button size="lg" variant="outline" className="group">
              Contact me
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-neutral mb-2">Scroll</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-neutral/50 to-transparent relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-bounce-subtle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
