"use client";

import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" }, // ✅ added here also
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // 🔥 Active link highlight
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section, i) => {
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveLink(navLinks[i].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Scroll function
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        
        {/* 🔥 Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          MUKESH<span className="text-primary">.</span>
        </a>

        {/* 💻 Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 text-sm rounded-full transition ${
                  activeLink === link.href
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* 🚀 CTA Button */}
        <div className="hidden md:block">
          <Button onClick={() => scrollToSection("#contact")} size="sm">
            Contact Me
          </Button>
        </div>

        {/* 📱 Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* 📱 Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection(link.href);
                }}
                className={`text-left text-lg py-2 transition ${
                  activeLink === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* 🔥 Mobile CTA */}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToSection("#contact");
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};