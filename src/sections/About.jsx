import { Code2, Lightbulb, Plug, Rocket } from "lucide-react";
import { MotionConfig, motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Gradient text that slides when the parent card is hovered
const gradientText =
  "bg-linear-to-r from-primary to-highlight bg-clip-text text-transparent bg-size-[200%_auto] bg-position-[0%_50%] group-hover:bg-position-[100%_50%] transition-[background-position] duration-700";

const layers = [
  {
    name: "Interface",
    note: "What people see and use",
    tech: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "API",
    note: "How the app talks to its data",
    tech: ["Node.js", "Express", "REST"],
  },
  {
    name: "Data",
    note: "Where everything is stored",
    tech: ["MongoDB", "PostgreSQL"],
  },
];

const smallCards = [
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing applications for speed, scalability, and efficiency.",
  },
  {
    icon: Plug,
    title: "API and integration",
    description:
      "Designing and integrating secure REST APIs and third-party services.",
  },
];

/**
 * Simple card: lifts slightly on hover, border turns teal,
 * and an accent line grows across the top.
 */
const FancyCard = ({ children, className = "", padding = "p-6" }) => (
  <motion.div variants={item} className={className}>
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative h-full overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-[border-color,box-shadow] duration-300"
    >
      {/* Accent line that grows across the top on hover */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 h-0.5 w-0 bg-linear-to-r from-primary to-highlight transition-all duration-500 group-hover:w-full"
      />
      <div className={padding}>{children}</div>
    </motion.div>
  </motion.div>
);

const IconBox = ({ icon: Icon }) => (
  <div className="w-12 h-12 shrink-0 rounded-xl bg-linear-to-br from-primary to-highlight text-primary-foreground grid place-items-center shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
    <Icon className="w-6 h-6" />
  </div>
);

export const About = () => {
  return (
    <MotionConfig reducedMotion="user">
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background glows */}
        <div
          className="absolute -top-24 -left-24 w-md h-112 rounded-full bg-primary/10 blur-3xl -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-highlight/10 blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">
            {/* LEFT: story */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-8 lg:sticky lg:top-28"
            >
              <motion.h2
                variants={item}
                className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-foreground"
              >
                I build complete products,
                <span className="block bg-linear-to-r from-primary to-highlight bg-clip-text text-transparent">
                  from the first screen to the last database query.
                </span>
              </motion.h2>

              <motion.div
                variants={item}
                className="space-y-4 text-muted-foreground leading-relaxed max-w-xl"
              >
                <p>
                  I&apos;m a full-stack developer and MCA graduate with a strong
                  interest in building scalable, efficient web applications.
                </p>
                <p>
                  I work with React.js, Next.js, TypeScript, Node.js, Express
                  and MongoDB, creating modern interfaces together with secure
                  backend systems and APIs.
                </p>
                <p>
                  I enjoy solving real-world problems, learning new
                  technologies and improving my skills every week.
                </p>
              </motion.div>

              <motion.blockquote
                variants={item}
                className="border-l-2 border-primary pl-6 max-w-xl"
              >
                <p className="font-serif italic text-xl md:text-2xl leading-snug text-foreground">
                  My goal is to build scalable, user-friendly applications that
                  pair powerful backends with beautiful frontends.
                </p>
              </motion.blockquote>
            </motion.div>

            {/* RIGHT: cards */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid sm:grid-cols-2 gap-4 md:gap-5"
            >
              {/* Featured card */}
              <FancyCard className="sm:col-span-2" padding="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <IconBox icon={Code2} />
                  <div>
                    <h3 className={`text-xl font-semibold ${gradientText}`}>
                      Full-stack development
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 max-w-md">
                      Complete web applications, from frontend interfaces to
                      backend APIs and databases.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  {layers.map((layer, i) => (
                    <div key={layer.name} className="relative pl-8">
                      {/* Pulsing dot */}
                      <span className="absolute left-0 top-1.5 flex w-3 h-3">
                        <span
                          className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-50 animate-ping motion-reduce:animate-none"
                          style={{ animationDelay: `${i * 0.6}s` }}
                        />
                        <span className="relative inline-flex w-3 h-3 rounded-full bg-primary" />
                      </span>

                      {/* Line that draws down to the next layer */}
                      {i < layers.length - 1 && (
                        <motion.span
                          aria-hidden="true"
                          className="absolute left-1.25 top-6 -bottom-6 w-px origin-top bg-linear-to-b from-primary to-border"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: 0.4 + i * 0.3,
                            ease: "easeOut",
                          }}
                        />
                      )}

                      <div className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-semibold text-foreground">
                          {layer.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {layer.note}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-2.5">
                        {layer.tech.map((t) => (
                          <motion.span
                            key={t}
                            whileHover={{ y: -3 }}
                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted text-foreground border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </FancyCard>

              {/* Small cards */}
              {smallCards.map((card) => (
                <FancyCard key={card.title}>
                  <IconBox icon={card.icon} />
                  <h3
                    className={`text-lg font-semibold mt-5 mb-1.5 ${gradientText}`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </FancyCard>
              ))}

              {/* Wide card */}
              <FancyCard className="sm:col-span-2">
                <div className="flex items-center gap-5">
                  <IconBox icon={Lightbulb} />
                  <div>
                    <h3 className={`text-lg font-semibold ${gradientText}`}>
                      Problem solving
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Solving real-world problems with clean, efficient
                      solutions.
                    </p>
                  </div>
                </div>
              </FancyCard>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};