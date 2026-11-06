import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [indicator, setIndicator] = useState({ left: 0, width: 0, show: false });

  const linkRefs = useRef({});
  const progressRef = useRef(null);

  // Scroll state + reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 40);

      // No section is active while the hero is on screen
      if (y < 200) setActiveLink("");

      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${Math.min(y / max, 1)})`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section: the one crossing the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Slide the highlight pill under the active link
  useEffect(() => {
    const measure = () => {
      const el = linkRefs.current[activeLink];
      if (el) {
        setIndicator({ left: el.offsetLeft, width: el.offsetWidth, show: true });
      } else {
        setIndicator((prev) => ({ ...prev, show: false }));
      }
    };

    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeLink, isScrolled]);

  // Close the mobile menu with Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4">
      {/* Reading progress */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 h-0.75 w-full origin-left bg-primary"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />

      {/* Bar: full width at the top, a floating pill after scrolling */}
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
          isScrolled
            ? "mt-3 max-w-5xl rounded-full glass-strong px-3 py-2"
            : "mt-0 max-w-7xl px-2 py-5"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
          aria-label="Mukesh Kumar, back to top"
        >
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg transition-transform duration-300 group-hover:rotate-6">
            M
          </span>
          <span className="hidden sm:block font-display font-semibold tracking-tight text-foreground">
            Mukesh Kumar
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Main"
          className={`hidden md:flex relative items-center gap-1 rounded-full p-1 transition-colors duration-500 ${
            isScrolled ? "" : "glass"
          }`}
        >
          {/* Sliding highlight */}
          <span
            aria-hidden="true"
            className="absolute top-1 bottom-1 rounded-full bg-primary transition-all duration-300 ease-out"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.show ? 1 : 0,
            }}
          />

          {navLinks.map((link) => (
            <button
              key={link.href}
              ref={(el) => (linkRefs.current[link.href] = el)}
              onClick={() => scrollToSection(link.href)}
              aria-current={activeLink === link.href ? "true" : undefined}
              className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeLink === link.href
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("#contact")} size="sm">
              Contact Me
            </Button>
          </div>

          <button
            className="md:hidden p-2.5 rounded-full glass text-foreground"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mx-auto mt-2 max-w-5xl rounded-3xl glass-strong animate-fade-in">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection(link.href);
                }}
                aria-current={activeLink === link.href ? "true" : undefined}
                className={`flex items-center justify-between text-left text-lg px-4 py-3 rounded-2xl transition-colors ${
                  activeLink === link.href
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <span className="w-2 h-2 rounded-full bg-primary" />
                )}
              </button>
            ))}

            <div className="pt-3">
              <Button
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("#contact");
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};