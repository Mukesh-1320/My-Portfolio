"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// 🔥 Animation
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

// 🔗 Social Links (ADD YOUR REAL LINKS)
const socialLinks = [
  { icon: FaGithub, href: "https://github.com/", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/", label: "Twitter" },
];

// 📄 Footer Links
const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-1/2 w-125 h-75 bg-primary/10 blur-3xl -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* 🔥 Top Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 items-center mb-12"
        >
          
          {/* 🧑‍💻 Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Mukesh<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Full Stack Developer building scalable and modern web applications.
            </p>
          </div>

          {/* 🔗 Navigation */}
          <div className="flex justify-center flex-wrap gap-6">
            {footerLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                variants={fadeUp}
                custom={i}
                className="text-sm text-muted-foreground hover:text-primary transition"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* 🌐 Social */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:text-primary transition"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

        </motion.div>

        {/* 🔥 Bottom Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={3}
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mukesh Kumar. All rights reserved.
          </p>

          <p className="text-xs text-muted-foreground">
            Built with ❤️ using React.js,Tailwind CSS & Framer Motion.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};