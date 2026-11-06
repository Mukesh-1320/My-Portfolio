import { motion, MotionConfig } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  {
    title: "Multi-Vendor E-Commerce Platform",
    type: "Full-stack",
    description:
      "A marketplace where users open their own stores and sell products online, with admin approval for every new store. Includes secure payments and image handling.",
    tech: [
      "Next.js",
      "PostgreSQL (Neon)",
      "Clerk",
      "Stripe",
      "Inngest",
      "ImageKit",
    ],
    image: "/projects/gocart.png",
    github: "https://github.com/Mukesh-1320/gocart",
    live: "https://gocart-chi-pearl.vercel.app",
  },
  {
    title: "Real-Time Chat App",
    type: "Full-stack",
    description:
      "A real-time chat application built with the MERN stack and WebSockets.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/projects/project1.png",
    github: "https://github.com/Mukesh-1320/Chat-App",
    live: "https://chat-app-orcin-mu-19.vercel.app/login",
  },
  {
    title: "Tour and Travel",
    type: "Frontend",
    description:
      "A responsive travel website with a modern interface and smooth experience.",
    tech: ["HTML/CSS", "Bootstrap", "JavaScript"],
    image: "/projects/project2.png",
    github: "https://github.com/Mukesh-1320/Tour.github.io",
    live: "https://mukesh-1320.github.io/Tour.github.io/",
  },
  {
    title: "Portfolio Website",
    type: "Frontend",
    description:
      "This portfolio: an animated, responsive site with light and dark themes.",
    tech: ["React.js", "Tailwind", "Framer Motion"],
    image: "/projects/project3.png",
    github: "https://github.com/Mukesh-1320/My-Portfolio",
    live: "https://my-portfolio-pi-six-ot0npg87dk.vercel.app/",
  },
];

const displayUrl = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const ProjectCard = ({ project, featured = false }) => (
  <motion.article variants={item} className="min-w-0">
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-[border-color,box-shadow] duration-300"
    >
      {/* Accent line that grows across the top on hover */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 z-10 h-0.5 w-0 bg-linear-to-r from-primary to-highlight transition-all duration-500 group-hover:w-full"
      />

      {/* Screenshot inside a browser frame */}
      <div className="p-3">
        <div className="overflow-hidden rounded-xl border border-border bg-muted">
          <div className="flex items-center gap-3 px-3 py-2 border-b border-border">
            <div className="flex shrink-0 gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>
            <span className="flex-1 min-w-0 truncate rounded-md bg-background/60 px-3 py-0.5 text-xs text-muted-foreground">
              {displayUrl(project.live)}
            </span>
          </div>
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col p-5 pt-3 sm:p-6 sm:pt-3">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {featured && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Featured project
            </span>
          )}
          <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            {project.type}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors wrap-break-word">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons are always visible, so they work on touch screens too */}
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:scale-105"
          >
            Live demo
            <ArrowUpRight size={16} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            <FaGithub size={16} />
            Source code
          </a>
        </div>
      </div>
    </motion.div>
  </motion.article>
);

export const Projects = () => {
  return (
    <MotionConfig reducedMotion="user">
      <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-1/3 -right-24 w-md h-112 rounded-full bg-primary/10 blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <motion.h2
              variants={item}
              className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-foreground"
            >
              Projects I&apos;ve built and shipped,
              <span className="block bg-linear-to-r from-primary to-highlight bg-clip-text text-transparent">
                all live and ready to try.
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-muted-foreground leading-relaxed max-w-md lg:justify-self-end"
            >
              A selection of my recent work across full-stack apps and modern
              interfaces. Every project has a live demo and open source code.
            </motion.p>
          </motion.div>

          {/* Cards: 1 per row on phones, 2 per row on larger screens */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                featured={idx === 0}
              />
            ))}
          </motion.div>

          {/* More on GitHub */}
          <div className="mt-12 text-center">
            <a
              href="https://github.com/Mukesh-1320"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <FaGithub size={18} />
              See more on GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};