"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// 🔥 Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// 🔥 Projects Data
const projects = [
  {
    title: "Real Time Chat App",
    description:
      "Built a real-time chat application using MERN stack and WebSockets.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/projects/project1.png",
    github: "https://github.com/Mukesh-1320/Chat-App",
    live: "https://chat-app-orcin-mu-19.vercel.app/login",
  },
  {
    title: "Tour and Travel",
    description:
      "Responsive travel website with modern UI and smooth experience.",
    tech: ["HTML/CSS", "Bootstrap", "JavaScript"],
    image: "/projects/project2.png",
    github: "https://github.com/Mukesh-1320/Tour.github.io",
    live: "https://mukesh-1320.github.io/Tour.github.io/",
  },
  {
    title: "Portfolio Website",
    description: "Modern animated portfolio with responsive design.",
    tech: ["React.js", "Tailwind", "Framer Motion"],
    image: "/projects/project3.png",
    github: "https://github.com/Mukesh-1320/My-Portfolio",
    live: "https://my-portfolio-pi-six-ot0npg87dk.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">

      {/*  Background */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 to-blue-500/10 blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/*  Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent works showcasing full-stack development
            and modern UI.
          </p>
        </motion.div>

        {/*  Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={idx}
              className="group rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-primary/40 transition duration-300"
            >
              
              {/* 🖼 Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
                />

                {/*  Desktop Overlay */}
                <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 items-center justify-center gap-4 transition duration-300">
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full hover:scale-110 transition"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full hover:scale-110 transition"
                  >
                    <ExternalLink size={18} />
                  </a>

                </div>
              </div>

              {/* 📱 Mobile Buttons */}
              <div className="flex md:hidden justify-center gap-4 mt-4 px-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div>

              {/*  Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/*  Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};