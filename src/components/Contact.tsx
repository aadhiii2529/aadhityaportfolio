
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, User } from "lucide-react";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cn(
          "container mx-auto max-w-4xl transition-all duration-700",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        )}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-neutral max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral" />
                  <Input id="name" placeholder="Your name" className="pl-10" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral" />
                  <Input id="email" type="email" placeholder="Your email" className="pl-10" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
              </div>
              
              <Button className="w-full bg-dark text-white hover:bg-dark/90">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-neutral">
                Fill out the form and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-sm">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-neutral">Email</p>
                  <p className="font-medium">hello@yourportfolio.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full shadow-sm">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-neutral">Phone</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
