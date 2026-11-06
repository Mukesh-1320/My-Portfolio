import { useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  SiGit,
  SiGithubactions,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

// `color: null` uses the normal text colour (for black or white logos)
const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: null },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Vercel", icon: SiVercel, color: null },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
];

const skillsReversed = [...skills].reverse();

// Icons that orbit the photo, spread evenly around the ring
const orbitNames = ["React", "TypeScript", "Node.js", "MongoDB", "Next.js"];
const orbitItems = orbitNames.map((name, i) => {
  const skill = skills.find((s) => s.name === name);
  const angle = ((-90 + i * (360 / orbitNames.length)) * Math.PI) / 180;
  return {
    skill,
    left: 50 + 50 * Math.cos(angle),
    top: 50 + 50 * Math.sin(angle),
  };
});

const socials = [
  { icon: FaGithub, href: "https://github.com/Mukesh-1320", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mukeshkumar1320/",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

const SliderCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className="shrink-0 pr-4">
      <div className="group flex items-center gap-3 rounded-2xl glass px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-muted transition-transform duration-300 group-hover:scale-110">
          <Icon
            className="h-5 w-5"
            style={skill.color ? { color: skill.color } : undefined}
            aria-hidden="true"
          />
        </span>
        <span className="whitespace-nowrap font-semibold text-foreground">
          {skill.name}
        </span>
      </div>
    </div>
  );
};

// One row of the slider. The list is doubled so the loop has no gap.
const SliderRow = ({ items, reverse = false }) => (
  <div className={`slider-track ${reverse ? "slider-track-reverse" : ""}`}>
    {[...items, ...items].map((skill, idx) => (
      <div key={`${skill.name}-${idx}`} aria-hidden={idx >= items.length}>
        <SliderCard skill={skill} />
      </div>
    ))}
  </div>
);

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
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
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

              <AnimatedBorderButton
                href="/my-resume.pdf"
                download="my-resume.pdf"
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
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

          {/* Right column: round photo with orbiting tech icons */}
          <div className="animate-fade-in animation-delay-300">
            <div className="orbit-wrap relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-sm">
              {/* Glow behind the photo */}
              <div
                className="absolute inset-[16%] rounded-full bg-primary/30 blur-3xl"
                aria-hidden="true"
              />

              {/* Thin static ring */}
              <div
                className="absolute inset-[12%] rounded-full border border-border"
                aria-hidden="true"
              />

              {/* Orbit: dashed ring and the icons spinning around it */}
              <div className="orbit absolute inset-6">
                <div
                  className="absolute inset-0 rounded-full border border-dashed border-primary/40"
                  aria-hidden="true"
                />

                {orbitItems.map(({ skill, left, top }) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${left}%`, top: `${top}%` }}
                    >
                      <div
                        className="orbit-counter grid h-10 w-10 place-items-center rounded-xl glass-strong shadow-lg"
                        title={skill.name}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={skill.color ? { color: skill.color } : undefined}
                          aria-label={skill.name}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Photo */}
              <div className="absolute inset-[16%] rounded-full bg-linear-to-br from-primary to-highlight p-1 shadow-2xl shadow-primary/30">
                <img
                  src="/profile-photo.jpg"
                  alt="Portrait of Mukesh Kumar"
                  className="h-full w-full rounded-full object-cover object-top ring-4 ring-background"
                />
              </div>

              {/* Status pill */}
              <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap rounded-full glass-strong px-4 py-2.5">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping motion-reduce:animate-none" />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-500" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  Available for work
                </span>
                <span className="border-l border-border pl-3 text-sm">
                  <span className="font-bold text-primary">1+</span>{" "}
                  <span className="text-xs text-muted-foreground">yr exp.</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech slider: two rows moving in opposite directions */}
        <div
          className="mt-16 animate-fade-in animation-delay-600"
          role="region"
          aria-label="Technologies I work with"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-border" />
            <p className="text-sm font-medium text-muted-foreground">
              Tools I work with
            </p>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="slider slider-mask space-y-4 overflow-hidden py-1">
            <SliderRow items={skills} />
            <SliderRow items={skillsReversed} reverse />
          </div>
        </div>
      </div>
    </section>
  );
};