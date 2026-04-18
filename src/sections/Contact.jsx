"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

// 🔥 Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
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

// 🔥 Contact Info
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mk8520889@gmail.com",
    href: "mailto:mk8520889@gmail.com", // ✅ FIXED
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9752688097",
    href: "tel:9752688097", // ✅ FIXED
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gwalior, MP",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error("EmailJS error:", error); // ✅ FIXED

      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* 🔥 Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's build{" "}
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
              something great
            </span>
          </h2>

          <p className="text-muted-foreground">
            Have a project in mind? Send me a message and let's work together.
          </p>
        </motion.div>

        {/* 🔥 Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* 📝 FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your name..."
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none"
              />

              <input
                type="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none"
              />

              <textarea
                rows={5}
                placeholder="Your message..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none"
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {/* Status */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

            </form>
          </motion.div>

          {/* 📞 CONTACT INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={3}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="backdrop-blur-xl bg-white/5 p-8 rounded-3xl border border-white/10">
              <p className="text-sm text-muted-foreground">
                🚀 Available for freelance & full-time opportunities.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};