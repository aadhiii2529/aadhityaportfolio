
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Page transition effect
  useEffect(() => {
    // Add fade-in animation to all sections when the page loads
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      section.classList.add('section-transition');
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Smooth scrolling for all anchor links
  useEffect(() => {
    // Prevent this from being applied to navigation links (they have their own handling)
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#') && !anchor.closest('nav')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Add animated background shapes on hover
  useEffect(() => {
    const createRandomShapes = () => {
      const colors = ['bg-coral/10', 'bg-sand/20', 'bg-navy/10', 'bg-cream/50'];
      const shapes = ['rounded-full', 'rounded-md', 'rounded-lg'];
      
      document.querySelectorAll('section').forEach(section => {
        section.addEventListener('mouseenter', () => {
          const shapeCount = Math.floor(Math.random() * 2) + 2; // 2-3 shapes
          
          for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            const size = Math.floor(Math.random() * 100) + 100; // 100-200px
            const color = colors[Math.floor(Math.random() * colors.length)];
            const shapeClass = shapes[Math.floor(Math.random() * shapes.length)];
            
            // Position and style
            shape.className = `absolute pointer-events-none ${color} ${shapeClass} animate-float-reverse blur-md`;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.left = `${Math.random() * 80}%`;
            shape.style.top = `${Math.random() * 80}%`;
            shape.style.animationDelay = `${Math.random() * 2}s`;
            shape.style.animationDuration = `${Math.random() * 4 + 6}s`;
            shape.style.opacity = '0.3';
            shape.style.zIndex = '-1';
            
            // Add and remove after animation
            section.appendChild(shape);
            
            setTimeout(() => {
              shape.remove();
            }, 8000);
          }
        });
      });
    };
    
    createRandomShapes();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Projects Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-lines opacity-20"></div>
        <Projects />
      </div>
      
      {/* Skills Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-20"></div>
        <Skills />
      </div>
      
      {/* Experience Section */}
      <Experience />
      
      {/* Education Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-lines opacity-20"></div>
        <Education />
      </div>
      
      {/* Certifications Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <Certifications />
      </div>
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
