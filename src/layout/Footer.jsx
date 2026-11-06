import { MotionConfig, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Update these with your real links
const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Mukesh-1320", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mukeshkumar1320/",
    label: "LinkedIn",
  },
  { icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <MotionConfig reducedMotion="user">
      <footer className="relative overflow-hidden border-t border-border pt-20">
        {/* Background glow */}
        <div
          className="absolute -top-24 left-1/2 w-xl h-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Top section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr]"
          >
            {/* Brand */}
            <motion.div variants={item} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-linear-to-br from-primary to-highlight text-primary-foreground font-display font-bold text-xl shadow-lg shadow-primary/25">
                  M
                </span>
                <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                  Mukesh Kumar
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Full-stack developer building scalable, modern web applications
                from the interface to the database.
              </p>

              <div className="inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-sm font-medium text-foreground">
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping motion-reduce:animate-none" />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-500" />
                </span>
                Available for new opportunities
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.nav variants={item} aria-label="Footer">
              <h3 className="mb-5 font-display font-semibold text-foreground">
                Explore
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Connect */}
            <motion.div variants={item}>
              <h3 className="mb-5 font-display font-semibold text-foreground">
                Connect
              </h3>

              <a
                href="mailto:mk8520889@gmail.com"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail size={16} className="text-primary" />
                mk8520889@gmail.com
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <div className="mt-5 flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -4 }}
                    className="p-3 rounded-full glass text-foreground/80 transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Large name that fades out at the bottom */}
          <div
            aria-hidden="true"
            className="mt-16 select-none overflow-hidden text-center font-display font-bold leading-[0.85] whitespace-nowrap text-[13vw] text-transparent [-webkit-text-stroke:1.5px_var(--color-primary)] opacity-40"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 25%, transparent 90%)",
              maskImage: "linear-gradient(to bottom, #000 25%, transparent 90%)",
            }}
          >
            Mukesh Kumar
          </div>

          {/* Bottom bar */}
          <div className="relative z-10 flex flex-col items-center justify-between gap-4 border-t border-border py-6 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mukesh Kumar. All rights reserved.
            </p>

            <p className="text-xs text-muted-foreground">
              Built with React, Tailwind CSS and Framer Motion.
            </p>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="group inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Back to top
              <ArrowUp
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
};