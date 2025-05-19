
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for header style and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || "";
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  // Smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
      
      // Update URL without reloading page
      window.history.pushState({}, "", href);
      
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="text-lg font-semibold text-dark">
          aadhitya<span className="text-accent">.</span>
        </a>

        {/* Desktop Navigation with active indicators */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    "transition-all duration-300 relative py-2 px-1 group",
                    activeSection === link.href.substring(1) 
                      ? "text-dark font-medium" 
                      : "text-neutral hover:text-dark"
                  )}
                >
                  {link.name}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left transform transition-transform duration-300",
                      activeSection === link.href.substring(1) 
                        ? "scale-x-100" 
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  ></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Enhanced Mobile Menu with animations */}
        <div
          className={cn(
            "fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-all duration-500",
            mobileMenuOpen 
              ? "opacity-100 visible" 
              : "opacity-0 invisible pointer-events-none"
          )}
        >
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform transition-transform hover:rotate-90 duration-300"
            >
              <path d="M18 6L6 18"></path>
              <path d="M6 6L18 18"></path>
            </svg>
          </Button>
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <li 
                key={link.name}
                className={cn(
                  "transform transition-transform duration-500",
                  mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={cn(
                    "text-2xl font-medium transition-colors duration-300",
                    activeSection === link.href.substring(1) 
                      ? "text-accent" 
                      : "text-dark hover:text-accent"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
