import { MotionConfig, motion } from "framer-motion";
import {
  Building2,
  Calendar,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const education = [
  {
    level: "Master's degree",
    degree: "Master of Computer Applications (MCA)",
    institution: "University Institute of Technology, RGPV",
    status: "Graduated 2026",
    description:
      "Completed my MCA with a specialization in software development, web technologies, database management systems and computer networks.",
    focus: [
      "Software Development",
      "Web Technologies",
      "Database Management",
      "Computer Networks",
    ],
  },
  {
    level: "Bachelor's degree",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Prestige Institute of Management, Gwalior",
    period: "2018 – 2021",
    status: "Graduated 2021",
    description:
      "Studied programming fundamentals, mathematics and core computer science concepts.",
    focus: ["Programming", "Mathematics", "Computer Science"],
  },
];

export const Education = () => {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="education"
        className="py-24 md:py-32 relative overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute bottom-0 -left-24 w-96 h-96 rounded-full bg-highlight/10 blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Heading */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"
          >
            <motion.h2
              variants={item}
              className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-foreground"
            >
              Where I studied,
              <span className="block bg-linear-to-r from-primary to-highlight bg-clip-text text-transparent">
                and the skills I built there.
              </span>
            </motion.h2>
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {education.map((edu) => (
              <motion.article key={edu.degree} variants={item}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card border border-border p-6 md:p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-[border-color,box-shadow] duration-300"
                >
                  {/* Accent line that grows across the top on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-0.5 w-0 bg-linear-to-r from-primary to-highlight transition-all duration-500 group-hover:w-full"
                  />

                  {/* Large faint icon in the corner */}
                  <GraduationCap
                    aria-hidden="true"
                    className="absolute -right-6 -bottom-6 w-40 h-40 rotate-12 text-primary/5 transition-colors duration-500 group-hover:text-primary/10"
                  />

                  <div className="relative flex flex-1 flex-col">
                    {/* Top row: icon and tags */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-linear-to-br from-primary to-highlight text-primary-foreground grid place-items-center shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                        <GraduationCap className="w-6 h-6" />
                      </div>

                      <div className="flex flex-wrap justify-end gap-2">
                        <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                          {edu.level}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          <CheckCircle2 size={14} />
                          Completed
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-6 font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>

                    <p className="mt-2 inline-flex items-start gap-2 text-sm font-medium text-muted-foreground">
                      <Building2
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      {edu.institution}
                    </p>

                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Subjects */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {edu.focus.map((subject) => (
                        <motion.span
                          key={subject}
                          whileHover={{ y: -3 }}
                          className="rounded-md border border-border bg-muted px-2.5 py-1 text-xs font-medium text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                        >
                          {subject}
                        </motion.span>
                      ))}
                    </div>

                    {/* Period and graduation */}
                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-border pt-5 text-sm text-muted-foreground">
                        <Calendar size={16} className="text-primary" />
                        <span className="font-medium text-foreground">
                          {edu.period}
                        </span>
                        <span>({edu.duration})</span>
                        <span className="ml-auto font-medium text-primary">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};