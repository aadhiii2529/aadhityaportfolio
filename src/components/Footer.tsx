
import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Intro */}
          <div>
            <a href="#home" className="text-lg font-semibold text-dark">
              aadhitya<span className="text-accent">.</span>
            </a>
            <p className="mt-4 text-neutral">
              Electronics and Communication Engineer passionate about IoT, AI, and creating innovative solutions for real-world problems.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <h3 className="text-sm font-medium text-dark uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Education", href: "#education" },
                { name: "Certifications", href: "#certifications" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-neutral hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:text-right">
            <h3 className="text-sm font-medium text-dark uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-4 md:justify-end">
              <a
                href="https://github.com/yourusername"
                className="text-neutral hover:text-accent transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className="text-neutral hover:text-accent transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:aadhitya@example.com"
                className="text-neutral hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+919876543210"
                className="text-neutral hover:text-accent transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-neutral">
          <p>© {currentYear} Aadhitya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
