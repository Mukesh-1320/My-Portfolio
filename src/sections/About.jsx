"use client";

import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

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

// 🔥 Highlights (Full-Stack Focused)
const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building complete web applications from frontend interfaces to backend APIs.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing applications for speed, scalability, and efficiency.",
  },
  {
    icon: Users,
    title: "API & Integration",
    description:
      "Designing and integrating secure REST APIs and third-party services.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Solving real-world problems with clean and efficient solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      
      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 blur-3xl opacity-30 -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            
            {/* About Tag */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
            >
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
            >
              Building complete solutions,
              <span className="italic text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
                {" "}from frontend to backend
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
              className="space-y-4 text-muted-foreground"
            >
              <p>
                I'm a passionate full-stack developer and MCA graduate with a strong
                interest in building scalable and efficient web applications.
              </p>

              <p>
                I specialize in React.js, Next.js, TypeScript, Node.js, Express,
                and MongoDB — building modern user interfaces along with secure
                backend systems and APIs.
              </p>

              <p>
                I enjoy solving real-world problems, learning new technologies,
                and continuously improving my skills.
              </p>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={4}
              className="relative rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-primary/40 transition duration-300"
            >
              <p className="text-lg italic text-foreground">
                "My goal is to build scalable and user-friendly applications —
                combining powerful backend systems with beautiful frontends."
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE (CARDS) */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={idx}
                className="group p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};