"use client";

import { motion } from "framer-motion";

// 🔥 Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// 🔥 Experience Data
const experiences = [
  {
    period: "2025 — Present",
    role: "Full Stack Developer",
    company: "PnInfosys",
    description:
      "Develop and maintain full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Build and consume RESTful APIs to enable seamless communication between frontend and backend systems.",
    technologies: ["ReactJs", "JavaScript", "NodeJs", "MongoDb", "TailwindCss"],
    current: true,
  },
  {
    period: "Apr 2023 — Jul 2023",
    role: "Web Designer",
    company: "PnInfosys",
    description:
      "Built and maintained multiple frontend web applications using HTML, CSS, JavaScript, and Bootstrap.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      
      {/* 🌈 Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 🔥 Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="max-w-3xl mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            Experience that{" "}
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
              speaks volumes
            </span>
          </h2>

          <p className="text-muted-foreground">
            A timeline of my professional growth as a full-stack developer,
            building modern and scalable applications.
          </p>
        </motion.div>

        {/* 🔥 Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary via-primary/40 to-transparent md:-translate-x-1/2 animate-pulse"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={idx}
                className="relative grid md:grid-cols-2 gap-8"
              >
                
                {/* 🔵 Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></span>
                  )}
                </div>

                {/* 📄 Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 hover:border-primary/40 p-6 rounded-2xl transition duration-300 hover:shadow-xl hover:shadow-primary/10"
                  >
                    {/* Period */}
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    {/* Role */}
                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <p className="text-muted-foreground">{exp.company}</p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    {/* Tech Stack */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};