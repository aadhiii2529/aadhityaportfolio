
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Intro */}
          <div>
            <a href="#home" className="text-lg font-semibold text-dark">
              portfolio<span className="text-accent">.</span>
            </a>
            <p className="mt-4 text-neutral">
              Creating thoughtful digital experiences that help brands stand out and connect with their users.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <h3 className="text-sm font-medium text-dark uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral hover:text-accent transition-colors"
                  >
                    {item}
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
                href="#"
                className="text-neutral hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-neutral">
          <p>© {new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
