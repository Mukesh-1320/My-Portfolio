"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
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

// 🔥 Testimonials Data
const testimonials = [
  {
    quote:
      "Mukesh is a highly skilled full-stack developer who builds scalable and efficient applications. His attention to detail is outstanding.",
    author: "Client Name",
    role: "Project Manager",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Mukesh was a great experience. He delivers clean code and ensures high performance in every project.",
    author: "Team Lead",
    role: "Software Company",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Mukesh combines strong frontend and backend skills to deliver complete solutions. Highly recommended!",
    author: "Startup Founder",
    role: "Tech Startup",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

// 🔥 Component
export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-125 h-125 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* 🔥 Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium tracking-wider uppercase text-primary">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 tracking-tight">
            What people{" "}
            <span className="italic text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
              say about me
            </span>
          </h2>
        </motion.div>

        {/* 🔥 Carousel */}
        <div className="max-w-4xl mx-auto relative">

          {/* Main Card */}
          <motion.div
            key={activeIdx}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-lg"
          >
            {/* Quote Icon */}
            <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Quote Text */}
            <motion.blockquote
              key={activeIdx}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-6"
            >
              "{testimonials[activeIdx].quote}"
            </motion.blockquote>

            {/* Author */}
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <img
                src={testimonials[activeIdx].avatar}
                alt={testimonials[activeIdx].author}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
              />
              <div>
                <p className="font-semibold">
                  {testimonials[activeIdx].author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[activeIdx].role}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* 🔥 Navigation */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={2}
            className="flex items-center justify-center gap-6 mt-10"
          >
            {/* Prev */}
            <button
              onClick={previous}
              className="p-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:scale-110 transition"
            >
              <ChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIdx
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="p-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:scale-110 transition"
            >
              <ChevronRight />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};