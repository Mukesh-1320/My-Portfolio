import { useRef } from "react";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Vercel",
  "Tailwind CSS",
  "Git",
  "GitHub Actions",
];

const socials = [
  { icon: FaGithub, href: "https://github.com/Mukesh-1320", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mukeshkumar1320/",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

export const Hero = () => {
  const sectionRef = useRef(null);

  // Moves the glowing part of the dot grid to follow the pointer.
  const handlePointerMove = (e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Optional photo, dark mode only */}
        <img
          src="/hero-bg.jpg"
          alt=""
          className="hidden dark:block w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 hero-wash" />
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0 hero-grid-lit" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <span className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Full-stack and React developer
            </span>

            <div className="space-y-6">
              <h1 className="animate-fade-in animation-delay-100 font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.08] text-foreground">
                Web apps built with care,
                <span className="block text-muted-foreground">
                  from database to browser.
                </span>
              </h1>

              <p className="animate-fade-in animation-delay-200 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Hi, I&apos;m Mukesh Kumar, a full-stack developer and MCA
                graduate. I use React, Next.js, TypeScript, Node.js and MongoDB
                to build fast, scalable products that are easy to use.
              </p>
            </div>

            {/* CTAs */}
            <div className="animate-fade-in animation-delay-300 flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact me <ArrowRight className="w-5 h-5" />
              </Button>

              <a href="/my-resume.pdf" download="my-resume.pdf">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-in animation-delay-400 flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Find me on</span>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full glass text-foreground/80 hover:text-primary hover:border-primary/50 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right column: profile in an arch frame */}
          <div className="animate-fade-in animation-delay-300 relative">
            <div className="relative mx-auto w-full max-w-72 sm:max-w-80 lg:max-w-88">
              {/* Soft glow under the frame, kept inside its width */}
              <div
                className="absolute inset-x-8 -bottom-3 h-20 rounded-full bg-primary/30 blur-3xl"
                aria-hidden="true"
              />

              {/* Frame */}
              <div className="relative rounded-t-full rounded-b-3xl p-2 glass glow-border">
                <div className="relative overflow-hidden rounded-t-full rounded-b-2xl">
                  <img
                    src="/profile-photo.jpg"
                    alt="Portrait of Mukesh Kumar"
                    className="w-full aspect-4/5 object-cover object-top"
                  />

                  {/* Dark fade so the info bar stays readable */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/50 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Info bar, inside the photo */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl glass-strong px-3.5 py-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex w-2.5 h-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping motion-reduce:animate-none" />
                        <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-500" />
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        Available for work
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1 border-l border-border pl-3">
                      <span className="text-base font-bold text-primary">
                        1+
                      </span>
                      <span className="text-xs text-muted-foreground">
                        yr exp.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills marquee */}
        <div className="mt-24 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Tools I work with
          </p>
          <div className="marquee marquee-mask overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="shrink-0 px-8 py-3"
                  aria-hidden={idx >= skills.length}
                >
                  <span className="text-xl font-semibold text-foreground/35 hover:text-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 hidden md:block">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-wide">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};