import { useRef } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { Briefcase } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const experiences = [
  {
    period: "2025 – Present",
    role: "Full Stack Developer",
    company: "PnInfosys",
    description:
      "Develop and maintain full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Build and consume RESTful APIs to enable seamless communication between frontend and backend systems.",
    technologies: ["ReactJs", "JavaScript", "NodeJs", "MongoDb", "TailwindCss"],
    current: true,
  },
  {
    period: "Apr 2023 – Jul 2023",
    role: "Web Designer",
    company: "PnInfosys",
    description:
      "Built and maintained multiple frontend web applications using HTML, CSS, JavaScript, and Bootstrap.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    current: false,
  },
];

const Period = ({ exp }) => (
  <>
    <span className="text-sm font-medium text-foreground">{exp.period}</span>
    {exp.current && (
      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Current role
      </span>
    )}
  </>
);

export const Experience = () => {
  const timelineRef = useRef(null);

  // The teal line fills in as you scroll down the timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="experience"
        className="py-24 md:py-32 relative overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute top-1/2 -left-24 w-md h-112 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-16 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <motion.h2
              variants={item}
              className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-foreground"
            >
              Where I&apos;ve worked,
              <span className="block bg-linear-to-r from-primary to-highlight bg-clip-text text-transparent">
                and what I built there.
              </span>
            </motion.h2>

            <motion.p
              variants={item}
              className="text-muted-foreground leading-relaxed max-w-md lg:justify-self-end"
            >
              A timeline of my professional growth as a full-stack developer,
              building modern and scalable applications.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative max-w-4xl">
            {/* Rail */}
            <div
              className="absolute top-0 bottom-0 left-1.5 md:left-44 w-px bg-border"
              aria-hidden="true"
            >
              <motion.div
                style={{ scaleY: progress }}
                className="h-full w-full origin-top bg-linear-to-b from-primary to-highlight"
              />
            </div>

            <div className="space-y-10">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.role + exp.period}
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative pl-8 md:pl-0 md:grid md:grid-cols-[11rem_1fr]"
                >
                  {/* Dot on the rail */}
                  <span
                    className={`absolute top-6 left-1.5 md:left-44 z-10 w-3.5 h-3.5 -translate-x-1/2 rounded-full ring-4 ring-background ${
                      exp.current
                        ? "bg-primary"
                        : "bg-card border-2 border-primary"
                    }`}
                  >
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary opacity-60 animate-ping motion-reduce:animate-none" />
                    )}
                  </span>

                  {/* Period: left column on laptops */}
                  <div className="hidden md:flex md:flex-col md:items-end pr-10 pt-5 text-right">
                    <Period exp={exp} />
                  </div>

                  {/* Card */}
                  <div className="md:pl-10">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 md:p-7 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-[border-color,box-shadow] duration-300"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute top-0 left-0 h-0.5 w-0 bg-linear-to-r from-primary to-highlight transition-all duration-500 group-hover:w-full"
                      />

                      {/* Period: inside the card on phones */}
                      <div className="md:hidden mb-4 flex flex-wrap items-center gap-3">
                        <Period exp={exp} />
                      </div>

                      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>

                      <p className="mt-1.5 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                        <Briefcase size={15} className="text-primary" />
                        {exp.company}
                      </p>

                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ y: -3 }}
                            className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
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
    </MotionConfig>
  );
};