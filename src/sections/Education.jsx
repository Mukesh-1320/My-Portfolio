import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University Institute of Technology, RGPV",
    period: "2023 - 2026",
    description:
      "Specialized in Software Development, Web Technologies, Database Management Systems, and Computer Networks.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Prestige Institute of Management, Gwalior",
    period: "2018 - 2021",
    description:
      "Studied programming fundamentals, mathematics, and computer science concepts.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-wider">
            Education
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mt-4">
            Academic{" "}
            <span className="italic text-blue-500">Journey</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">
                    {item.degree}
                  </h3>

                  <p className="text-primary mt-1">
                    {item.institution}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {item.period}
                  </div>

                  <p className="mt-4 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};