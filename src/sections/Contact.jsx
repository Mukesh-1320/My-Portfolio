import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MotionConfig, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  CheckCircle,
  Copy,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mk8520889@gmail.com",
    href: "mailto:mk8520889@gmail.com",
    copy: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9752688097",
    href: "tel:9752688097",
    copy: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gwalior, MP",
    href: null,
    copy: false,
  },
];

const inputClass =
  "w-full rounded-lg bg-background border border-border px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-[border-color,box-shadow] duration-200 focus:border-primary focus:ring-4 focus:ring-primary/15";

const InfoIcon = ({ icon: Icon }) => (
  <div className="w-11 h-11 shrink-0 rounded-xl bg-linear-to-br from-primary to-highlight text-primary-foreground grid place-items-center shadow-md shadow-primary/25 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
    <Icon className="w-5 h-5" />
  </div>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });
  const [copied, setCopied] = useState("");

  const handleChange = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleCopy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 1800);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

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
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
        {/* Background glows */}
        <div
          className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-highlight/10 blur-3xl -z-10"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            {/* LEFT: message and contact details */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8 lg:sticky lg:top-28"
            >
              <motion.h2
                variants={item}
                className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-foreground"
              >
                Have a project in mind,
                <span className="block bg-linear-to-r from-primary to-highlight bg-clip-text text-transparent">
                  let&apos;s build it together.
                </span>
              </motion.h2>

              <motion.p
                variants={item}
                className="text-muted-foreground leading-relaxed max-w-md"
              >
                Send me a message about your project, team or idea and
                I&apos;ll get back to you.
              </motion.p>

              <motion.div
                variants={item}
                className="inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-sm font-medium text-foreground"
              >
                <span className="relative flex w-2.5 h-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping motion-reduce:animate-none" />
                  <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-green-500" />
                </span>
                Available for freelance and full-time opportunities
              </motion.div>

              {/* Contact details */}
              <div className="space-y-3 max-w-md">
                {contactInfo.map((info) => {
                  const Wrapper = info.href ? "a" : "div";
                  const wrapperProps = info.href ? { href: info.href } : {};

                  return (
                    <motion.div
                      key={info.label}
                      variants={item}
                      className="group flex items-center gap-4 rounded-2xl bg-card border border-border p-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-[border-color,box-shadow] duration-300"
                    >
                      <InfoIcon icon={info.icon} />

                      <Wrapper {...wrapperProps} className="min-w-0 flex-1">
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </Wrapper>

                      {info.copy && (
                        <button
                          type="button"
                          onClick={() => handleCopy(info.value, info.label)}
                          aria-label={`Copy ${info.label.toLowerCase()}`}
                          className="p-2.5 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          {copied === info.label ? (
                            <Check size={18} className="text-primary" />
                          ) : (
                            <Copy size={18} />
                          )}
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT: compact form card */}
            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="relative w-full max-w-md lg:justify-self-end overflow-hidden rounded-2xl bg-card border border-border p-5 md:p-6 glow-border"
            >
              {/* Accent line across the top */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-primary to-highlight"
              />

              <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                Send me a message
              </h3>

              <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block mb-1.5 text-sm font-medium text-foreground"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange("name")}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block mb-1.5 text-sm font-medium text-foreground"
                  >
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange("email")}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block mb-1.5 text-sm font-medium text-foreground"
                  >
                    Your message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    value={formData.message}
                    onChange={handleChange("message")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-[transform,box-shadow] duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                    </>
                  )}
                </button>

                {/* Status message */}
                <div aria-live="polite">
                  {submitStatus.type && (
                    <div
                      className={`flex items-start gap-3 rounded-lg p-3 text-sm ${
                        submitStatus.type === "success"
                          ? "bg-green-500/10 text-green-700 dark:text-green-400"
                          : "bg-red-500/10 text-red-700 dark:text-red-400"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="w-5 h-5 shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 shrink-0" />
                      )}
                      <p>{submitStatus.message}</p>
                    </div>
                  )}
                </div>
              </form>

              <p className="mt-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                Prefer email?
                <a
                  href="mailto:mk8520889@gmail.com"
                  className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                >
                  Write to me directly
                  <ArrowUpRight size={14} />
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};